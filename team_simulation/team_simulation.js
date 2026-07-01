// Importa l'array di giocatori dal modulo esterno
import { players, player_history_array } from '../data260701_2314.js';
// const players=players25; // messo questo, da updeateare ogni anno ma sticazzi
// https://script.google.com/macros/s/AKfycbxajrln9ImXrubissUw8sgeGcYdDOspUAdrA_RlRzNsPzM05lt4mB_h7rd5h91hB8q-Hg/exec
// Variabili globali per tenere traccia dei giocatori selezionati e dei crediti totali
let selectedPlayers = [];
let totalCost = 0;
const maxCredits = 30; // Massimo credito disponibile per il team

const formlinkused = 0; // se 1, mostra il link al modulo google forms, se 0 non lo mostra e lascia solo il form diretto (e nasconde il messaggio con il link)
const directregistration = !formlinkused; // se 1, mostra il form di registrazione diretto, se 0 mostra solo il link al modulo google forms (e nasconde il form diretto)

// HISTORY POPUP
let activePopup = null;

let pressTimer = null;
let pressedPlayer = null;
let pressedIndex = null;
let pressMode = null; // "add" | "remove"
let longPressTriggered = false;
let pressStartTime = 0;

function onPointerDownAdd(e, player) {
    e.preventDefault();

    pressMode = "add";
    pressedPlayer = player;
    pressedIndex = null;

    startPressCommon(e);
}

function onPointerDownRemove(e, index, player) {
    e.preventDefault();

    pressMode = "remove";
    pressedPlayer = player;
    pressedIndex = index;

    startPressCommon(e);
}

function startPressCommon(e) {
    longPressTriggered = false;
    pressStartTime = Date.now();

    pressTimer = setTimeout(() => {
        longPressTriggered = true;
        showPlayerPopup(pressedPlayer, e);
    }, 500);
}

function onPointerUp(e) {
    clearTimeout(pressTimer);

    const duration = Date.now() - pressStartTime;

    // LONG PRESS → only cleanup
    if (longPressTriggered) {
        removeActivePopup();
        resetPress();
        return;
    }

    // SHORT PRESS → action depends on mode
    if (duration < 500) {
        if (pressMode === "add") {
            addPlayer(pressedPlayer);
        }

        if (pressMode === "remove") {
            removePlayer(pressedIndex);
        }
    }

    resetPress();
}

function onPointerCancel() {
    clearTimeout(pressTimer);
    resetPress();
}

function resetPress() {
    pressedPlayer = null;
    pressedIndex = null;
    pressMode = null;
    longPressTriggered = false;
    pressStartTime = 0;
}



function showPlayerPopup(player, event) {
    // Chiudiamo il popup attivo direttamente senza azzerare isLongPress
    if (activePopup) {
        activePopup.remove();
        activePopup = null;
    }

    const history = player_history_array.find(h => h.name === player.name);
    const hasHistory = !!history;

    const popup = document.createElement('div');
    popup.classList.add('player-history-popup');

    let htmlContent = `<h4 class="player-history-popup-title"><b>${player.name}</b></h4>`;

    if (hasHistory) {
        if (history.tot_25 && history.tot_25 > 0) {
            htmlContent += `<div class="player-history-popup-row">Tot 2025: <b class="orange_text">${history.tot_25}</b></div>`;
        }
        if (history.tot_25 && history.tot_25 < 0) {
            htmlContent += `<div class="player-history-popup-row">Tot 2025: <b class="orange_text">1</b></div>`;
        }
        if (history.tot_24 && history.tot_24 > 0) {
            htmlContent += `<div class="player-history-popup-row">Tot 2024: <b class="orange_text">${history.tot_24}</b></div>`;
        }
        if (history.note && history.note.trim() !== "") {
            htmlContent += `<div class="player-history-popup-note">${history.note}</div>`;
        }
        if (!history.tot_24 && !history.tot_25 && (!history.note || history.note.trim() === "")) {
            htmlContent += `<p style="font-size:0.9em; margin:0;">Nessun dato storico</p>`;
        }
    } else {
        htmlContent += `<p style="font-size:0.9em; margin:0;">Nessun dato storico trovato per questo giocatore.</p>`;
    }

    popup.innerHTML = htmlContent;
    document.body.appendChild(popup);
    activePopup = popup;

    let clientX = 0;
    let clientY = 0;

    if (event.touches && event.touches.length > 0) {
        clientX = event.touches[0].clientX;
        clientY = event.touches[0].clientY;
    } else {
        clientX = event.clientX;
        clientY = event.clientY;
    }

    popup.style.left = `${clientX - 140}px`; 
    popup.style.top = `${clientY}px`;

    const popupRect = popup.getBoundingClientRect();
    if (popupRect.left < 10) {
        popup.style.left = '10px';
    } else if (popupRect.right > window.innerWidth - 10) {
        popup.style.left = `${window.innerWidth - popupRect.width - 10}px`;
    }
}

