export async function handlePlayVideo(video, temp){
    if (temp) {
      const response = await axios.get(video(temp));
      const videoKey = response.data.results.find(
        (result) => result.type === "Trailer"
      );
      const result = getVideoUrl(videoKey?.key);
      isVideoClicked(!videoClicked);
      setVideoUrl(result);
    }

  }
