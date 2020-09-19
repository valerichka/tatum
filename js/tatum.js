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
    
    var element = document.getElementById("collapseMenu");
    element.classList.toggle("opened");
    
    document.querySelector(".icon-menu").classList.toggle("active");
}

window.addEventListener('click', function() {
    'use strict';
    
    var element = document.getElementById("searchInp"),
        icon = document.getElementById("searchIcon");
    element.classList.add("disp-no");
    icon.classList.remove("active");
}, true);


/// hero banner slider

var slideIndex = 0;
// Tells us which slide we are on
var currentSlideIndex = 0,
    
    slideArray = document.querySelectorAll('.each-sm-news');


// Navigates to the next slide in the list
var nextSlide = function (){
	// Figure out what the next slide is
	var nextSlideIndex;
	// If we are at the last slide the next one is the first (zero based)
	if (currentSlideIndex === (slideArray.length - 1) ) {
		nextSlideIndex = 0;
	} else {
		// Otherwise the next slide is the current one plus 1
		nextSlideIndex = currentSlideIndex + 1;
	}	
	
	// Setup the next slide and current slide for animations
	document.getElementById("slide" + nextSlideIndex).style.left = "100%";
	document.getElementById("slide" + currentSlideIndex).style.left = 0;
	
	// Add the appropriate animation class to the slide
	document.getElementById("slide" + nextSlideIndex).setAttribute("class", "each-sm-news slideInRight");
	document.getElementById("slide" + currentSlideIndex).setAttribute("class", "each-sm-news slideOutLeft");
	
	// Set current slide to the new current slide
	currentSlideIndex = nextSlideIndex;
},
    
    autonext = setInterval(function () {
        'use strict';
        nextSlide();
        
    }, 5000);

// code merror


var i;
for (i = 0; i < document.querySelectorAll('.code-slide').length; i++) {
    var editor = CodeMirror.fromTextArea(document.getElementById('editor' + i + ''), {
        mode: "javascript",
        theme : "ayu-mirage",
        lineNumbers: true
    });
    editor.save();
}




//////// codes slider

var cSlide = 0,
    codeSlides = document.querySelectorAll('.code-slide'),
    codeNumSlides = codeSlides.length,

    //Functions!!
    currentSlideCode = function () {
        'use strict';
        var itemToShow = Math.abs(cSlide % codeNumSlides);
        [].forEach.call(codeSlides, function (el) {
            el.classList.remove('slideActive');
        });
        codeSlides[itemToShow].classList.add('slideActive');
    },
    codeNext = function() {
      cSlide++;
      currentSlideCode();
    },
    codePrev = function() {
      cSlide--;
      currentSlideCode();
    }

document.querySelector('#nextCode').addEventListener('click', function() {
    codeNext();
}, false);
document.querySelector('#previousCode').addEventListener('click', function() {
    codePrev();
}, false);


/// slider dots 

    
document.querySelector('#code0').addEventListener('click', function() {
    cSlide = 0;
    currentSlideCode();

    document.querySelector('#code0').classList.add("active");
}, false);

document.querySelector('#code1').addEventListener('click', function() {
    cSlide = 1;
    currentSlideCode();
    
    document.querySelector('#code1').classList.add("active");
}, false);

document.querySelector('#code2').addEventListener('click', function() {
    cSlide = 2;
    currentSlideCode();
    
    document.querySelector('#code2').classList.add("active");
}, false);

// add and remove class active

var dots = document.querySelectorAll('.codeDots li');
for (let i = 0; i < dots.length; i++) {
  dots[i].onclick = function() {
    var c = 0;
    while (c < dots.length) {
      dots[c++].className = '';
    }
    dots[i].className = 'active';
  };
}



/** **/




//////// what customer say slider

var sSlide = 0,
    saySlides = document.querySelectorAll('.each-say'),
    sayNumSlides = saySlides.length,
    sayDotSlides = document.querySelectorAll('.saysDots li'),
    sayNumDotSlides = sayDotSlides.length,
    sDots = 0,

    //Functions!!
    currentDotSlideSay = function () {
        'use strict';
        var itemToShow = Math.abs(sDots % sayNumDotSlides);
        [].forEach.call(sayDotSlides, function (el) {
            el.classList.remove('active');
        });
        sayDotSlides[itemToShow].classList.add('active');
    },
    sayDotNext = function() {
      sDots++;
      currentDotSlideSay();
    },
    sayDotPrev = function() {
      sDots--;
      currentDotSlideSay();
    },

currentSlideSay = function () {
        'use strict';
        var itemToShow = Math.abs(sSlide % sayNumSlides);
        [].forEach.call(saySlides, function (el) {
            el.classList.remove('slideActive');
        });
        saySlides[itemToShow].classList.add('slideActive');
    },
    sayNext = function() {
      sSlide++;
      currentSlideSay();
    },
    sayPrev = function() {
      sSlide--;
      currentSlideSay();
    }

document.querySelector('#nextSay').addEventListener('click', function() {
    sayNext();
    
    sayDotNext();



    
}, false);
document.querySelector('#previousSay').addEventListener('click', function() {
    sayPrev();
    sayDotPrev();
}, false);


