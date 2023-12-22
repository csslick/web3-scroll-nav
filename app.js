const nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
    console.log(scrollY); 
    if (this.scrollY > 10) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
})