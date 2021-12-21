const imgArray = [
    "images/photo_1.jpeg",
    "images/photo_2.jpeg",
    "images/photo_3.jpeg",
    "images/photo_4.jpeg",
    "images/photo_5.jpeg",
    "images/photo_6.jpeg",
    "images/photo_7.jpeg",
    "images/photo_8.jpeg",
    "images/photo_9.jpeg",
    "images/photo_10.jpeg",
];

const imgTagOne = document.getElementsByClassName("photo_container")[0];   // HTML collection
const imgTagTwo = document.getElementsByClassName("photo_container")[1];
const buttonTagOne = document.getElementById("img_button1");    // direct element tag
const buttonTagTwo = document.getElementById("img_button2");
const spanTagOne = document.getElementsByClassName("imgSrc")[0];
const spanTagTwo = document.getElementsByClassName("imgSrc")[1];

/* Image change in order */
let counter = 1;
const imgChangeInOrder = () => {
    if (counter === 10) {
        counter = 0;
        counterIncreasing();
    }else {
        counterIncreasing();
    }
}

const counterIncreasing = () => {
    imgTagOne.src = imgArray[counter];
    console.log("counter :", counter, "src :", imgTagOne.getAttribute('src'));
    counter++;
    let image_source = imgTagOne.getAttribute('src');
    spanTagOne.innerHTML = image_source.slice(7, image_source.length);
}
buttonTagOne.addEventListener("click", imgChangeInOrder);

/* Image change in random */
const changeImgRandom = () => {
    let randomNum = Math.floor(Math.random() * imgArray.length);
    if (imgTagTwo.getAttribute('src') === imgArray[randomNum]) {
        randomNum===9 ? randomNum = 0 : randomNum++;
        console.log("random number is same. so we add one.", randomNum)
    }
    imgTagTwo.src = imgArray[randomNum];
    let image_source = imgTagTwo.getAttribute('src');
    spanTagTwo.innerHTML = image_source.slice(7, image_source.length);
    console.log("random number:", randomNum, "image soucre:", imgTagTwo.getAttribute('src'));
}
buttonTagTwo.addEventListener("click", changeImgRandom)