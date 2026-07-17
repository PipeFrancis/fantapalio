// Importa player_type e players dal modulo data.js
import { player_type, players, td3Weights, players24, players25, 
    what_day_is_it, 
    team_not_in_final_1, team_not_in_final_2,
        game_results_array,
        PTS   ,
        T2P   ,
        T2PX  ,
        T3P   ,
        T3PX  ,
        FT    ,
        FTX   ,
        DREB  ,
        OREB  ,
        REB   ,
        AST   ,
        TO    ,
        STL   ,
        BLK   ,
        EXP   ,
        DD    ,
        TD    ,
        WIN   ,
        MEME  ,
        TD3_PARTECIPA      ,
        TD3_NONPARTECIPA   ,
        TD3_PASSA1         ,
        TD3_PASSA2         ,
        TD3_PASSA3         ,
        TD3_PASSA4         ,
        TD3_FINALE         ,
        TD3_3RD            ,
        TD3_2ND            ,
        TD3_1ST            ,
        TD3_0SU10          ,
        TD3_CIAB           ,
        TD3_ALTRI_MEME     ,
} from '../data260717_1639.js';
console.log("inizio boxscore js"); // inizio




// qui c'è una funzione per ogni giornata, uguale eccetto i dati stats che usa il suffisso diverso
// quella del td3 è un po diversa ma ci sta
// g1, g2, g3, semi, final, medie, totals, td3




// Funzione per popolare la tabella per un team specifico
function populateTable_g1(team, players) {
    const tableBody = document.getElementById(`tableBodyG1${team}`);

    // Intestazione dei parametri da mostrare nella tabella
    // const headers = [
    //     "Giocatore", "PTS", "REB", "DREB", "OREB", "AST", "STL", "BLK", "TO", "2PM", "2PA", "2P%", 
    //     "3PM", "3PA", "3P%", "FTM", "FTA", "FT%", "EXP","Meme","TOT"
    // ];
       const headers = [
        "Giocatore", "TOT", "PTS", "REB", "AST", "STL", "BLK","Meme", "TO","OREB","DREB", "2PM", "2PA", "2P%", 
        "3PM", "3PA", "3P%", "FTM", "FTA", "FT%", "EXP"
    ];

    // Aggiungi la prima riga con gli header alla tabella
    let headerRow = '<tr>';
    headers.forEach(header => {
        headerRow += `<th>${header}</th>`;
    }); //
    headerRow += '</tr>';
    tableBody.innerHTML = headerRow;
    let iheader=0;

    // Funzione per calcolare la percentuale in modo sicuro
    function calculatePercentage(numerator, denominator) {
        if (denominator === 0) {
            return "0%";
        }
        return ((numerator / denominator) * 100).toFixed(1) + "%";
    }

    // Popola le righe della tabella con i dati dei giocatori del team specificato
    players.forEach(player => {
        if (player.team === team) {
            let playerRow = '<tr>';
            playerRow += `<td>${player.name}</td>`; // "giocatore"
            playerRow += `<td><strong>${player.g1}</strong></td>`; // "TOT"
            playerRow += `<td>${player.stats_g1[PTS]}</td>`; // "PTS"
            playerRow += `<td>${player.stats_g1[REB]}</td>`; // "REB"
            playerRow += `<td>${player.stats_g1[AST]}</td>`; // "AST"
            playerRow += `<td>${player.stats_g1[STL]}</td>`; // "STL"
            playerRow += `<td>${player.stats_g1[BLK]}</td>`; // "BLK"
            playerRow += `<td>${player.stats_g1[MEME]}</td>`; // "Meme"
            playerRow += `<td>${player.stats_g1[TO]}</td>`; // "TO"
            playerRow += `<td>${player.stats_g1[OREB]}</td>`; // "OREB"
            playerRow += `<td>${player.stats_g1[DREB]}</td>`; // "DREB"
            playerRow += `<td>${player.stats_g1[T2P]}</td>`; // "2PM"
            playerRow += `<td>${player.stats_g1[T2P] + player.stats_g1[T2PX]}</td>`; // "2PA"
            playerRow += `<td>${calculatePercentage(player.stats_g1[T2P], player.stats_g1[T2P] + player.stats_g1[T2PX])}</td>`; // "2P%"
            playerRow += `<td>${player.stats_g1[T3P]}</td>`; // "3PM"
            playerRow += `<td>${player.stats_g1[T3P] + player.stats_g1[T3PX]}</td>`;// "3PA"
            playerRow += `<td>${calculatePercentage(player.stats_g1[T3P], player.stats_g1[T3P] + player.stats_g1[T3PX])}</td>`; // "3P%"
            playerRow += `<td>${player.stats_g1[FT]}</td>`; // "FTM"
            playerRow += `<td>${player.stats_g1[FT] + player.stats_g1[FTX]}</td>`; // "FTA"
            playerRow += `<td>${calculatePercentage(player.stats_g1[FT], player.stats_g1[FT] + player.stats_g1[FTX])}</td>`; // "FT%"
            playerRow += `<td>${player.stats_g1[EXP]}</td>`; // "EXP"


            // playerRow += `<td>${player.name}</td>`; // "giocatore"
            // playerRow += `<td>${player.stats_g1[PTS]}</td>`; // "PTS"
            // playerRow += `<td>${player.stats_g1[REB]}</td>`; // "REB"
            // playerRow += `<td>${player.stats_g1[DREB]}</td>`; // "DREB"
            // playerRow += `<td>${player.stats_g1[OREB]}</td>`; // "OREB"
            // playerRow += `<td>${player.stats_g1[AST]}</td>`; // "AST"
            // playerRow += `<td>${player.stats_g1[STL]}</td>`; // "STL"
            // playerRow += `<td>${player.stats_g1[BLK]}</td>`; // "BLK"
            // playerRow += `<td>${player.stats_g1[TO]}</td>`; // "TO"
            // playerRow += `<td>${player.stats_g1[T2P]}</td>`; // "2PM"
            // playerRow += `<td>${player.stats_g1[T2P] + player.stats_g1[T2PX]}</td>`; // "2PA"
            // playerRow += `<td>${calculatePercentage(player.stats_g1[T2P], player.stats_g1[T2P] + player.stats_g1[T2PX])}</td>`; // "2P%"
            // playerRow += `<td>${player.stats_g1[T3P]}</td>`; // "3PM"
            // playerRow += `<td>${player.stats_g1[T3P] + player.stats_g1[T3PX]}</td>`;// "3PA"
            // playerRow += `<td>${calculatePercentage(player.stats_g1[T3P], player.stats_g1[T3P] + player.stats_g1[T3PX])}</td>`; // "3P%"
            // playerRow += `<td>${player.stats_g1[FT]}</td>`; // "FTM"
            // playerRow += `<td>${player.stats_g1[FT] + player.stats_g1[FTX]}</td>`; // "FTA"
            // playerRow += `<td>${calculatePercentage(player.stats_g1[FT], player.stats_g1[FT] + player.stats_g1[FTX])}</td>`; // "FT%"
            // playerRow += `<td>${player.stats_g1[EXP]}</td>`; // "EXP"
            // playerRow += `<td>${player.stats_g1[MEME]}</td>`; // "Meme"
            // playerRow += `<td><strong>${player.g1}</strong></td>`; // "TOT"
            
            playerRow += '</tr>';
            
            tableBody.innerHTML += playerRow;
            iheader++;
            if(iheader==10){
                tableBody.innerHTML += headerRow;
            }
        }
    });
    // tableBody.innerHTML += headerRow;
}


