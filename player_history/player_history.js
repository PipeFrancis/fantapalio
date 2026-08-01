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
} from '../data260801_0205.js';

// Global variable to keep track of the Chart instance
// let chartInstance = null;

// // Helper to get CSS variable values from computed styles
// function getCssVariable(varName, fallbackColor) {
//     const value = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
//     return value || fallbackColor;
// }

// Helper to safely calculate shooting percentages
function calculatePercentage(numerator, denominator) {
    if (!denominator || denominator === 0) return "0%";
    return ((numerator / denominator) * 100).toFixed(1) + "%";
}

// Helper to sum up a specific stat index across all regular stages for a single year record
function getStatSum(record, statIndex) {
    const stages = ['stats_g1', 'stats_g2', 'stats_g3', 'stats_semi', 'stats_final'];
    return stages.reduce((total, stage) => {
        return total + (record[stage] && record[stage][statIndex] ? record[stage][statIndex] : 0);
    }, 0);
}

function getCssVariable(varName, defaultValue) {
    const value = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
    return value ? value : defaultValue;
}

const orangeColor = getCssVariable('--main-color3', 'rgb(255, 109, 10)');
const grayColor = getCssVariable('--main-color1', 'rgb(78, 78, 78)');
const darkTextColor = '#1a1a1a';

const roundedWhiteBackgroundPlugin = {
    id: 'customCanvasBackgroundImage',
    beforeDraw: (chart) => {
        const { ctx, width, height } = chart;
        const cornerRadius = 16;

        ctx.save();
        ctx.fillStyle = '#ffffff';
        
        ctx.beginPath();
        if (ctx.roundRect) {
            ctx.roundRect(0, 0, width, height, cornerRadius);
        } else {
            ctx.rect(0, 0, width, height);
        }
        ctx.fill();
        
        ctx.shadowColor = 'rgba(0, 0, 0, 0.08)';
        ctx.shadowBlur = 12;
        ctx.shadowOffsetY = 4;
        
        ctx.restore();
    }
};

// Variable to keep track of the Chart instance (needed to destroy/re-render on selection change)
let chartInstance = null;

function renderPlayerHistoryChart(playerHistoryArray) {
    const canvas = document.getElementById("playerHistoryChart");
    if (!canvas) return;

    if (chartInstance) {
        chartInstance.destroy();
    }

    if (!playerHistoryArray || playerHistoryArray.length === 0) return;

    // // for having thicker bars for good players:
    // // 1. Find the highest single-year total score for this specific player
    // const maxScore = Math.max(...playerHistoryArray.map(r => r.tot || 0));
    // // 2. Set your min/max score thresholds for bar thickness scaling
    // const MIN_BENCHMARK = 20;  // Scores <= 20 get the thinnest bars
    // const MAX_BENCHMARK = 200; // Scores >= 200 get the thickest bars
    // // 3. Clamp the score within the benchmark range
    // const clampedScore = Math.min(Math.max(maxScore, MIN_BENCHMARK), MAX_BENCHMARK);
    // // 4. Calculate dynamic percentage between 0.25 (thin) and 0.85 (thick)
    // const minBarPct = 0.25;
    // const maxBarPct = 0.85;
    // const dynamicBarPct = minBarPct + (
    //     (clampedScore - MIN_BENCHMARK) / (MAX_BENCHMARK - MIN_BENCHMARK)
    // ) * (maxBarPct - minBarPct);

    const labels = playerHistoryArray.map(record => record.year || record.team);
    const memeData = playerHistoryArray.map(record => record.meme_tot || 0);
    const restData = playerHistoryArray.map(record => Math.max(0, (record.tot || 0) - (record.meme_tot || 0)));

    const orangeColor = getCssVariable('--main-color3', 'rgb(255,109,10)');
    const grayColor = getCssVariable('--main-color1', 'rgb(78, 78, 78)');

    chartInstance = new Chart(canvas, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Altri',
                    data: restData,
                    backgroundColor: grayColor,
                    stack: 'totalPoints',
                    // barPercentage: dynamicBarPct,       // <-- Applied dynamically here!
                    barPercentage: 0.6,      // bar thickness
                    categoryPercentage: 0.8
                },
                {
                    label: 'Meme',
                    data: memeData,
                    backgroundColor: orangeColor,
                    stack: 'totalPoints',
                    // barPercentage: dynamicBarPct,       // <-- Applied dynamically here!
                    barPercentage: 0.6,       // bar thickness
                    categoryPercentage: 0.8
                }
            ]
        },
        plugins: [roundedWhiteBackgroundPlugin], 
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    },
                    ticks: {
                        color: '#333333'
                    }
                },
                y: {
                    stacked: true,
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Punti Totali',
                        color: '#333333'
                    },
                    grid: {
                        // Highlight 100 and 200 grid lines with a darker color
                        color: (context) => {
                            const val = context.tick ? context.tick.value : null;
                            if (val === 100 || val === 200) {
                                return 'rgba(0, 0, 0, 0.6)'; // Dark line for 100 & 200
                            }
                            return 'rgba(0, 0, 0, 0.05)'; // Default faint line
                        },
                        // Make 100 and 200 grid lines thicker
                        lineWidth: (context) => {
                            const val = context.tick ? context.tick.value : null;
                            if (val === 100 || val === 200) {
                                return 2;
                            }
                            return 1;
                        }
                    },
                    ticks: {
                        color: '#333333',
                        // Make font bold specifically for 100 and 200
                        font: (context) => {
                            const val = context.tick ? context.tick.value : null;
                            if (val === 100 || val === 200) {
                                return {
                                    weight: 'bold',
                                    size: 13
                                };
                            }
                            return {
                                weight: 'normal',
                                size: 12
                            };
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#333333'
                    }
                },
                tooltip: {
                    mode: 'index',        // <-- CRITICAL: Forces tooltip to include ALL datasets at the touched X position
                    intersect: false,    // <-- Makes touching mobile bars much easier without precise taps
                    callbacks: {
                        footer: function(tooltipItems) {
                            let total = 0;
                            tooltipItems.forEach(item => {
                                total += item.raw;
                            });
                            return 'TOT: ' + total.toFixed(0);
                        }
                    }
                }
            }
        }
    });
}

