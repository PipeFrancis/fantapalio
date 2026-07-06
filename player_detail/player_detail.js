// questo prima fa un po di robe per generare la tendina coi player elencati per rione
// poi genera le cards una per ogni partita con le stats non nulle (calcolando ogni contributo di stats)
// se si cambiano array di stats è da cambiare anche questo codice


import { players, pdkWeights, td3Weights, what_day_is_it, td3_bonus_passadaprimoultimo,
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
} from '../data260706_0840.js';

document.addEventListener("DOMContentLoaded", function() {
    const select = document.getElementById("playerDetails");
    const playerStatsContainer = document.getElementById("playerStatsContainer");

    // Raggruppa i giocatori per team e ordina all'interno di ogni gruppo
    const teams = ["WEST", "NORD", "EST", "SUD"];
    const groupedPlayers = teams.map(team => {
        return {
            team: team,
            players: players.filter(player => player.team === team).sort((a, b) => b.cost - a.cost)
        };
    });

    // Rimuovi eventuali opzioni esistenti
    select.innerHTML = '';

    // Aggiungi nuove opzioni
    groupedPlayers.forEach(group => {
        // Aggiungi un gruppo di opzioni per ogni team
        const optGroup = document.createElement('optgroup');
        optGroup.label = group.team;
        group.players.forEach((player, index) => {
            const opt = document.createElement('option');
            opt.value = players.indexOf(player); // Usa l'indice del giocatore nell'array originale
            opt.textContent = player.name;
            optGroup.appendChild(opt);
        });
        select.appendChild(optGroup);
    });

    // Aggiungi un event listener per l'evento change sulla tendina
    select.addEventListener("change", function() {
        // Ottieni l'indice del giocatore selezionato
        const playerIndex = parseInt(this.value);

        // Trova il giocatore corrispondente nell'array players
        const selectedPlayer = players[playerIndex];

        // Pulisci il contenitore delle schede
        playerStatsContainer.innerHTML = '';

        const headerContainer = document.createElement('div');
        headerContainer.classList.add('player-stats-header');


        // Crea e aggiungi l'intestazione con il nome del giocatore
        const playerNameHeader = document.createElement('h3');
        playerNameHeader.innerHTML = `${selectedPlayer.name}
                                        <br>#${selectedPlayer.number} ${selectedPlayer.team}
                                        <br>$${selectedPlayer.cost}
                                        <br>${selectedPlayer.player_position_total}° in classifica`;
        headerContainer.appendChild(playerNameHeader);
        
        // Crea e aggiungi l'intestazione con il totale del giocatore
        const playerTotalHeader = document.createElement('h3');
        playerTotalHeader.innerHTML = `Totale: <span class="totalpointsindex">${selectedPlayer.tot}</span>`;
        headerContainer.appendChild(playerTotalHeader);

        // Aggiungi il contenitore delle intestazioni
        playerStatsContainer.appendChild(headerContainer);

        const formatValue = (value) => (value > 0 ? `+${value}` : value);

        // Funzione per creare una scheda partita
        const createGameCard = (game, score, game_stats) => {
            const card = document.createElement('div');
            card.classList.add('game-card', `cardclass${selectedPlayer.team}`);
            let statsHtml = `
                <h3>${game}</h3>
                <p>Totale: <span class="totalpointsindex">${score}</span></p>
            `;

            // Mette dentro solo stats non nulle
            if (game_stats[PTS] !== 0) statsHtml += `<p>Punti: <strong>${formatValue(game_stats[PTS] * pdkWeights[PTS])}</strong> (${game_stats[PTS]} PTS)</p>`;
            if (game_stats[DREB] !== 0) statsHtml += `<p>Rimbalzi difensivi: <strong>${formatValue(game_stats[DREB] * pdkWeights[DREB])}</strong> (${game_stats[DREB]} DR)</p>`;
            if (game_stats[OREB] !== 0) statsHtml += `<p>Rimbalzi offensivi: <strong>${formatValue(game_stats[OREB] * pdkWeights[OREB])}</strong> (${game_stats[OREB]} OR)</p>`;
            if (game_stats[AST] !== 0) statsHtml += `<p>Assist: <strong>${formatValue(game_stats[AST] * pdkWeights[AST])}</strong> (${game_stats[AST]} AST)</p>`;
            if (game_stats[STL] !== 0) statsHtml += `<p>Palle recuperate: <strong>${formatValue(game_stats[STL] * pdkWeights[STL])}</strong> (${game_stats[STL]} STL)</p>`;
            if (game_stats[TO] !== 0) statsHtml += `<p>Palle perse: <strong>${formatValue(game_stats[TO] * pdkWeights[TO])}</strong> (${game_stats[TO]} TO)</p>`;
            if (game_stats[BLK] !== 0) statsHtml += `<p>Stoppate: <strong>${formatValue(game_stats[BLK] * pdkWeights[BLK])}</strong> (${game_stats[BLK]} BLK)</p>`;
            if (game_stats[T3P] !== 0) statsHtml += `<p>Triple segnate: <strong>${formatValue(game_stats[T3P] * pdkWeights[T3P])}</strong> (${game_stats[T3P]} 3PM)</p>`;
            if (game_stats[T2PX] !== 0 || game_stats[T3PX] !== 0) statsHtml += `<p>Tiri sbagliati: <strong>${formatValue((game_stats[T2PX] * pdkWeights[T2PX]) + (game_stats[T3PX] * pdkWeights[T3PX]))}</strong> (${game_stats[T2PX]+ game_stats[T3PX]} miss)</p>`;
            if (game_stats[FTX] !== 0) statsHtml += `<p>Tiri liberi sbagliati: <strong>${formatValue(game_stats[FTX] * pdkWeights[FTX])}</strong> (${game_stats[FTX]} miss)</p>`;
            if (game_stats[DD] !== 0) statsHtml += `<p>Doppia doppia: <strong>${formatValue(game_stats[DD] * pdkWeights[DD])}</strong></p>`;
            if (game_stats[TD] !== 0) statsHtml += `<p>Tripla doppia: <strong>${formatValue(game_stats[TD] * pdkWeights[TD])}</strong></p>`;
            if (game_stats[EXP] !== 0) statsHtml += `<p>Espulsione: <strong>${formatValue(game_stats[EXP] * pdkWeights[EXP])}</strong></p>`;
            if (game_stats[WIN] !== 0) statsHtml += `<p>Vittoria: <strong>${formatValue(game_stats[WIN] * pdkWeights[WIN])}</strong></p>`;
            if (game_stats[MEME] !== 0) statsHtml += `<p>Punti meme: <strong>${formatValue(game_stats[MEME] * pdkWeights[MEME])}</strong></p>`;

            card.innerHTML = statsHtml;
            return card;
        };

        // Funzione per creare una scheda partita specifica per "Tiro da 3"
        const createGameCard_td3 = (game, score, stats_td3) => {
            const card = document.createElement('div');
            card.classList.add('game-card', `cardclass${selectedPlayer.team}`);
            let statsHtml = `
                <h3>${game}</h3>
                <p>Totale: <span class="totalpointsindex">${score}</span></p>
            `;
            console.log(stats_td3);
            if (stats_td3[TD3_PARTECIPA] !== 0) statsHtml += `<p>Partecipazione: <strong>${formatValue(stats_td3[TD3_PARTECIPA]*td3Weights[TD3_PARTECIPA])}</strong></p>`;
            if (stats_td3[TD3_NONPARTECIPA] !== 0) statsHtml += `<p>Non partecipa: <strong>${formatValue(stats_td3[TD3_NONPARTECIPA]*td3Weights[TD3_NONPARTECIPA])}</strong></p>`;
            if (stats_td3[TD3_PASSA1] !== 0 && stats_td3[TD3_PASSA1] != td3_bonus_passadaprimoultimo) statsHtml += `<p>Passa al 2° turno: <strong>${formatValue(stats_td3[TD3_PASSA1]*td3Weights[TD3_PASSA1])}</strong></p>`;
            if (stats_td3[TD3_PASSA1] !== 0 && stats_td3[TD3_PASSA1] == td3_bonus_passadaprimoultimo) statsHtml += `<p>Passa al 2° turno (con il miglior punteggio): <strong>${formatValue(stats_td3[TD3_PASSA1]*td3Weights[TD3_PASSA1])}</strong></p>`;
            if (stats_td3[TD3_PASSA2] !== 0 && stats_td3[TD3_PASSA2] != td3_bonus_passadaprimoultimo) statsHtml += `<p>Passa al 3° turno: <strong>${formatValue(stats_td3[TD3_PASSA2]*td3Weights[TD3_PASSA2])}</strong></p>`;
            if (stats_td3[TD3_PASSA2] !== 0 && stats_td3[TD3_PASSA2] == td3_bonus_passadaprimoultimo) statsHtml += `<p>Passa al 3° turno (con il miglior punteggio): <strong>${formatValue(stats_td3[TD3_PASSA2]*td3Weights[TD3_PASSA2])}</strong></p>`;
            if (stats_td3[TD3_PASSA3] !== 0 && stats_td3[TD3_PASSA3] != td3_bonus_passadaprimoultimo) statsHtml += `<p>Passa al 4° turno: <strong>${formatValue(stats_td3[TD3_PASSA3]*td3Weights[TD3_PASSA3])}</strong></p>`;
            if (stats_td3[TD3_PASSA3] !== 0 && stats_td3[TD3_PASSA3] == td3_bonus_passadaprimoultimo) statsHtml += `<p>Passa al 4° turno (con il miglior punteggio): <strong>${formatValue(stats_td3[TD3_PASSA3]*td3Weights[TD3_PASSA3])}</strong></p>`;
            if (stats_td3[TD3_PASSA4] !== 0 && stats_td3[TD3_PASSA4] != td3_bonus_passadaprimoultimo) statsHtml += `<p>Arriva in semifinale: <strong>${formatValue(stats_td3[TD3_PASSA4]*td3Weights[TD3_PASSA4])}</strong></p>`;
            if (stats_td3[TD3_PASSA4] !== 0 && stats_td3[TD3_PASSA4] == td3_bonus_passadaprimoultimo) statsHtml += `<p>Arriva in semifinale (con il miglior punteggio): <strong>${formatValue(stats_td3[TD3_PASSA4]*td3Weights[TD3_PASSA4])}</strong></p>`;
            if (stats_td3[TD3_FINALE] !== 0 && stats_td3[TD3_FINALE] != td3_bonus_passadaprimoultimo) statsHtml += `<p>Arriva in finale: <strong>${formatValue(stats_td3[TD3_FINALE]*td3Weights[TD3_FINALE])}</strong></p>`;
            if (stats_td3[TD3_FINALE] !== 0 && stats_td3[TD3_FINALE] == td3_bonus_passadaprimoultimo) statsHtml += `<p>Arriva in finale (con il miglior punteggio): <strong>${formatValue(stats_td3[TD3_FINALE]*td3Weights[TD3_FINALE])}</strong></p>`;
            // if (stats_td3[TD3_PASSA1] !== 0) statsHtml += `<p>Passa al 2° turno: <strong>${formatValue(stats_td3[TD3_PASSA1]*td3Weights[TD3_PASSA1])}</strong></p>`;
            // if (stats_td3[TD3_PASSA2] !== 0) statsHtml += `<p>Passa al 3° turno: <strong>${formatValue(stats_td3[TD3_PASSA2]*td3Weights[TD3_PASSA2])}</strong></p>`;
            // if (stats_td3[TD3_PASSA3] !== 0) statsHtml += `<p>Passa al 4° turno: <strong>${formatValue(stats_td3[TD3_PASSA3]*td3Weights[TD3_PASSA3])}</strong></p>`;
            // if (stats_td3[TD3_PASSA4] !== 0) statsHtml += `<p>Arriva in semifinale: <strong>${formatValue(stats_td3[TD3_PASSA4]*td3Weights[TD3_PASSA4])}</strong></p>`;
            // if (stats_td3[TD3_FINALE] !== 0) statsHtml += `<p>Arriva in finale: <strong>${formatValue(stats_td3[TD3_FINALE]*td3Weights[TD3_FINALE])}</strong></p>`;
            if (stats_td3[TD3_3RD] !== 0) statsHtml += `<p>Terzo classificato: <strong>${formatValue(stats_td3[TD3_3RD]*td3Weights[TD3_3RD])}</strong></p>`;
            if (stats_td3[TD3_2ND] !== 0) statsHtml += `<p>Secondo classificato: <strong>${formatValue(stats_td3[TD3_2ND]*td3Weights[TD3_2ND])}</strong></p>`;
            if (stats_td3[TD3_1ST] !== 0) statsHtml += `<p>Primo classificato: <strong>${formatValue(stats_td3[TD3_1ST]*td3Weights[TD3_1ST])}</strong></p>`;
            if (stats_td3[TD3_0SU10] !== 0) statsHtml += `<p>0 su 10 da 3: <strong>${formatValue(stats_td3[TD3_0SU10]*td3Weights[TD3_0SU10])}</strong></p>`;
            if (stats_td3[TD3_CIAB] !== 0) statsHtml += `<p>Tira in ciabatte: <strong>${formatValue(stats_td3[TD3_CIAB]*td3Weights[TD3_CIAB])}</strong></p>`;
            if (stats_td3[TD3_ALTRI_MEME] !== 0) statsHtml += `<p>Altri punti meme: <strong>${formatValue(stats_td3[TD3_ALTRI_MEME]*td3Weights[TD3_ALTRI_MEME])}</strong></p>`;

            card.innerHTML = statsHtml;
            return card;
        };

        // Aggiungi schede per ogni partita
        // playerStatsContainer.appendChild(createGameCard('G1', selectedPlayer.g1, selectedPlayer.stats_g1));
        // playerStatsContainer.appendChild(createGameCard('G2', selectedPlayer.g2, selectedPlayer.stats_g2));
        // playerStatsContainer.appendChild(createGameCard('G3', selectedPlayer.g3, selectedPlayer.stats_g3));
        // playerStatsContainer.appendChild(createGameCard('Semifinale', selectedPlayer.semi, selectedPlayer.stats_semi));
        // playerStatsContainer.appendChild(createGameCard_td3('Tiro da 3', selectedPlayer.td3, selectedPlayer.stats_td3));
        // playerStatsContainer.appendChild(createGameCard('Finale', selectedPlayer.final, selectedPlayer.stats_final));
        const cardsContainer = document.createElement('div');
        cardsContainer.classList.add('player-stats-cards');

        if(what_day_is_it >= 1) // domenica g1 fatta
            cardsContainer.appendChild(createGameCard('G1', selectedPlayer.g1, selectedPlayer.stats_g1));
        if(what_day_is_it >= 2) // lunedì g2 fatto
            cardsContainer.appendChild(createGameCard('G2', selectedPlayer.g2, selectedPlayer.stats_g2));
        if(what_day_is_it >= 3) // mercoledì g3 fatto
            cardsContainer.appendChild(createGameCard('G3', selectedPlayer.g3, selectedPlayer.stats_g3));
        if(what_day_is_it >= 4) // giovedì semi fatto
            cardsContainer.appendChild(createGameCard('Semifinale', selectedPlayer.semi, selectedPlayer.stats_semi));
        if(what_day_is_it >= 5) // venerdì td3 fatto
            cardsContainer.appendChild(createGameCard_td3('Tiro da 3', selectedPlayer.td3, selectedPlayer.stats_td3));
        if(what_day_is_it >= 6) // sabato finale fatto
            cardsContainer.appendChild(createGameCard('Finale', selectedPlayer.final, selectedPlayer.stats_final));

        playerStatsContainer.appendChild(cardsContainer);
    });
});
