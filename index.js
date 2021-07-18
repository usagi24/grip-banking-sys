var targetpageButton = [];
var count = 1;
var myNavBar = document.querySelector('.navbar');
var features = document.querySelectorAll('.features-col');
var socialIcons = document.querySelector('footer');
targetpageButton = document.querySelectorAll('.btn');


window.addEventListener('scroll', function() {

  if ( window.scrollY >= 10 ) {
    myNavBar.classList.add('navbarscroll');
  }
  else {
    myNavBar.classList.remove('navbarscroll');
  }
});

document.querySelector('.navbar-toggler').addEventListener('click', function(){
  count++;
  if(count % 2 == 0 || window.scrollY >= 10) {
    myNavBar.classList.add('navbarscroll');
  }

  else {
    myNavBar.classList.remove('navbarscroll');
  }
});


for(var i = 0; i < 2; i++) {
  targetpageButton[i].addEventListener('click', function(){
    window.location.href = "payment.html";
  });
}
