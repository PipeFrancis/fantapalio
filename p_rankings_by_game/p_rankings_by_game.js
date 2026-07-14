import {
    players,pdkWeights, td3Weights, what_day_is_it, td3_bonus_passadaprimoultimo,
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
} from '../data260715_0019.js';

document.addEventListener('DOMContentLoaded', () => {
    const playerCardsContainer = document.getElementById('playerCardsContainer');
    const sortSelect = document.getElementById('sortSelect');

    const valueToKeyMap = {
        'totale': 'tot',
        'g1': 'g1',
        'g2': 'g2',
        'g3': 'g3',
        'semifinale': 'semi',
        'td3': 'td3',
        'finale': 'final'
    };

    function renderPlayers(sortKey) {

        // start extra

        const formatValue = (value) => (value > 0 ? `+${value}` : value);

        // Funzione per creare una scheda partita
        const createGameCard = (selectedPlayer, score, game_stats, index) => { // attenzione funzioni leggermente modificate rispetto che in player detail
            const card = document.createElement('div');
            card.classList.add('player-card', `cardclass${selectedPlayer.team}`);
            let statsHtml = `
                <h3>${index + 1}. ${selectedPlayer.name}</h3>
                <p>#${selectedPlayer.number}</p>
                <p>Totale: <span class="totalpointsindex">${score}</span></p><br>
            `;
            
            // Mette dentro solo stats non nulle
            if (game_stats[PTS] !== 0) statsHtml += `<p>Punti: <strong>${formatValue(game_stats[PTS] * pdkWeights[PTS])}</strong> (${game_stats[PTS]} PTS)</p>`;
            if (game_stats[DREB] !== 0) statsHtml += `<p>Rimbalzi difensivi: <strong>${formatValue(game_stats[DREB] * pdkWeights[DREB])}</strong> (${game_stats[DREB]} DR)</p>`;
            if (game_stats[OREB] !== 0) statsHtml += `<p>Rimbalzi offensivi: <strong>${formatValue(game_stats[OREB] * pdkWeights[OREB])}</strong> (${game_stats[OREB]} OR)</p>`;
            if (game_stats[AST] !== 0) statsHtml += `<p>Assist: <strong>${formatValue(game_stats[AST] * pdkWeights[AST])}</strong> (${game_stats[AST]} AST)</p>`;
            if (game_stats[STL] !== 0) statsHtml += `<p>Palle recuperate: <strong>${formatValue(game_stats[STL] * pdkWeights[STL])}</strong> (${game_stats[STL]} STL)</p>`;
            if (game_stats[TO] !== 0) statsHtml += `<p>Palle perse: <strong>${formatValue(game_stats[TO] * pdkWeights[TO])}</strong> (${game_stats[TO]} TO)</p>`;
            if (game_stats[BLK] !== 0) statsHtml += `<p>Stoppate: <strong>${formatValue(game_stats[BLK] * pdkWeights[BLK])}</strong> (${game_stats[BLK]} BLK)</p>`;
            // if (game_stats[T3P] !== 0) statsHtml += `<p>Triple segnate: <strong>${formatValue(game_stats[T3P] * pdkWeights[T3P])}</strong> (${game_stats[T3P]} 3PM)</p>`;
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
        const createGameCard_td3 = (selectedPlayer, score, stats_td3, index) => {
            const card = document.createElement('div');
            card.classList.add('player-card', `cardclass${selectedPlayer.team}`);
            let statsHtml = `
                <h3>${index + 1}. ${selectedPlayer.name}</h3>
                <p>#${selectedPlayer.number}</p>
                <p>Totale: <span class="totalpointsindex">${score}</span></p><br>
            `;
            if (stats_td3[TD3_PARTECIPA] !== 0) statsHtml += `<p>Partecipazione: <strong>${formatValue(stats_td3[TD3_PARTECIPA] * td3Weights[TD3_PARTECIPA])}</strong></p>`;
            if (stats_td3[TD3_NONPARTECIPA] !== 0) statsHtml += `<p>Non partecipa: <strong>${formatValue(stats_td3[TD3_NONPARTECIPA] * td3Weights[TD3_NONPARTECIPA])}</strong></p>`;
            if (stats_td3[TD3_PASSA1] !== 0 && stats_td3[TD3_PASSA1] != td3_bonus_passadaprimoultimo) statsHtml += `<p>Passa al 2° turno: <strong>${formatValue(stats_td3[TD3_PASSA1] * td3Weights[TD3_PASSA1])}</strong></p>`;
            if (stats_td3[TD3_PASSA1] !== 0 && stats_td3[TD3_PASSA1] == td3_bonus_passadaprimoultimo) statsHtml += `<p>Passa al 2° turno (con il miglior punteggio): <strong>${formatValue(stats_td3[TD3_PASSA1] * td3Weights[TD3_PASSA1])}</strong></p>`;
            if (stats_td3[TD3_PASSA2] !== 0 && stats_td3[TD3_PASSA2] != td3_bonus_passadaprimoultimo) statsHtml += `<p>Passa al 3° turno: <strong>${formatValue(stats_td3[TD3_PASSA2] * td3Weights[TD3_PASSA2])}</strong></p>`;
            if (stats_td3[TD3_PASSA2] !== 0 && stats_td3[TD3_PASSA2] == td3_bonus_passadaprimoultimo) statsHtml += `<p>Passa al 3° turno (con il miglior punteggio): <strong>${formatValue(stats_td3[TD3_PASSA2] * td3Weights[TD3_PASSA2])}</strong></p>`;
            if (stats_td3[TD3_PASSA3] !== 0 && stats_td3[TD3_PASSA3] != td3_bonus_passadaprimoultimo) statsHtml += `<p>Passa al 4° turno: <strong>${formatValue(stats_td3[TD3_PASSA3] * td3Weights[TD3_PASSA3])}</strong></p>`;
            if (stats_td3[TD3_PASSA3] !== 0 && stats_td3[TD3_PASSA3] == td3_bonus_passadaprimoultimo) statsHtml += `<p>Passa al 4° turno (con il miglior punteggio): <strong>${formatValue(stats_td3[TD3_PASSA3] * td3Weights[TD3_PASSA3])}</strong></p>`;
            if (stats_td3[TD3_PASSA4] !== 0 && stats_td3[TD3_PASSA4] != td3_bonus_passadaprimoultimo) statsHtml += `<p>Arriva in semifinale: <strong>${formatValue(stats_td3[TD3_PASSA4] * td3Weights[TD3_PASSA4])}</strong></p>`;
            if (stats_td3[TD3_PASSA4] !== 0 && stats_td3[TD3_PASSA4] == td3_bonus_passadaprimoultimo) statsHtml += `<p>Arriva in semifinale (con il miglior punteggio): <strong>${formatValue(stats_td3[TD3_PASSA4] * td3Weights[TD3_PASSA4])}</strong></p>`;
            if (stats_td3[TD3_FINALE] !== 0 && stats_td3[TD3_FINALE] != td3_bonus_passadaprimoultimo) statsHtml += `<p>Arriva in finale: <strong>${formatValue(stats_td3[TD3_FINALE] * td3Weights[TD3_FINALE])}</strong></p>`;
            if (stats_td3[TD3_FINALE] !== 0 && stats_td3[TD3_FINALE] == td3_bonus_passadaprimoultimo) statsHtml += `<p>Arriva in finale (con il miglior punteggio): <strong>${formatValue(stats_td3[TD3_FINALE] * td3Weights[TD3_FINALE])}</strong></p>`;
            // if (stats_td3[TD3_PASSA2] !== 0) statsHtml += `<p>Passa al 3° turno: <strong>${formatValue(stats_td3[TD3_PASSA2] * td3Weights[TD3_PASSA2])}</strong></p>`;
            // if (stats_td3[TD3_PASSA3] !== 0) statsHtml += `<p>Passa al 4° turno: <strong>${formatValue(stats_td3[TD3_PASSA3] * td3Weights[TD3_PASSA3])}</strong></p>`;
            // if (stats_td3[TD3_PASSA4] !== 0) statsHtml += `<p>Arriva in semifinale: <strong>${formatValue(stats_td3[TD3_PASSA4] * td3Weights[TD3_PASSA4])}</strong></p>`;
            // if (stats_td3[TD3_FINALE] !== 0) statsHtml += `<p>Arriva in finale: <strong>${formatValue(stats_td3[TD3_FINALE] * td3Weights[TD3_FINALE])}</strong></p>`;
            if (stats_td3[TD3_3RD] !== 0) statsHtml += `<p>Terzo classificato: <strong>${formatValue(stats_td3[TD3_3RD] * td3Weights[TD3_3RD])}</strong></p>`;
            if (stats_td3[TD3_2ND] !== 0) statsHtml += `<p>Secondo classificato: <strong>${formatValue(stats_td3[TD3_2ND] * td3Weights[TD3_2ND])}</strong></p>`;
            if (stats_td3[TD3_1ST] !== 0) statsHtml += `<p>Primo classificato: <strong>${formatValue(stats_td3[TD3_1ST] * td3Weights[TD3_1ST])}</strong></p>`;
            if (stats_td3[TD3_0SU10] !== 0) statsHtml += `<p>0 su 10 da 3: <strong>${formatValue(stats_td3[TD3_0SU10] * td3Weights[TD3_0SU10])}</strong></p>`;
            if (stats_td3[TD3_CIAB] !== 0) statsHtml += `<p>Tira in ciabatte: <strong>${formatValue(stats_td3[TD3_CIAB] * td3Weights[TD3_CIAB])}</strong></p>`;
            if (stats_td3[TD3_ALTRI_MEME] !== 0) statsHtml += `<p>Altri punti meme: <strong>${formatValue(stats_td3[TD3_ALTRI_MEME] * td3Weights[TD3_ALTRI_MEME])}</strong></p>`;

            card.innerHTML = statsHtml;
            return card;
        };

        // end extra


        playerCardsContainer.innerHTML = '';

        // Sort players by selected key
        const sortedPlayers = players.slice().sort((a, b) => {
            const aVal = a[sortKey] ?? 0;
            const bVal = b[sortKey] ?? 0;
            return bVal - aVal;
        });

        // Create player cards
        sortedPlayers.forEach((player, index) => {

            // const card = document.createElement('div');
            // card.classList.add('player-card', `cardclass${player.team}`);

            // card.innerHTML = `
            //     <h3>${index + 1}. ${player.name}</h3>
            //     <p><strong>${player[sortKey] ?? 0}</strong></p>
            // `; // useless

            // extra start
            let game_sortKey = "tot";
            switch (sortKey) {
                case "g1":
                    game_sortKey = "stats_g1";
                    break;
                case "g2":
                    game_sortKey = "stats_g2";
                    break;
                case "g3":
                    game_sortKey = "stats_g3";
                    break;
                case "semi":
                    game_sortKey = "stats_semi";
                    break;
                case "td3":
                    game_sortKey = "stats_td3";
                    break;
                case "final":
                    game_sortKey = "stats_final";
                    break;
                default:
                    game_sortKey = "tot";  // fallback to total score if none matched (in this case game_sortKey won't be used)
                    break;
            }
            console.log(sortKey, game_sortKey);
            if (sortKey != "tot" && sortKey != "td3"){ // creates card with all stats for that game
                const createdCard = createGameCard(player,player[sortKey],player[game_sortKey], index);
                playerCardsContainer.appendChild(createdCard);

            }else if (sortKey == "td3"){
                const createdCard = createGameCard_td3(player,player[sortKey],player[game_sortKey], index);
                playerCardsContainer.appendChild(createdCard);

            }else if (sortKey == "tot"){ // creates card with all games totals only
                const createdCard = document.createElement('div');
                createdCard.classList.add('player-card',`cardclass${player.team}`);
                // createdCard.innerHTML = `
                //     <h3>${index + 1}. ${player.name}</h3>
                //     <p>#${player.number}</p>
                //     <p>Prezzo: ${player.cost}</p>
                //     <p class="total">${player.tot.toFixed(2)}</p>
                //     <p>G1: ${player.g1}</p>
                //     <p>G2: ${player.g2}</p>
                //     <p>G3: ${player.g3}</p>
                //     <p>Semifinale: ${player.semi}</p>
                //     <p>Tiro da 3: ${player.td3}</p>
                //     <p>Finale: ${player.final}</p>
                // `;
                let createdHtml = `
                    <h3>${index + 1}. ${player.name}</h3>
                    <p>#${player.number}</p>
                    <p>$${player.cost}</p>
                    <p class="total">${player.tot.toFixed(2)}</p>
                `;

                if (what_day_is_it >= 1) {
                    createdHtml += `<p>G1: ${player.g1}</p>`;
                }
                if (what_day_is_it >= 2) {
                    createdHtml += `<p>G2: ${player.g2}</p>`;
                }
                if (what_day_is_it >= 3) {
                    createdHtml += `<p>G3: ${player.g3}</p>`;
                }
                if (what_day_is_it >= 4) {
                    createdHtml += `<p>Semifinale: ${player.semi}</p>`;
                }
                if (what_day_is_it >= 5) {
                    createdHtml += `<p>Tiro da 3: ${player.td3}</p>`;
                }
                if (what_day_is_it >= 6) {
                    createdHtml += `<p>Finale: ${player.final}</p>`;
                }

                createdCard.innerHTML = createdHtml;
                
                playerCardsContainer.appendChild(createdCard);

            }
            // extra end

            // playerCardsContainer.appendChild(card);
        });

        

    }

    // Initial render with 'totale'
    renderPlayers('tot');

    // Handle dropdown change
    sortSelect.addEventListener('change', (e) => {
        const selectedValue = e.target.value;
        const sortKey = valueToKeyMap[selectedValue];
        if (!sortKey) {
            console.error(`Invalid sort key: ${selectedValue}`);
            return;
        }
        renderPlayers(sortKey);
    });
});


// // Old working version with no stats:
// import {
//     players
// } from '../data260715_0019.js';

// document.addEventListener('DOMContentLoaded', () => {
//     const playerCardsContainer = document.getElementById('playerCardsContainer');
//     const sortSelect = document.getElementById('sortSelect');

//     const valueToKeyMap = {
//         'totale': 'tot',
//         'g1': 'g1',
//         'g2': 'g2',
//         'g3': 'g3',
//         'semifinale': 'semi',
//         'td3': 'td3',
//         'finale': 'final'
//     };

//     function renderPlayers(sortKey) {
//         playerCardsContainer.innerHTML = '';

//         // Sort players by selected key
//         const sortedPlayers = players.slice().sort((a, b) => {
//             const aVal = a[sortKey] ?? 0;
//             const bVal = b[sortKey] ?? 0;
//             return bVal - aVal;
//         });

//         // Create player cards
//         sortedPlayers.forEach((player, index) => {

//             const card = document.createElement('div');
//             card.classList.add('player-card', `cardclass${player.team}`);

//             card.innerHTML = `
//                 <p>${index + 1}. ${player.name}<p>
//                 <p><strong>${player[sortKey] ?? 0}</strong></p>
//             `;

//             playerCardsContainer.appendChild(card);
//         });

       

//     }

//     // Initial render with 'totale'
//     renderPlayers('tot');

//     // Handle dropdown change
//     sortSelect.addEventListener('change', (e) => {
//         const selectedValue = e.target.value;
//         const sortKey = valueToKeyMap[selectedValue];
//         if (!sortKey) {
//             console.error(`Invalid sort key: ${selectedValue}`);
//             return;
//         }
//         renderPlayers(sortKey);
//     });
// });

