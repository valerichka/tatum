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

//// sort posts 


function openSortPopUp () {
    'use strict';
    
    var sortsPopUp = document.getElementById("sorts-popup");
    
    sortsPopUp.style.display = 'block';
    
}

function closeSortPopUp () {
    'use strict';
    
    var sortsPopUp = document.getElementById("sorts-popup");
    
    sortsPopUp.style.display = 'none';
    
}

function chooseSortMob(elem) {
    var a = document.getElementsByClassName('each-sort'),
        chosenValue = elem.innerHTML;
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('active')
    }
    elem.classList.add('active');
    
    document.querySelector('.sorts-btn').innerHTML = chosenValue + '<img loading="lazy" src="images/small-right-arrow.svg">';
}

function chooseSortPC(elem) {
    var a = document.getElementsByClassName('sort-li'),
        chosenValue = elem.innerHTML;
    for (i = 0; i < a.length; i++) {
        a[i].classList.remove('active')
    }
    elem.classList.add('active');
    
}

///// load more posts 

function loadMorereleases () {
    var a = document.getElementsByClassName('hidden-releases');
    for (i = 0; i < a.length; i++) {
        a[i].style.display = 'block';
    }
    
    document.querySelector('.load-more.more.release-bt').style.display = 'none';
    document.querySelector('.load-more.less.release-bt').style.display = 'inline-block';
}

function loadLessreleases() {
    var a = document.getElementsByClassName('hidden-releases');
    for (i = 0; i < a.length; i++) {
        a[i].style.display = 'none';
    }
    
    document.querySelector('.load-more.less.release-bt').style.display = 'none';
    document.querySelector('.load-more.more.release-bt').style.display = 'inline-block';
}


function loadMorenews () {
    var a = document.getElementsByClassName('hidden-news');
    for (i = 0; i < a.length; i++) {
        a[i].style.display = 'block';
    }
    
    document.querySelector('.load-more.more.news-bt').style.display = 'none';
    document.querySelector('.load-more.less.news-bt').style.display = 'inline-block';
}

function loadLessnews() {
    var a = document.getElementsByClassName('hidden-news');
    for (i = 0; i < a.length; i++) {
        a[i].style.display = 'none';
    }
    
    document.querySelector('.load-more.less.news-bt').style.display = 'none';
    document.querySelector('.load-more.more.news-bt').style.display = 'inline-block';
}



/*** email validation ***/

function ValidateEmail(inputEmail)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputEmail.value.match(mailformat))
{
document.getElementById('email-validation').remove();
    document.getElementById("thank-you").innerHTML = 'Thank you';  
    document.getElementById('thank-you').style.display='block';
}
else
{
document.getElementById('notVaild').style.display='block';
document.validationForm.emailInp.focus();
    
return false;
}
}


function ValidateEmail1(inputEmail)
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputEmail.value.match(mailformat))
{
document.getElementById('email-validation1').remove();
    document.getElementById("thank-you1").innerHTML = 'Thank you';  
    document.getElementById('thank-you1').style.display='block';
}
else
{
document.getElementById('notVaild1').style.display='block';
document.validationForm.emailInp.focus();
    
return false;
}
}


/** **/