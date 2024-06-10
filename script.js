document.addEventListener("DOMContentLoaded", (event) => {
    const videoElement = document.getElementById("background-video");
    const playButton = document.getElementById("play-button");
  
    function playVideoWithSound() {
      videoElement.muted = false; // Unmute the video
      videoElement.play()
        .then(() => {
          console.log("Video is playing with sound");
          playButton.style.display = 'none'; // Hide play button
        })
        .catch((error) => {
          console.error("Error attempting to play video with sound:", error);
        });
    }
  
    if (videoElement) {
      videoElement.muted = true; // Start with the video muted
      videoElement.play()
        .then(() => {
          console.log("Video is playing muted");
          playButton.style.display = 'block'; // Show play button
          playButton.addEventListener("click", playVideoWithSound);
        })
        .catch((error) => {
          console.error("Error attempting to play video:", error);
        });
    } else {
      console.error("Video element not found");
    }
  });
  