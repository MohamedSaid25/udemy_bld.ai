

// Too Wrong Too pass Too Correct To Fail

/*

// create a brand new <span> element
const newSpan = document.createElement('span');
newSpan.textContent = 'This is span';
// select the first (main) heading of the page
const mainHeading = document.querySelector(".container");
// add the <span> element as the last child element of the main heading
console.log(mainHeading);
mainHeading.appendChild(newSpan);

*/
 


 let containerSelector = document.querySelector(".container"); 

// console.log(containerSelector);



// Fetch data of courses 


fetch("http://localhost:3000/course")
    .then(res => res.json())
    .then(json=>{
        json.map(data=>{
            console.log(data.title)
            containerSelector.appendChild(createDiv(data.title,data.image,data.instrutorName));
        })
    })



// create div for course


function createDiv(title,image,instrutorName){

    let d=document.createElement('div');
    d.classList.add("coursesImg");
    d.innerHTML=`
    
                
    <div class="coursephotot">
        
       <img src="${image}" >
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

