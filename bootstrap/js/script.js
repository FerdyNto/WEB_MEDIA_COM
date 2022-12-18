let btnBackToTop = document.getElementById("btn-back-to-top");

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnBackToTop.style.display = "block";
    } else {
        btnBackToTop.style.display = "none";
    }
}

function backToTop(){
    document.body.scrollTop = 0;

    document.documentElement.scrollTop = 0
}