// Funzione per popolare la tabella per un team specifico
function populateTable_g2(team, players) {
    const tableBody = document.getElementById(`tableBodyG2${team}`);

    // Intestazione dei parametri da mostrare nella tabella
    const headers = [
        "Giocatore", "TOT", "PTS", "REB", "AST", "STL", "BLK","Meme", "TO","OREB","DREB", "2PM", "2PA", "2P%", 
        "3PM", "3PA", "3P%", "FTM", "FTA", "FT%", "EXP"
    ];

    // Aggiungi la prima riga con gli header alla tabella
    let headerRow = '<tr>';
    headers.forEach(header => {
        headerRow += `<th>${header}</th>`;
    });
    headerRow += '</tr>';
    tableBody.innerHTML = headerRow;
    let iheader=0;

    // Funzione per calcolare la percentuale in modo sicuro
    function calculatePercentage(numerator, denominator) {
        if (denominator === 0) {
            return "0%";
        }
        return ((numerator / denominator) * 100).toFixed(1) + "%";
    }

    // Popola le righe della tabella con i dati dei giocatori del team specificato
    players.forEach(player => {
        if (player.team === team) {
            let playerRow = '<tr>';

            playerRow += `<td>${player.name}</td>`; // "giocatore"
            playerRow += `<td><strong>${player.g2}</strong></td>`; // "TOT"
            playerRow += `<td>${player.stats_g2[PTS]}</td>`; // "PTS"
            playerRow += `<td>${player.stats_g2[REB]}</td>`; // "REB"
            playerRow += `<td>${player.stats_g2[AST]}</td>`; // "AST"
            playerRow += `<td>${player.stats_g2[STL]}</td>`; // "STL"
            playerRow += `<td>${player.stats_g2[BLK]}</td>`; // "BLK"
            playerRow += `<td>${player.stats_g2[MEME]}</td>`; // "Meme"
            playerRow += `<td>${player.stats_g2[TO]}</td>`; // "TO"
            playerRow += `<td>${player.stats_g2[OREB]}</td>`; // "OREB"
            playerRow += `<td>${player.stats_g2[DREB]}</td>`; // "DREB"
            playerRow += `<td>${player.stats_g2[T2P]}</td>`; // "2PM"
            playerRow += `<td>${player.stats_g2[T2P] + player.stats_g2[T2PX]}</td>`; // "2PA"
            playerRow += `<td>${calculatePercentage(player.stats_g2[T2P], player.stats_g2[T2P] + player.stats_g2[T2PX])}</td>`; // "2P%"
            playerRow += `<td>${player.stats_g2[T3P]}</td>`; // "3PM"
            playerRow += `<td>${player.stats_g2[T3P] + player.stats_g2[T3PX]}</td>`;// "3PA"
            playerRow += `<td>${calculatePercentage(player.stats_g2[T3P], player.stats_g2[T3P] + player.stats_g2[T3PX])}</td>`; // "3P%"
            playerRow += `<td>${player.stats_g2[FT]}</td>`; // "FTM"
            playerRow += `<td>${player.stats_g2[FT] + player.stats_g2[FTX]}</td>`; // "FTA"
            playerRow += `<td>${calculatePercentage(player.stats_g2[FT], player.stats_g2[FT] + player.stats_g2[FTX])}</td>`; // "FT%"
            playerRow += `<td>${player.stats_g2[EXP]}</td>`; // "EXP"

            playerRow += '</tr>';
            tableBody.innerHTML += playerRow;
            iheader++;
            if(iheader==10){
                tableBody.innerHTML += headerRow;
            }
        }
    });
    // tableBody.innerHTML += headerRow;
}

// Funzione per popolare la tabella per un team specifico
function populateTable_g3(team, players) {
    const tableBody = document.getElementById(`tableBodyG3${team}`);

    // Intestazione dei parametri da mostrare nella tabella
    const headers = [
        "Giocatore", "TOT", "PTS", "REB", "AST", "STL", "BLK","Meme", "TO","OREB","DREB", "2PM", "2PA", "2P%", 
        "3PM", "3PA", "3P%", "FTM", "FTA", "FT%", "EXP"
    ];

    // Aggiungi la prima riga con gli header alla tabella
    let headerRow = '<tr>';
    headers.forEach(header => {
        headerRow += `<th>${header}</th>`;
    });
    headerRow += '</tr>';
    tableBody.innerHTML = headerRow;
    let iheader=0;

    // Funzione per calcolare la percentuale in modo sicuro
    function calculatePercentage(numerator, denominator) {
        if (denominator === 0) {
            return "0%";
        }
        return ((numerator / denominator) * 100).toFixed(1) + "%";
    }

    // Popola le righe della tabella con i dati dei giocatori del team specificato
    players.forEach(player => {
        if (player.team === team) {
            let playerRow = '<tr>';
           
            playerRow += `<td>${player.name}</td>`; // "giocatore"
            playerRow += `<td><strong>${player.g3}</strong></td>`; // "TOT"
            playerRow += `<td>${player.stats_g3[PTS]}</td>`; // "PTS"
            playerRow += `<td>${player.stats_g3[REB]}</td>`; // "REB"
            playerRow += `<td>${player.stats_g3[AST]}</td>`; // "AST"
            playerRow += `<td>${player.stats_g3[STL]}</td>`; // "STL"
            playerRow += `<td>${player.stats_g3[BLK]}</td>`; // "BLK"
            playerRow += `<td>${player.stats_g3[MEME]}</td>`; // "Meme"
            playerRow += `<td>${player.stats_g3[TO]}</td>`; // "TO"
            playerRow += `<td>${player.stats_g3[OREB]}</td>`; // "OREB"
            playerRow += `<td>${player.stats_g3[DREB]}</td>`; // "DREB"
            playerRow += `<td>${player.stats_g3[T2P]}</td>`; // "2PM"
            playerRow += `<td>${player.stats_g3[T2P] + player.stats_g3[T2PX]}</td>`; // "2PA"
            playerRow += `<td>${calculatePercentage(player.stats_g3[T2P], player.stats_g3[T2P] + player.stats_g3[T2PX])}</td>`; // "2P%"
            playerRow += `<td>${player.stats_g3[T3P]}</td>`; // "3PM"
            playerRow += `<td>${player.stats_g3[T3P] + player.stats_g3[T3PX]}</td>`;// "3PA"
            playerRow += `<td>${calculatePercentage(player.stats_g3[T3P], player.stats_g3[T3P] + player.stats_g3[T3PX])}</td>`; // "3P%"
            playerRow += `<td>${player.stats_g3[FT]}</td>`; // "FTM"
            playerRow += `<td>${player.stats_g3[FT] + player.stats_g3[FTX]}</td>`; // "FTA"
            playerRow += `<td>${calculatePercentage(player.stats_g3[FT], player.stats_g3[FT] + player.stats_g3[FTX])}</td>`; // "FT%"
            playerRow += `<td>${player.stats_g3[EXP]}</td>`; // "EXP"

            playerRow += '</tr>';
            tableBody.innerHTML += playerRow;
            iheader++;
            if(iheader==10){
                tableBody.innerHTML += headerRow;
            }
        }
    });
    // tableBody.innerHTML += headerRow;
}

