/* alert , console */


function showSearchInp() {
    'use strict';
    
    var element = document.getElementById("searchInp"),
        icon = document.getElementById("searchIcon");
    element.classList.remove("disp-no");
    icon.classList.add("active");
}

function collapseClassToggle() {
    'use strict';
    
    var element = document.getElementById("collapseMenu");
    element.classList.toggle("opened");
}

window.addEventListener('click', function() {
    'use strict';
    
    var element = document.getElementById("searchInp"),
        icon = document.getElementById("searchIcon");
    element.classList.add("disp-no");
    icon.classList.remove("active");
}, true);


/// hero banner slider

var slide = 0,
    slides = document.querySelectorAll('.each-sm-news'),
    numSlides = slides.length,

    //Functions!!
    currentSlide = function () {
        'use strict';
        var itemToShow = Math.abs(slide % numSlides);
        [].forEach.call(slides, function (el) {
            el.classList.remove('slideActive');
        });
        
        slides[itemToShow].style.left = '0px'; 
        
        setTimeout(function(){
           slides[itemToShow].classList.add('slideActive'); 
        }, 100);
        
        resetInterval();
    },
    next = function () {
        'use strict';
        slide++;
        currentSlide();
    },
    prev = function () {
        'use strict';
        slide--;
        currentSlide();
    },
    resetslide = function () {
        'use strict';
        var elm = document.querySelector('.slideActive'),
            newone = elm.cloneNode(true),
            x = elm.parentNode.replaceChild(newone, elm);
    },
    resetInterval = function () {
        'use strict';
        clearInterval(autonext);
        autonext = setInterval(function () {
            slide++;
            currentSlide();
        }, 10000);
    },
    autonext = setInterval(function () {
        'use strict';
        next();
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

window.onresize = CusImg;

/////// adjust square dots position

function squarePos() {
    'use strict';
    
    if (window.innerWidth > 1349) {
        var firstSquare = document.querySelector('.customers-saying .square-first'),
            secSquare = document.querySelector('.customers-saying .square-sec');
        
        
        firstSquare.style.right = 0.5*window.innerWidth - 600 - 0.6*firstSquare.offsetWidth + 'px';
        secSquare.style.left = 0.5*window.innerWidth - 600 - 0.6*secSquare.offsetWidth + 'px';
        
    }
    
}
squarePos();

window.onresize = squarePos;
