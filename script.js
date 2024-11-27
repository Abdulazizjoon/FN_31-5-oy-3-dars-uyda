//1-misol
// let btn = document.querySelector('.btn')
// let body=document.querySelector('body')
// let randon = Math.trunc(Math.random() * 10000);
// let f=false
// for (let i = randon; i <1000; i*=2) {
// }

// console.log(randon);
// btn.addEventListener('click',function() {
//     body.style.backgroundColor=`#${randon}`
// })

//2-misol
// let p=document.querySelector('p')
// let btn1 = document.querySelector(".btn1");
// let btn2 = document.querySelector(".btn2");

// btn1.addEventListener('click',function() {
//     p.style.display='none'
// })
// btn2.addEventListener("click", function () {
//   p.style.display = "block";
// });

//4-misol

// setInterval(() => {
// let soat = new Date();
//     document.body.innerHTML = soat.toLocaleTimeString();
// }, 1000);

//5-misol
// let btn=document.querySelector('.btn')
// let arr = [
//   "Hayot o'zgarishlarga tayyor bo'lishni talab qiladi.",
//   "Yaxshi ish boshlashning eng yaxshi vaqti - hozir.",
//   "Hech qachon orzu qilishdan to'xtamang, chunki orzularsiz hayot bo'lmaydi.",
//   "Agar biron narsa qilishni istasangiz, unga intiling, boshqa hech narsa kerak emas.",
//   "Eng katta muvaffaqiyat - o'z o'zini anglashdir.",
// ];

// let ran = Math.trunc(Math.random() * 10)
// if (ran>5) {
//     Math.trunc((ran = ran / 2));
// }
// ran = Math.trunc(ran)
// btn.addEventListener('click',function() {
//     document.querySelector('.p').innerHTML=arr[ran]
// })
// console.log(ran);

//6-misol
// let body = document.querySelector("body");
// let btn = document.querySelector(".btn");
// let test = false;

// btn.addEventListener("click", function () {
//   if (test) {
//     body.style.backgroundColor = "#fff"; 
//   } else {
//     body.style.backgroundColor = "#000"; 
//   }

//   test = !test;
// });

// console.log(btn);


//8-misol
// let input = document.querySelector('input')
// let p = document.querySelector('.p')

// input.addEventListener('input', function () {
//     p.innerHTML=input.value.length
//     p.innerHTML+=input.value
// })

//9-misol hato
// let hide = document.querySelector(".hide");
// let btnAll = document.querySelectorAll(".btn");
// let test = false;

// hide.addEventListener("click", function () {
//   if (test === false) {
//     btnAll.forEach(function (btn) {
//       btn.style.display = "none";
//     });
//     test = true;
//   } else {
//     btnAll.forEach(function (btn) {
//       btn.style.display = "block";
//     });
//     test = false;
//   }
// });

//10-misol
// let p = document.querySelector('p')
// let random = Math.trunc(Math.random() * 10000);
// let test = Math.random()
// console.log(test);
// if (random<1000) {
//     random*=3
// }
// console.log(random);

// p.addEventListener('click', function () {
//     p.style.color=`#${random}`
// })
