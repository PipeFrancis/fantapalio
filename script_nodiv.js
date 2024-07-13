









// script.js
import { fantateams } from './data.js';

document.addEventListener("DOMContentLoaded", function() {
    const select = document.getElementById("teamDetails");

    //Rimuovi eventuali opzioni esistenti
    select.innerHTML = '';

    // Aggiungi nuove opzioni dal data.js
    fantateams.forEach(team => {
        const opt = document.createElement('option');
        opt.value = team.team_index;
        opt.textContent = team.name;
        select.appendChild(opt);
    });
    // Aggiungi un event listener per l'evento change sulla tendina
    select.addEventListener("change", function() {
        // Ottieni l'indice del team selezionato
        const teamIndex = parseInt(this.value);

        // Trova il team corrispondente nell'array fantateams
        const selectedTeam = fantateams.find(team => team.team_index === teamIndex);

        // Pulisci il corpo della tabella
        tableBody.innerHTML = '';

        // Aggiungi le righe per i giocatori p1, p2, p3, p4, p5 del team selezionato
        for (let i = 1; i <= 5; i++) {
            const player = selectedTeam['p' + i];

            // Crea una nuova riga
            const row = document.createElement('tr');
            
            // Aggiungi le celle con i dati del giocatore
            appendCell(row, player.cost); //costo
            appendCell(row, player.name);
            appendCell(row, player.g1);
            appendCell(row, player.g2);
            appendCell(row, player.g3);
            appendCell(row, player.semi);
            appendCell(row, player.td3);
            appendCell(row, player.final);
            appendCell(row, player.tot);

            // Aggiungi la riga alla tabella
            tableBody.appendChild(row);
        }

        // Aggiungi la riga per il rione
        const rioneRow = document.createElement('tr');
        appendEmptyCells(rioneRow, 1); // Celle vuote
        appendCell(rioneRow, selectedTeam.rione.name); // Nome rione
        appendEmptyCells(rioneRow, 6); // Celle vuote
        appendCell(rioneRow, selectedTeam.rione.final_points); // Punti finali del rione
        tableBody.appendChild(rioneRow);

        // Aggiungi l'ultima riga per i totali del team
        const totalRow = document.createElement('tr');
        appendCell(totalRow, selectedTeam.total_cost); // totale costo
        appendCell(totalRow, "TOTALE");
        appendCell(totalRow, selectedTeam.tot_g1);
        appendCell(totalRow, selectedTeam.tot_g2);
        appendCell(totalRow, selectedTeam.tot_g3);
        appendCell(totalRow, selectedTeam.tot_semi);
        appendCell(totalRow, selectedTeam.tot_td3);
        appendCell(totalRow, selectedTeam.tot_final);
        appendCell(totalRow, selectedTeam.tot_team);

        // Aggiungi la classe CSS per rendere la riga in grassetto
        totalRow.classList.add('bold-row');
        
        tableBody.appendChild(totalRow);
    });

    // Funzione per aggiungere una cella alla riga della tabella
    function appendCell(row, text) {
        const cell = document.createElement('td');
        cell.textContent = text;
        row.appendChild(cell);
    }

    // Funzione per aggiungere celle vuote alla riga della tabella
    function appendEmptyCells(row, count) {
        for (let i = 0; i < count; i++) {
            const cell = document.createElement('td');
            row.appendChild(cell);
        }
    }
});





