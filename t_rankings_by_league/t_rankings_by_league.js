import {
    fantateam_type,
    NORD, SUD, EST, WEST,
    fantateams
} from '../data260717_1639.js';

document.addEventListener('DOMContentLoaded', function() {

    const teamCardsContainer = document.getElementById('teamCardsContainer');
    const leagueSelect = document.getElementById('leagueSelect');

    //--------------------------------------------------
    // Build league dropdown
    //--------------------------------------------------

    // 1. Define your custom priority order
    const priorityOrder = ["GENERALE", "NORD", "EST", "SUD", "WEST"];

    const leagues = [...new Set(
        fantateams
            .flatMap(team => team.league_names || [])
            .filter(name => name && name.trim() !== '')
    )]
    .sort((a, b) => {
        const indexA = priorityOrder.indexOf(a);
        const indexB = priorityOrder.indexOf(b);

        // Case 1: Both leagues are in the priority list -> sort by priority order
        if (indexA !== -1 && indexB !== -1) {
            return indexA - indexB;
        }

        // Case 2: Only 'a' is a priority league -> 'a' comes first
        if (indexA !== -1) return -1;

        // Case 3: Only 'b' is a priority league -> 'b' comes first
        if (indexB !== -1) return 1;

        // Case 4: Neither are priority leagues -> sort alphabetically
        return a.localeCompare(b);
    });

    leagues.forEach(league => {
        const option = document.createElement('option');
        option.value = league;
        option.textContent = league;
        leagueSelect.appendChild(option);
    });

    //--------------------------------------------------
    // Render ranking for one league
    //--------------------------------------------------

    function renderTeams(selectedLeague) {

        teamCardsContainer.innerHTML = '';

        const filteredTeams = fantateams
            .filter(team => team.league_names?.includes(selectedLeague))
            .sort((a, b) => b.tot_team - a.tot_team);

        filteredTeams.forEach((team, index) => {

            const players = [team.p1, team.p2, team.p3, team.p4, team.p5];
            players.sort((a, b) => b.tot - a.tot);

            let playerInfoHTML = '';

            players.forEach(player => {
                playerInfoHTML += `
                    <div class="player-info">
                        ${player.name}
                        (<span class="team_ranking_pdk">${player.tot}</span>)
                    </div>
                `;
            });

            const card = document.createElement('div');
            card.classList.add(
                'team-card',
                `cardclasssoft${team.rione.name}`
            );

            if (index === 0) {
                card.innerHTML = `
                    <div class="team-card-header">
                        <span class="big_emoji">👑</span><br>
                        ${team.name}
                    </div>
                    <div class="team-card-body">
                        <div class="punteggio-info team_ranking_pdk_tot"><strong>${team.tot_team.toFixed(2)}</strong></div>
                        ${playerInfoHTML}
                        <div class="player-info"><b>${team.rione.name}</b> [${team.rione.coach_name}] (<span class="team_ranking_pdk">${team.rione.final_points}</span>)</div>
                    </div>
                `;
            } else {
                card.innerHTML = `
                    <div class="team-card-header">
                        <span class="orange_text">${index + 1}.</span>
                        ${team.name}
                    </div>
                    <div class="team-card-body">
                        <div class="punteggio-info team_ranking_pdk_tot"><strong>${team.tot_team.toFixed(2)}</strong></div>
                        ${playerInfoHTML}
                        <div class="player-info"><b>${team.rione.name}</b> [${team.rione.coach_name}] (<span class="team_ranking_pdk">${team.rione.final_points}</span>)</div>
                    </div>
                `;
            }

            teamCardsContainer.appendChild(card);
        });
    }

    //--------------------------------------------------
    // Initial render
    //--------------------------------------------------

    if (leagues.length > 0) {
        renderTeams(leagues[0]);
    }

    //--------------------------------------------------
    // League change
    //--------------------------------------------------

    leagueSelect.addEventListener('change', (e) => {
        renderTeams(e.target.value);
    });

});