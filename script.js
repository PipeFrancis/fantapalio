









// script.js
import { fantateams } from './data.js';

document.addEventListener("DOMContentLoaded", function() {
    const select = document.getElementById("teamDetails");

    //Rimuovi eventuali opzioni esistenti
    select.innerHTML = '';

    // Aggiungi nuove opzioni dal data.js
    fantateams.forEach(team => {
        const opt = document.createElement('option');
        opt.value = team.team_index;
        opt.textContent = team.name;
        select.appendChild(opt);
    });

});