// Funzione per popolare la tabella per un team specifico
function populateTable_semi(team, players) {
    const tableBody = document.getElementById(`tableBodySemi${team}`);

    // Intestazione dei parametri da mostrare nella tabella
    const headers = [
        "Giocatore", "TOT", "PTS", "REB", "AST", "STL", "BLK","Meme", "TO","OREB","DREB", "2PM", "2PA", "2P%", 
        "3PM", "3PA", "3P%", "FTM", "FTA", "FT%", "EXP"
    ];

    // Aggiungi la prima riga con gli header alla tabella
    let headerRow = '<tr>';
    headers.forEach(header => {
        headerRow += `<th>${header}</th>`;
    });
    headerRow += '</tr>';
    tableBody.innerHTML = headerRow;
    let iheader=0;

    // Funzione per calcolare la percentuale in modo sicuro
    function calculatePercentage(numerator, denominator) {
        if (denominator === 0) {
            return "0%";
        }
        return ((numerator / denominator) * 100).toFixed(1) + "%";
    }

    // Popola le righe della tabella con i dati dei giocatori del team specificato
    players.forEach(player => {
        if (player.team === team) {
            let playerRow = '<tr>';
            
            playerRow += `<td>${player.name}</td>`; // "giocatore"
            playerRow += `<td><strong>${player.semi}</strong></td>`; // "TOT"
            playerRow += `<td>${player.stats_semi[PTS]}</td>`; // "PTS"
            playerRow += `<td>${player.stats_semi[REB]}</td>`; // "REB"
            playerRow += `<td>${player.stats_semi[AST]}</td>`; // "AST"
            playerRow += `<td>${player.stats_semi[STL]}</td>`; // "STL"
            playerRow += `<td>${player.stats_semi[BLK]}</td>`; // "BLK"
            playerRow += `<td>${player.stats_semi[MEME]}</td>`; // "Meme"
            playerRow += `<td>${player.stats_semi[TO]}</td>`; // "TO"
            playerRow += `<td>${player.stats_semi[OREB]}</td>`; // "OREB"
            playerRow += `<td>${player.stats_semi[DREB]}</td>`; // "DREB"
            playerRow += `<td>${player.stats_semi[T2P]}</td>`; // "2PM"
            playerRow += `<td>${player.stats_semi[T2P] + player.stats_semi[T2PX]}</td>`; // "2PA"
            playerRow += `<td>${calculatePercentage(player.stats_semi[T2P], player.stats_semi[T2P] + player.stats_semi[T2PX])}</td>`; // "2P%"
            playerRow += `<td>${player.stats_semi[T3P]}</td>`; // "3PM"
            playerRow += `<td>${player.stats_semi[T3P] + player.stats_semi[T3PX]}</td>`;// "3PA"
            playerRow += `<td>${calculatePercentage(player.stats_semi[T3P], player.stats_semi[T3P] + player.stats_semi[T3PX])}</td>`; // "3P%"
            playerRow += `<td>${player.stats_semi[FT]}</td>`; // "FTM"
            playerRow += `<td>${player.stats_semi[FT] + player.stats_semi[FTX]}</td>`; // "FTA"
            playerRow += `<td>${calculatePercentage(player.stats_semi[FT], player.stats_semi[FT] + player.stats_semi[FTX])}</td>`; // "FT%"
            playerRow += `<td>${player.stats_semi[EXP]}</td>`; // "EXP"

            playerRow += '</tr>';
            tableBody.innerHTML += playerRow;
            iheader++;
            if(iheader==10){
                tableBody.innerHTML += headerRow;
            }
        }
    });
    // tableBody.innerHTML += headerRow;
}


// Funzione per popolare la tabella per un team specifico
function populateTable_final(team, players) {
    const tableBody = document.getElementById(`tableBodyFinal${team}`);

    // Intestazione dei parametri da mostrare nella tabella
    const headers = [
        "Giocatore", "TOT", "PTS", "REB", "AST", "STL", "BLK","Meme", "TO","OREB","DREB", "2PM", "2PA", "2P%", 
        "3PM", "3PA", "3P%", "FTM", "FTA", "FT%", "EXP"
    ];

    // Aggiungi la prima riga con gli header alla tabella
    let headerRow = '<tr>';
    headers.forEach(header => {
        headerRow += `<th>${header}</th>`;
    });
    headerRow += '</tr>';
    tableBody.innerHTML = headerRow;
    let iheader=0;

    // Funzione per calcolare la percentuale in modo sicuro
    function calculatePercentage(numerator, denominator) {
        if (denominator === 0) {
            return "0%";
        }
        return ((numerator / denominator) * 100).toFixed(1) + "%";
    }

    // Popola le righe della tabella con i dati dei giocatori del team specificato
    players.forEach(player => {
        if (player.team === team) {
            let playerRow = '<tr>';
            
                                                                        playerRow += `<td>${player.name}</td>`; // "giocatore"
                                                                        playerRow += `<td><strong>${player.final}</strong></td>`; // "TOT"
                                                                        playerRow += `<td>${player.stats_final[PTS]}</td>`; // "PTS"
                                                                        playerRow += `<td>${player.stats_final[REB]}</td>`; // "REB"
                                                                        playerRow += `<td>${player.stats_final[AST]}</td>`; // "AST"
                                                                        playerRow += `<td>${player.stats_final[STL]}</td>`; // "STL"
                                                                        playerRow += `<td>${player.stats_final[BLK]}</td>`; // "BLK"
                                                                        playerRow += `<td>${player.stats_final[MEME]}</td>`; // "Meme"
                                                                        playerRow += `<td>${player.stats_final[TO]}</td>`; // "TO"
                                                                        playerRow += `<td>${player.stats_final[OREB]}</td>`; // "OREB"
                                                                        playerRow += `<td>${player.stats_final[DREB]}</td>`; // "DREB"
                                                                        playerRow += `<td>${player.stats_final[T2P]}</td>`; // "2PM"
                                                                        playerRow += `<td>${player.stats_final[T2P] + player.stats_final[T2PX]}</td>`; // "2PA"
                                                                        playerRow += `<td>${calculatePercentage(player.stats_final[T2P], player.stats_final[T2P] + player.stats_final[T2PX])}</td>`; // "2P%"
                                                                        playerRow += `<td>${player.stats_final[T3P]}</td>`; // "3PM"
                                                                        playerRow += `<td>${player.stats_final[T3P] + player.stats_final[T3PX]}</td>`;// "3PA"
                                                                        playerRow += `<td>${calculatePercentage(player.stats_final[T3P], player.stats_final[T3P] + player.stats_final[T3PX])}</td>`; // "3P%"
                                                                        playerRow += `<td>${player.stats_final[FT]}</td>`; // "FTM"
                                                                        playerRow += `<td>${player.stats_final[FT] + player.stats_final[FTX]}</td>`; // "FTA"
                                                                        playerRow += `<td>${calculatePercentage(player.stats_final[FT], player.stats_final[FT] + player.stats_final[FTX])}</td>`; // "FT%"
                                                                        playerRow += `<td>${player.stats_final[EXP]}</td>`; // "EXP"

            playerRow += '</tr>';
            tableBody.innerHTML += playerRow;
            iheader++;
            if(iheader==10){
                tableBody.innerHTML += headerRow;
            }
        }
    });
    // tableBody.innerHTML += headerRow;
}

