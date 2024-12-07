let slideIndex = 0;
const slides = [
    'images/aboutpic.jpg',  // Gambar pertama
    'images/4_20220904105713_digiprint.jpg' // Gambar Kedua
];

function changeSlide(direction) {
    slideIndex += direction;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    document.querySelector('.hero').style.backgroundImage = `url('${slides[slideIndex]}')`;
}

// Ubah slide secara otomatis setiap 5 detik
setInterval(() => changeSlide(1), 4000);
