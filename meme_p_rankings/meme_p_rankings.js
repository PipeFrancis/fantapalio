import {
    pdkWeights,
    player_type,
    players,
    td3Weights
} from '../data250706_2116.js';

document.addEventListener('DOMContentLoaded', function() {
    const playerCardsContainer = document.getElementById('playerCardsContainer');

    // Ordina i giocatori in ordine decrescente in base a 'meme_tot'
    const sortedPlayers = players.slice().sort((a, b) => b.meme_tot - a.meme_tot);

    // Crea e mostra le schede dei giocatori con solo nome e meme_tot
    sortedPlayers.forEach((player, index) => {
        const card = document.createElement('div');
        card.classList.add('player-card', `cardclass${player.team}`);
        card.innerHTML = `
            <h3>${index + 1}. ${player.name}</h3>
            <p>G1: ${player.stats_g1[18]*pdkWeights[18]}</p>
            <p>G2: ${player.stats_g2[18]*pdkWeights[18]}</p>
            <p>G3: ${player.stats_g3[18]*pdkWeights[18]}</p>
            <p>Semifinale: ${player.stats_semi[18]*pdkWeights[18]}</p>
            <p>Tiro da 3: ${player.stats_td3[11]*td3Weights[11]+player.stats_td3[12]*td3Weights[12]}</p>
            <p>Finale: ${player.stats_final[18]*pdkWeights[18]}</p>
            <p class="total">Punti meme: ${player.meme_tot}</p>
        `;
        playerCardsContainer.appendChild(card);
    });
});