// Funzione di utility per distruggere il popup quando si rilascia il dito o si clicca fuori
function removeActivePopup() {
    // logMobile( "removeActivePopup");

    if (activePopup) {
        activePopup.remove();
        activePopup = null;
    }
}
// HISTORY END (of starting stuff, then used in other following functions)

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
        alert("Hai già speso troppo per prendere questo giocatore.");
        return;
    }
    // da capire se lasciare questo controllo o lasciarli arrivare in fondo da soli e poi devono cambiarne diversi quando si rendono conto
    if (totalCost + player.cost > maxCredits - 4 * (5 - (selectedPlayers.length + 1))) { // se i crediti che useresti > 4*(giocatori che mancano)
        alert("Se prendessi questo non potresti completare la squadra, costa troppo.");
        return;
    }

    // Aggiungi il giocatore al team
    selectedPlayers.push(player);
    totalCost += player.cost;

    // Aggiorna l'interfaccia del team
    renderTeam();
    updateCreditsCounter();
}

// Funzione per rimuovere un giocatore dal team
function removePlayer(index) {
    const removedPlayer = selectedPlayers.splice(index, 1)[0];
    totalCost -= removedPlayer.cost;

    // Aggiorna l'interfaccia del team
    renderTeam();
    updateCreditsCounter();
}

// Funzione per aggiornare l'interfaccia del team
function renderTeam() {
    const teamContainer = document.getElementById('teamContainer');
    teamContainer.innerHTML = '';

    const validMessage = document.getElementById('validMessage');
    const signupLink = document.getElementById('signupLink');
    const textb4link = document.getElementById('textb4link');
    const submitBtn = document.getElementById('submitTeamBtn');
    const messageContainer = document.getElementById('messageContainerLink');
    const userInfo = document.getElementById('user-info'); 

    if (selectedPlayers.length === 0) {
        teamContainer.innerHTML = '<p><em>Team vuoto</em></p>';
        if (validMessage) {
            validMessage.remove();
        }
        if (signupLink) {
            signupLink.remove();
        }
        if (textb4link) {
            textb4link.remove();
        }
        if (submitBtn) {
            submitBtn.remove();
        }
        if (messageContainer) {
            messageContainer.remove();
        }
    } else {
        if (selectedPlayers.length === 5) {
            if (!validMessage) {
                const newValidMessage = document.createElement('p');
                newValidMessage.textContent = 'VALIDA, continua sotto';
                newValidMessage.classList.add('highlighted-text');
                newValidMessage.classList.add('valid-message');
                // newValidMessage.style.color = 'green';
                newValidMessage.style.fontWeight = 'bold';
                newValidMessage.id = 'validMessage';
                teamContainer.parentNode.insertBefore(newValidMessage, teamContainer);

                if(formlinkused) {
                    // Create container for the message
                    const messageContainerLink = document.createElement('p');
                    messageContainerLink.classList.add('highlighted-text');
                    messageContainerLink.id = 'messageContainerLink';

                    // Add plain text
                    // const plainTextB4link = document.createTextNode('Non hai ancora registrato la squadra. <span class="orange_text">Ricordati</span> i giocatori selezionati e ');
                    const textb4link = document.createElement('span');
                    textb4link.id = 'textb4link';
                    textb4link.innerHTML = 'Non hai ancora registrato la squadra. <span class="orange_text">Ricordati</span> i giocatori selezionati e ';
                    // messageContainerLink.innerHTML = 'Non hai ancora registrato la squadra. <span class="orange_text">Ricordati</span> i giocatori selezionati e ';
                    // Create the link
                    const signupLink = document.createElement('a');
                    signupLink.classList.add('registrationlink');
                    signupLink.href = "https://docs.google.com/forms/d/e/1FAIpQLSe3fKik12LNEV4ZggWzvRN1ueC6tBCAwZVzjOINZ7etyKp91A/viewform?usp=header";
                    signupLink.target = "_blank";
                    signupLink.textContent = 'compila il modulo di iscrizione';
                    signupLink.id = 'signupLink';

                    // Append text and link to the container
                    // messageContainerLink.appendChild(plainTextB4link);
                    messageContainerLink.appendChild(textb4link);
                    messageContainerLink.appendChild(signupLink);
                
                    // Insert the container after the valid message
                    newValidMessage.parentNode.insertBefore(messageContainerLink, newValidMessage.nextSibling);
                }
                if(directregistration) {
                // NEW 26 Inside your if (selectedPlayers.length === 5) block:
                const submitBtn = document.createElement('button');
                submitBtn.id = 'submitTeamBtn';
                submitBtn.textContent = 'Invia Squadra e aspetta il messaggio di conferma';
                submitBtn.classList.add('submit-team-button'); // Use your existing button style
                submitBtn.style.marginTop = '20px';
                submitBtn.addEventListener('click', submitTeam);

                // Safety check: Only append if userInfo element actually exists on the page
                if (userInfo) {
                    userInfo.appendChild(submitBtn);
                }
            }
            }
        } else {
            if (validMessage) {
                validMessage.remove();
            }
            if (signupLink) {
                signupLink.remove();
            }
            if (textb4link) {
                textb4link.remove();
            }
            if (submitBtn) {
                submitBtn.remove();
            }
            if (messageContainer) {
                messageContainer.remove();
            }
        }

        selectedPlayers.forEach((player, index) => {
            const playerCard = document.createElement('div');
            playerCard.classList.add('player-card1', `cardclass${player.team}`);
            playerCard.innerHTML = `
                <p><b>${player.name}</b></p>
               
                <p><b>${player.team}</b> &emsp; <b>$${player.cost}</b></p>
            `;
            playerCard.addEventListener(
                "pointerdown",
                (e) => onPointerDownRemove(e, index, player),
                { passive: false }
            );
            playerCard.addEventListener('pointerup', onPointerUp);
            playerCard.addEventListener('pointercancel', onPointerCancel);
            playerCard.addEventListener("contextmenu", (e) => {e.preventDefault();}); // for not having context menu on chrome mobile emulation on PC
            //POINTER EVENT STUFF END

            teamContainer.appendChild(playerCard);
        });
    }
}



