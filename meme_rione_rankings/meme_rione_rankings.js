import {
    pdkWeights,
    player_type,
    players,
    td3Weights,
    NORD, SUD, EST, WEST, rioni,
    what_day_is_it,
        MEME  ,
        TD3_CIAB           ,
        TD3_ALTRI_MEME     ,
} from '../data260803_2319.js';


document.addEventListener('DOMContentLoaded', function() {
    const playerCardsContainer = document.getElementById('playerCardsContainer');

    // Ordina i rioni in ordine decrescente in base a 'meme_tot_tot'
    const sortedRioni = rioni.slice().sort((a, b) => b.meme_tot_tot - a.meme_tot_tot);

    sortedRioni.forEach((Rione, index)=>{
        const card = document.createElement('div');
        card.classList.add('player-card', `cardclass${Rione.name}`);
        let cardHtml = ``
        if(index == 0){
            cardHtml = `
                <h3><span class="big_emoji">🤡🤡🤡</span><br>${player.name}</h3>
            `;
        }else{
            cardHtml = `
                <h3>${index + 1}. ${Rione.name}</h3>
            `;
        }

        if (what_day_is_it >= 1) {
            cardHtml += `<p>G1: ${(Rione.meme_tot_g1)}</p>`;
        }
        if (what_day_is_it >= 2) {
            cardHtml += `<p>G2: ${(Rione.meme_tot_g2)}</p>`;
        }
        if (what_day_is_it >= 3) {
            cardHtml += `<p>G3: ${(Rione.meme_tot_g3)}</p>`;
        }
        if (what_day_is_it >= 4) {
            cardHtml += `<p>Semifinale: ${(Rione.meme_tot_semi)}</p>`;
        }
        if (what_day_is_it >= 5) {
            cardHtml += `<p>Tiro da 3:: ${(Rione.meme_tot_td3)}</p>`;
        }
        if (what_day_is_it >= 6) {
            cardHtml += `<p>Finale: ${(Rione.meme_tot_final)}</p>`;
        }

        cardHtml += `<p class="total_memes">MEME TOTALI:<br><span class="total">${Rione.meme_tot_tot}</span></p>`;

        card.innerHTML = cardHtml;
        playerCardsContainer.appendChild(card);
    });
});
