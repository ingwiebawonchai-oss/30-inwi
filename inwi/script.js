window.onload = function() {
    var container = document.getElementById('container');
    var circle = document.getElementById('circle');
    var img = document.getElementById('image');

    window.addEventListener('mousemove', function(e) {
        if (img) {
            var winCenterX = window.innerWidth / 2;
            var winCenterY = window.innerHeight / 2;
            var mouseDiffX = e.clientX - winCenterX;
            var mouseDiffY = e.clientY - winCenterY;

            var imgStrength = 50;
            var moveImgX = mouseDiffX / imgStrength;
            var moveImgY = mouseDiffY / imgStrength;

            img.style.transform = `translate(${moveImgX}px, ${moveImgY}px) rotateX(${-moveImgY / 10}deg) rotateY(${moveImgX / 10}deg)`;
        }

        if (container && circle) {
            var rect = container.getBoundingClientRect();
            var circleX = e.clientX - rect.left;
            var circleY = e.clientY - rect.top;

            circle.style.left = circleX + 'px';
            circle.style.top = circleY + 'px';

            var centerX = rect.width / 2;
            var centerY = rect.height / 2;
            var moveX = circleX - centerX; 
            var moveY = circleY - centerY;

            var strength = 50; 
            var x = moveX / strength;
            var y = moveY / strength;

            container.style.transform = `translate(${x}px, ${y}px) rotateX(${-y/2}deg) rotateY(${x/2}deg)`;
        }
    });

    if (container) {
        container.addEventListener('mouseleave', function() {
            container.style.transform = `translate(0px, 0px) rotateX(0deg) rotateY(0deg)`;
            if (circle) {
                circle.style.left = '50%';
                circle.style.top = '50%';
            }
        });
    }

    window.addEventListener('mouseout', function(e) {
        if (!e.relatedTarget || e.relatedTarget.nodeName === "HTML") {
            if (img) {
                img.style.transform = `translate(0px, 0px) rotateX(0deg) rotateY(0deg)`;
            }
        }
    });
};


function showorhide() {
    var text = document.getElementById('content');
    var circle = document.getElementById('circle');
    var info = document.getElementById('info');
    var container = document.getElementById('container');
    if (text) text.classList.toggle('hide');
    if (info) info.classList.toggle('wid');
    if (container) container.classList.toggle('hide');
    if (circle) circle.classList.toggle('expand');
}

async function closebanner() {
    var zoomin = document.getElementById('zoomin');
    if (!zoomin) return;
    zoomin.style.transition = "all 0.6s ease";
    zoomin.style.width = "0%";
    zoomin.style.opacity = "0";
    setTimeout(() => zoomin.remove(), 600);
}