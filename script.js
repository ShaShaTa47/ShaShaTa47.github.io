document.addEventListener("DOMContentLoaded", () => {
    for (let index = 1; index < 5; index++) {
        document.getElementById(index+'nav-link').addEventListener('mouseover', (event) => {
            document.getElementById(index+'navtit').style.color='#64ffda'
        });
        document.getElementById(index+'nav-link').addEventListener('mouseout', (event) => {
            document.getElementById(index+'navtit').style.color='#a8b2d1'
        });
        
    }

    window.addEventListener("scroll", function(){
        let Navbar = document.getElementById('navbartag');
        if(window.pageYOffset > 100){
            Navbar.classList.add("navbar-scroll");
        }else{
            Navbar.classList.remove("navbar-scroll");
        }
    });
    
});