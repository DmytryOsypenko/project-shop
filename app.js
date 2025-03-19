let productsCountEl = document.getElementById("products-count");

let addToCartBtns = document.querySelectorAll(".btn2Prise");

// console.log(productsCountEl);
// console.log(addToCartBtns);

addToCartBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  })
);
// change like button state
let likeBtns = document.querySelectorAll(".IconImg2");
console.log(likeBtns);

likeBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    btn.classList.toggle("liked");
  })
);
