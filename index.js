var icons = [];
var footerIcons = [];
var targetpageButton = [];
var count = 1;
var myNavBar = document.querySelector('.navbar');
var features = document.querySelectorAll('.features-col');
var socialIcons = document.querySelector('footer');
targetpageButton = document.querySelectorAll('.btn');

for(var i = 0; i < 3; i++) {
  icons[i] = features[i].querySelector('i');
  footerIcons = socialIcons.querySelectorAll('i');
}


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

if (window.screen.height == 812) {
  for(var i = 0; i < 3; i++) {
    icons[i].classList.add('fa-5x');
    footerIcons[i].classList.add('fa-3x');
  }
}

for(var i = 0; i < 2; i++) {
  targetpageButton[i].addEventListener('click', function(){
    window.location.href = "payment.html";
  });
}
