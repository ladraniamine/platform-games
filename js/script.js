/////////////////////////////////////////  VARIABLES  ///////////////////////////////////////////////////////
    let cardBox = document.getElementById("gamecards");
    let btnGroup = document.getElementById("btn-group");
///////////////////////////////////////////// END /////////////////////////////////////////////////
 
// this variable return how many card i want to draw in my ui
let numberOfCardInMyUi = 9 ; 
// this variable return how many card i want to draw in my ui

///////////////////////////////// DRAW GAMES CARDS IN MY UI ////////////////////////////////////////
    function drawGameCard(){
    let cardsGames = data.map((item)=>{
        if (item.id <= numberOfCardInMyUi) {
            
            return `
            <div class="col-lg-4 col-md-6 col-sm-6 " >
                <div class="card mb-2 mt-2 m-auto"  >
                    <img src="images/${item.img}" alt="${item.title}" onclick="handleCardClick()">
                    <div class="card-body py-0">
                        <h5 class="card-title text-center mb-1 ">${item.title}</h5>
                        <p class="card-text text-center mb-1">number of downloaded:<span class="nbr-of-downloaded">${item.nbr_download}</span> category:<span class="category-of-card">${item.category}</span></p>
                        <button href="#" class="btn btn-primary" onclick="handleDownloadGame()" >DOWNLOAD</button>
                    </div>
                </div>
            </div>
        ` };
        }).join('');
          cardBox.innerHTML = cardsGames; 
          
    }
     drawGameCard(); 
/////////////////////////////////////////////// END ////////////////////////////////////////////////

//////////////////////////////////////// CRETING NUMBER OF PAGES //////////////////////////////////
//MADE PAGES BASED ON HOW MANY DATA YOU HAVE
    let numberofpages = (setdata)=>{
        let numberOfPages = Math.ceil(setdata.length/numberOfCardInMyUi);
        let pages = [] ; 
        for (let i = 1; i <= numberOfPages; i++) {
            pages.push(i);
        }
        return pages ;
    }
    let pages = numberofpages(data);
//END OF MADE PAGES BASED ON HOW MANY DATA YOU HAVE

//DRAW PAGES    
    function drawPages(pagess){
        let allPages = pagess.map((item)=>{
            return`
            <div class="btn btn-outline-light"  onclick="handlePage(${item})" id="btn${item}">${item}</div>
            `
        }).join('');
        btnGroup.innerHTML = allPages ;
    }
    drawPages(pages);
//DRAW PAGES   

//TAKE THE PAGE 1 AND MADE IT ACTIVE
    let activepage = ()=>{
    document.getElementById("btn1").style.backgroundColor = "#fff";
    document.getElementById("btn1").style.color = "#000";
    }
    activepage();
//END OF TAKE THE PAGE 1 AND MADE IT ACTIVE
/////////////////////////////////////// END ///////////////////////////////////////////////////

/////////////////////////////////// WHEN YOU CLICK ON PAGE /////////////////////////////////////
    let handlePage = (nbrOfpage)=>{
    //TAKE A LIST OF ARRAY BASED ON WHITCH PAGE YOU CLICKED
    let arrayofid = [];
        pages.map((etem1)=>{ 
            data.map((item)=>{      
                if(etem1 === nbrOfpage && item.id -1 <numberOfCardInMyUi*nbrOfpage && item.id-1>=(nbrOfpage-1)*numberOfCardInMyUi){
                arrayofid.push({id:item.id,
                                img:item.img,
                                title:item.title,
                                nbr_download:item.nbr_download,
                                category:item.category})
                };
            });
        }).join('');
    //END OF TAKE A LIST OF ARRAY BASED ON WHITCH PAGE YOU CLICKED
    
    //DISPLAY DATA BASED ON NEW ARRAY CALED ARRAYOFID
    let paages =  arrayofid.map((item)=>{
            return`
            <div class="col-lg-4 col-md-6 col-sm-6 " >
                <div class="card mb-2 mt-2 m-auto" >
                    <img src="images/${item.img}" alt="${item.title}" onclick="handleCardClick()">
                    <div class="card-body py-0">
                        <h5 class="card-title text-center mb-1 ">${item.title}</h5>
                        <p class="card-text text-center mb-1">number of downloaded:<span class="nbr-of-downloaded">${item.nbr_download}</span> category:<span class="category-of-card">${item.category}</span></p>
                        <button href="#" class="btn btn-primary" onclick="handleDownloadGame()" >DOWNLOAD</button>
                    </div>
                </div>
            </div>
        `;
        }).join('');
        cardBox.innerHTML = paages; 
    //END OF DISPLAY DATA BASED ON NEW ARRAY CALED ARRAYOFID

    //ACTIVE PAGE
    let activedatapage = ()=>{
        //FOR ACTIVE BACKGROUND COLOR #FFF
        let allOfButtonOfPages = document.querySelectorAll(".btn-outline-light");
        allOfButtonOfPages.forEach((item)=>{
            item.style.backgroundColor = "rgb(255 255 255 / 0%)";
            item.style.color = "#fff";
        });
        document.getElementById(`btn${nbrOfpage}`).style.backgroundColor = "#fff";
        document.getElementById(`btn${nbrOfpage}`).style.color = "#000";
    //END OF ACTIVE BACKGROUND COLOR #FFF

    window.scrollTo(0,420);
    }
    activedatapage()
    //ACTIVE PAGE
    }
///////////////////////////////////// END  //////////////////////////////////////////////////////


// WHEN I CLICK ON CARD 
let handleCardClick = ()=>{
    console.log("card its clicked");
}
// WHEN I CLICK ON CARD 

//WHEN I CLICK ON DAWNLOAD
let handleDownloadGame =()=>{
    console.log("download is clicked")
    
}
//WHEN I CLICK ON DAWNLOAD
