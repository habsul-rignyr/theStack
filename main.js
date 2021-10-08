function frameIt(x) {
  console.log(x);
  let epframe = document.getElementById("episodeFrame");
  epframe.src = `episodePages/${x}.html`;
}
