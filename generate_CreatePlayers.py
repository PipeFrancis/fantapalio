import csv

def format_variable_name(name: str) -> str:
    return ''.join(word.capitalize() for word in name.split()) + "25"

input_file = "players25_CreatePlayerScript.csv"
output_file = "CreatePlayer_calls.js"

with open(input_file, newline='', encoding='utf-8') as file:
    reader = csv.reader(file)
    lines = []
    for row in reader:
        if len(row) >= 3 and all(field.strip() for field in row):
            name = row[0].strip()
            cost = row[1].strip()
            rione = row[2].strip()
            var_name = format_variable_name(name)
            lines.append(f'const {var_name} = createPlayer("{name}", {cost}, "{rione}", 0);')

# Write all lines to the JS file
with open(output_file, 'w', encoding='utf-8') as js_file:
    js_file.write('\n'.join(lines))

print(f"✅ Successfully wrote {len(lines)} lines to {output_file}.")
