// Importa l'array di giocatori dal modulo esterno
import { players } from '../data.js';

// Variabili globali per tenere traccia dei giocatori selezionati e dei crediti totali
let selectedPlayers = [];
let totalCost = 0;
const maxCredits = 30; // Massimo credito disponibile per il team

// Variabile per tenere traccia del messaggio "VALIDO"
let isValidTeam = false;

// Funzione per aggiungere un giocatore al team
function addPlayer(player) {
    // Verifica se il numero di giocatori selezionati ha raggiunto il limite di 5
    if (selectedPlayers.length >= 5) {
        alert("Hai già selezionato il numero massimo di giocatori.");
        return;
    }

    // Verifica se il giocatore è già presente nel team
    if (selectedPlayers.some(p => p.name === player.name)) {
        alert("Questo giocatore è già stato selezionato.");
        return;
    }

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

    // Aggiungi il messaggio "VALIDO" se sono stati selezionati 5 giocatori
    if (selectedPlayers.length === 5 && !isValidTeam) {
        const validMessage = document.createElement('p');
        validMessage.textContent = 'VALIDO';
        validMessage.classList.add('valid-message');
        validMessage.style.color = 'green';
        validMessage.style.fontWeight = 'bold';
        const teamContainer = document.getElementById('teamContainer');
        teamContainer.parentNode.insertBefore(validMessage, teamContainer);
        isValidTeam = true;
    }
}

// Funzione per rimuovere un giocatore dal team
function removePlayer(index) {
    const removedPlayer = selectedPlayers.splice(index, 1)[0];
    totalCost -= removedPlayer.cost;

    // Aggiorna l'interfaccia del team
    renderTeam();

    // Rimuovi il messaggio "VALIDO" se tutti i giocatori sono stati rimossi
    if (selectedPlayers.length < 5 && isValidTeam) {
        const validMessage = document.querySelector('p.valid-message');
        if (validMessage) {
            validMessage.parentNode.removeChild(validMessage);
        }
        isValidTeam = false;
    }
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
            playerCard.classList.add('player-card1',`cardclass${player.team}`);
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
        playerCard.classList.add('player-card1',`cardclass${player.team}`);
        playerCard.innerHTML = `
            <p>${player.name}</p>
            <p>$${player.cost}</p>
            <p>${player.team}</p>
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
