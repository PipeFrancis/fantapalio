import { rioni25 } from '../data250613_0136.js';

window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.team-cards-container1');

    rioni25.forEach(rione => {
        const card = document.createElement('div');
        card.classList.add('team-card1',`cardclass${rione.name}`);

        card.innerHTML = `
            <h2>${rione.name}</h2>
            <p>${rione.chiosco_tot}</p>
        `;

        container.appendChild(card);
    });
});
