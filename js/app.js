(function ($) {
  // const url = window.location.pathname.replace('/','');
  // console.log(url.replace(/.html/g, ''),'aa');

  // console.log($("#my-home"),'aa');
  // $("#my-home").addClass('active');

  // $("#header").ready(function(){
  // action goes here!!
  // console.log('jjjjjjjj');
  // console.log($("#my-home"),'aa');
  // $("#my-home").addClass('active');
  // });

  // // include header and footer
  // $("#header").load("component/header.html");
  // $("#footer").load("component/footer.html");

  window.onload = function () {
    // your code
  }

})(jQuery);
// myJavaScript
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

if(!isChrome) {
    document.getElementsByClassName('infinityChrome')[0].style.display = "none";
    document.getElementsByClassName('infinity')[0].style.display = "block";
}

// 
const bannerCount = 2;
let loadedBannerCount = 0;
let bodyDiv = document.getElementById('myBodyDiv');
let myLoadingDiv = document.getElementById('myLoadingDiv');
bodyDiv.style.display = "none";
myLoadingDiv.style.display = "block";

function onloadMe() {
  loadedBannerCount++;
  if (loadedBannerCount === bannerCount) {
    bodyDiv.style.display = "block";
    myLoadingDiv.style.display = "none";
    console.log(loadedBannerCount)
  }
}