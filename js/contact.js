/* alert , console */


function showSearchInp() {
    'use strict';
    
    var element = document.getElementById("searchInp"),
        icon = document.getElementById("searchIcon");
    element.classList.remove("disp-no");
    icon.classList.add("active");
    document.getElementById('searchInp').value = '';
}

function collapseClassToggle() {
    'use strict';
    
    var element = document.getElementById("collapseMenu"),
        icon = document.getElementsByClassName("icon-menu");
    element.classList.toggle("opened");
    
    
    
    for (var i = 0; i < icon.length; i++) { 
        icon[i].classList.toggle("not-active");
    }
    
}

window.addEventListener('click', function() {
    'use strict';
    
    var element = document.getElementById("searchInp"),
        icon = document.getElementById("searchIcon");
    element.classList.add("disp-no");
    icon.classList.remove("active");
}, true);


////// make navbar fixed 

function NavbarFixed() {
    'use strict';
    
    var codesWidth = document.querySelector('nav').offsetWidth;
    
    
    if (window.scrollY > 200) {
        document.querySelector('nav').classList.add('fixed-nav');
    } else {
        document.querySelector('nav').classList.remove('fixed-nav'); 
    }
    
}

window.addEventListener('scroll', NavbarFixed);


////// clear search 


function keySearchUp() {
  var inputtx = document.getElementById("mobile-search");
    
    
    if (inputtx.value.length == 0) { 
         document.querySelector('.clear-search').classList.add('disp-no');
        document.getElementById('sm-submit').setAttribute("type", "button");
    } else {
         document.querySelector('.clear-search').classList.remove('disp-no');
        document.getElementById('sm-submit').setAttribute("type", "submit");
    } 	
}

function clearSearch() {
  var inputtx = document.getElementById("mobile-search");
    
    inputtx.value = '';
    document.querySelector('.clear-search').classList.add('disp-no');
    
}

function btnSearchSubmit () {
    var inputtx = document.getElementById("searchInp");
    
    
    if (inputtx.value.length == 0) { 
         document.getElementById('lg-submit').setAttribute("type", "button");
    } else {
        document.getElementById('lg-submit').setAttribute("type", "submit");
    }
}

////// add class active to submenu parent 



var subMenu = document.getElementsByClassName("drop-menu");

for (var i = 0; i < subMenu.length; i++) { 
    subMenu[i].onclick = function () { 
        this.classList.toggle('active');
    }
}