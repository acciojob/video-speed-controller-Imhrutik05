// 1 - first working on play and pause button
const playPauseBtn = document.getElementById('playPauseBtn');
const video = document.querySelector('video');

// adding eventListener on play/pause button
playPauseBtn.addEventListener('click', () => {
    // using a in-built boolean property (paused) to know whether the video is paused or not
    if(video.paused){
        video.play();
        playPauseBtn.textContent = '❚ ❚';
    } else {
        video.pause();
        playPauseBtn.textContent = '►';
    }
});


// 2 - Working on progress bar
const progressBar = document.getElementById('progress');
const progressFilled = document.querySelector('.progress__filled');

// update progress bar as the video plays
video.addEventListener('timeupdate', () => {
    // count the progress in number form
    const progress = (video.currentTime / video.duration) * 100;    // % of video played
    progressBar.value = progress;   // updating progressBar.value
    progressFilled.style.width = `${progress}%`;    // changes the width of div(which shows progress on UI)
});

// Allowing users to click on the progress bar to seek
progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * video.duration;
    video.currentTime = seekTime; // changing the video time
});


// 3 - skip buttons
const skipBackBtn = document.getElementById('skipBack');
const skipForwardBtn = document.getElementById('skipForward');

// skipBackBtn adding Event Listener
skipBackBtn.addEventListener('click', () => {
    video.currentTime -= 10;
});

// skipForwardBtn 
skipForwardBtn.addEventListener('click', () => {
    video.currentTime += 25;
});


// 4 - volume changing
const volumeInput = document.getElementById('volume');

volumeInput.addEventListener('input', () => {
    video.volume = volumeInput.value;
});


// 5 - playback speed
const playbackSpeedInput = document.getElementById('playbackSpeed');
const speedText = document.querySelector('.speedText');

playbackSpeedInput.addEventListener('input', () => {
    video.playbackRate = playbackSpeedInput.value;
    speedText.textContent = `${playbackSpeedInput.value}x`;
});











