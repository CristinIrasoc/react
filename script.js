console. log("Hello from JavaScript!");
const songList =[
    {
        imageLink:"./assets/h.jfif",
        title: "Haunted",
        album:"Laura Les",
        duration: "1:42"
    },
    {
        imageLink:"./assets/gone.jpg",
        title: "Gone",
        album:"Rose",
        duration: "3:27"
    },
    {
    imageLink:"./assets/body.jfif",
    title: "Body",
    album:"Rosenfeld",
    duration: "2:27"
    },
];
window.onload = function(){
    const songWrapper = document.getElementById("songs-wrapper");
    songWrapper.innerHTML="";
   
    for(let i=0; i< songList.length; i++)
    {
        songWrapper.innerHTML += melodyComponent(i+1,songList[i]);
    }
}
const melodyComponent = function(index, songInfo)
{
    return ` <div class="melody">
    <span class="song-nr">
        ${index}
    </span>
    <img src="${songInfo.imageLink}" class="song-cover">
        
    </img>
    <span class="song-title">
        ${songInfo.title}
    </span>
    <span class="song-album">
      ${songInfo.album}
    </span>
    <span class="song-duration">
        ${songInfo.duration}
    </span>
</div>`
}