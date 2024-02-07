let img;

const addSongHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#song-input').value.trim();
    const artist = document.querySelector('#artist-input').value.trim();
    const album = document.querySelector('#album-input').value.trim();

    console.log(title, artist, album, img);
    if(title && artist && album){
        const response = await fetch('/api/music/addsong', {
            method: 'POST',
            body: JSON.stringify({ title, artist, album, img }),
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

var myWidget = cloudinary.createUploadWidget({
    cloudName: 'dmmvjuhbb', 
    uploadPreset: 'iddww3hx'}, (error, result) => { 
      if (!error && result && result.event === "success") { 
        img = result.info.url;
        console.log("Image to upload" + img);
        console.log('Done! Here is the image info: ', result.info); 
      }
    }
  )
  
  document.getElementById("upload_widget").addEventListener("click", function(){
      myWidget.open();
    }, false);
  

document.querySelector('.add-song-btn').addEventListener('click', addSongHandler);