const body = document.querySelector("body"),
      navbar = document.querySelector(".navbar");

let lastScroll = 0;

// Saat halaman dimuat, periksa mode dari local storage
document.addEventListener('DOMContentLoaded', () =>{
    const gelap = localStorage.getItem('darkMode');
    if (gelap === 'enabled') {
        document.body.classList.add('gelap');
    }else{
        document.body.classList.remove('gelap');
    }
});

// Fungsi untuk toggle dark mode
function beralihMode() {
    const isDarkModeEnabled = document.body.classList.toggle('gelap');
    
    // Simpan status mode di local storage
    if (isDarkModeEnabled) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Fungsi NavBar
window.addEventListener("scroll", () =>{
    let currScroll = document.documentElement.scrollTop;

    if(currScroll > lastScroll){
        navbar.classList.add("hilang");
    }else{
        navbar.classList.remove("hilang");
    }

    if(currScroll > lastScroll){
        beralihMode.classList.add("hilang");
    }else{
        beralihMode.classList.remove("hilang");
    }

    lastScroll = currScroll <= 0 ? 0 : currScroll;
});