function renderPlayerHistoryTable(playerHistoryArray) {
    const tableContainer = document.getElementById("playerHistoryContainer");
    
    if (!playerHistoryArray || playerHistoryArray.length === 0) {
        tableContainer.innerHTML = "<p>No historical data available.</p>";
        return;
    }

    const latestRecord = playerHistoryArray[playerHistoryArray.length - 1];
    const latestTeam = latestRecord.team || "WEST"; 
    const tableClass = `boxscore-table${latestTeam}`;

    const headers = [
        "Anno - Squadra", "TOT", "Meme", "TD3", "GP", "PTS", "REB", "AST", "STL", "BLK", "TO", 
        "OREB", "DREB", "2PM", "2PA", "2P%", "3PM", "3PA", "3P%", "FTM", "FTA", "FT%", "EXP"
    ];

    let html = `<table class="${tableClass}"><thead><tr>`;
    headers.forEach(header => html += `<th>${header}</th>`);
    html += '</tr></thead><tbody>';

    playerHistoryArray.forEach(record => {
        const pts = getStatSum(record, PTS);
        const reb = getStatSum(record, REB);
        const ast = getStatSum(record, AST);
        const stl = getStatSum(record, STL);
        const blk = getStatSum(record, BLK);
        const to = getStatSum(record, TO);
        const oreb = getStatSum(record, OREB);
        const dreb = getStatSum(record, DREB);

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

        const td3Stats = record.stats_td3 || [];
        const ciabVal = td3Stats[TD3_CIAB] || 0;
        const ciabWeight = (typeof td3Weights !== 'undefined' && td3Weights[TD3_CIAB]) ? td3Weights[TD3_CIAB] : 1;
        const ciabPoints = ciabVal * ciabWeight;

        const altriMemePoints = td3Stats[TD3_ALTRI_MEME] || 0;
        const calculatedTd3 = (record.td3 || 0) - ciabPoints - altriMemePoints;

        let yearDisplay = record.year ? `${record.year} - ${record.team}` : record.team;
        if (record.name == "Alessandro Sant" && yearDisplay == "2026 - WEST") {
            yearDisplay = "2026 - WEST 🐍";
        }

        html += `<tr>`;
        html += `<td><strong>${yearDisplay}</strong></td>`;
        html += `<td><strong>${(record.tot || 0).toFixed(0)}</strong></td>`;
        html += `<td>${(record.meme_tot || 0).toFixed(0)}</td>`;
        html += `<td>${calculatedTd3.toFixed(0)}</td>`;
        html += `<td>${record.games_played ?? 0}</td>`;
        html += `<td>${pts.toFixed(0)}</td>`;
        html += `<td>${reb.toFixed(0)}</td>`;
        html += `<td>${ast.toFixed(0)}</td>`;
        html += `<td>${stl.toFixed(0)}</td>`;
        html += `<td>${blk.toFixed(0)}</td>`;
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

    html += '</tbody></table>';
    tableContainer.innerHTML = html;

    // Render/update the chart alongside the table
    renderPlayerHistoryChart(playerHistoryArray);
}

document.addEventListener("DOMContentLoaded", function() {
    const select = document.getElementById("playerHistorySelect");
    const teams = ["WEST", "NORD", "EST", "SUD"];

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

    select.innerHTML = '';

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

    if (select.options.length > 0) {
        select.selectedIndex = 0;
        select.dispatchEvent(new Event('change'));
    }
});
// // questo prima fa un po di robe per generare la tendina coi player elencati per rione
// // poi genera le cards una per ogni partita con le stats non nulle (calcolando ogni contributo di stats)
// // se si cambiano array di stats è da cambiare anche questo codice


// import { groupedPlayersHistoricalData, 
//     players, pdkWeights, td3Weights, what_day_is_it, td3_bonus_passadaprimoultimo,
//         PTS   ,
//         T2P   ,
//         T2PX  ,
//         T3P   ,
//         T3PX  ,
//         FT    ,
//         FTX   ,
//         DREB  ,
//         OREB  ,
//         REB   ,
//         AST   ,
//         TO    ,
//         STL   ,
//         BLK   ,
//         EXP   ,
//         DD    ,
//         TD    ,
//         WIN   ,
//         MEME  ,
//         TD3_PARTECIPA      ,
//         TD3_NONPARTECIPA   ,
//         TD3_PASSA1         ,
//         TD3_PASSA2         ,
//         TD3_PASSA3         ,
//         TD3_PASSA4         ,
//         TD3_FINALE         ,
//         TD3_3RD            ,
//         TD3_2ND            ,
//         TD3_1ST            ,
//         TD3_0SU10          ,
//         TD3_CIAB           ,
//         TD3_ALTRI_MEME     ,
// } from '../data260731_2115.js';

// // Helper to safely calculate shooting percentages
// function calculatePercentage(numerator, denominator) {
//     if (!denominator || denominator === 0) return "0%";
//     return ((numerator / denominator) * 100).toFixed(1) + "%";
// }

// // Helper to sum up a specific stat index across all regular stages for a single year record
// function getStatSum(record, statIndex) {
//     const stages = ['stats_g1', 'stats_g2', 'stats_g3', 'stats_semi', 'stats_final'];
//     return stages.reduce((total, stage) => {
//         return total + (record[stage] && record[stage][statIndex] ? record[stage][statIndex] : 0);
//     }, 0);
// }

// function renderPlayerHistoryTable(playerHistoryArray) {
//     const tableContainer = document.getElementById("playerHistoryContainer");
    
//     if (!playerHistoryArray || playerHistoryArray.length === 0) {
//         tableContainer.innerHTML = "<p>No historical data available.</p>";
//         return;
//     }

//     // Determine the latest team to apply the proper CSS class
//     const latestRecord = playerHistoryArray[playerHistoryArray.length - 1];
//     const latestTeam = latestRecord.team || "WEST"; 
//     const tableClass = `boxscore-table${latestTeam}`;

//     // Updated headers: Added "Partite Giocate" right after "TOT"
//     const headers = [
//         "Anno - Squadra", "TOT", "Meme", "TD3", "GP", "PTS", "REB", "AST", "STL", "BLK", "TO", 
//         "OREB", "DREB", "2PM", "2PA", "2P%", "3PM", "3PA", "3P%", "FTM", "FTA", "FT%", "EXP"
//     ];

//     let html = `<table class="${tableClass}"><thead><tr>`;
//     headers.forEach(header => html += `<th>${header}</th>`);
//     html += '</tr></thead><tbody>';

//     // Loop through each year record for the selected player
//     playerHistoryArray.forEach(record => {
//         // Stats calculations
//         const pts = getStatSum(record, PTS);
//         const reb = getStatSum(record, REB);
//         const ast = getStatSum(record, AST);
//         const stl = getStatSum(record, STL);
//         const blk = getStatSum(record, BLK);
//         const to = getStatSum(record, TO);
//         const oreb = getStatSum(record, OREB);
//         const dreb = getStatSum(record, DREB);

//         // Shooting stats calculation
//         const t2p = getStatSum(record, T2P);
//         const t2px = getStatSum(record, T2PX);
//         const t2a = t2p + t2px;

//         const t3p = getStatSum(record, T3P);
//         const t3px = getStatSum(record, T3PX);
//         const t3a = t3p + t3px;

//         const ft = getStatSum(record, FT);
//         const ftx = getStatSum(record, FTX);
//         const fta = ft + ftx;

//         const exp = getStatSum(record, EXP);

//         // TD3 calculation with meme point deductions
//         const td3Stats = record.stats_td3 || [];
//         const ciabVal = td3Stats[TD3_CIAB] || 0;
//         const ciabWeight = (typeof td3Weights !== 'undefined' && td3Weights[TD3_CIAB]) ? td3Weights[TD3_CIAB] : 1;
//         const ciabPoints = ciabVal * ciabWeight;

//         const altriMemePoints = td3Stats[TD3_ALTRI_MEME] || 0;
//         const calculatedTd3 = (record.td3 || 0) - ciabPoints - altriMemePoints;

//         // Fallback display if 'year' property isn't present
//         let yearDisplay = record.year ? `${record.year} - ${record.team}` : record.team;
//         if (record.name == "Alessandro Sant" && yearDisplay == "2026 - WEST") {
//             yearDisplay = "2026 - WEST 🐍"
//         }

//         html += `<tr>`;
//         html += `<td><strong>${yearDisplay}</strong></td>`;
//         html += `<td><strong>${(record.tot || 0).toFixed(0)}</strong></td>`;
//         html += `<td>${(record.meme_tot || 0).toFixed(0)}</td>`;
//         html += `<td>${calculatedTd3.toFixed(0)}</td>`;
//         html += `<td>${record.games_played ?? 0}</td>`; // Partite Giocate column
//         html += `<td>${pts.toFixed(0)}</td>`;
//         html += `<td>${reb.toFixed(0)}</td>`;
//         html += `<td>${ast.toFixed(0)}</td>`;
//         html += `<td>${stl.toFixed(0)}</td>`;
//         html += `<td>${blk.toFixed(0)}</td>`;
//         html += `<td>${to.toFixed(0)}</td>`;
//         html += `<td>${oreb.toFixed(0)}</td>`;
//         html += `<td>${dreb.toFixed(0)}</td>`;
//         html += `<td>${t2p.toFixed(0)}</td>`;
//         html += `<td>${t2a.toFixed(0)}</td>`;
//         html += `<td>${calculatePercentage(t2p, t2a)}</td>`;
//         html += `<td>${t3p.toFixed(0)}</td>`;
//         html += `<td>${t3a.toFixed(0)}</td>`;
//         html += `<td>${calculatePercentage(t3p, t3a)}</td>`;
//         html += `<td>${ft.toFixed(0)}</td>`;
//         html += `<td>${fta.toFixed(0)}</td>`;
//         html += `<td>${calculatePercentage(ft, fta)}</td>`;
//         html += `<td>${exp.toFixed(0)}</td>`;
//         html += `</tr>`;
//     });

//     html += '</tbody></table>';
//     tableContainer.innerHTML = html;
// }

// document.addEventListener("DOMContentLoaded", function() {
//     const select = document.getElementById("playerHistorySelect");

//     const teams = ["WEST", "NORD", "EST", "SUD"];

//     // 1. Group the player arrays by their LATEST team and sort them by LATEST cost
//     const groupedByTeam = teams.map(team => {
//         const teamPlayers = groupedPlayersHistoricalData
//             .filter(historyArray => {
//                 const latestRecord = historyArray[historyArray.length - 1];
//                 return latestRecord && latestRecord.team === team;
//             })
//             .sort((a, b) => {
//                 const costA = a[a.length - 1].cost || 0;
//                 const costB = b[b.length - 1].cost || 0;
//                 return costB - costA;
//             });

//         return {
//             team: team,
//             players: teamPlayers
//         };
//     });

//     // 2. Clear existing options
//     select.innerHTML = '';

//     // 3. Populate options using optgroup for team separators
//     groupedByTeam.forEach(group => {
//         if (group.players.length === 0) return;

//         const optGroup = document.createElement('optgroup');
//         optGroup.label = group.team;

//         group.players.forEach(playerHistory => {
//             const latestRecord = playerHistory[playerHistory.length - 1];
//             const opt = document.createElement('option');

//             const masterIndex = groupedPlayersHistoricalData.indexOf(playerHistory);
            
//             opt.value = masterIndex; 
//             opt.textContent = latestRecord.name;

//             optGroup.appendChild(opt);
//         });

//         select.appendChild(optGroup);
//     });

//     select.addEventListener("change", function() {
//         const selectedIndex = parseInt(this.value, 10);
//         const selectedPlayerHistory = groupedPlayersHistoricalData[selectedIndex];
//         renderPlayerHistoryTable(selectedPlayerHistory);
//     });

//     // Trigger change event once on load to display initial player data automatically
//     if (select.options.length > 0) {
//         select.selectedIndex = 0;
//         select.dispatchEvent(new Event('change'));
//     }
// });