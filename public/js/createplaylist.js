const createPlaylistHandler = async (event) => {
    event.preventDefault();

    const play_name = document.querySelector('#playlist-name').value.trim();
    let songs = document.querySelector('#song-selector');


    songs = [...songs.selectedOptions].map(song => song.value);
    console.log(songs);

    if(play_name){
        const response = await fetch('/api/music/playlist', {
            method: 'POST',
            body: JSON.stringify({ play_name, songs }),
            headers: { 'Content-Type': 'application/json' },
        });
        if(response.ok){
            alert("Playlist Created!");
        }
    }
};

document.querySelector('#cpbutton').addEventListener('click', createPlaylistHandler)