const randomImgChoice = (() => {
  let value;
  return () => value ??= Math.floor(Math.random() * 3) + 1;
})();
function changeHeadshotImg1(){
    switch (randomImgChoice()) {
        case 1:
            document.getElementById("headshotimg").src = "images/kayak_49b.jpg";
            document.getElementById("aboutTextHeadshot").textContent = 'The Meltdown rapid on the 49 to Bridgeport section of the South Yuba.';
            break;
        case 2:
            document.getElementById("headshotimg").src = "images/kayak_bailey.jpg";
            document.getElementById("aboutTextHeadshot").textContent = 'The Supermax rapid on Bailey Canyon in Colorado.';
            break;
        case 3:
            document.getElementById("headshotimg").src = "images/kayak_merced.jpg";
            document.getElementById("aboutTextHeadshot").textContent = 'The Sasquatch rapid on the Park Boundry section of the Merced River.';
            break;
        default:
            break;
    }
};
function changeHeadshotImg2(){
    document.getElementById("headshotimg").src = "images/headshot.jpg";
    document.getElementById("aboutTextHeadshot").textContent = "";
};
  