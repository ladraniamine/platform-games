
let data = [
    {
        id:1, img:"1519896507-4529-jaquette-avant.jpg",                                      
        title:"farcray5",       nbr_download:1933,  category:"arcade"
    },
       
    { 
        id:2, img:"5194K8TQDTL._SY445_.jpg",                                                 
        title:"spider man2",    nbr_download:299,   category:"battle"
    },
       
    {   
        id:3, img:"71bNIxi11sL._AC_SY500_.jpg",                                              
        title:"gta v",          nbr_download:1999,  category:"open word"
    },  

    {   
        id:4,  img:"apps.56329.13907190591481709.98602423-1113-49ac-983c-7f32e0938eb8.jpg",
        title:"forza horizon5", nbr_download:2000,  category:"sport" 
    },
       
    {   
        id:5,  img:"images (1).jpg",
        title:"doom eternal",   nbr_download:1777,    category:"adventure"
    },
    {   
        id:6,  img:"images.jpg",
        title:"chivalry3",        nbr_download:1544,  category:"war"
    },
    {   
        id:7,  img:"moton3867.jpg",
        title:"call of duty mw",  nbr_download:2031,  category:"war"
    },
    {   
        id:8,  img:"packshot-f1c30d07d148425c01a152891fad753a-min.jpg",
        title:"pes 2020",         nbr_download:2998,  category:"football"
    },
    {
        id:9,  img:"Pro_Evolution_Soccer_2013_cover.jpg",
        title:"pes 2013",         nbr_download:2987,  category:"football"
    },
    {
        id:10,  img:"Dawn of Zombies_ Survival(10).jpg",
        title:"Dawn of Zombies",  nbr_download:1933,  category:"action"
    },
    {
        id:11,  img:"star-wars(11).webp",
        title:"star wars",        nbr_download:299,   category:"battle"
    },

    {
        id:12,  img:"EGS_TombRaider(12).webp",
        title:"Tomb Raider",      nbr_download:1999,  category:"open word"
    },
    {
        id:13,  img:"projectcars3(13).webp",
        title:"project cars 3",   nbr_download:2000,     category:"sport"
    },
    {
        id:14,  img:"gtalibertycity(14).jpg",
        title:"gta liberty city",    nbr_download:1777,  category:"adventure"
    },
    {
        id:15,  img:"grandtheftauto4(15).jpg",
        title:"grand theft auto 4",  nbr_download:1544,  category:"war"
    },
    {
        id:16,  img:"Grand-Theft-Auto-GTA-Vice-City(16).jpg",
        title:"GTA Vice City",       nbr_download:2031,  category:"war"
    },
    {
        id:17,  img:"Grand-Theft-Auto-GTA-San-Andreas(17).jpg",
        title:"GTA San Andreas",     nbr_download:2998,  category:"football"
    },
    {
        id:18,  img:"sniper-elite-5(18).jpeg",
        title:"sniper elite 5",      nbr_download:2987,  category:"football"
    },
    {
        id:19,  img:"sniper-elite-4-(19).jpg",
        title:"sniper elite 4",      nbr_download:1933,  category:"action"
    },
    {
        id:20,  img:"raft(20).webp",
        title:"raft",                nbr_download:299,   category:"battle"
    },

    {
        id:21,  img:"God-of-War(21).webp",
        title:"God of War",          nbr_download:1999,  category:"open word"
    },
    {
        id:22,  img:"the-witcher(22).jpg",
        title:"the witcher",         nbr_download:2000,  category:"sport"
    },
    {
        id:23,  img:"pubg(23).jpg",
        title:"pubg",                nbr_download:1777,  category:"adventure"
    },
    {
        id:24,  img:"fortnite-(24).jpg",
        title:"fortnite",            nbr_download:1544,  category:"war"
    },
    {
        id:25,  img:"blur-(25).webp",
        title:"blur",                nbr_download:2031,  category:"war"
    },
    {
        id:26,  img:"driver-san-francisco-usa_26_.jpg",
        title:"driver san francisco",    nbr_download:2998,  category:"football"
    },
    {
        id:27,  img:"Fernbus_27.jpg",
        title:"Fernbus",                 nbr_download:2987,  category:"football"
    },
    {
        id:28,  img:"bus-simulator_28.jpg",
        title:"bus simulator",           nbr_download:1933,  category:"action"
    },
    {
        id:29,  img:"cod-infinite warfare_29_.webp",
        title:"cod infinite warfare",    nbr_download:299,     category:"action"
    },

    {
        id:30,  img:"cod-black-ops-4(30).jpg",
        title:"call of duty black ops 4", nbr_download:1999,   category:"open word"
    },
   

    {
        id:31,  img:"driver-san-francisco-usa_26_.jpg",
        title:"driver san francisco",    nbr_download:2998,  category:"football"
    },
    {
        id:32,  img:"Fernbus_27.jpg",
        title:"Fernbus",                 nbr_download:2987,  category:"football"
    },

    {
        id:33,  img:"driver-san-francisco-usa_26_.jpg",
        title:"driver san francisco",    nbr_download:2998,  category:"football"
    },
    {
        id:34,  img:"Fernbus_27.jpg",
        title:"Fernbus",                 nbr_download:2987,  category:"football"
    },

    {
        id:35,  img:"driver-san-francisco-usa_26_.jpg",
        title:"driver san francisco",    nbr_download:2998,  category:"football"
    },
    {
        id:36,  img:"Fernbus_27.jpg",
        title:"Fernbus",                 nbr_download:2987,  category:"football"
    },

    {
        id:37,  img:"driver-san-francisco-usa_26_.jpg",
        title:"driver san francisco",    nbr_download:2998,  category:"football"
    },
    {
        id:38,  img:"Fernbus_27.jpg",
        title:"Fernbus",                 nbr_download:2987,  category:"football"
    },

];

let datacategory = [
    { id:1,  name:"all",                      img:null},
    { id:2,  name: "football" ,              img:"icons8-football-64.png"},
    { id:3,  name: "action" ,                 img:"icons8-action-48.png"},
    { id:4,  name: "adventure" ,             img:"icons8-adventure-64.png"},
    { id:5,  name: "arcade" ,                 img:"icons8-arcade-cabinet-48.png"},
    { id:6,  name: "battle" ,                 img:"icons8-battle-48.png"},
    { id:7,  name: "puzzel" ,                 img:"icons8-puzzle-matching-48.png"},
    { id:8,  name: "multi player" ,           img:"icons8-replace-player-48.png"},
    { id:9,  name: "open word" ,             img:"icons8-rockstar-games-64.png"},
    { id:10, name: "soccer" ,                 img:"icons8-soccer-64 (1).png"},
    { id:11, name: "war" ,                    img:"icons8-war-62.png"},
    { id:12, name: "sport" ,                 img:"icons8-sports-48.png"}, 

                  
                ];