// Funzione per popolare la tabella per un team specifico
function populateTable_avg(team, players, isinfinal) {
    const tableBody = document.getElementById(`tableBodyAvg${team}`);

    // Intestazione dei parametri da mostrare nella tabella
    const headers = [
        "Giocatore", "TOT", "PTS", "REB", "AST", "STL", "BLK","Meme", "TO","OREB","DREB", "2PM", "2PA", "2P%", 
        "3PM", "3PA", "3P%", "FTM", "FTA", "FT%", "EXP"
    ];

    // Aggiungi la prima riga con gli header alla tabella
    let headerRow = '<tr>';
    headers.forEach(header => {
        headerRow += `<th>${header}</th>`;
    });
    headerRow += '</tr>';
    tableBody.innerHTML = headerRow;
    let iheader=0;

    // Funzione per calcolare la percentuale in modo sicuro
    function calculatePercentage(numerator, denominator) {
        if (denominator === 0) {
            return "0%";
        }
        return ((numerator / denominator) * 100).toFixed(1) + "%";
    }

    // Popola le righe della tabella con i dati dei giocatori del team specificato, fa le medie (non riesco a usare array per medie mannaggia)
    players.forEach(player => {
        if (player.team === team) {
            // if(team == "NORD" || team == "WEST"){
            if(isinfinal){
                let playerRow = '<tr>';
                playerRow += `<td>${player.name}</td>`;
                playerRow += `<td><strong>${((player.g1 + player.g2 + player.g3 + player.semi + player.final)/ 5).toFixed(1)}</strong></td>`; //TOT
                playerRow += `<td>${((player.stats_g1[PTS] + player.stats_g2[PTS] + player.stats_g3[PTS] + player.stats_semi[PTS] + player.stats_final[PTS]) / 5).toFixed(1)}</td>`; //PTS
                playerRow += `<td>${((player.stats_g1[REB] + player.stats_g2[REB] + player.stats_g3[REB] + player.stats_semi[REB] + player.stats_final[REB]) / 5).toFixed(1)}</td>`; //REB
                playerRow += `<td>${((player.stats_g1[AST] + player.stats_g2[AST] + player.stats_g3[AST] + player.stats_semi[AST] + player.stats_final[AST]) / 5).toFixed(1)}</td>`; // AST
                playerRow += `<td>${((player.stats_g1[STL] + player.stats_g2[STL] + player.stats_g3[STL] + player.stats_semi[STL] + player.stats_final[STL]) / 5).toFixed(1)}</td>`; // STL
                playerRow += `<td>${((player.stats_g1[BLK] + player.stats_g2[BLK] + player.stats_g3[BLK] + player.stats_semi[BLK] + player.stats_final[BLK]) / 5).toFixed(1)}</td>`; // BLK 
                playerRow += `<td>${((player.stats_g1[MEME] + player.stats_g2[MEME] + player.stats_g3[MEME] + player.stats_semi[MEME] + player.stats_final[MEME]) / 5).toFixed(1)}</td>`;  //Meme
                playerRow += `<td>${((player.stats_g1[TO] + player.stats_g2[TO] + player.stats_g3[TO] + player.stats_semi[TO] + player.stats_final[TO]) / 5).toFixed(1)}</td>`; // TO
                playerRow += `<td>${((player.stats_g1[OREB] + player.stats_g2[OREB] + player.stats_g3[OREB] + player.stats_semi[OREB] + player.stats_final[OREB]) / 5).toFixed(1)}</td>`; // OREB
                playerRow += `<td>${((player.stats_g1[DREB] + player.stats_g2[DREB] + player.stats_g3[DREB] + player.stats_semi[DREB] + player.stats_final[DREB]) / 5).toFixed(1)}</td>`; // DREB
                playerRow += `<td>${((player.stats_g1[T2P] + player.stats_g2[T2P] + player.stats_g3[T2P] + player.stats_semi[T2P] + player.stats_final[T2P]) / 5).toFixed(1)}</td>`; // 2PM
                playerRow += `<td>${(((player.stats_g1[T2P] + player.stats_g2[T2P] + player.stats_g3[T2P] + player.stats_semi[T2P] + player.stats_final[T2P]) / 5) + ((player.stats_g1[T2PX] + player.stats_g2[T2PX] + player.stats_g3[T2PX] + player.stats_semi[T2PX] + player.stats_final[T2PX]) / 5)).toFixed(1)}</td>`; // 2PA
                playerRow += `<td>${calculatePercentage(
                    (player.stats_g1[T2P] + player.stats_g2[T2P] + player.stats_g3[T2P] + player.stats_semi[T2P] + player.stats_final[T2P]) / 5,
                    ((player.stats_g1[T2P] + player.stats_g2[T2P] + player.stats_g3[T2P] + player.stats_semi[T2P] + player.stats_final[T2P]) / 5) + ((player.stats_g1[T2PX] + player.stats_g2[T2PX] + player.stats_g3[T2PX] + player.stats_semi[T2PX] + player.stats_final[T2PX]) / 5) // 2P%
                )}</td>`;
                playerRow += `<td>${((player.stats_g1[T3P] + player.stats_g2[T3P] + player.stats_g3[T3P] + player.stats_semi[T3P] + player.stats_final[T3P]) / 5).toFixed(1)}</td>`; // 3PM
                playerRow += `<td>${(((player.stats_g1[T3P] + player.stats_g2[T3P] + player.stats_g3[T3P] + player.stats_semi[T3P] + player.stats_final[T3P]) / 5) + ((player.stats_g1[T3PX] + player.stats_g2[T3PX] + player.stats_g3[T3PX] + player.stats_semi[T3PX] + player.stats_final[T3PX]) / 5)).toFixed(1)}</td>`; //3PA
                playerRow += `<td>${calculatePercentage(
                    (player.stats_g1[T3P] + player.stats_g2[T3P] + player.stats_g3[T3P] + player.stats_semi[T3P] + player.stats_final[T3P]) / 5,
                    ((player.stats_g1[T3P] + player.stats_g2[T3P] + player.stats_g3[T3P] + player.stats_semi[T3P] + player.stats_final[T3P]) / 5) + ((player.stats_g1[T3PX] + player.stats_g2[T3PX] + player.stats_g3[T3PX] + player.stats_semi[T3PX] + player.stats_final[T3PX]) / 5) //3P%
                )}</td>`;
                playerRow += `<td>${((player.stats_g1[FT] + player.stats_g2[FT] + player.stats_g3[FT] + player.stats_semi[FT] + player.stats_final[FT]) / 5).toFixed(1)}</td>`; //FTM
                playerRow += `<td>${(((player.stats_g1[FT] + player.stats_g2[FT] + player.stats_g3[FT] + player.stats_semi[FT] + player.stats_final[FT]) / 5) + ((player.stats_g1[FTX] + player.stats_g2[FTX] + player.stats_g3[FTX] + player.stats_semi[FTX] + player.stats_final[FTX]) / 5)).toFixed(1)}</td>`; //FTA
                playerRow += `<td>${calculatePercentage(
                    (player.stats_g1[FT] + player.stats_g2[FT] + player.stats_g3[FT] + player.stats_semi[FT] + player.stats_final[FT]) / 5,
                    ((player.stats_g1[FT] + player.stats_g2[FT] + player.stats_g3[FT] + player.stats_semi[FT] + player.stats_final[FT]) / 5) + ((player.stats_g1[FTX] + player.stats_g2[FTX] + player.stats_g3[FTX] + player.stats_semi[FTX] + player.stats_final[FTX]) / 5) //FT%
                )}</td>`;
                playerRow += `<td>${((player.stats_g1[EXP] + player.stats_g2[EXP] + player.stats_g3[EXP] + player.stats_semi[EXP] + player.stats_final[EXP]) / 5).toFixed(1)}</td>`; //EXP
                playerRow += '</tr>';
                tableBody.innerHTML += playerRow;
            }else{ //team = "SUD" o "EST", isinfinal = 0, 
                let playerRow = '<tr>';

                playerRow += `<td>${player.name}</td>`; // NO FINAL STATS COUNTED (THEY ARE ZERO, MEME COULD BE NOT ZERO BUT WOULD NOT BE INGAME MEME)
                playerRow += `<td><strong>${((player.g1 + player.g2 + player.g3 + player.semi)/ 4).toFixed(1)}</strong></td>`; // TOT
                playerRow += `<td>${((player.stats_g1[PTS] + player.stats_g2[PTS] + player.stats_g3[PTS] + player.stats_semi[PTS]) / 4).toFixed(1)}</td>`; // PTS
                playerRow += `<td>${((player.stats_g1[REB] + player.stats_g2[REB] + player.stats_g3[REB] + player.stats_semi[REB]) / 4).toFixed(1)}</td>`; // REB
                playerRow += `<td>${((player.stats_g1[AST] + player.stats_g2[AST] + player.stats_g3[AST] + player.stats_semi[AST]) / 4).toFixed(1)}</td>`; // AST
                playerRow += `<td>${((player.stats_g1[STL] + player.stats_g2[STL] + player.stats_g3[STL] + player.stats_semi[STL]) / 4).toFixed(1)}</td>`; // STL
                playerRow += `<td>${((player.stats_g1[BLK] + player.stats_g2[BLK] + player.stats_g3[BLK] + player.stats_semi[BLK]) / 4).toFixed(1)}</td>`; // BLK
                playerRow += `<td>${((player.stats_g1[MEME] + player.stats_g2[MEME] + player.stats_g3[MEME] + player.stats_semi[MEME]) / 4).toFixed(1)}</td>`; // Meme
                playerRow += `<td>${((player.stats_g1[TO] + player.stats_g2[TO] + player.stats_g3[TO] + player.stats_semi[TO]) / 4).toFixed(1)}</td>`; // TO
                playerRow += `<td>${((player.stats_g1[OREB] + player.stats_g2[OREB] + player.stats_g3[OREB] + player.stats_semi[OREB]) / 4).toFixed(1)}</td>`; // OREB
                playerRow += `<td>${((player.stats_g1[DREB] + player.stats_g2[DREB] + player.stats_g3[DREB] + player.stats_semi[DREB]) / 4).toFixed(1)}</td>`; // DREB
                playerRow += `<td>${((player.stats_g1[T2P] + player.stats_g2[T2P] + player.stats_g3[T2P] + player.stats_semi[T2P]) / 4).toFixed(1)}</td>`; // 2PM
                playerRow += `<td>${(((player.stats_g1[T2P] + player.stats_g2[T2P] + player.stats_g3[T2P] + player.stats_semi[T2P]) / 4) + ((player.stats_g1[T2PX] + player.stats_g2[T2PX] + player.stats_g3[T2PX] + player.stats_semi[T2PX]) / 4)).toFixed(1)}</td>`; // 2PA
                playerRow += `<td>${calculatePercentage(
                    (player.stats_g1[T2P] + player.stats_g2[T2P] + player.stats_g3[T2P] + player.stats_semi[T2P]) / 4,
                    ((player.stats_g1[T2P] + player.stats_g2[T2P] + player.stats_g3[T2P] + player.stats_semi[T2P]) / 4) + ((player.stats_g1[T2PX] + player.stats_g2[T2PX] + player.stats_g3[T2PX] + player.stats_semi[T2PX]) / 4) // 2P%
                )}</td>`;
                playerRow += `<td>${((player.stats_g1[T3P] + player.stats_g2[T3P] + player.stats_g3[T3P] + player.stats_semi[T3P]) / 4).toFixed(1)}</td>`; // 3PM
                playerRow += `<td>${(((player.stats_g1[T3P] + player.stats_g2[T3P] + player.stats_g3[T3P] + player.stats_semi[T3P]) / 4) + ((player.stats_g1[T3PX] + player.stats_g2[T3PX] + player.stats_g3[T3PX] + player.stats_semi[T3PX]) / 4)).toFixed(1)}</td>`; //3PA
                playerRow += `<td>${calculatePercentage(
                    (player.stats_g1[T3P] + player.stats_g2[T3P] + player.stats_g3[T3P] + player.stats_semi[T3P]) / 4,
                    ((player.stats_g1[T3P] + player.stats_g2[T3P] + player.stats_g3[T3P] + player.stats_semi[T3P]) / 4) + ((player.stats_g1[T3PX] + player.stats_g2[T3PX] + player.stats_g3[T3PX] + player.stats_semi[T3PX]) / 4) // 3P%
                )}</td>`;
                playerRow += `<td>${((player.stats_g1[FT] + player.stats_g2[FT] + player.stats_g3[FT] + player.stats_semi[FT]) / 4).toFixed(1)}</td>`; // FTM
                playerRow += `<td>${(((player.stats_g1[FT] + player.stats_g2[FT] + player.stats_g3[FT] + player.stats_semi[FT]) / 4) + ((player.stats_g1[FTX] + player.stats_g2[FTX] + player.stats_g3[FTX] + player.stats_semi[FTX]) / 4)).toFixed(1)}</td>`; //FTA
                playerRow += `<td>${calculatePercentage(
                    (player.stats_g1[FT] + player.stats_g2[FT] + player.stats_g3[FT] + player.stats_semi[FT]) / 4,
                    ((player.stats_g1[FT] + player.stats_g2[FT] + player.stats_g3[FT] + player.stats_semi[FT]) / 4) + ((player.stats_g1[FTX] + player.stats_g2[FTX] + player.stats_g3[FTX] + player.stats_semi[FTX]) / 4) // FT%
                )}</td>`;
                playerRow += `<td>${((player.stats_g1[EXP] + player.stats_g2[EXP] + player.stats_g3[EXP] + player.stats_semi[EXP]) / 4).toFixed(1)}</td>`; // EXP
                playerRow += '</tr>';
                tableBody.innerHTML += playerRow;
            }
            iheader++;
            if(iheader==10){
                tableBody.innerHTML += headerRow;
            }
        }
        
        
    });
    // tableBody.innerHTML += headerRow;
}


