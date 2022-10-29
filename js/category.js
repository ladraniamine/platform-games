
let sectioncategory = document.getElementById("section-category");


///////////////////////////////////////// DRAW SECTION CATEGORY ////////////////////////////////
let drawCategoryItems =()=>{
    let categoryitems = datacategory.map((item)=>{
        if(item.name == "all"){
            return `<div class="category-item category-item-active px-2 mb-2" id="category-item-${item.id}"  onclick="Handlecategoryclick(${item.id} )"> 
                        <h6 class="mb-0">${item.name}</h6>     
                    </div>`
        }else{

        return `<div class="category-item  px-2 mb-2" id="category-item-${item.id}"  onclick="Handlecategoryclick(${item.id})"> 
                    <h6 class="mb-0">${item.name}</h6>
                    <div class="item-icon"><div class="icon"><img src="images/slider and icons/${item.img}" alt="footbal-icon" class="img-fluid "></div></div>
                </div>`
            }
    }).join('');

    sectioncategory.innerHTML = categoryitems;

}

drawCategoryItems();
/////////////////////////////////////////  END  /////////////////////////////////////////////////////

//WHEN I CLICK ON ONE OF CATEGORY ITEM LIKE ACTION ADVENTURE ARCADE..........
let  Handlecategoryclick = ( id )=>{
     //active category item
     let allofCategoryItems = document.querySelectorAll(".category-item");

     allofCategoryItems.forEach((item)=>{
        item.classList.remove('category-item-active');
     });

     allofCategoryItems.forEach((item)=>{
        if (item.getAttribute("id") === `category-item-${id}` ) {
            
            item.classList.toggle("category-item-active")
        }

     })
     // end active category item

     //get name like action or arcade from datacategory
        let itemName =  datacategory.filter((item)=>{
                return item.id === id
            }).map((item)=>{
                return item.name ;
            })
    //get name like action or arcade from datacategory
            console.log(itemName[0]);
    // function that return the new feltring array based on name of category
    let nameOfcategory = ()=>{
        let newdata = [];
            if(itemName[0] === "all"){
                newdata = data ;
            }else{
                newdata =  data.filter((item)=>{
                    return item.category === itemName[0];
                })
        }
        return newdata ; 
    }
     let nameOfCategory = nameOfcategory();
     //return new nameOfCategory with new id
      nameOfCategory.forEach((item,index)=>{
        item.id = index+1 
     })
     //return new nameOfCategory with new id

     
     
///////////////////////////////// DRAW GAMES CARDS IN MY UI ////////////////////////////////////////

     function drawGameCard(){
        let cardsGames = nameOfCategory.map((item)=>{
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
///////////////////////////////// DRAW GAMES CARDS IN MY UI ////////////////////////////////////////










    
}
//WHEN I CLICK ON ONE OF CATEGORY ITEM LIKE ACTION ADVENTURE ARCADE..........









