const projects = [

    {
        id: 1, 
        name : 'Project 1',
        img: "https://images.unsplash.com/photo-1670272506173-0b0be082a52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

    },
    {
        id: 2, 
        name : 'Project 2',
        img: "https://images.unsplash.com/photo-1670272506173-0b0be082a52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

    },
    {
        id: 3, 
        name : 'Project 3',
        img: "https://images.unsplash.com/photo-1670272506173-0b0be082a52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

    },
    {
        id: 4, 
        name : 'Project 4',
        img: "https://images.unsplash.com/photo-1670272506173-0b0be082a52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

    },
    {
        id: 5, 
        name : 'Project 5',
        img: "https://images.unsplash.com/photo-1670272506173-0b0be082a52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

    },


];

const permanent = document.getElementById("point");
window.addEventListener("DOMContentLoaded", function () {

    function double(proj) {
        return`
        <div class="card mb-4 m-auto" style="width: 18rem;">
    <img src=${proj.img} class="card-img-top" alt="...">
    <div class="card-body">
    <p class="card-text">${proj.name}</p>

    </div>
    </div>`
    
    };

    const showinhtml = projects.map(double);
    permanent.innerHTML = showinhtml;
    

});
