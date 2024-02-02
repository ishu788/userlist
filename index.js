// This function is called when the Submit button is clicked
function addSong() {
    // Get the input value
    var songInput = document.getElementById("songInput");
    var song = songInput.value;

    // Check if the input is not empty
    if (song.trim() !== "") {
        // Create a new list item
        var li = document.createElement("li");

        // Create a span for the song text
        var songSpan = document.createElement("span");
        songSpan.appendChild(document.createTextNode(song));

        // Create a delete button
        var deleteButton = document.createElement("button");
        deleteButton.appendChild(document.createTextNode("Delete"));
        deleteButton.addEventListener("click", function () {
            // Call a function to delete the song
            deleteSong(li);
        });

        // Append elements to the list item
        li.appendChild(songSpan);
        li.appendChild(deleteButton);

        // Append the new item to the songList
        document.getElementById("songList").appendChild(li);

        // Clear the input field
        songInput.value = "";
    }
}

// Function to delete a song
function deleteSong(li) {
    li.remove();
}
