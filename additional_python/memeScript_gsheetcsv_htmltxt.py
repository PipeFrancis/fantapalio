# Questo prende il csv dei meme downloaddato dal foglio apposito, ha dentro tutti i bonus meme (nome, descrizione, valore). Genera le linee js da mettere in data.js, genera html da copiare in updates_page, genera un txt da copiare su canva nella storia dei Meme. La versione senza _htmltxt non fa queste ultime 2 cose.


import csv

def is_valid_line(row):
    if len(row) < 2:
        return False
    game = row[0].strip().upper()
    if not game.startswith(('G', 'SEMI', 'TD3', 'FINAL')):
        return False
    if "Nome" in row[1] or not row[1].strip(): 
        return False
    return True

def format_player_identifier(name):
    """Formats player name into JavaScript variable (e.g., 'Ma Mo' -> MaMo26)"""
    clean = name.replace('\u00A0', ' ').replace('\xa0', ' ').strip()
    return ''.join(word.capitalize() for word in clean.split()) + "26"

def normalize_game_code(label):
    """Normalizes the game tag for the function parameter (e.g., 'G1' -> 'g1')"""
    return label.strip().lower()

COACH_VAR_MAP = { # lo script li tratta come players quindi ci attacca il 26 dietro, con questo fa lo swap e capisce che finisce la squadra
    "AlessandroZamparini26": "NORD26",   
    "MisterJ26": "EST26",  
    "MisterX26": "SUD26",  
    "AlessandroDiGiusto26": "WEST26"  
}

# Order of teams assigned per game as coaches are encountered
TEAMS_SEQUENCE = ["NORD", "SUD", "EST", "WEST"]

def process_row_meme_stats(row, current_team):
    player_raw = row[1].strip()
    player_var = format_player_identifier(player_raw)
    game_code = normalize_game_code(row[0])
    
    if player_var in COACH_VAR_MAP:
        func_name = "addMemeStatCoach"
        target_var = COACH_VAR_MAP[player_var]
        display_name = f"Coach {player_raw}"
    else:
        func_name = "addMemeStat"
        target_var = player_var
        display_name = player_raw

    js_lines = []
    memory_records = []
    stat_starts = [3, 6, 9, 13, 17, 21, 25, 28, 31]
    
    for idx in stat_starts:
        if idx + 2 < len(row):
            stat_type = row[idx].strip()
            stat_desc = row[idx + 1].strip()
            raw_val = row[idx + 2].strip()
            
            if stat_type and stat_desc:
                try:
                    val = int(raw_val)
                    cap_type = stat_type.capitalize()
                    cap_desc = stat_desc.capitalize()
                    
                    clean_type = cap_type.replace('"', '\\"')
                    clean_desc = cap_desc.replace('"', '\\"')
                    
                    # 1. Generate JS Line
                    line = f'{func_name}({target_var},"{game_code}","{clean_type}","{clean_desc}",{val});'
                    js_lines.append(line)
                    
                    # 2. Memory Record Object
                    record = {
                        "game": game_code,
                        "player_raw": display_name,
                        "player_var": player_var,
                        "target_var": target_var,
                        "team": current_team,
                        "stat_type": cap_type,
                        "stat_desc": cap_desc,
                        "val": val
                    }
                    memory_records.append(record)
                except ValueError:
                    pass
                
    return js_lines, memory_records

