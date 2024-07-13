
import {
    player_type,
    rione_type,
    fantateam_type,
    MassimilianoMoretti, AndreaMoretti, LarryTrevisan, AlessandroCostantini, MatteoMargarit,
    MauroCuridori, ChristianZanet, GiacomoPiacentini, GiovanniDalFarra, MiracleObichukwu,
    LucaDellaLonga, AlessandroRojatti, MicheleGorasso, GiacomoFerigo, UmbertoNobile,
    DevinChiarcos, ValentinoCigainero, MicheleDeAnna, DavideParon, AlessioFurlan,
    MichaelMargarit, SebastianoTonizzo,
    DanieleGanzit, GiacomoSilvestri, VittorioGri, VittorioBasso, AlessandroRizzi,
    MassimoBaldassi, GabrieleMiani, MarcoMarchetti, MarcoLombardo, MicheleVendrame,
    LorenzoSchinella, GioeleTudini, FilippoPasquon, TommasoMartello, MarcoRizzi,
    DavidGaspardo, AntonioGri, RiccardoSchinella,
    SimoneMartinelli, MatteoSpagnolo, DavideFaurlin, GiovanniTonizzo, AlessandroSant,
    MatteoBazzaro, AlessandroSantin, AlessandroGalassi, PietroSoramel, FilippoAgnoluzzi,
    EmanueleDaneluzzi, LucaSoramel, PaoloZorzi, ChristianFedrizzi, FilippoSappa,
    GiovanniZanin, EnricoSant, StefanoPolano,
    MarcoPolo, MarcoSerrao, WilliamIob, DavideBroggi, AlexMicottis,
    MassimilianoRossi, MassimoMasotti, EugenioDeTina, LucaAnedda, DenisVanin,
    ThomasBaracetti, LucaGemo, DiegoNata, MattiaRoiatti, EdoardoPicogna,
    MauroPerina, LorenzoMoro, GionaTell, IacopoPivetta, MattiaMasotti,
    NORD, SUD, EST, WEST,
    ft1, ft2, ft3, ft4, ft5, ft6, ft7, ft8, ft9, ft10, 
    ft11, ft12, ft13, ft14, ft15, ft16, ft17, ft18, ft19, ft20, 
    ft21, ft22, ft23, ft24, ft25, ft26, ft27, ft28, ft29, ft30, 
    ft31, ft32, ft33, ft34, ft35, ft36, ft37, ft38, ft39, ft40, 
    ft41, ft42, ft43, ft44, ft45, ft46, ft47, ft48, ft49, ft50, 
    ft51, ft52, ft53, ft54, ft55, ft56, ft57, ft58, ft59, ft60, 
    ft61, ft62, ft63, ft64, ft65, ft66, ft67, ft68, ft69, ft70, 
    ft71, ft72, ft73, ft74, ft75, ft76, ft77, ft78, ft79, ft80, 
    ft81, ft82, ft83, ft84, ft85, ft86, ft87, ft88, ft89, ft90, 
    ft91, ft92,
    players,
    fantateams
}from '../data.js';

document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.getElementById('tableBody');

    // Ciclo attraverso i giocatori e creo le righe della tabella
    players.forEach((player, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${player.name}</td>
            <td>${player.cost}</td>
            <td>${player.tot}</td>
            <td>${player.g1}</td>
            <td>${player.g2}</td>
            <td>${player.g3}</td>
            <td>${player.semi}</td>
            <td>${player.td3}</td>
            <td>${player.final}</td>
        `;
        tableBody.appendChild(row);
    });
});