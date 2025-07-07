import {
    players
} from '../data250707_2241.js';

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
        playerCardsContainer.innerHTML = '';

        // Sort players by selected key
        const sortedPlayers = players.slice().sort((a, b) => {
            const aVal = a[sortKey] ?? 0;
            const bVal = b[sortKey] ?? 0;
            return bVal - aVal;
        });

        // Create player cards
        sortedPlayers.forEach((player, index) => {

            const card = document.createElement('div');
            card.classList.add('player-card', `cardclass${player.team}`);

            card.innerHTML = `
                <h3>${index + 1}. ${player.name}</h3>
                <p><strong>${player[sortKey] ?? 0}</strong></p>
            `;

            playerCardsContainer.appendChild(card);
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
