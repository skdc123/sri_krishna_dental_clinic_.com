

    const counters = document.querySelectorAll('.counter');
    let scrollStarted = false;

    function scrollPage() {
        const scrollPos = window.scrollY;

        if (scrollPos > 50 && !scrollStarted) {
            countUp();
            scrollStarted = true;
        } else if (scrollPos < 50 && scrollStarted) {
            reset();
            scrollStarted = false;
        }
    }

    function countUp() {
        counters.forEach((counter) => {
            counter.innerText = '0';

            const updateCounter = () => {
                const target = +counter.getAttribute('data-target');
                const c = +counter.innerText;
                const increment = target / 100;

                if (c < target) {
                    counter.innerText = `${Math.ceil(c + increment)}`;
                    setTimeout(updateCounter, 75);
                } else {
                    counter.innerText = target;
                }
            };

            updateCounter();
        });
    }

    function reset() {
        counters.forEach((counter) => (counter.innerHTML = '0'));
    }

    window.addEventListener('scroll', scrollPage);
;