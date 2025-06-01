let slides = document.querySelectorAll(".slide");
let counter = 0;
// console.log(slides);
slides.forEach((img, idx) => {
    img.style.left = `${idx * 100}%`
});

const goPrev = () => {
    if (counter == 0) {
        counter = slides.length - 1;
        slideImg();
    } else {
        counter--;
        slideImg();
    }
}

const goNext = () => {
    if (counter == slides.length - 1) {
        counter = 0;
        slideImg();
    } else {
        counter++;
        slideImg();
    }
}

const slideImg = () => {
    slides.forEach((img) => {
        img.style.transform = `translateX(-${counter * 100}%)`
    });
}