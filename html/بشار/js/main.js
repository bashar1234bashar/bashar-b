var menu = document.getElementById('sidebar');
var code = document.getElementsByClassName('code'); // class
var toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
var myIndex = document.getElementById('myIndex'); // class

toggle.addEventListener('click', function(){

    this.classList.toggle('bi-brightness-high-fill');

    if(this.classList.toggle('bi-moon')){

        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '1s';
        menu.style.background = '#E8E8E8';
        menu.style.color = 'black';
        
       myIndex.style.background = '#F7F7F7';
       myIndex.style.color = 'black';
       myIndex.style.transition = '1s';
       for ( i = 0; i <= code.length; i++) {
        code[i].style.background = 'white';
        code[i].style.color = 'black';
        code[i].style.transition = '1s';
      }

    }else{
      
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '1s';
        menu.style.background = 'black';
        menu.style.color = 'white';

        myIndex.style.background = '#424242';
        myIndex.style.color = 'white';
        myIndex.style.transition = '1s';
        for ( i = 0; i <= code.length; i++) {
          code[i].style.background = 'black';
          code[i].style.color = 'white';
          code[i].style.transition = '1s';
        }
    
  }
  
});


function openNav() {
  if (document.getElementById("sidebar1").style.width == "250px") {
    document.getElementById("sidebar1").style.width = "0";
    document.getElementById("sidebar1").style.transition = '0s';
   // document.getElementById("main").style.marginRight = "0";

  }else{
    document.getElementById("sidebar1").style.width = "250px";
    document.getElementById("sidebar1").style.transition = '0s';

    //document.getElementById("main").style.marginRight = "250px";

  }
  }
  

      function myFunction() {
        var input, filter, ul, li, a, i;
          input = document.getElementById("mySearch");
            filter = input.value.toUpperCase();
              ul = document.getElementById("myMenu");
                li = ul.getElementsByTagName("li");
                  for (i = 0; i < li.length; i++) {
                      a = li[i].getElementsByTagName("a")[0];
                          if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                                li[i].style.display = "";
                                    } else {
                                          li[i].style.display = "none";
                                              }
                                                }
                                                }
                                                var sideNavWidth;
                                                var isMenuOpened;
                                                var mode = localStorage.getItem("mode") ?? "light";
                                                setMode();
                                                document.getElementsByTagName('body')[0].style.display = "block";
                                                
                                                EnlighterJS.init('pre', 'code', {
                                                    language: 'standard',
                                                    theme: 'enlighter',
                                                    indent: 4,
                                                    linenumbers: (window.location.pathname.split('/')[0] == "tutorials")? true: false,
                                                    //textOverflow: 'scroll'
                                                });



 /*
 ** Countdown Timer
 ** Video URL: https://www.youtube.com/watch?v=eFsiOTJrrE8
 */

// The End Of The Year Date
// 1000 milliseconds = 1 Second

let countDownDate = new Date("December 31, 2022 23:59:59").getTime();
// console.log(countDownDate);

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

/*
 ** Animate Width On Scrolling
 ** Video URL: https://youtu.be/sbIoIKI9FOc
 */

/*
 ** Increase Numbers On Scrolling
 ** Video URL: https://youtu.be/PLsUdgLnzgQ
 */

let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
  // Skills Animate Width
  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  // Stats Increase Number
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

/* ============== start copy code ==========*/
function CopyToClipboard(id)
    {
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    var tooltip = document.getElementsByClassName("tooltiptext");
    for ( i = 0; i <= tooltip.length; i++) {

          tooltip[i].innerHTML = "Copied " ; 
    }
    }
    function outFunc() {   
      var tooltip = document.getElementsByClassName("tooltiptext");
      for ( i = 0; i <= tooltip.length; i++) {
                 tooltip[i].innerHTML = "Copy";
      }
          }
/* ============== end copy code ==========*/
