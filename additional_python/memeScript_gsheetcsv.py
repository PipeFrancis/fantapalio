import csv

def is_valid_line(row):
    if len(row) < 2:
        return False
    game = row[0].strip().upper()
    if not game.startswith(('G', 'SEMI', 'TD3', 'FINAL')):
        return False
    # Skip header or empty player names
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

# Map coach identifiers to their custom JS target variable
COACH_VAR_MAP = {
    "AlessandroZamparini26": "NORD26",   
    "MisterJ26": "EST26",  
    "MisterX26": "SUD26",  
    "AlessandroDiGiusto26": "WEST26"  
}

def process_row_meme_stats(row):
    player_var = format_player_identifier(row[1])
    game_code = normalize_game_code(row[0])
    
    # Check if player is a coach and resolve function & target variable
    if player_var in COACH_VAR_MAP:
        func_name = "addMemeStatCoach"
        target_var = COACH_VAR_MAP[player_var]
    else:
        func_name = "addMemeStat"
        target_var = player_var

    js_lines = []
    stat_starts = [3, 6, 9, 13, 17, 21, 25, 28, 31]
    
    for idx in stat_starts:
        if idx + 2 < len(row):
            stat_type = row[idx].strip()
            stat_desc = row[idx + 1].strip()
            raw_val = row[idx + 2].strip()
            
            if stat_type and stat_desc:
                try:
                    val = int(raw_val)
                    
                    # Capitalize only the very first letter of the string
                    cap_type = stat_type.capitalize()
                    cap_desc = stat_desc.capitalize()
                    
                    # Escape internal double quotes
                    clean_type = cap_type.replace('"', '\\"')
                    clean_desc = cap_desc.replace('"', '\\"')
                    
                    line = f'{func_name}({target_var},"{game_code}","{clean_type}","{clean_desc}",{val});'
                    js_lines.append(line)
                except ValueError:
                    pass
                
    return js_lines

def convert_csv_to_js(input_file, output_file):
    top_stats = {}
    with open(input_file, encoding='utf-8-sig', newline='') as csvfile, \
         open(output_file, 'w', encoding='utf-8') as jsfile:
        
        reader = csv.reader((line.replace('\u00A0', ' ') for line in csvfile))
        prev_game = None
        
        for row in reader:
            if is_valid_line(row):
                current_game = row[0].strip().lower()
                
                # Add spacing and group headers per game
                if current_game != prev_game:
                    if prev_game is not None:
                        jsfile.write("\n")
                    jsfile.write(f"// Game: {current_game}\n")
                
                # Write all generated lines for this row
                generated_lines = process_row_meme_stats(row)
                for line in generated_lines:
                    jsfile.write(line + "\n")
                    
                prev_game = current_game

convert_csv_to_js("MEMEstats_players26.csv", "StatsMEME_script_output.js")
print(f"✅ Successfully wrote the MEME JS insert stats lines.")