/// slider dots 

    
document.querySelector('#say0').addEventListener('click', function() {
    sSlide = 0;
    sDots = 0;
    currentSlideSay();

    document.querySelector('#say0').classList.add("active");
}, false);

document.querySelector('#say1').addEventListener('click', function() {
    sSlide = 1;
    sDots = 1
    currentSlideSay();
    document.querySelector('#say1').classList.add("active");
}, false);

document.querySelector('#say2').addEventListener('click', function() {
    sSlide = 2;
    sDots = 2;
    currentSlideSay();
    document.querySelector('#say2').classList.add("active");
}, false);

// add and remove class active

var el = document.querySelectorAll('.saysDots li');
for ( let i = 0; i < el.length; i++) {
  el[i].onclick = function() {
    var c = 0;
    while (c < el.length) {
      el[c++].className = '';
    }
    el[i].className = 'active';
  };
}



/** **/


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
alert("You have entered an invalid email address!");
document.validationForm.emailInp.focus();
return false;
}
}


/** **/


///////////////////

function adjustcodeWidth() {
    'use strict';
    
    var codesWidth = document.querySelector('.CodeMirror-sizer').offsetWidth;
    
    
    var ele = document.getElementsByClassName('CodeMirror-sizer');
    for (var i = 0; i < ele.length; i++ ) {
        ele[i].style.minWidth = codesWidth + 20 +'px';
    }
    
    
    
    
}

setTimeout(adjustcodeWidth,1000);

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
///// adjust customer image size

function CusImg() {
    'use strict';
    
    var ImgWidth = document.querySelector('.cus-image').offsetWidth,
        ele = document.getElementsByClassName('cus-image');
    
    console.log('ImgWidth = ' + ImgWidth);
    
    for (var i = 0; i < ele.length; i++ ) {
        ele[i].style.height = ImgWidth +'px';
    }
    
}
CusImg();
window.addEventListener('resize', CusImg);

/////// adjust square dots position

function squarePos() {
    'use strict';
    
    if (window.innerWidth > 1349) {
        var firstSquare = document.querySelector('.customers-saying .square-first'),
            secSquare = document.querySelector('.customers-saying .square-sec');
        
        
        firstSquare.style.right = 0.5*window.innerWidth - 600 - 0.6*firstSquare.offsetWidth + 'px';
        secSquare.style.left = 0.5*window.innerWidth - 600 - 0.6*secSquare.offsetWidth + 'px';
        
    }
    
    console.log('ImgWidth = ' + window.innerWidth);
}
squarePos();



window.addEventListener('resize', squarePos);

/////// adjust code scroll bar position

function vsScrollPos() {
    'use strict';
    
        var vsScroll = document.querySelector('.CodeMirror-vscrollbar'),
            hsScroll = document.querySelector('.CodeMirror-hscrollbar');
        
        
        vsScroll.style.bottom = hsScroll.offsetHeight - 3 + 'px';
        
    
}
vsScrollPos();

/// news slider height

function smHeight() {
    'use strict';
    
        var smActive = document.querySelector('.each-sm-news.slideActive'),
            overHidden = document.querySelector('.over-hidden'),
            smWidth =  document.querySelector('.small-title'),
            smSlide =  document.querySelector('.each-sm-news'),
            colWidth = document.querySelector('#heroBanner > div > div > div > div:nth-child(1)');
            
        
    
    
    overHidden.style.width = colWidth.offsetWidth - 100 + 'px';
        
    
}
smHeight();

window.addEventListener('resize', smHeight);

/// sec button width

function secWidthFun() {
    'use strict';
    
        var secWidth = document.querySelector('.code-examples .mainSec-btns .sec-btn');
    
    console.log('secWidth' + secWidth.offsetWidth);
   
    document.querySelector('.code-examples .mainSec-btns .sec-btn').style.width = secWidth.offsetWidth  + 'px';
        
    
}
secWidthFun();

window.addEventListener('load', secWidthFun);
window.addEventListener('resize', secWidthFun);


/////////////// adjust news slider height


var MaxHeight;

function overHiddenHeight() {
    'use strict';
    
    MaxHeight = 0;
    
    var i;
    
        
    for (i = 0; i < document.querySelectorAll('.each-sm-news').length; i++) {
        
        
        if (document.querySelectorAll('.each-sm-news')[i].offsetHeight > MaxHeight) {
            MaxHeight = document.querySelectorAll('.each-sm-news')[i].offsetHeight;
        }
    }
    
 setTheHeight();       
    
}


function setTheHeight() {
    'use strict';
    
    document.querySelector('.over-hidden').style.height = MaxHeight + 'px';
        
    console.log('MaxHeight = ' + MaxHeight);
    
}
overHiddenHeight();


window.addEventListener('resize', overHiddenHeight);


////// clear search 


function keySearchUp() {
  var inputtx = document.getElementById("mobile-search");
    
    
    if (inputtx.value.length == 0) { 
         document.querySelector('.clear-search').classList.add('disp-no');
    } else {
         document.querySelector('.clear-search').classList.remove('disp-no');
    } 	
}

function clearSearch() {
  var inputtx = document.getElementById("mobile-search");
    
    inputtx.value = '';
    document.querySelector('.clear-search').classList.add('disp-no');
    
}


