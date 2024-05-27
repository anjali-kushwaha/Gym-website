const burger = document.querySelector('.burger');
const navBar = document.querySelector('.nav-bar');

burger.addEventListener('click', () => {
        navBar.classList.toggle('active');
    });


const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;
   
function showImage(index) {
        images.forEach((img, idx) => {
            img.classList.toggle('active', idx === index);
        });
}
   
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
}
   
    
showImage(currentIndex);
setInterval(nextImage, 2000);


const joinButton = document.querySelector('.btn');
const joinForm = document.getElementById('join-form');
const cancelButton = document.querySelector('.cancel-btn');

joinButton.addEventListener('click', () => {
    joinForm.classList.toggle('hidden');
});

cancelButton.addEventListener('click', () => {
    joinForm.classList.add('hidden');
});
   
