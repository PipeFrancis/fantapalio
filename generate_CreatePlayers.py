import csv

def format_variable_name(name: str) -> str:
    return ''.join(word.capitalize() for word in name.split()) + "25"

input_file = "players25_CreatePlayerScript.csv"
output_file = "CreatePlayer_calls.js"

with open(input_file, newline='', encoding='utf-8') as file:
    reader = csv.reader(file)
    player_lines = []
    player_vars = []
    for row in reader:
        if len(row) >= 3 and all(field.strip() for field in row):
            name = row[0].strip()
            number = row[1].strip()
            zone = row[2].strip()
            var_name = format_variable_name(name)
            player_vars.append(var_name)
            player_lines.append(f'const {var_name} = createPlayer("{name}", {number}, "{zone}", 0);')

# Generate the array string
player_array = "const players25 = [\n    " + ",\n    ".join(player_vars) + "\n];\n"

# Write all lines and the array to the output file
with open(output_file, 'w', encoding='utf-8') as js_file:
    js_file.write("\n".join(player_lines) + "\n\n" + player_array)

print(f"✅ Successfully wrote {len(player_lines)} player lines and the players25 array to {output_file}.")
