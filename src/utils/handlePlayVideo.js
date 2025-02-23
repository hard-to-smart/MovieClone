export const handlePlayVideo = async (video) => {
    if (temp) {
      const response = await axios.get(video(temp));
      console.log(
        response.data.results.find((result) => result.type === "Trailer")
      );
      const videoKey = response.data.results.find(
        (result) => result.type === "Trailer"
      );
      const result = getVideoUrl(videoKey?.key);
      isVideoClicked(!videoClicked);
      console.log(result);
      setVideoUrl(result);
    }
  };