// Funzione per popolare la tabella per un team specifico
function populateTable_totals(team, players) {
    const tableBody = document.getElementById(`tableBodyTotals${team}`);

    // Intestazione dei parametri da mostrare nella tabella
    const headers = [
        "Giocatore", "TOT", "PTS", "REB", "AST", "STL", "BLK","Meme", "TO","OREB","DREB", "2PM", "2PA", "2P%", 
        "3PM", "3PA", "3P%", "FTM", "FTA", "FT%", "EXP"
    ];

    // Aggiungi la prima riga con gli header alla tabella
    let headerRow = '<tr>';
    headers.forEach(header => {
        headerRow += `<th>${header}</th>`;
    });
    headerRow += '</tr>';
    tableBody.innerHTML = headerRow;
    let iheader=0;

    // Funzione per calcolare la percentuale in modo sicuro
    function calculatePercentage(numerator, denominator) {
        if (denominator === 0) {
            return "0%";
        }
        return ((numerator / denominator) * 100).toFixed(1) + "%";
    }

    // Popola le righe della tabella con i dati dei giocatori del team specificato, fa le medie (non riesco a usare array per medie mannaggia)
    players.forEach(player => {
        if (player.team === team) {
            let playerRow = '<tr>';
            playerRow += `<td>${player.name}</td>`;
            playerRow += `<td><strong>${((player.g1 + player.g2 + player.g3 + player.semi + player.final)).toFixed(0)}</strong></td>`; // TOT
            playerRow += `<td>${((player.stats_g1[PTS] + player.stats_g2[PTS] + player.stats_g3[PTS] + player.stats_semi[PTS] + player.stats_final[PTS]) ).toFixed(0)}</td>`; // PTS
            playerRow += `<td>${((player.stats_g1[REB] + player.stats_g2[REB] + player.stats_g3[REB] + player.stats_semi[REB] + player.stats_final[REB]) ).toFixed(0)}</td>`; // REB
            playerRow += `<td>${((player.stats_g1[AST] + player.stats_g2[AST] + player.stats_g3[AST] + player.stats_semi[AST] + player.stats_final[AST]) ).toFixed(0)}</td>`; // ASS
            playerRow += `<td>${((player.stats_g1[STL] + player.stats_g2[STL] + player.stats_g3[STL] + player.stats_semi[STL] + player.stats_final[STL]) ).toFixed(0)}</td>`; // STE
            playerRow += `<td>${((player.stats_g1[BLK] + player.stats_g2[BLK] + player.stats_g3[BLK] + player.stats_semi[BLK] + player.stats_final[BLK]) ).toFixed(0)}</td>`; // BLK
            playerRow += `<td>${((player.stats_g1[MEME] + player.stats_g2[MEME] + player.stats_g3[MEME] + player.stats_semi[MEME] + player.stats_final[MEME]) ).toFixed(0)}</td>`; // MEME
            playerRow += `<td>${((player.stats_g1[TO] + player.stats_g2[TO] + player.stats_g3[TO] + player.stats_semi[TO] + player.stats_final[TO]) ).toFixed(0)}</td>`; // TO
            playerRow += `<td>${((player.stats_g1[OREB] + player.stats_g2[OREB] + player.stats_g3[OREB] + player.stats_semi[OREB] + player.stats_final[OREB]) ).toFixed(0)}</td>`; // OREB
            playerRow += `<td>${((player.stats_g1[DREB] + player.stats_g2[DREB] + player.stats_g3[DREB] + player.stats_semi[DREB] + player.stats_final[DREB]) ).toFixed(0)}</td>`; // DREB
            playerRow += `<td>${((player.stats_g1[T2P] + player.stats_g2[T2P] + player.stats_g3[T2P] + player.stats_semi[T2P] + player.stats_final[T2P]) ).toFixed(0)}</td>`;
            playerRow += `<td>${(((player.stats_g1[T2P] + player.stats_g2[T2P] + player.stats_g3[T2P] + player.stats_semi[T2P] + player.stats_final[T2P]) ) + ((player.stats_g1[T2PX] + player.stats_g2[T2PX] + player.stats_g3[T2PX] + player.stats_semi[T2PX] + player.stats_final[T2PX]) )).toFixed(0)}</td>`;
            playerRow += `<td>${calculatePercentage(
                (player.stats_g1[T2P] + player.stats_g2[T2P] + player.stats_g3[T2P] + player.stats_semi[T2P] + player.stats_final[T2P]) ,
                ((player.stats_g1[T2P] + player.stats_g2[T2P] + player.stats_g3[T2P] + player.stats_semi[T2P] + player.stats_final[T2P]) ) + ((player.stats_g1[T2PX] + player.stats_g2[T2PX] + player.stats_g3[T2PX] + player.stats_semi[T2PX] + player.stats_final[T2PX]) )
            )}</td>`;
            playerRow += `<td>${((player.stats_g1[T3P] + player.stats_g2[T3P] + player.stats_g3[T3P] + player.stats_semi[T3P] + player.stats_final[T3P]) ).toFixed(0)}</td>`;
            playerRow += `<td>${(((player.stats_g1[T3P] + player.stats_g2[T3P] + player.stats_g3[T3P] + player.stats_semi[T3P] + player.stats_final[T3P]) ) + ((player.stats_g1[T3PX] + player.stats_g2[T3PX] + player.stats_g3[T3PX] + player.stats_semi[T3PX] + player.stats_final[T3PX]) )).toFixed(0)}</td>`;
            playerRow += `<td>${calculatePercentage(
                (player.stats_g1[T3P] + player.stats_g2[T3P] + player.stats_g3[T3P] + player.stats_semi[T3P] + player.stats_final[T3P]) ,
                ((player.stats_g1[T3P] + player.stats_g2[T3P] + player.stats_g3[T3P] + player.stats_semi[T3P] + player.stats_final[T3P]) ) + ((player.stats_g1[T3PX] + player.stats_g2[T3PX] + player.stats_g3[T3PX] + player.stats_semi[T3PX] + player.stats_final[T3PX]) )
            )}</td>`;
            playerRow += `<td>${((player.stats_g1[FT] + player.stats_g2[FT] + player.stats_g3[FT] + player.stats_semi[FT] + player.stats_final[FT]) ).toFixed(0)}</td>`;
            playerRow += `<td>${(((player.stats_g1[FT] + player.stats_g2[FT] + player.stats_g3[FT] + player.stats_semi[FT] + player.stats_final[FT]) ) + ((player.stats_g1[FTX] + player.stats_g2[FTX] + player.stats_g3[FTX] + player.stats_semi[FTX] + player.stats_final[FTX]) )).toFixed(0)}</td>`;
            playerRow += `<td>${calculatePercentage(
                (player.stats_g1[FT] + player.stats_g2[FT] + player.stats_g3[FT] + player.stats_semi[FT] + player.stats_final[FT]) ,
                ((player.stats_g1[FT] + player.stats_g2[FT] + player.stats_g3[FT] + player.stats_semi[FT] + player.stats_final[FT]) ) + ((player.stats_g1[FTX] + player.stats_g2[FTX] + player.stats_g3[FTX] + player.stats_semi[FTX] + player.stats_final[FTX]) )
            )}</td>`;
            playerRow += `<td>${((player.stats_g1[EXP] + player.stats_g2[EXP] + player.stats_g3[EXP] + player.stats_semi[EXP] + player.stats_final[EXP]) ).toFixed(0)}</td>`;
            playerRow += '</tr>';
            tableBody.innerHTML += playerRow;
            iheader++;
            if(iheader==10){
                tableBody.innerHTML += headerRow;
            }
        }
    });
    // tableBody.innerHTML += headerRow;
}


