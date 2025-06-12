import { rioni25 } from '../data250613_0138.js';

window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.team-cards-container1');

    // Sort the rioni25 array in descending order by chiosco_tot
    const sortedRioni = [...rioni25].sort((a, b) => b.chiosco_tot - a.chiosco_tot);

    sortedRioni.forEach(rione => {
        const card = document.createElement('div');
        card.classList.add('team-card1', `cardclass${rione.name}`);

        card.innerHTML = `
            <h2>${rione.name}</h2>
            <p>${rione.chiosco_tot}</p>
        `;

        container.appendChild(card);
    });
});
