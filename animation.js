/*eu tentei sozinho
/eu tentei com chatgpt
/eu tentei com stackoverflow
/eu tentei com documentação
/fiquei tão desanimado que daqui a 3 anos eu vejo um tutorial no youtube para corrigir isso
*/
const moveButton = document.getElementById("moveButton");

function moveButtonToRandomPosition() {
    const maxWidth = window.innerWidth - moveButton.offsetWidth;
    const maxHeight = window.innerHeight - moveButton.offsetHeight;
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    moveButton.style.top = `${randomY}px`;
    moveButton.style.left = `${randomX}px`;
}

moveButton.addEventListener('click', () => {
    moveButton.style.opacity = '0';

    setTimeout(() => {
        moveButtonToRandomPosition();
        moveButton.style.opacity = '1';
    });
});