// Funzione per aggiornare i crediti rimanenti
function updateCreditsCounter() {
    const creditsCounter = document.getElementById('creditsCounter');
    creditsCounter.innerHTML = `Hai ancora: <b><span class="orange_text">${maxCredits - totalCost}$</span></b>`;
}


// Funzione per popolare la lista dei giocatori disponibili, ORDINATI SOLO PER TEAM E POI PREZZO
function populatePlayersList() {
    const playersContainer = document.getElementById('playersContainer');
    playersContainer.innerHTML = '';

    // Group players by team
    const teams = ['NORD', 'WEST', 'EST', 'SUD']; // Adjust if you have other team names
    teams.forEach((teamName) => {
        // Filter players belonging to the current team
        const playersOfTeam = players
            .filter(player => player.team === teamName)
            .sort((a, b) => b.cost - a.cost); // Sort descending by cost inside the team

        // Now display players of this team
        playersOfTeam.forEach((player) => {
            const playerCard = document.createElement('div');
            playerCard.classList.add('player-card1', `cardclass${player.team}`);
            playerCard.innerHTML = `
                <p><b>${player.name}</b></p>
                <p><b>${player.team}</b> &emsp; <b>$${player.cost}</b></p>
            `;
            playerCard.addEventListener(
                "pointerdown",
                (e) => onPointerDownAdd(e, player),
                { passive: false }
            );
            playerCard.addEventListener('pointerup', onPointerUp);
            playerCard.addEventListener('pointercancel', onPointerCancel);
            playerCard.addEventListener("contextmenu", (e) => {e.preventDefault();}); // for not having context menu on chrome mobile emulation on PC
            //POINTER EVENT STUFF END


            playersContainer.appendChild(playerCard);
        });
    });

    const creditsCounter = document.createElement('p');
    creditsCounter.id = 'creditsCounter';
    creditsCounter.classList.add('highlighted-text')
    creditsCounter.innerHTML = `Hai ancora: <b><span class="orange_text">${maxCredits}$</span></b>`;
    playersContainer.parentNode.insertBefore(creditsCounter, playersContainer.nextSibling);
}


