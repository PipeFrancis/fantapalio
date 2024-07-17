    // data.js

    // Definizione del tipo player_type
    const player_type = {
        name: "Nome Giocatore",
        team: "Nome Squadra",
        g1: 0.0,
        stats_g1: Array(19).fill(0),
        g2: 0.0,
        stats_g2: Array(19).fill(0),
        g3: 0.0,
        stats_g3: Array(19).fill(0),
        semi: 0.0,
        stats_semi: Array(19).fill(0),
        td3: 0.0,
        final: 0.0,
        stats_final: Array(19).fill(0),
        tot: 0.0,
        cost: 0
    };
//questo array sarà da riempire per ogni giocatore per ogni partita
//poi il resto (player.g1 ecc viene calcolato in automatico)
//                   0    1   2   3    4   5   6    7   8    9     10  11  12  13  14   15  16  17   18
// gx_stats =      [PTS, 2P, 2Px, 3P, 3Px, FT, FTx, DR, OR, Rtot, ASS, TO, ST, BL, EXP, DD, TD, Win, Meme]
//pesi per ogni stat (totale sarà calcolato con sumproduct)




    // Definizione del tipo rione_type
    const rione_type = {
        name: "Nome Rione",
        final_points: 0
    };

    // Definizione del tipo fantateam_type
    const fantateam_type = {
        team_index: 0,
        name: "Nome Fantasquadra",
        p1: { ...player_type }, // Esempio di inclusione di player_type come attributo di fantateam_type
        p2: { ...player_type },
        p3: { ...player_type },
        p4: { ...player_type },
        p5: { ...player_type },
        rione: { ...rione_type }, // Esempio di inclusione di rione_type come attributo di fantateam_type
        total_cost : 0,
        tot_g1: 0.0,
        tot_g2: 0.0,
        tot_g3: 0.0,
        tot_semi: 0.0,
        tot_td3: 0.0,
        tot_final: 0.0,
        tot_team: 0.0,
    };


    //definizione players
    // Team WEST
    const MassimilianoMoretti = { ...player_type, team: "WEST", name: "Massimiliano Moretti", cost: 11 };
    const AndreaMoretti = { ...player_type, team: "WEST", name: "Andrea Moretti", cost: 4 };
    const LarryTrevisan = { ...player_type, team: "WEST", name: "Larry Trevisan", cost: 6 };
    const AlessandroCostantini = { ...player_type, team: "WEST", name: "Alessandro Costantini", cost: 7 };
    const MatteoMargarit = { ...player_type, team: "WEST", name: "Matteo Margarit", cost: 7 };
    const MauroCuridori = { ...player_type, team: "WEST", name: "Mauro Curidori", cost: 5 };
    const ChristianZanet = { ...player_type, team: "WEST", name: "Christian Zanet", cost: 6 };
    const GiacomoPiacentini = { ...player_type, team: "WEST", name: "Giacomo Piacentini", cost: 5 };
    const GiovanniDalFarra = { ...player_type, team: "WEST", name: "Giovanni dal Farra", cost: 4 };
    const MiracleObichukwu = { ...player_type, team: "WEST", name: "Miracle Obichukwu", cost: 4 };
    const LucaDellaLonga = { ...player_type, team: "WEST", name: "Luca della Longa", cost: 4 };
    const AlessandroRojatti = { ...player_type, team: "WEST", name: "Alessandro Rojatti", cost: 4 };
    const MicheleGorasso = { ...player_type, team: "WEST", name: "Michele Gorasso", cost: 5 };
    const GiacomoFerigo = { ...player_type, team: "WEST", name: "Giacomo Ferigo", cost: 4 };
    const UmbertoNobile = { ...player_type, team: "WEST", name: "Umberto Nobile", cost: 7 };
    const DevinChiarcos = { ...player_type, team: "WEST", name: "Devin Chiarcos", cost: 4 };
    const ValentinoCigainero = { ...player_type, team: "WEST", name: "Valentino Cigainero", cost: 5 };
    const MicheleDeAnna = { ...player_type, team: "WEST", name: "Michele de Anna", cost: 6 };
    const DavideParon = { ...player_type, team: "WEST", name: "Davide Paron", cost: 4 };
    const AlessioFurlan = { ...player_type, team: "WEST", name: "Alessio Furlan", cost: 4 };
    const MichaelMargarit = { ...player_type, team: "WEST", name: "Michael Margarit", cost: 4 };
    const SebastianoTonizzo = { ...player_type, team: "WEST", name: "Sebastiano Tonizzo", cost: 4 };

    // Team NORD
    const DanieleGanzit = { ...player_type, team: "NORD", name: "Daniele Ganzit", cost: 5 };
    const GiacomoSilvestri = { ...player_type, team: "NORD", name: "Giacomo Silvestri", cost: 5 };
    const VittorioGri = { ...player_type, team: "NORD", name: "Vittorio Gri", cost: 5 };
    const VittorioBasso = { ...player_type, team: "NORD", name: "Vittorio Basso", cost: 4 };
    const AlessandroRizzi = { ...player_type, team: "NORD", name: "Alessandro Rizzi", cost: 7 };
    const MassimoBaldassi = { ...player_type, team: "NORD", name: "Massimo Baldassi", cost: 4 };
    const GabrieleMiani = { ...player_type, team: "NORD", name: "Gabriele Miani", cost: 14 };
    const MarcoMarchetti = { ...player_type, team: "NORD", name: "Marco Marchetti", cost: 4 };
    const MarcoLombardo = { ...player_type, team: "NORD", name: "Marco Lombardo", cost: 7 };
    const MicheleVendrame = { ...player_type, team: "NORD", name: "Michele Vendrame", cost: 4 };
    const LorenzoSchinella = { ...player_type, team: "NORD", name: "Lorenzo Schinella", cost: 4 };
    const GioeleTudini = { ...player_type, team: "NORD", name: "Gioele Tudini", cost: 4 };
    const FilippoPasquon = { ...player_type, team: "NORD", name: "Filippo Pasquon", cost: 5 };
    const TommasoMartello = { ...player_type, team: "NORD", name: "Tommaso Martello", cost: 6 };
    const MarcoRizzi = { ...player_type, team: "NORD", name: "Marco Rizzi", cost: 4 };
    const DavidGaspardo = { ...player_type, team: "NORD", name: "David Gaspardo", cost: 9 };
    const AntonioGri = { ...player_type, team: "NORD", name: "Antonio Gri", cost: 4 };
    const RiccardoSchinella = { ...player_type, team: "NORD", name: "Riccardo Schinella", cost: 4 };

    // Team SUD
    const SimoneMartinelli = { ...player_type, team: "SUD", name: "Simone Martinelli", cost: 4 };
    const MatteoSpagnolo = { ...player_type, team: "SUD", name: "Matteo Spagnolo", cost: 4 };
    const DavideFaurlin = { ...player_type, team: "SUD", name: "Davide Faurlin", cost: 4 };
    const GiovanniTonizzo = { ...player_type, team: "SUD", name: "Giovanni Tonizzo", cost: 5 };
    const AlessandroSant = { ...player_type, team: "SUD", name: "Alessandro Sant", cost: 8 };
    const MatteoBazzaro = { ...player_type, team: "SUD", name: "Matteo Bazzaro", cost: 4 };
    const AlessandroSantin = { ...player_type, team: "SUD", name: "Alessandro Santin", cost: 4 };
    const AlessandroGalassi = { ...player_type, team: "SUD", name: "Alessandro Galassi", cost: 5 };
    const PietroSoramel = { ...player_type, team: "SUD", name: "Pietro Soramel", cost: 6 };
    const FilippoAgnoluzzi = { ...player_type, team: "SUD", name: "Filippo Agnoluzzi", cost: 4 };
    const EmanueleDaneluzzi = { ...player_type, team: "SUD", name: "Emanuele Daneluzzi", cost: 5 };
    const LucaSoramel = { ...player_type, team: "SUD", name: "Luca Soramel", cost: 5 };
    const PaoloZorzi = { ...player_type, team: "SUD", name: "Paolo Zorzi", cost: 4 };
    const ChristianFedrizzi = { ...player_type, team: "SUD", name: "Christian Fedrizzi", cost: 4 };
    const FilippoSappa = { ...player_type, team: "SUD", name: "Filippo Sappa", cost: 8 };
    const GiovanniZanin = { ...player_type, team: "SUD", name: "Giovanni Zanin", cost: 9 };
    const EnricoSant = { ...player_type, team: "SUD", name: "Enrico Sant", cost: 5 };
    const StefanoPolano = { ...player_type, team: "SUD", name: "Stefano Polano", cost: 5 };

    // Team EST
    const MarcoPolo = { ...player_type, team: "EST", name: "Marco Polo", cost: 4 };
    const MarcoSerrao = { ...player_type, team: "EST", name: "Marco Serrao", cost: 7 };
    const WilliamIob = { ...player_type, team: "EST", name: "William Iob", cost: 7 };
    const DavideBroggi = { ...player_type, team: "EST", name: "Davide Broggi", cost: 4 };
    const AlexMicottis = { ...player_type, team: "EST", name: "Alex Micottis", cost: 4 };
    const MassimilianoRossi = { ...player_type, team: "EST", name: "Massimiliano Rossi", cost: 4 };
    const MassimoMasotti = { ...player_type, team: "EST", name: "Massimo Masotti", cost: 4 };
    const EugenioDeTina = { ...player_type, team: "EST", name: "Eugenio De Tina", cost: 5 };
    const LucaAnedda = { ...player_type, team: "EST", name: "Luca Anedda", cost: 4 };
    const DenisVanin = { ...player_type, team: "EST", name: "Denis Vanin", cost: 4 };
    const ThomasBaracetti = { ...player_type, team: "EST", name: "Thomas Baracetti", cost: 4 };
    const LucaGemo = { ...player_type, team: "EST", name: "Luca Gemo", cost: 4 };
    const DiegoNata = { ...player_type, team: "EST", name: "Diego Nata", cost: 9 };
    const MattiaRoiatti = { ...player_type, team: "EST", name: "Mattia Roiatti", cost: 4 };
    const EdoardoPicogna = { ...player_type, team: "EST", name: "Edoardo Picogna", cost: 4 };
    const MauroPerina = { ...player_type, team: "EST", name: "Mauro Perina", cost: 4 };
    const LorenzoMoro = { ...player_type, team: "EST", name: "Lorenzo Moro", cost: 5 };
    const GionaTell = { ...player_type, team: "EST", name: "Giona Tell", cost: 5 };
    const IacopoPivetta = { ...player_type, team: "EST", name: "Iacopo Pivetta", cost: 6 };
    const MattiaMasotti = { ...player_type, team: "EST", name: "Mattia Masotti", cost: 6 };



    // Definizione Rioni
    const NORD = { ...rione_type, name: "NORD", final_points: 0 };
    const SUD  = { ...rione_type, name: "SUD", final_points: 0 };
    const EST  = { ...rione_type, name: "EST", final_points: 0 };
    const WEST = { ...rione_type, name: "WEST", final_points: 0 };
    //questo commentone da non cancellare che serve per averli vuoti prima di riempirli
    // //                               | | | | | | | | | | | | | | | | | | | 
    // //     gx_stats =             [PTS, 2Px,3Px,FTx, OR, ASS,ST,EXP,TD,Meme]
    // //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    // //                               | | | | | | | | | | | | | | | | | | | 
    // MassimilianoMoretti.stats_g2=   []; //13
    // AndreaMoretti.stats_g2 =        []; //24
    // LarryTrevisan.stats_g2 =        []; // 23
    // AlessandroCostantini.stats_g2 = []; // 4 
    // MatteoMargarit.stats_g2 =       []; // 22
    // MauroCuridori.stats_g2 =        []; // 2 
    // ChristianZanet.stats_g2 =       []; // 9
    // GiacomoPiacentini.stats_g2 =    []; // 20
    // GiovanniDalFarra.stats_g2 =     []; // 7
    // MiracleObichukwu.stats_g2 =     []; // 14
    // LucaDellaLonga.stats_g2 =       []; // 3
    // AlessandroRojatti.stats_g2 =    []; // 12
    // MicheleGorasso.stats_g2 =       []; // 21
    // GiacomoFerigo.stats_g2 =        []; // 16
    // UmbertoNobile.stats_g2 =        []; // 15
    // DevinChiarcos.stats_g2 =        []; // 18
    // ValentinoCigainero.stats_g2 =   []; //
    // MicheleDeAnna.stats_g2 =        []; //
    // DavideParon.stats_g2 =          []; // 6
    // AlessioFurlan.stats_g2 =        []; // 10
    // MichaelMargarit.stats_g2 =      []; //
    // SebastianoTonizzo.stats_g2 =    []; // 5
    // //                               | | | | | | | | | | | | | | | | | | | 
    // //     gx_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    // //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    // //                               | | | | | | | | | | | | | | | | | | | 
    // DanieleGanzit.stats_g2 =        []; // 
    // GiacomoSilvestri.stats_g2 =     []; // 9
    // VittorioGri.stats_g2 =          []; // 11
    // VittorioBasso.stats_g2 =        []; // 8
    // AlessandroRizzi.stats_g2 =      []; // 10
    // MassimoBaldassi.stats_g2 =      []; // 
    // GabrieleMiani.stats_g2 =        []; // 14
    // MarcoMarchetti.stats_g2 =       []; // 
    // MarcoLombardo.stats_g2 =        []; // 15
    // MicheleVendrame.stats_g2 =      []; // 13
    // LorenzoSchinella.stats_g2 =     []; // 3
    // GioeleTudini.stats_g2 =         []; // 7
    // FilippoPasquon.stats_g2 =       []; // 2
    // TommasoMartello.stats_g2 =      []; // 16
    // MarcoRizzi.stats_g2 =           []; // 6
    // DavidGaspardo.stats_g2 =        []; // 19
    // AntonioGri.stats_g2 =           []; // 5
    // RiccardoSchinella.stats_g2 =    []; // 1
    // //                               | | | | | | | | | | | | | | | | | | | 
    // //     gx_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    // //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    // //                               | | | | | | | | | | | | | | | | | | | 
    // SimoneMartinelli.stats_g2 =     []; // 22
    // MatteoSpagnolo.stats_g2 =       []; // 21
    // DavideFaurlin.stats_g2 =        []; // 18
    // GiovanniTonizzo.stats_g2 =      []; // 5
    // AlessandroSant.stats_g2 =       []; // 7
    // MatteoBazzaro.stats_g2 =        []; // 1
    // AlessandroSantin.stats_g2 =     []; // 10
    // AlessandroGalassi.stats_g2 =    []; // 19
    // PietroSoramel.stats_g2 =        []; // 16
    // FilippoAgnoluzzi.stats_g2 =     []; // 2
    // EmanueleDaneluzzi.stats_g2 =    []; // 6
    // LucaSoramel.stats_g2 =          []; // 12
    // PaoloZorzi.stats_g2 =           []; // 9
    // ChristianFedrizzi.stats_g2 =    []; // 3
    // FilippoSappa.stats_g2 =         []; // 15
    // GiovanniZanin.stats_g2 =        []; // 23
    // EnricoSant.stats_g2 =           []; // 4
    // StefanoPolano.stats_g2 =        []; // 17
    // //                                 | | | | | | | | | | | | | | | | | | 
    // //     gx_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    // //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    // //                               | | | | | | | | | | | | | | | | | | | 
    // MarcoPolo.stats_g2 =            []; // 15
    // MarcoSerrao.stats_g2 =          []; // 8
    // WilliamIob.stats_g2 =           []; // 12
    // DavideBroggi.stats_g2 =         []; // 3
    // AlexMicottis.stats_g2 =         []; // 21
    // MassimilianoRossi.stats_g2 =    []; // 22
    // MassimoMasotti.stats_g2 =       []; // 10
    // EugenioDeTina.stats_g2 =        []; // 9
    // LucaAnedda.stats_g2 =           []; // 5
    // DenisVanin.stats_g2 =           []; // 17
    // ThomasBaracetti.stats_g2 =      []; // 2
    // LucaGemo.stats_g2 =             []; // 6
    // DiegoNata.stats_g2 =            []; // 19
    // MattiaRoiatti.stats_g2 =        []; // 11
    // EdoardoPicogna.stats_g2 =       []; // 7
    // MauroPerina.stats_g2 =          []; // 18
    // LorenzoMoro.stats_g2 =          []; // 14
    // GionaTell.stats_g2 =            []; // 4
    // IacopoPivetta.stats_g2 =        []; // 20
    // MattiaMasotti.stats_g2 =        []; // 13
    // //                               | | | | | | | | | | | | | | | | | | | 
    // //     gx_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    // //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    // //                               | | | | | | | | | | | | | | | | | | | 
    //     gx_stats =             [PTS, 2Px,3Px,FTx, OR, ASS,ST,EXP,TD,Meme]
    //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    MassimilianoMoretti.stats_g1=   [0,2,2,0,1,0,0,2,2,0,0,1,3,0,0,0,0,1,1]; //13
    AndreaMoretti.stats_g1 =        [0,0,3,0,1,0,0,3,1,0,0,3,0,0,0,0,0,1,0]; //24
    LarryTrevisan.stats_g1 =        [0,0,2,0,1,1,1,3,1,0,2,1,1,0,0,0,0,1,0]; // 23
    AlessandroCostantini.stats_g1 = [0,3,0,0,2,0,0,2,0,0,0,0,0,0,0,0,0,1,1]; // 4 
    MatteoMargarit.stats_g1 =       [0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1]; // 22
    MauroCuridori.stats_g1 =        [0,2,0,1,2,0,0,2,0,0,1,3,1,0,0,0,0,1,0]; // 2 
    ChristianZanet.stats_g1 =       [0,0,0,0,1,0,0,0,0,0,1,2,0,0,0,0,0,1,0]; // 9
    GiacomoPiacentini.stats_g1 =    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 20
    GiovanniDalFarra.stats_g1 =     [0,1,1,0,1,0,2,1,0,0,0,1,1,0,0,0,0,1,0]; // 7
    MiracleObichukwu.stats_g1 =     [0,1,2,0,0,2,0,0,2,0,0,1,0,0,0,0,0,1,0]; // 14
    LucaDellaLonga.stats_g1 =       [0,0,1,0,0,2,0,1,0,0,1,3,0,0,0,0,0,1,0]; // 3
    AlessandroRojatti.stats_g1 =    [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 12
    MicheleGorasso.stats_g1 =       [0,2,2,0,1,2,1,1,1,0,1,0,1,0,0,0,0,1,0]; // 21
    GiacomoFerigo.stats_g1 =        [0,0,0,1,1,0,0,2,0,0,1,1,1,0,0,0,0,1,0]; // 16
    UmbertoNobile.stats_g1 =        [0,2,0,0,0,2,0,5,3,0,5,0,1,0,0,0,0,1,0]; // 15
    DevinChiarcos.stats_g1 =        [0,2,2,4,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1]; // 18
    ValentinoCigainero.stats_g1 =   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; //
    MicheleDeAnna.stats_g1 =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; //
    DavideParon.stats_g1 =          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 6
    AlessioFurlan.stats_g1 =        [0,0,2,1,0,2,0,1,0,0,0,0,0,0,0,0,0,1,1]; // 10
    MichaelMargarit.stats_g1 =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; //
    SebastianoTonizzo.stats_g1 =    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 5
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    DanieleGanzit.stats_g1 =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2]; // 
    GiacomoSilvestri.stats_g1 =     [0,0,0,0,1,1,1,0,0,0,0,2,0,0,0,0,0,1,3]; // 9
    VittorioGri.stats_g1 =          [0,1,5,0,0,0,0,1,0,0,0,2,1,0,0,0,0,1,3]; // 11
    VittorioBasso.stats_g1 =        [0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,1,2]; // 8
    AlessandroRizzi.stats_g1 =      [0,0,2,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,3]; // 10
    MassimoBaldassi.stats_g1 =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2]; // 
    GabrieleMiani.stats_g1 =        [0,6,3,3,3,3,0,3,7,0,2,1,1,0,0,0,0,1,3]; // 14
    MarcoMarchetti.stats_g1 =       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2]; // 
    MarcoLombardo.stats_g1 =        [0,1,5,0,0,2,1,3,4,0,0,1,1,0,0,0,0,1,2]; // 15
    MicheleVendrame.stats_g1 =      [0,2,0,0,0,0,0,2,0,0,0,1,0,0,0,0,0,1,2]; // 13
    LorenzoSchinella.stats_g1 =     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2]; // 3
    GioeleTudini.stats_g1 =         [0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,2]; // 7
    FilippoPasquon.stats_g1 =       [0,1,0,0,3,0,2,1,1,0,1,0,3,0,0,0,0,1,2]; // 2
    TommasoMartello.stats_g1 =      [0,3,2,0,1,2,5,0,0,0,0,2,2,0,0,0,0,1,2]; // 16
    MarcoRizzi.stats_g1 =           [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,2]; // 6
    DavidGaspardo.stats_g1 =        [0,0,1,1,7,0,0,7,1,0,2,3,1,0,0,0,0,1,2]; // 19
    AntonioGri.stats_g1 =           [0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,2]; // 5
    RiccardoSchinella.stats_g1 =    [0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,2]; // 1
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    SimoneMartinelli.stats_g1 =     [0,1,3,0,4,0,1,1,0,0,0,1,0,0,0,0,0,0,0]; // 22
    MatteoSpagnolo.stats_g1 =       [0,0,0,0,2,0,0,2,2,0,0,0,2,1,0,0,0,0,0]; // 21
    DavideFaurlin.stats_g1 =        [0,0,1,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0]; // 18
    GiovanniTonizzo.stats_g1 =      [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0]; // 5
    AlessandroSant.stats_g1 =       [0,0,3,0,4,4,2,0,0,0,1,1,1,1,0,0,0,0,0]; // 7
    MatteoBazzaro.stats_g1 =        [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 1
    AlessandroSantin.stats_g1 =     [0,0,2,0,2,0,0,1,0,0,0,0,0,0,0,0,0,0,0]; // 10
    AlessandroGalassi.stats_g1 =    [0,0,2,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]; // 19
    PietroSoramel.stats_g1 =        [0,1,2,2,0,0,0,1,2,0,1,0,2,0,0,0,0,0,0]; // 16
    FilippoAgnoluzzi.stats_g1 =     [0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 2
    EmanueleDaneluzzi.stats_g1 =    [0,0,0,0,0,2,0,2,1,0,0,2,0,0,0,0,0,0,0]; // 6
    LucaSoramel.stats_g1 =          [0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0]; // 12
    PaoloZorzi.stats_g1 =           [0,0,1,1,0,0,0,0,1,0,0,2,1,1,0,0,0,0,0]; // 9
    ChristianFedrizzi.stats_g1 =    [0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 3
    FilippoSappa.stats_g1 =         [0,3,4,0,2,5,1,3,6,0,2,3,2,0,0,0,0,0,1]; // 15
    GiovanniZanin.stats_g1 =        [0,1,6,0,3,3,4,6,4,0,2,4,0,0,0,0,0,0,1]; // 23
    EnricoSant.stats_g1 =           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 4
    StefanoPolano.stats_g1 =        [0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 17
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    MarcoPolo.stats_g1 =            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3]; // 15
    MarcoSerrao.stats_g1 =          [0,3,6,2,2,2,1,5,2,0,2,1,0,1,0,0,0,0,3]; // 8
    WilliamIob.stats_g1 =           [0,4,2,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,4]; // 12
    DavideBroggi.stats_g1 =         [0,0,2,0,0,2,0,1,0,0,0,1,2,0,0,0,0,0,3]; // 3
    AlexMicottis.stats_g1 =         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3]; // 21
    MassimilianoRossi.stats_g1 =    [0,0,0,0,2,0,0,1,0,0,0,2,2,0,0,0,0,0,3]; // 22
    MassimoMasotti.stats_g1 =       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3]; // 10
    EugenioDeTina.stats_g1 =        [0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,3]; // 9
    LucaAnedda.stats_g1 =           [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4]; // 5
    DenisVanin.stats_g1 =           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4]; // 17
    ThomasBaracetti.stats_g1 =      [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,3]; // 2
    LucaGemo.stats_g1 =             [0,0,0,0,0,0,0,1,0,0,1,3,0,0,0,0,0,0,3]; // 6
    DiegoNata.stats_g1 =            [0,3,6,1,0,0,0,6,2,0,1,2,3,0,0,0,0,0,1]; // 19
    MattiaRoiatti.stats_g1 =        [0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,4]; // 11
    EdoardoPicogna.stats_g1 =       [0,0,0,0,2,1,1,0,0,0,0,2,1,0,0,0,0,0,4]; // 7
    MauroPerina.stats_g1 =          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3]; // 18
    LorenzoMoro.stats_g1 =          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8]; // 14
    GionaTell.stats_g1 =            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3]; // 4
    IacopoPivetta.stats_g1 =        [0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,4]; // 20
    MattiaMasotti.stats_g1 =        [0,3,5,0,4,2,3,2,4,0,0,2,1,1,0,0,0,0,3]; // 13
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx_stats =             [PTS, 2Px,3Px,FTx, OR, ASS,ST,EXP,TD,Meme]
    //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    MassimilianoMoretti.stats_g2=   [0,2,4,1,0,1,4,4,2,0,0,5,2,0,1,0,0,1,1]; //13
    AndreaMoretti.stats_g2 =        [0,0,1,0,0,1,1,3,0,0,0,0,0,0,0,0,0,1,0]; //24
    LarryTrevisan.stats_g2 =        [0,2,1,0,2,0,0,1,0,0,0,0,0,0,0,0,0,1,0]; // 23
    AlessandroCostantini.stats_g2 = [0,1,0,2,0,4,0,1,1,0,2,0,0,1,0,0,0,1,1]; // 4 
    MatteoMargarit.stats_g2 =       [0,2,1,0,1,0,0,6,2,0,1,1,0,0,0,0,0,1,0]; // 22
    MauroCuridori.stats_g2 =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 2 
    ChristianZanet.stats_g2 =       [0,1,1,0,0,1,0,1,0,0,0,3,1,0,0,0,0,1,0]; // 9
    GiacomoPiacentini.stats_g2 =    [0,0,1,0,2,0,0,0,0,0,0,1,0,0,0,0,0,1,0]; // 20
    GiovanniDalFarra.stats_g2 =     [0,0,2,0,2,1,1,0,0,0,1,0,0,0,0,0,0,1,0]; // 7
    MiracleObichukwu.stats_g2 =     [0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 14
    LucaDellaLonga.stats_g2 =       [0,0,2,0,0,0,0,1,1,0,0,2,1,0,0,0,0,1,0]; // 3
    //     gx_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    AlessandroRojatti.stats_g2 =    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 12
    MicheleGorasso.stats_g2 =       [0,0,2,0,0,0,0,2,0,0,0,2,1,0,0,0,0,1,0]; // 21
    GiacomoFerigo.stats_g2 =        [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0]; // 16
    UmbertoNobile.stats_g2 =        [0,2,1,1,0,7,1,4,1,0,3,1,0,0,0,0,0,1,1]; // 15
    DevinChiarcos.stats_g2 =        [0,0,0,0,1,0,0,4,0,0,0,1,0,0,0,0,0,1,0]; // 18
    ValentinoCigainero.stats_g2 =   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; //
    MicheleDeAnna.stats_g2 =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; //
    DavideParon.stats_g2 =          [0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0]; // 6
    AlessioFurlan.stats_g2 =        [0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0]; // 10
    MichaelMargarit.stats_g2 =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; //
    SebastianoTonizzo.stats_g2 =    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]; // 5
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    DanieleGanzit.stats_g2 =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 
    GiacomoSilvestri.stats_g2 =     [0,2,2,1,1,3,1,1,0,0,0,0,2,0,0,0,0,0,0]; // 9
    VittorioGri.stats_g2 =          [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 11
    VittorioBasso.stats_g2 =        [0,2,1,0,2,0,0,2,2,0,0,4,1,0,0,0,0,0,0]; // 8
    AlessandroRizzi.stats_g2 =      [0,3,2,1,1,3,0,2,0,0,0,1,0,0,0,0,0,0,1]; // 10
    MassimoBaldassi.stats_g2 =      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 
    GabrieleMiani.stats_g2 =        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 14
    MarcoMarchetti.stats_g2 =       [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 
    MarcoLombardo.stats_g2 =        [0,2,1,0,1,2,0,2,1,0,1,2,0,0,0,0,0,0,1]; // 15
    //     gx_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    MicheleVendrame.stats_g2 =      [0,0,0,0,0,0,0,3,0,0,0,1,2,0,0,0,0,0,5]; // 13
    LorenzoSchinella.stats_g2 =     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]; // 3
    GioeleTudini.stats_g2 =         [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0]; // 7
    FilippoPasquon.stats_g2 =       [0,0,2,0,1,0,0,2,0,0,0,1,0,0,0,0,0,0,0]; // 2
    TommasoMartello.stats_g2 =      [0,2,2,0,2,2,3,1,0,0,0,2,1,1,0,0,0,0,0]; // 16
    MarcoRizzi.stats_g2 =           [0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1]; // 6
    DavidGaspardo.stats_g2 =        [0,3,5,0,7,4,1,6,2,0,0,2,1,1,0,0,0,0,1]; // 19
    AntonioGri.stats_g2 =           [0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0]; // 5
    RiccardoSchinella.stats_g2 =    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // 1
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    SimoneMartinelli.stats_g2 =     []; // 22
    MatteoSpagnolo.stats_g2 =       []; // 21
    DavideFaurlin.stats_g2 =        []; // 18
    GiovanniTonizzo.stats_g2 =      []; // 5
    AlessandroSant.stats_g2 =       []; // 7
    MatteoBazzaro.stats_g2 =        []; // 1
    AlessandroSantin.stats_g2 =     []; // 10
    AlessandroGalassi.stats_g2 =    []; // 19
    PietroSoramel.stats_g2 =        []; // 16
    //     gx_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    FilippoAgnoluzzi.stats_g2 =     []; // 2
    EmanueleDaneluzzi.stats_g2 =    []; // 6
    LucaSoramel.stats_g2 =          []; // 12
    PaoloZorzi.stats_g2 =           []; // 9
    ChristianFedrizzi.stats_g2 =    []; // 3
    FilippoSappa.stats_g2 =         []; // 15
    GiovanniZanin.stats_g2 =        []; // 23
    EnricoSant.stats_g2 =           []; // 4
    StefanoPolano.stats_g2 =        []; // 17
    //                                 | | | | | | | | | | | | | | | | | | 
    //     gx_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    MarcoPolo.stats_g2 =            []; // 15
    MarcoSerrao.stats_g2 =          []; // 8
    WilliamIob.stats_g2 =           []; // 12
    DavideBroggi.stats_g2 =         []; // 3
    AlexMicottis.stats_g2 =         []; // 21
    MassimilianoRossi.stats_g2 =    []; // 22
    MassimoMasotti.stats_g2 =       []; // 10
    EugenioDeTina.stats_g2 =        []; // 9
    LucaAnedda.stats_g2 =           []; // 5
    DenisVanin.stats_g2 =           []; // 17
    ThomasBaracetti.stats_g2 =      []; // 2
    LucaGemo.stats_g2 =             []; // 6
    DiegoNata.stats_g2 =            []; // 19
    MattiaRoiatti.stats_g2 =        []; // 11
    EdoardoPicogna.stats_g2 =       []; // 7
    MauroPerina.stats_g2 =          []; // 18
    LorenzoMoro.stats_g2 =          []; // 14
    GionaTell.stats_g2 =            []; // 4
    IacopoPivetta.stats_g2 =        []; // 20
    MattiaMasotti.stats_g2 =        []; // 13
    //                               | | | | | | | | | | | | | | | | | | | 
    //     gx_stats =              PTS,|2Px|3Px|FTx|OR,|ASS|ST,|EXP|TD,|Meme
    //     gx_stats =                |2P,|3P,|FT,|DR,|Rt,|TO,|BL,|DD,|Win|
    //                               | | | | | | | | | | | | | | | | | | | 
    //QUI SARANNO DA DARE TUTTI I PUNTEGGI DI TUTTI I GIOCATORI IN TUTTE LE GIORNATE
    
    
    // GIORNATA 2
    MassimilianoMoretti.g2 = 8;
    AndreaMoretti.g2 = 4.75;
    LarryTrevisan.g2 = 4.75;
    AlessandroCostantini.g2 = 22.75;
    MatteoMargarit.g2 = 13.5;
    MauroCuridori.g2 = 2;
    ChristianZanet.g2 = 3.75;
    GiacomoPiacentini.g2 = -1.25;
    GiovanniDalFarra.g2 = -0.5;
    MiracleObichukwu.g2 = 0.5;
    LucaDellaLonga.g2 = 2.25;
    AlessandroRojatti.g2 = 2;
    MicheleGorasso.g2 = 2;
    GiacomoFerigo.g2 = 1;
    UmbertoNobile.g2 = 25;
    DevinChiarcos.g2 = 4.25;
    ValentinoCigainero.g2 = 2;
    MicheleDeAnna.g2 = 2;
    DavideParon.g2 = 5.75;
    AlessioFurlan.g2 = 5;
    MichaelMargarit.g2 = 2;
    SebastianoTonizzo.g2 = 2;

    DanieleGanzit.g2 = 0;
    GiacomoSilvestri.g2 = 11.75;
    VittorioGri.g2 = 0;
    VittorioBasso.g2 = 3.75;
    AlessandroRizzi.g2 = 8.25;
    MassimoBaldassi.g2 = 0;
    GabrieleMiani.g2 = 0;
    MarcoMarchetti.g2 = 0;
    MarcoLombardo.g2 = 10.75;
    MicheleVendrame.g2 = 10;
    LorenzoSchinella.g2 = 1;
    GioeleTudini.g2 = 0.75;
    FilippoPasquon.g2 = -1.25;
    TommasoMartello.g2 = 3.5;
    MarcoRizzi.g2 = 2.5;
    DavidGaspardo.g2 = 11;
    AntonioGri.g2 = 1.25;
    RiccardoSchinella.g2 = 0;

    SimoneMartinelli.g2 = 0;
    MatteoSpagnolo.g2 = 9.25;
    DavideFaurlin.g2 = 1.25;
    GiovanniTonizzo.g2 = 2.25;
    AlessandroSant.g2 = 8.75;
    MatteoBazzaro.g2 = 2;
    AlessandroSantin.g2 = 1.25;
    AlessandroGalassi.g2 = 2;
    PietroSoramel.g2 = 12;
    FilippoAgnoluzzi.g2 = 2;
    EmanueleDaneluzzi.g2 = 0.25;
    LucaSoramel.g2 = 9;
    PaoloZorzi.g2 = 2;
    ChristianFedrizzi.g2 = 3.5;
    FilippoSappa.g2 = 34.5;
    GiovanniZanin.g2 = 17.25;
    EnricoSant.g2 = 2;
    StefanoPolano.g2 = 3.5;

    MarcoPolo.g2 = 1.25;
    MarcoSerrao.g2 = 22.25;
    WilliamIob.g2 = 3;
    DavideBroggi.g2 = -1.25;
    AlexMicottis.g2 = 4;
    MassimilianoRossi.g2 = 15.5;
    MassimoMasotti.g2 = 2;
    EugenioDeTina.g2 = 5.5;
    LucaAnedda.g2 = 3;
    DenisVanin.g2 = 4;
    ThomasBaracetti.g2 = 3;
    LucaGemo.g2 = 2;
    DiegoNata.g2 = 35;
    MattiaRoiatti.g2 = 3;
    EdoardoPicogna.g2 = 1.75;
    MauroPerina.g2 = 3;
    LorenzoMoro.g2 = 3.75;
    GionaTell.g2 = 2;
    IacopoPivetta.g2 = 0.25;
    MattiaMasotti.g2 = 7.75;


    // GIORNATA 3
    MassimilianoMoretti.g3 = 0.0;
    AndreaMoretti.g3 = 0.0;
    LarryTrevisan.g3 = 0.0;
    AlessandroCostantini.g3 = 0.0;
    MatteoMargarit.g3 = 0.0;
    MauroCuridori.g3 = 0.0;
    ChristianZanet.g3 = 0.0;
    GiacomoPiacentini.g3 = 0.0;
    GiovanniDalFarra.g3 = 0.0;
    MiracleObichukwu.g3 = 0.0;
    LucaDellaLonga.g3 = 0.0;
    AlessandroRojatti.g3 = 0.0;
    MicheleGorasso.g3 = 0.0;
    GiacomoFerigo.g3 = 0.0;
    UmbertoNobile.g3 = 0.0;
    DevinChiarcos.g3 = 0.0;
    ValentinoCigainero.g3 = 0.0;
    MicheleDeAnna.g3 = 0.0;
    DavideParon.g3 = 0.0;
    AlessioFurlan.g3 = 0.0;
    MichaelMargarit.g3 = 0.0;
    SebastianoTonizzo.g3 = 0.0;

    DanieleGanzit.g3 = 0.0;
    GiacomoSilvestri.g3 = 0.0;
    VittorioGri.g3 = 0.0;
    VittorioBasso.g3 = 0.0;
    AlessandroRizzi.g3 = 0.0;
    MassimoBaldassi.g3 = 0.0;
    GabrieleMiani.g3 = 0.0;
    MarcoMarchetti.g3 = 0.0;
    MarcoLombardo.g3 = 0.0;
    MicheleVendrame.g3 = 0.0;
    LorenzoSchinella.g3 = 0.0;
    GioeleTudini.g3 = 0.0;
    FilippoPasquon.g3 = 0.0;
    TommasoMartello.g3 = 0.0;
    MarcoRizzi.g3 = 0.0;
    DavidGaspardo.g3 = 0.0;
    AntonioGri.g3 = 0.0;
    RiccardoSchinella.g3 = 0.0;

    SimoneMartinelli.g3 = 0.0;
    MatteoSpagnolo.g3 = 0.0;
    DavideFaurlin.g3 = 0.0;
    GiovanniTonizzo.g3 = 0.0;
    AlessandroSant.g3 = 0.0;
    MatteoBazzaro.g3 = 0.0;
    AlessandroSantin.g3 = 0.0;
    AlessandroGalassi.g3 = 0.0;
    PietroSoramel.g3 = 0.0;
    FilippoAgnoluzzi.g3 = 0.0;
    EmanueleDaneluzzi.g3 = 0.0;
    LucaSoramel.g3 = 0.0;
    PaoloZorzi.g3 = 0.0;
    ChristianFedrizzi.g3 = 0.0;
    FilippoSappa.g3 = 0.0;
    GiovanniZanin.g3 = 0.0;
    EnricoSant.g3 = 0.0;
    StefanoPolano.g3 = 0.0;

    MarcoPolo.g3 = 0.0;
    MarcoSerrao.g3 = 0.0;
    WilliamIob.g3 = 0.0;
    DavideBroggi.g3 = 0.0;
    AlexMicottis.g3 = 0.0;
    MassimilianoRossi.g3 = 0.0;
    MassimoMasotti.g3 = 0.0;
    EugenioDeTina.g3 = 0.0;
    LucaAnedda.g3 = 0.0;
    DenisVanin.g3 = 0.0;
    ThomasBaracetti.g3 = 0.0;
    LucaGemo.g3 = 0.0;
    DiegoNata.g3 = 0.0;
    MattiaRoiatti.g3 = 0.0;
    EdoardoPicogna.g3 = 0.0;
    MauroPerina.g3 = 0.0;
    LorenzoMoro.g3 = 0.0;
    GionaTell.g3 = 0.0;
    IacopoPivetta.g3 = 0.0;
    MattiaMasotti.g3 = 0.0;

    // SEMI
    MassimilianoMoretti.semi = 0.0;
    AndreaMoretti.semi = 0.0;
    LarryTrevisan.semi = 0.0;
    AlessandroCostantini.semi = 0.0;
    MatteoMargarit.semi = 0.0;
    MauroCuridori.semi = 0.0;
    ChristianZanet.semi = 0.0;
    GiacomoPiacentini.semi = 0.0;
    GiovanniDalFarra.semi = 0.0;
    MiracleObichukwu.semi = 0.0;
    LucaDellaLonga.semi = 0.0;
    AlessandroRojatti.semi = 0.0;
    MicheleGorasso.semi = 0.0;
    GiacomoFerigo.semi = 0.0;
    UmbertoNobile.semi = 0.0;
    DevinChiarcos.semi = 0.0;
    ValentinoCigainero.semi = 0.0;
    MicheleDeAnna.semi = 0.0;
    DavideParon.semi = 0.0;
    AlessioFurlan.semi = 0.0;
    MichaelMargarit.semi = 0.0;
    SebastianoTonizzo.semi = 0.0;

    DanieleGanzit.semi = 0.0;
    GiacomoSilvestri.semi = 0.0;
    VittorioGri.semi = 0.0;
    VittorioBasso.semi = 0.0;
    AlessandroRizzi.semi = 0.0;
    MassimoBaldassi.semi = 0.0;
    GabrieleMiani.semi = 0.0;
    MarcoMarchetti.semi = 0.0;
    MarcoLombardo.semi = 0.0;
    MicheleVendrame.semi = 0.0;
    LorenzoSchinella.semi = 0.0;
    GioeleTudini.semi = 0.0;
    FilippoPasquon.semi = 0.0;
    TommasoMartello.semi = 0.0;
    MarcoRizzi.semi = 0.0;
    DavidGaspardo.semi = 0.0;
    AntonioGri.semi = 0.0;
    RiccardoSchinella.semi = 0.0;

    SimoneMartinelli.semi = 0.0;
    MatteoSpagnolo.semi = 0.0;
    DavideFaurlin.semi = 0.0;
    GiovanniTonizzo.semi = 0.0;
    AlessandroSant.semi = 0.0;
    MatteoBazzaro.semi = 0.0;
    AlessandroSantin.semi = 0.0;
    AlessandroGalassi.semi = 0.0;
    PietroSoramel.semi = 0.0;
    FilippoAgnoluzzi.semi = 0.0;
    EmanueleDaneluzzi.semi = 0.0;
    LucaSoramel.semi = 0.0;
    PaoloZorzi.semi = 0.0;
    ChristianFedrizzi.semi = 0.0;
    FilippoSappa.semi = 0.0;
    GiovanniZanin.semi = 0.0;
    EnricoSant.semi = 0.0;
    StefanoPolano.semi = 0.0;

    MarcoPolo.semi = 0.0;
    MarcoSerrao.semi = 0.0;
    WilliamIob.semi = 0.0;
    DavideBroggi.semi = 0.0;
    AlexMicottis.semi = 0.0;
    MassimilianoRossi.semi = 0.0;
    MassimoMasotti.semi = 0.0;
    EugenioDeTina.semi = 0.0;
    LucaAnedda.semi = 0.0;
    DenisVanin.semi = 0.0;
    ThomasBaracetti.semi = 0.0;
    LucaGemo.semi = 0.0;
    DiegoNata.semi = 0.0;
    MattiaRoiatti.semi = 0.0;
    EdoardoPicogna.semi = 0.0;
    MauroPerina.semi = 0.0;
    LorenzoMoro.semi = 0.0;
    GionaTell.semi = 0.0;
    IacopoPivetta.semi = 0.0;
    MattiaMasotti.semi = 0.0;

    // Tiro da 3
    MassimilianoMoretti.td3 = 0.0;
    AndreaMoretti.td3 = 0.0;
    LarryTrevisan.td3 = 0.0;
    AlessandroCostantini.td3 = 0.0;
    MatteoMargarit.td3 = 0.0;
    MauroCuridori.td3 = 0.0;
    ChristianZanet.td3 = 0.0;
    GiacomoPiacentini.td3 = 0.0;
    GiovanniDalFarra.td3 = 0.0;
    MiracleObichukwu.td3 = 0.0;
    LucaDellaLonga.td3 = 0.0;
    AlessandroRojatti.td3 = 0.0;
    MicheleGorasso.td3 = 0.0;
    GiacomoFerigo.td3 = 0.0;
    UmbertoNobile.td3 = 0.0;
    DevinChiarcos.td3 = 0.0;
    ValentinoCigainero.td3 = 0.0;
    MicheleDeAnna.td3 = 0.0;
    DavideParon.td3 = 0.0;
    AlessioFurlan.td3 = 0.0;
    MichaelMargarit.td3 = 0.0;
    SebastianoTonizzo.td3 = 0.0;

    DanieleGanzit.td3 = 0.0;
    GiacomoSilvestri.td3 = 0.0;
    VittorioGri.td3 = 0.0;
    VittorioBasso.td3 = 0.0;
    AlessandroRizzi.td3 = 0.0;
    MassimoBaldassi.td3 = 0.0;
    GabrieleMiani.td3 = 0.0;
    MarcoMarchetti.td3 = 0.0;
    MarcoLombardo.td3 = 0.0;
    MicheleVendrame.td3 = 0.0;
    LorenzoSchinella.td3 = 0.0;
    GioeleTudini.td3 = 0.0;
    FilippoPasquon.td3 = 0.0;
    TommasoMartello.td3 = 0.0;
    MarcoRizzi.td3 = 0.0;
    DavidGaspardo.td3 = 0.0;
    AntonioGri.td3 = 0.0;
    RiccardoSchinella.td3 = 0.0;

    SimoneMartinelli.td3 = 0.0;
    MatteoSpagnolo.td3 = 0.0;
    DavideFaurlin.td3 = 0.0;
    GiovanniTonizzo.td3 = 0.0;
    AlessandroSant.td3 = 0.0;
    MatteoBazzaro.td3 = 0.0;
    AlessandroSantin.td3 = 0.0;
    AlessandroGalassi.td3 = 0.0;
    PietroSoramel.td3 = 0.0;
    FilippoAgnoluzzi.td3 = 0.0;
    EmanueleDaneluzzi.td3 = 0.0;
    LucaSoramel.td3 = 0.0;
    PaoloZorzi.td3 = 0.0;
    ChristianFedrizzi.td3 = 0.0;
    FilippoSappa.td3 = 0.0;
    GiovanniZanin.td3 = 0.0;
    EnricoSant.td3 = 0.0;
    StefanoPolano.td3 = 0.0;
    MarcoPolo.td3 = 0.0;
    MarcoSerrao.td3 = 0.0;
    WilliamIob.td3 = 0.0;
    DavideBroggi.td3 = 0.0;
    AlexMicottis.td3 = 0.0;
    MassimilianoRossi.td3 = 0.0;
    MassimoMasotti.td3 = 0.0;
    EugenioDeTina.td3 = 0.0;
    LucaAnedda.td3 = 0.0;
    DenisVanin.td3 = 0.0;
    ThomasBaracetti.td3 = 0.0;
    LucaGemo.td3 = 0.0;
    DiegoNata.td3 = 0.0;
    MattiaRoiatti.td3 = 0.0;
    EdoardoPicogna.td3 = 0.0;
    MauroPerina.td3 = 0.0;
    LorenzoMoro.td3 = 0.0;
    GionaTell.td3 = 0.0;
    IacopoPivetta.td3 = 0.0;
    MattiaMasotti.td3 = 0.0;

    // FINALE
    MassimilianoMoretti.final = 0.0;
    AndreaMoretti.final = 0.0;
    LarryTrevisan.final = 0.0;
    AlessandroCostantini.final = 0.0;
    MatteoMargarit.final = 0.0;
    MauroCuridori.final = 0.0;
    ChristianZanet.final = 0.0;
    GiacomoPiacentini.final = 0.0;
    GiovanniDalFarra.final = 0.0;
    MiracleObichukwu.final = 0.0;
    LucaDellaLonga.final = 0.0;
    AlessandroRojatti.final = 0.0;
    MicheleGorasso.final = 0.0;
    GiacomoFerigo.final = 0.0;
    UmbertoNobile.final = 0.0;
    DevinChiarcos.final = 0.0;
    ValentinoCigainero.final = 0.0;
    MicheleDeAnna.final = 0.0;
    DavideParon.final = 0.0;
    AlessioFurlan.final = 0.0;
    MichaelMargarit.final = 0.0;
    SebastianoTonizzo.final = 0;

    DanieleGanzit.final = 0.0;
    GiacomoSilvestri.final = 0.0;
    VittorioGri.final = 0.0;
    VittorioBasso.final = 0.0;
    AlessandroRizzi.final = 0.0;
    MassimoBaldassi.final = 0.0;
    GabrieleMiani.final = 0.0;
    MarcoMarchetti.final = 0.0;
    MarcoLombardo.final = 0.0;
    MicheleVendrame.final = 0.0;
    LorenzoSchinella.final = 0.0;
    GioeleTudini.final = 0.0;
    FilippoPasquon.final = 0.0;
    TommasoMartello.final = 0.0;
    MarcoRizzi.final = 0.0;
    DavidGaspardo.final = 0.0;
    AntonioGri.final = 0.0;
    RiccardoSchinella.final = 0.0;

    SimoneMartinelli.final = 0.0;
    MatteoSpagnolo.final = 0.0;
    DavideFaurlin.final = 0.0;
    GiovanniTonizzo.final = 0.0;
    AlessandroSant.final = 0.0;
    MatteoBazzaro.final = 0.0;
    AlessandroSantin.final = 0.0;
    AlessandroGalassi.final = 0.0;
    PietroSoramel.final = 0.0;
    FilippoAgnoluzzi.final = 0.0;
    EmanueleDaneluzzi.final = 0.0;
    LucaSoramel.final = 0.0;
    PaoloZorzi.final = 0.0;
    ChristianFedrizzi.final = 0.0;
    FilippoSappa.final = 0.0;
    GiovanniZanin.final = 0.0;
    EnricoSant.final = 0.0;
    StefanoPolano.final = 0.0;

    MarcoPolo.final = 0.0;
    MarcoSerrao.final = 0.0;
    WilliamIob.final = 0.0;
    DavideBroggi.final = 0.0;
    AlexMicottis.final = 0.0;
    MassimilianoRossi.final = 0.0;
    MassimoMasotti.final = 0.0;
    EugenioDeTina.final = 0.0;
    LucaAnedda.final = 0.0;
    DenisVanin.final = 0.0;
    ThomasBaracetti.final = 0.0;
    LucaGemo.final = 0.0;
    DiegoNata.final = 0.0;
    MattiaRoiatti.final = 0.0;
    EdoardoPicogna.final = 0.0;
    MauroPerina.final = 0.0;
    LorenzoMoro.final = 0.0;
    GionaTell.final = 0.0;
    IacopoPivetta.final = 0.0;
    MattiaMasotti.final = 0.0;



    const players = [MassimilianoMoretti, AndreaMoretti, LarryTrevisan, AlessandroCostantini, MatteoMargarit, 
        MauroCuridori, ChristianZanet, GiacomoPiacentini, GiovanniDalFarra, MiracleObichukwu, LucaDellaLonga, 
        AlessandroRojatti, MicheleGorasso, GiacomoFerigo, UmbertoNobile, DevinChiarcos, ValentinoCigainero, 
        MicheleDeAnna, DavideParon, AlessioFurlan, MichaelMargarit, SebastianoTonizzo, 

        DanieleGanzit, GiacomoSilvestri, VittorioGri, VittorioBasso, AlessandroRizzi, MassimoBaldassi, 
        GabrieleMiani, MarcoMarchetti, MarcoLombardo, MicheleVendrame, LorenzoSchinella, GioeleTudini, 
        FilippoPasquon, TommasoMartello, MarcoRizzi, DavidGaspardo, AntonioGri, RiccardoSchinella,

        SimoneMartinelli, MatteoSpagnolo, DavideFaurlin, GiovanniTonizzo, AlessandroSant, MatteoBazzaro, 
        AlessandroSantin, AlessandroGalassi, PietroSoramel, FilippoAgnoluzzi, EmanueleDaneluzzi, LucaSoramel, 
        PaoloZorzi, ChristianFedrizzi, FilippoSappa, GiovanniZanin, EnricoSant, StefanoPolano,

        MarcoPolo, MarcoSerrao, WilliamIob, DavideBroggi, AlexMicottis, MassimilianoRossi, MassimoMasotti, 
        EugenioDeTina, LucaAnedda, DenisVanin, ThomasBaracetti, LucaGemo, DiegoNata, MattiaRoiatti, 
        EdoardoPicogna, MauroPerina, LorenzoMoro, GionaTell, IacopoPivetta, MattiaMasotti ];


        // Funzione per calcolare il prodotto scalare
    function sumProduct(array1, array2) {
        return array1.reduce((sum, a, i) => sum + a * array2[i], 0);
    }



    //                   0    1   2   3    4   5   6    7   8    9     10  11  12  13  14   15  16  17   18
    // gx_stats =      [PTS, 2P, 2Px, 3P, 3Px, FT, FTx, DR, OR, Rtot, ASS, TO, ST, BL, EXP, DD, TD, Win, Meme]
    const pdkWeights = [1, 0, -0.75, 0.5, -0.75, 0, -0.5, 1, 1.25,  0, 1.5, -1, 1.5, 1.5, -3,  3,  6,   2,  1];

    // Calcola g1 per ogni giocatore
    for (let player of players) {
        // Calcola PTS (player.stats_g1[0])
        player.stats_g1[0] = player.stats_g1[1] * 2 + player.stats_g1[3] * 3 + player.stats_g1[5];
        
        // Calcola Rtot (player.stats_g1[9])
        player.stats_g1[9] = player.stats_g1[7] + player.stats_g1[8];
    
        // Calcolo DD e TD
        const valuesToCheck = [player.stats_g1[0], player.stats_g1[9], player.stats_g1[10], player.stats_g1[12], player.stats_g1[13]];
        const countGreaterThanNine = valuesToCheck.filter(value => value > 9).length;
        
        // Imposta player.stats_g1[15] e player.stats_g1[16]
        player.stats_g1[15] = countGreaterThanNine >= 2 ? 1 : 0;
        player.stats_g1[16] = countGreaterThanNine >= 3 ? 1 : 0;
    
        // Calcola g1 utilizzando sumProduct
        player.g1 = sumProduct(player.stats_g1, pdkWeights);
    
        // Ripeti per g2, g3, semi, final
        // Per semplicità, i calcoli di PTS e Rtot sono gli stessi, solo cambiando l'array di riferimento (player.stats_g2, player.stats_g3, ecc.)
        //da scommentare altre giornate
        // player.stats_g2[0] = player.stats_g2[1] * 2 + player.stats_g2[3] * 3 + player.stats_g2[5];
        // player.stats_g2[9] = player.stats_g2[7] + player.stats_g2[8];
        // const valuesToCheckG2 = [player.stats_g2[0], player.stats_g2[9], player.stats_g2[10], player.stats_g2[12], player.stats_g2[13]];
        // const countGreaterThanNineG2 = valuesToCheckG2.filter(value => value > 9).length;
        // player.stats_g2[15] = countGreaterThanNineG2 >= 2 ? 1 : 0;
        // player.stats_g2[16] = countGreaterThanNineG2 >= 3 ? 1 : 0;
        // player.g2 = sumProduct(player.stats_g2, pdkWeights);
    
        // player.stats_g3[0] = player.stats_g3[1] * 2 + player.stats_g3[3] * 3 + player.stats_g3[5];
        // player.stats_g3[9] = player.stats_g3[7] + player.stats_g3[8];
        // const valuesToCheckG3 = [player.stats_g3[0], player.stats_g3[9], player.stats_g3[10], player.stats_g3[12], player.stats_g3[13]];
        // const countGreaterThanNineG3 = valuesToCheckG3.filter(value => value > 9).length;
        // player.stats_g3[15] = countGreaterThanNineG3 >= 2 ? 1 : 0;
        // player.stats_g3[16] = countGreaterThanNineG3 >= 3 ? 1 : 0;
        // player.g3 = sumProduct(player.stats_g3, pdkWeights);
    
        // player.stats_semi[0] = player.stats_semi[1] * 2 + player.stats_semi[3] * 3 + player.stats_semi[5];
        // player.stats_semi[9] = player.stats_semi[7] + player.stats_semi[8];
        // const valuesToCheckSemi = [player.stats_semi[0], player.stats_semi[9], player.stats_semi[10], player.stats_semi[12], player.stats_semi[13]];
        // const countGreaterThanNineSemi = valuesToCheckSemi.filter(value => value > 9).length;
        // player.stats_semi[15] = countGreaterThanNineSemi >= 2 ? 1 : 0;
        // player.stats_semi[16] = countGreaterThanNineSemi >= 3 ? 1 : 0;
        // player.semi = sumProduct(player.stats_semi, pdkWeights);
    
        // player.stats_final[0] = player.stats_final[1] * 2 + player.stats_final[3] * 3 + player.stats_final[5];
        // player.stats_final[9] = player.stats_final[7] + player.stats_final[8];
        // const valuesToCheckFinal = [player.stats_final[0], player.stats_final[9], player.stats_final[10], player.stats_final[12], player.stats_final[13]];
        // const countGreaterThanNineFinal = valuesToCheckFinal.filter(value => value > 9).length;
        // player.stats_final[15] = countGreaterThanNineFinal >= 2 ? 1 : 0;
        // player.stats_final[16] = countGreaterThanNineFinal >= 3 ? 1 : 0;
        // player.final = sumProduct(player.stats_final, pdkWeights);
    }

    // Ciclo for per calcolare player.tot per ogni giocatore
    for (let i = 0; i < players.length; i++) {
        let player = players[i];
        player.tot = player.g1 + player.g2 + player.g3 + player.semi + player.td3 + player.final;
    };
    //

    // Definizione team
    const ft1 = {
        ...fantateam_type,
        team_index: 1,
        name: "Burritos Picantes",
        rione: { ...EST },
        p1: { ...EdoardoPicogna },
        p2: { ...WilliamIob },
        p3: { ...FilippoSappa },
        p4: { ...UmbertoNobile },
        p5: { ...MatteoSpagnolo },
    };
    ft1.total_cost = ft1.p1.cost + ft1.p2.cost + ft1.p3.cost + ft1.p4.cost + ft1.p5.cost;
    ft1.tot_g1 = ft1.p1.g1 + ft1.p2.g1 + ft1.p3.g1 + ft1.p4.g1 + ft1.p5.g1;
    ft1.tot_g2 = ft1.p1.g2 + ft1.p2.g2 + ft1.p3.g2 + ft1.p4.g2 + ft1.p5.g2;
    ft1.tot_g3 = ft1.p1.g3 + ft1.p2.g3 + ft1.p3.g3 + ft1.p4.g3 + ft1.p5.g3;
    ft1.tot_semi = ft1.p1.semi + ft1.p2.semi + ft1.p3.semi + ft1.p4.semi + ft1.p5.semi;
    ft1.tot_td3 = ft1.p1.td3 + ft1.p2.td3 + ft1.p3.td3 + ft1.p4.td3 + ft1.p5.td3;
    ft1.tot_final = ft1.p1.final + ft1.p2.final + ft1.p3.final + ft1.p4.final + ft1.p5.final;
    ft1.tot_team = ft1.p1.tot + ft1.p2.tot + ft1.p3.tot + ft1.p4.tot + ft1.p5.tot;
    const ft2 = {
        ...fantateam_type,
        team_index: 2,
        name: "Nord",
        rione: { ...NORD },
        p1: { ...AlessandroRizzi },
        p2: { ...DevinChiarcos },
        p3: { ...UmbertoNobile },
        p4: { ...GiacomoFerigo },
        p5: { ...AlessandroSant },
    };
    ft2.total_cost = ft2.p1.cost + ft2.p2.cost + ft2.p3.cost + ft2.p4.cost + ft2.p5.cost;
    ft2.tot_g1 = ft2.p1.g1 + ft2.p2.g1 + ft2.p3.g1 + ft2.p4.g1 + ft2.p5.g1;
    ft2.tot_g2 = ft2.p1.g2 + ft2.p2.g2 + ft2.p3.g2 + ft2.p4.g2 + ft2.p5.g2;
    ft2.tot_g3 = ft2.p1.g3 + ft2.p2.g3 + ft2.p3.g3 + ft2.p4.g3 + ft2.p5.g3;
    ft2.tot_semi = ft2.p1.semi + ft2.p2.semi + ft2.p3.semi + ft2.p4.semi + ft2.p5.semi;
    ft2.tot_td3 = ft2.p1.td3 + ft2.p2.td3 + ft2.p3.td3 + ft2.p4.td3 + ft2.p5.td3;
    ft2.tot_final = ft2.p1.final + ft2.p2.final + ft2.p3.final + ft2.p4.final + ft2.p5.final;
    ft2.tot_team = ft2.p1.tot + ft2.p2.tot + ft2.p3.tot + ft2.p4.tot + ft2.p5.tot;
    const ft3 = {
        ...fantateam_type,
        team_index: 3,
        name: "Festainvigna",
        rione: { ...WEST },
        p1: { ...FilippoAgnoluzzi },
        p2: { ...UmbertoNobile },
        p3: { ...MatteoSpagnolo },
        p4: { ...MassimilianoMoretti },
        p5: { ...PaoloZorzi },
    };
    ft3.total_cost = ft3.p1.cost + ft3.p2.cost + ft3.p3.cost + ft3.p4.cost + ft3.p5.cost;
    ft3.tot_g1 = ft3.p1.g1 + ft3.p2.g1 + ft3.p3.g1 + ft3.p4.g1 + ft3.p5.g1;
    ft3.tot_g2 = ft3.p1.g2 + ft3.p2.g2 + ft3.p3.g2 + ft3.p4.g2 + ft3.p5.g2;
    ft3.tot_g3 = ft3.p1.g3 + ft3.p2.g3 + ft3.p3.g3 + ft3.p4.g3 + ft3.p5.g3;
    ft3.tot_semi = ft3.p1.semi + ft3.p2.semi + ft3.p3.semi + ft3.p4.semi + ft3.p5.semi;
    ft3.tot_td3 = ft3.p1.td3 + ft3.p2.td3 + ft3.p3.td3 + ft3.p4.td3 + ft3.p5.td3;
    ft3.tot_final = ft3.p1.final + ft3.p2.final + ft3.p3.final + ft3.p4.final + ft3.p5.final;
    ft3.tot_team = ft3.p1.tot + ft3.p2.tot + ft3.p3.tot + ft3.p4.tot + ft3.p5.tot;
    const ft4 = {
        ...fantateam_type,
        team_index: 4,
        name: "Pangri",
        rione: { ...EST },
        p1: { ...MarcoRizzi },
        p2: { ...AlessioFurlan },
        p3: { ...UmbertoNobile },
        p4: { ...MassimilianoMoretti },
        p5: { ...MarcoPolo },
    };
    ft4.total_cost = ft4.p1.cost + ft4.p2.cost + ft4.p3.cost + ft4.p4.cost + ft4.p5.cost;
    ft4.tot_g1 = ft4.p1.g1 + ft4.p2.g1 + ft4.p3.g1 + ft4.p4.g1 + ft4.p5.g1;
    ft4.tot_g2 = ft4.p1.g2 + ft4.p2.g2 + ft4.p3.g2 + ft4.p4.g2 + ft4.p5.g2;
    ft4.tot_g3 = ft4.p1.g3 + ft4.p2.g3 + ft4.p3.g3 + ft4.p4.g3 + ft4.p5.g3;
    ft4.tot_semi = ft4.p1.semi + ft4.p2.semi + ft4.p3.semi + ft4.p4.semi + ft4.p5.semi;
    ft4.tot_td3 = ft4.p1.td3 + ft4.p2.td3 + ft4.p3.td3 + ft4.p4.td3 + ft4.p5.td3;
    ft4.tot_final = ft4.p1.final + ft4.p2.final + ft4.p3.final + ft4.p4.final + ft4.p5.final;
    ft4.tot_team = ft4.p1.tot + ft4.p2.tot + ft4.p3.tot + ft4.p4.tot + ft4.p5.tot;
    const ft5 = {
        ...fantateam_type,
        team_index: 5,
        name: "Zoo_Rehab",
        rione: { ...WEST },
        p1: { ...DavidGaspardo },
        p2: { ...UmbertoNobile },
        p3: { ...DevinChiarcos },
        p4: { ...GiacomoPiacentini },
        p5: { ...FilippoPasquon },
    };
    ft5.total_cost = ft5.p1.cost + ft5.p2.cost + ft5.p3.cost + ft5.p4.cost + ft5.p5.cost;
    ft5.tot_g1 = ft5.p1.g1 + ft5.p2.g1 + ft5.p3.g1 + ft5.p4.g1 + ft5.p5.g1;
    ft5.tot_g2 = ft5.p1.g2 + ft5.p2.g2 + ft5.p3.g2 + ft5.p4.g2 + ft5.p5.g2;
    ft5.tot_g3 = ft5.p1.g3 + ft5.p2.g3 + ft5.p3.g3 + ft5.p4.g3 + ft5.p5.g3;
    ft5.tot_semi = ft5.p1.semi + ft5.p2.semi + ft5.p3.semi + ft5.p4.semi + ft5.p5.semi;
    ft5.tot_td3 = ft5.p1.td3 + ft5.p2.td3 + ft5.p3.td3 + ft5.p4.td3 + ft5.p5.td3;
    ft5.tot_final = ft5.p1.final + ft5.p2.final + ft5.p3.final + ft5.p4.final + ft5.p5.final;
    ft5.tot_team = ft5.p1.tot + ft5.p2.tot + ft5.p3.tot + ft5.p4.tot + ft5.p5.tot;
    const ft6 = {
        ...fantateam_type,
        team_index: 6,
        name: "Nordes",
        rione: { ...NORD },
        p1: { ...DiegoNata },
        p2: { ...FilippoPasquon },
        p3: { ...UmbertoNobile },
        p4: { ...LucaAnedda },
        p5: { ...DevinChiarcos },
    };
    ft6.total_cost = ft6.p1.cost + ft6.p2.cost + ft6.p3.cost + ft6.p4.cost + ft6.p5.cost;
    ft6.tot_g1 = ft6.p1.g1 + ft6.p2.g1 + ft6.p3.g1 + ft6.p4.g1 + ft6.p5.g1;
    ft6.tot_g2 = ft6.p1.g2 + ft6.p2.g2 + ft6.p3.g2 + ft6.p4.g2 + ft6.p5.g2;
    ft6.tot_g3 = ft6.p1.g3 + ft6.p2.g3 + ft6.p3.g3 + ft6.p4.g3 + ft6.p5.g3;
    ft6.tot_semi = ft6.p1.semi + ft6.p2.semi + ft6.p3.semi + ft6.p4.semi + ft6.p5.semi;
    ft6.tot_td3 = ft6.p1.td3 + ft6.p2.td3 + ft6.p3.td3 + ft6.p4.td3 + ft6.p5.td3;
    ft6.tot_final = ft6.p1.final + ft6.p2.final + ft6.p3.final + ft6.p4.final + ft6.p5.final;
    ft6.tot_team = ft6.p1.tot + ft6.p2.tot + ft6.p3.tot + ft6.p4.tot + ft6.p5.tot;
    const ft7 = {
        ...fantateam_type,
        team_index: 7,
        name: "Estateam",
        rione: { ...EST },
        p1: { ...SimoneMartinelli },
        p2: { ...UmbertoNobile },
        p3: { ...MattiaMasotti },
        p4: { ...FilippoSappa },
        p5: { ...FilippoPasquon },
    };
    ft7.total_cost = ft7.p1.cost + ft7.p2.cost + ft7.p3.cost + ft7.p4.cost + ft7.p5.cost;
    ft7.tot_g1 = ft7.p1.g1 + ft7.p2.g1 + ft7.p3.g1 + ft7.p4.g1 + ft7.p5.g1;
    ft7.tot_g2 = ft7.p1.g2 + ft7.p2.g2 + ft7.p3.g2 + ft7.p4.g2 + ft7.p5.g2;
    ft7.tot_g3 = ft7.p1.g3 + ft7.p2.g3 + ft7.p3.g3 + ft7.p4.g3 + ft7.p5.g3;
    ft7.tot_semi = ft7.p1.semi + ft7.p2.semi + ft7.p3.semi + ft7.p4.semi + ft7.p5.semi;
    ft7.tot_td3 = ft7.p1.td3 + ft7.p2.td3 + ft7.p3.td3 + ft7.p4.td3 + ft7.p5.td3;
    ft7.tot_final = ft7.p1.final + ft7.p2.final + ft7.p3.final + ft7.p4.final + ft7.p5.final;
    ft7.tot_team = ft7.p1.tot + ft7.p2.tot + ft7.p3.tot + ft7.p4.tot + ft7.p5.tot;
    const ft8 = {
        ...fantateam_type,
        team_index: 8,
        name: "stirati",
        rione: { ...NORD },
        p1: { ...UmbertoNobile },
        p2: { ...AlessandroSant },
        p3: { ...FilippoPasquon },
        p4: { ...MiracleObichukwu },
        p5: { ...LarryTrevisan },
    };
    ft8.total_cost = ft8.p1.cost + ft8.p2.cost + ft8.p3.cost + ft8.p4.cost + ft8.p5.cost;
    ft8.tot_g1 = ft8.p1.g1 + ft8.p2.g1 + ft8.p3.g1 + ft8.p4.g1 + ft8.p5.g1;
    ft8.tot_g2 = ft8.p1.g2 + ft8.p2.g2 + ft8.p3.g2 + ft8.p4.g2 + ft8.p5.g2;
    ft8.tot_g3 = ft8.p1.g3 + ft8.p2.g3 + ft8.p3.g3 + ft8.p4.g3 + ft8.p5.g3;
    ft8.tot_semi = ft8.p1.semi + ft8.p2.semi + ft8.p3.semi + ft8.p4.semi + ft8.p5.semi;
    ft8.tot_td3 = ft8.p1.td3 + ft8.p2.td3 + ft8.p3.td3 + ft8.p4.td3 + ft8.p5.td3;
    ft8.tot_final = ft8.p1.final + ft8.p2.final + ft8.p3.final + ft8.p4.final + ft8.p5.final;
    ft8.tot_team = ft8.p1.tot + ft8.p2.tot + ft8.p3.tot + ft8.p4.tot + ft8.p5.tot;
    const ft9 = {
        ...fantateam_type,
        team_index: 9,
        name: "emosbobna",
        rione: { ...NORD },
        p1: { ...DevinChiarcos },
        p2: { ...MarcoLombardo },
        p3: { ...GiovanniZanin },
        p4: { ...MattiaRoiatti },
        p5: { ...PietroSoramel },
    };
    ft9.total_cost = ft9.p1.cost + ft9.p2.cost + ft9.p3.cost + ft9.p4.cost + ft9.p5.cost;
    ft9.tot_g1 = ft9.p1.g1 + ft9.p2.g1 + ft9.p3.g1 + ft9.p4.g1 + ft9.p5.g1;
    ft9.tot_g2 = ft9.p1.g2 + ft9.p2.g2 + ft9.p3.g2 + ft9.p4.g2 + ft9.p5.g2;
    ft9.tot_g3 = ft9.p1.g3 + ft9.p2.g3 + ft9.p3.g3 + ft9.p4.g3 + ft9.p5.g3;
    ft9.tot_semi = ft9.p1.semi + ft9.p2.semi + ft9.p3.semi + ft9.p4.semi + ft9.p5.semi;
    ft9.tot_td3 = ft9.p1.td3 + ft9.p2.td3 + ft9.p3.td3 + ft9.p4.td3 + ft9.p5.td3;
    ft9.tot_final = ft9.p1.final + ft9.p2.final + ft9.p3.final + ft9.p4.final + ft9.p5.final;
    ft9.tot_team = ft9.p1.tot + ft9.p2.tot + ft9.p3.tot + ft9.p4.tot + ft9.p5.tot;
    const ft10 = {
        ...fantateam_type,
        team_index: 10,
        name: "Gabro's top team",
        rione: { ...WEST },
        p1: { ...UmbertoNobile },
        p2: { ...AlessandroCostantini },
        p3: { ...MarcoSerrao },
        p4: { ...MiracleObichukwu },
        p5: { ...EnricoSant },
    };
    ft10.total_cost = ft10.p1.cost + ft10.p2.cost + ft10.p3.cost + ft10.p4.cost + ft10.p5.cost;
    ft10.tot_g1 = ft10.p1.g1 + ft10.p2.g1 + ft10.p3.g1 + ft10.p4.g1 + ft10.p5.g1;
    ft10.tot_g2 = ft10.p1.g2 + ft10.p2.g2 + ft10.p3.g2 + ft10.p4.g2 + ft10.p5.g2;
    ft10.tot_g3 = ft10.p1.g3 + ft10.p2.g3 + ft10.p3.g3 + ft10.p4.g3 + ft10.p5.g3;
    ft10.tot_semi = ft10.p1.semi + ft10.p2.semi + ft10.p3.semi + ft10.p4.semi + ft10.p5.semi;
    ft10.tot_td3 = ft10.p1.td3 + ft10.p2.td3 + ft10.p3.td3 + ft10.p4.td3 + ft10.p5.td3;
    ft10.tot_final = ft10.p1.final + ft10.p2.final + ft10.p3.final + ft10.p4.final + ft10.p5.final;
    ft10.tot_team = ft10.p1.tot + ft10.p2.tot + ft10.p3.tot + ft10.p4.tot + ft10.p5.tot;
    const ft11 = {
        ...fantateam_type,
        team_index: 11,
        name: "oilapledecoval",
        rione: { ...NORD },
        p1: { ...AlessandroSantin },
        p2: { ...MarcoMarchetti },
        p3: { ...DavidGaspardo },
        p4: { ...UmbertoNobile },
        p5: { ...PietroSoramel },
    };
    ft11.total_cost = ft11.p1.cost + ft11.p2.cost + ft11.p3.cost + ft11.p4.cost + ft11.p5.cost;
    ft11.tot_g1 = ft11.p1.g1 + ft11.p2.g1 + ft11.p3.g1 + ft11.p4.g1 + ft11.p5.g1;
    ft11.tot_g2 = ft11.p1.g2 + ft11.p2.g2 + ft11.p3.g2 + ft11.p4.g2 + ft11.p5.g2;
    ft11.tot_g3 = ft11.p1.g3 + ft11.p2.g3 + ft11.p3.g3 + ft11.p4.g3 + ft11.p5.g3;
    ft11.tot_semi = ft11.p1.semi + ft11.p2.semi + ft11.p3.semi + ft11.p4.semi + ft11.p5.semi;
    ft11.tot_td3 = ft11.p1.td3 + ft11.p2.td3 + ft11.p3.td3 + ft11.p4.td3 + ft11.p5.td3;
    ft11.tot_final = ft11.p1.final + ft11.p2.final + ft11.p3.final + ft11.p4.final + ft11.p5.final;
    ft11.tot_team = ft11.p1.tot + ft11.p2.tot + ft11.p3.tot + ft11.p4.tot + ft11.p5.tot;
    const ft12 = {
        ...fantateam_type,
        team_index: 12,
        name: "Armata Rossa",
        rione: { ...NORD },
        p1: { ...MarcoRizzi },
        p2: { ...MassimilianoMoretti },
        p3: { ...UmbertoNobile },
        p4: { ...MassimilianoRossi },
        p5: { ...LucaAnedda },
    };
    ft12.total_cost = ft12.p1.cost + ft12.p2.cost + ft12.p3.cost + ft12.p4.cost + ft12.p5.cost;
    ft12.tot_g1 = ft12.p1.g1 + ft12.p2.g1 + ft12.p3.g1 + ft12.p4.g1 + ft12.p5.g1;
    ft12.tot_g2 = ft12.p1.g2 + ft12.p2.g2 + ft12.p3.g2 + ft12.p4.g2 + ft12.p5.g2;
    ft12.tot_g3 = ft12.p1.g3 + ft12.p2.g3 + ft12.p3.g3 + ft12.p4.g3 + ft12.p5.g3;
    ft12.tot_semi = ft12.p1.semi + ft12.p2.semi + ft12.p3.semi + ft12.p4.semi + ft12.p5.semi;
    ft12.tot_td3 = ft12.p1.td3 + ft12.p2.td3 + ft12.p3.td3 + ft12.p4.td3 + ft12.p5.td3;
    ft12.tot_final = ft12.p1.final + ft12.p2.final + ft12.p3.final + ft12.p4.final + ft12.p5.final;
    ft12.tot_team = ft12.p1.tot + ft12.p2.tot + ft12.p3.tot + ft12.p4.tot + ft12.p5.tot;
    const ft13 = {
        ...fantateam_type,
        team_index: 13,
        name: "La Betty",
        rione: { ...WEST },
        p1: { ...EmanueleDaneluzzi },
        p2: { ...MassimilianoMoretti },
        p3: { ...PietroSoramel },
        p4: { ...EdoardoPicogna },
        p5: { ...MiracleObichukwu },
    };
    ft13.total_cost = ft13.p1.cost + ft13.p2.cost + ft13.p3.cost + ft13.p4.cost + ft13.p5.cost;
    ft13.tot_g1 = ft13.p1.g1 + ft13.p2.g1 + ft13.p3.g1 + ft13.p4.g1 + ft13.p5.g1;
    ft13.tot_g2 = ft13.p1.g2 + ft13.p2.g2 + ft13.p3.g2 + ft13.p4.g2 + ft13.p5.g2;
    ft13.tot_g3 = ft13.p1.g3 + ft13.p2.g3 + ft13.p3.g3 + ft13.p4.g3 + ft13.p5.g3;
    ft13.tot_semi = ft13.p1.semi + ft13.p2.semi + ft13.p3.semi + ft13.p4.semi + ft13.p5.semi;
    ft13.tot_td3 = ft13.p1.td3 + ft13.p2.td3 + ft13.p3.td3 + ft13.p4.td3 + ft13.p5.td3;
    ft13.tot_final = ft13.p1.final + ft13.p2.final + ft13.p3.final + ft13.p4.final + ft13.p5.final;
    ft13.tot_team = ft13.p1.tot + ft13.p2.tot + ft13.p3.tot + ft13.p4.tot + ft13.p5.tot;
    const ft14 = {
        ...fantateam_type,
        team_index: 14,
        name: "Estinti",
        rione: { ...WEST },
        p1: { ...UmbertoNobile },
        p2: { ...AlessandroCostantini },
        p3: { ...AlessandroSant },
        p4: { ...MauroPerina },
        p5: { ...MarcoMarchetti },
    };
    ft14.total_cost = ft14.p1.cost + ft14.p2.cost + ft14.p3.cost + ft14.p4.cost + ft14.p5.cost;
    ft14.tot_g1 = ft14.p1.g1 + ft14.p2.g1 + ft14.p3.g1 + ft14.p4.g1 + ft14.p5.g1;
    ft14.tot_g2 = ft14.p1.g2 + ft14.p2.g2 + ft14.p3.g2 + ft14.p4.g2 + ft14.p5.g2;
    ft14.tot_g3 = ft14.p1.g3 + ft14.p2.g3 + ft14.p3.g3 + ft14.p4.g3 + ft14.p5.g3;
    ft14.tot_semi = ft14.p1.semi + ft14.p2.semi + ft14.p3.semi + ft14.p4.semi + ft14.p5.semi;
    ft14.tot_td3 = ft14.p1.td3 + ft14.p2.td3 + ft14.p3.td3 + ft14.p4.td3 + ft14.p5.td3;
    ft14.tot_final = ft14.p1.final + ft14.p2.final + ft14.p3.final + ft14.p4.final + ft14.p5.final;
    ft14.tot_team = ft14.p1.tot + ft14.p2.tot + ft14.p3.tot + ft14.p4.tot + ft14.p5.tot;
    const ft15 = {
        ...fantateam_type,
        team_index: 15,
        name: "C&C",
        rione: { ...SUD },
        p1: { ...FilippoSappa },
        p2: { ...LorenzoMoro },
        p3: { ...PietroSoramel },
        p4: { ...EnricoSant },
        p5: { ...DanieleGanzit },
    };
    ft15.total_cost = ft15.p1.cost + ft15.p2.cost + ft15.p3.cost + ft15.p4.cost + ft15.p5.cost;
    ft15.tot_g1 = ft15.p1.g1 + ft15.p2.g1 + ft15.p3.g1 + ft15.p4.g1 + ft15.p5.g1;
    ft15.tot_g2 = ft15.p1.g2 + ft15.p2.g2 + ft15.p3.g2 + ft15.p4.g2 + ft15.p5.g2;
    ft15.tot_g3 = ft15.p1.g3 + ft15.p2.g3 + ft15.p3.g3 + ft15.p4.g3 + ft15.p5.g3;
    ft15.tot_semi = ft15.p1.semi + ft15.p2.semi + ft15.p3.semi + ft15.p4.semi + ft15.p5.semi;
    ft15.tot_td3 = ft15.p1.td3 + ft15.p2.td3 + ft15.p3.td3 + ft15.p4.td3 + ft15.p5.td3;
    ft15.tot_final = ft15.p1.final + ft15.p2.final + ft15.p3.final + ft15.p4.final + ft15.p5.final;
    ft15.tot_team = ft15.p1.tot + ft15.p2.tot + ft15.p3.tot + ft15.p4.tot + ft15.p5.tot;
    const ft16 = {
        ...fantateam_type,
        team_index: 16,
        name: "🦀",
        rione: { ...WEST },
        p1: { ...PietroSoramel },
        p2: { ...MassimilianoMoretti },
        p3: { ...AlessioFurlan },
        p4: { ...LucaSoramel },
        p5: { ...MarcoRizzi },
    };
    ft16.total_cost = ft16.p1.cost + ft16.p2.cost + ft16.p3.cost + ft16.p4.cost + ft16.p5.cost;
    ft16.tot_g1 = ft16.p1.g1 + ft16.p2.g1 + ft16.p3.g1 + ft16.p4.g1 + ft16.p5.g1;
    ft16.tot_g2 = ft16.p1.g2 + ft16.p2.g2 + ft16.p3.g2 + ft16.p4.g2 + ft16.p5.g2;
    ft16.tot_g3 = ft16.p1.g3 + ft16.p2.g3 + ft16.p3.g3 + ft16.p4.g3 + ft16.p5.g3;
    ft16.tot_semi = ft16.p1.semi + ft16.p2.semi + ft16.p3.semi + ft16.p4.semi + ft16.p5.semi;
    ft16.tot_td3 = ft16.p1.td3 + ft16.p2.td3 + ft16.p3.td3 + ft16.p4.td3 + ft16.p5.td3;
    ft16.tot_final = ft16.p1.final + ft16.p2.final + ft16.p3.final + ft16.p4.final + ft16.p5.final;
    ft16.tot_team = ft16.p1.tot + ft16.p2.tot + ft16.p3.tot + ft16.p4.tot + ft16.p5.tot;
    const ft17 = {
        ...fantateam_type,
        team_index: 17,
        name: "Melinda",
        rione: { ...NORD },
        p1: { ...PietroSoramel },
        p2: { ...LucaSoramel },
        p3: { ...MassimilianoMoretti },
        p4: { ...AlessioFurlan },
        p5: { ...AndreaMoretti },
    };
    ft17.total_cost = ft17.p1.cost + ft17.p2.cost + ft17.p3.cost + ft17.p4.cost + ft17.p5.cost;
    ft17.tot_g1 = ft17.p1.g1 + ft17.p2.g1 + ft17.p3.g1 + ft17.p4.g1 + ft17.p5.g1;
    ft17.tot_g2 = ft17.p1.g2 + ft17.p2.g2 + ft17.p3.g2 + ft17.p4.g2 + ft17.p5.g2;
    ft17.tot_g3 = ft17.p1.g3 + ft17.p2.g3 + ft17.p3.g3 + ft17.p4.g3 + ft17.p5.g3;
    ft17.tot_semi = ft17.p1.semi + ft17.p2.semi + ft17.p3.semi + ft17.p4.semi + ft17.p5.semi;
    ft17.tot_td3 = ft17.p1.td3 + ft17.p2.td3 + ft17.p3.td3 + ft17.p4.td3 + ft17.p5.td3;
    ft17.tot_final = ft17.p1.final + ft17.p2.final + ft17.p3.final + ft17.p4.final + ft17.p5.final;
    ft17.tot_team = ft17.p1.tot + ft17.p2.tot + ft17.p3.tot + ft17.p4.tot + ft17.p5.tot;
    const ft18 = {
        ...fantateam_type,
        team_index: 18,
        name: "Winxclub",
        rione: { ...EST },
        p1: { ...AlessioFurlan },
        p2: { ...MassimilianoMoretti },
        p3: { ...LucaSoramel },
        p4: { ...PietroSoramel },
        p5: { ...LucaAnedda },
    };
    ft18.total_cost = ft18.p1.cost + ft18.p2.cost + ft18.p3.cost + ft18.p4.cost + ft18.p5.cost;
    ft18.tot_g1 = ft18.p1.g1 + ft18.p2.g1 + ft18.p3.g1 + ft18.p4.g1 + ft18.p5.g1;
    ft18.tot_g2 = ft18.p1.g2 + ft18.p2.g2 + ft18.p3.g2 + ft18.p4.g2 + ft18.p5.g2;
    ft18.tot_g3 = ft18.p1.g3 + ft18.p2.g3 + ft18.p3.g3 + ft18.p4.g3 + ft18.p5.g3;
    ft18.tot_semi = ft18.p1.semi + ft18.p2.semi + ft18.p3.semi + ft18.p4.semi + ft18.p5.semi;
    ft18.tot_td3 = ft18.p1.td3 + ft18.p2.td3 + ft18.p3.td3 + ft18.p4.td3 + ft18.p5.td3;
    ft18.tot_final = ft18.p1.final + ft18.p2.final + ft18.p3.final + ft18.p4.final + ft18.p5.final;
    ft18.tot_team = ft18.p1.tot + ft18.p2.tot + ft18.p3.tot + ft18.p4.tot + ft18.p5.tot;
    const ft19 = {
        ...fantateam_type,
        team_index: 19,
        name: "tnerb",
        rione: { ...SUD },
        p1: { ...MassimilianoMoretti },
        p2: { ...GiovanniTonizzo },
        p3: { ...PietroSoramel },
        p4: { ...MarcoPolo },
        p5: { ...MatteoSpagnolo },
    };
    ft19.total_cost = ft19.p1.cost + ft19.p2.cost + ft19.p3.cost + ft19.p4.cost + ft19.p5.cost;
    ft19.tot_g1 = ft19.p1.g1 + ft19.p2.g1 + ft19.p3.g1 + ft19.p4.g1 + ft19.p5.g1;
    ft19.tot_g2 = ft19.p1.g2 + ft19.p2.g2 + ft19.p3.g2 + ft19.p4.g2 + ft19.p5.g2;
    ft19.tot_g3 = ft19.p1.g3 + ft19.p2.g3 + ft19.p3.g3 + ft19.p4.g3 + ft19.p5.g3;
    ft19.tot_semi = ft19.p1.semi + ft19.p2.semi + ft19.p3.semi + ft19.p4.semi + ft19.p5.semi;
    ft19.tot_td3 = ft19.p1.td3 + ft19.p2.td3 + ft19.p3.td3 + ft19.p4.td3 + ft19.p5.td3;
    ft19.tot_final = ft19.p1.final + ft19.p2.final + ft19.p3.final + ft19.p4.final + ft19.p5.final;
    ft19.tot_team = ft19.p1.tot + ft19.p2.tot + ft19.p3.tot + ft19.p4.tot + ft19.p5.tot;
    const ft20 = {
        ...fantateam_type,
        team_index: 20,
        name: "Prime time players",
        rione: { ...WEST },
        p1: { ...LarryTrevisan },
        p2: { ...MarcoSerrao },
        p3: { ...UmbertoNobile },
        p4: { ...FilippoPasquon },
        p5: { ...LorenzoMoro },
    };
    ft20.total_cost = ft20.p1.cost + ft20.p2.cost + ft20.p3.cost + ft20.p4.cost + ft20.p5.cost;
    ft20.tot_g1 = ft20.p1.g1 + ft20.p2.g1 + ft20.p3.g1 + ft20.p4.g1 + ft20.p5.g1;
    ft20.tot_g2 = ft20.p1.g2 + ft20.p2.g2 + ft20.p3.g2 + ft20.p4.g2 + ft20.p5.g2;
    ft20.tot_g3 = ft20.p1.g3 + ft20.p2.g3 + ft20.p3.g3 + ft20.p4.g3 + ft20.p5.g3;
    ft20.tot_semi = ft20.p1.semi + ft20.p2.semi + ft20.p3.semi + ft20.p4.semi + ft20.p5.semi;
    ft20.tot_td3 = ft20.p1.td3 + ft20.p2.td3 + ft20.p3.td3 + ft20.p4.td3 + ft20.p5.td3;
    ft20.tot_final = ft20.p1.final + ft20.p2.final + ft20.p3.final + ft20.p4.final + ft20.p5.final;
    ft20.tot_team = ft20.p1.tot + ft20.p2.tot + ft20.p3.tot + ft20.p4.tot + ft20.p5.tot;
    const ft21 = {
        ...fantateam_type,
        team_index: 21,
        name: "Golden Cod Cepe’s Warriors",
        rione: { ...SUD },
        p1: { ...AntonioGri },
        p2: { ...GiovanniZanin },
        p3: { ...MiracleObichukwu },
        p4: { ...FilippoSappa },
        p5: { ...GiovanniTonizzo },
    };
    ft21.total_cost = ft21.p1.cost + ft21.p2.cost + ft21.p3.cost + ft21.p4.cost + ft21.p5.cost;
    ft21.tot_g1 = ft21.p1.g1 + ft21.p2.g1 + ft21.p3.g1 + ft21.p4.g1 + ft21.p5.g1;
    ft21.tot_g2 = ft21.p1.g2 + ft21.p2.g2 + ft21.p3.g2 + ft21.p4.g2 + ft21.p5.g2;
    ft21.tot_g3 = ft21.p1.g3 + ft21.p2.g3 + ft21.p3.g3 + ft21.p4.g3 + ft21.p5.g3;
    ft21.tot_semi = ft21.p1.semi + ft21.p2.semi + ft21.p3.semi + ft21.p4.semi + ft21.p5.semi;
    ft21.tot_td3 = ft21.p1.td3 + ft21.p2.td3 + ft21.p3.td3 + ft21.p4.td3 + ft21.p5.td3;
    ft21.tot_final = ft21.p1.final + ft21.p2.final + ft21.p3.final + ft21.p4.final + ft21.p5.final;
    ft21.tot_team = ft21.p1.tot + ft21.p2.tot + ft21.p3.tot + ft21.p4.tot + ft21.p5.tot;
    const ft22 = {
        ...fantateam_type,
        team_index: 22,
        name: "sustovich",
        rione: { ...WEST },
        p1: { ...MiracleObichukwu },
        p2: { ...MassimilianoMoretti },
        p3: { ...LucaSoramel },
        p4: { ...AndreaMoretti },
        p5: { ...PietroSoramel },
    };
    ft22.total_cost = ft22.p1.cost + ft22.p2.cost + ft22.p3.cost + ft22.p4.cost + ft22.p5.cost;
    ft22.tot_g1 = ft22.p1.g1 + ft22.p2.g1 + ft22.p3.g1 + ft22.p4.g1 + ft22.p5.g1;
    ft22.tot_g2 = ft22.p1.g2 + ft22.p2.g2 + ft22.p3.g2 + ft22.p4.g2 + ft22.p5.g2;
    ft22.tot_g3 = ft22.p1.g3 + ft22.p2.g3 + ft22.p3.g3 + ft22.p4.g3 + ft22.p5.g3;
    ft22.tot_semi = ft22.p1.semi + ft22.p2.semi + ft22.p3.semi + ft22.p4.semi + ft22.p5.semi;
    ft22.tot_td3 = ft22.p1.td3 + ft22.p2.td3 + ft22.p3.td3 + ft22.p4.td3 + ft22.p5.td3;
    ft22.tot_final = ft22.p1.final + ft22.p2.final + ft22.p3.final + ft22.p4.final + ft22.p5.final;
    ft22.tot_team = ft22.p1.tot + ft22.p2.tot + ft22.p3.tot + ft22.p4.tot + ft22.p5.tot;
    const ft23 = {
        ...fantateam_type,
        team_index: 23,
        name: "Groviscrazia",
        rione: { ...WEST },
        p1: { ...PietroSoramel },
        p2: { ...LucaSoramel },
        p3: { ...MiracleObichukwu },
        p4: { ...MicheleVendrame },
        p5: { ...MassimilianoMoretti },
    };
    ft23.total_cost = ft23.p1.cost + ft23.p2.cost + ft23.p3.cost + ft23.p4.cost + ft23.p5.cost;
    ft23.tot_g1 = ft23.p1.g1 + ft23.p2.g1 + ft23.p3.g1 + ft23.p4.g1 + ft23.p5.g1;
    ft23.tot_g2 = ft23.p1.g2 + ft23.p2.g2 + ft23.p3.g2 + ft23.p4.g2 + ft23.p5.g2;
    ft23.tot_g3 = ft23.p1.g3 + ft23.p2.g3 + ft23.p3.g3 + ft23.p4.g3 + ft23.p5.g3;
    ft23.tot_semi = ft23.p1.semi + ft23.p2.semi + ft23.p3.semi + ft23.p4.semi + ft23.p5.semi;
    ft23.tot_td3 = ft23.p1.td3 + ft23.p2.td3 + ft23.p3.td3 + ft23.p4.td3 + ft23.p5.td3;
    ft23.tot_final = ft23.p1.final + ft23.p2.final + ft23.p3.final + ft23.p4.final + ft23.p5.final;
    ft23.tot_team = ft23.p1.tot + ft23.p2.tot + ft23.p3.tot + ft23.p4.tot + ft23.p5.tot;
    const ft24 = {
        ...fantateam_type,
        team_index: 24,
        name: "DEVIN",
        rione: { ...WEST },
        p1: { ...MassimilianoMoretti },
        p2: { ...GiacomoPiacentini },
        p3: { ...DevinChiarcos },
        p4: { ...VittorioBasso },
        p5: { ...FilippoPasquon },
    };
    ft24.total_cost = ft24.p1.cost + ft24.p2.cost + ft24.p3.cost + ft24.p4.cost + ft24.p5.cost;
    ft24.tot_g1 = ft24.p1.g1 + ft24.p2.g1 + ft24.p3.g1 + ft24.p4.g1 + ft24.p5.g1;
    ft24.tot_g2 = ft24.p1.g2 + ft24.p2.g2 + ft24.p3.g2 + ft24.p4.g2 + ft24.p5.g2;
    ft24.tot_g3 = ft24.p1.g3 + ft24.p2.g3 + ft24.p3.g3 + ft24.p4.g3 + ft24.p5.g3;
    ft24.tot_semi = ft24.p1.semi + ft24.p2.semi + ft24.p3.semi + ft24.p4.semi + ft24.p5.semi;
    ft24.tot_td3 = ft24.p1.td3 + ft24.p2.td3 + ft24.p3.td3 + ft24.p4.td3 + ft24.p5.td3;
    ft24.tot_final = ft24.p1.final + ft24.p2.final + ft24.p3.final + ft24.p4.final + ft24.p5.final;
    ft24.tot_team = ft24.p1.tot + ft24.p2.tot + ft24.p3.tot + ft24.p4.tot + ft24.p5.tot;
    const ft25 = {
        ...fantateam_type,
        team_index: 25,
        name: "Mia",
        rione: { ...WEST },
        p1: { ...DavideParon },
        p2: { ...MassimilianoMoretti },
        p3: { ...DevinChiarcos },
        p4: { ...MattiaMasotti },
        p5: { ...FilippoPasquon },
    };
    ft25.total_cost = ft25.p1.cost + ft25.p2.cost + ft25.p3.cost + ft25.p4.cost + ft25.p5.cost;
    ft25.tot_g1 = ft25.p1.g1 + ft25.p2.g1 + ft25.p3.g1 + ft25.p4.g1 + ft25.p5.g1;
    ft25.tot_g2 = ft25.p1.g2 + ft25.p2.g2 + ft25.p3.g2 + ft25.p4.g2 + ft25.p5.g2;
    ft25.tot_g3 = ft25.p1.g3 + ft25.p2.g3 + ft25.p3.g3 + ft25.p4.g3 + ft25.p5.g3;
    ft25.tot_semi = ft25.p1.semi + ft25.p2.semi + ft25.p3.semi + ft25.p4.semi + ft25.p5.semi;
    ft25.tot_td3 = ft25.p1.td3 + ft25.p2.td3 + ft25.p3.td3 + ft25.p4.td3 + ft25.p5.td3;
    ft25.tot_final = ft25.p1.final + ft25.p2.final + ft25.p3.final + ft25.p4.final + ft25.p5.final;
    ft25.tot_team = ft25.p1.tot + ft25.p2.tot + ft25.p3.tot + ft25.p4.tot + ft25.p5.tot;
    const ft26 = {
        ...fantateam_type,
        team_index: 26,
        name: "Goggo Bello",
        rione: { ...WEST },
        p1: { ...AlessandroSant },
        p2: { ...MiracleObichukwu },
        p3: { ...UmbertoNobile },
        p4: { ...TommasoMartello },
        p5: { ...GionaTell },
    };
    ft26.total_cost = ft26.p1.cost + ft26.p2.cost + ft26.p3.cost + ft26.p4.cost + ft26.p5.cost;
    ft26.tot_g1 = ft26.p1.g1 + ft26.p2.g1 + ft26.p3.g1 + ft26.p4.g1 + ft26.p5.g1;
    ft26.tot_g2 = ft26.p1.g2 + ft26.p2.g2 + ft26.p3.g2 + ft26.p4.g2 + ft26.p5.g2;
    ft26.tot_g3 = ft26.p1.g3 + ft26.p2.g3 + ft26.p3.g3 + ft26.p4.g3 + ft26.p5.g3;
    ft26.tot_semi = ft26.p1.semi + ft26.p2.semi + ft26.p3.semi + ft26.p4.semi + ft26.p5.semi;
    ft26.tot_td3 = ft26.p1.td3 + ft26.p2.td3 + ft26.p3.td3 + ft26.p4.td3 + ft26.p5.td3;
    ft26.tot_final = ft26.p1.final + ft26.p2.final + ft26.p3.final + ft26.p4.final + ft26.p5.final;
    ft26.tot_team = ft26.p1.tot + ft26.p2.tot + ft26.p3.tot + ft26.p4.tot + ft26.p5.tot;
    const ft27 = {
        ...fantateam_type,
        team_index: 27,
        name: "Rione Muscletto",
        rione: { ...NORD },
        p1: { ...GioeleTudini },
        p2: { ...FilippoSappa },
        p3: { ...LarryTrevisan },
        p4: { ...AlessandroSant },
        p5: { ...AlessandroRojatti },
    };
    ft27.total_cost = ft27.p1.cost + ft27.p2.cost + ft27.p3.cost + ft27.p4.cost + ft27.p5.cost;
    ft27.tot_g1 = ft27.p1.g1 + ft27.p2.g1 + ft27.p3.g1 + ft27.p4.g1 + ft27.p5.g1;
    ft27.tot_g2 = ft27.p1.g2 + ft27.p2.g2 + ft27.p3.g2 + ft27.p4.g2 + ft27.p5.g2;
    ft27.tot_g3 = ft27.p1.g3 + ft27.p2.g3 + ft27.p3.g3 + ft27.p4.g3 + ft27.p5.g3;
    ft27.tot_semi = ft27.p1.semi + ft27.p2.semi + ft27.p3.semi + ft27.p4.semi + ft27.p5.semi;
    ft27.tot_td3 = ft27.p1.td3 + ft27.p2.td3 + ft27.p3.td3 + ft27.p4.td3 + ft27.p5.td3;
    ft27.tot_final = ft27.p1.final + ft27.p2.final + ft27.p3.final + ft27.p4.final + ft27.p5.final;
    ft27.tot_team = ft27.p1.tot + ft27.p2.tot + ft27.p3.tot + ft27.p4.tot + ft27.p5.tot;
    const ft28 = {
        ...fantateam_type,
        team_index: 28,
        name: "Oklahoma city tinder",
        rione: { ...WEST },
        p1: { ...DevinChiarcos },
        p2: { ...MattiaRoiatti },
        p3: { ...MattiaMasotti },
        p4: { ...FilippoPasquon },
        p5: { ...MassimilianoMoretti },
    };
    ft28.total_cost = ft28.p1.cost + ft28.p2.cost + ft28.p3.cost + ft28.p4.cost + ft28.p5.cost;
    ft28.tot_g1 = ft28.p1.g1 + ft28.p2.g1 + ft28.p3.g1 + ft28.p4.g1 + ft28.p5.g1;
    ft28.tot_g2 = ft28.p1.g2 + ft28.p2.g2 + ft28.p3.g2 + ft28.p4.g2 + ft28.p5.g2;
    ft28.tot_g3 = ft28.p1.g3 + ft28.p2.g3 + ft28.p3.g3 + ft28.p4.g3 + ft28.p5.g3;
    ft28.tot_semi = ft28.p1.semi + ft28.p2.semi + ft28.p3.semi + ft28.p4.semi + ft28.p5.semi;
    ft28.tot_td3 = ft28.p1.td3 + ft28.p2.td3 + ft28.p3.td3 + ft28.p4.td3 + ft28.p5.td3;
    ft28.tot_final = ft28.p1.final + ft28.p2.final + ft28.p3.final + ft28.p4.final + ft28.p5.final;
    ft28.tot_team = ft28.p1.tot + ft28.p2.tot + ft28.p3.tot + ft28.p4.tot + ft28.p5.tot;
    const ft29 = {
        ...fantateam_type,
        team_index: 29,
        name: "Mau",
        rione: { ...WEST },
        p1: { ...EnricoSant },
        p2: { ...MauroCuridori },
        p3: { ...GiacomoSilvestri },
        p4: { ...FilippoSappa },
        p5: { ...AlessandroRizzi },
    };
    ft29.total_cost = ft29.p1.cost + ft29.p2.cost + ft29.p3.cost + ft29.p4.cost + ft29.p5.cost;
    ft29.tot_g1 = ft29.p1.g1 + ft29.p2.g1 + ft29.p3.g1 + ft29.p4.g1 + ft29.p5.g1;
    ft29.tot_g2 = ft29.p1.g2 + ft29.p2.g2 + ft29.p3.g2 + ft29.p4.g2 + ft29.p5.g2;
    ft29.tot_g3 = ft29.p1.g3 + ft29.p2.g3 + ft29.p3.g3 + ft29.p4.g3 + ft29.p5.g3;
    ft29.tot_semi = ft29.p1.semi + ft29.p2.semi + ft29.p3.semi + ft29.p4.semi + ft29.p5.semi;
    ft29.tot_td3 = ft29.p1.td3 + ft29.p2.td3 + ft29.p3.td3 + ft29.p4.td3 + ft29.p5.td3;
    ft29.tot_final = ft29.p1.final + ft29.p2.final + ft29.p3.final + ft29.p4.final + ft29.p5.final;
    ft29.tot_team = ft29.p1.tot + ft29.p2.tot + ft29.p3.tot + ft29.p4.tot + ft29.p5.tot;
    const ft30 = {
        ...fantateam_type,
        team_index: 30,
        name: "SuperOne",
        rione: { ...WEST },
        p1: { ...AndreaMoretti },
        p2: { ...MicheleDeAnna },
        p3: { ...MassimilianoMoretti },
        p4: { ...MiracleObichukwu },
        p5: { ...MicheleGorasso },
    };
    ft30.total_cost = ft30.p1.cost + ft30.p2.cost + ft30.p3.cost + ft30.p4.cost + ft30.p5.cost;
    ft30.tot_g1 = ft30.p1.g1 + ft30.p2.g1 + ft30.p3.g1 + ft30.p4.g1 + ft30.p5.g1;
    ft30.tot_g2 = ft30.p1.g2 + ft30.p2.g2 + ft30.p3.g2 + ft30.p4.g2 + ft30.p5.g2;
    ft30.tot_g3 = ft30.p1.g3 + ft30.p2.g3 + ft30.p3.g3 + ft30.p4.g3 + ft30.p5.g3;
    ft30.tot_semi = ft30.p1.semi + ft30.p2.semi + ft30.p3.semi + ft30.p4.semi + ft30.p5.semi;
    ft30.tot_td3 = ft30.p1.td3 + ft30.p2.td3 + ft30.p3.td3 + ft30.p4.td3 + ft30.p5.td3;
    ft30.tot_final = ft30.p1.final + ft30.p2.final + ft30.p3.final + ft30.p4.final + ft30.p5.final;
    ft30.tot_team = ft30.p1.tot + ft30.p2.tot + ft30.p3.tot + ft30.p4.tot + ft30.p5.tot;
    const ft31 = {
        ...fantateam_type,
        team_index: 31,
        name: "Liam",
        rione: { ...NORD },
        p1: { ...MattiaMasotti },
        p2: { ...MassimilianoMoretti },
        p3: { ...EnricoSant },
        p4: { ...MassimoMasotti },
        p5: { ...DevinChiarcos },
    };
    ft31.total_cost = ft31.p1.cost + ft31.p2.cost + ft31.p3.cost + ft31.p4.cost + ft31.p5.cost;
    ft31.tot_g1 = ft31.p1.g1 + ft31.p2.g1 + ft31.p3.g1 + ft31.p4.g1 + ft31.p5.g1;
    ft31.tot_g2 = ft31.p1.g2 + ft31.p2.g2 + ft31.p3.g2 + ft31.p4.g2 + ft31.p5.g2;
    ft31.tot_g3 = ft31.p1.g3 + ft31.p2.g3 + ft31.p3.g3 + ft31.p4.g3 + ft31.p5.g3;
    ft31.tot_semi = ft31.p1.semi + ft31.p2.semi + ft31.p3.semi + ft31.p4.semi + ft31.p5.semi;
    ft31.tot_td3 = ft31.p1.td3 + ft31.p2.td3 + ft31.p3.td3 + ft31.p4.td3 + ft31.p5.td3;
    ft31.tot_final = ft31.p1.final + ft31.p2.final + ft31.p3.final + ft31.p4.final + ft31.p5.final;
    ft31.tot_team = ft31.p1.tot + ft31.p2.tot + ft31.p3.tot + ft31.p4.tot + ft31.p5.tot;
    const ft32 = {
        ...fantateam_type,
        team_index: 32,
        name: "Flacko the sheriff",
        rione: { ...WEST },
        p1: { ...MicheleVendrame },
        p2: { ...MassimilianoMoretti },
        p3: { ...MattiaRoiatti },
        p4: { ...PietroSoramel },
        p5: { ...ValentinoCigainero },
    };
    ft32.total_cost = ft32.p1.cost + ft32.p2.cost + ft32.p3.cost + ft32.p4.cost + ft32.p5.cost;
    ft32.tot_g1 = ft32.p1.g1 + ft32.p2.g1 + ft32.p3.g1 + ft32.p4.g1 + ft32.p5.g1;
    ft32.tot_g2 = ft32.p1.g2 + ft32.p2.g2 + ft32.p3.g2 + ft32.p4.g2 + ft32.p5.g2;
    ft32.tot_g3 = ft32.p1.g3 + ft32.p2.g3 + ft32.p3.g3 + ft32.p4.g3 + ft32.p5.g3;
    ft32.tot_semi = ft32.p1.semi + ft32.p2.semi + ft32.p3.semi + ft32.p4.semi + ft32.p5.semi;
    ft32.tot_td3 = ft32.p1.td3 + ft32.p2.td3 + ft32.p3.td3 + ft32.p4.td3 + ft32.p5.td3;
    ft32.tot_final = ft32.p1.final + ft32.p2.final + ft32.p3.final + ft32.p4.final + ft32.p5.final;
    ft32.tot_team = ft32.p1.tot + ft32.p2.tot + ft32.p3.tot + ft32.p4.tot + ft32.p5.tot;
    const ft33 = {
        ...fantateam_type,
        team_index: 33,
        name: "Ghetto boys",
        rione: { ...NORD },
        p1: { ...MiracleObichukwu },
        p2: { ...LarryTrevisan },
        p3: { ...GiovanniTonizzo },
        p4: { ...PietroSoramel },
        p5: { ...DiegoNata },
    };
    ft33.total_cost = ft33.p1.cost + ft33.p2.cost + ft33.p3.cost + ft33.p4.cost + ft33.p5.cost;
    ft33.tot_g1 = ft33.p1.g1 + ft33.p2.g1 + ft33.p3.g1 + ft33.p4.g1 + ft33.p5.g1;
    ft33.tot_g2 = ft33.p1.g2 + ft33.p2.g2 + ft33.p3.g2 + ft33.p4.g2 + ft33.p5.g2;
    ft33.tot_g3 = ft33.p1.g3 + ft33.p2.g3 + ft33.p3.g3 + ft33.p4.g3 + ft33.p5.g3;
    ft33.tot_semi = ft33.p1.semi + ft33.p2.semi + ft33.p3.semi + ft33.p4.semi + ft33.p5.semi;
    ft33.tot_td3 = ft33.p1.td3 + ft33.p2.td3 + ft33.p3.td3 + ft33.p4.td3 + ft33.p5.td3;
    ft33.tot_final = ft33.p1.final + ft33.p2.final + ft33.p3.final + ft33.p4.final + ft33.p5.final;
    ft33.tot_team = ft33.p1.tot + ft33.p2.tot + ft33.p3.tot + ft33.p4.tot + ft33.p5.tot;
    const ft34 = {
        ...fantateam_type,
        team_index: 34,
        name: "GIOGIZ",
        rione: { ...WEST },
        p1: { ...GiacomoPiacentini },
        p2: { ...GiacomoFerigo },
        p3: { ...DevinChiarcos },
        p4: { ...DavidGaspardo },
        p5: { ...FilippoAgnoluzzi },
    };
    ft34.total_cost = ft34.p1.cost + ft34.p2.cost + ft34.p3.cost + ft34.p4.cost + ft34.p5.cost;
    ft34.tot_g1 = ft34.p1.g1 + ft34.p2.g1 + ft34.p3.g1 + ft34.p4.g1 + ft34.p5.g1;
    ft34.tot_g2 = ft34.p1.g2 + ft34.p2.g2 + ft34.p3.g2 + ft34.p4.g2 + ft34.p5.g2;
    ft34.tot_g3 = ft34.p1.g3 + ft34.p2.g3 + ft34.p3.g3 + ft34.p4.g3 + ft34.p5.g3;
    ft34.tot_semi = ft34.p1.semi + ft34.p2.semi + ft34.p3.semi + ft34.p4.semi + ft34.p5.semi;
    ft34.tot_td3 = ft34.p1.td3 + ft34.p2.td3 + ft34.p3.td3 + ft34.p4.td3 + ft34.p5.td3;
    ft34.tot_final = ft34.p1.final + ft34.p2.final + ft34.p3.final + ft34.p4.final + ft34.p5.final;
    ft34.tot_team = ft34.p1.tot + ft34.p2.tot + ft34.p3.tot + ft34.p4.tot + ft34.p5.tot;
    const ft35 = {
        ...fantateam_type,
        team_index: 35,
        name: "After CapOstile",
        rione: { ...WEST },
        p1: { ...SebastianoTonizzo },
        p2: { ...MassimilianoMoretti },
        p3: { ...LarryTrevisan },
        p4: { ...MiracleObichukwu },
        p5: { ...VittorioGri },
    };
    ft35.total_cost = ft35.p1.cost + ft35.p2.cost + ft35.p3.cost + ft35.p4.cost + ft35.p5.cost;
    ft35.tot_g1 = ft35.p1.g1 + ft35.p2.g1 + ft35.p3.g1 + ft35.p4.g1 + ft35.p5.g1;
    ft35.tot_g2 = ft35.p1.g2 + ft35.p2.g2 + ft35.p3.g2 + ft35.p4.g2 + ft35.p5.g2;
    ft35.tot_g3 = ft35.p1.g3 + ft35.p2.g3 + ft35.p3.g3 + ft35.p4.g3 + ft35.p5.g3;
    ft35.tot_semi = ft35.p1.semi + ft35.p2.semi + ft35.p3.semi + ft35.p4.semi + ft35.p5.semi;
    ft35.tot_td3 = ft35.p1.td3 + ft35.p2.td3 + ft35.p3.td3 + ft35.p4.td3 + ft35.p5.td3;
    ft35.tot_final = ft35.p1.final + ft35.p2.final + ft35.p3.final + ft35.p4.final + ft35.p5.final;
    ft35.tot_team = ft35.p1.tot + ft35.p2.tot + ft35.p3.tot + ft35.p4.tot + ft35.p5.tot;
    const ft36 = {
        ...fantateam_type,
        team_index: 36,
        name: "Ringhio",
        rione: { ...WEST },
        p1: { ...LucaSoramel },
        p2: { ...MassimilianoMoretti },
        p3: { ...LarryTrevisan },
        p4: { ...AlessandroRojatti },
        p5: { ...GiacomoFerigo },
    };
    ft36.total_cost = ft36.p1.cost + ft36.p2.cost + ft36.p3.cost + ft36.p4.cost + ft36.p5.cost;
    ft36.tot_g1 = ft36.p1.g1 + ft36.p2.g1 + ft36.p3.g1 + ft36.p4.g1 + ft36.p5.g1;
    ft36.tot_g2 = ft36.p1.g2 + ft36.p2.g2 + ft36.p3.g2 + ft36.p4.g2 + ft36.p5.g2;
    ft36.tot_g3 = ft36.p1.g3 + ft36.p2.g3 + ft36.p3.g3 + ft36.p4.g3 + ft36.p5.g3;
    ft36.tot_semi = ft36.p1.semi + ft36.p2.semi + ft36.p3.semi + ft36.p4.semi + ft36.p5.semi;
    ft36.tot_td3 = ft36.p1.td3 + ft36.p2.td3 + ft36.p3.td3 + ft36.p4.td3 + ft36.p5.td3;
    ft36.tot_final = ft36.p1.final + ft36.p2.final + ft36.p3.final + ft36.p4.final + ft36.p5.final;
    ft36.tot_team = ft36.p1.tot + ft36.p2.tot + ft36.p3.tot + ft36.p4.tot + ft36.p5.tot;
    const ft37 = {
        ...fantateam_type,
        team_index: 37,
        name: "Matte",
        rione: { ...WEST },
        p1: { ...GiacomoSilvestri },
        p2: { ...MarcoSerrao },
        p3: { ...LucaGemo },
        p4: { ...FilippoSappa },
        p5: { ...LarryTrevisan },
    };
    ft37.total_cost = ft37.p1.cost + ft37.p2.cost + ft37.p3.cost + ft37.p4.cost + ft37.p5.cost;
    ft37.tot_g1 = ft37.p1.g1 + ft37.p2.g1 + ft37.p3.g1 + ft37.p4.g1 + ft37.p5.g1;
    ft37.tot_g2 = ft37.p1.g2 + ft37.p2.g2 + ft37.p3.g2 + ft37.p4.g2 + ft37.p5.g2;
    ft37.tot_g3 = ft37.p1.g3 + ft37.p2.g3 + ft37.p3.g3 + ft37.p4.g3 + ft37.p5.g3;
    ft37.tot_semi = ft37.p1.semi + ft37.p2.semi + ft37.p3.semi + ft37.p4.semi + ft37.p5.semi;
    ft37.tot_td3 = ft37.p1.td3 + ft37.p2.td3 + ft37.p3.td3 + ft37.p4.td3 + ft37.p5.td3;
    ft37.tot_final = ft37.p1.final + ft37.p2.final + ft37.p3.final + ft37.p4.final + ft37.p5.final;
    ft37.tot_team = ft37.p1.tot + ft37.p2.tot + ft37.p3.tot + ft37.p4.tot + ft37.p5.tot;
    const ft38 = {
        ...fantateam_type,
        team_index: 38,
        name: "Unavoltaerofortealchiosco!",
        rione: { ...WEST },
        p1: { ...UmbertoNobile },
        p2: { ...MarcoSerrao },
        p3: { ...AlessandroRizzi },
        p4: { ...GiacomoPiacentini },
        p5: { ...MassimilianoRossi },
    };
    ft38.total_cost = ft38.p1.cost + ft38.p2.cost + ft38.p3.cost + ft38.p4.cost + ft38.p5.cost;
    ft38.tot_g1 = ft38.p1.g1 + ft38.p2.g1 + ft38.p3.g1 + ft38.p4.g1 + ft38.p5.g1;
    ft38.tot_g2 = ft38.p1.g2 + ft38.p2.g2 + ft38.p3.g2 + ft38.p4.g2 + ft38.p5.g2;
    ft38.tot_g3 = ft38.p1.g3 + ft38.p2.g3 + ft38.p3.g3 + ft38.p4.g3 + ft38.p5.g3;
    ft38.tot_semi = ft38.p1.semi + ft38.p2.semi + ft38.p3.semi + ft38.p4.semi + ft38.p5.semi;
    ft38.tot_td3 = ft38.p1.td3 + ft38.p2.td3 + ft38.p3.td3 + ft38.p4.td3 + ft38.p5.td3;
    ft38.tot_final = ft38.p1.final + ft38.p2.final + ft38.p3.final + ft38.p4.final + ft38.p5.final;
    ft38.tot_team = ft38.p1.tot + ft38.p2.tot + ft38.p3.tot + ft38.p4.tot + ft38.p5.tot;
    const ft39 = {
        ...fantateam_type,
        team_index: 39,
        name: "Samu Masotti",
        rione: { ...EST },
        p1: { ...DevinChiarcos },
        p2: { ...AlessandroCostantini },
        p3: { ...VittorioBasso },
        p4: { ...FilippoPasquon },
        p5: { ...DavideBroggi },
    };
    ft39.total_cost = ft39.p1.cost + ft39.p2.cost + ft39.p3.cost + ft39.p4.cost + ft39.p5.cost;
    ft39.tot_g1 = ft39.p1.g1 + ft39.p2.g1 + ft39.p3.g1 + ft39.p4.g1 + ft39.p5.g1;
    ft39.tot_g2 = ft39.p1.g2 + ft39.p2.g2 + ft39.p3.g2 + ft39.p4.g2 + ft39.p5.g2;
    ft39.tot_g3 = ft39.p1.g3 + ft39.p2.g3 + ft39.p3.g3 + ft39.p4.g3 + ft39.p5.g3;
    ft39.tot_semi = ft39.p1.semi + ft39.p2.semi + ft39.p3.semi + ft39.p4.semi + ft39.p5.semi;
    ft39.tot_td3 = ft39.p1.td3 + ft39.p2.td3 + ft39.p3.td3 + ft39.p4.td3 + ft39.p5.td3;
    ft39.tot_final = ft39.p1.final + ft39.p2.final + ft39.p3.final + ft39.p4.final + ft39.p5.final;
    ft39.tot_team = ft39.p1.tot + ft39.p2.tot + ft39.p3.tot + ft39.p4.tot + ft39.p5.tot;
    const ft40 = {
        ...fantateam_type,
        team_index: 40,
        name: "Machico",
        rione: { ...NORD },
        p1: { ...AndreaMoretti },
        p2: { ...MassimilianoMoretti },
        p3: { ...GiovanniTonizzo },
        p4: { ...LucaAnedda },
        p5: { ...PietroSoramel },
    };
    ft40.total_cost = ft40.p1.cost + ft40.p2.cost + ft40.p3.cost + ft40.p4.cost + ft40.p5.cost;
    ft40.tot_g1 = ft40.p1.g1 + ft40.p2.g1 + ft40.p3.g1 + ft40.p4.g1 + ft40.p5.g1;
    ft40.tot_g2 = ft40.p1.g2 + ft40.p2.g2 + ft40.p3.g2 + ft40.p4.g2 + ft40.p5.g2;
    ft40.tot_g3 = ft40.p1.g3 + ft40.p2.g3 + ft40.p3.g3 + ft40.p4.g3 + ft40.p5.g3;
    ft40.tot_semi = ft40.p1.semi + ft40.p2.semi + ft40.p3.semi + ft40.p4.semi + ft40.p5.semi;
    ft40.tot_td3 = ft40.p1.td3 + ft40.p2.td3 + ft40.p3.td3 + ft40.p4.td3 + ft40.p5.td3;
    ft40.tot_final = ft40.p1.final + ft40.p2.final + ft40.p3.final + ft40.p4.final + ft40.p5.final;
    ft40.tot_team = ft40.p1.tot + ft40.p2.tot + ft40.p3.tot + ft40.p4.tot + ft40.p5.tot;
    const ft41 = {
        ...fantateam_type,
        team_index: 41,
        name: "Alto Moro",
        rione: { ...SUD },
        p1: { ...ChristianZanet },
        p2: { ...MicheleDeAnna },
        p3: { ...UmbertoNobile },
        p4: { ...FilippoPasquon },
        p5: { ...MattiaMasotti },
    };
    ft41.total_cost = ft41.p1.cost + ft41.p2.cost + ft41.p3.cost + ft41.p4.cost + ft41.p5.cost;
    ft41.tot_g1 = ft41.p1.g1 + ft41.p2.g1 + ft41.p3.g1 + ft41.p4.g1 + ft41.p5.g1;
    ft41.tot_g2 = ft41.p1.g2 + ft41.p2.g2 + ft41.p3.g2 + ft41.p4.g2 + ft41.p5.g2;
    ft41.tot_g3 = ft41.p1.g3 + ft41.p2.g3 + ft41.p3.g3 + ft41.p4.g3 + ft41.p5.g3;
    ft41.tot_semi = ft41.p1.semi + ft41.p2.semi + ft41.p3.semi + ft41.p4.semi + ft41.p5.semi;
    ft41.tot_td3 = ft41.p1.td3 + ft41.p2.td3 + ft41.p3.td3 + ft41.p4.td3 + ft41.p5.td3;
    ft41.tot_final = ft41.p1.final + ft41.p2.final + ft41.p3.final + ft41.p4.final + ft41.p5.final;
    ft41.tot_team = ft41.p1.tot + ft41.p2.tot + ft41.p3.tot + ft41.p4.tot + ft41.p5.tot;
    const ft42 = {
        ...fantateam_type,
        team_index: 42,
        name: "Fittofatto BC",
        rione: { ...NORD },
        p1: { ...FilippoPasquon },
        p2: { ...MassimilianoMoretti },
        p3: { ...PietroSoramel },
        p4: { ...MattiaRoiatti },
        p5: { ...LucaAnedda },
    };
    ft42.total_cost = ft42.p1.cost + ft42.p2.cost + ft42.p3.cost + ft42.p4.cost + ft42.p5.cost;
    ft42.tot_g1 = ft42.p1.g1 + ft42.p2.g1 + ft42.p3.g1 + ft42.p4.g1 + ft42.p5.g1;
    ft42.tot_g2 = ft42.p1.g2 + ft42.p2.g2 + ft42.p3.g2 + ft42.p4.g2 + ft42.p5.g2;
    ft42.tot_g3 = ft42.p1.g3 + ft42.p2.g3 + ft42.p3.g3 + ft42.p4.g3 + ft42.p5.g3;
    ft42.tot_semi = ft42.p1.semi + ft42.p2.semi + ft42.p3.semi + ft42.p4.semi + ft42.p5.semi;
    ft42.tot_td3 = ft42.p1.td3 + ft42.p2.td3 + ft42.p3.td3 + ft42.p4.td3 + ft42.p5.td3;
    ft42.tot_final = ft42.p1.final + ft42.p2.final + ft42.p3.final + ft42.p4.final + ft42.p5.final;
    ft42.tot_team = ft42.p1.tot + ft42.p2.tot + ft42.p3.tot + ft42.p4.tot + ft42.p5.tot;
    const ft43 = {
        ...fantateam_type,
        team_index: 43,
        name: "Caspinixx",
        rione: { ...SUD },
        p1: { ...MarcoRizzi },
        p2: { ...MassimilianoMoretti },
        p3: { ...AndreaMoretti },
        p4: { ...LucaSoramel },
        p5: { ...PietroSoramel },
    };
    ft43.total_cost = ft43.p1.cost + ft43.p2.cost + ft43.p3.cost + ft43.p4.cost + ft43.p5.cost;
    ft43.tot_g1 = ft43.p1.g1 + ft43.p2.g1 + ft43.p3.g1 + ft43.p4.g1 + ft43.p5.g1;
    ft43.tot_g2 = ft43.p1.g2 + ft43.p2.g2 + ft43.p3.g2 + ft43.p4.g2 + ft43.p5.g2;
    ft43.tot_g3 = ft43.p1.g3 + ft43.p2.g3 + ft43.p3.g3 + ft43.p4.g3 + ft43.p5.g3;
    ft43.tot_semi = ft43.p1.semi + ft43.p2.semi + ft43.p3.semi + ft43.p4.semi + ft43.p5.semi;
    ft43.tot_td3 = ft43.p1.td3 + ft43.p2.td3 + ft43.p3.td3 + ft43.p4.td3 + ft43.p5.td3;
    ft43.tot_final = ft43.p1.final + ft43.p2.final + ft43.p3.final + ft43.p4.final + ft43.p5.final;
    ft43.tot_team = ft43.p1.tot + ft43.p2.tot + ft43.p3.tot + ft43.p4.tot + ft43.p5.tot;
    const ft44 = {
        ...fantateam_type,
        team_index: 44,
        name: "Enea",
        rione: { ...NORD },
        p1: { ...GabrieleMiani },
        p2: { ...GiacomoFerigo },
        p3: { ...DevinChiarcos },
        p4: { ...VittorioBasso },
        p5: { ...AntonioGri },
    };
    ft44.total_cost = ft44.p1.cost + ft44.p2.cost + ft44.p3.cost + ft44.p4.cost + ft44.p5.cost;
    ft44.tot_g1 = ft44.p1.g1 + ft44.p2.g1 + ft44.p3.g1 + ft44.p4.g1 + ft44.p5.g1;
    ft44.tot_g2 = ft44.p1.g2 + ft44.p2.g2 + ft44.p3.g2 + ft44.p4.g2 + ft44.p5.g2;
    ft44.tot_g3 = ft44.p1.g3 + ft44.p2.g3 + ft44.p3.g3 + ft44.p4.g3 + ft44.p5.g3;
    ft44.tot_semi = ft44.p1.semi + ft44.p2.semi + ft44.p3.semi + ft44.p4.semi + ft44.p5.semi;
    ft44.tot_td3 = ft44.p1.td3 + ft44.p2.td3 + ft44.p3.td3 + ft44.p4.td3 + ft44.p5.td3;
    ft44.tot_final = ft44.p1.final + ft44.p2.final + ft44.p3.final + ft44.p4.final + ft44.p5.final;
    ft44.tot_team = ft44.p1.tot + ft44.p2.tot + ft44.p3.tot + ft44.p4.tot + ft44.p5.tot;
    const ft45 = {
        ...fantateam_type,
        team_index: 45,
        name: "TheFinalCut95",
        rione: { ...WEST },
        p1: { ...AlessandroSant },
        p2: { ...LucaSoramel },
        p3: { ...DanieleGanzit },
        p4: { ...UmbertoNobile },
        p5: { ...EnricoSant },
    };
    ft45.total_cost = ft45.p1.cost + ft45.p2.cost + ft45.p3.cost + ft45.p4.cost + ft45.p5.cost;
    ft45.tot_g1 = ft45.p1.g1 + ft45.p2.g1 + ft45.p3.g1 + ft45.p4.g1 + ft45.p5.g1;
    ft45.tot_g2 = ft45.p1.g2 + ft45.p2.g2 + ft45.p3.g2 + ft45.p4.g2 + ft45.p5.g2;
    ft45.tot_g3 = ft45.p1.g3 + ft45.p2.g3 + ft45.p3.g3 + ft45.p4.g3 + ft45.p5.g3;
    ft45.tot_semi = ft45.p1.semi + ft45.p2.semi + ft45.p3.semi + ft45.p4.semi + ft45.p5.semi;
    ft45.tot_td3 = ft45.p1.td3 + ft45.p2.td3 + ft45.p3.td3 + ft45.p4.td3 + ft45.p5.td3;
    ft45.tot_final = ft45.p1.final + ft45.p2.final + ft45.p3.final + ft45.p4.final + ft45.p5.final;
    ft45.tot_team = ft45.p1.tot + ft45.p2.tot + ft45.p3.tot + ft45.p4.tot + ft45.p5.tot;
    const ft46 = {
        ...fantateam_type,
        team_index: 46,
        name: "SEBA CENGA",
        rione: { ...WEST },
        p1: { ...LucaDellaLonga },
        p2: { ...DiegoNata },
        p3: { ...AndreaMoretti },
        p4: { ...UmbertoNobile },
        p5: { ...DavideFaurlin },
    };
    ft46.total_cost = ft46.p1.cost + ft46.p2.cost + ft46.p3.cost + ft46.p4.cost + ft46.p5.cost;
    ft46.tot_g1 = ft46.p1.g1 + ft46.p2.g1 + ft46.p3.g1 + ft46.p4.g1 + ft46.p5.g1;
    ft46.tot_g2 = ft46.p1.g2 + ft46.p2.g2 + ft46.p3.g2 + ft46.p4.g2 + ft46.p5.g2;
    ft46.tot_g3 = ft46.p1.g3 + ft46.p2.g3 + ft46.p3.g3 + ft46.p4.g3 + ft46.p5.g3;
    ft46.tot_semi = ft46.p1.semi + ft46.p2.semi + ft46.p3.semi + ft46.p4.semi + ft46.p5.semi;
    ft46.tot_td3 = ft46.p1.td3 + ft46.p2.td3 + ft46.p3.td3 + ft46.p4.td3 + ft46.p5.td3;
    ft46.tot_final = ft46.p1.final + ft46.p2.final + ft46.p3.final + ft46.p4.final + ft46.p5.final;
    ft46.tot_team = ft46.p1.tot + ft46.p2.tot + ft46.p3.tot + ft46.p4.tot + ft46.p5.tot;
    const ft47 = {
        ...fantateam_type,
        team_index: 47,
        name: "Carichi",
        rione: { ...NORD },
        p1: { ...MiracleObichukwu },
        p2: { ...AlessandroCostantini },
        p3: { ...MatteoMargarit },
        p4: { ...GiacomoPiacentini },
        p5: { ...ChristianZanet },
    };
    ft47.total_cost = ft47.p1.cost + ft47.p2.cost + ft47.p3.cost + ft47.p4.cost + ft47.p5.cost;
    ft47.tot_g1 = ft47.p1.g1 + ft47.p2.g1 + ft47.p3.g1 + ft47.p4.g1 + ft47.p5.g1;
    ft47.tot_g2 = ft47.p1.g2 + ft47.p2.g2 + ft47.p3.g2 + ft47.p4.g2 + ft47.p5.g2;
    ft47.tot_g3 = ft47.p1.g3 + ft47.p2.g3 + ft47.p3.g3 + ft47.p4.g3 + ft47.p5.g3;
    ft47.tot_semi = ft47.p1.semi + ft47.p2.semi + ft47.p3.semi + ft47.p4.semi + ft47.p5.semi;
    ft47.tot_td3 = ft47.p1.td3 + ft47.p2.td3 + ft47.p3.td3 + ft47.p4.td3 + ft47.p5.td3;
    ft47.tot_final = ft47.p1.final + ft47.p2.final + ft47.p3.final + ft47.p4.final + ft47.p5.final;
    ft47.tot_team = ft47.p1.tot + ft47.p2.tot + ft47.p3.tot + ft47.p4.tot + ft47.p5.tot;
    const ft48 = {
        ...fantateam_type,
        team_index: 48,
        name: "TheFinalCut95!",
        rione: { ...WEST },
        p1: { ...AlessandroSant },
        p2: { ...LucaSoramel },
        p3: { ...DanieleGanzit },
        p4: { ...UmbertoNobile },
        p5: { ...EnricoSant },
    };
    ft48.total_cost = ft48.p1.cost + ft48.p2.cost + ft48.p3.cost + ft48.p4.cost + ft48.p5.cost;
    ft48.tot_g1 = ft48.p1.g1 + ft48.p2.g1 + ft48.p3.g1 + ft48.p4.g1 + ft48.p5.g1;
    ft48.tot_g2 = ft48.p1.g2 + ft48.p2.g2 + ft48.p3.g2 + ft48.p4.g2 + ft48.p5.g2;
    ft48.tot_g3 = ft48.p1.g3 + ft48.p2.g3 + ft48.p3.g3 + ft48.p4.g3 + ft48.p5.g3;
    ft48.tot_semi = ft48.p1.semi + ft48.p2.semi + ft48.p3.semi + ft48.p4.semi + ft48.p5.semi;
    ft48.tot_td3 = ft48.p1.td3 + ft48.p2.td3 + ft48.p3.td3 + ft48.p4.td3 + ft48.p5.td3;
    ft48.tot_final = ft48.p1.final + ft48.p2.final + ft48.p3.final + ft48.p4.final + ft48.p5.final;
    ft48.tot_team = ft48.p1.tot + ft48.p2.tot + ft48.p3.tot + ft48.p4.tot + ft48.p5.tot;
    const ft49 = {
        ...fantateam_type,
        team_index: 49,
        name: "I Penny's Five",
        rione: { ...SUD },
        p1: { ...MassimilianoRossi },
        p2: { ...AlessandroRizzi },
        p3: { ...TommasoMartello },
        p4: { ...UmbertoNobile },
        p5: { ...GiovanniTonizzo },
    };
    ft49.total_cost = ft49.p1.cost + ft49.p2.cost + ft49.p3.cost + ft49.p4.cost + ft49.p5.cost;
    ft49.tot_g1 = ft49.p1.g1 + ft49.p2.g1 + ft49.p3.g1 + ft49.p4.g1 + ft49.p5.g1;
    ft49.tot_g2 = ft49.p1.g2 + ft49.p2.g2 + ft49.p3.g2 + ft49.p4.g2 + ft49.p5.g2;
    ft49.tot_g3 = ft49.p1.g3 + ft49.p2.g3 + ft49.p3.g3 + ft49.p4.g3 + ft49.p5.g3;
    ft49.tot_semi = ft49.p1.semi + ft49.p2.semi + ft49.p3.semi + ft49.p4.semi + ft49.p5.semi;
    ft49.tot_td3 = ft49.p1.td3 + ft49.p2.td3 + ft49.p3.td3 + ft49.p4.td3 + ft49.p5.td3;
    ft49.tot_final = ft49.p1.final + ft49.p2.final + ft49.p3.final + ft49.p4.final + ft49.p5.final;
    ft49.tot_team = ft49.p1.tot + ft49.p2.tot + ft49.p3.tot + ft49.p4.tot + ft49.p5.tot;
    const ft50 = {
        ...fantateam_type,
        team_index: 50,
        name: "Bmax",
        rione: { ...EST },
        p1: { ...EnricoSant },
        p2: { ...MattiaMasotti },
        p3: { ...UmbertoNobile },
        p4: { ...FilippoPasquon },
        p5: { ...MarcoLombardo },
    };
    ft50.total_cost = ft50.p1.cost + ft50.p2.cost + ft50.p3.cost + ft50.p4.cost + ft50.p5.cost;
    ft50.tot_g1 = ft50.p1.g1 + ft50.p2.g1 + ft50.p3.g1 + ft50.p4.g1 + ft50.p5.g1;
    ft50.tot_g2 = ft50.p1.g2 + ft50.p2.g2 + ft50.p3.g2 + ft50.p4.g2 + ft50.p5.g2;
    ft50.tot_g3 = ft50.p1.g3 + ft50.p2.g3 + ft50.p3.g3 + ft50.p4.g3 + ft50.p5.g3;
    ft50.tot_semi = ft50.p1.semi + ft50.p2.semi + ft50.p3.semi + ft50.p4.semi + ft50.p5.semi;
    ft50.tot_td3 = ft50.p1.td3 + ft50.p2.td3 + ft50.p3.td3 + ft50.p4.td3 + ft50.p5.td3;
    ft50.tot_final = ft50.p1.final + ft50.p2.final + ft50.p3.final + ft50.p4.final + ft50.p5.final;
    ft50.tot_team = ft50.p1.tot + ft50.p2.tot + ft50.p3.tot + ft50.p4.tot + ft50.p5.tot;
    const ft51 = {
        ...fantateam_type,
        team_index: 51,
        name: "Gli Sbronzatissimi",
        rione: { ...NORD },
        p1: { ...GiovanniTonizzo },
        p2: { ...UmbertoNobile },
        p3: { ...AlessandroRizzi },
        p4: { ...MarcoLombardo },
        p5: { ...MattiaRoiatti },
    };
    ft51.total_cost = ft51.p1.cost + ft51.p2.cost + ft51.p3.cost + ft51.p4.cost + ft51.p5.cost;
    ft51.tot_g1 = ft51.p1.g1 + ft51.p2.g1 + ft51.p3.g1 + ft51.p4.g1 + ft51.p5.g1;
    ft51.tot_g2 = ft51.p1.g2 + ft51.p2.g2 + ft51.p3.g2 + ft51.p4.g2 + ft51.p5.g2;
    ft51.tot_g3 = ft51.p1.g3 + ft51.p2.g3 + ft51.p3.g3 + ft51.p4.g3 + ft51.p5.g3;
    ft51.tot_semi = ft51.p1.semi + ft51.p2.semi + ft51.p3.semi + ft51.p4.semi + ft51.p5.semi;
    ft51.tot_td3 = ft51.p1.td3 + ft51.p2.td3 + ft51.p3.td3 + ft51.p4.td3 + ft51.p5.td3;
    ft51.tot_final = ft51.p1.final + ft51.p2.final + ft51.p3.final + ft51.p4.final + ft51.p5.final;
    ft51.tot_team = ft51.p1.tot + ft51.p2.tot + ft51.p3.tot + ft51.p4.tot + ft51.p5.tot;
    const ft52 = {
        ...fantateam_type,
        team_index: 52,
        name: "I belli",
        rione: { ...NORD },
        p1: { ...LucaAnedda },
        p2: { ...AlessandroRizzi },
        p3: { ...PietroSoramel },
        p4: { ...GiovanniTonizzo },
        p5: { ...AlessandroCostantini },
    };
    ft52.total_cost = ft52.p1.cost + ft52.p2.cost + ft52.p3.cost + ft52.p4.cost + ft52.p5.cost;
    ft52.tot_g1 = ft52.p1.g1 + ft52.p2.g1 + ft52.p3.g1 + ft52.p4.g1 + ft52.p5.g1;
    ft52.tot_g2 = ft52.p1.g2 + ft52.p2.g2 + ft52.p3.g2 + ft52.p4.g2 + ft52.p5.g2;
    ft52.tot_g3 = ft52.p1.g3 + ft52.p2.g3 + ft52.p3.g3 + ft52.p4.g3 + ft52.p5.g3;
    ft52.tot_semi = ft52.p1.semi + ft52.p2.semi + ft52.p3.semi + ft52.p4.semi + ft52.p5.semi;
    ft52.tot_td3 = ft52.p1.td3 + ft52.p2.td3 + ft52.p3.td3 + ft52.p4.td3 + ft52.p5.td3;
    ft52.tot_final = ft52.p1.final + ft52.p2.final + ft52.p3.final + ft52.p4.final + ft52.p5.final;
    ft52.tot_team = ft52.p1.tot + ft52.p2.tot + ft52.p3.tot + ft52.p4.tot + ft52.p5.tot;
    const ft53 = {
        ...fantateam_type,
        team_index: 53,
        name: "Golden shower",
        rione: { ...WEST },
        p1: { ...MattiaMasotti },
        p2: { ...AlessandroRizzi },
        p3: { ...MatteoMargarit },
        p4: { ...PietroSoramel },
        p5: { ...MattiaRoiatti },
    };
    ft53.total_cost = ft53.p1.cost + ft53.p2.cost + ft53.p3.cost + ft53.p4.cost + ft53.p5.cost;
    ft53.tot_g1 = ft53.p1.g1 + ft53.p2.g1 + ft53.p3.g1 + ft53.p4.g1 + ft53.p5.g1;
    ft53.tot_g2 = ft53.p1.g2 + ft53.p2.g2 + ft53.p3.g2 + ft53.p4.g2 + ft53.p5.g2;
    ft53.tot_g3 = ft53.p1.g3 + ft53.p2.g3 + ft53.p3.g3 + ft53.p4.g3 + ft53.p5.g3;
    ft53.tot_semi = ft53.p1.semi + ft53.p2.semi + ft53.p3.semi + ft53.p4.semi + ft53.p5.semi;
    ft53.tot_td3 = ft53.p1.td3 + ft53.p2.td3 + ft53.p3.td3 + ft53.p4.td3 + ft53.p5.td3;
    ft53.tot_final = ft53.p1.final + ft53.p2.final + ft53.p3.final + ft53.p4.final + ft53.p5.final;
    ft53.tot_team = ft53.p1.tot + ft53.p2.tot + ft53.p3.tot + ft53.p4.tot + ft53.p5.tot;
    const ft54 = {
        ...fantateam_type,
        team_index: 54,
        name: "DOZERS CONFEDERATI",
        rione: { ...SUD },
        p1: { ...AlessandroSant },
        p2: { ...AlessioFurlan },
        p3: { ...AlessandroRizzi },
        p4: { ...PietroSoramel },
        p5: { ...LucaSoramel },
    };
    ft54.total_cost = ft54.p1.cost + ft54.p2.cost + ft54.p3.cost + ft54.p4.cost + ft54.p5.cost;
    ft54.tot_g1 = ft54.p1.g1 + ft54.p2.g1 + ft54.p3.g1 + ft54.p4.g1 + ft54.p5.g1;
    ft54.tot_g2 = ft54.p1.g2 + ft54.p2.g2 + ft54.p3.g2 + ft54.p4.g2 + ft54.p5.g2;
    ft54.tot_g3 = ft54.p1.g3 + ft54.p2.g3 + ft54.p3.g3 + ft54.p4.g3 + ft54.p5.g3;
    ft54.tot_semi = ft54.p1.semi + ft54.p2.semi + ft54.p3.semi + ft54.p4.semi + ft54.p5.semi;
    ft54.tot_td3 = ft54.p1.td3 + ft54.p2.td3 + ft54.p3.td3 + ft54.p4.td3 + ft54.p5.td3;
    ft54.tot_final = ft54.p1.final + ft54.p2.final + ft54.p3.final + ft54.p4.final + ft54.p5.final;
    ft54.tot_team = ft54.p1.tot + ft54.p2.tot + ft54.p3.tot + ft54.p4.tot + ft54.p5.tot;
    const ft55 = {
        ...fantateam_type,
        team_index: 55,
        name: "Appalla",
        rione: { ...WEST },
        p1: { ...VittorioBasso },
        p2: { ...LucaDellaLonga },
        p3: { ...AlessandroSant },
        p4: { ...FilippoSappa },
        p5: { ...MattiaMasotti },
    };
    ft55.total_cost = ft55.p1.cost + ft55.p2.cost + ft55.p3.cost + ft55.p4.cost + ft55.p5.cost;
    ft55.tot_g1 = ft55.p1.g1 + ft55.p2.g1 + ft55.p3.g1 + ft55.p4.g1 + ft55.p5.g1;
    ft55.tot_g2 = ft55.p1.g2 + ft55.p2.g2 + ft55.p3.g2 + ft55.p4.g2 + ft55.p5.g2;
    ft55.tot_g3 = ft55.p1.g3 + ft55.p2.g3 + ft55.p3.g3 + ft55.p4.g3 + ft55.p5.g3;
    ft55.tot_semi = ft55.p1.semi + ft55.p2.semi + ft55.p3.semi + ft55.p4.semi + ft55.p5.semi;
    ft55.tot_td3 = ft55.p1.td3 + ft55.p2.td3 + ft55.p3.td3 + ft55.p4.td3 + ft55.p5.td3;
    ft55.tot_final = ft55.p1.final + ft55.p2.final + ft55.p3.final + ft55.p4.final + ft55.p5.final;
    ft55.tot_team = ft55.p1.tot + ft55.p2.tot + ft55.p3.tot + ft55.p4.tot + ft55.p5.tot;
    const ft56 = {
        ...fantateam_type,
        team_index: 56,
        name: "I pupetti",
        rione: { ...EST },
        p1: { ...LucaSoramel },
        p2: { ...AlessandroRizzi },
        p3: { ...AlessandroCostantini },
        p4: { ...VittorioGri },
        p5: { ...PietroSoramel },
    };
    ft56.total_cost = ft56.p1.cost + ft56.p2.cost + ft56.p3.cost + ft56.p4.cost + ft56.p5.cost;
    ft56.tot_g1 = ft56.p1.g1 + ft56.p2.g1 + ft56.p3.g1 + ft56.p4.g1 + ft56.p5.g1;
    ft56.tot_g2 = ft56.p1.g2 + ft56.p2.g2 + ft56.p3.g2 + ft56.p4.g2 + ft56.p5.g2;
    ft56.tot_g3 = ft56.p1.g3 + ft56.p2.g3 + ft56.p3.g3 + ft56.p4.g3 + ft56.p5.g3;
    ft56.tot_semi = ft56.p1.semi + ft56.p2.semi + ft56.p3.semi + ft56.p4.semi + ft56.p5.semi;
    ft56.tot_td3 = ft56.p1.td3 + ft56.p2.td3 + ft56.p3.td3 + ft56.p4.td3 + ft56.p5.td3;
    ft56.tot_final = ft56.p1.final + ft56.p2.final + ft56.p3.final + ft56.p4.final + ft56.p5.final;
    ft56.tot_team = ft56.p1.tot + ft56.p2.tot + ft56.p3.tot + ft56.p4.tot + ft56.p5.tot;
    const ft57 = {
        ...fantateam_type,
        team_index: 57,
        name: "The best",
        rione: { ...WEST },
        p1: { ...GiacomoFerigo },
        p2: { ...VittorioBasso },
        p3: { ...GiovanniDalFarra },
        p4: { ...TommasoMartello },
        p5: { ...MassimilianoMoretti },
    };
    ft57.total_cost = ft57.p1.cost + ft57.p2.cost + ft57.p3.cost + ft57.p4.cost + ft57.p5.cost;
    ft57.tot_g1 = ft57.p1.g1 + ft57.p2.g1 + ft57.p3.g1 + ft57.p4.g1 + ft57.p5.g1;
    ft57.tot_g2 = ft57.p1.g2 + ft57.p2.g2 + ft57.p3.g2 + ft57.p4.g2 + ft57.p5.g2;
    ft57.tot_g3 = ft57.p1.g3 + ft57.p2.g3 + ft57.p3.g3 + ft57.p4.g3 + ft57.p5.g3;
    ft57.tot_semi = ft57.p1.semi + ft57.p2.semi + ft57.p3.semi + ft57.p4.semi + ft57.p5.semi;
    ft57.tot_td3 = ft57.p1.td3 + ft57.p2.td3 + ft57.p3.td3 + ft57.p4.td3 + ft57.p5.td3;
    ft57.tot_final = ft57.p1.final + ft57.p2.final + ft57.p3.final + ft57.p4.final + ft57.p5.final;
    ft57.tot_team = ft57.p1.tot + ft57.p2.tot + ft57.p3.tot + ft57.p4.tot + ft57.p5.tot;
    const ft58 = {
        ...fantateam_type,
        team_index: 58,
        name: "Betta Zul",
        rione: { ...EST },
        p1: { ...MattiaMasotti },
        p2: { ...LucaDellaLonga },
        p3: { ...MarcoSerrao },
        p4: { ...FilippoSappa },
        p5: { ...EnricoSant },
    };
    ft58.total_cost = ft58.p1.cost + ft58.p2.cost + ft58.p3.cost + ft58.p4.cost + ft58.p5.cost;
    ft58.tot_g1 = ft58.p1.g1 + ft58.p2.g1 + ft58.p3.g1 + ft58.p4.g1 + ft58.p5.g1;
    ft58.tot_g2 = ft58.p1.g2 + ft58.p2.g2 + ft58.p3.g2 + ft58.p4.g2 + ft58.p5.g2;
    ft58.tot_g3 = ft58.p1.g3 + ft58.p2.g3 + ft58.p3.g3 + ft58.p4.g3 + ft58.p5.g3;
    ft58.tot_semi = ft58.p1.semi + ft58.p2.semi + ft58.p3.semi + ft58.p4.semi + ft58.p5.semi;
    ft58.tot_td3 = ft58.p1.td3 + ft58.p2.td3 + ft58.p3.td3 + ft58.p4.td3 + ft58.p5.td3;
    ft58.tot_final = ft58.p1.final + ft58.p2.final + ft58.p3.final + ft58.p4.final + ft58.p5.final;
    ft58.tot_team = ft58.p1.tot + ft58.p2.tot + ft58.p3.tot + ft58.p4.tot + ft58.p5.tot;
    const ft59 = {
        ...fantateam_type,
        team_index: 59,
        name: "Fil🥷",
        rione: { ...EST },
        p1: { ...ThomasBaracetti },
        p2: { ...ValentinoCigainero },
        p3: { ...MassimilianoMoretti },
        p4: { ...LarryTrevisan },
        p5: { ...AlexMicottis },
    };
    ft59.total_cost = ft59.p1.cost + ft59.p2.cost + ft59.p3.cost + ft59.p4.cost + ft59.p5.cost;
    ft59.tot_g1 = ft59.p1.g1 + ft59.p2.g1 + ft59.p3.g1 + ft59.p4.g1 + ft59.p5.g1;
    ft59.tot_g2 = ft59.p1.g2 + ft59.p2.g2 + ft59.p3.g2 + ft59.p4.g2 + ft59.p5.g2;
    ft59.tot_g3 = ft59.p1.g3 + ft59.p2.g3 + ft59.p3.g3 + ft59.p4.g3 + ft59.p5.g3;
    ft59.tot_semi = ft59.p1.semi + ft59.p2.semi + ft59.p3.semi + ft59.p4.semi + ft59.p5.semi;
    ft59.tot_td3 = ft59.p1.td3 + ft59.p2.td3 + ft59.p3.td3 + ft59.p4.td3 + ft59.p5.td3;
    ft59.tot_final = ft59.p1.final + ft59.p2.final + ft59.p3.final + ft59.p4.final + ft59.p5.final;
    ft59.tot_team = ft59.p1.tot + ft59.p2.tot + ft59.p3.tot + ft59.p4.tot + ft59.p5.tot;
    const ft60 = {
        ...fantateam_type,
        team_index: 60,
        name: "i Bolliti",
        rione: { ...SUD },
        p1: { ...LarryTrevisan },
        p2: { ...AlessandroCostantini },
        p3: { ...DavidGaspardo },
        p4: { ...MatteoSpagnolo },
        p5: { ...AlessandroSantin },
    };
    ft60.total_cost = ft60.p1.cost + ft60.p2.cost + ft60.p3.cost + ft60.p4.cost + ft60.p5.cost;
    ft60.tot_g1 = ft60.p1.g1 + ft60.p2.g1 + ft60.p3.g1 + ft60.p4.g1 + ft60.p5.g1;
    ft60.tot_g2 = ft60.p1.g2 + ft60.p2.g2 + ft60.p3.g2 + ft60.p4.g2 + ft60.p5.g2;
    ft60.tot_g3 = ft60.p1.g3 + ft60.p2.g3 + ft60.p3.g3 + ft60.p4.g3 + ft60.p5.g3;
    ft60.tot_semi = ft60.p1.semi + ft60.p2.semi + ft60.p3.semi + ft60.p4.semi + ft60.p5.semi;
    ft60.tot_td3 = ft60.p1.td3 + ft60.p2.td3 + ft60.p3.td3 + ft60.p4.td3 + ft60.p5.td3;
    ft60.tot_final = ft60.p1.final + ft60.p2.final + ft60.p3.final + ft60.p4.final + ft60.p5.final;
    ft60.tot_team = ft60.p1.tot + ft60.p2.tot + ft60.p3.tot + ft60.p4.tot + ft60.p5.tot;
    const ft61 = {
        ...fantateam_type,
        team_index: 61,
        name: "CT",
        rione: { ...NORD },
        p1: { ...PietroSoramel },
        p2: { ...GiovanniZanin },
        p3: { ...TommasoMartello },
        p4: { ...EnricoSant },
        p5: { ...AntonioGri },
    };
    ft61.total_cost = ft61.p1.cost + ft61.p2.cost + ft61.p3.cost + ft61.p4.cost + ft61.p5.cost;
    ft61.tot_g1 = ft61.p1.g1 + ft61.p2.g1 + ft61.p3.g1 + ft61.p4.g1 + ft61.p5.g1;
    ft61.tot_g2 = ft61.p1.g2 + ft61.p2.g2 + ft61.p3.g2 + ft61.p4.g2 + ft61.p5.g2;
    ft61.tot_g3 = ft61.p1.g3 + ft61.p2.g3 + ft61.p3.g3 + ft61.p4.g3 + ft61.p5.g3;
    ft61.tot_semi = ft61.p1.semi + ft61.p2.semi + ft61.p3.semi + ft61.p4.semi + ft61.p5.semi;
    ft61.tot_td3 = ft61.p1.td3 + ft61.p2.td3 + ft61.p3.td3 + ft61.p4.td3 + ft61.p5.td3;
    ft61.tot_final = ft61.p1.final + ft61.p2.final + ft61.p3.final + ft61.p4.final + ft61.p5.final;
    ft61.tot_team = ft61.p1.tot + ft61.p2.tot + ft61.p3.tot + ft61.p4.tot + ft61.p5.tot;
    const ft62 = {
        ...fantateam_type,
        team_index: 62,
        name: "I miracoli",
        rione: { ...WEST },
        p1: { ...AlessandroSant },
        p2: { ...AlessandroRizzi },
        p3: { ...GiacomoPiacentini },
        p4: { ...MattiaMasotti },
        p5: { ...DevinChiarcos },
    };
    ft62.total_cost = ft62.p1.cost + ft62.p2.cost + ft62.p3.cost + ft62.p4.cost + ft62.p5.cost;
    ft62.tot_g1 = ft62.p1.g1 + ft62.p2.g1 + ft62.p3.g1 + ft62.p4.g1 + ft62.p5.g1;
    ft62.tot_g2 = ft62.p1.g2 + ft62.p2.g2 + ft62.p3.g2 + ft62.p4.g2 + ft62.p5.g2;
    ft62.tot_g3 = ft62.p1.g3 + ft62.p2.g3 + ft62.p3.g3 + ft62.p4.g3 + ft62.p5.g3;
    ft62.tot_semi = ft62.p1.semi + ft62.p2.semi + ft62.p3.semi + ft62.p4.semi + ft62.p5.semi;
    ft62.tot_td3 = ft62.p1.td3 + ft62.p2.td3 + ft62.p3.td3 + ft62.p4.td3 + ft62.p5.td3;
    ft62.tot_final = ft62.p1.final + ft62.p2.final + ft62.p3.final + ft62.p4.final + ft62.p5.final;
    ft62.tot_team = ft62.p1.tot + ft62.p2.tot + ft62.p3.tot + ft62.p4.tot + ft62.p5.tot;
    const ft63 = {
        ...fantateam_type,
        team_index: 63,
        name: "Dr Tanzimat",
        rione: { ...SUD },
        p1: { ...GiovanniZanin },
        p2: { ...LucaSoramel },
        p3: { ...PietroSoramel },
        p4: { ...GiovanniTonizzo },
        p5: { ...VittorioGri },
    };
    ft63.total_cost = ft63.p1.cost + ft63.p2.cost + ft63.p3.cost + ft63.p4.cost + ft63.p5.cost;
    ft63.tot_g1 = ft63.p1.g1 + ft63.p2.g1 + ft63.p3.g1 + ft63.p4.g1 + ft63.p5.g1;
    ft63.tot_g2 = ft63.p1.g2 + ft63.p2.g2 + ft63.p3.g2 + ft63.p4.g2 + ft63.p5.g2;
    ft63.tot_g3 = ft63.p1.g3 + ft63.p2.g3 + ft63.p3.g3 + ft63.p4.g3 + ft63.p5.g3;
    ft63.tot_semi = ft63.p1.semi + ft63.p2.semi + ft63.p3.semi + ft63.p4.semi + ft63.p5.semi;
    ft63.tot_td3 = ft63.p1.td3 + ft63.p2.td3 + ft63.p3.td3 + ft63.p4.td3 + ft63.p5.td3;
    ft63.tot_final = ft63.p1.final + ft63.p2.final + ft63.p3.final + ft63.p4.final + ft63.p5.final;
    ft63.tot_team = ft63.p1.tot + ft63.p2.tot + ft63.p3.tot + ft63.p4.tot + ft63.p5.tot;
    const ft64 = {
        ...fantateam_type,
        team_index: 64,
        name: "Vichingo72",
        rione: { ...NORD },
        p1: { ...LucaAnedda },
        p2: { ...MassimilianoMoretti },
        p3: { ...AlessandroCostantini },
        p4: { ...MauroPerina },
        p5: { ...MattiaRoiatti },
    };
    ft64.total_cost = ft64.p1.cost + ft64.p2.cost + ft64.p3.cost + ft64.p4.cost + ft64.p5.cost;
    ft64.tot_g1 = ft64.p1.g1 + ft64.p2.g1 + ft64.p3.g1 + ft64.p4.g1 + ft64.p5.g1;
    ft64.tot_g2 = ft64.p1.g2 + ft64.p2.g2 + ft64.p3.g2 + ft64.p4.g2 + ft64.p5.g2;
    ft64.tot_g3 = ft64.p1.g3 + ft64.p2.g3 + ft64.p3.g3 + ft64.p4.g3 + ft64.p5.g3;
    ft64.tot_semi = ft64.p1.semi + ft64.p2.semi + ft64.p3.semi + ft64.p4.semi + ft64.p5.semi;
    ft64.tot_td3 = ft64.p1.td3 + ft64.p2.td3 + ft64.p3.td3 + ft64.p4.td3 + ft64.p5.td3;
    ft64.tot_final = ft64.p1.final + ft64.p2.final + ft64.p3.final + ft64.p4.final + ft64.p5.final;
    ft64.tot_team = ft64.p1.tot + ft64.p2.tot + ft64.p3.tot + ft64.p4.tot + ft64.p5.tot;
    const ft65 = {
        ...fantateam_type,
        team_index: 65,
        name: "ivan",
        rione: { ...NORD },
        p1: { ...FilippoPasquon },
        p2: { ...MiracleObichukwu },
        p3: { ...AlessandroGalassi },
        p4: { ...PietroSoramel },
        p5: { ...AlessandroRizzi },
    };
    ft65.total_cost = ft65.p1.cost + ft65.p2.cost + ft65.p3.cost + ft65.p4.cost + ft65.p5.cost;
    ft65.tot_g1 = ft65.p1.g1 + ft65.p2.g1 + ft65.p3.g1 + ft65.p4.g1 + ft65.p5.g1;
    ft65.tot_g2 = ft65.p1.g2 + ft65.p2.g2 + ft65.p3.g2 + ft65.p4.g2 + ft65.p5.g2;
    ft65.tot_g3 = ft65.p1.g3 + ft65.p2.g3 + ft65.p3.g3 + ft65.p4.g3 + ft65.p5.g3;
    ft65.tot_semi = ft65.p1.semi + ft65.p2.semi + ft65.p3.semi + ft65.p4.semi + ft65.p5.semi;
    ft65.tot_td3 = ft65.p1.td3 + ft65.p2.td3 + ft65.p3.td3 + ft65.p4.td3 + ft65.p5.td3;
    ft65.tot_final = ft65.p1.final + ft65.p2.final + ft65.p3.final + ft65.p4.final + ft65.p5.final;
    ft65.tot_team = ft65.p1.tot + ft65.p2.tot + ft65.p3.tot + ft65.p4.tot + ft65.p5.tot;
    const ft66 = {
        ...fantateam_type,
        team_index: 66,
        name: "Dusty Bottoms",
        rione: { ...WEST },
        p1: { ...GiacomoPiacentini },
        p2: { ...AlessandroCostantini },
        p3: { ...LarryTrevisan },
        p4: { ...MicheleDeAnna },
        p5: { ...ChristianZanet },
    };
    ft66.total_cost = ft66.p1.cost + ft66.p2.cost + ft66.p3.cost + ft66.p4.cost + ft66.p5.cost;
    ft66.tot_g1 = ft66.p1.g1 + ft66.p2.g1 + ft66.p3.g1 + ft66.p4.g1 + ft66.p5.g1;
    ft66.tot_g2 = ft66.p1.g2 + ft66.p2.g2 + ft66.p3.g2 + ft66.p4.g2 + ft66.p5.g2;
    ft66.tot_g3 = ft66.p1.g3 + ft66.p2.g3 + ft66.p3.g3 + ft66.p4.g3 + ft66.p5.g3;
    ft66.tot_semi = ft66.p1.semi + ft66.p2.semi + ft66.p3.semi + ft66.p4.semi + ft66.p5.semi;
    ft66.tot_td3 = ft66.p1.td3 + ft66.p2.td3 + ft66.p3.td3 + ft66.p4.td3 + ft66.p5.td3;
    ft66.tot_final = ft66.p1.final + ft66.p2.final + ft66.p3.final + ft66.p4.final + ft66.p5.final;
    ft66.tot_team = ft66.p1.tot + ft66.p2.tot + ft66.p3.tot + ft66.p4.tot + ft66.p5.tot;
    const ft67 = {
        ...fantateam_type,
        team_index: 67,
        name: "Spagnolo sposami",
        rione: { ...SUD },
        p1: { ...SebastianoTonizzo },
        p2: { ...MatteoSpagnolo },
        p3: { ...MatteoMargarit },
        p4: { ...DavideParon },
        p5: { ...MichaelMargarit },
    };
    ft67.total_cost = ft67.p1.cost + ft67.p2.cost + ft67.p3.cost + ft67.p4.cost + ft67.p5.cost;
    ft67.tot_g1 = ft67.p1.g1 + ft67.p2.g1 + ft67.p3.g1 + ft67.p4.g1 + ft67.p5.g1;
    ft67.tot_g2 = ft67.p1.g2 + ft67.p2.g2 + ft67.p3.g2 + ft67.p4.g2 + ft67.p5.g2;
    ft67.tot_g3 = ft67.p1.g3 + ft67.p2.g3 + ft67.p3.g3 + ft67.p4.g3 + ft67.p5.g3;
    ft67.tot_semi = ft67.p1.semi + ft67.p2.semi + ft67.p3.semi + ft67.p4.semi + ft67.p5.semi;
    ft67.tot_td3 = ft67.p1.td3 + ft67.p2.td3 + ft67.p3.td3 + ft67.p4.td3 + ft67.p5.td3;
    ft67.tot_final = ft67.p1.final + ft67.p2.final + ft67.p3.final + ft67.p4.final + ft67.p5.final;
    ft67.tot_team = ft67.p1.tot + ft67.p2.tot + ft67.p3.tot + ft67.p4.tot + ft67.p5.tot;
    const ft68 = {
        ...fantateam_type,
        team_index: 68,
        name: "Franta Palio",
        rione: { ...NORD },
        p1: { ...FilippoSappa },
        p2: { ...AlessandroRojatti },
        p3: { ...AlessandroRizzi },
        p4: { ...TommasoMartello },
        p5: { ...GiovanniTonizzo },
    };
    ft68.total_cost = ft68.p1.cost + ft68.p2.cost + ft68.p3.cost + ft68.p4.cost + ft68.p5.cost;
    ft68.tot_g1 = ft68.p1.g1 + ft68.p2.g1 + ft68.p3.g1 + ft68.p4.g1 + ft68.p5.g1;
    ft68.tot_g2 = ft68.p1.g2 + ft68.p2.g2 + ft68.p3.g2 + ft68.p4.g2 + ft68.p5.g2;
    ft68.tot_g3 = ft68.p1.g3 + ft68.p2.g3 + ft68.p3.g3 + ft68.p4.g3 + ft68.p5.g3;
    ft68.tot_semi = ft68.p1.semi + ft68.p2.semi + ft68.p3.semi + ft68.p4.semi + ft68.p5.semi;
    ft68.tot_td3 = ft68.p1.td3 + ft68.p2.td3 + ft68.p3.td3 + ft68.p4.td3 + ft68.p5.td3;
    ft68.tot_final = ft68.p1.final + ft68.p2.final + ft68.p3.final + ft68.p4.final + ft68.p5.final;
    ft68.tot_team = ft68.p1.tot + ft68.p2.tot + ft68.p3.tot + ft68.p4.tot + ft68.p5.tot;
    const ft69 = {
        ...fantateam_type,
        team_index: 69,
        name: "Nani del sud",
        rione: { ...SUD },
        p1: { ...FilippoAgnoluzzi },
        p2: { ...FilippoSappa },
        p3: { ...LucaAnedda },
        p4: { ...GiacomoSilvestri },
        p5: { ...DavidGaspardo },
    };
    ft69.total_cost = ft69.p1.cost + ft69.p2.cost + ft69.p3.cost + ft69.p4.cost + ft69.p5.cost;
    ft69.tot_g1 = ft69.p1.g1 + ft69.p2.g1 + ft69.p3.g1 + ft69.p4.g1 + ft69.p5.g1;
    ft69.tot_g2 = ft69.p1.g2 + ft69.p2.g2 + ft69.p3.g2 + ft69.p4.g2 + ft69.p5.g2;
    ft69.tot_g3 = ft69.p1.g3 + ft69.p2.g3 + ft69.p3.g3 + ft69.p4.g3 + ft69.p5.g3;
    ft69.tot_semi = ft69.p1.semi + ft69.p2.semi + ft69.p3.semi + ft69.p4.semi + ft69.p5.semi;
    ft69.tot_td3 = ft69.p1.td3 + ft69.p2.td3 + ft69.p3.td3 + ft69.p4.td3 + ft69.p5.td3;
    ft69.tot_final = ft69.p1.final + ft69.p2.final + ft69.p3.final + ft69.p4.final + ft69.p5.final;
    ft69.tot_team = ft69.p1.tot + ft69.p2.tot + ft69.p3.tot + ft69.p4.tot + ft69.p5.tot;
    const ft70 = {
        ...fantateam_type,
        team_index: 70,
        name: "Penelope's Team",
        rione: { ...SUD },
        p1: { ...GiovanniTonizzo },
        p2: { ...AlessandroSant },
        p3: { ...MarcoPolo },
        p4: { ...LucaSoramel },
        p5: { ...FilippoSappa },
    };
    ft70.total_cost = ft70.p1.cost + ft70.p2.cost + ft70.p3.cost + ft70.p4.cost + ft70.p5.cost;
    ft70.tot_g1 = ft70.p1.g1 + ft70.p2.g1 + ft70.p3.g1 + ft70.p4.g1 + ft70.p5.g1;
    ft70.tot_g2 = ft70.p1.g2 + ft70.p2.g2 + ft70.p3.g2 + ft70.p4.g2 + ft70.p5.g2;
    ft70.tot_g3 = ft70.p1.g3 + ft70.p2.g3 + ft70.p3.g3 + ft70.p4.g3 + ft70.p5.g3;
    ft70.tot_semi = ft70.p1.semi + ft70.p2.semi + ft70.p3.semi + ft70.p4.semi + ft70.p5.semi;
    ft70.tot_td3 = ft70.p1.td3 + ft70.p2.td3 + ft70.p3.td3 + ft70.p4.td3 + ft70.p5.td3;
    ft70.tot_final = ft70.p1.final + ft70.p2.final + ft70.p3.final + ft70.p4.final + ft70.p5.final;
    ft70.tot_team = ft70.p1.tot + ft70.p2.tot + ft70.p3.tot + ft70.p4.tot + ft70.p5.tot;
    const ft71 = {
        ...fantateam_type,
        team_index: 71,
        name: "Codroipen F.C.",
        rione: { ...WEST },
        p1: { ...DavideParon },
        p2: { ...DevinChiarcos },
        p3: { ...GabrieleMiani },
        p4: { ...EdoardoPicogna },
        p5: { ...VittorioBasso },
    };
    ft71.total_cost = ft71.p1.cost + ft71.p2.cost + ft71.p3.cost + ft71.p4.cost + ft71.p5.cost;
    ft71.tot_g1 = ft71.p1.g1 + ft71.p2.g1 + ft71.p3.g1 + ft71.p4.g1 + ft71.p5.g1;
    ft71.tot_g2 = ft71.p1.g2 + ft71.p2.g2 + ft71.p3.g2 + ft71.p4.g2 + ft71.p5.g2;
    ft71.tot_g3 = ft71.p1.g3 + ft71.p2.g3 + ft71.p3.g3 + ft71.p4.g3 + ft71.p5.g3;
    ft71.tot_semi = ft71.p1.semi + ft71.p2.semi + ft71.p3.semi + ft71.p4.semi + ft71.p5.semi;
    ft71.tot_td3 = ft71.p1.td3 + ft71.p2.td3 + ft71.p3.td3 + ft71.p4.td3 + ft71.p5.td3;
    ft71.tot_final = ft71.p1.final + ft71.p2.final + ft71.p3.final + ft71.p4.final + ft71.p5.final;
    ft71.tot_team = ft71.p1.tot + ft71.p2.tot + ft71.p3.tot + ft71.p4.tot + ft71.p5.tot;
    const ft72 = {
        ...fantateam_type,
        team_index: 72,
        name: "west solos",
        rione: { ...WEST },
        p1: { ...MassimoMasotti },
        p2: { ...MassimilianoMoretti },
        p3: { ...GiacomoPiacentini },
        p4: { ...MiracleObichukwu },
        p5: { ...EnricoSant },
    };
    ft72.total_cost = ft72.p1.cost + ft72.p2.cost + ft72.p3.cost + ft72.p4.cost + ft72.p5.cost;
    ft72.tot_g1 = ft72.p1.g1 + ft72.p2.g1 + ft72.p3.g1 + ft72.p4.g1 + ft72.p5.g1;
    ft72.tot_g2 = ft72.p1.g2 + ft72.p2.g2 + ft72.p3.g2 + ft72.p4.g2 + ft72.p5.g2;
    ft72.tot_g3 = ft72.p1.g3 + ft72.p2.g3 + ft72.p3.g3 + ft72.p4.g3 + ft72.p5.g3;
    ft72.tot_semi = ft72.p1.semi + ft72.p2.semi + ft72.p3.semi + ft72.p4.semi + ft72.p5.semi;
    ft72.tot_td3 = ft72.p1.td3 + ft72.p2.td3 + ft72.p3.td3 + ft72.p4.td3 + ft72.p5.td3;
    ft72.tot_final = ft72.p1.final + ft72.p2.final + ft72.p3.final + ft72.p4.final + ft72.p5.final;
    ft72.tot_team = ft72.p1.tot + ft72.p2.tot + ft72.p3.tot + ft72.p4.tot + ft72.p5.tot;
    const ft73 = {
        ...fantateam_type,
        team_index: 73,
        name: "Sud",
        rione: { ...SUD },
        p1: { ...GiacomoPiacentini },
        p2: { ...DevinChiarcos },
        p3: { ...VittorioBasso },
        p4: { ...EdoardoPicogna },
        p5: { ...DavidGaspardo },
    };
    ft73.total_cost = ft73.p1.cost + ft73.p2.cost + ft73.p3.cost + ft73.p4.cost + ft73.p5.cost;
    ft73.tot_g1 = ft73.p1.g1 + ft73.p2.g1 + ft73.p3.g1 + ft73.p4.g1 + ft73.p5.g1;
    ft73.tot_g2 = ft73.p1.g2 + ft73.p2.g2 + ft73.p3.g2 + ft73.p4.g2 + ft73.p5.g2;
    ft73.tot_g3 = ft73.p1.g3 + ft73.p2.g3 + ft73.p3.g3 + ft73.p4.g3 + ft73.p5.g3;
    ft73.tot_semi = ft73.p1.semi + ft73.p2.semi + ft73.p3.semi + ft73.p4.semi + ft73.p5.semi;
    ft73.tot_td3 = ft73.p1.td3 + ft73.p2.td3 + ft73.p3.td3 + ft73.p4.td3 + ft73.p5.td3;
    ft73.tot_final = ft73.p1.final + ft73.p2.final + ft73.p3.final + ft73.p4.final + ft73.p5.final;
    ft73.tot_team = ft73.p1.tot + ft73.p2.tot + ft73.p3.tot + ft73.p4.tot + ft73.p5.tot;
    const ft74 = {
        ...fantateam_type,
        team_index: 74,
        name: "NORDmania",
        rione: { ...NORD },
        p1: { ...GioeleTudini },
        p2: { ...MassimilianoMoretti },
        p3: { ...FilippoPasquon },
        p4: { ...MatteoSpagnolo },
        p5: { ...MattiaMasotti },
    };
    ft74.total_cost = ft74.p1.cost + ft74.p2.cost + ft74.p3.cost + ft74.p4.cost + ft74.p5.cost;
    ft74.tot_g1 = ft74.p1.g1 + ft74.p2.g1 + ft74.p3.g1 + ft74.p4.g1 + ft74.p5.g1;
    ft74.tot_g2 = ft74.p1.g2 + ft74.p2.g2 + ft74.p3.g2 + ft74.p4.g2 + ft74.p5.g2;
    ft74.tot_g3 = ft74.p1.g3 + ft74.p2.g3 + ft74.p3.g3 + ft74.p4.g3 + ft74.p5.g3;
    ft74.tot_semi = ft74.p1.semi + ft74.p2.semi + ft74.p3.semi + ft74.p4.semi + ft74.p5.semi;
    ft74.tot_td3 = ft74.p1.td3 + ft74.p2.td3 + ft74.p3.td3 + ft74.p4.td3 + ft74.p5.td3;
    ft74.tot_final = ft74.p1.final + ft74.p2.final + ft74.p3.final + ft74.p4.final + ft74.p5.final;
    ft74.tot_team = ft74.p1.tot + ft74.p2.tot + ft74.p3.tot + ft74.p4.tot + ft74.p5.tot;
    const ft75 = {
        ...fantateam_type,
        team_index: 75,
        name: "Ta qifsha pidhin",
        rione: { ...EST },
        p1: { ...GionaTell },
        p2: { ...AlessandroSantin },
        p3: { ...MassimilianoMoretti },
        p4: { ...MassimoBaldassi },
        p5: { ...LarryTrevisan },
    };
    ft75.total_cost = ft75.p1.cost + ft75.p2.cost + ft75.p3.cost + ft75.p4.cost + ft75.p5.cost;
    ft75.tot_g1 = ft75.p1.g1 + ft75.p2.g1 + ft75.p3.g1 + ft75.p4.g1 + ft75.p5.g1;
    ft75.tot_g2 = ft75.p1.g2 + ft75.p2.g2 + ft75.p3.g2 + ft75.p4.g2 + ft75.p5.g2;
    ft75.tot_g3 = ft75.p1.g3 + ft75.p2.g3 + ft75.p3.g3 + ft75.p4.g3 + ft75.p5.g3;
    ft75.tot_semi = ft75.p1.semi + ft75.p2.semi + ft75.p3.semi + ft75.p4.semi + ft75.p5.semi;
    ft75.tot_td3 = ft75.p1.td3 + ft75.p2.td3 + ft75.p3.td3 + ft75.p4.td3 + ft75.p5.td3;
    ft75.tot_final = ft75.p1.final + ft75.p2.final + ft75.p3.final + ft75.p4.final + ft75.p5.final;
    ft75.tot_team = ft75.p1.tot + ft75.p2.tot + ft75.p3.tot + ft75.p4.tot + ft75.p5.tot;
    const ft76 = {
        ...fantateam_type,
        team_index: 76,
        name: "Le bimbe di maso",
        rione: { ...EST },
        p1: { ...MassimilianoMoretti },
        p2: { ...MiracleObichukwu },
        p3: { ...DenisVanin },
        p4: { ...MassimoMasotti },
        p5: { ...MattiaMasotti },
    };
    ft76.total_cost = ft76.p1.cost + ft76.p2.cost + ft76.p3.cost + ft76.p4.cost + ft76.p5.cost;
    ft76.tot_g1 = ft76.p1.g1 + ft76.p2.g1 + ft76.p3.g1 + ft76.p4.g1 + ft76.p5.g1;
    ft76.tot_g2 = ft76.p1.g2 + ft76.p2.g2 + ft76.p3.g2 + ft76.p4.g2 + ft76.p5.g2;
    ft76.tot_g3 = ft76.p1.g3 + ft76.p2.g3 + ft76.p3.g3 + ft76.p4.g3 + ft76.p5.g3;
    ft76.tot_semi = ft76.p1.semi + ft76.p2.semi + ft76.p3.semi + ft76.p4.semi + ft76.p5.semi;
    ft76.tot_td3 = ft76.p1.td3 + ft76.p2.td3 + ft76.p3.td3 + ft76.p4.td3 + ft76.p5.td3;
    ft76.tot_final = ft76.p1.final + ft76.p2.final + ft76.p3.final + ft76.p4.final + ft76.p5.final;
    ft76.tot_team = ft76.p1.tot + ft76.p2.tot + ft76.p3.tot + ft76.p4.tot + ft76.p5.tot;
    const ft77 = {
        ...fantateam_type,
        team_index: 77,
        name: "DajeRoma",
        rione: { ...NORD },
        p1: { ...TommasoMartello },
        p2: { ...MiracleObichukwu },
        p3: { ...DanieleGanzit },
        p4: { ...MassimilianoMoretti },
        p5: { ...LucaAnedda },
    };
    ft77.total_cost = ft77.p1.cost + ft77.p2.cost + ft77.p3.cost + ft77.p4.cost + ft77.p5.cost;
    ft77.tot_g1 = ft77.p1.g1 + ft77.p2.g1 + ft77.p3.g1 + ft77.p4.g1 + ft77.p5.g1;
    ft77.tot_g2 = ft77.p1.g2 + ft77.p2.g2 + ft77.p3.g2 + ft77.p4.g2 + ft77.p5.g2;
    ft77.tot_g3 = ft77.p1.g3 + ft77.p2.g3 + ft77.p3.g3 + ft77.p4.g3 + ft77.p5.g3;
    ft77.tot_semi = ft77.p1.semi + ft77.p2.semi + ft77.p3.semi + ft77.p4.semi + ft77.p5.semi;
    ft77.tot_td3 = ft77.p1.td3 + ft77.p2.td3 + ft77.p3.td3 + ft77.p4.td3 + ft77.p5.td3;
    ft77.tot_final = ft77.p1.final + ft77.p2.final + ft77.p3.final + ft77.p4.final + ft77.p5.final;
    ft77.tot_team = ft77.p1.tot + ft77.p2.tot + ft77.p3.tot + ft77.p4.tot + ft77.p5.tot;
    const ft78 = {
        ...fantateam_type,
        team_index: 78,
        name: "👸🏼",
        rione: { ...NORD },
        p1: { ...MattiaRoiatti },
        p2: { ...MauroCuridori },
        p3: { ...DanieleGanzit },
        p4: { ...DiegoNata },
        p5: { ...MatteoMargarit },
    };
    ft78.total_cost = ft78.p1.cost + ft78.p2.cost + ft78.p3.cost + ft78.p4.cost + ft78.p5.cost;
    ft78.tot_g1 = ft78.p1.g1 + ft78.p2.g1 + ft78.p3.g1 + ft78.p4.g1 + ft78.p5.g1;
    ft78.tot_g2 = ft78.p1.g2 + ft78.p2.g2 + ft78.p3.g2 + ft78.p4.g2 + ft78.p5.g2;
    ft78.tot_g3 = ft78.p1.g3 + ft78.p2.g3 + ft78.p3.g3 + ft78.p4.g3 + ft78.p5.g3;
    ft78.tot_semi = ft78.p1.semi + ft78.p2.semi + ft78.p3.semi + ft78.p4.semi + ft78.p5.semi;
    ft78.tot_td3 = ft78.p1.td3 + ft78.p2.td3 + ft78.p3.td3 + ft78.p4.td3 + ft78.p5.td3;
    ft78.tot_final = ft78.p1.final + ft78.p2.final + ft78.p3.final + ft78.p4.final + ft78.p5.final;
    ft78.tot_team = ft78.p1.tot + ft78.p2.tot + ft78.p3.tot + ft78.p4.tot + ft78.p5.tot;
    const ft79 = {
        ...fantateam_type,
        team_index: 79,
        name: "Team17",
        rione: { ...WEST },
        p1: { ...DanieleGanzit },
        p2: { ...MassimilianoMoretti },
        p3: { ...MattiaMasotti },
        p4: { ...PaoloZorzi },
        p5: { ...MassimilianoRossi },
    };
    ft79.total_cost = ft79.p1.cost + ft79.p2.cost + ft79.p3.cost + ft79.p4.cost + ft79.p5.cost;
    ft79.tot_g1 = ft79.p1.g1 + ft79.p2.g1 + ft79.p3.g1 + ft79.p4.g1 + ft79.p5.g1;
    ft79.tot_g2 = ft79.p1.g2 + ft79.p2.g2 + ft79.p3.g2 + ft79.p4.g2 + ft79.p5.g2;
    ft79.tot_g3 = ft79.p1.g3 + ft79.p2.g3 + ft79.p3.g3 + ft79.p4.g3 + ft79.p5.g3;
    ft79.tot_semi = ft79.p1.semi + ft79.p2.semi + ft79.p3.semi + ft79.p4.semi + ft79.p5.semi;
    ft79.tot_td3 = ft79.p1.td3 + ft79.p2.td3 + ft79.p3.td3 + ft79.p4.td3 + ft79.p5.td3;
    ft79.tot_final = ft79.p1.final + ft79.p2.final + ft79.p3.final + ft79.p4.final + ft79.p5.final;
    ft79.tot_team = ft79.p1.tot + ft79.p2.tot + ft79.p3.tot + ft79.p4.tot + ft79.p5.tot;
    const ft80 = {
        ...fantateam_type,
        team_index: 80,
        name: "Trrr.... Non va!",
        rione: { ...SUD },
        p1: { ...GiovanniTonizzo },
        p2: { ...AlessandroSantin },
        p3: { ...AlessandroSant },
        p4: { ...DevinChiarcos },
        p5: { ...DiegoNata },
    };
    ft80.total_cost = ft80.p1.cost + ft80.p2.cost + ft80.p3.cost + ft80.p4.cost + ft80.p5.cost;
    ft80.tot_g1 = ft80.p1.g1 + ft80.p2.g1 + ft80.p3.g1 + ft80.p4.g1 + ft80.p5.g1;
    ft80.tot_g2 = ft80.p1.g2 + ft80.p2.g2 + ft80.p3.g2 + ft80.p4.g2 + ft80.p5.g2;
    ft80.tot_g3 = ft80.p1.g3 + ft80.p2.g3 + ft80.p3.g3 + ft80.p4.g3 + ft80.p5.g3;
    ft80.tot_semi = ft80.p1.semi + ft80.p2.semi + ft80.p3.semi + ft80.p4.semi + ft80.p5.semi;
    ft80.tot_td3 = ft80.p1.td3 + ft80.p2.td3 + ft80.p3.td3 + ft80.p4.td3 + ft80.p5.td3;
    ft80.tot_final = ft80.p1.final + ft80.p2.final + ft80.p3.final + ft80.p4.final + ft80.p5.final;
    ft80.tot_team = ft80.p1.tot + ft80.p2.tot + ft80.p3.tot + ft80.p4.tot + ft80.p5.tot;
    const ft81 = {
        ...fantateam_type,
        team_index: 81,
        name: "La Foca per una Codroipo Libera",
        rione: { ...NORD },
        p1: { ...IacopoPivetta },
        p2: { ...LarryTrevisan },
        p3: { ...MiracleObichukwu },
        p4: { ...ValentinoCigainero },
        p5: { ...MarcoPolo },
    };
    ft81.total_cost = ft81.p1.cost + ft81.p2.cost + ft81.p3.cost + ft81.p4.cost + ft81.p5.cost;
    ft81.tot_g1 = ft81.p1.g1 + ft81.p2.g1 + ft81.p3.g1 + ft81.p4.g1 + ft81.p5.g1;
    ft81.tot_g2 = ft81.p1.g2 + ft81.p2.g2 + ft81.p3.g2 + ft81.p4.g2 + ft81.p5.g2;
    ft81.tot_g3 = ft81.p1.g3 + ft81.p2.g3 + ft81.p3.g3 + ft81.p4.g3 + ft81.p5.g3;
    ft81.tot_semi = ft81.p1.semi + ft81.p2.semi + ft81.p3.semi + ft81.p4.semi + ft81.p5.semi;
    ft81.tot_td3 = ft81.p1.td3 + ft81.p2.td3 + ft81.p3.td3 + ft81.p4.td3 + ft81.p5.td3;
    ft81.tot_final = ft81.p1.final + ft81.p2.final + ft81.p3.final + ft81.p4.final + ft81.p5.final;
    ft81.tot_team = ft81.p1.tot + ft81.p2.tot + ft81.p3.tot + ft81.p4.tot + ft81.p5.tot;
    const ft82 = {
        ...fantateam_type,
        team_index: 82,
        name: "Non capisco di pallacanestro",
        rione: { ...NORD },
        p1: { ...MatteoMargarit },
        p2: { ...FilippoPasquon },
        p3: { ...LucaGemo },
        p4: { ...StefanoPolano },
        p5: { ...GiovanniZanin },
    };
    ft82.total_cost = ft82.p1.cost + ft82.p2.cost + ft82.p3.cost + ft82.p4.cost + ft82.p5.cost;
    ft82.tot_g1 = ft82.p1.g1 + ft82.p2.g1 + ft82.p3.g1 + ft82.p4.g1 + ft82.p5.g1;
    ft82.tot_g2 = ft82.p1.g2 + ft82.p2.g2 + ft82.p3.g2 + ft82.p4.g2 + ft82.p5.g2;
    ft82.tot_g3 = ft82.p1.g3 + ft82.p2.g3 + ft82.p3.g3 + ft82.p4.g3 + ft82.p5.g3;
    ft82.tot_semi = ft82.p1.semi + ft82.p2.semi + ft82.p3.semi + ft82.p4.semi + ft82.p5.semi;
    ft82.tot_td3 = ft82.p1.td3 + ft82.p2.td3 + ft82.p3.td3 + ft82.p4.td3 + ft82.p5.td3;
    ft82.tot_final = ft82.p1.final + ft82.p2.final + ft82.p3.final + ft82.p4.final + ft82.p5.final;
    ft82.tot_team = ft82.p1.tot + ft82.p2.tot + ft82.p3.tot + ft82.p4.tot + ft82.p5.tot;
    const ft83 = {
        ...fantateam_type,
        team_index: 83,
        name: "TEAM LG",
        rione: { ...NORD },
        p1: { ...LucaGemo },
        p2: { ...GiovanniZanin },
        p3: { ...MatteoMargarit },
        p4: { ...StefanoPolano },
        p5: { ...EnricoSant },
    };
    ft83.total_cost = ft83.p1.cost + ft83.p2.cost + ft83.p3.cost + ft83.p4.cost + ft83.p5.cost;
    ft83.tot_g1 = ft83.p1.g1 + ft83.p2.g1 + ft83.p3.g1 + ft83.p4.g1 + ft83.p5.g1;
    ft83.tot_g2 = ft83.p1.g2 + ft83.p2.g2 + ft83.p3.g2 + ft83.p4.g2 + ft83.p5.g2;
    ft83.tot_g3 = ft83.p1.g3 + ft83.p2.g3 + ft83.p3.g3 + ft83.p4.g3 + ft83.p5.g3;
    ft83.tot_semi = ft83.p1.semi + ft83.p2.semi + ft83.p3.semi + ft83.p4.semi + ft83.p5.semi;
    ft83.tot_td3 = ft83.p1.td3 + ft83.p2.td3 + ft83.p3.td3 + ft83.p4.td3 + ft83.p5.td3;
    ft83.tot_final = ft83.p1.final + ft83.p2.final + ft83.p3.final + ft83.p4.final + ft83.p5.final;
    ft83.tot_team = ft83.p1.tot + ft83.p2.tot + ft83.p3.tot + ft83.p4.tot + ft83.p5.tot;
    const ft84 = {
        ...fantateam_type,
        team_index: 84,
        name: "NonCapiscoNienteDiBasket",
        rione: { ...SUD },
        p1: { ...StefanoPolano },
        p2: { ...GiovanniZanin },
        p3: { ...MatteoMargarit },
        p4: { ...MassimilianoRossi },
        p5: { ...DanieleGanzit },
    };
    ft84.total_cost = ft84.p1.cost + ft84.p2.cost + ft84.p3.cost + ft84.p4.cost + ft84.p5.cost;
    ft84.tot_g1 = ft84.p1.g1 + ft84.p2.g1 + ft84.p3.g1 + ft84.p4.g1 + ft84.p5.g1;
    ft84.tot_g2 = ft84.p1.g2 + ft84.p2.g2 + ft84.p3.g2 + ft84.p4.g2 + ft84.p5.g2;
    ft84.tot_g3 = ft84.p1.g3 + ft84.p2.g3 + ft84.p3.g3 + ft84.p4.g3 + ft84.p5.g3;
    ft84.tot_semi = ft84.p1.semi + ft84.p2.semi + ft84.p3.semi + ft84.p4.semi + ft84.p5.semi;
    ft84.tot_td3 = ft84.p1.td3 + ft84.p2.td3 + ft84.p3.td3 + ft84.p4.td3 + ft84.p5.td3;
    ft84.tot_final = ft84.p1.final + ft84.p2.final + ft84.p3.final + ft84.p4.final + ft84.p5.final;
    ft84.tot_team = ft84.p1.tot + ft84.p2.tot + ft84.p3.tot + ft84.p4.tot + ft84.p5.tot;
    const ft85 = {
        ...fantateam_type,
        team_index: 85,
        name: "Nipponici",
        rione: { ...EST },
        p1: { ...AndreaMoretti },
        p2: { ...MattiaRoiatti },
        p3: { ...DiegoNata },
        p4: { ...AlessandroRizzi },
        p5: { ...PietroSoramel },
    };
    ft85.total_cost = ft85.p1.cost + ft85.p2.cost + ft85.p3.cost + ft85.p4.cost + ft85.p5.cost;
    ft85.tot_g1 = ft85.p1.g1 + ft85.p2.g1 + ft85.p3.g1 + ft85.p4.g1 + ft85.p5.g1;
    ft85.tot_g2 = ft85.p1.g2 + ft85.p2.g2 + ft85.p3.g2 + ft85.p4.g2 + ft85.p5.g2;
    ft85.tot_g3 = ft85.p1.g3 + ft85.p2.g3 + ft85.p3.g3 + ft85.p4.g3 + ft85.p5.g3;
    ft85.tot_semi = ft85.p1.semi + ft85.p2.semi + ft85.p3.semi + ft85.p4.semi + ft85.p5.semi;
    ft85.tot_td3 = ft85.p1.td3 + ft85.p2.td3 + ft85.p3.td3 + ft85.p4.td3 + ft85.p5.td3;
    ft85.tot_final = ft85.p1.final + ft85.p2.final + ft85.p3.final + ft85.p4.final + ft85.p5.final;
    ft85.tot_team = ft85.p1.tot + ft85.p2.tot + ft85.p3.tot + ft85.p4.tot + ft85.p5.tot;
    const ft86 = {
        ...fantateam_type,
        team_index: 86,
        name: "Massive Crash",
        rione: { ...EST },
        p1: { ...LucaSoramel },
        p2: { ...AlessandroSant },
        p3: { ...PietroSoramel },
        p4: { ...AlessandroRizzi },
        p5: { ...AndreaMoretti },
    };
    ft86.total_cost = ft86.p1.cost + ft86.p2.cost + ft86.p3.cost + ft86.p4.cost + ft86.p5.cost;
    ft86.tot_g1 = ft86.p1.g1 + ft86.p2.g1 + ft86.p3.g1 + ft86.p4.g1 + ft86.p5.g1;
    ft86.tot_g2 = ft86.p1.g2 + ft86.p2.g2 + ft86.p3.g2 + ft86.p4.g2 + ft86.p5.g2;
    ft86.tot_g3 = ft86.p1.g3 + ft86.p2.g3 + ft86.p3.g3 + ft86.p4.g3 + ft86.p5.g3;
    ft86.tot_semi = ft86.p1.semi + ft86.p2.semi + ft86.p3.semi + ft86.p4.semi + ft86.p5.semi;
    ft86.tot_td3 = ft86.p1.td3 + ft86.p2.td3 + ft86.p3.td3 + ft86.p4.td3 + ft86.p5.td3;
    ft86.tot_final = ft86.p1.final + ft86.p2.final + ft86.p3.final + ft86.p4.final + ft86.p5.final;
    ft86.tot_team = ft86.p1.tot + ft86.p2.tot + ft86.p3.tot + ft86.p4.tot + ft86.p5.tot;
    const ft87 = {
        ...fantateam_type,
        team_index: 87,
        name: "gigiovena",
        rione: { ...NORD },
        p1: { ...GiovanniTonizzo },
        p2: { ...PietroSoramel },
        p3: { ...AlessandroRizzi },
        p4: { ...MarcoSerrao },
        p5: { ...VittorioGri },
    };
    ft87.total_cost = ft87.p1.cost + ft87.p2.cost + ft87.p3.cost + ft87.p4.cost + ft87.p5.cost;
    ft87.tot_g1 = ft87.p1.g1 + ft87.p2.g1 + ft87.p3.g1 + ft87.p4.g1 + ft87.p5.g1;
    ft87.tot_g2 = ft87.p1.g2 + ft87.p2.g2 + ft87.p3.g2 + ft87.p4.g2 + ft87.p5.g2;
    ft87.tot_g3 = ft87.p1.g3 + ft87.p2.g3 + ft87.p3.g3 + ft87.p4.g3 + ft87.p5.g3;
    ft87.tot_semi = ft87.p1.semi + ft87.p2.semi + ft87.p3.semi + ft87.p4.semi + ft87.p5.semi;
    ft87.tot_td3 = ft87.p1.td3 + ft87.p2.td3 + ft87.p3.td3 + ft87.p4.td3 + ft87.p5.td3;
    ft87.tot_final = ft87.p1.final + ft87.p2.final + ft87.p3.final + ft87.p4.final + ft87.p5.final;
    ft87.tot_team = ft87.p1.tot + ft87.p2.tot + ft87.p3.tot + ft87.p4.tot + ft87.p5.tot;
    const ft88 = {
        ...fantateam_type,
        team_index: 88,
        name: "pausa giacomone",
        rione: { ...SUD },
        p1: { ...ChristianFedrizzi },
        p2: { ...VittorioGri },
        p3: { ...MatteoSpagnolo },
        p4: { ...PaoloZorzi },
        p5: { ...DavidGaspardo },
    };
    ft88.total_cost = ft88.p1.cost + ft88.p2.cost + ft88.p3.cost + ft88.p4.cost + ft88.p5.cost;
    ft88.tot_g1 = ft88.p1.g1 + ft88.p2.g1 + ft88.p3.g1 + ft88.p4.g1 + ft88.p5.g1;
    ft88.tot_g2 = ft88.p1.g2 + ft88.p2.g2 + ft88.p3.g2 + ft88.p4.g2 + ft88.p5.g2;
    ft88.tot_g3 = ft88.p1.g3 + ft88.p2.g3 + ft88.p3.g3 + ft88.p4.g3 + ft88.p5.g3;
    ft88.tot_semi = ft88.p1.semi + ft88.p2.semi + ft88.p3.semi + ft88.p4.semi + ft88.p5.semi;
    ft88.tot_td3 = ft88.p1.td3 + ft88.p2.td3 + ft88.p3.td3 + ft88.p4.td3 + ft88.p5.td3;
    ft88.tot_final = ft88.p1.final + ft88.p2.final + ft88.p3.final + ft88.p4.final + ft88.p5.final;
    ft88.tot_team = ft88.p1.tot + ft88.p2.tot + ft88.p3.tot + ft88.p4.tot + ft88.p5.tot;
    const ft89 = {
        ...fantateam_type,
        team_index: 89,
        name: "Michael Scott's Tots",
        rione: { ...NORD },
        p1: { ...DavidGaspardo },
        p2: { ...MiracleObichukwu },
        p3: { ...AlessioFurlan },
        p4: { ...DiegoNata },
        p5: { ...MarcoPolo },
    };
    ft89.total_cost = ft89.p1.cost + ft89.p2.cost + ft89.p3.cost + ft89.p4.cost + ft89.p5.cost;
    ft89.tot_g1 = ft89.p1.g1 + ft89.p2.g1 + ft89.p3.g1 + ft89.p4.g1 + ft89.p5.g1;
    ft89.tot_g2 = ft89.p1.g2 + ft89.p2.g2 + ft89.p3.g2 + ft89.p4.g2 + ft89.p5.g2;
    ft89.tot_g3 = ft89.p1.g3 + ft89.p2.g3 + ft89.p3.g3 + ft89.p4.g3 + ft89.p5.g3;
    ft89.tot_semi = ft89.p1.semi + ft89.p2.semi + ft89.p3.semi + ft89.p4.semi + ft89.p5.semi;
    ft89.tot_td3 = ft89.p1.td3 + ft89.p2.td3 + ft89.p3.td3 + ft89.p4.td3 + ft89.p5.td3;
    ft89.tot_final = ft89.p1.final + ft89.p2.final + ft89.p3.final + ft89.p4.final + ft89.p5.final;
    ft89.tot_team = ft89.p1.tot + ft89.p2.tot + ft89.p3.tot + ft89.p4.tot + ft89.p5.tot;
    const ft90 = {
        ...fantateam_type,
        team_index: 90,
        name: "ee4",
        rione: { ...SUD },
        p1: { ...ValentinoCigainero },
        p2: { ...MauroCuridori },
        p3: { ...MicheleDeAnna },
        p4: { ...MattiaMasotti },
        p5: { ...TommasoMartello },
    };
    ft90.total_cost = ft90.p1.cost + ft90.p2.cost + ft90.p3.cost + ft90.p4.cost + ft90.p5.cost;
    ft90.tot_g1 = ft90.p1.g1 + ft90.p2.g1 + ft90.p3.g1 + ft90.p4.g1 + ft90.p5.g1;
    ft90.tot_g2 = ft90.p1.g2 + ft90.p2.g2 + ft90.p3.g2 + ft90.p4.g2 + ft90.p5.g2;
    ft90.tot_g3 = ft90.p1.g3 + ft90.p2.g3 + ft90.p3.g3 + ft90.p4.g3 + ft90.p5.g3;
    ft90.tot_semi = ft90.p1.semi + ft90.p2.semi + ft90.p3.semi + ft90.p4.semi + ft90.p5.semi;
    ft90.tot_td3 = ft90.p1.td3 + ft90.p2.td3 + ft90.p3.td3 + ft90.p4.td3 + ft90.p5.td3;
    ft90.tot_final = ft90.p1.final + ft90.p2.final + ft90.p3.final + ft90.p4.final + ft90.p5.final;
    ft90.tot_team = ft90.p1.tot + ft90.p2.tot + ft90.p3.tot + ft90.p4.tot + ft90.p5.tot;
    const ft91 = {
        ...fantateam_type,
        team_index: 91,
        name: "Utopia (:",
        rione: { ...WEST },
        p1: { ...AndreaMoretti },
        p2: { ...AlessandroRojatti },
        p3: { ...MarcoRizzi },
        p4: { ...MassimilianoMoretti },
        p5: { ...AlessandroRizzi },
    };
    ft91.total_cost = ft91.p1.cost + ft91.p2.cost + ft91.p3.cost + ft91.p4.cost + ft91.p5.cost;
    ft91.tot_g1 = ft91.p1.g1 + ft91.p2.g1 + ft91.p3.g1 + ft91.p4.g1 + ft91.p5.g1;
    ft91.tot_g2 = ft91.p1.g2 + ft91.p2.g2 + ft91.p3.g2 + ft91.p4.g2 + ft91.p5.g2;
    ft91.tot_g3 = ft91.p1.g3 + ft91.p2.g3 + ft91.p3.g3 + ft91.p4.g3 + ft91.p5.g3;
    ft91.tot_semi = ft91.p1.semi + ft91.p2.semi + ft91.p3.semi + ft91.p4.semi + ft91.p5.semi;
    ft91.tot_td3 = ft91.p1.td3 + ft91.p2.td3 + ft91.p3.td3 + ft91.p4.td3 + ft91.p5.td3;
    ft91.tot_final = ft91.p1.final + ft91.p2.final + ft91.p3.final + ft91.p4.final + ft91.p5.final;
    ft91.tot_team = ft91.p1.tot + ft91.p2.tot + ft91.p3.tot + ft91.p4.tot + ft91.p5.tot;
    const ft92 = {
        ...fantateam_type,
        team_index: 92,
        name: "AirBall",
        rione: { ...EST },
        p1: { ...AlessandroRojatti },
        p2: { ...MassimilianoMoretti },
        p3: { ...AlessandroRizzi },
        p4: { ...AntonioGri },
        p5: { ...LucaAnedda },
    };
    ft92.total_cost = ft92.p1.cost + ft92.p2.cost + ft92.p3.cost + ft92.p4.cost + ft92.p5.cost;
    ft92.tot_g1 = ft92.p1.g1 + ft92.p2.g1 + ft92.p3.g1 + ft92.p4.g1 + ft92.p5.g1;
    ft92.tot_g2 = ft92.p1.g2 + ft92.p2.g2 + ft92.p3.g2 + ft92.p4.g2 + ft92.p5.g2;
    ft92.tot_g3 = ft92.p1.g3 + ft92.p2.g3 + ft92.p3.g3 + ft92.p4.g3 + ft92.p5.g3;
    ft92.tot_semi = ft92.p1.semi + ft92.p2.semi + ft92.p3.semi + ft92.p4.semi + ft92.p5.semi;
    ft92.tot_td3 = ft92.p1.td3 + ft92.p2.td3 + ft92.p3.td3 + ft92.p4.td3 + ft92.p5.td3;
    ft92.tot_final = ft92.p1.final + ft92.p2.final + ft92.p3.final + ft92.p4.final + ft92.p5.final;
    ft92.tot_team = ft92.p1.tot + ft92.p2.tot + ft92.p3.tot + ft92.p4.tot + ft92.p5.tot;
    const ft93 = {
        ...fantateam_type,
        team_index: 93,
        name: "Panade",
        rione: { ...NORD },
        p1: { ...AntonioGri },
        p2: { ...MassimilianoMoretti },
        p3: { ...AlessandroRizzi },
        p4: { ...AlessandroRojatti },
        p5: { ...AndreaMoretti },
    };
    ft93.total_cost = ft93.p1.cost + ft93.p2.cost + ft93.p3.cost + ft93.p4.cost + ft93.p5.cost;
    ft93.tot_g1 = ft93.p1.g1 + ft93.p2.g1 + ft93.p3.g1 + ft93.p4.g1 + ft93.p5.g1;
    ft93.tot_g2 = ft93.p1.g2 + ft93.p2.g2 + ft93.p3.g2 + ft93.p4.g2 + ft93.p5.g2;
    ft93.tot_g3 = ft93.p1.g3 + ft93.p2.g3 + ft93.p3.g3 + ft93.p4.g3 + ft93.p5.g3;
    ft93.tot_semi = ft93.p1.semi + ft93.p2.semi + ft93.p3.semi + ft93.p4.semi + ft93.p5.semi;
    ft93.tot_td3 = ft93.p1.td3 + ft93.p2.td3 + ft93.p3.td3 + ft93.p4.td3 + ft93.p5.td3;
    ft93.tot_final = ft93.p1.final + ft93.p2.final + ft93.p3.final + ft93.p4.final + ft93.p5.final;
    ft93.tot_team = ft93.p1.tot + ft93.p2.tot + ft93.p3.tot + ft93.p4.tot + ft93.p5.tot;
    const ft94 = {
        ...fantateam_type,
        team_index: 94,
        name: "DD",
        rione: { ...WEST },
        p1: { ...MassimoMasotti },
        p2: { ...MassimilianoMoretti },
        p3: { ...AlessandroRizzi },
        p4: { ...AntonioGri },
        p5: { ...MatteoBazzaro },
    };
    ft94.total_cost = ft94.p1.cost + ft94.p2.cost + ft94.p3.cost + ft94.p4.cost + ft94.p5.cost;
    ft94.tot_g1 = ft94.p1.g1 + ft94.p2.g1 + ft94.p3.g1 + ft94.p4.g1 + ft94.p5.g1;
    ft94.tot_g2 = ft94.p1.g2 + ft94.p2.g2 + ft94.p3.g2 + ft94.p4.g2 + ft94.p5.g2;
    ft94.tot_g3 = ft94.p1.g3 + ft94.p2.g3 + ft94.p3.g3 + ft94.p4.g3 + ft94.p5.g3;
    ft94.tot_semi = ft94.p1.semi + ft94.p2.semi + ft94.p3.semi + ft94.p4.semi + ft94.p5.semi;
    ft94.tot_td3 = ft94.p1.td3 + ft94.p2.td3 + ft94.p3.td3 + ft94.p4.td3 + ft94.p5.td3;
    ft94.tot_final = ft94.p1.final + ft94.p2.final + ft94.p3.final + ft94.p4.final + ft94.p5.final;
    ft94.tot_team = ft94.p1.tot + ft94.p2.tot + ft94.p3.tot + ft94.p4.tot + ft94.p5.tot;
    const ft95 = {
        ...fantateam_type,
        team_index: 95,
        name: "West4ever",
        rione: { ...WEST },
        p1: { ...LucaSoramel },
        p2: { ...MassimilianoMoretti },
        p3: { ...AndreaMoretti },
        p4: { ...EnricoSant },
        p5: { ...StefanoPolano },
    };
    ft95.total_cost = ft95.p1.cost + ft95.p2.cost + ft95.p3.cost + ft95.p4.cost + ft95.p5.cost;
    ft95.tot_g1 = ft95.p1.g1 + ft95.p2.g1 + ft95.p3.g1 + ft95.p4.g1 + ft95.p5.g1;
    ft95.tot_g2 = ft95.p1.g2 + ft95.p2.g2 + ft95.p3.g2 + ft95.p4.g2 + ft95.p5.g2;
    ft95.tot_g3 = ft95.p1.g3 + ft95.p2.g3 + ft95.p3.g3 + ft95.p4.g3 + ft95.p5.g3;
    ft95.tot_semi = ft95.p1.semi + ft95.p2.semi + ft95.p3.semi + ft95.p4.semi + ft95.p5.semi;
    ft95.tot_td3 = ft95.p1.td3 + ft95.p2.td3 + ft95.p3.td3 + ft95.p4.td3 + ft95.p5.td3;
    ft95.tot_final = ft95.p1.final + ft95.p2.final + ft95.p3.final + ft95.p4.final + ft95.p5.final;
    ft95.tot_team = ft95.p1.tot + ft95.p2.tot + ft95.p3.tot + ft95.p4.tot + ft95.p5.tot;
    const ft96 = {
        ...fantateam_type,
        team_index: 96,
        name: "Uoff",
        rione: { ...SUD },
        p1: { ...MassimilianoMoretti },
        p2: { ...MarcoRizzi },
        p3: { ...LucaAnedda },
        p4: { ...MattiaRoiatti },
        p5: { ...AlessandroRizzi },
    };
    ft96.total_cost = ft96.p1.cost + ft96.p2.cost + ft96.p3.cost + ft96.p4.cost + ft96.p5.cost;
    ft96.tot_g1 = ft96.p1.g1 + ft96.p2.g1 + ft96.p3.g1 + ft96.p4.g1 + ft96.p5.g1;
    ft96.tot_g2 = ft96.p1.g2 + ft96.p2.g2 + ft96.p3.g2 + ft96.p4.g2 + ft96.p5.g2;
    ft96.tot_g3 = ft96.p1.g3 + ft96.p2.g3 + ft96.p3.g3 + ft96.p4.g3 + ft96.p5.g3;
    ft96.tot_semi = ft96.p1.semi + ft96.p2.semi + ft96.p3.semi + ft96.p4.semi + ft96.p5.semi;
    ft96.tot_td3 = ft96.p1.td3 + ft96.p2.td3 + ft96.p3.td3 + ft96.p4.td3 + ft96.p5.td3;
    ft96.tot_final = ft96.p1.final + ft96.p2.final + ft96.p3.final + ft96.p4.final + ft96.p5.final;
    ft96.tot_team = ft96.p1.tot + ft96.p2.tot + ft96.p3.tot + ft96.p4.tot + ft96.p5.tot;
    const ft97 = {
        ...fantateam_type,
        team_index: 97,
        name: "SimoVinny",
        rione: { ...SUD },
        p1: { ...ValentinoCigainero },
        p2: { ...MassimilianoMoretti },
        p3: { ...DavideFaurlin },
        p4: { ...MattiaMasotti },
        p5: { ...MarcoRizzi },
    };
    ft97.total_cost = ft97.p1.cost + ft97.p2.cost + ft97.p3.cost + ft97.p4.cost + ft97.p5.cost;
    ft97.tot_g1 = ft97.p1.g1 + ft97.p2.g1 + ft97.p3.g1 + ft97.p4.g1 + ft97.p5.g1;
    ft97.tot_g2 = ft97.p1.g2 + ft97.p2.g2 + ft97.p3.g2 + ft97.p4.g2 + ft97.p5.g2;
    ft97.tot_g3 = ft97.p1.g3 + ft97.p2.g3 + ft97.p3.g3 + ft97.p4.g3 + ft97.p5.g3;
    ft97.tot_semi = ft97.p1.semi + ft97.p2.semi + ft97.p3.semi + ft97.p4.semi + ft97.p5.semi;
    ft97.tot_td3 = ft97.p1.td3 + ft97.p2.td3 + ft97.p3.td3 + ft97.p4.td3 + ft97.p5.td3;
    ft97.tot_final = ft97.p1.final + ft97.p2.final + ft97.p3.final + ft97.p4.final + ft97.p5.final;
    ft97.tot_team = ft97.p1.tot + ft97.p2.tot + ft97.p3.tot + ft97.p4.tot + ft97.p5.tot;
    const ft98 = {
        ...fantateam_type,
        team_index: 98,
        name: "Verità per GR",
        rione: { ...NORD },
        p1: { ...MattiaRoiatti },
        p2: { ...LucaAnedda },
        p3: { ...MassimilianoMoretti },
        p4: { ...MarcoRizzi },
        p5: { ...FilippoPasquon },
    };
    ft98.total_cost = ft98.p1.cost + ft98.p2.cost + ft98.p3.cost + ft98.p4.cost + ft98.p5.cost;
    ft98.tot_g1 = ft98.p1.g1 + ft98.p2.g1 + ft98.p3.g1 + ft98.p4.g1 + ft98.p5.g1;
    ft98.tot_g2 = ft98.p1.g2 + ft98.p2.g2 + ft98.p3.g2 + ft98.p4.g2 + ft98.p5.g2;
    ft98.tot_g3 = ft98.p1.g3 + ft98.p2.g3 + ft98.p3.g3 + ft98.p4.g3 + ft98.p5.g3;
    ft98.tot_semi = ft98.p1.semi + ft98.p2.semi + ft98.p3.semi + ft98.p4.semi + ft98.p5.semi;
    ft98.tot_td3 = ft98.p1.td3 + ft98.p2.td3 + ft98.p3.td3 + ft98.p4.td3 + ft98.p5.td3;
    ft98.tot_final = ft98.p1.final + ft98.p2.final + ft98.p3.final + ft98.p4.final + ft98.p5.final;
    ft98.tot_team = ft98.p1.tot + ft98.p2.tot + ft98.p3.tot + ft98.p4.tot + ft98.p5.tot;
    const ft99 = {
        ...fantateam_type,
        team_index: 99,
        name: "Maestro Shifu",
        rione: { ...NORD },
        p1: { ...MattiaRoiatti },
        p2: { ...MassimilianoMoretti },
        p3: { ...AlessandroRizzi },
        p4: { ...MarcoRizzi },
        p5: { ...AndreaMoretti },
    };
    ft99.total_cost = ft99.p1.cost + ft99.p2.cost + ft99.p3.cost + ft99.p4.cost + ft99.p5.cost;
    ft99.tot_g1 = ft99.p1.g1 + ft99.p2.g1 + ft99.p3.g1 + ft99.p4.g1 + ft99.p5.g1;
    ft99.tot_g2 = ft99.p1.g2 + ft99.p2.g2 + ft99.p3.g2 + ft99.p4.g2 + ft99.p5.g2;
    ft99.tot_g3 = ft99.p1.g3 + ft99.p2.g3 + ft99.p3.g3 + ft99.p4.g3 + ft99.p5.g3;
    ft99.tot_semi = ft99.p1.semi + ft99.p2.semi + ft99.p3.semi + ft99.p4.semi + ft99.p5.semi;
    ft99.tot_td3 = ft99.p1.td3 + ft99.p2.td3 + ft99.p3.td3 + ft99.p4.td3 + ft99.p5.td3;
    ft99.tot_final = ft99.p1.final + ft99.p2.final + ft99.p3.final + ft99.p4.final + ft99.p5.final;
    ft99.tot_team = ft99.p1.tot + ft99.p2.tot + ft99.p3.tot + ft99.p4.tot + ft99.p5.tot;
    const ft100 = {
        ...fantateam_type,
        team_index: 100,
        name: "A tutta birra",
        rione: { ...NORD },
        p1: { ...MarcoRizzi },
        p2: { ...LucaSoramel },
        p3: { ...EugenioDeTina },
        p4: { ...MassimilianoMoretti },
        p5: { ...EnricoSant },
    };
    ft100.total_cost = ft100.p1.cost + ft100.p2.cost + ft100.p3.cost + ft100.p4.cost + ft100.p5.cost;
    ft100.tot_g1 = ft100.p1.g1 + ft100.p2.g1 + ft100.p3.g1 + ft100.p4.g1 + ft100.p5.g1;
    ft100.tot_g2 = ft100.p1.g2 + ft100.p2.g2 + ft100.p3.g2 + ft100.p4.g2 + ft100.p5.g2;
    ft100.tot_g3 = ft100.p1.g3 + ft100.p2.g3 + ft100.p3.g3 + ft100.p4.g3 + ft100.p5.g3;
    ft100.tot_semi = ft100.p1.semi + ft100.p2.semi + ft100.p3.semi + ft100.p4.semi + ft100.p5.semi;
    ft100.tot_td3 = ft100.p1.td3 + ft100.p2.td3 + ft100.p3.td3 + ft100.p4.td3 + ft100.p5.td3;
    ft100.tot_final = ft100.p1.final + ft100.p2.final + ft100.p3.final + ft100.p4.final + ft100.p5.final;
    ft100.tot_team = ft100.p1.tot + ft100.p2.tot + ft100.p3.tot + ft100.p4.tot + ft100.p5.tot;
    const ft101 = {
        ...fantateam_type,
        team_index: 101,
        name: "Bitchass",
        rione: { ...WEST },
        p1: { ...MarcoRizzi },
        p2: { ...MassimilianoMoretti },
        p3: { ...LucaAnedda },
        p4: { ...LucaSoramel },
        p5: { ...MattiaRoiatti },
    };
    ft101.total_cost = ft101.p1.cost + ft101.p2.cost + ft101.p3.cost + ft101.p4.cost + ft101.p5.cost;
    ft101.tot_g1 = ft101.p1.g1 + ft101.p2.g1 + ft101.p3.g1 + ft101.p4.g1 + ft101.p5.g1;
    ft101.tot_g2 = ft101.p1.g2 + ft101.p2.g2 + ft101.p3.g2 + ft101.p4.g2 + ft101.p5.g2;
    ft101.tot_g3 = ft101.p1.g3 + ft101.p2.g3 + ft101.p3.g3 + ft101.p4.g3 + ft101.p5.g3;
    ft101.tot_semi = ft101.p1.semi + ft101.p2.semi + ft101.p3.semi + ft101.p4.semi + ft101.p5.semi;
    ft101.tot_td3 = ft101.p1.td3 + ft101.p2.td3 + ft101.p3.td3 + ft101.p4.td3 + ft101.p5.td3;
    ft101.tot_final = ft101.p1.final + ft101.p2.final + ft101.p3.final + ft101.p4.final + ft101.p5.final;
    ft101.tot_team = ft101.p1.tot + ft101.p2.tot + ft101.p3.tot + ft101.p4.tot + ft101.p5.tot;
    const ft102 = {
        ...fantateam_type,
        team_index: 102,
        name: "Azzzzz",
        rione: { ...EST },
        p1: { ...GiovanniTonizzo },
        p2: { ...ChristianZanet },
        p3: { ...MicheleDeAnna },
        p4: { ...MattiaRoiatti },
        p5: { ...AlessandroCostantini },
    };
    ft102.total_cost = ft102.p1.cost + ft102.p2.cost + ft102.p3.cost + ft102.p4.cost + ft102.p5.cost;
    ft102.tot_g1 = ft102.p1.g1 + ft102.p2.g1 + ft102.p3.g1 + ft102.p4.g1 + ft102.p5.g1;
    ft102.tot_g2 = ft102.p1.g2 + ft102.p2.g2 + ft102.p3.g2 + ft102.p4.g2 + ft102.p5.g2;
    ft102.tot_g3 = ft102.p1.g3 + ft102.p2.g3 + ft102.p3.g3 + ft102.p4.g3 + ft102.p5.g3;
    ft102.tot_semi = ft102.p1.semi + ft102.p2.semi + ft102.p3.semi + ft102.p4.semi + ft102.p5.semi;
    ft102.tot_td3 = ft102.p1.td3 + ft102.p2.td3 + ft102.p3.td3 + ft102.p4.td3 + ft102.p5.td3;
    ft102.tot_final = ft102.p1.final + ft102.p2.final + ft102.p3.final + ft102.p4.final + ft102.p5.final;
    ft102.tot_team = ft102.p1.tot + ft102.p2.tot + ft102.p3.tot + ft102.p4.tot + ft102.p5.tot;
    const ft103 = {
        ...fantateam_type,
        team_index: 103,
        name: "Super chicche",
        rione: { ...WEST },
        p1: { ...LucaSoramel },
        p2: { ...GiovanniTonizzo },
        p3: { ...MarcoRizzi },
        p4: { ...MassimilianoMoretti },
        p5: { ...VittorioGri },
    };
    ft103.total_cost = ft103.p1.cost + ft103.p2.cost + ft103.p3.cost + ft103.p4.cost + ft103.p5.cost;
    ft103.tot_g1 = ft103.p1.g1 + ft103.p2.g1 + ft103.p3.g1 + ft103.p4.g1 + ft103.p5.g1;
    ft103.tot_g2 = ft103.p1.g2 + ft103.p2.g2 + ft103.p3.g2 + ft103.p4.g2 + ft103.p5.g2;
    ft103.tot_g3 = ft103.p1.g3 + ft103.p2.g3 + ft103.p3.g3 + ft103.p4.g3 + ft103.p5.g3;
    ft103.tot_semi = ft103.p1.semi + ft103.p2.semi + ft103.p3.semi + ft103.p4.semi + ft103.p5.semi;
    ft103.tot_td3 = ft103.p1.td3 + ft103.p2.td3 + ft103.p3.td3 + ft103.p4.td3 + ft103.p5.td3;
    ft103.tot_final = ft103.p1.final + ft103.p2.final + ft103.p3.final + ft103.p4.final + ft103.p5.final;
    ft103.tot_team = ft103.p1.tot + ft103.p2.tot + ft103.p3.tot + ft103.p4.tot + ft103.p5.tot;
    const ft104 = {
        ...fantateam_type,
        team_index: 104,
        name: "il Fanto Padre",
        rione: { ...NORD },
        p1: { ...LucaDellaLonga },
        p2: { ...GiovanniZanin },
        p3: { ...GiovanniTonizzo },
        p4: { ...GiacomoPiacentini },
        p5: { ...MarcoLombardo },
    };
    ft104.total_cost = ft104.p1.cost + ft104.p2.cost + ft104.p3.cost + ft104.p4.cost + ft104.p5.cost;
    ft104.tot_g1 = ft104.p1.g1 + ft104.p2.g1 + ft104.p3.g1 + ft104.p4.g1 + ft104.p5.g1;
    ft104.tot_g2 = ft104.p1.g2 + ft104.p2.g2 + ft104.p3.g2 + ft104.p4.g2 + ft104.p5.g2;
    ft104.tot_g3 = ft104.p1.g3 + ft104.p2.g3 + ft104.p3.g3 + ft104.p4.g3 + ft104.p5.g3;
    ft104.tot_semi = ft104.p1.semi + ft104.p2.semi + ft104.p3.semi + ft104.p4.semi + ft104.p5.semi;
    ft104.tot_td3 = ft104.p1.td3 + ft104.p2.td3 + ft104.p3.td3 + ft104.p4.td3 + ft104.p5.td3;
    ft104.tot_final = ft104.p1.final + ft104.p2.final + ft104.p3.final + ft104.p4.final + ft104.p5.final;
    ft104.tot_team = ft104.p1.tot + ft104.p2.tot + ft104.p3.tot + ft104.p4.tot + ft104.p5.tot;
    const ft105 = {
        ...fantateam_type,
        team_index: 105,
        name: "dunk",
        rione: { ...WEST },
        p1: { ...LucaSoramel },
        p2: { ...PaoloZorzi },
        p3: { ...ChristianFedrizzi },
        p4: { ...EmanueleDaneluzzi },
        p5: { ...FilippoAgnoluzzi },
    };
    ft105.total_cost = ft105.p1.cost + ft105.p2.cost + ft105.p3.cost + ft105.p4.cost + ft105.p5.cost;
    ft105.tot_g1 = ft105.p1.g1 + ft105.p2.g1 + ft105.p3.g1 + ft105.p4.g1 + ft105.p5.g1;
    ft105.tot_g2 = ft105.p1.g2 + ft105.p2.g2 + ft105.p3.g2 + ft105.p4.g2 + ft105.p5.g2;
    ft105.tot_g3 = ft105.p1.g3 + ft105.p2.g3 + ft105.p3.g3 + ft105.p4.g3 + ft105.p5.g3;
    ft105.tot_semi = ft105.p1.semi + ft105.p2.semi + ft105.p3.semi + ft105.p4.semi + ft105.p5.semi;
    ft105.tot_td3 = ft105.p1.td3 + ft105.p2.td3 + ft105.p3.td3 + ft105.p4.td3 + ft105.p5.td3;
    ft105.tot_final = ft105.p1.final + ft105.p2.final + ft105.p3.final + ft105.p4.final + ft105.p5.final;
    ft105.tot_team = ft105.p1.tot + ft105.p2.tot + ft105.p3.tot + ft105.p4.tot + ft105.p5.tot;
    const ft106 = {
        ...fantateam_type,
        team_index: 106,
        name: "Vitellonseeee",
        rione: { ...SUD },
        p1: { ...AlessandroSantin },
        p2: { ...MattiaMasotti },
        p3: { ...AlessandroSant },
        p4: { ...GiacomoPiacentini },
        p5: { ...AlessandroCostantini },
    };
    ft106.total_cost = ft106.p1.cost + ft106.p2.cost + ft106.p3.cost + ft106.p4.cost + ft106.p5.cost;
    ft106.tot_g1 = ft106.p1.g1 + ft106.p2.g1 + ft106.p3.g1 + ft106.p4.g1 + ft106.p5.g1;
    ft106.tot_g2 = ft106.p1.g2 + ft106.p2.g2 + ft106.p3.g2 + ft106.p4.g2 + ft106.p5.g2;
    ft106.tot_g3 = ft106.p1.g3 + ft106.p2.g3 + ft106.p3.g3 + ft106.p4.g3 + ft106.p5.g3;
    ft106.tot_semi = ft106.p1.semi + ft106.p2.semi + ft106.p3.semi + ft106.p4.semi + ft106.p5.semi;
    ft106.tot_td3 = ft106.p1.td3 + ft106.p2.td3 + ft106.p3.td3 + ft106.p4.td3 + ft106.p5.td3;
    ft106.tot_final = ft106.p1.final + ft106.p2.final + ft106.p3.final + ft106.p4.final + ft106.p5.final;
    ft106.tot_team = ft106.p1.tot + ft106.p2.tot + ft106.p3.tot + ft106.p4.tot + ft106.p5.tot;
    const ft107 = {
        ...fantateam_type,
        team_index: 107,
        name: "Visca",
        rione: { ...NORD },
        p1: { ...GiacomoSilvestri },
        p2: { ...LarryTrevisan },
        p3: { ...ChristianZanet },
        p4: { ...MicheleDeAnna },
        p5: { ...AlessandroRizzi },
    };
    ft107.total_cost = ft107.p1.cost + ft107.p2.cost + ft107.p3.cost + ft107.p4.cost + ft107.p5.cost;
    ft107.tot_g1 = ft107.p1.g1 + ft107.p2.g1 + ft107.p3.g1 + ft107.p4.g1 + ft107.p5.g1;
    ft107.tot_g2 = ft107.p1.g2 + ft107.p2.g2 + ft107.p3.g2 + ft107.p4.g2 + ft107.p5.g2;
    ft107.tot_g3 = ft107.p1.g3 + ft107.p2.g3 + ft107.p3.g3 + ft107.p4.g3 + ft107.p5.g3;
    ft107.tot_semi = ft107.p1.semi + ft107.p2.semi + ft107.p3.semi + ft107.p4.semi + ft107.p5.semi;
    ft107.tot_td3 = ft107.p1.td3 + ft107.p2.td3 + ft107.p3.td3 + ft107.p4.td3 + ft107.p5.td3;
    ft107.tot_final = ft107.p1.final + ft107.p2.final + ft107.p3.final + ft107.p4.final + ft107.p5.final;
    ft107.tot_team = ft107.p1.tot + ft107.p2.tot + ft107.p3.tot + ft107.p4.tot + ft107.p5.tot;
    const ft108 = {
        ...fantateam_type,
        team_index: 108,
        name: "Ailantus",
        rione: { ...WEST },
        p1: { ...MarcoRizzi },
        p2: { ...MatteoMargarit },
        p3: { ...ChristianZanet },
        p4: { ...AlessandroRizzi },
        p5: { ...MicheleDeAnna },
    };
    ft108.total_cost = ft108.p1.cost + ft108.p2.cost + ft108.p3.cost + ft108.p4.cost + ft108.p5.cost;
    ft108.tot_g1 = ft108.p1.g1 + ft108.p2.g1 + ft108.p3.g1 + ft108.p4.g1 + ft108.p5.g1;
    ft108.tot_g2 = ft108.p1.g2 + ft108.p2.g2 + ft108.p3.g2 + ft108.p4.g2 + ft108.p5.g2;
    ft108.tot_g3 = ft108.p1.g3 + ft108.p2.g3 + ft108.p3.g3 + ft108.p4.g3 + ft108.p5.g3;
    ft108.tot_semi = ft108.p1.semi + ft108.p2.semi + ft108.p3.semi + ft108.p4.semi + ft108.p5.semi;
    ft108.tot_td3 = ft108.p1.td3 + ft108.p2.td3 + ft108.p3.td3 + ft108.p4.td3 + ft108.p5.td3;
    ft108.tot_final = ft108.p1.final + ft108.p2.final + ft108.p3.final + ft108.p4.final + ft108.p5.final;
    ft108.tot_team = ft108.p1.tot + ft108.p2.tot + ft108.p3.tot + ft108.p4.tot + ft108.p5.tot;
    const ft109 = {
        ...fantateam_type,
        team_index: 109,
        name: "Giangi",
        rione: { ...WEST },
        p1: { ...ChristianFedrizzi },
        p2: { ...GiacomoFerigo },
        p3: { ...MicheleVendrame },
        p4: { ...LorenzoSchinella },
        p5: { ...DavideBroggi },
    };
    ft109.total_cost = ft109.p1.cost + ft109.p2.cost + ft109.p3.cost + ft109.p4.cost + ft109.p5.cost;
    ft109.tot_g1 = ft109.p1.g1 + ft109.p2.g1 + ft109.p3.g1 + ft109.p4.g1 + ft109.p5.g1;
    ft109.tot_g2 = ft109.p1.g2 + ft109.p2.g2 + ft109.p3.g2 + ft109.p4.g2 + ft109.p5.g2;
    ft109.tot_g3 = ft109.p1.g3 + ft109.p2.g3 + ft109.p3.g3 + ft109.p4.g3 + ft109.p5.g3;
    ft109.tot_semi = ft109.p1.semi + ft109.p2.semi + ft109.p3.semi + ft109.p4.semi + ft109.p5.semi;
    ft109.tot_td3 = ft109.p1.td3 + ft109.p2.td3 + ft109.p3.td3 + ft109.p4.td3 + ft109.p5.td3;
    ft109.tot_final = ft109.p1.final + ft109.p2.final + ft109.p3.final + ft109.p4.final + ft109.p5.final;
    ft109.tot_team = ft109.p1.tot + ft109.p2.tot + ft109.p3.tot + ft109.p4.tot + ft109.p5.tot;
    const ft110 = {
        ...fantateam_type,
        team_index: 110,
        name: "PSYCHO P",
        rione: { ...NORD },
        p1: { ...MarcoLombardo },
        p2: { ...MarcoSerrao },
        p3: { ...FilippoPasquon },
        p4: { ...AlessandroCostantini },
        p5: { ...VittorioBasso },
    };
    ft110.total_cost = ft110.p1.cost + ft110.p2.cost + ft110.p3.cost + ft110.p4.cost + ft110.p5.cost;
    ft110.tot_g1 = ft110.p1.g1 + ft110.p2.g1 + ft110.p3.g1 + ft110.p4.g1 + ft110.p5.g1;
    ft110.tot_g2 = ft110.p1.g2 + ft110.p2.g2 + ft110.p3.g2 + ft110.p4.g2 + ft110.p5.g2;
    ft110.tot_g3 = ft110.p1.g3 + ft110.p2.g3 + ft110.p3.g3 + ft110.p4.g3 + ft110.p5.g3;
    ft110.tot_semi = ft110.p1.semi + ft110.p2.semi + ft110.p3.semi + ft110.p4.semi + ft110.p5.semi;
    ft110.tot_td3 = ft110.p1.td3 + ft110.p2.td3 + ft110.p3.td3 + ft110.p4.td3 + ft110.p5.td3;
    ft110.tot_final = ft110.p1.final + ft110.p2.final + ft110.p3.final + ft110.p4.final + ft110.p5.final;
    ft110.tot_team = ft110.p1.tot + ft110.p2.tot + ft110.p3.tot + ft110.p4.tot + ft110.p5.tot;
    const ft111 = {
        ...fantateam_type,
        team_index: 111,
        name: "fantadario",
        rione: { ...WEST },
        p1: { ...LarryTrevisan },
        p2: { ...FilippoPasquon },
        p3: { ...AlessandroSant },
        p4: { ...AlessandroGalassi },
        p5: { ...MattiaMasotti },
    };
    ft111.total_cost = ft111.p1.cost + ft111.p2.cost + ft111.p3.cost + ft111.p4.cost + ft111.p5.cost;
    ft111.tot_g1 = ft111.p1.g1 + ft111.p2.g1 + ft111.p3.g1 + ft111.p4.g1 + ft111.p5.g1;
    ft111.tot_g2 = ft111.p1.g2 + ft111.p2.g2 + ft111.p3.g2 + ft111.p4.g2 + ft111.p5.g2;
    ft111.tot_g3 = ft111.p1.g3 + ft111.p2.g3 + ft111.p3.g3 + ft111.p4.g3 + ft111.p5.g3;
    ft111.tot_semi = ft111.p1.semi + ft111.p2.semi + ft111.p3.semi + ft111.p4.semi + ft111.p5.semi;
    ft111.tot_td3 = ft111.p1.td3 + ft111.p2.td3 + ft111.p3.td3 + ft111.p4.td3 + ft111.p5.td3;
    ft111.tot_final = ft111.p1.final + ft111.p2.final + ft111.p3.final + ft111.p4.final + ft111.p5.final;
    ft111.tot_team = ft111.p1.tot + ft111.p2.tot + ft111.p3.tot + ft111.p4.tot + ft111.p5.tot;
    const ft112 = {
        ...fantateam_type,
        team_index: 112,
        name: "Leggende",
        rione: { ...NORD },
        p1: { ...LarryTrevisan },
        p2: { ...DanieleGanzit },
        p3: { ...MarcoPolo },
        p4: { ...MarcoSerrao },
        p5: { ...AlessandroSant },
    };
    ft112.total_cost = ft112.p1.cost + ft112.p2.cost + ft112.p3.cost + ft112.p4.cost + ft112.p5.cost;
    ft112.tot_g1 = ft112.p1.g1 + ft112.p2.g1 + ft112.p3.g1 + ft112.p4.g1 + ft112.p5.g1;
    ft112.tot_g2 = ft112.p1.g2 + ft112.p2.g2 + ft112.p3.g2 + ft112.p4.g2 + ft112.p5.g2;
    ft112.tot_g3 = ft112.p1.g3 + ft112.p2.g3 + ft112.p3.g3 + ft112.p4.g3 + ft112.p5.g3;
    ft112.tot_semi = ft112.p1.semi + ft112.p2.semi + ft112.p3.semi + ft112.p4.semi + ft112.p5.semi;
    ft112.tot_td3 = ft112.p1.td3 + ft112.p2.td3 + ft112.p3.td3 + ft112.p4.td3 + ft112.p5.td3;
    ft112.tot_final = ft112.p1.final + ft112.p2.final + ft112.p3.final + ft112.p4.final + ft112.p5.final;
    ft112.tot_team = ft112.p1.tot + ft112.p2.tot + ft112.p3.tot + ft112.p4.tot + ft112.p5.tot;
    const ft113 = {
        ...fantateam_type,
        team_index: 113,
        name: "Paperelle gay",
        rione: { ...EST },
        p1: { ...EnricoSant },
        p2: { ...WilliamIob },
        p3: { ...AlessandroCostantini },
        p4: { ...MarcoSerrao },
        p5: { ...DenisVanin },
    };
    ft113.total_cost = ft113.p1.cost + ft113.p2.cost + ft113.p3.cost + ft113.p4.cost + ft113.p5.cost;
    ft113.tot_g1 = ft113.p1.g1 + ft113.p2.g1 + ft113.p3.g1 + ft113.p4.g1 + ft113.p5.g1;
    ft113.tot_g2 = ft113.p1.g2 + ft113.p2.g2 + ft113.p3.g2 + ft113.p4.g2 + ft113.p5.g2;
    ft113.tot_g3 = ft113.p1.g3 + ft113.p2.g3 + ft113.p3.g3 + ft113.p4.g3 + ft113.p5.g3;
    ft113.tot_semi = ft113.p1.semi + ft113.p2.semi + ft113.p3.semi + ft113.p4.semi + ft113.p5.semi;
    ft113.tot_td3 = ft113.p1.td3 + ft113.p2.td3 + ft113.p3.td3 + ft113.p4.td3 + ft113.p5.td3;
    ft113.tot_final = ft113.p1.final + ft113.p2.final + ft113.p3.final + ft113.p4.final + ft113.p5.final;
    ft113.tot_team = ft113.p1.tot + ft113.p2.tot + ft113.p3.tot + ft113.p4.tot + ft113.p5.tot;
    const ft114 = {
        ...fantateam_type,
        team_index: 114,
        name: "CIPPI",
        rione: { ...NORD },
        p1: { ...AlessandroCostantini },
        p2: { ...VittorioGri },
        p3: { ...LucaSoramel },
        p4: { ...GionaTell },
        p5: { ...AlessandroSant },
    };
    ft114.total_cost = ft114.p1.cost + ft114.p2.cost + ft114.p3.cost + ft114.p4.cost + ft114.p5.cost;
    ft114.tot_g1 = ft114.p1.g1 + ft114.p2.g1 + ft114.p3.g1 + ft114.p4.g1 + ft114.p5.g1;
    ft114.tot_g2 = ft114.p1.g2 + ft114.p2.g2 + ft114.p3.g2 + ft114.p4.g2 + ft114.p5.g2;
    ft114.tot_g3 = ft114.p1.g3 + ft114.p2.g3 + ft114.p3.g3 + ft114.p4.g3 + ft114.p5.g3;
    ft114.tot_semi = ft114.p1.semi + ft114.p2.semi + ft114.p3.semi + ft114.p4.semi + ft114.p5.semi;
    ft114.tot_td3 = ft114.p1.td3 + ft114.p2.td3 + ft114.p3.td3 + ft114.p4.td3 + ft114.p5.td3;
    ft114.tot_final = ft114.p1.final + ft114.p2.final + ft114.p3.final + ft114.p4.final + ft114.p5.final;
    ft114.tot_team = ft114.p1.tot + ft114.p2.tot + ft114.p3.tot + ft114.p4.tot + ft114.p5.tot;
    const ft115 = {
        ...fantateam_type,
        team_index: 115,
        name: "Samu & Ema",
        rione: { ...EST },
        p1: { ...AlessandroCostantini },
        p2: { ...EnricoSant },
        p3: { ...MattiaMasotti },
        p4: { ...FilippoPasquon },
        p5: { ...AlessandroRizzi },
    };
    ft115.total_cost = ft115.p1.cost + ft115.p2.cost + ft115.p3.cost + ft115.p4.cost + ft115.p5.cost;
    ft115.tot_g1 = ft115.p1.g1 + ft115.p2.g1 + ft115.p3.g1 + ft115.p4.g1 + ft115.p5.g1;
    ft115.tot_g2 = ft115.p1.g2 + ft115.p2.g2 + ft115.p3.g2 + ft115.p4.g2 + ft115.p5.g2;
    ft115.tot_g3 = ft115.p1.g3 + ft115.p2.g3 + ft115.p3.g3 + ft115.p4.g3 + ft115.p5.g3;
    ft115.tot_semi = ft115.p1.semi + ft115.p2.semi + ft115.p3.semi + ft115.p4.semi + ft115.p5.semi;
    ft115.tot_td3 = ft115.p1.td3 + ft115.p2.td3 + ft115.p3.td3 + ft115.p4.td3 + ft115.p5.td3;
    ft115.tot_final = ft115.p1.final + ft115.p2.final + ft115.p3.final + ft115.p4.final + ft115.p5.final;
    ft115.tot_team = ft115.p1.tot + ft115.p2.tot + ft115.p3.tot + ft115.p4.tot + ft115.p5.tot;
    const ft116 = {
        ...fantateam_type,
        team_index: 116,
        name: "Robur Nazionale",
        rione: { ...WEST },
        p1: { ...AlessandroRizzi },
        p2: { ...MattiaMasotti },
        p3: { ...MarcoSerrao },
        p4: { ...MicheleDeAnna },
        p5: { ...MiracleObichukwu },
    };
    ft116.total_cost = ft116.p1.cost + ft116.p2.cost + ft116.p3.cost + ft116.p4.cost + ft116.p5.cost;
    ft116.tot_g1 = ft116.p1.g1 + ft116.p2.g1 + ft116.p3.g1 + ft116.p4.g1 + ft116.p5.g1;
    ft116.tot_g2 = ft116.p1.g2 + ft116.p2.g2 + ft116.p3.g2 + ft116.p4.g2 + ft116.p5.g2;
    ft116.tot_g3 = ft116.p1.g3 + ft116.p2.g3 + ft116.p3.g3 + ft116.p4.g3 + ft116.p5.g3;
    ft116.tot_semi = ft116.p1.semi + ft116.p2.semi + ft116.p3.semi + ft116.p4.semi + ft116.p5.semi;
    ft116.tot_td3 = ft116.p1.td3 + ft116.p2.td3 + ft116.p3.td3 + ft116.p4.td3 + ft116.p5.td3;
    ft116.tot_final = ft116.p1.final + ft116.p2.final + ft116.p3.final + ft116.p4.final + ft116.p5.final;
    ft116.tot_team = ft116.p1.tot + ft116.p2.tot + ft116.p3.tot + ft116.p4.tot + ft116.p5.tot;
    const ft117 = {
        ...fantateam_type,
        team_index: 117,
        name: "Giacomone",
        rione: { ...SUD },
        p1: { ...MatteoSpagnolo },
        p2: { ...ChristianZanet },
        p3: { ...VittorioGri },
        p4: { ...AlessandroSant },
        p5: { ...WilliamIob },
    };
    ft117.total_cost = ft117.p1.cost + ft117.p2.cost + ft117.p3.cost + ft117.p4.cost + ft117.p5.cost;
    ft117.tot_g1 = ft117.p1.g1 + ft117.p2.g1 + ft117.p3.g1 + ft117.p4.g1 + ft117.p5.g1;
    ft117.tot_g2 = ft117.p1.g2 + ft117.p2.g2 + ft117.p3.g2 + ft117.p4.g2 + ft117.p5.g2;
    ft117.tot_g3 = ft117.p1.g3 + ft117.p2.g3 + ft117.p3.g3 + ft117.p4.g3 + ft117.p5.g3;
    ft117.tot_semi = ft117.p1.semi + ft117.p2.semi + ft117.p3.semi + ft117.p4.semi + ft117.p5.semi;
    ft117.tot_td3 = ft117.p1.td3 + ft117.p2.td3 + ft117.p3.td3 + ft117.p4.td3 + ft117.p5.td3;
    ft117.tot_final = ft117.p1.final + ft117.p2.final + ft117.p3.final + ft117.p4.final + ft117.p5.final;
    ft117.tot_team = ft117.p1.tot + ft117.p2.tot + ft117.p3.tot + ft117.p4.tot + ft117.p5.tot;
    const ft118 = {
        ...fantateam_type,
        team_index: 118,
        name: "Team Canaja",
        rione: { ...NORD },
        p1: { ...MarcoLombardo },
        p2: { ...DiegoNata },
        p3: { ...DanieleGanzit },
        p4: { ...EnricoSant },
        p5: { ...AlessioFurlan },
    };
    ft118.total_cost = ft118.p1.cost + ft118.p2.cost + ft118.p3.cost + ft118.p4.cost + ft118.p5.cost;
    ft118.tot_g1 = ft118.p1.g1 + ft118.p2.g1 + ft118.p3.g1 + ft118.p4.g1 + ft118.p5.g1;
    ft118.tot_g2 = ft118.p1.g2 + ft118.p2.g2 + ft118.p3.g2 + ft118.p4.g2 + ft118.p5.g2;
    ft118.tot_g3 = ft118.p1.g3 + ft118.p2.g3 + ft118.p3.g3 + ft118.p4.g3 + ft118.p5.g3;
    ft118.tot_semi = ft118.p1.semi + ft118.p2.semi + ft118.p3.semi + ft118.p4.semi + ft118.p5.semi;
    ft118.tot_td3 = ft118.p1.td3 + ft118.p2.td3 + ft118.p3.td3 + ft118.p4.td3 + ft118.p5.td3;
    ft118.tot_final = ft118.p1.final + ft118.p2.final + ft118.p3.final + ft118.p4.final + ft118.p5.final;
    ft118.tot_team = ft118.p1.tot + ft118.p2.tot + ft118.p3.tot + ft118.p4.tot + ft118.p5.tot;
    const ft119 = {
        ...fantateam_type,
        team_index: 119,
        name: "Trrrr non va",
        rione: { ...SUD },
        p1: { ...DiegoNata },
        p2: { ...AndreaMoretti },
        p3: { ...AlessioFurlan },
        p4: { ...MarcoRizzi },
        p5: { ...DavidGaspardo },
    };
    ft119.total_cost = ft119.p1.cost + ft119.p2.cost + ft119.p3.cost + ft119.p4.cost + ft119.p5.cost;
    ft119.tot_g1 = ft119.p1.g1 + ft119.p2.g1 + ft119.p3.g1 + ft119.p4.g1 + ft119.p5.g1;
    ft119.tot_g2 = ft119.p1.g2 + ft119.p2.g2 + ft119.p3.g2 + ft119.p4.g2 + ft119.p5.g2;
    ft119.tot_g3 = ft119.p1.g3 + ft119.p2.g3 + ft119.p3.g3 + ft119.p4.g3 + ft119.p5.g3;
    ft119.tot_semi = ft119.p1.semi + ft119.p2.semi + ft119.p3.semi + ft119.p4.semi + ft119.p5.semi;
    ft119.tot_td3 = ft119.p1.td3 + ft119.p2.td3 + ft119.p3.td3 + ft119.p4.td3 + ft119.p5.td3;
    ft119.tot_final = ft119.p1.final + ft119.p2.final + ft119.p3.final + ft119.p4.final + ft119.p5.final;
    ft119.tot_team = ft119.p1.tot + ft119.p2.tot + ft119.p3.tot + ft119.p4.tot + ft119.p5.tot;
    const ft120 = {
        ...fantateam_type,
        team_index: 120,
        name: "Samu veni",
        rione: { ...SUD },
        p1: { ...MiracleObichukwu },
        p2: { ...AlessandroRizzi },
        p3: { ...DavidGaspardo },
        p4: { ...GioeleTudini },
        p5: { ...MicheleDeAnna },
    };
    ft120.total_cost = ft120.p1.cost + ft120.p2.cost + ft120.p3.cost + ft120.p4.cost + ft120.p5.cost;
    ft120.tot_g1 = ft120.p1.g1 + ft120.p2.g1 + ft120.p3.g1 + ft120.p4.g1 + ft120.p5.g1;
    ft120.tot_g2 = ft120.p1.g2 + ft120.p2.g2 + ft120.p3.g2 + ft120.p4.g2 + ft120.p5.g2;
    ft120.tot_g3 = ft120.p1.g3 + ft120.p2.g3 + ft120.p3.g3 + ft120.p4.g3 + ft120.p5.g3;
    ft120.tot_semi = ft120.p1.semi + ft120.p2.semi + ft120.p3.semi + ft120.p4.semi + ft120.p5.semi;
    ft120.tot_td3 = ft120.p1.td3 + ft120.p2.td3 + ft120.p3.td3 + ft120.p4.td3 + ft120.p5.td3;
    ft120.tot_final = ft120.p1.final + ft120.p2.final + ft120.p3.final + ft120.p4.final + ft120.p5.final;
    ft120.tot_team = ft120.p1.tot + ft120.p2.tot + ft120.p3.tot + ft120.p4.tot + ft120.p5.tot;
    const ft121 = {
        ...fantateam_type,
        team_index: 121,
        name: "Miangeles",
        rione: { ...NORD },
        p1: { ...EdoardoPicogna },
        p2: { ...FilippoPasquon },
        p3: { ...RiccardoSchinella },
        p4: { ...AlessandroSant },
        p5: { ...GiovanniZanin },
    };
    ft121.total_cost = ft121.p1.cost + ft121.p2.cost + ft121.p3.cost + ft121.p4.cost + ft121.p5.cost;
    ft121.tot_g1 = ft121.p1.g1 + ft121.p2.g1 + ft121.p3.g1 + ft121.p4.g1 + ft121.p5.g1;
    ft121.tot_g2 = ft121.p1.g2 + ft121.p2.g2 + ft121.p3.g2 + ft121.p4.g2 + ft121.p5.g2;
    ft121.tot_g3 = ft121.p1.g3 + ft121.p2.g3 + ft121.p3.g3 + ft121.p4.g3 + ft121.p5.g3;
    ft121.tot_semi = ft121.p1.semi + ft121.p2.semi + ft121.p3.semi + ft121.p4.semi + ft121.p5.semi;
    ft121.tot_td3 = ft121.p1.td3 + ft121.p2.td3 + ft121.p3.td3 + ft121.p4.td3 + ft121.p5.td3;
    ft121.tot_final = ft121.p1.final + ft121.p2.final + ft121.p3.final + ft121.p4.final + ft121.p5.final;
    ft121.tot_team = ft121.p1.tot + ft121.p2.tot + ft121.p3.tot + ft121.p4.tot + ft121.p5.tot;
    const ft122 = {
        ...fantateam_type,
        team_index: 122,
        name: "Amico di Simone Cengarle",
        rione: { ...NORD },
        p1: { ...VittorioBasso },
        p2: { ...MarcoLombardo },
        p3: { ...DavidGaspardo },
        p4: { ...MatteoBazzaro },
        p5: { ...LarryTrevisan },
    };
    ft122.total_cost = ft122.p1.cost + ft122.p2.cost + ft122.p3.cost + ft122.p4.cost + ft122.p5.cost;
    ft122.tot_g1 = ft122.p1.g1 + ft122.p2.g1 + ft122.p3.g1 + ft122.p4.g1 + ft122.p5.g1;
    ft122.tot_g2 = ft122.p1.g2 + ft122.p2.g2 + ft122.p3.g2 + ft122.p4.g2 + ft122.p5.g2;
    ft122.tot_g3 = ft122.p1.g3 + ft122.p2.g3 + ft122.p3.g3 + ft122.p4.g3 + ft122.p5.g3;
    ft122.tot_semi = ft122.p1.semi + ft122.p2.semi + ft122.p3.semi + ft122.p4.semi + ft122.p5.semi;
    ft122.tot_td3 = ft122.p1.td3 + ft122.p2.td3 + ft122.p3.td3 + ft122.p4.td3 + ft122.p5.td3;
    ft122.tot_final = ft122.p1.final + ft122.p2.final + ft122.p3.final + ft122.p4.final + ft122.p5.final;
    ft122.tot_team = ft122.p1.tot + ft122.p2.tot + ft122.p3.tot + ft122.p4.tot + ft122.p5.tot;
    const ft123 = {
        ...fantateam_type,
        team_index: 123,
        name: "Gabrindri",
        rione: { ...EST },
        p1: { ...LucaSoramel },
        p2: { ...AlessioFurlan },
        p3: { ...FilippoPasquon },
        p4: { ...DiegoNata },
        p5: { ...MattiaMasotti },
    };
    ft123.total_cost = ft123.p1.cost + ft123.p2.cost + ft123.p3.cost + ft123.p4.cost + ft123.p5.cost;
    ft123.tot_g1 = ft123.p1.g1 + ft123.p2.g1 + ft123.p3.g1 + ft123.p4.g1 + ft123.p5.g1;
    ft123.tot_g2 = ft123.p1.g2 + ft123.p2.g2 + ft123.p3.g2 + ft123.p4.g2 + ft123.p5.g2;
    ft123.tot_g3 = ft123.p1.g3 + ft123.p2.g3 + ft123.p3.g3 + ft123.p4.g3 + ft123.p5.g3;
    ft123.tot_semi = ft123.p1.semi + ft123.p2.semi + ft123.p3.semi + ft123.p4.semi + ft123.p5.semi;
    ft123.tot_td3 = ft123.p1.td3 + ft123.p2.td3 + ft123.p3.td3 + ft123.p4.td3 + ft123.p5.td3;
    ft123.tot_final = ft123.p1.final + ft123.p2.final + ft123.p3.final + ft123.p4.final + ft123.p5.final;
    ft123.tot_team = ft123.p1.tot + ft123.p2.tot + ft123.p3.tot + ft123.p4.tot + ft123.p5.tot;
    const ft124 = {
        ...fantateam_type,
        team_index: 124,
        name: "Olimpia Armadi",
        rione: { ...WEST },
        p1: { ...MiracleObichukwu },
        p2: { ...MarcoSerrao },
        p3: { ...AlessandroSant },
        p4: { ...MauroPerina },
        p5: { ...AlessandroRizzi },
    };
    ft124.total_cost = ft124.p1.cost + ft124.p2.cost + ft124.p3.cost + ft124.p4.cost + ft124.p5.cost;
    ft124.tot_g1 = ft124.p1.g1 + ft124.p2.g1 + ft124.p3.g1 + ft124.p4.g1 + ft124.p5.g1;
    ft124.tot_g2 = ft124.p1.g2 + ft124.p2.g2 + ft124.p3.g2 + ft124.p4.g2 + ft124.p5.g2;
    ft124.tot_g3 = ft124.p1.g3 + ft124.p2.g3 + ft124.p3.g3 + ft124.p4.g3 + ft124.p5.g3;
    ft124.tot_semi = ft124.p1.semi + ft124.p2.semi + ft124.p3.semi + ft124.p4.semi + ft124.p5.semi;
    ft124.tot_td3 = ft124.p1.td3 + ft124.p2.td3 + ft124.p3.td3 + ft124.p4.td3 + ft124.p5.td3;
    ft124.tot_final = ft124.p1.final + ft124.p2.final + ft124.p3.final + ft124.p4.final + ft124.p5.final;
    ft124.tot_team = ft124.p1.tot + ft124.p2.tot + ft124.p3.tot + ft124.p4.tot + ft124.p5.tot;
    const ft125 = {
        ...fantateam_type,
        team_index: 125,
        name: "PAMPA MENTALITY",
        rione: { ...SUD },
        p1: { ...FilippoPasquon },
        p2: { ...MattiaMasotti },
        p3: { ...ChristianZanet },
        p4: { ...MiracleObichukwu },
        p5: { ...DiegoNata },
    };
    ft125.total_cost = ft125.p1.cost + ft125.p2.cost + ft125.p3.cost + ft125.p4.cost + ft125.p5.cost;
    ft125.tot_g1 = ft125.p1.g1 + ft125.p2.g1 + ft125.p3.g1 + ft125.p4.g1 + ft125.p5.g1;
    ft125.tot_g2 = ft125.p1.g2 + ft125.p2.g2 + ft125.p3.g2 + ft125.p4.g2 + ft125.p5.g2;
    ft125.tot_g3 = ft125.p1.g3 + ft125.p2.g3 + ft125.p3.g3 + ft125.p4.g3 + ft125.p5.g3;
    ft125.tot_semi = ft125.p1.semi + ft125.p2.semi + ft125.p3.semi + ft125.p4.semi + ft125.p5.semi;
    ft125.tot_td3 = ft125.p1.td3 + ft125.p2.td3 + ft125.p3.td3 + ft125.p4.td3 + ft125.p5.td3;
    ft125.tot_final = ft125.p1.final + ft125.p2.final + ft125.p3.final + ft125.p4.final + ft125.p5.final;
    ft125.tot_team = ft125.p1.tot + ft125.p2.tot + ft125.p3.tot + ft125.p4.tot + ft125.p5.tot;
    const ft126 = {
        ...fantateam_type,
        team_index: 126,
        name: "Axeliathepoliceofficer",
        rione: { ...EST },
        p1: { ...MatteoBazzaro },
        p2: { ...MiracleObichukwu },
        p3: { ...MarcoRizzi },
        p4: { ...MarcoPolo },
        p5: { ...LucaAnedda },
    };
    ft126.total_cost = ft126.p1.cost + ft126.p2.cost + ft126.p3.cost + ft126.p4.cost + ft126.p5.cost;
    ft126.tot_g1 = ft126.p1.g1 + ft126.p2.g1 + ft126.p3.g1 + ft126.p4.g1 + ft126.p5.g1;
    ft126.tot_g2 = ft126.p1.g2 + ft126.p2.g2 + ft126.p3.g2 + ft126.p4.g2 + ft126.p5.g2;
    ft126.tot_g3 = ft126.p1.g3 + ft126.p2.g3 + ft126.p3.g3 + ft126.p4.g3 + ft126.p5.g3;
    ft126.tot_semi = ft126.p1.semi + ft126.p2.semi + ft126.p3.semi + ft126.p4.semi + ft126.p5.semi;
    ft126.tot_td3 = ft126.p1.td3 + ft126.p2.td3 + ft126.p3.td3 + ft126.p4.td3 + ft126.p5.td3;
    ft126.tot_final = ft126.p1.final + ft126.p2.final + ft126.p3.final + ft126.p4.final + ft126.p5.final;
    ft126.tot_team = ft126.p1.tot + ft126.p2.tot + ft126.p3.tot + ft126.p4.tot + ft126.p5.tot;
    const ft127 = {
        ...fantateam_type,
        team_index: 127,
        name: "ISTANBULKEBAB GLOBETROTTERS",
        rione: { ...SUD },
        p1: { ...ValentinoCigainero },
        p2: { ...MicheleDeAnna },
        p3: { ...MattiaRoiatti },
        p4: { ...LucaAnedda },
        p5: { ...GiacomoSilvestri },
    };
    ft127.total_cost = ft127.p1.cost + ft127.p2.cost + ft127.p3.cost + ft127.p4.cost + ft127.p5.cost;
    ft127.tot_g1 = ft127.p1.g1 + ft127.p2.g1 + ft127.p3.g1 + ft127.p4.g1 + ft127.p5.g1;
    ft127.tot_g2 = ft127.p1.g2 + ft127.p2.g2 + ft127.p3.g2 + ft127.p4.g2 + ft127.p5.g2;
    ft127.tot_g3 = ft127.p1.g3 + ft127.p2.g3 + ft127.p3.g3 + ft127.p4.g3 + ft127.p5.g3;
    ft127.tot_semi = ft127.p1.semi + ft127.p2.semi + ft127.p3.semi + ft127.p4.semi + ft127.p5.semi;
    ft127.tot_td3 = ft127.p1.td3 + ft127.p2.td3 + ft127.p3.td3 + ft127.p4.td3 + ft127.p5.td3;
    ft127.tot_final = ft127.p1.final + ft127.p2.final + ft127.p3.final + ft127.p4.final + ft127.p5.final;
    ft127.tot_team = ft127.p1.tot + ft127.p2.tot + ft127.p3.tot + ft127.p4.tot + ft127.p5.tot;
    const ft128 = {
        ...fantateam_type,
        team_index: 128,
        name: "Wpalio",
        rione: { ...SUD },
        p1: { ...StefanoPolano },
        p2: { ...DavidGaspardo },
        p3: { ...ThomasBaracetti },
        p4: { ...AlessandroGalassi },
        p5: { ...EmanueleDaneluzzi },
    };
    ft128.total_cost = ft128.p1.cost + ft128.p2.cost + ft128.p3.cost + ft128.p4.cost + ft128.p5.cost;
    ft128.tot_g1 = ft128.p1.g1 + ft128.p2.g1 + ft128.p3.g1 + ft128.p4.g1 + ft128.p5.g1;
    ft128.tot_g2 = ft128.p1.g2 + ft128.p2.g2 + ft128.p3.g2 + ft128.p4.g2 + ft128.p5.g2;
    ft128.tot_g3 = ft128.p1.g3 + ft128.p2.g3 + ft128.p3.g3 + ft128.p4.g3 + ft128.p5.g3;
    ft128.tot_semi = ft128.p1.semi + ft128.p2.semi + ft128.p3.semi + ft128.p4.semi + ft128.p5.semi;
    ft128.tot_td3 = ft128.p1.td3 + ft128.p2.td3 + ft128.p3.td3 + ft128.p4.td3 + ft128.p5.td3;
    ft128.tot_final = ft128.p1.final + ft128.p2.final + ft128.p3.final + ft128.p4.final + ft128.p5.final;
    ft128.tot_team = ft128.p1.tot + ft128.p2.tot + ft128.p3.tot + ft128.p4.tot + ft128.p5.tot;
    const ft129 = {
        ...fantateam_type,
        team_index: 129,
        name: "giulia",
        rione: { ...EST },
        p1: { ...AlessandroRizzi },
        p2: { ...MarcoRizzi },
        p3: { ...LucaAnedda },
        p4: { ...MattiaRoiatti },
        p5: { ...EmanueleDaneluzzi },
    };
    ft129.total_cost = ft129.p1.cost + ft129.p2.cost + ft129.p3.cost + ft129.p4.cost + ft129.p5.cost;
    ft129.tot_g1 = ft129.p1.g1 + ft129.p2.g1 + ft129.p3.g1 + ft129.p4.g1 + ft129.p5.g1;
    ft129.tot_g2 = ft129.p1.g2 + ft129.p2.g2 + ft129.p3.g2 + ft129.p4.g2 + ft129.p5.g2;
    ft129.tot_g3 = ft129.p1.g3 + ft129.p2.g3 + ft129.p3.g3 + ft129.p4.g3 + ft129.p5.g3;
    ft129.tot_semi = ft129.p1.semi + ft129.p2.semi + ft129.p3.semi + ft129.p4.semi + ft129.p5.semi;
    ft129.tot_td3 = ft129.p1.td3 + ft129.p2.td3 + ft129.p3.td3 + ft129.p4.td3 + ft129.p5.td3;
    ft129.tot_final = ft129.p1.final + ft129.p2.final + ft129.p3.final + ft129.p4.final + ft129.p5.final;
    ft129.tot_team = ft129.p1.tot + ft129.p2.tot + ft129.p3.tot + ft129.p4.tot + ft129.p5.tot;
    const ft130 = {
        ...fantateam_type,
        team_index: 130,
        name: "giorgina",
        rione: { ...EST },
        p1: { ...MarcoRizzi },
        p2: { ...ValentinoCigainero },
        p3: { ...MattiaRoiatti },
        p4: { ...LucaAnedda },
        p5: { ...GiacomoSilvestri },
    };
    ft130.total_cost = ft130.p1.cost + ft130.p2.cost + ft130.p3.cost + ft130.p4.cost + ft130.p5.cost;
    ft130.tot_g1 = ft130.p1.g1 + ft130.p2.g1 + ft130.p3.g1 + ft130.p4.g1 + ft130.p5.g1;
    ft130.tot_g2 = ft130.p1.g2 + ft130.p2.g2 + ft130.p3.g2 + ft130.p4.g2 + ft130.p5.g2;
    ft130.tot_g3 = ft130.p1.g3 + ft130.p2.g3 + ft130.p3.g3 + ft130.p4.g3 + ft130.p5.g3;
    ft130.tot_semi = ft130.p1.semi + ft130.p2.semi + ft130.p3.semi + ft130.p4.semi + ft130.p5.semi;
    ft130.tot_td3 = ft130.p1.td3 + ft130.p2.td3 + ft130.p3.td3 + ft130.p4.td3 + ft130.p5.td3;
    ft130.tot_final = ft130.p1.final + ft130.p2.final + ft130.p3.final + ft130.p4.final + ft130.p5.final;
    ft130.tot_team = ft130.p1.tot + ft130.p2.tot + ft130.p3.tot + ft130.p4.tot + ft130.p5.tot;
    const ft131 = {
        ...fantateam_type,
        team_index: 131,
        name: "CesoloilNordAP",
        rione: { ...NORD },
        p1: { ...DiegoNata },
        p2: { ...LucaAnedda },
        p3: { ...FilippoPasquon },
        p4: { ...AlessandroRizzi },
        p5: { ...GiacomoPiacentini },
    };
    ft131.total_cost = ft131.p1.cost + ft131.p2.cost + ft131.p3.cost + ft131.p4.cost + ft131.p5.cost;
    ft131.tot_g1 = ft131.p1.g1 + ft131.p2.g1 + ft131.p3.g1 + ft131.p4.g1 + ft131.p5.g1;
    ft131.tot_g2 = ft131.p1.g2 + ft131.p2.g2 + ft131.p3.g2 + ft131.p4.g2 + ft131.p5.g2;
    ft131.tot_g3 = ft131.p1.g3 + ft131.p2.g3 + ft131.p3.g3 + ft131.p4.g3 + ft131.p5.g3;
    ft131.tot_semi = ft131.p1.semi + ft131.p2.semi + ft131.p3.semi + ft131.p4.semi + ft131.p5.semi;
    ft131.tot_td3 = ft131.p1.td3 + ft131.p2.td3 + ft131.p3.td3 + ft131.p4.td3 + ft131.p5.td3;
    ft131.tot_final = ft131.p1.final + ft131.p2.final + ft131.p3.final + ft131.p4.final + ft131.p5.final;
    ft131.tot_team = ft131.p1.tot + ft131.p2.tot + ft131.p3.tot + ft131.p4.tot + ft131.p5.tot;
    const ft132 = {
        ...fantateam_type,
        team_index: 132,
        name: "Real Codroipen",
        rione: { ...WEST },
        p1: { ...ThomasBaracetti },
        p2: { ...GabrieleMiani },
        p3: { ...SebastianoTonizzo },
        p4: { ...MarcoMarchetti },
        p5: { ...EdoardoPicogna },
    };
    ft132.total_cost = ft132.p1.cost + ft132.p2.cost + ft132.p3.cost + ft132.p4.cost + ft132.p5.cost;
    ft132.tot_g1 = ft132.p1.g1 + ft132.p2.g1 + ft132.p3.g1 + ft132.p4.g1 + ft132.p5.g1;
    ft132.tot_g2 = ft132.p1.g2 + ft132.p2.g2 + ft132.p3.g2 + ft132.p4.g2 + ft132.p5.g2;
    ft132.tot_g3 = ft132.p1.g3 + ft132.p2.g3 + ft132.p3.g3 + ft132.p4.g3 + ft132.p5.g3;
    ft132.tot_semi = ft132.p1.semi + ft132.p2.semi + ft132.p3.semi + ft132.p4.semi + ft132.p5.semi;
    ft132.tot_td3 = ft132.p1.td3 + ft132.p2.td3 + ft132.p3.td3 + ft132.p4.td3 + ft132.p5.td3;
    ft132.tot_final = ft132.p1.final + ft132.p2.final + ft132.p3.final + ft132.p4.final + ft132.p5.final;
    ft132.tot_team = ft132.p1.tot + ft132.p2.tot + ft132.p3.tot + ft132.p4.tot + ft132.p5.tot;
    const ft133 = {
        ...fantateam_type,
        team_index: 133,
        name: "Pix",
        rione: { ...WEST },
        p1: { ...GiacomoPiacentini },
        p2: { ...VittorioBasso },
        p3: { ...MarcoSerrao },
        p4: { ...TommasoMartello },
        p5: { ...AlessandroRizzi },
    };
    ft133.total_cost = ft133.p1.cost + ft133.p2.cost + ft133.p3.cost + ft133.p4.cost + ft133.p5.cost;
    ft133.tot_g1 = ft133.p1.g1 + ft133.p2.g1 + ft133.p3.g1 + ft133.p4.g1 + ft133.p5.g1;
    ft133.tot_g2 = ft133.p1.g2 + ft133.p2.g2 + ft133.p3.g2 + ft133.p4.g2 + ft133.p5.g2;
    ft133.tot_g3 = ft133.p1.g3 + ft133.p2.g3 + ft133.p3.g3 + ft133.p4.g3 + ft133.p5.g3;
    ft133.tot_semi = ft133.p1.semi + ft133.p2.semi + ft133.p3.semi + ft133.p4.semi + ft133.p5.semi;
    ft133.tot_td3 = ft133.p1.td3 + ft133.p2.td3 + ft133.p3.td3 + ft133.p4.td3 + ft133.p5.td3;
    ft133.tot_final = ft133.p1.final + ft133.p2.final + ft133.p3.final + ft133.p4.final + ft133.p5.final;
    ft133.tot_team = ft133.p1.tot + ft133.p2.tot + ft133.p3.tot + ft133.p4.tot + ft133.p5.tot;
    const ft134 = {
        ...fantateam_type,
        team_index: 134,
        name: "FMB united",
        rione: { ...EST },
        p1: { ...AlessandroRojatti },
        p2: { ...GabrieleMiani },
        p3: { ...MarcoRizzi },
        p4: { ...MattiaRoiatti },
        p5: { ...LucaAnedda },
    };
    ft134.total_cost = ft134.p1.cost + ft134.p2.cost + ft134.p3.cost + ft134.p4.cost + ft134.p5.cost;
    ft134.tot_g1 = ft134.p1.g1 + ft134.p2.g1 + ft134.p3.g1 + ft134.p4.g1 + ft134.p5.g1;
    ft134.tot_g2 = ft134.p1.g2 + ft134.p2.g2 + ft134.p3.g2 + ft134.p4.g2 + ft134.p5.g2;
    ft134.tot_g3 = ft134.p1.g3 + ft134.p2.g3 + ft134.p3.g3 + ft134.p4.g3 + ft134.p5.g3;
    ft134.tot_semi = ft134.p1.semi + ft134.p2.semi + ft134.p3.semi + ft134.p4.semi + ft134.p5.semi;
    ft134.tot_td3 = ft134.p1.td3 + ft134.p2.td3 + ft134.p3.td3 + ft134.p4.td3 + ft134.p5.td3;
    ft134.tot_final = ft134.p1.final + ft134.p2.final + ft134.p3.final + ft134.p4.final + ft134.p5.final;
    ft134.tot_team = ft134.p1.tot + ft134.p2.tot + ft134.p3.tot + ft134.p4.tot + ft134.p5.tot;
    const ft135 = {
        ...fantateam_type,
        team_index: 135,
        name: "Ghisangeles Clippers II",
        rione: { ...EST },
        p1: { ...MattiaMasotti },
        p2: { ...ChristianZanet },
        p3: { ...FilippoPasquon },
        p4: { ...DavidGaspardo },
        p5: { ...MassimilianoRossi },
    };
    ft135.total_cost = ft135.p1.cost + ft135.p2.cost + ft135.p3.cost + ft135.p4.cost + ft135.p5.cost;
    ft135.tot_g1 = ft135.p1.g1 + ft135.p2.g1 + ft135.p3.g1 + ft135.p4.g1 + ft135.p5.g1;
    ft135.tot_g2 = ft135.p1.g2 + ft135.p2.g2 + ft135.p3.g2 + ft135.p4.g2 + ft135.p5.g2;
    ft135.tot_g3 = ft135.p1.g3 + ft135.p2.g3 + ft135.p3.g3 + ft135.p4.g3 + ft135.p5.g3;
    ft135.tot_semi = ft135.p1.semi + ft135.p2.semi + ft135.p3.semi + ft135.p4.semi + ft135.p5.semi;
    ft135.tot_td3 = ft135.p1.td3 + ft135.p2.td3 + ft135.p3.td3 + ft135.p4.td3 + ft135.p5.td3;
    ft135.tot_final = ft135.p1.final + ft135.p2.final + ft135.p3.final + ft135.p4.final + ft135.p5.final;
    ft135.tot_team = ft135.p1.tot + ft135.p2.tot + ft135.p3.tot + ft135.p4.tot + ft135.p5.tot;
    const ft136 = {
        ...fantateam_type,
        team_index: 136,
        name: "asdfg",
        rione: { ...WEST },
        p1: { ...MassimilianoRossi },
        p2: { ...MassimoMasotti },
        p3: { ...EugenioDeTina },
        p4: { ...DenisVanin },
        p5: { ...LucaAnedda },
    };
    ft136.total_cost = ft136.p1.cost + ft136.p2.cost + ft136.p3.cost + ft136.p4.cost + ft136.p5.cost;
    ft136.tot_g1 = ft136.p1.g1 + ft136.p2.g1 + ft136.p3.g1 + ft136.p4.g1 + ft136.p5.g1;
    ft136.tot_g2 = ft136.p1.g2 + ft136.p2.g2 + ft136.p3.g2 + ft136.p4.g2 + ft136.p5.g2;
    ft136.tot_g3 = ft136.p1.g3 + ft136.p2.g3 + ft136.p3.g3 + ft136.p4.g3 + ft136.p5.g3;
    ft136.tot_semi = ft136.p1.semi + ft136.p2.semi + ft136.p3.semi + ft136.p4.semi + ft136.p5.semi;
    ft136.tot_td3 = ft136.p1.td3 + ft136.p2.td3 + ft136.p3.td3 + ft136.p4.td3 + ft136.p5.td3;
    ft136.tot_final = ft136.p1.final + ft136.p2.final + ft136.p3.final + ft136.p4.final + ft136.p5.final;
    ft136.tot_team = ft136.p1.tot + ft136.p2.tot + ft136.p3.tot + ft136.p4.tot + ft136.p5.tot;
    const ft137 = {
        ...fantateam_type,
        team_index: 137,
        name: "zioperone",
        rione: { ...NORD },
        p1: { ...LorenzoMoro },
        p2: { ...DavidGaspardo },
        p3: { ...FilippoPasquon },
        p4: { ...VittorioBasso },
        p5: { ...WilliamIob },
    };
    ft137.total_cost = ft137.p1.cost + ft137.p2.cost + ft137.p3.cost + ft137.p4.cost + ft137.p5.cost;
    ft137.tot_g1 = ft137.p1.g1 + ft137.p2.g1 + ft137.p3.g1 + ft137.p4.g1 + ft137.p5.g1;
    ft137.tot_g2 = ft137.p1.g2 + ft137.p2.g2 + ft137.p3.g2 + ft137.p4.g2 + ft137.p5.g2;
    ft137.tot_g3 = ft137.p1.g3 + ft137.p2.g3 + ft137.p3.g3 + ft137.p4.g3 + ft137.p5.g3;
    ft137.tot_semi = ft137.p1.semi + ft137.p2.semi + ft137.p3.semi + ft137.p4.semi + ft137.p5.semi;
    ft137.tot_td3 = ft137.p1.td3 + ft137.p2.td3 + ft137.p3.td3 + ft137.p4.td3 + ft137.p5.td3;
    ft137.tot_final = ft137.p1.final + ft137.p2.final + ft137.p3.final + ft137.p4.final + ft137.p5.final;
    ft137.tot_team = ft137.p1.tot + ft137.p2.tot + ft137.p3.tot + ft137.p4.tot + ft137.p5.tot;
    const ft138 = {
        ...fantateam_type,
        team_index: 138,
        name: "Baskettone",
        rione: { ...NORD },
        p1: { ...MattiaRoiatti },
        p2: { ...GabrieleMiani },
        p3: { ...MauroPerina },
        p4: { ...MarcoMarchetti },
        p5: { ...MassimoMasotti },
    };
    ft138.total_cost = ft138.p1.cost + ft138.p2.cost + ft138.p3.cost + ft138.p4.cost + ft138.p5.cost;
    ft138.tot_g1 = ft138.p1.g1 + ft138.p2.g1 + ft138.p3.g1 + ft138.p4.g1 + ft138.p5.g1;
    ft138.tot_g2 = ft138.p1.g2 + ft138.p2.g2 + ft138.p3.g2 + ft138.p4.g2 + ft138.p5.g2;
    ft138.tot_g3 = ft138.p1.g3 + ft138.p2.g3 + ft138.p3.g3 + ft138.p4.g3 + ft138.p5.g3;
    ft138.tot_semi = ft138.p1.semi + ft138.p2.semi + ft138.p3.semi + ft138.p4.semi + ft138.p5.semi;
    ft138.tot_td3 = ft138.p1.td3 + ft138.p2.td3 + ft138.p3.td3 + ft138.p4.td3 + ft138.p5.td3;
    ft138.tot_final = ft138.p1.final + ft138.p2.final + ft138.p3.final + ft138.p4.final + ft138.p5.final;
    ft138.tot_team = ft138.p1.tot + ft138.p2.tot + ft138.p3.tot + ft138.p4.tot + ft138.p5.tot;
    const ft139 = {
        ...fantateam_type,
        team_index: 139,
        name: "Gate 2 Aeroporto Malpensa-Silvio Berlusconi Milano✈️",
        rione: { ...EST },
        p1: { ...DavidGaspardo },
        p2: { ...FilippoPasquon },
        p3: { ...MarcoPolo },
        p4: { ...MattiaMasotti },
        p5: { ...LucaGemo },
    };
    ft139.total_cost = ft139.p1.cost + ft139.p2.cost + ft139.p3.cost + ft139.p4.cost + ft139.p5.cost;
    ft139.tot_g1 = ft139.p1.g1 + ft139.p2.g1 + ft139.p3.g1 + ft139.p4.g1 + ft139.p5.g1;
    ft139.tot_g2 = ft139.p1.g2 + ft139.p2.g2 + ft139.p3.g2 + ft139.p4.g2 + ft139.p5.g2;
    ft139.tot_g3 = ft139.p1.g3 + ft139.p2.g3 + ft139.p3.g3 + ft139.p4.g3 + ft139.p5.g3;
    ft139.tot_semi = ft139.p1.semi + ft139.p2.semi + ft139.p3.semi + ft139.p4.semi + ft139.p5.semi;
    ft139.tot_td3 = ft139.p1.td3 + ft139.p2.td3 + ft139.p3.td3 + ft139.p4.td3 + ft139.p5.td3;
    ft139.tot_final = ft139.p1.final + ft139.p2.final + ft139.p3.final + ft139.p4.final + ft139.p5.final;
    ft139.tot_team = ft139.p1.tot + ft139.p2.tot + ft139.p3.tot + ft139.p4.tot + ft139.p5.tot;
    const ft140 = {
        ...fantateam_type,
        team_index: 140,
        name: "Arrosto & tiro",
        rione: { ...EST },
        p1: { ...IacopoPivetta },
        p2: { ...WilliamIob },
        p3: { ...DenisVanin },
        p4: { ...DanieleGanzit },
        p5: { ...MarcoSerrao },
    };
    ft140.total_cost = ft140.p1.cost + ft140.p2.cost + ft140.p3.cost + ft140.p4.cost + ft140.p5.cost;
    ft140.tot_g1 = ft140.p1.g1 + ft140.p2.g1 + ft140.p3.g1 + ft140.p4.g1 + ft140.p5.g1;
    ft140.tot_g2 = ft140.p1.g2 + ft140.p2.g2 + ft140.p3.g2 + ft140.p4.g2 + ft140.p5.g2;
    ft140.tot_g3 = ft140.p1.g3 + ft140.p2.g3 + ft140.p3.g3 + ft140.p4.g3 + ft140.p5.g3;
    ft140.tot_semi = ft140.p1.semi + ft140.p2.semi + ft140.p3.semi + ft140.p4.semi + ft140.p5.semi;
    ft140.tot_td3 = ft140.p1.td3 + ft140.p2.td3 + ft140.p3.td3 + ft140.p4.td3 + ft140.p5.td3;
    ft140.tot_final = ft140.p1.final + ft140.p2.final + ft140.p3.final + ft140.p4.final + ft140.p5.final;
    ft140.tot_team = ft140.p1.tot + ft140.p2.tot + ft140.p3.tot + ft140.p4.tot + ft140.p5.tot;
    const ft141 = {
        ...fantateam_type,
        team_index: 141,
        name: "West riformulato",
        rione: { ...WEST },
        p1: { ...VittorioGri },
        p2: { ...ChristianZanet },
        p3: { ...MauroPerina },
        p4: { ...MattiaRoiatti },
        p5: { ...AlessandroRizzi },
    };
    ft141.total_cost = ft141.p1.cost + ft141.p2.cost + ft141.p3.cost + ft141.p4.cost + ft141.p5.cost;
    ft141.tot_g1 = ft141.p1.g1 + ft141.p2.g1 + ft141.p3.g1 + ft141.p4.g1 + ft141.p5.g1;
    ft141.tot_g2 = ft141.p1.g2 + ft141.p2.g2 + ft141.p3.g2 + ft141.p4.g2 + ft141.p5.g2;
    ft141.tot_g3 = ft141.p1.g3 + ft141.p2.g3 + ft141.p3.g3 + ft141.p4.g3 + ft141.p5.g3;
    ft141.tot_semi = ft141.p1.semi + ft141.p2.semi + ft141.p3.semi + ft141.p4.semi + ft141.p5.semi;
    ft141.tot_td3 = ft141.p1.td3 + ft141.p2.td3 + ft141.p3.td3 + ft141.p4.td3 + ft141.p5.td3;
    ft141.tot_final = ft141.p1.final + ft141.p2.final + ft141.p3.final + ft141.p4.final + ft141.p5.final;
    ft141.tot_team = ft141.p1.tot + ft141.p2.tot + ft141.p3.tot + ft141.p4.tot + ft141.p5.tot;
    const ft142 = {
        ...fantateam_type,
        team_index: 142,
        name: "Ratflingbanana",
        rione: { ...SUD },
        p1: { ...DavideBroggi },
        p2: { ...MattiaMasotti },
        p3: { ...GiacomoSilvestri },
        p4: { ...ChristianZanet },
        p5: { ...DavidGaspardo },
    };
    ft142.total_cost = ft142.p1.cost + ft142.p2.cost + ft142.p3.cost + ft142.p4.cost + ft142.p5.cost;
    ft142.tot_g1 = ft142.p1.g1 + ft142.p2.g1 + ft142.p3.g1 + ft142.p4.g1 + ft142.p5.g1;
    ft142.tot_g2 = ft142.p1.g2 + ft142.p2.g2 + ft142.p3.g2 + ft142.p4.g2 + ft142.p5.g2;
    ft142.tot_g3 = ft142.p1.g3 + ft142.p2.g3 + ft142.p3.g3 + ft142.p4.g3 + ft142.p5.g3;
    ft142.tot_semi = ft142.p1.semi + ft142.p2.semi + ft142.p3.semi + ft142.p4.semi + ft142.p5.semi;
    ft142.tot_td3 = ft142.p1.td3 + ft142.p2.td3 + ft142.p3.td3 + ft142.p4.td3 + ft142.p5.td3;
    ft142.tot_final = ft142.p1.final + ft142.p2.final + ft142.p3.final + ft142.p4.final + ft142.p5.final;
    ft142.tot_team = ft142.p1.tot + ft142.p2.tot + ft142.p3.tot + ft142.p4.tot + ft142.p5.tot;
    const ft143 = {
        ...fantateam_type,
        team_index: 143,
        name: "Ducks",
        rione: { ...NORD },
        p1: { ...MarcoRizzi },
        p2: { ...MarcoLombardo },
        p3: { ...DavidGaspardo },
        p4: { ...FilippoPasquon },
        p5: { ...LorenzoMoro },
    };
    ft143.total_cost = ft143.p1.cost + ft143.p2.cost + ft143.p3.cost + ft143.p4.cost + ft143.p5.cost;
    ft143.tot_g1 = ft143.p1.g1 + ft143.p2.g1 + ft143.p3.g1 + ft143.p4.g1 + ft143.p5.g1;
    ft143.tot_g2 = ft143.p1.g2 + ft143.p2.g2 + ft143.p3.g2 + ft143.p4.g2 + ft143.p5.g2;
    ft143.tot_g3 = ft143.p1.g3 + ft143.p2.g3 + ft143.p3.g3 + ft143.p4.g3 + ft143.p5.g3;
    ft143.tot_semi = ft143.p1.semi + ft143.p2.semi + ft143.p3.semi + ft143.p4.semi + ft143.p5.semi;
    ft143.tot_td3 = ft143.p1.td3 + ft143.p2.td3 + ft143.p3.td3 + ft143.p4.td3 + ft143.p5.td3;
    ft143.tot_final = ft143.p1.final + ft143.p2.final + ft143.p3.final + ft143.p4.final + ft143.p5.final;
    ft143.tot_team = ft143.p1.tot + ft143.p2.tot + ft143.p3.tot + ft143.p4.tot + ft143.p5.tot;
    const ft144 = {
        ...fantateam_type,
        team_index: 144,
        name: "Trevi BC",
        rione: { ...SUD },
        p1: { ...DavidGaspardo },
        p2: { ...FilippoPasquon },
        p3: { ...MarcoLombardo },
        p4: { ...EnricoSant },
        p5: { ...MarcoRizzi },
    };
    ft144.total_cost = ft144.p1.cost + ft144.p2.cost + ft144.p3.cost + ft144.p4.cost + ft144.p5.cost;
    ft144.tot_g1 = ft144.p1.g1 + ft144.p2.g1 + ft144.p3.g1 + ft144.p4.g1 + ft144.p5.g1;
    ft144.tot_g2 = ft144.p1.g2 + ft144.p2.g2 + ft144.p3.g2 + ft144.p4.g2 + ft144.p5.g2;
    ft144.tot_g3 = ft144.p1.g3 + ft144.p2.g3 + ft144.p3.g3 + ft144.p4.g3 + ft144.p5.g3;
    ft144.tot_semi = ft144.p1.semi + ft144.p2.semi + ft144.p3.semi + ft144.p4.semi + ft144.p5.semi;
    ft144.tot_td3 = ft144.p1.td3 + ft144.p2.td3 + ft144.p3.td3 + ft144.p4.td3 + ft144.p5.td3;
    ft144.tot_final = ft144.p1.final + ft144.p2.final + ft144.p3.final + ft144.p4.final + ft144.p5.final;
    ft144.tot_team = ft144.p1.tot + ft144.p2.tot + ft144.p3.tot + ft144.p4.tot + ft144.p5.tot;
    const ft145 = {
        ...fantateam_type,
        team_index: 145,
        name: "FIRETEAM!",
        rione: { ...NORD },
        p1: { ...VittorioGri },
        p2: { ...MarcoLombardo },
        p3: { ...MarcoSerrao },
        p4: { ...AlessandroRizzi },
        p5: { ...VittorioBasso },
    };
    ft145.total_cost = ft145.p1.cost + ft145.p2.cost + ft145.p3.cost + ft145.p4.cost + ft145.p5.cost;
    ft145.tot_g1 = ft145.p1.g1 + ft145.p2.g1 + ft145.p3.g1 + ft145.p4.g1 + ft145.p5.g1;
    ft145.tot_g2 = ft145.p1.g2 + ft145.p2.g2 + ft145.p3.g2 + ft145.p4.g2 + ft145.p5.g2;
    ft145.tot_g3 = ft145.p1.g3 + ft145.p2.g3 + ft145.p3.g3 + ft145.p4.g3 + ft145.p5.g3;
    ft145.tot_semi = ft145.p1.semi + ft145.p2.semi + ft145.p3.semi + ft145.p4.semi + ft145.p5.semi;
    ft145.tot_td3 = ft145.p1.td3 + ft145.p2.td3 + ft145.p3.td3 + ft145.p4.td3 + ft145.p5.td3;
    ft145.tot_final = ft145.p1.final + ft145.p2.final + ft145.p3.final + ft145.p4.final + ft145.p5.final;
    ft145.tot_team = ft145.p1.tot + ft145.p2.tot + ft145.p3.tot + ft145.p4.tot + ft145.p5.tot;
    const ft146 = {
        ...fantateam_type,
        team_index: 146,
        name: "Orsa",
        rione: { ...NORD },
        p1: { ...GabrieleMiani },
        p2: { ...LucaAnedda },
        p3: { ...AlessandroSantin },
        p4: { ...LucaDellaLonga },
        p5: { ...MarcoPolo },
    };
    ft146.total_cost = ft146.p1.cost + ft146.p2.cost + ft146.p3.cost + ft146.p4.cost + ft146.p5.cost;
    ft146.tot_g1 = ft146.p1.g1 + ft146.p2.g1 + ft146.p3.g1 + ft146.p4.g1 + ft146.p5.g1;
    ft146.tot_g2 = ft146.p1.g2 + ft146.p2.g2 + ft146.p3.g2 + ft146.p4.g2 + ft146.p5.g2;
    ft146.tot_g3 = ft146.p1.g3 + ft146.p2.g3 + ft146.p3.g3 + ft146.p4.g3 + ft146.p5.g3;
    ft146.tot_semi = ft146.p1.semi + ft146.p2.semi + ft146.p3.semi + ft146.p4.semi + ft146.p5.semi;
    ft146.tot_td3 = ft146.p1.td3 + ft146.p2.td3 + ft146.p3.td3 + ft146.p4.td3 + ft146.p5.td3;
    ft146.tot_final = ft146.p1.final + ft146.p2.final + ft146.p3.final + ft146.p4.final + ft146.p5.final;
    ft146.tot_team = ft146.p1.tot + ft146.p2.tot + ft146.p3.tot + ft146.p4.tot + ft146.p5.tot;
    const ft147 = {
        ...fantateam_type,
        team_index: 147,
        name: "Fantasia 0",
        rione: { ...NORD },
        p1: { ...GioeleTudini },
        p2: { ...GabrieleMiani },
        p3: { ...MarcoMarchetti },
        p4: { ...MicheleVendrame },
        p5: { ...LorenzoSchinella },
    };
    ft147.total_cost = ft147.p1.cost + ft147.p2.cost + ft147.p3.cost + ft147.p4.cost + ft147.p5.cost;
    ft147.tot_g1 = ft147.p1.g1 + ft147.p2.g1 + ft147.p3.g1 + ft147.p4.g1 + ft147.p5.g1;
    ft147.tot_g2 = ft147.p1.g2 + ft147.p2.g2 + ft147.p3.g2 + ft147.p4.g2 + ft147.p5.g2;
    ft147.tot_g3 = ft147.p1.g3 + ft147.p2.g3 + ft147.p3.g3 + ft147.p4.g3 + ft147.p5.g3;
    ft147.tot_semi = ft147.p1.semi + ft147.p2.semi + ft147.p3.semi + ft147.p4.semi + ft147.p5.semi;
    ft147.tot_td3 = ft147.p1.td3 + ft147.p2.td3 + ft147.p3.td3 + ft147.p4.td3 + ft147.p5.td3;
    ft147.tot_final = ft147.p1.final + ft147.p2.final + ft147.p3.final + ft147.p4.final + ft147.p5.final;
    ft147.tot_team = ft147.p1.tot + ft147.p2.tot + ft147.p3.tot + ft147.p4.tot + ft147.p5.tot;
    const ft148 = {
        ...fantateam_type,
        team_index: 148,
        name: "Los Vikingos	-",
        rione: { ...NORD },
        p1: { ...MarcoRizzi },
        p2: { ...AlessandroRizzi },
        p3: { ...DiegoNata },
        p4: { ...LucaSoramel },
        p5: { ...VittorioGri },
    };
    ft148.total_cost = ft148.p1.cost + ft148.p2.cost + ft148.p3.cost + ft148.p4.cost + ft148.p5.cost;
    ft148.tot_g1 = ft148.p1.g1 + ft148.p2.g1 + ft148.p3.g1 + ft148.p4.g1 + ft148.p5.g1;
    ft148.tot_g2 = ft148.p1.g2 + ft148.p2.g2 + ft148.p3.g2 + ft148.p4.g2 + ft148.p5.g2;
    ft148.tot_g3 = ft148.p1.g3 + ft148.p2.g3 + ft148.p3.g3 + ft148.p4.g3 + ft148.p5.g3;
    ft148.tot_semi = ft148.p1.semi + ft148.p2.semi + ft148.p3.semi + ft148.p4.semi + ft148.p5.semi;
    ft148.tot_td3 = ft148.p1.td3 + ft148.p2.td3 + ft148.p3.td3 + ft148.p4.td3 + ft148.p5.td3;
    ft148.tot_final = ft148.p1.final + ft148.p2.final + ft148.p3.final + ft148.p4.final + ft148.p5.final;
    ft148.tot_team = ft148.p1.tot + ft148.p2.tot + ft148.p3.tot + ft148.p4.tot + ft148.p5.tot;
    const ft149 = {
        ...fantateam_type,
        team_index: 149,
        name: "Quelli di zona	-",
        rione: { ...EST },
        p1: { ...AndreaMoretti },
        p2: { ...AlessandroRizzi },
        p3: { ...DiegoNata },
        p4: { ...MassimilianoRossi },
        p5: { ...LucaSoramel },
    };
    ft149.total_cost = ft149.p1.cost + ft149.p2.cost + ft149.p3.cost + ft149.p4.cost + ft149.p5.cost;
    ft149.tot_g1 = ft149.p1.g1 + ft149.p2.g1 + ft149.p3.g1 + ft149.p4.g1 + ft149.p5.g1;
    ft149.tot_g2 = ft149.p1.g2 + ft149.p2.g2 + ft149.p3.g2 + ft149.p4.g2 + ft149.p5.g2;
    ft149.tot_g3 = ft149.p1.g3 + ft149.p2.g3 + ft149.p3.g3 + ft149.p4.g3 + ft149.p5.g3;
    ft149.tot_semi = ft149.p1.semi + ft149.p2.semi + ft149.p3.semi + ft149.p4.semi + ft149.p5.semi;
    ft149.tot_td3 = ft149.p1.td3 + ft149.p2.td3 + ft149.p3.td3 + ft149.p4.td3 + ft149.p5.td3;
    ft149.tot_final = ft149.p1.final + ft149.p2.final + ft149.p3.final + ft149.p4.final + ft149.p5.final;
    ft149.tot_team = ft149.p1.tot + ft149.p2.tot + ft149.p3.tot + ft149.p4.tot + ft149.p5.tot;
    const ft150 = {
        ...fantateam_type,
        team_index: 150,
        name: "Furbicomevolpi	-",
        rione: { ...EST },
        p1: { ...MarcoSerrao },
        p2: { ...WilliamIob },
        p3: { ...DenisVanin },
        p4: { ...SimoneMartinelli },
        p5: { ...AlessandroSant },
    };
    ft150.total_cost = ft150.p1.cost + ft150.p2.cost + ft150.p3.cost + ft150.p4.cost + ft150.p5.cost;
    ft150.tot_g1 = ft150.p1.g1 + ft150.p2.g1 + ft150.p3.g1 + ft150.p4.g1 + ft150.p5.g1;
    ft150.tot_g2 = ft150.p1.g2 + ft150.p2.g2 + ft150.p3.g2 + ft150.p4.g2 + ft150.p5.g2;
    ft150.tot_g3 = ft150.p1.g3 + ft150.p2.g3 + ft150.p3.g3 + ft150.p4.g3 + ft150.p5.g3;
    ft150.tot_semi = ft150.p1.semi + ft150.p2.semi + ft150.p3.semi + ft150.p4.semi + ft150.p5.semi;
    ft150.tot_td3 = ft150.p1.td3 + ft150.p2.td3 + ft150.p3.td3 + ft150.p4.td3 + ft150.p5.td3;
    ft150.tot_final = ft150.p1.final + ft150.p2.final + ft150.p3.final + ft150.p4.final + ft150.p5.final;
    ft150.tot_team = ft150.p1.tot + ft150.p2.tot + ft150.p3.tot + ft150.p4.tot + ft150.p5.tot;
    const ft151 = {
        ...fantateam_type,
        team_index: 151,
        name: "qwerty	-",
        rione: { ...EST },
        p1: { ...GionaTell },
        p2: { ...LorenzoMoro },
        p3: { ...SimoneMartinelli },
        p4: { ...MauroPerina },
        p5: { ...EdoardoPicogna },
    };
    ft151.total_cost = ft151.p1.cost + ft151.p2.cost + ft151.p3.cost + ft151.p4.cost + ft151.p5.cost;
    ft151.tot_g1 = ft151.p1.g1 + ft151.p2.g1 + ft151.p3.g1 + ft151.p4.g1 + ft151.p5.g1;
    ft151.tot_g2 = ft151.p1.g2 + ft151.p2.g2 + ft151.p3.g2 + ft151.p4.g2 + ft151.p5.g2;
    ft151.tot_g3 = ft151.p1.g3 + ft151.p2.g3 + ft151.p3.g3 + ft151.p4.g3 + ft151.p5.g3;
    ft151.tot_semi = ft151.p1.semi + ft151.p2.semi + ft151.p3.semi + ft151.p4.semi + ft151.p5.semi;
    ft151.tot_td3 = ft151.p1.td3 + ft151.p2.td3 + ft151.p3.td3 + ft151.p4.td3 + ft151.p5.td3;
    ft151.tot_final = ft151.p1.final + ft151.p2.final + ft151.p3.final + ft151.p4.final + ft151.p5.final;
    ft151.tot_team = ft151.p1.tot + ft151.p2.tot + ft151.p3.tot + ft151.p4.tot + ft151.p5.tot;
    
    const fantateams = [
        ft1, ft2, ft3, ft4, ft5, ft6, ft7, ft8, ft9, ft10, 
        ft11, ft12, ft13, ft14, ft15, ft16, ft17, ft18, ft19, ft20, 
        ft21, ft22, ft23, ft24, ft25, ft26, ft27, ft28, ft29, ft30, 
        ft31, ft32, ft33, ft34, ft35, ft36, ft37, ft38, ft39, ft40, 
        ft41, ft42, ft43, ft44, ft45, ft46, ft47, ft48, ft49, ft50, 
        ft51, ft52, ft53, ft54, ft55, ft56, ft57, ft58, ft59, ft60, 
        ft61, ft62, ft63, ft64, ft65, ft66, ft67, ft68, ft69, ft70, 
        ft71, ft72, ft73, ft74, ft75, ft76, ft77, ft78, ft79, ft80, 
        ft81, ft82, ft83, ft84, ft85, ft86, ft87, ft88, ft89, ft90, 
        ft91, ft92, ft93, ft94, ft95, ft96, ft97, ft98, ft99, ft100, 
        ft101, ft102, ft103, ft104, ft105, ft106, ft107, ft108, ft109, ft110, 
        ft111, ft112, ft113, ft114, ft115, ft116, ft117, ft118, ft119, ft120, 
        ft121, ft122, ft123, ft124, ft125, ft126, ft127, ft128, ft129, ft130, 
        ft131, ft132, ft133, ft134, ft135, ft136, ft137, ft138, ft139, ft140, 
        ft141, ft142, ft143, ft144, ft145, ft146, ft147, ft148, ft149, ft150, 
        ft151
      ];
      
    


    //Esporta i tipi di dati per renderli disponibili agli altri script
    export {
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


    


        fantateams, players
    };



