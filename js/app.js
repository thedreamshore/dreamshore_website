var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

if (!isChrome) {
  document.getElementsByClassName('infinityChrome')[0].style.display = "none";
  document.getElementsByClassName('infinity')[0].style.display = "block";
}


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