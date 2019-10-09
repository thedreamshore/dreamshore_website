const myGallery = document.getElementById("myGallery");

var t = document.getElementById("modal-actions");
t.style.top = window.innerHeight / 2 + 'px';
// t.style.width = (window.innerWidth - 10) + 'px';

// console.log(clientLeft, left, 'hhhhhhhhhhhhh');

const arr = [
    {
        "text": "one",
        "img": "/img/rooms/1.png"
    },
    {
        "text": "two",
        "img": "/img/rooms/2.png"
    },
    {
        "text": "thh",
        "img": "/img/rooms/3.png"
    },
    {
        "text": "4d",
        "img": "/img/rooms/4.png"
    }
];
var currentArrayIndex = 0;

function myFunction(i) {
    currentArrayIndex = i;

    let modalImgDiv = document.getElementById('img-modal-div');
    while (modalImgDiv.firstChild) {
        modalImgDiv.removeChild(modalImgDiv.firstChild)
    }
    // create Img
    let modalImg = document.createElement('img');
    modalImg.src = arr[i].img;
    modalImg.className = 'w-100';
    modalImgDiv.appendChild(modalImg);

    let textDiv = document.createElement('div');
    textDiv.className = 'image-des-modal'
    textDiv.innerText = arr[i].text;
    modalImgDiv.appendChild(textDiv);

}
function btnManage(index) {
    let prevBtn = document.getElementById('prevBtn');
    let nextBtn = document.getElementById('nextBtn');
    index === 0 ? prevBtn.style.display = 'none' : prevBtn.style.display = 'inline-block';
    (index === arr.length - 1) ? nextBtn.style.display = 'none' : nextBtn.style.display = 'inline-block';
}
function imgChange(action) {
    // document.getElementById('prevBtn').style.display = 'none';
    if (action === 'PREV') {
        if (currentArrayIndex === 0) return;
        currentArrayIndex = currentArrayIndex - 1;
        btnManage(currentArrayIndex);
        imgChangeAction();
    }
    if (action === 'NEXT') {
        if (currentArrayIndex === arr.length - 1) return;
        currentArrayIndex = currentArrayIndex + 1;
        btnManage(currentArrayIndex);
        imgChangeAction()
    }

}

function imgChangeAction() {
    let modalImgDiv = document.getElementById('img-modal-div');
    while (modalImgDiv.firstChild) {
        modalImgDiv.removeChild(modalImgDiv.firstChild)
    }
    // create Img
    let modalImg = document.createElement('img');
    modalImg.src = arr[currentArrayIndex].img;
    modalImg.className = 'w-100';
    modalImgDiv.appendChild(modalImg);


    let textDiv = document.createElement('div');
    textDiv.className = 'image-des'
    textDiv.innerText = arr[currentArrayIndex].text;
    modalImgDiv.appendChild(textDiv);
}

for (let i = 0; i < arr.length; i++) {
    // id for img
    let imgId = 'img' + i;

    let imgDiv = document.createElement('div');
    imgDiv.className = 'col-md-4 mb-5 zoom';
    imgDiv.setAttribute('data-toggle', 'modal');
    imgDiv.setAttribute('data-target', '#exampleModal');
    imgDiv.setAttribute('title', 'Click to fullscreen');
    imgDiv.setAttribute('id', imgId);
    myGallery.appendChild(imgDiv);
    let img = document.createElement('img');
    img.className = 'w-100';
    img.src = arr[i].img;
    imgDiv.appendChild(img);

    let textDiv = document.createElement('div');
    textDiv.className = 'image-des'
    textDiv.innerText = arr[i].text;
    imgDiv.appendChild(textDiv)

    let clickMe = document.getElementById(imgId).addEventListener("click", function () {
        myFunction(i)
    });
}


// var myGallery = document.getElementById("myGallery");
// var arr = ["/img/rooms/1.png", "/img/rooms/2.png", "/img/rooms/3.png", "/img/rooms/4.png"];
// var currentArrayIndex = 0;

// function myFunction(i) {
//     currentArrayIndex = i;

//     let modalImgDiv = document.getElementById('img-modal-div');
//     while (modalImgDiv.firstChild) {
//         modalImgDiv.removeChild(modalImgDiv.firstChild)
//     }
//     // create Img
//     let modalImg = document.createElement('img');
//     modalImg.src = arr[i];
//     modalImg.className = 'w-100';
//     modalImgDiv.appendChild(modalImg);
// }
// function btnManage(index) {
//     let prevBtn = document.getElementById('prevBtn');
//     let nextBtn = document.getElementById('nextBtn');
//     index === 0 ? prevBtn.style.display = 'none' : prevBtn.style.display = 'inline-block';
//     (index === arr.length - 1) ? nextBtn.style.display = 'none' : nextBtn.style.display = 'inline-block';
// }
// function imgChange(action) {
//     // document.getElementById('prevBtn').style.display = 'none';
//     if (action === 'PREV') {
//         if (currentArrayIndex === 0) return;
//         currentArrayIndex = currentArrayIndex - 1;
//         btnManage(currentArrayIndex);
//         imgChangeAction();
//     }
//     if (action === 'NEXT') {
//         if (currentArrayIndex === arr.length - 1) return;
//         currentArrayIndex = currentArrayIndex + 1;
//         btnManage(currentArrayIndex);
//         imgChangeAction()
//     }

// }

// function imgChangeAction() {
//     let modalImgDiv = document.getElementById('img-modal-div');
//     while (modalImgDiv.firstChild) {
//         modalImgDiv.removeChild(modalImgDiv.firstChild)
//     }
//     // create Img
//     let modalImg = document.createElement('img');
//     modalImg.src = arr[currentArrayIndex];
//     modalImg.className = 'w-100';
//     modalImgDiv.appendChild(modalImg);
// }

// for (let i = 0; i < arr.length; i++) {
//     // id for img
//     let imgId = 'img' + i;

//     let imgDiv = document.createElement('div');
//     imgDiv.className = 'col-md-4 mb-5 zoom';
//     imgDiv.setAttribute('data-toggle', 'modal');
//     imgDiv.setAttribute('data-target', '#exampleModal');
//     imgDiv.setAttribute('title', 'Click to fullscreen');
//     imgDiv.setAttribute('id', imgId);
//     myGallery.appendChild(imgDiv);

//     let img = document.createElement('img');
//     img.className = 'w-100';
//     img.src = arr[i];
//     imgDiv.appendChild(img);

//     let clickMe = document.getElementById(imgId).addEventListener("click", function () {
//         myFunction(i)
//     });
// }