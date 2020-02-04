document.querySelector('body').addEventListener('mousemove', bolamata);
function bolamata() {
    const mata = document.querySelectorAll('.mata');
    mata.forEach(function (mata) {
        let x = (mata.getBoundingClientRect().left) + (mata.clientWidth / 2);
        let y = (mata.getBoundingClientRect().top) + (mata.clientHeight / 2);
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = (radian * (180 / Math.PI) * -1) + 270;
        mata.style.transform = "rotate(" + rot + "deg)";
    })
}