const sliderItems = [
    {
        desktopImg: 'images/desktop-image-hero-1.jpg',
        mobileImg: 'images/mobile-image-hero-1.jpg',
        title: 'Discover innovative ways to decorate',
        description: `We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.`
    },

    {
        desktopImg: 'images/desktop-image-hero-2.jpg',
        mobileImg: 'images/mobile-image-hero-2.jpg',
        title: 'We are available all across the globe',
        description: `With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`
    },

    {
        desktopImg: 'images/desktop-image-hero-3.jpg',
        mobileImg: 'images/mobile-image-hero-3.jpg',
        title: 'Manufactured with the best materials',
        description: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.`
    }
]
let item = 0;
let mobileSize = window.matchMedia('(max-width: 1000px)'); //This variable will be used to test the media query to load the correct img file;

console.log(window.innerWidth); //Need to test the width to change img from desktop to mobile;
document.addEventListener('DOMContentLoaded', (e) => {
    loadSliderItem(item);
})

const sliderControlLeft = document.querySelectorAll('[slider-ctrl="left"]');
sliderControlLeft.forEach(btn => {
    btn.addEventListener('click', sliderReverse);
})

const sliderControlRight = document.querySelectorAll('[slider-ctrl="right"]');
sliderControlRight.forEach(btn => {
    btn.addEventListener('click', sliderForward);
})

function sliderForward() {
    item == sliderItems.length-1 ? item = 0 : item++;
    loadSliderItem(item);
}

function sliderReverse() {
    item == 0 ? item = sliderItems.length-1 : item--;
    loadSliderItem(item);
}

function loadSliderItem(i) {
    const imgArea = document.querySelector('.slider__left.img-area');
    const titleArea = document.querySelector('.text-area h1');
    const descriptionArea = document.querySelector('.text-area p');

    if(mobileSize.matches) {  
        imgArea.style.background = `url('${sliderItems[i].mobileImg}')`;
        imgArea.style.backgroundSize = 'cover';
        imgArea.style.backgroundPosition = 'center';
    } else {
        imgArea.style.background = `url('${sliderItems[i].desktopImg}')`;
        imgArea.style.backgroundSize = 'cover';
        imgArea.style.backgroundPosition = 'center';
    }

    titleArea.innerHTML = sliderItems[i].title;
    descriptionArea.innerHTML = sliderItems[i].description;
}