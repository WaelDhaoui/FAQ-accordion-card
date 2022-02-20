[...document.getElementsByTagName('li')].forEach(function(ele) {
    ele.addEventListener("click", function() {
        this.firstElementChild.classList.toggle("all");
        this.lastElementChild.classList.toggle("active");
    })
});