// Importa player_type e players dal modulo data.js
import { player_type, players } from '../data.js';
console.log("inizio boxscore js"); // inizio

// Funzione per popolare la tabella per un team specifico
function populateTable_g1(team, players) {
    const tableBody = document.getElementById(`tableBodyG1${team}`);

    // Intestazione dei parametri da mostrare nella tabella
    const headers = [
        "Giocatore", "PTS", "REB", "DR", "OR", "A", "ST", "BLK", "TO", "2PM", "2PA", "2P%", 
        "3PM", "3PA", "3P%", "FTM", "FTA", "FT%", "EXP","TOT"
    ];

    // Aggiungi la prima riga con gli header alla tabella
    let headerRow = '<tr>';
    headers.forEach(header => {
        headerRow += `<th>${header}</th>`;
    });
    headerRow += '</tr>';
    tableBody.innerHTML = headerRow;

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
            playerRow += `<td>${player.name}</td>`;
            playerRow += `<td>${player.stats_g1[0]}</td>`;
            playerRow += `<td>${player.stats_g1[9]}</td>`;
            playerRow += `<td>${player.stats_g1[7]}</td>`;
            playerRow += `<td>${player.stats_g1[8]}</td>`;
            playerRow += `<td>${player.stats_g1[10]}</td>`;
            playerRow += `<td>${player.stats_g1[12]}</td>`;
            playerRow += `<td>${player.stats_g1[13]}</td>`;
            playerRow += `<td>${player.stats_g1[11]}</td>`;
            playerRow += `<td>${player.stats_g1[1]}</td>`;
            playerRow += `<td>${player.stats_g1[1] + player.stats_g1[2]}</td>`;
            playerRow += `<td>${calculatePercentage(player.stats_g1[1], player.stats_g1[1] + player.stats_g1[2])}</td>`;
            playerRow += `<td>${player.stats_g1[3]}</td>`;
            playerRow += `<td>${player.stats_g1[3] + player.stats_g1[4]}</td>`;
            playerRow += `<td>${calculatePercentage(player.stats_g1[3], player.stats_g1[3] + player.stats_g1[4])}</td>`;
            playerRow += `<td>${player.stats_g1[5]}</td>`;
            playerRow += `<td>${player.stats_g1[5] + player.stats_g1[6]}</td>`;
            playerRow += `<td>${calculatePercentage(player.stats_g1[5], player.stats_g1[5] + player.stats_g1[6])}</td>`;
            playerRow += `<td>${player.stats_g1[14]}</td>`;
            playerRow += `<td><strong>${player.tot}</strong></td>`;
            playerRow += '</tr>';
            tableBody.innerHTML += playerRow;
        }
    });
}


// Funzione per popolare la tabella per un team specifico
function populateTable_g2(team, players) {
    const tableBody = document.getElementById(`tableBodyG2${team}`);

    // Intestazione dei parametri da mostrare nella tabella
    const headers = [
        "Giocatore", "PTS", "REB", "DR", "OR", "A", "ST", "BLK", "TO", "2PM", "2PA", "2P%", 
        "3PM", "3PA", "3P%", "FTM", "FTA", "FT%", "EXP","TOT"
    ];

    // Aggiungi la prima riga con gli header alla tabella
    let headerRow = '<tr>';
    headers.forEach(header => {
        headerRow += `<th>${header}</th>`;
    });
    headerRow += '</tr>';
    tableBody.innerHTML = headerRow;

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
            playerRow += `<td>${player.name}</td>`;
            playerRow += `<td>${player.stats_g2[0]}</td>`;
            playerRow += `<td>${player.stats_g2[9]}</td>`;
            playerRow += `<td>${player.stats_g2[7]}</td>`;
            playerRow += `<td>${player.stats_g2[8]}</td>`;
            playerRow += `<td>${player.stats_g2[10]}</td>`;
            playerRow += `<td>${player.stats_g2[12]}</td>`;
            playerRow += `<td>${player.stats_g2[13]}</td>`;
            playerRow += `<td>${player.stats_g2[11]}</td>`;
            playerRow += `<td>${player.stats_g2[1]}</td>`;
            playerRow += `<td>${player.stats_g2[1] + player.stats_g2[2]}</td>`;
            playerRow += `<td>${calculatePercentage(player.stats_g2[1], player.stats_g2[1] + player.stats_g2[2])}</td>`;
            playerRow += `<td>${player.stats_g2[3]}</td>`;
            playerRow += `<td>${player.stats_g2[3] + player.stats_g2[4]}</td>`;
            playerRow += `<td>${calculatePercentage(player.stats_g2[3], player.stats_g2[3] + player.stats_g2[4])}</td>`;
            playerRow += `<td>${player.stats_g2[5]}</td>`;
            playerRow += `<td>${player.stats_g2[5] + player.stats_g2[6]}</td>`;
            playerRow += `<td>${calculatePercentage(player.stats_g2[5], player.stats_g2[5] + player.stats_g2[6])}</td>`;
            playerRow += `<td><strong>${player.tot}</strong></td>`;
            playerRow += '</tr>';
            tableBody.innerHTML += playerRow;
        }
    });
}

