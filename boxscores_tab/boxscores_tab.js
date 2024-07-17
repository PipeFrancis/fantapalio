// Importa player_type e players dal modulo data.js
import { player_type, players } from '../data.js';

// Funzione per popolare la tabella per un team specifico
function populateTable(team, players) {
    const tableBody = document.getElementById(`tableBody${team}`);

    // Intestazione dei parametri da mostrare nella tabella
    const headers = [
        "Giocatore", "PTS", "REB", "DR", "OR", "A", "ST", "BLK", "TO", "2PM", "2PA", "2P%", 
        "3PM", "3PA", "3P%", "FTM", "FTA", "FT%", "EXP"
    ];

    // Aggiungi la prima riga con gli header alla tabella
    let headerRow = '<tr>';
    headers.forEach(header => {
        headerRow += `<th>${header}</th>`;
    });
    headerRow += '</tr>';
    tableBody.innerHTML = headerRow;

    // Popola le righe della tabella con i dati dei giocatori del team specificato
    players.forEach(player => {
        console.log(player.name, player.team); // Verifica quale giocatore viene selezionato
        if (player.team === team) {
            console.log("Adding player:", player.name); // Verifica se il giocatore viene aggiunto alla tabella
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
            playerRow += `<td>${((player.stats_g1[1] / (player.stats_g1[1] + player.stats_g1[2])) * 100).toFixed(1)}%</td>`;
            playerRow += `<td>${player.stats_g1[3]}</td>`;
            playerRow += `<td>${player.stats_g1[3] + player.stats_g1[4]}</td>`;
            playerRow += `<td>${((player.stats_g1[3] / (player.stats_g1[3] + player.stats_g1[4])) * 100).toFixed(1)}%</td>`;
            playerRow += `<td>${player.stats_g1[5]}</td>`;
            playerRow += `<td>${player.stats_g1[5] + player.stats_g1[6]}</td>`;
            playerRow += `<td>${((player.stats_g1[5] / (player.stats_g1[5] + player.stats_g1[6])) * 100).toFixed(1)}%</td>`;
            playerRow += `<td>${player.stats_g1[14]}</td>`;
            playerRow += '</tr>';
            tableBody.innerHTML += playerRow;
        }
    });
}

// Chiamata alla funzione per popolare le tabelle per ciascun team
populateTable("WEST", players);
// Popola le tabelle per EST, SUD e WEST allo stesso modo
// populateTable("EST", players);
// populateTable("SUD", players);
// populateTable("WEST", players);
