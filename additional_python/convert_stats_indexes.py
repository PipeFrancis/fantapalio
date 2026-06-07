from pathlib import Path

FILES = [
    "./data260607_2342.js",
    "./boxscores_tab/boxscores_tab.js",
    "./meme_p_rankings/meme_p_rankings.js",
]

REPLACEMENTS = [
    ("stats_g1[0]", "stats_g1[PTS]"),
    ("stats_g1[1]", "stats_g1[T2P]"),
    ("stats_g1[2]", "stats_g1[T2PX]"),
    ("stats_g1[3]", "stats_g1[T3P]"),
    ("stats_g1[4]", "stats_g1[T3PX]"),
    ("stats_g1[5]", "stats_g1[FT]"),
    ("stats_g1[6]", "stats_g1[FTX]"),
    ("stats_g1[7]", "stats_g1[DREB]"),
    ("stats_g1[8]", "stats_g1[OREB]"),
    ("stats_g1[9]", "stats_g1[REB]"),
    ("stats_g1[10]", "stats_g1[AST]"),
    ("stats_g1[11]", "stats_g1[TO]"),
    ("stats_g1[12]", "stats_g1[STL]"),
    ("stats_g1[13]", "stats_g1[BLK]"),
    ("stats_g1[14]", "stats_g1[EXP]"),
    ("stats_g1[15]", "stats_g1[DD]"),
    ("stats_g1[16]", "stats_g1[TD]"),
    ("stats_g1[17]", "stats_g1[WIN]"),
    ("stats_g1[18]", "stats_g1[MEME]"),
    ("stats_g2[0]", "stats_g2[PTS]"),
    ("stats_g2[1]", "stats_g2[T2P]"),
    ("stats_g2[2]", "stats_g2[T2PX]"),
    ("stats_g2[3]", "stats_g2[T3P]"),
    ("stats_g2[4]", "stats_g2[T3PX]"),
    ("stats_g2[5]", "stats_g2[FT]"),
    ("stats_g2[6]", "stats_g2[FTX]"),
    ("stats_g2[7]", "stats_g2[DREB]"),
    ("stats_g2[8]", "stats_g2[OREB]"),
    ("stats_g2[9]", "stats_g2[REB]"),
    ("stats_g2[10]", "stats_g2[AST]"),
    ("stats_g2[11]", "stats_g2[TO]"),
    ("stats_g2[12]", "stats_g2[STL]"),
    ("stats_g2[13]", "stats_g2[BLK]"),
    ("stats_g2[14]", "stats_g2[EXP]"),
    ("stats_g2[15]", "stats_g2[DD]"),
    ("stats_g2[16]", "stats_g2[TD]"),
    ("stats_g2[17]", "stats_g2[WIN]"),
    ("stats_g2[18]", "stats_g2[MEME]"),
    ("stats_g3[0]", "stats_g3[PTS]"),
    ("stats_g3[1]", "stats_g3[T2P]"),
    ("stats_g3[2]", "stats_g3[T2PX]"),
    ("stats_g3[3]", "stats_g3[T3P]"),
    ("stats_g3[4]", "stats_g3[T3PX]"),
    ("stats_g3[5]", "stats_g3[FT]"),
    ("stats_g3[6]", "stats_g3[FTX]"),
    ("stats_g3[7]", "stats_g3[DREB]"),
    ("stats_g3[8]", "stats_g3[OREB]"),
    ("stats_g3[9]", "stats_g3[REB]"),
    ("stats_g3[10]", "stats_g3[AST]"),
    ("stats_g3[11]", "stats_g3[TO]"),
    ("stats_g3[12]", "stats_g3[STL]"),
    ("stats_g3[13]", "stats_g3[BLK]"),
    ("stats_g3[14]", "stats_g3[EXP]"),
    ("stats_g3[15]", "stats_g3[DD]"),
    ("stats_g3[16]", "stats_g3[TD]"),
    ("stats_g3[17]", "stats_g3[WIN]"),
    ("stats_g3[18]", "stats_g3[MEME]"),
    ("stats_semi[0]", "stats_semi[PTS]"),
    ("stats_semi[1]", "stats_semi[T2P]"),
    ("stats_semi[2]", "stats_semi[T2PX]"),
    ("stats_semi[3]", "stats_semi[T3P]"),
    ("stats_semi[4]", "stats_semi[T3PX]"),
    ("stats_semi[5]", "stats_semi[FT]"),
    ("stats_semi[6]", "stats_semi[FTX]"),
    ("stats_semi[7]", "stats_semi[DREB]"),
    ("stats_semi[8]", "stats_semi[OREB]"),
    ("stats_semi[9]", "stats_semi[REB]"),
    ("stats_semi[10]", "stats_semi[AST]"),
    ("stats_semi[11]", "stats_semi[TO]"),
    ("stats_semi[12]", "stats_semi[STL]"),
    ("stats_semi[13]", "stats_semi[BLK]"),
    ("stats_semi[14]", "stats_semi[EXP]"),
    ("stats_semi[15]", "stats_semi[DD]"),
    ("stats_semi[16]", "stats_semi[TD]"),
    ("stats_semi[17]", "stats_semi[WIN]"),
    ("stats_semi[18]", "stats_semi[MEME]"),
    ("stats_final[0]", "stats_final[PTS]"),
    ("stats_final[1]", "stats_final[T2P]"),
    ("stats_final[2]", "stats_final[T2PX]"),
    ("stats_final[3]", "stats_final[T3P]"),
    ("stats_final[4]", "stats_final[T3PX]"),
    ("stats_final[5]", "stats_final[FT]"),
    ("stats_final[6]", "stats_final[FTX]"),
    ("stats_final[7]", "stats_final[DREB]"),
    ("stats_final[8]", "stats_final[OREB]"),
    ("stats_final[9]", "stats_final[REB]"),
    ("stats_final[10]", "stats_final[AST]"),
    ("stats_final[11]", "stats_final[TO]"),
    ("stats_final[12]", "stats_final[STL]"),
    ("stats_final[13]", "stats_final[BLK]"),
    ("stats_final[14]", "stats_final[EXP]"),
    ("stats_final[15]", "stats_final[DD]"),
    ("stats_final[16]", "stats_final[TD]"),
    ("stats_final[17]", "stats_final[WIN]"),
    ("stats_final[18]", "stats_final[MEME]"),
]
# const PTS   = 0;
# const T2P   = 1;
# const T2PX  = 2;
# const T3P   = 3;
# const T3PX  = 4;
# const FT    = 5;
# const FTX   = 6;
# const DREB  = 7;
# const OREB  = 8;
# const REB   = 9;
# const AST   = 10;
# const TO    = 11;
# const STL   = 12;
# const BLK   = 13;
# const EXP   = 14;
# const DD    = 15;
# const TD    = 16;
# const WIN   = 17;
# const MEME  = 18;


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