// Funzione per popolare la tabella per un team specifico
function populateTable_g3(team, players) {
    const tableBody = document.getElementById(`tableBodyG3${team}`);

    // Intestazione dei parametri da mostrare nella tabella
    const headers = [
        "Giocatore", "PTS", "REB", "DR", "OR", "A", "ST", "BLK", "TO", "2PM", "2PA", "2P%", 
        "3PM", "3PA", "3P%", "FTM", "FTA", "FT%", "EXP","TOT"
    ];

    // Aggiungi la prima riga con gli header alla tabella
    let headerRow = '<tr>';
    headers.forEach(header => {
        headerRow += `<th>${header}</th>`;
    });
    headerRow += '</tr>';
    tableBody.innerHTML = headerRow;

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
            playerRow += `<td>${player.name}</td>`;
            playerRow += `<td>${player.stats_g3[0]}</td>`;
            playerRow += `<td>${player.stats_g3[9]}</td>`;
            playerRow += `<td>${player.stats_g3[7]}</td>`;
            playerRow += `<td>${player.stats_g3[8]}</td>`;
            playerRow += `<td>${player.stats_g3[10]}</td>`;
            playerRow += `<td>${player.stats_g3[12]}</td>`;
            playerRow += `<td>${player.stats_g3[13]}</td>`;
            playerRow += `<td>${player.stats_g3[11]}</td>`;
            playerRow += `<td>${player.stats_g3[1]}</td>`;
            playerRow += `<td>${player.stats_g3[1] + player.stats_g3[2]}</td>`;
            playerRow += `<td>${calculatePercentage(player.stats_g3[1], player.stats_g3[1] + player.stats_g3[2])}</td>`;
            playerRow += `<td>${player.stats_g3[3]}</td>`;
            playerRow += `<td>${player.stats_g3[3] + player.stats_g3[4]}</td>`;
            playerRow += `<td>${calculatePercentage(player.stats_g3[3], player.stats_g3[3] + player.stats_g3[4])}</td>`;
            playerRow += `<td>${player.stats_g3[5]}</td>`;
            playerRow += `<td>${player.stats_g3[5] + player.stats_g3[6]}</td>`;
            playerRow += `<td>${calculatePercentage(player.stats_g3[5], player.stats_g3[5] + player.stats_g3[6])}</td>`;
            playerRow += `<td><strong>${player.tot}</strong></td>`;
            playerRow += '</tr>';
            tableBody.innerHTML += playerRow;
        }
    });
}

// Funzione per popolare la tabella per un team specifico
function populateTable_semi(team, players) {
    const tableBody = document.getElementById(`tableBodySemi${team}`);

    // Intestazione dei parametri da mostrare nella tabella
    const headers = [
        "Giocatore", "PTS", "REB", "DR", "OR", "A", "ST", "BLK", "TO", "2PM", "2PA", "2P%", 
        "3PM", "3PA", "3P%", "FTM", "FTA", "FT%", "EXP","TOT"
    ];

    // Aggiungi la prima riga con gli header alla tabella
    let headerRow = '<tr>';
    headers.forEach(header => {
        headerRow += `<th>${header}</th>`;
    });
    headerRow += '</tr>';
    tableBody.innerHTML = headerRow;

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
            playerRow += `<td>${player.name}</td>`;
            playerRow += `<td>${player.stats_semi[0]}</td>`;
            playerRow += `<td>${player.stats_semi[9]}</td>`;
            playerRow += `<td>${player.stats_semi[7]}</td>`;
            playerRow += `<td>${player.stats_semi[8]}</td>`;
            playerRow += `<td>${player.stats_semi[10]}</td>`;
            playerRow += `<td>${player.stats_semi[12]}</td>`;
            playerRow += `<td>${player.stats_semi[13]}</td>`;
            playerRow += `<td>${player.stats_semi[11]}</td>`;
            playerRow += `<td>${player.stats_semi[1]}</td>`;
            playerRow += `<td>${player.stats_semi[1] + player.stats_semi[2]}</td>`;
            playerRow += `<td>${calculatePercentage(player.stats_semi[1], player.stats_semi[1] + player.stats_semi[2])}</td>`;
            playerRow += `<td>${player.stats_semi[3]}</td>`;
            playerRow += `<td>${player.stats_semi[3] + player.stats_semi[4]}</td>`;
            playerRow += `<td>${calculatePercentage(player.stats_semi[3], player.stats_semi[3] + player.stats_semi[4])}</td>`;
            playerRow += `<td>${player.stats_semi[5]}</td>`;
            playerRow += `<td>${player.stats_semi[5] + player.stats_semi[6]}</td>`;
            playerRow += `<td>${calculatePercentage(player.stats_semi[5], player.stats_semi[5] + player.stats_semi[6])}</td>`;
            playerRow += `<td><strong>${player.tot}</strong></td>`;
            playerRow += '</tr>';
            tableBody.innerHTML += playerRow;
        }
    });
}