// Funzione per popolare la tabella per un team specifico
function populateTable_td3(team, players) {
    const tableBody = document.getElementById(`tableBodytd3${team}`);

    // Intestazione dei parametri da mostrare nella tabella
    const headers = [
        "Giocatore", "Partecipazione", "1° turno", "2° turno", "3° turno", "4° turno", "Semifinale", "Finale", "0/10 tiri", "Ciabatte", "Altri Meme","TOT"
    ]; //                                                                                           "Posizionamento"

    // Aggiungi la prima riga con gli header alla tabella
    let headerRow = '<tr>';
    headers.forEach(header => {
        headerRow += `<th>${header}</th>`;
    });
    headerRow += '</tr>';
    tableBody.innerHTML = headerRow;
    let iheader=0;


    // Popola le righe della tabella con i dati dei giocatori del team specificato, fa le medie (non riesco a usare array per medie mannaggia)
    players.forEach(player => {
        if (player.team === team) {
            let playerRow = '<tr>';
            //giocatore
            playerRow += `<td>${player.name}</td>`;
            //partecipazione
            if(player.stats_td3[TD3_PARTECIPA] == 1){
                playerRow += `<td>${player.stats_td3[TD3_PARTECIPA]*td3Weights[TD3_PARTECIPA]}</td>`;
            }else{
                playerRow += `<td>${player.stats_td3[TD3_NONPARTECIPA]*td3Weights[TD3_NONPARTECIPA]}</td>`;
            }
            
            //secondo turno
            playerRow += `<td>${player.stats_td3[TD3_PASSA1]*td3Weights[TD3_PASSA1]}</td>`;
            //terzo turno
            playerRow += `<td>${player.stats_td3[TD3_PASSA2]*td3Weights[TD3_PASSA2]}</td>`;
            //quarto turno
            playerRow += `<td>${player.stats_td3[TD3_PASSA3]*td3Weights[TD3_PASSA3]}</td>`;
            //quinto turno
            playerRow += `<td>${player.stats_td3[TD3_PASSA4]*td3Weights[TD3_PASSA4]}</td>`;
            //finale 
            playerRow += `<td>${player.stats_td3[TD3_FINALE]*td3Weights[TD3_FINALE]}</td>`;
            //posizionamento
            if(player.stats_td3[TD3_3RD] == 0 && player.stats_td3[TD3_2ND] == 0 && player.stats_td3[TD3_1ST] == 0){ //non nei primi 3
                playerRow += `<td>${player.stats_td3[TD3_1ST]*td3Weights[TD3_1ST]}</td>`; //zero qui
            }else{
                if (player.stats_td3[TD3_3RD] == 1){
                    playerRow += `<td>3° : ${player.stats_td3[TD3_3RD]*td3Weights[TD3_3RD]}</td>`;//+5
                }else if (player.stats_td3[TD3_2ND] == 1){
                    playerRow += `<td>2° : ${player.stats_td3[TD3_2ND]*td3Weights[TD3_2ND]}</td>`;//+10
                }else{
                    playerRow += `<td>1° : ${player.stats_td3[TD3_1ST]*td3Weights[TD3_1ST]}</td>`;//+20
                }
            }
            //0 su 10
            playerRow += `<td>${player.stats_td3[TD3_0SU10]*td3Weights[TD3_0SU10]}</td>`;
            //Ciabatte
            playerRow += `<td>${player.stats_td3[TD3_CIAB]*td3Weights[TD3_CIAB]}</td>`;
            //Altri meme
            playerRow += `<td>${player.stats_td3[TD3_ALTRI_MEME]*td3Weights[TD3_ALTRI_MEME]}</td>`;
            //totale td3
            playerRow += `<td><strong>${player.td3}</strong></td>`;
            tableBody.innerHTML += playerRow;
            iheader++;
            if(iheader==10){
                tableBody.innerHTML += headerRow;
            }
        }
    });
    // tableBody.innerHTML += headerRow;
}

