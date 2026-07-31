// questo prima fa un po di robe per generare la tendina coi player elencati per rione
// poi genera le cards una per ogni partita con le stats non nulle (calcolando ogni contributo di stats)
// se si cambiano array di stats è da cambiare anche questo codice


import { groupedPlayersHistoricalData, 
    players, pdkWeights, td3Weights, what_day_is_it, td3_bonus_passadaprimoultimo,
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
} from '../data260731_1910.js';

// Helper to safely calculate shooting percentages
function calculatePercentage(numerator, denominator) {
    if (!denominator || denominator === 0) return "0%";
    return ((numerator / denominator) * 100).toFixed(1) + "%";
}

// Helper to sum up a specific stat index across all stages for a single year record
function getStatSum(record, statIndex) {
    const stages = ['stats_g1', 'stats_g2', 'stats_g3', 'stats_semi', 'stats_final'];
    return stages.reduce((total, stage) => {
        return total + (record[stage] && record[stage][statIndex] ? record[stage][statIndex] : 0);
    }, 0);
}

function renderPlayerHistoryTable(playerHistoryArray) {
    const tableContainer = document.getElementById("playerHistoryContainer");
    
    if (!playerHistoryArray || playerHistoryArray.length === 0) {
        tableContainer.innerHTML = "<p>No historical data available.</p>";
        return;
    }

    // Determine the latest team to apply the proper CSS class
    const latestRecord = playerHistoryArray[playerHistoryArray.length - 1];
    const latestTeam = latestRecord.team || "WEST"; 
    const tableClass = `boxscore-table${latestTeam}`;

    const headers = [
        "Year/Team", "TOT", "PTS", "REB", "AST", "STL", "BLK", "Meme", "TO", 
        "OREB", "DREB", "2PM", "2PA", "2P%", "3PM", "3PA", "3P%", "FTM", "FTA", "FT%", "EXP"
    ];

    let html = `<table class="${tableClass}"><thead><tr>`;
    headers.forEach(header => html += `<th>${header}</th>`);
    html += '</tr></thead><tbody>';

    // Loop through each year record for the selected player
    playerHistoryArray.forEach(record => {
        // Compute total points across all stages
        const totalPoints = (record.g1 || 0) + (record.g2 || 0) + (record.g3 || 0) + (record.semi || 0) + (record.final || 0);

        // Calculate stat totals using getStatSum helper
        const pts = getStatSum(record, PTS);
        const reb = getStatSum(record, REB);
        const ast = getStatSum(record, AST);
        const stl = getStatSum(record, STL);
        const blk = getStatSum(record, BLK);
        const meme = getStatSum(record, MEME);
        const to = getStatSum(record, TO);
        const oreb = getStatSum(record, OREB);
        const dreb = getStatSum(record, DREB);

        // Shooting stats calculation
        const t2p = getStatSum(record, T2P);
        const t2px = getStatSum(record, T2PX);
        const t2a = t2p + t2px;

        const t3p = getStatSum(record, T3P);
        const t3px = getStatSum(record, T3PX);
        const t3a = t3p + t3px;

        const ft = getStatSum(record, FT);
        const ftx = getStatSum(record, FTX);
        const fta = ft + ftx;

        const exp = getStatSum(record, EXP);

        html += `<tr>`;
        html += `<td><strong>${record.team}</strong></td>`;
        html += `<td><strong>${totalPoints.toFixed(0)}</strong></td>`;
        html += `<td>${pts.toFixed(0)}</td>`;
        html += `<td>${reb.toFixed(0)}</td>`;
        html += `<td>${ast.toFixed(0)}</td>`;
        html += `<td>${stl.toFixed(0)}</td>`;
        html += `<td>${blk.toFixed(0)}</td>`;
        html += `<td>${meme.toFixed(0)}</td>`;
        html += `<td>${to.toFixed(0)}</td>`;
        html += `<td>${oreb.toFixed(0)}</td>`;
        html += `<td>${dreb.toFixed(0)}</td>`;
        html += `<td>${t2p.toFixed(0)}</td>`;
        html += `<td>${t2a.toFixed(0)}</td>`;
        html += `<td>${calculatePercentage(t2p, t2a)}</td>`;
        html += `<td>${t3p.toFixed(0)}</td>`;
        html += `<td>${t3a.toFixed(0)}</td>`;
        html += `<td>${calculatePercentage(t3p, t3a)}</td>`;
        html += `<td>${ft.toFixed(0)}</td>`;
        html += `<td>${fta.toFixed(0)}</td>`;
        html += `<td>${calculatePercentage(ft, fta)}</td>`;
        html += `<td>${exp.toFixed(0)}</td>`;
        html += `</tr>`;
    });

    // Fixed closing tag
    html += '</tbody></table>';
    tableContainer.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function() {
    const select = document.getElementById("playerHistorySelect");

    const teams = ["WEST", "NORD", "EST", "SUD"];

    // 1. Group the player arrays by their LATEST team and sort them by LATEST cost
    const groupedByTeam = teams.map(team => {
        const teamPlayers = groupedPlayersHistoricalData
            .filter(historyArray => {
                const latestRecord = historyArray[historyArray.length - 1];
                return latestRecord && latestRecord.team === team;
            })
            .sort((a, b) => {
                const costA = a[a.length - 1].cost || 0;
                const costB = b[b.length - 1].cost || 0;
                return costB - costA;
            });

        return {
            team: team,
            players: teamPlayers
        };
    });

    // 2. Clear existing options
    select.innerHTML = '';

    // 3. Populate options using optgroup for team separators
    groupedByTeam.forEach(group => {
        if (group.players.length === 0) return;

        const optGroup = document.createElement('optgroup');
        optGroup.label = group.team;

        group.players.forEach(playerHistory => {
            const latestRecord = playerHistory[playerHistory.length - 1];
            const opt = document.createElement('option');

            const masterIndex = groupedPlayersHistoricalData.indexOf(playerHistory);
            
            opt.value = masterIndex; 
            opt.textContent = latestRecord.name;

            optGroup.appendChild(opt);
        });

        select.appendChild(optGroup);
    });

    select.addEventListener("change", function() {
        const selectedIndex = parseInt(this.value, 10);
        const selectedPlayerHistory = groupedPlayersHistoricalData[selectedIndex];
        renderPlayerHistoryTable(selectedPlayerHistory);
    });

    // Trigger change event once on load to display initial player data automatically
    if (select.options.length > 0) {
        select.selectedIndex = 0;
        select.dispatchEvent(new Event('change'));
    }
});