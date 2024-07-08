document.addEventListener('scroll', function() {
   const container = document.querySelector('.container');
   const lines = document.querySelectorAll('.line');
   
   let scrollY = window.scrollY;
   let windowHeight = window.innerHeight;
   
   if (scrollY > windowHeight / 3) {
       container.style.opacity = 1;
       lines.forEach((line, index) => {
           setTimeout(() => {
               line.classList.add('show');
           }, index * 500);
       });
   }
});
document.addEventListener('DOMContentLoaded', () => {
    const slide = document.querySelector('#slide ul');
    const clone = slide.innerHTML;
    slide.innerHTML += clone; // Duplicate the slide content for seamless transition

    const totalWidth = slide.offsetWidth / 2;

    let currentX = 0;
    const speed = 1; // Adjust speed as needed

    function animate() {
        currentX -= speed;
        if (currentX <= -totalWidth) {
            currentX = 0;
        }
        slide.style.transform = `translateX(${currentX}px)`;
        requestAnimationFrame(animate);
    }

    animate();
});

document.addEventListener('DOMContentLoaded', function() {
    var listItems = document.querySelectorAll('.team_wrap li');

    listItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            var bgImage = item.getAttribute('data-bg');
            item.style.setProperty('--bg-image', 'url(' + bgImage + ')');
            item.style.backgroundImage = 'var(--bg-image)';
        });

        item.addEventListener('mouseout', function() {
            item.style.backgroundImage = 'none';
        });
    });
});