def build_game_html(game_records):
    """Generates the HTML block for a single game adhering to the new 3-category formatting rules."""
    html = ['<h3 class="orange_text">PUNTI MEME:</h3>\n']
    
    # Group stats by description key (upper-case for matching)
    grouped = {}
    for rec in game_records:
        desc_key = rec["stat_desc"].upper()
        grouped.setdefault(desc_key, []).append(rec)
        
    def format_multiplier(count):
        return f" x{count}" if count > 1 else ""

    # Helper to clean/pop matched keys safely
    def pop_matching_keys(substring):
        matched = [k for k in grouped if substring in k]
        records_list = []
        for k in matched:
            records_list.extend(grouped.pop(k))
        return records_list

    # ==========================================
    # PRIORITY 1: INGRESSO IN CAMPO (Category 1)
    # ==========================================
    ingresso_recs = pop_matching_keys("INGRESSO IN CAMPO")
    if ingresso_recs:
        html.append('ENTRATA IN CAMPO\n<br>')
        for r in ingresso_recs:
            sign = "+" if r["val"] >= 0 else ""
            html.append(f'<span class="orange_text">{sign}{r["val"]}</span> a {r["player_raw"]}\n<br>')
        html.append('\n<br>')

    # ==========================================
    # PRIORITY 2: BIRRA IN PANCHINA (Category 3)
    # ==========================================
    panca_recs = pop_matching_keys("BIRRA IN PANCHINA") or pop_matching_keys("BIRRA IN PANCA")
    if panca_recs:
        # Title uses +1 base value
        html.append('BIRRA IN PANCHINA (<span class="orange_text">+1</span>)\n<br>')
        
        team_groups = {}
        for r in panca_recs:
            team_groups.setdefault(r["team"], []).append(r)
            
        for team in TEAMS_SEQUENCE:
            if team in team_groups:
                html.append(f'- {team} -\n<br>')
                for r in team_groups[team]:
                    mult = format_multiplier(r["val"])
                    html.append(f'{r["player_raw"]}{mult}\n<br>')
        html.append('\n<br>')

    # ==========================================
    # PRIORITY 3: INTERVISTA PAGINA INSTAGRAM (Category 2)
    # ==========================================
    intervista_recs = pop_matching_keys("INTERVISTA")
    if intervista_recs:
        val_tag = intervista_recs[0]["val"] if intervista_recs else 3
        sign = "+" if val_tag >= 0 else ""
        html.append(f'INTERVISTA PAGINA INSTAGRAM (<span class="orange_text">{sign}{val_tag}</span>)\n<br>')
        for r in intervista_recs:
            html.append(f'{r["player_raw"]}\n<br>')
        html.append('\n<br>')

    # ==========================================
    # PRIORITY 4: BIRRA OFFERTA AL FANTASTAFF (Category 3)
    # ==========================================
    offerta_recs = pop_matching_keys("BIRRA OFFERTA")
    if offerta_recs:
        # Base unit is +3
        html.append('BIRRA OFFERTA AL FANTA STAFF (<span class="orange_text">+3</span>)\n<br>')
        for r in offerta_recs:
            count = r["val"] // 3 if r["val"] >= 3 else r["val"]
            mult = format_multiplier(count)
            html.append(f'{r["player_raw"]}{mult}\n<br>')
        html.append('\n<br>')

    # ==========================================
    # PRIORITY 5: UNDER (Category 2)
    # ==========================================
    under_recs = pop_matching_keys("UNDER")
    if under_recs:
        val_tag = under_recs[0]["val"] if under_recs else 2
        sign = "+" if val_tag >= 0 else ""
        html.append(f'BONUS UNDER (<span class="orange_text">{sign}{val_tag}</span>)\n<br>')
        for r in under_recs:
            html.append(f'{r["player_raw"]}\n<br>')
        html.append('\n<br>')

    # ==========================================
    # PRIORITY 6: OVER (Category 1)
    # ==========================================
    over_recs = pop_matching_keys("OVER")
    if over_recs:
        html.append('BONUS OVER\n<br>')
        for r in over_recs:
            sign = "+" if r["val"] >= 0 else ""
            html.append(f'{r["player_raw"]} <span class="orange_text">{sign}{r["val"]}</span>\n<br>')
        html.append('\n<br>')

    # ==========================================
    # PRIORITY 7: ALL OTHERS (Default Category 2)
    # ==========================================
    for key, recs in list(grouped.items()):
        val_tag = recs[0]["val"] if recs else 1
        sign = "+" if val_tag >= 0 else ""
        html.append(f'{key} (<span class="orange_text">{sign}{val_tag}</span>)\n<br>')
        for r in recs:
            # Category 2 rule: Just player names without multipliers
            html.append(f'{r["player_raw"]}\n<br>')
        html.append('\n<br>')

    return "".join(html)


def convert_csv_to_js(input_file, output_js_file, output_html_file, output_txt_file):
    all_memory_records = []
    
    with open(input_file, encoding='utf-8-sig', newline='') as csvfile, \
         open(output_js_file, 'w', encoding='utf-8') as jsfile:
        
        reader = csv.reader((line.replace('\u00A0', ' ') for line in csvfile))
        prev_game = None
        team_idx = 0
        
        for row in reader:
            if is_valid_line(row):
                current_game = row[0].strip().lower()
                
                # Reset game spacing & team tracking per new game block
                if current_game != prev_game:
                    if prev_game is not None:
                        jsfile.write("\n")
                    jsfile.write(f"// Game: {current_game}\n")
                    team_idx = 0
                
                current_team = TEAMS_SEQUENCE[team_idx % len(TEAMS_SEQUENCE)]
                
                # Process line
                generated_lines, records = process_row_meme_stats(row, current_team)
                
                # Write JS output
                for line in generated_lines:
                    jsfile.write(line + "\n")
                
                # Append to central memory
                all_memory_records.extend(records)
                
                # If player processed was a coach, advance to next team block
                player_var = format_player_identifier(row[1])
                if player_var in COACH_VAR_MAP:
                    team_idx += 1
                    
                prev_game = current_game

    # --- HTML Output Generation ---
    # Group records by game
    records_by_game = {}
    for r in all_memory_records:
        records_by_game.setdefault(r["game"], []).append(r)

    full_html = []
    full_text = []

    for game, recs in records_by_game.items():
        game_html = build_game_html(recs)
        full_html.append(f"<!-- GAME: {game.upper()} -->\n" + game_html)
        
        # Plain text version stripping tags
        plain_text = game_html.replace('<span class="orange_text">', '').replace('</span>', '').replace('\n<br>', '\n').replace('<h3 class="orange_text">', '').replace('</h3>', '')
        full_text.append(f"=== GAME: {game.upper()} ===\n" + plain_text)

    # Save HTML file
    with open(output_html_file, 'w', encoding='utf-8') as html_f:
        html_f.write("\n<hr>\n".join(full_html))

    # Save Text file
    with open(output_txt_file, 'w', encoding='utf-8') as txt_f:
        txt_f.write("\n\n".join(full_text))

    print(f"✅ Successfully wrote JS file: {output_js_file}")
    print(f"✅ Successfully wrote HTML file: {output_html_file}")
    print(f"✅ Successfully wrote Text file: {output_txt_file}")

# Example execution
convert_csv_to_js(
    input_file="MEMEstats_players26.csv",
    output_js_file="StatsMEME_script_output.js",
    output_html_file="MemeBonuses_output.html",
    output_txt_file="MemeBonuses_output.txt"
)