// //aside navbar

// const nav=document.querySelector(".nav"),
//       navList=nav.querySelectorAll("li"),
//       totalNavList=navList.length;
//       allSection=document.querySelectorAll(".section"),
//       totalSection=allSection.length;

//       for(let i=0; i<totalNavList; i++){
//           const a=navList[i].querySelector("a");
//           a.addEventListener("click",function(){
//               //remove back sction class
//             for(let i=0; i<totalSection; i++){
//                 allSection[i].classList.remove("back-section");
//             }
//               for(let j=0; j<totalNavList; j++){
//                  if( navList[j].querySelector("a").classList.remove("active"));{
//                     // add back Selection
//                      allSection[j].classList.add("back-section");
//               }
//              navList[j].querySelector("a").classList.remove("active");
//               }

//               this.classList.add("active");
//               showSection(this);
//           })
//       }

//       function showSection(element){
//           for(let i=0; i<totalSection; i++){
//               allSection[i].classList.remove("active");
//           }
//           const target=element.getAttribute("href").split("#")[1];

//           document.querySelector("#"+target).classList.add("active")
//     }



//aside navbar

      const nav=document.querySelector(".nav"),
      navList=nav.querySelectorAll("li"),
      totalNavList=navList.length;

      for(let i=0; i<totalNavList; i++){
          const a=navList[i].querySelector("a");
          console.log(a)
      }



      const nav=document.querySelector(".nav"),
      navList=nav.querySelectorAll("li"),
      totalNavList=navList.length,
      allSection=document.querySelectorAll(".section"),
      totalSection=allSection.length;

      for(let i=0; i<totalNavList; i++){
          const a=navList[i].querySelector("a");
         a.addEventListener("click",function(){

             for(let j=0; j<totalNavList; j++){
                 if(navList[j].querySelector("a").classList.remove("active")){
                   // console.log("back-section" + navList[j].querySelector("a"))
                   allSection[j].classList.add("back-section");
                }
                 navList[j].querySelector("a").classList.remove("active");
             }
         this.classList.add("active");

         showSection(this);
        })
      }
         function showSection(element){
             for(let i=0; i< totalSection; i++){
                 allSection[i].classList.remove("active");
             }
             const target=element.getAttribute("href").split("#")[1];
             
             document.querySelector("#"+target).classList.add("active")
         }
 