// Funzione per popolare la tabella per un team specifico
function populateTable_final(team, players) {
    const tableBody = document.getElementById(`tableBodyFinal${team}`);

    // Intestazione dei parametri da mostrare nella tabella
    const headers = [
        "Giocatore", "PTS", "REB", "DR", "OR", "A", "ST", "BLK", "TO", "2PM", "2PA", "2P%", 
        "3PM", "3PA", "3P%", "FTM", "FTA", "FT%", "EXP","TOT"
    ];

    // Aggiungi la prima riga con gli header alla tabella
    let headerRow = '<tr>';
    headers.forEach(header => {
        headerRow += `<th>${header}</th>`;
    });
    headerRow += '</tr>';
    tableBody.innerHTML = headerRow;

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
            playerRow += `<td>${player.name}</td>`;
            playerRow += `<td>${player.stats_final[0]}</td>`;
            playerRow += `<td>${player.stats_final[9]}</td>`;
            playerRow += `<td>${player.stats_final[7]}</td>`;
            playerRow += `<td>${player.stats_final[8]}</td>`;
            playerRow += `<td>${player.stats_final[10]}</td>`;
            playerRow += `<td>${player.stats_final[12]}</td>`;
            playerRow += `<td>${player.stats_final[13]}</td>`;
            playerRow += `<td>${player.stats_final[11]}</td>`;
            playerRow += `<td>${player.stats_final[1]}</td>`;
            playerRow += `<td>${player.stats_final[1] + player.stats_final[2]}</td>`;
            playerRow += `<td>${calculatePercentage(player.stats_final[1], player.stats_final[1] + player.stats_final[2])}</td>`;
            playerRow += `<td>${player.stats_final[3]}</td>`;
            playerRow += `<td>${player.stats_final[3] + player.stats_final[4]}</td>`;
            playerRow += `<td>${calculatePercentage(player.stats_final[3], player.stats_final[3] + player.stats_final[4])}</td>`;
            playerRow += `<td>${player.stats_final[5]}</td>`;
            playerRow += `<td>${player.stats_final[5] + player.stats_final[6]}</td>`;
            playerRow += `<td>${calculatePercentage(player.stats_final[5], player.stats_final[5] + player.stats_final[6])}</td>`;
            playerRow += `<td><strong>${player.tot}</strong></td>`;
            playerRow += '</tr>';
            tableBody.innerHTML += playerRow;
        }
    });
}

// Chiamata alla funzione per popolare le tabelle per ciascun team
populateTable_g1("NORD", players);
// Popola le tabelle per EST, SUD e WEST allo stesso modo
populateTable_g1("EST", players);
populateTable_g1("SUD", players);
populateTable_g1("WEST", players);

populateTable_g2("NORD", players);
populateTable_g2("EST", players);
populateTable_g2("SUD", players);
populateTable_g2("WEST", players);

populateTable_g3("NORD", players);
populateTable_g3("EST", players);
populateTable_g3("SUD", players);
populateTable_g3("WEST", players);

populateTable_semi("NORD", players);
populateTable_semi("EST", players);
populateTable_semi("SUD", players);
populateTable_semi("WEST", players);

populateTable_final("NORD", players);
populateTable_final("EST", players);
populateTable_final("SUD", players);
populateTable_final("WEST", players);
