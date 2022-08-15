

// Too Wrong Too pass Too Correct To Fail


 let containerSelector = document.querySelector(".container"); 


// Fetch data of courses 

function getCoursesFromServe(checkCategory){

    fetch("http://localhost:3000/course")
    .then(res => res.json())
    .then(json=>{
        json.map(data=>{
            //console.log(data.title)
            if(checkCategory===data.category)
            containerSelector.appendChild(DrawCard(data.title,data.image,data.instrutorName,data.category));
        })
    })
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


window.addEventListener('load', (event) => {
    
    
    getCoursesFromServe("python");
});



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


holdExcel.addEventListener('click', function (event) {

    
    removeAllChildNodes(containerSelector);
    
    getCoursesFromServe("excel");

});

holdPython.addEventListener('click', function (event) {

    
    removeAllChildNodes(containerSelector);
    
    getCoursesFromServe("python");

});

holdWeb.addEventListener('click', function (event) {

    
    removeAllChildNodes(containerSelector);
    
    getCoursesFromServe("web");

});

holdAws.addEventListener('click', function (event) {

    
    removeAllChildNodes(containerSelector);
    
    getCoursesFromServe("aws");

});

holdDs.addEventListener('click', function (event) {

    
    removeAllChildNodes(containerSelector);
    
    getCoursesFromServe("data");

});

holdDraw.addEventListener('click', function (event) {

    
    removeAllChildNodes(containerSelector);
    
    getCoursesFromServe("draw");

});

holdJs.addEventListener('click', function (event) {

    
    removeAllChildNodes(containerSelector);
    
    getCoursesFromServe("java");

});


const MainCategory = ['python','java','web','aws','excel','draw','data'];


holdSubmit.addEventListener('click', function (event) {

    
    removeAllChildNodes(containerSelector);
    
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

    removeAllChildNodes(containerSelector);
    
    getCoursesFromServe(toSearch);

    holdSearchBar.value='';

});


