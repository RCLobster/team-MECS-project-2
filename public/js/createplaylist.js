const createPlaylistHandler = async (event) => {
    event.preventDefault();

    const play_name = document.querySelector('#playlist-name').value.trim();
    let song_id = document.querySelector('#songid').value.trim();
    console.log(song_id);
};

document.querySelector('#cpbutton').addEventListener('click', addSongHandler)