import {
    pdkWeights,
    player_type,
    players,
    td3Weights,
    what_day_is_it,
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


document.addEventListener('DOMContentLoaded', function() {
    const playerCardsContainer = document.getElementById('playerCardsContainer');

    // Ordina i giocatori in ordine decrescente in base a 'meme_tot'
    const sortedPlayers = players.slice().sort((a, b) => b.meme_tot - a.meme_tot);

    // Crea e mostra le schede dei giocatori con solo nome e meme_tot
    sortedPlayers.forEach((player, index) => {
        const card = document.createElement('div');
        card.classList.add('player-card', `cardclass${player.team}`);
        // card.innerHTML = `
        //     <h3>${index + 1}. ${player.name}</h3>
        //     <p>G1: ${player.stats_g1[MEME]*pdkWeights[MEME]}</p>
        //     <p>G2: ${player.stats_g2[MEME]*pdkWeights[MEME]}</p>
        //     <p>G3: ${player.stats_g3[MEME]*pdkWeights[MEME]}</p>
        //     <p>Semifinale: ${player.stats_semi[MEME]*pdkWeights[MEME]}</p>
        //     <p>Tiro da 3: ${player.stats_td3[TD3_CIAB]*td3Weights[TD3_CIAB]+player.stats_td3[TD3_ALTRI_MEME]*td3Weights[TD3_ALTRI_MEME]}</p>
        //     <p>Finale: ${player.stats_final[MEME]*pdkWeights[MEME]}</p>
        //     <p class="total">Punti meme: ${player.meme_tot}</p>
        // `;
        let cardHtml = ``
        if(index == 0){
            cardHtml = `
                <h3><span class="big_emoji">🤡</span><br>${player.name}</h3>
            `;
        }else{
            cardHtml = `
                <h3>${index + 1}. ${player.name}</h3>
            `;
        }

        if (what_day_is_it >= 1) {
            cardHtml += `<p>G1: ${(player.stats_g1[MEME] * pdkWeights[MEME])}</p>`;
        }
        if (what_day_is_it >= 2) {
            cardHtml += `<p>G2: ${(player.stats_g2[MEME] * pdkWeights[MEME])}</p>`;
        }
        if (what_day_is_it >= 3) {
            cardHtml += `<p>G3: ${(player.stats_g3[MEME] * pdkWeights[MEME])}</p>`;
        }
        if (what_day_is_it >= 4) {
            cardHtml += `<p>Semifinale: ${(player.stats_semi[MEME] * pdkWeights[MEME])}</p>`;
        }
        if (what_day_is_it >= 5) {
            const td3_meme_tot_temp = player.stats_td3[TD3_CIAB] * td3Weights[TD3_CIAB] + player.stats_td3[TD3_ALTRI_MEME] * td3Weights[TD3_ALTRI_MEME];
            cardHtml += `<p>Tiro da 3: ${td3_meme_tot_temp}</p>`;
        }
        if (what_day_is_it >= 6) {
            cardHtml += `<p>Finale: ${(player.stats_final[MEME] * pdkWeights[MEME])}</p>`;
        }

        cardHtml += `<p class="total_memes">PUNTI MEME:<br><span class="total">${player.meme_tot}</span></p>`;

        card.innerHTML = cardHtml;
        playerCardsContainer.appendChild(card);
    });
});
