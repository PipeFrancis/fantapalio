import {
    player_type,
    players
} from '../data250613_2335.js';

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
            <p class="meme-points">Meme Points: ${player.meme_tot.toFixed(2)}</p>
        `;
        playerCardsContainer.appendChild(card);
    });
});
