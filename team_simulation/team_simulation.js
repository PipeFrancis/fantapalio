// team_simulation.js

// Importa l'array di giocatori dal modulo esterno
import { players } from '../data.js';
;

// Variabile per tenere traccia dei giocatori selezionati
let selectedPlayers = [];
let totalCost = 0;
const maxCredits = 30; // Massimo credito disponibile per il team

// Funzione per aggiungere un giocatore al team
function addPlayer(player) {
    // Verifica se il totale dei crediti supera il limite
    if (totalCost + player.cost > maxCredits) {
        alert("Non hai abbastanza crediti per selezionare questo giocatore.");
        return;
    }

    // Aggiungi il giocatore al team
    selectedPlayers.push(player);
    totalCost += player.cost;

    // Aggiorna l'interfaccia del team
    renderTeam();
}

// Funzione per rimuovere un giocatore dal team
function removePlayer(index) {
    const removedPlayer = selectedPlayers.splice(index, 1)[0];
    totalCost -= removedPlayer.cost;

    // Aggiorna l'interfaccia del team
    renderTeam();
}

// Funzione per aggiornare l'interfaccia del team
function renderTeam() {
    const teamContainer = document.getElementById('teamContainer');
    teamContainer.innerHTML = '';

    if (selectedPlayers.length === 0) {
        teamContainer.innerHTML = '<p><em>Team vuoto</em></p>';
    } else {
        selectedPlayers.forEach((player, index) => {
            const playerCard = document.createElement('div');
            playerCard.classList.add('player-card1');
            playerCard.innerHTML = `
                <p>${player.name}</p>
                <p>Squadra: ${player.team}</p>
                <p>Costo: ${player.cost}</p>
            `;
            // Aggiungi un evento per rimuovere il giocatore cliccando sulla card
            playerCard.addEventListener('click', () => removePlayer(index));
            teamContainer.appendChild(playerCard);
        });
    }
}

// Funzione per popolare la lista dei giocatori disponibili
function populatePlayersList() {
    const playersContainer = document.getElementById('playersContainer');
    playersContainer.innerHTML = '';

    players.forEach((player) => {
        const playerCard = document.createElement('div');
        playerCard.classList.add('player-card1');
        playerCard.innerHTML = `
            <p>${player.name}</p>
            <p>Squadra: ${player.team}</p>
            <p>Costo: ${player.cost}</p>
        `;
        // Aggiungi un evento per aggiungere il giocatore cliccando sulla card
        playerCard.addEventListener('click', () => addPlayer(player));
        playersContainer.appendChild(playerCard);
    });
}

// Inizializza la pagina
window.onload = () => {
    populatePlayersList();
};