// Inizializza la pagina
window.onload = () => {
    populatePlayersList();

    // --- REMOVE USER INFO FORM IF DIRECT REGISTRATION IS DISABLED ---
    if (!directregistration) {
        const userInfo = document.getElementById('user-info');
        if (userInfo) {
            userInfo.remove(); // Removes the <div id="user-info"> and all its inputs from the DOM
        }
    }
    
    // --- NEW RIONE BUTTON LOGIC ---
    const rioneButtons = document.querySelectorAll('.rione-btn');
    const hiddenInput = document.getElementById('rioneInput');

    rioneButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'active' class from all buttons
            rioneButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add 'active' class to the clicked button
            this.classList.add('active');

            // Update the hidden input value for the submit function
            hiddenInput.value = this.getAttribute('data-rione');
            
            // Optional: log to console to verify it's working
            console.log("Rione selezionato:", hiddenInput.value);
        });
    });
};

//pointer change start
window.addEventListener('click', (e) => {
    if (!e.target.closest('.player-card1') &&
        !e.target.closest('.player-history-popup')) {
        removeActivePopup();
    }
});
window.addEventListener('scroll', () => {
    removeActivePopup();
});
//pointer change end

//NEW26
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzwUaTw0COjgjKWbNqwZNf2JpApkq0a-xhB-sHub-3vQgCCuD4zJosdMsMJFyslWWs/exec";


//NEW26
async function submitTeam() {
    const rione = document.getElementById('rioneInput').value;
    const teamName = document.getElementById('teamNameInput').value;
    const email = document.getElementById('emailInput').value;
    const fullName = document.getElementById('fullNameInput').value;
    const attendance = document.getElementById('attendanceInput').value;

    // Validation check for all fields
    // if (!rione || !teamName || !email || !fullName || !attendance) {
    //     alert("Per favore, compila tutti i campi richiesti, forse manca il rione.");
    //     return;
    // }
    if (!rione) {
        alert("Per favore, compila tutti i campi richiesti, forse manca il rione.");
        return;
    }
    if (!teamName || teamName.trim() === "") {
        alert("Per favore, compila tutti i campi richiesti, forse manca il nome della squadra.");
        return;
    }
    if (!email || !email.includes("@")) {
        alert("Per favore, compila tutti i campi richiesti, forse manca l' email.");
        return;
    }
    if (!fullName || fullName.trim() === "") {
       alert("Per favore, compila tutti i campi richiesti, forse mancano nome e cognome.");
        return;
    }
    if (!attendance) {
        alert("Per favore, indica se ci sarai alle premiazioni dopo la finale.");
        return;
    }

    if (selectedPlayers.length !== 5) {
        alert("Devi selezionare esattamente 5 giocatori.");
        return;
    }

    const payload = {
        rione: rione,
        teamName: teamName,
        email: email,
        fullName: fullName,
        attendance: attendance,
        // Inviamo sia il nome che il costo per ogni giocatore
        players: selectedPlayers.map(p => ({ name: p.name, cost: p.cost })), 
        totalCost: totalCost
    };

    const submitBtn = document.getElementById('submitTeamBtn');
    submitBtn.disabled = true;
    submitBtn.textContent = "Invio in corso, aspetta...";

    try {
        await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', 
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        
        alert("Squadra registrata con successo, ti arriverà una email di conferma!");
        window.location.reload(); 
    } catch (error) {
        console.error("Error!", error);
        alert("Errore durante l'invio. Riprova.");
        submitBtn.disabled = false;
        submitBtn.textContent = "Invia Squadra";
    }
}


// DEBUG CONSOLE DIV ON MOBILE ANDROID (f12 not available there)
// const debug = document.createElement('div');
// debug.style.position='fixed';
// debug.style.bottom='0';
// debug.style.left='0';
// debug.style.right='0';
// debug.style.background='black';
// debug.style.color='lime';
// debug.style.zIndex='99999';
// debug.style.fontSize='12px';
// debug.style.maxHeight='150px';
// debug.style.overflow='auto';

// document.body.appendChild(debug);

// function logMobile(msg) {
//     debug.innerHTML += msg + "<br>";
// }