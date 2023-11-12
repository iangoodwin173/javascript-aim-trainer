const targetImage = new Image();
targetImage.src = 'assets/img/circle-target.jpg';
targetImage.style.position = 'absolute';

const playArea = document.getElementById('playarea');

function setRandomPosition() {
    const maxX = playArea.clientWidth - targetImage.width;
    const maxY = playArea.clientHeight - targetImage.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    targetImage.style.left = randomX + 'px';
    targetImage.style.top = randomY + 'px';
}

playArea.appendChild(targetImage);

setRandomPosition();

targetImage.addEventListener('click', function() {
    setRandomPosition();
});

targetImage.addEventListener('mouseover', function() {
    document.body.style.cursor = 'crosshair';
});

targetImage.addEventListener('mouseout', function() {
    document.body.style.cursor = 'default';
});