function getDayResults(dayTag) {
    return game_results_array.find(res => res.game_results_day === dayTag);
}




// // 2024 stats:
// // usa players24
// players24.sort((a, b) => (b.tot-b.td3) - (a.tot-a.td3)); // sort without td3 stats
//         populateTable_avg("WEST", players24,1); // third argument is "isinfinal"
//         populateTable_avg("NORD", players24,1);
//         populateTable_avg("EST", players24,0);
//         populateTable_avg("SUD", players24,0);




if (what_day_is_it >= 1){
    document.getElementById("boxscore-section-g1").style.display = "block";
    const res = getDayResults("g1");
    if (res) {
        document.getElementById("boxscore-score-g11").textContent = `${res.match_A_home_team} ${res.match_A_home_score} - ${res.match_A_away_score} ${res.match_A_away_team}`;
        document.getElementById("boxscore-score-g11-team1").textContent = `${res.match_A_home_team}`;
        document.getElementById("boxscore-score-g11-team2").textContent = `${res.match_A_away_team}`;
        document.getElementById("boxscore-score-g12").textContent = `${res.match_B_home_team} ${res.match_B_home_score} - ${res.match_B_away_score} ${res.match_B_away_team}`;
        document.getElementById("boxscore-score-g12-team1").textContent = `${res.match_B_home_team}`;
        document.getElementById("boxscore-score-g12-team2").textContent = `${res.match_B_away_team}`;
    }
    players.sort((a, b) => b.g1 - a.g1);
    // Chiamata alla funzione per popolare le tabelle per ciascun team
    populateTable_g1("NORD", players);
    // Popola le tabelle per EST, SUD e WEST allo stesso modo
    populateTable_g1("EST", players);
    populateTable_g1("SUD", players);
    populateTable_g1("WEST", players);
}
if (what_day_is_it >= 2){
    document.getElementById("boxscore-section-g2").style.display = "block";
    const res = getDayResults("g2");
    if (res) {
        document.getElementById("boxscore-score-g21").textContent = `${res.match_A_home_team} ${res.match_A_home_score} - ${res.match_A_away_score} ${res.match_A_away_team}`;
        document.getElementById("boxscore-score-g21-team1").textContent = `${res.match_A_home_team}`;
        document.getElementById("boxscore-score-g21-team2").textContent = `${res.match_A_away_team}`;
        document.getElementById("boxscore-score-g22").textContent = `${res.match_B_home_team} ${res.match_B_home_score} - ${res.match_B_away_score} ${res.match_B_away_team}`;
        document.getElementById("boxscore-score-g22-team1").textContent = `${res.match_B_home_team}`;
        document.getElementById("boxscore-score-g22-team2").textContent = `${res.match_B_away_team}`;
    }
    players.sort((a, b) => b.g2 - a.g2);
    populateTable_g2("NORD", players);
    populateTable_g2("EST", players);
    populateTable_g2("SUD", players);
    populateTable_g2("WEST", players);
}
if (what_day_is_it >= 3){
    document.getElementById("boxscore-section-g3").style.display = "block";
    const res = getDayResults("g3");
    if (res) {
        document.getElementById("boxscore-score-g31").textContent = `${res.match_A_home_team} ${res.match_A_home_score} - ${res.match_A_away_score} ${res.match_A_away_team}`;
        document.getElementById("boxscore-score-g31-team1").textContent = `${res.match_A_home_team}`;
        document.getElementById("boxscore-score-g31-team2").textContent = `${res.match_A_away_team}`;
        document.getElementById("boxscore-score-g32").textContent = `${res.match_B_home_team} ${res.match_B_home_score} - ${res.match_B_away_score} ${res.match_B_away_team}`;
        document.getElementById("boxscore-score-g32-team1").textContent = `${res.match_B_home_team}`;
        document.getElementById("boxscore-score-g32-team2").textContent = `${res.match_B_away_team}`;
    }
    players.sort((a, b) => b.g3 - a.g3);
    populateTable_g3("NORD", players);
    populateTable_g3("EST", players);
    populateTable_g3("SUD", players);
    populateTable_g3("WEST", players);
}
if (what_day_is_it >= 4){
    document.getElementById("boxscore-section-semi").style.display = "block";
    const res = getDayResults("semi");
    if (res) {
        document.getElementById("boxscore-score-semi1").textContent = `${res.match_A_home_team} ${res.match_A_home_score} - ${res.match_A_away_score} ${res.match_A_away_team}`;
        document.getElementById("boxscore-score-semi1-team1").textContent = `${res.match_A_home_team}`;
        document.getElementById("boxscore-score-semi1-team2").textContent = `${res.match_A_away_team}`;
        document.getElementById("boxscore-score-semi2").textContent = `${res.match_B_home_team} ${res.match_B_home_score} - ${res.match_B_away_score} ${res.match_B_away_team}`;
        document.getElementById("boxscore-score-semi2-team1").textContent = `${res.match_B_home_team}`;
        document.getElementById("boxscore-score-semi2-team2").textContent = `${res.match_B_away_team}`;
    }
    players.sort((a, b) => b.semi - a.semi);
    populateTable_semi("NORD", players);
    populateTable_semi("EST", players);
    populateTable_semi("SUD", players);
    populateTable_semi("WEST", players);
}
if (what_day_is_it >= 5){
    document.getElementById("boxscore-section-td3").style.display = "block";
    players.sort((a, b) => b.td3 - a.td3);
    populateTable_td3("WEST", players);
    populateTable_td3("NORD", players);
    populateTable_td3("EST", players);
    populateTable_td3("SUD", players);
}
if (what_day_is_it >= 6){
    document.getElementById("boxscore-section-final").style.display = "block";
    const res = getDayResults("final");
    if (res) {
        document.getElementById("boxscore-score-final").textContent = `${res.match_A_home_team} ${res.match_A_home_score} - ${res.match_A_away_score} ${res.match_A_away_team}`;
        document.getElementById("boxscore-score-final-team1").textContent = `${res.match_A_home_team}`;
        document.getElementById("boxscore-score-final-team2").textContent = `${res.match_A_away_team}`;
    }
    players.sort((a, b) => b.final - a.final); 
    populateTable_final("NORD", players);
    populateTable_final("WEST", players);

    players.sort((a, b) => (b.tot-b.td3) - (a.tot-a.td3));
    if(team_not_in_final_1 == "WEST" || team_not_in_final_2 == "WEST") populateTable_avg("WEST", players, 0); // not in final
    else populateTable_avg("WEST", players, 1); // in final
    if(team_not_in_final_1 == "NORD" || team_not_in_final_2 == "NORD") populateTable_avg("NORD", players, 0); // not in final
    else populateTable_avg("NORD", players, 1); // in final
    if(team_not_in_final_1 == "EST" || team_not_in_final_2 == "EST") populateTable_avg("EST", players, 0); // not in final
    else populateTable_avg("EST", players, 1); // in final
    if(team_not_in_final_1 == "SUD" || team_not_in_final_2 == "SUD") populateTable_avg("SUD", players, 0); // not in final
    else populateTable_avg("SUD", players, 1); // in final
    

    players.sort((a, b) => (b.tot-b.td3) - (a.tot-a.td3));
    populateTable_totals("WEST", players);
    populateTable_totals("NORD", players);
    populateTable_totals("EST", players);
    populateTable_totals("SUD", players);
}



