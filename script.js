window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const item = document.getElementById('item')

    if (window.scrollY > 50) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


document.querySelector("#contactForm").addEventListener("submit", function(e) {
    e.preventDefault(); 
    success();         
});

function success() {
    document.getElementById("successText").innerHTML = " <b> Successfully submitted! ✅ </b>";
}


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('particles loaded!');
});