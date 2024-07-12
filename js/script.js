document.addEventListener("scroll", function() {
    const lines = document.querySelectorAll('.line');
    const triggerHeight = window.innerHeight / 1.3; // 스크롤 트리거 높이

    lines.forEach((line, index) => {
        const lineTop = line.getBoundingClientRect().top;

        if (lineTop < triggerHeight) {
            setTimeout(() => {
                line.classList.add('show');
            }, index * 500); // 각 라인에 500ms 간격으로 지연시간을 줌
        } else {
            setTimeout(() => {
                line.classList.remove('show');
            }, index * 500); // 각 라인에 500ms 간격으로 지연시간을 줌
        }
    });
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

document.querySelectorAll('.buy-now').forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // 기본 동작 방지 (링크 클릭 시 페이지 이동 방지)

        // 클릭된 버튼에 애니메이션 클래스 추가
        button.classList.add('clicked');

        // 일정 시간 후 애니메이션 클래스 제거 (여기서는 300ms)
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 300);
    });
});


document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded event fired");
    const slideElements = document.querySelectorAll('.fade-slide');

    const slideInOnScroll = () => {
        console.log("slideInOnScroll function called");
        slideElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add('visible');
                console.log("Element made visible:", element);
            } else {
                element.classList.remove('visible');
                console.log("Element hidden:", element);
            }
        });
    };

    window.addEventListener('scroll', slideInOnScroll);
    slideInOnScroll(); // 페이지 로드 시 초기화
});
