

const music = document.querySelector('audio');
const img = document.querySelector('img');
const play = document.getElementById('play');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const loop = document.getElementById('loop');



const songs = [{
    name: "song-1",
    title: "Woman",
    artist: "Doja Cat"
},

{
    name: "song-2",
    title: "Levitating",
    artist: "Dua Lipa"
},

{
    name: "song-3",
    title: "Arcade",
    artist: "Duncan Laurence"
},

{
    name: "song-4",
    title: "Hold On",
    artist: "Chord Overstreet"
}

];


let isPlaying = false;
// For playing the song
const playMusic = () => {

    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};

// For pausing the Song
const pauseMusic = () => {

    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

play.addEventListener('click', () => {
    isPlaying ? pauseMusic() : playMusic();
});



// CHANGING MUSIC

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    img.src = "image/" + songs.name + ".jpg";

};

songIndex = 0;
const nextSong = () => {

    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();

}


const prevSong = () => {

    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();

}
//for looping of songs

let count = 0;
const enableLoop = () => {
    if (count == 0) {
        music.loop = true;
        console.log(music.loop);
        loop.style.color = "#916BBF";
        playMusic();
        count = 1;
    }
    else {
        music.loop = false;
        console.log(music.loop);
        loop.style.color="#000000"
        count = 0;
    }
}

music.addEventListener('ended', nextSong);
next.addEventListener('click', nextSong);
prev.addEventListener('click', prevSong);
loop.addEventListener('click', enableLoop);

