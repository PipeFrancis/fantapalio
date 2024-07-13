import {
    fantateam_type,
    NORD, SUD, EST, WEST,
    fantateams
} from '../data.js';

document.addEventListener('DOMContentLoaded', function() {
    const teamCardsContainer = document.getElementById('teamCardsContainer');

    // Ordina le squadre per punteggio in ordine decrescente
    fantateams.sort((a, b) => b.tot_team - a.tot_team);

    // Ciclo attraverso le squadre e creo le schede
    fantateams.forEach((team, index) => {
        const card = document.createElement('div');
        card.classList.add('team-card');

        card.innerHTML = `
            <div class="team-card-header">${index + 1}. ${team.name}</div>
            <div class="team-card-body">
                <div><span>Punteggio:</span> <strong>${team.tot_team}</strong></div>
                <div class="player-info"> ${team.p1.name} (${team.p1.tot})</div>
                <div class="player-info"> ${team.p2.name} (${team.p2.tot})</div>
                <div class="player-info"> ${team.p3.name} (${team.p3.tot})</div>
                <div class="player-info"> ${team.p4.name} (${team.p4.tot})</div>
                <div class="player-info"> ${team.p5.name} (${team.p5.tot})</div>
                <div><span class="bold">Rione:</span> ${team.rione.name}</div>
            </div>
        `;
        teamCardsContainer.appendChild(card);
    });
});
