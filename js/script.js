document.querySelector('.hamburger-menu')
.addEventListener('click',() => {
  document.querySelector('.navigation')
  .classList.toggle('change');
});


/*document.querySelector(".nav-list")
.addEventListener("click",e => {
  const el = e.target.parentElement;
/*  console.log(el); */
/*if(el.classList[0] === "nav-link") {
  el.nextElementSibling.classList.toggle ("change");
  el.classList.toggle("change");
}
});

*/
/*
if (addEventListener) {
document.querySelector('.hamburger-menu')
.addEventListener('click',() => {
  document.querySelector('.navigation')
  .classList.toggle('change');
})
} else {
  document.querySelector('.hamburger-menu')
  .addEventListener('on' + 'click',() => {
    document.querySelector('.navigation')
    .classList.toggle('change');
  }) 
}
; */
