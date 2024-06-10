document.addEventListener("DOMContentLoaded", (event) => {
    const videoElement = document.getElementById("background-video");
    if (videoElement) {
      videoElement.muted = false; // Ensure the video is unmuted
      videoElement.play()
        .then(() => {
          console.log("Video is playing with sound");
        })
        .catch((error) => {
          console.error("Error attempting to play video with sound:", error);
        });
    } else {
      console.error("Video element not found");
    }
  });
  