from pathlib import Path

FILES = [
    "src/file1.js",
    "src/file2.js",
]

REPLACEMENTS = [
    ("myArray[0]", "myArray[IDX_NAME]"),
    ("myArray[1]", "myArray[IDX_AGE]"),
]

for file_path in FILES:
    path = Path(file_path)

    content = path.read_text(encoding="utf-8")

    total_replacements = 0

    for search, replace in REPLACEMENTS:
        count = content.count(search)
        if count:
            print(f"{path}: {count} x '{search}'")
            total_replacements += count

        content = content.replace(search, replace)

    if total_replacements:
        path.write_text(content, encoding="utf-8")
        print(f"  -> wrote file ({total_replacements} replacements)")
    else:
        print(f"  -> no changes")

print("Done.")