let currentSong = 1;
let songsList = [];

const title = document.querySelector("h1");
const musicInput = document.querySelector("input");
const labelInput = document.querySelector("label");
const player = document.querySelector("audio");
const previousSongButton = document.querySelector("#prev");
const playSongButton = document.querySelector("#play");
const stopSongButton = document.querySelector("#stop");
const nextSongButton = document.querySelector("#next");

function addSongs(event) {
  // pegar nossa músicas
  // guardar as músicas em uma variável
  songsList = event.target.files;
  // começar a tocar a primeira música
  playSong();
}

function playSong() {
  // pegar o nome da musica e colocar no h1 do HTML
  title.innerText = songsList[currentSong - 1].name;
  // colocar a primeira música dentro da tag audio para começar a toca-la
  const musicURL = URL.createObjectURL(songsList[currentSong - 1]);
  player.setAttribute("src", musicURL);
  player.play();
  // mudar o icone do botao play para o icone pause
  playSongButton.innerText = "⏸";
  labelInput.style.display = "none";

  playSongButton.onclick = pauseSong;
}

function pauseSong() {
  // pausar a música
  player.pause();
  // mudar o icone de pause para play
  playSongButton.innerText = "▶";
  // permitir que ao clicar novamente a música volte a tocar
  playSongButton.onclick = continueSong;
}

function continueSong() {
  player.play();

  playSongButton.innerText = "⏸";

  playSongButton.onclick = pauseSong;
}

function stopSong() {
  player.pause();
  player.currentTime = 0;
  playSongButton.innerText = "▶";
}

function nextSong() {
  currentSong = currentSong + 1;

  if (currentSong > songsList.length) {
    currentSong = 1;
  }

  playSong();
}

function previousSong() {
  currentSong = currentSong - 1;

  if (currentSong < 1) {
    currentSong = songsList.length;
  }

  playSong();
}

musicInput.onchange = addSongs;
stopSongButton.onclick = stopSong;
nextSongButton.onclick = nextSong;
previousSongButton.onclick = previousSong;

console.log(2 > 0);
