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
// console.log(likeBtns);

likeBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    btn.classList.toggle("liked");
  })
);

// model more detals

let moreDetailsBtns = document.querySelectorAll(".btn1Prise");
let modal = document.querySelector(".modal");
let btnClose = document.querySelector(".btn-close");

function openModal() {
  modal.classList.remove("hide");
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

moreDetailsBtns.forEach((item) => item.addEventListener("click", openModal));

btnClose.addEventListener("click", closeModal);

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

// slider slick

$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  });
});

let decrementBtns = document.querySelectorAll(".decrement-button")[0];
let incrementBtns = document.querySelectorAll(".increment-button")[0];
let inputFields = document.querySelectorAll(".product-qantity input")[0];

function Counter(incrementBtns, decrementBtns, inputFields) {
  this.domRefs = {
    incrementBtns,
    decrementBtns,
    inputFields,
  };

  this.increment = function () {
    console.log(this);
    this.domRefs.inputFields.value = +this.domRefs.inputFields.value + 1;
  };
  this.decrement = function () {
    this.domRefs.inputFields.value = +this.domRefs.inputFields.value - 1;
    this.toggleButtonState();
  };

  this.toggleButtonState = function () {
    let count = this.domRefs.inputFields.value;
    this.domRefs.decrementBtns.disabled = count <= 1;
    this.domRefs.incrementBtns.disabled = count >= 10;
  };

  this.domRefs.incrementBtns.addEventListener(
    "click",
    this.increment.bind(this)
  );
  this.domRefs.decrementBtns.addEventListener(
    "click",
    this.decrement.bind(this)
  );

  this.toggleButtonState();
}

let counter1 = new Counter(incrementBtns, decrementBtns, inputFields);
console.log(counter1);
