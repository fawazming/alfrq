(function() {
    "use strict";
    
    window.onload = function(){

        //Header Sticky
        const getHeaderId = document.querySelector(".navbar-area");
        if (getHeaderId) {
            window.addEventListener('scroll', event => {
                const height = 150;
                const { scrollTop } = event.target.scrollingElement;
                document.querySelector('#navbar').classList.toggle('sticky', scrollTop >= height);
            });
        }

        // Back to Top
        let progressPath = document.getElementById("progress-path");
        let progressWrap = document.getElementById("progress-wrap");
        let pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.webkitTransition = "none";
        progressPath.style.strokeDasharray = pathLength + " " + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.webkitTransition =
        "stroke-dashoffset 10ms linear";
        
        const onScollEvent = function (event) {
            let scroll = window.scrollY;
            let height = document.body.scrollHeight - window.innerHeight;
            let progress = pathLength - (scroll * pathLength) / height;
            progressPath.style.strokeDashoffset = progress;

            let offset = 50;
            if (window.scrollY > offset) {
                progressWrap.classList.add("active-progress");
            } else {
                progressWrap.classList.remove("active-progress");
            }
        };

        onScollEvent();
        window.onscroll = onScollEvent;
        progressWrap.onclick = function (event) {
            window.scroll({ top: 0, behavior: "smooth" });
            return false;
        };
        
        // Preloader
        const getPreloaderId = document.getElementById('preloader');
        if (getPreloaderId) {
            getPreloaderId.style.display = 'none';
        }

    };

    //Hero Slider
    var hero_sliderOne = new Swiper(".hero-slider-one", {
        loop: false,
        speed: 1500,
        slidesPerView: 1,
        fadeEffect: { crossFade: true },
        effect: "fade",
        autoplay: {
            delay: 4500,
            disableOnInteraction: false
        },
        spaceBetween: 25,
        autoHeight: true,
        centeredSlides: true,
        navigation: {
            nextEl: ".hero-next",
            prevEl: ".hero-prev",
        },
    });

    //Tour Slider
    var tour_slider = new Swiper(".tour-slider-one", {
        loop: false,
        speed: 1500,
        slidesPerView: 1,
        spaceBetween: 25,
        autoHeight: true,
        navigation: {
            nextEl: ".tour-next",
            prevEl: ".tour-prev",
        },
        breakpoints: {
            0: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            992: {
              slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            },
            1400: {
                slidesPerView: 4
            }
        },
    });
    var tour_slider = new Swiper(".tour-slider-two", {
        loop: false,
        speed: 1500,
        slidesPerView: 1,
        spaceBetween: 25,
        autoHeight: true,
        navigation: {
            nextEl: ".tour-next",
            prevEl: ".tour-prev",
        },
        breakpoints: {
            0: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 1.8
            },
            992: {
              slidesPerView: 2.2
            },
            1200: {
                slidesPerView: 2.8
            },
            1300: {
                slidesPerView: 3
            },
            1400: {
                slidesPerView: 3.2
            },
            1600: {
                slidesPerView: 3.6
            },
            1900: {
                slidesPerView: 4.3
            }
        },
    });

    //Brand Slider
    var brand_slider = new Swiper(".brand-slider", {
        loop: false,
        speed: 15000,
        freemode: false,
        spaceBetween: 45,
        simulateTouch: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: false
        },
        breakpoints:{
            0: {
                slidesPerView: 1.8
            },
            768: {
                slidesPerView: 2.5
            },
            992: {
                slidesPerView: 3.5
            },
            1200: {
                slidesPerView: 4.2
            },
            1400: {
                slidesPerView: 5
            }
        }
    });

    //Popular Place Slider
    var place_sliderOne = new Swiper(".city-slider-one", {
        loop: true,
        speed: 1500,
        spaceBetween: 25,
        navigation: {
            nextEl: ".city-next",
            prevEl: ".city-prev",
        },
        autoHeight: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false
        },
        breakpoints: {
            0: {
              slidesPerView: 1
            },
            576: {
              slidesPerView: 1.5
            },
            768: {
              slidesPerView: 2
            },
            992: {
              slidesPerView: 2.5
            },
            1200: {
                slidesPerView: 3.1
            },
            1300: {
                slidesPerView: 3.3
            },
            1400: {
                slidesPerView: 3.6
            },
            1600: {
                slidesPerView: 4.9
            }
        },
    });

    //Popular Place Slider
    var place_sliderOne = new Swiper(".place-slider-one", {
        loop: true,
        speed: 1500,
        spaceBetween: 25,
        navigation: {
            nextEl: ".place-next",
            prevEl: ".place-prev",
        },
        autoHeight: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false
        },
        breakpoints: {
            0: {
              slidesPerView: 1
            },
            576: {
              slidesPerView: 1.5
            },
            768: {
              slidesPerView: 2
            },
            992: {
              slidesPerView: 2.5
            },
            1200: {
                slidesPerView: 3
            },
            1300: {
                slidesPerView: 3.2
            },
            1400: {
                slidesPerView: 3.6
            },
            1600: {
                slidesPerView: 4.2
            },
            1920: {
                slidesPerView: 4.3
            }
        },
    });
    
    //Testimonial Slider
    var testimonial_sliderOne = new Swiper(".testimonial-slider-one", {
        loop: true,
        speed: 1500,
        spaceBetween: 5,
        autoHeight: true,
        fadeEffect: { crossFade: true },
        effect: "fade",
        slidesPerView: 1,
        navigation: {
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
        },
    });
    var testimonial_sliderTwo = new Swiper(".testimonial-slider-two", {
        loop: true,
        speed: 1500,
        spaceBetween: 15,
        autoHeight: true,
        navigation: {
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
        },
        breakpoints: {
            0: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            992: {
              slidesPerView: 2
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1920: {
                slidesPerView: 3,
                spaceBetween: 32
            }
        }
    });

    //Team Slider
    var team_sliderOne = new Swiper(".team-slider-one", {
        loop: true,
        speed: 1500,
        spaceBetween: 25,
        navigation: {
            nextEl: ".team-next",
            prevEl: ".team-prev",
        },
        breakpoints: {
            0: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            992: {
              slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
            }
        },
    });

    //Blog Slider
    var blog_sliderOne = new Swiper(".blog-slider-one", {
        loop: true,
        speed: 1500,
        spaceBetween: 25,
        navigation: {
            nextEl: ".blog-next",
            prevEl: ".blog-prev",
        },
        breakpoints: {
            0: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            992: {
              slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        },
    });
    var blog_sliderOne = new Swiper(".blog-slider-two", {
        loop: false,
        speed: 1500,
        spaceBetween: 25,
        // autoHeight: true,
        navigation: {
            nextEl: ".blog-next",
            prevEl: ".blog-prev",
        },
        breakpoints: {
            0: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            992: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1200: {
                slidesPerView: 2.8,
                spaceBetween: 20,
            },
            1300: {
                slidesPerView: 'auto',
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 'auto',
                spaceBetween: 40,
            },
            1600: {
                slidesPerView: 'auto',
                spaceBetween: 78,
            },
            1920: {
                spaceBetween: 85,
                slidesPerView: 'auto'
            }
        },
    });
    
    // Counter Js
    if ("IntersectionObserver" in window) {
        let counterObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let counter = entry.target;
                    let target = parseInt(counter.innerText, 10); // radix added
                    let step = target / 200;
                    let current = 0;
                    let timer = setInterval(function () {
                        current += step;
                        counter.innerText = Math.floor(current);
                        if (parseInt(counter.innerText, 10) >= target) { // radix added
                            clearInterval(timer);
                        }
                    }, 10);
                    counterObserver.unobserve(counter);
                }
            });
        });
        let counters = document.querySelectorAll(".counter");
        counters.forEach(function (counter) {
            counterObserver.observe(counter);
        });
    }

    //Gsap Mousemove Animation
    document.addEventListener("mousemove", mouseMoveFunc);
    let moveonmouse = gsap.utils.toArray(".moveContent");

    function mouseMoveFunc(e) {
        moveonmouse.forEach((circle, index) => {
            const depth = 65;
            const moveX = (e.pageX - window.innerWidth / 2) / depth;
            const moveY = (e.pageY - window.innerHeight / 2) / depth;
            index ++

            gsap.to(circle, {
                x: moveX * index,
                y: moveY * index,
            });
        });
    }

    //Title Animation With SplitText 
    let splitTitleLines = gsap.utils.toArray(".title-anim");

    splitTitleLines.forEach(splitTextLine => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: splitTextLine,
                start: 'top 90%',
                end: 'bottom 60%',
                scrub: false,
                markers: false,
                toggleActions: 'play none none none'
            }
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" })
        tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
    });

    //Text Reveal Animation
    window.addEventListener("load", function() {
        gsap.registerPlugin(CustomEase);
    
        // Wrap every letter
        const textRevealElements = document.querySelectorAll(".reveal-text");
    
        textRevealElements.forEach((element) => {
            element.innerHTML = element.textContent.replace(
                /([-A-Za-z0-9!$#%^&*@()_+|~=`{}\[\]:";'<>?,.\/]+)/g,
                '<div class="word">$1</div>'
            );
    
            let words = element.querySelectorAll(".word");
            words.forEach((word) => {
                word.innerHTML = word.textContent.replace(
                    /[-A-Za-z0-9!$#%^&*@()_+|~=`{}\[\]:";'<>?,.\/]/g,
                    "<div class='perspective'><div class='letter'><div>$&</div></div></div>"
                );
            });
    
            const letters = element.querySelectorAll(".letter");
    
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: element,
                    toggleActions: "restart none none reset"
                }
            });
            tl.set(element, { autoAlpha: 1 });
            tl.fromTo(
                letters,
                0.6, {
                    transformOrigin: "center",
                    rotationY: 90,
                    x: 30
                }, {
                    rotationY: 0.1,
                    x: 0,
                    stagger: 0.025,
                    ease: CustomEase.create("custom", "M0,0 C0.425,0.005 0,1 1,1 ")
                }
            );
        });
    });
    
    //Gsap Image Tilt Effect
    document.addEventListener("DOMContentLoaded", () => {
        const images = document.querySelectorAll(".tilt-img"); // Select all images

        images.forEach((img) => {
            img.addEventListener("mousemove", (e) => {
                const { width, height, left, top } = img.getBoundingClientRect();
                const x = (e.clientX - left - width / 2) / width * 2;
                const y = (e.clientY - top - height / 2) / height * 2;

                gsap.to(img, {
                    rotateY: x * 15, 
                    rotateX: y * -15, 
                    transformPerspective: 2000,
                    ease: "power2.out",
                    duration: 0.3,
                });
            });

            img.addEventListener("mouseleave", () => {
                gsap.to(img, {
                    rotateY: 0,
                    rotateX: 0,
                    duration: 0.5,
                    ease: "power2.out",
                });
            });
        });
    });

    //Gsap Reveal Shape Animation
    gsap.registerPlugin(ScrollTrigger);

    // Check if the elements exist on the page before proceeding
    const path = document.querySelector("#linePath");
    const scrollLine = document.querySelector("#scroll-line");

    if (path && scrollLine) {
        const pathLength = path.getTotalLength();
        
        // Set initial strokeDasharray and strokeDashoffset
        gsap.set(path, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength
        });

        // Animate the strokeDashoffset with ScrollTrigger
        gsap.to(path, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
                trigger: scrollLine, 
                start: "top center",
                end: "bottom center",
                scrub: true
            }
        });
    }

    //Move Element On Scroll
    if (document.querySelector(".move-left")) {
        gsap.to('.move-left', {
            xPercent: -70,
            ease: "none",
            scrollTrigger: {
                trigger: ".move-left",
                start: "top center",
                end: "bottom top",
                scrub: true
            }
        });
    }
    if (document.querySelector(".move-right")) {
        gsap.to('.move-right', {
            xPercent: 70,
            ease: "none",
            scrollTrigger: {
                trigger: ".move-right",
                start: "top center",
                end: "bottom top",
                scrub: true
            }
        });
    }
    if (document.querySelector(".move-top")) {
        gsap.to('.move-top', {
            yPercent: 70,
            ease: "none",
            scrollTrigger: {
                trigger: ".move-top",
                start: "top center",
                end: "bottom top",
                scrub: true
            }
        });
    }
    if (document.querySelector(".move-bottom")) {
        gsap.to('.move-top', {
            yPercent: -70,
            ease: "none",
            scrollTrigger: {
                trigger: ".move-top",
                start: "top center",
                end: "bottom top",
                scrub: true
            }
        });
    }

    // Animated Shape on Scroll 
    const shape_path = document.querySelector('.underline path');

    if (shape_path) {
        const shape_pathLength = shape_path.getTotalLength();
        
        gsap.set(shape_path, {
            strokeDasharray: shape_pathLength,
            strokeDashoffset: shape_pathLength
        });

        // Animate on scroll
        gsap.to(shape_path, {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".highlight-wrapper",
                start: "top 80%", // start when element is near viewport
                toggleActions: "play none none none"
            }
        });
    }

    
        // Quantity Counter
    var resultEl = document.querySelector(".resultSet"),
        plusMinusWidgets = document.querySelectorAll(".v-counter");

    // Adding event listeners to all plus and minus buttons
    for (var i = 0; i < plusMinusWidgets.length; i++) {
        plusMinusWidgets[i].querySelector(".minusBtn").addEventListener("click", clickHandler);
        plusMinusWidgets[i].querySelector(".plusBtn").addEventListener("click", clickHandler);
    }

    function clickHandler(event) {
        var countEl = event.target.parentNode.querySelector(".count");
        if (event.target.className.match(/\bminusBtn\b/)) {
            countEl.value = Math.max(0, Number(countEl.value) - 1); // Prevents going below zero
        } 
        else if (event.target.className.match(/\bplusBtn\b/)) {
            countEl.value = Number(countEl.value) + 1;
        }
        triggerEvent(countEl, "change");
    }
    function triggerEvent(el, type) {
        if ('createEvent' in document) {
            // Modern browsers (IE9+)
            var e = document.createEvent('HTMLEvents');
            e.initEvent(type, false, true);
            el.dispatchEvent(e);
        } else {
            // IE 8
            var e = document.createEventObject();
            e.eventType = type;
            el.fireEvent('on' + e.eventType, e);
        }
    }
    
    // Scrollcue
    scrollCue.init();

})();

    //Custom Cursor
    var cursor = document.querySelector('.cursor');
    var cursorinner = document.querySelector('.cursor-inner');
    var a = document.querySelectorAll('a');

    document.addEventListener('mousemove', function(e){
        var x = e.clientX;
        var y = e.clientY;
        cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
    });

    document.addEventListener('mousemove', function(e){
        var x = e.clientX;
        var y = e.clientY;
        cursorinner.style.left = x + 'px';
        cursorinner.style.top = y + 'px';
    });

    document.addEventListener('mousedown', function(){
        cursor.classList.add('click');
        cursorinner.classList.add('cursorinnerhover');
    });

    document.addEventListener('mouseup', function(){
        cursor.classList.remove('click');
        cursorinner.classList.remove('cursorinnerhover');
    });

    a.forEach(item => {
        item.addEventListener('mouseover', () => {
            cursor.classList.add('hover');
        });
        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });

try {

    // function to set a given theme/color-scheme
    function setTheme(themeName) {
        localStorage.setItem('tricia_theme', themeName);
        document.documentElement.className = themeName;
    }
    // function to toggle between light and dark theme
    function toggleTheme() {
        if (localStorage.getItem('tricia_theme') === 'theme-dark') {
            setTheme('theme-light');
        } else {
            setTheme('theme-dark');
        }
    }
    // Immediately invoked function to set the theme on initial load
    (function () {
        if (localStorage.getItem('tricia_theme') === 'theme-dark') {
            setTheme('theme-dark');
            document.querySelector('.slider-btn').checked = false;
        } else {
            setTheme('theme-light');
            document.querySelector('.slider-btn').checked = true;
        }
    })();

} catch (err) {}
