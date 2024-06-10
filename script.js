document.addEventListener("DOMContentLoaded", (event) => {
    const videoElement = document.getElementById("background-video");
    if (videoElement) {
      videoElement.muted = true; // Start with the video muted
      videoElement
        .play()
        .then(() => {
          console.log("Video is playing");
        })
        .catch((error) => {
          console.error("Error attempting to play video:", error);
        });
    } else {
      console.error("Video element not found");
    }
  });
  