function toggleBtn() {
    var btn = document.getElementById("btn");
    var light = document.getElementById("light");
    btn.classList.toggle("active");
    light.classList.toggle("on");

}

var buyButton = document.querySelector('.buy-button');


buyButton.addEventListener('click', function () {

    alert("product added to cart");
});


