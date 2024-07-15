// --cách select bằng ID và Class :>
// <div id="product">
//     <span className="card__price">$29.99</span>
// </div>
// var product = document.getElementById('product');
// var productPrice = product.getElementsByClassName('card__price')[0].innerText;
// console.log(productPrice); // Xuất ra: $29.99
//--------------------------------------Bắt Đầu------------------------------------------------
const btn = document.querySelectorAll('.buynow')
btn.forEach(function (buynow,index) {
    buynow.addEventListener('click', function (event) {
        var btnitem = event.target
        var product = btnitem.parentElement
        var productImg = product.querySelector('img').src
        var productName = product.querySelector('h1').innerText
        var productPrice = product.getElementsByClassName('card__price')[0].innerText
        // console.log(productPrice,productImg,productName)
        addcart(productPrice,productImg,productName)
    })
})
function addcart(productPrice,productImg,productName){
    var addtr = document.createElement('tr')
    var trcontent = productPrice
    var cartTable = document.querySelector('tbody')
}


