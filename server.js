// This function is called when the Submit button is clicked
function addSong() {
    // Get the input value
    var songInput = document.getElementById("songInput");
    var song = songInput.value;

    // Check if the input is not empty
    if (song.trim() !== "") {
        // Create a new list item
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(song));

        // Append the new item to the songList
        document.getElementById("songList").appendChild(li);

        // Clear the input field
        songInput.value = "";
    }
}
