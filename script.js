const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')


const songs = ['shayad', 'Mann Bharryaa']

let songIndex = 1

loadSong(songs[songIndex])

function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

// Play Song
function playSong() {
    audio.play()
    musicContainer.className = 'music-container play'
}

// Pause Song
function pauseSong() {
    audio.pause()
    musicContainer.className = 'music-container'
}

// Previous Song
function prevSong() {
    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
}

//Next Song
function nextSong() {
    songIndex++;

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong();
}


// Event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

prevBtn.addEventListener('click', () => {
    prevSong()
})

nextBtn.addEventListener('click', () => {
    nextSong()
})