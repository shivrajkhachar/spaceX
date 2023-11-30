const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollstarted = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage)

function navToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling')
    menu.classList.toggle('show-menu');
}
function scrollPage(){
    const scrollPos = window.scrollY;

    if(scrollPos > 100 && !scrollstarted){
    countUp();
    scrollstarted = true;
    } else if (scrollPos < 100 && !scrollstarted){
        reset();
        scrollstarted = false;
    }
}

function countUp() {
counters.forEach( (counter)=> {
    counter.innerText = '0';

    const updatecounter = () => {

        const target = +counter.getAttribute('data-target');

        const c = +counter.innerText;

        const increment = target / 100;

        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`;

            setTimeout(updatecounter, 75);
        } else{
            counter.innerText = target;
        }
    };
    updatecounter();
})

}

function reset(){
    counters.forEach((counter) => (counter.innerHTML = '0'));
}
// countUp();