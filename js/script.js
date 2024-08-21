document.addEventListener("scroll", function() {
    const lines = document.querySelectorAll('.line');
    const triggerHeight = window.innerHeight / 1.3; // 스크롤 트리거 높이

    lines.forEach((line, index) => {
        const lineTop = line.getBoundingClientRect().top;

        if (lineTop < triggerHeight) {
            setTimeout(() => {
                line.classList.add('show');
            }, index * 500); 
        } else {
            setTimeout(() => {
                line.classList.remove('show');
            }, index * 500); 
        }
    });
});
setInterval(function(){
    $("#slide ul").delay(2000);
    $("#slide ul").animate({
        marginLeft:'-1920px'
    })
    $("#slide ul").delay(2000);
    $("#slide ul").animate({
        marginLeft:'0px'
    })
})

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

document.addEventListener("DOMContentLoaded", function () {
    const banner = document.querySelector(".sub2_banner1 ul");
    let currentIndex = 0;

    function slide() {
        currentIndex = (currentIndex + 1) % 2; // 0 또는 1로 변환
        const transformValue = -currentIndex * 1920; // 슬라이드할 픽셀 값 계산
        banner.style.transform = `translateX(${transformValue}px)`;
    }

    setInterval(slide, 4000); // 3초마다 슬라이드
});



function toggleContent(element) {
    var notification = element.parentElement;
    var content = notification.querySelector('.content, .content1, .content2');
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function closeContent(event, element) {
    event.stopPropagation();
    var content = element.closest('.content,.content2, .content1');
    content.style.display = 'none';
}
