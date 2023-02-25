const projects =  [

{ id : 1, 
 title : 'Project 4534', 
text : 'this is one awesome yaar ',
},

{ id : 2, 
 card_title : 'Project 4534', 
 card_text : 'this is one awesome yaar ',
}

]




 const permanent = document.getElementById("point");
window.addEventListener("DOMContentLoaded" , function() {
     
 
     const showinhtml = projects.map((project, index) =>{
        
        for (let i = 0; i < projects.length; i++) {

   return
    `
    <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${project.card_text}</p>
    </div>
  </div>
    `
};


})
permanent.innerHTML += showinhtml;


                });