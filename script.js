document.addEventListener("DOMContentLoaded", () => {
    for (let index = 1; index < 5; index++) {
        document.getElementById(index+'nav-link').addEventListener('mouseover', (event) => {
            document.getElementById(index+'navtit').style.color='#64ffda'
        });
        document.getElementById(index+'nav-link').addEventListener('mouseout', (event) => {
            document.getElementById(index+'navtit').style.color='#a8b2d1'
        });
        
    }

    /*var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbartag").style.top = "0";
        } else {
            document.getElementById("navbartag").style.top = "-10px";
        }
        prevScrollpos = currentScrollPos;
    }*/

    window.addEventListener("scroll", function(){
        let Navbar = document.getElementById('navbartag');
        if(window.pageYOffset > 100){
            Navbar.classList.add("navbar-scroll");
        }else{
            Navbar.classList.remove("navbar-scroll");
        }
    });
    
});