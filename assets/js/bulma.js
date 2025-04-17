document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
    // Select the button element
const bbutton = document.getElementById("bBlack");
const wbutton = document.getElementById("bWhite");
const element = document.getElementById("themeid");

// Add a click event listener
bbutton.addEventListener("click", function() {
    
    element.className = "theme-dark";
});

wbutton.addEventListener("click", function() {
    
    element.className = "theme-light";
});
    

    // Change the img src attribute
    //document.getElementById("imageid").src="../template/save.png";
    
  });