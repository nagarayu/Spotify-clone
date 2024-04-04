console.log("Welcome to Spotify");
let songIndex =0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let mastersong = document.getElementById('mastersong');
let songItems = Array.from(document.getElementsByClassName('songItem'));



let songs = [
    {songName: "Phele bhi main", filePath: "songs/1.mp3", coverpath: "covers/2.jpg"},
    {songName: "pal", filePath: "songs/2.mp3", coverpath: "covers/3.jpg"},
    {songName: "Ek pyar ka nagma", filePath: "songs/3.mp3", coverpath: "covers/4.jpg"},
    {songName: "Perfect", filePath: "songs/4.mp3", coverpath: "covers/5.jpg"},
    {songName: "See you again", filePath: "songs/5.mp3", coverpath: "covers/6.jpg"},
    {songName: "Let me love you", filePath: "songs/1.mp3", coverpath: "covers/7.jpg"},
    {songName: "Senorita", filePath: "songs/1.mp3", coverpath: "covers/8.jpg"},
    {songName: "Wo ladki", filePath: "songs/1.mp3", coverpath: "covers/9.jpg"},
    {songName: "Phele bhi main", filePath: "songs/1.mp3", coverpath: "covers/10.jpg"},
    {songName: "Phele bhi main", filePath: "songs/1.mp3", coverpath: "covers/9.jpg"},
]
songItems.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
masterPlay.addEventListener('click', () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            gif.style.opacity =1;
        }
        else {
            audioElement.pause();
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
            gif.style.opacity =0;
        }
    });
    
    audioElement.addEventListener('timeupdate',  ()=>{
   console.log('timeupdate');
   progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
   console.log(progress);
   myProgressBar.value = progress;
}); 
myProgressBar.addEventListener('change',() =>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplays();
       
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        mastersong.innerText = songs[songIndex].songName;
        audioElement.currentTime =0;
        audioElement.play();
        gif.style.opacity =1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

        })
    })
    
    document.getElementById('next').addEventListener('click',()=>{
        if(songIndex>9){
            songIndex =0;
        }
        else{
            songIndex += 1;
        }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        mastersong.innerText = songs[songIndex].songName;
        audioElement.currentTime =0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
    document.getElementById('previous').addEventListener('click',()=>{
        if(songIndex<=0){
            songIndex =0;
        }
        else{
            songIndex -= 1;
        }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        mastersong.innerText = songs[songIndex].songName;
        audioElement.currentTime =0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })

