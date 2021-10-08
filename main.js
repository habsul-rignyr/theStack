let lastclick;

function frameIt(x) {
  if (x != lastclick) {
    let epframe = document.getElementById("episodeFrame");
    epframe.src = `episodePages/${x}.html`;
    lastclick = x;
  }
}
