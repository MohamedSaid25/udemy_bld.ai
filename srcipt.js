

// Too Wrong Too pass Too Correct To Fail


let _containerSelector = document.querySelector("._container"); 

let Carousel_inner = document.querySelector(".carousel-inner"); 









// Fetch data of courses 

let course = [];
function getCoursesFromServe(cat){
   
   
   
   fetch("http://localhost:3000/course")
   .then(res => res.json())
   .then(json=>{
      
       json.map(data=>{
         
         if(data.category===cat)
          course.push(DrawCard(data.title,data.image,data.instrutorName,data.category));          
          
         } )
      })
      
      
      
   }

   function getCoursesPerRow(){

      let widthOfCurentScreen =  screen.width;


      //console.log(widthOfCurentScreen);
      let coursePerRow;

      if(widthOfCurentScreen<=700)
         coursePerRow = 1;
      else if(widthOfCurentScreen>700 && widthOfCurentScreen<=873)
      coursePerRow = 2;
      else if(widthOfCurentScreen>873 && widthOfCurentScreen<=1128)
         coursePerRow=3;
      else
      coursePerRow = 5;


      return coursePerRow;

   }
   
   function print(){
      
   const coursePerRow  = getCoursesPerRow();
    
   
   for(let i = 0;i<course.length;i+=coursePerRow){

      let new_slide=document.createElement('div');
      
      new_slide.classList.add("carousel-item");
      if(i===0)
      new_slide.classList.add("active");


      let addRow=document.createElement('div');
      addRow.classList.add("row");
   
      

      for(let j = i;j<i+coursePerRow;j++){

         let addCol = document.createElement('div');
         addCol.classList.add("col");
         
         addCol.appendChild(course[j]);

         addRow.appendChild(addCol);

      }

      new_slide.appendChild(addRow);

      Carousel_inner.appendChild(new_slide);


   }

/*
   
    
    for(let i=1 ; i<=course.length ; i++){

    
      
      
      addCol.appendChild(course[i-1]);
      
      addRow.appendChild(addCol);
      



        if(i % coursePerRow ===0){
         
         
         
        
         
         if(i===coursePerRow)
         new_slide.classList.add("active");
         
         
         
         Carousel_inner.appendChild(new_slide);


         let newRow=document.createElement('div');
         
         newRow=addRow;
         
         
        
         let lst = document.querySelector(".carousel-inner").lastChild; 


         
         lst.appendChild(newRow);
         
         
        }
      }*/
        
    
   }



// create div for course


function DrawCard(title,image,instrutorName,alter){

   let d=document.createElement('div');
   d.classList.add("coursesImg");
   
   d.innerHTML=`
   
               
   <div class="coursephotot">
       
      <img src="${image}" alt="${alter}">
   </div>
   
   <div class="course_details">
       
       <a href="">${title}</a>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

       
       <span class="instructor_name" style="display:block ; "> ${instrutorName}</span>
       <span class="rate_of_course">4.4</span>
       <span class="fa fa-star checked"></span>
       <span class="fa fa-star checked"> </span>
       <span class="fa fa-star checked"></span>
       <span class="fa fa-star checked"></span>
       <span class="fa fa-star"></span>
       <span class=" price_of_course">E£400.99</span>
 
   
   `;

   return d;
}



/// all you need is  getCoursesFromServe("what you need")


/*window.addEventListener('load', (event) => {
   
   
  // getCoursesFromServe("python");
});
*/


const holdExcel = document.querySelector('.excel');
const holdPython = document.querySelector('.python');
const holdWeb = document.querySelector('.web');
const holdAws = document.querySelector('.aws');
const holdDs = document.querySelector('.ds');
const holdDraw = document.querySelector('.draw');
const holdJs = document.querySelector('.js');
const holdSubmit=document.querySelector('.to_submit');
const holdSearchBar=document.querySelector('.searchBar');

function removeAllChildNodes(parent) {
   while (parent.firstChild) {
       parent.removeChild(parent.firstChild);
   }
}


//window.addEventListener("resize", myFunction);

window.addEventListener("resize", function (event) {

   removeAllChildNodes(Carousel_inner);
   print();
   course.length=0;
});

holdExcel.addEventListener('click', function (event) {

   
   removeAllChildNodes(Carousel_inner);
   
   //console.log("before " + course.length);
   
   
   getCoursesFromServe("excel");
   
   //console.log("after " + course.length);
   print();
   
   course.length=0;

});

holdPython.addEventListener('click', function (event) {

   removeAllChildNodes(Carousel_inner);
   
   //console.log("before " + course.length);
   
   
   getCoursesFromServe("python");
   
   //console.log("after " + course.length);
   print();
   
   course.length=0;

});

holdWeb.addEventListener('click', function (event) {

   
   removeAllChildNodes(Carousel_inner);
   
   //console.log("before " + course.length);
   
   
   getCoursesFromServe("web");
   
   //console.log("after " + course.length);
   print();
   
   course.length=0;

});

holdAws.addEventListener('click', function (event) {

   removeAllChildNodes(Carousel_inner);
   
   //console.log("before " + course.length);
   
   
   getCoursesFromServe("aws");
   
   //console.log("after " + course.length);
   print();
   
   course.length=0;

});

holdDs.addEventListener('click', function (event) {

   removeAllChildNodes(Carousel_inner);
   
   //console.log("before " + course.length);
   
   
   getCoursesFromServe("data");
   
   //console.log("after " + course.length);
   print();
   
   course.length=0;

});

holdDraw.addEventListener('click', function (event) {

   removeAllChildNodes(Carousel_inner);
   
   //console.log("before " + course.length);
   
   
   getCoursesFromServe("draw");
   
   //console.log("after " + course.length);
   print();
   
   course.length=0;

});

holdJs.addEventListener('click', function (event) {

   removeAllChildNodes(Carousel_inner);
   
   //console.log("before " + course.length);
   
   
   getCoursesFromServe("java");
   
   //console.log("after " + course.length);
   print();
   
   course.length=0;
});


const MainCategory = ['python','java','web','aws','excel','draw','data'];


holdSubmit.addEventListener('click', function (event) {

   
   removeAllChildNodes(Carousel_inner);
   
   event.preventDefault();
   
   let toSearch;

   const textTyped = holdSearchBar.value;

   for(let i=0;i<MainCategory.length;i++){
       
       if(textTyped.includes(MainCategory[i]))
       {
           toSearch=MainCategory[i];
           break;
       }
   }
   
   


   removeAllChildNodes(Carousel_inner);
   
   //console.log("before " + course.length);
   
   
   getCoursesFromServe(toSearch);
   
   //console.log("after " + course.length);
   print();
   
   course.length=0;


   holdSearchBar.value='';

});


