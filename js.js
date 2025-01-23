let heroVideo = document.querySelector('.hero-video');
let nextBtn = document.querySelector('.next-btn');

let videoList = ['videos/hero-1.mp4', 'videos/hero-2.mp4', 'videos/hero-3.mp4', 'videos/hero-4.mp4'];

let i = 0;

nextBtn.addEventListener('click', () => {
    i += 1;

    heroVideo.src = videoList[i];

    if(i === 3){
        i = -1;
    }
})

let suto = setInterval(() => {
    nextBtn.click();
}, 8500)