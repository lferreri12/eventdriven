var intervalId = 0;

function start(){
    var image = document.getElementById("memer");

    intervalId = setInterval(function(){
        var changeX = getRandomNumber();
        var changeY = getRandomNumber();

        image.style.left = changeX + "px";
        image.style.top = changeY + "px";

        console.log("x=" + changeX);
        console.log("=" + changeY);
    }, 1000);
}

function getRandomNumber(){
    return Math.floor(Math.random() * 1000)
}


function stop(){
    clearInterval(intervalId);

}