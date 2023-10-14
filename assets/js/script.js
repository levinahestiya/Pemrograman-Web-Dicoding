// Tampilkan tombol saat halaman di-scroll
window.onscroll = function() {
    showScrollButton();
};
  
function showScrollButton() {
    var scrollButton = document.getElementById("scroll-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.classList.remove("hidden");
        scrollButton.classList.add("show");
    } else {
        scrollButton.classList.remove("show");
        scrollButton.classList.add("hidden");
    }
}

// Kembali ke atas ketika tombol diklik
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
  