function change(videoSource) {
  let vid2 = document.getElementById("vid1");

  vid2.src = videoSource;
  vid2.load();
  vid2.play();
}
