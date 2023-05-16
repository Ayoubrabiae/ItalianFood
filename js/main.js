const menuBtn = document.querySelector(".nav-menu");
const nav = document.querySelector("nav");
const discImgs = document.querySelectorAll(".discount .image");
const discTexts = document.querySelectorAll(".discount .text");

const ordering = (textsArr) => {
  textsArr.forEach((e, i) => {
    if (i % 2 !== 0) {
      e.classList.add("minorder");
    }
  });
};

// const scrolling = (textsArr, imgsArr) => {
//   textsArr.forEach((e, i) => {
//     e.style.opacity = "0";
//     if (i % 2 !== 0) {
//       e.style.margin = "0 0 0 -40em";
//     } else {
//       e.style.margin = "0 -40em 0 0";
//     }
//   });
//   imgsArr.forEach((e, i) => {
//     e.style.opacity = "0";
//     if (i % 2 !== 0) {
//       e.style.margin = "0 -40em 0 0";
//     } else {
//       e.style.margin = "0 0 0 -40em";
//     }
//   });
// };

// const scrolAct = (textsArr, imgsArr, i) => {
//   textsArr[i].style.cssText = "margin: 0; opacity: 1";
//   imgsArr[i].style.cssText = "margin: 0; opacity: 1";
// };

// scrolling(discTexts, discImgs);
// let ofsetTopArr = [];
// let heightArr = [];
// let eventPlace = [];
// setTimeout(() => {
//   discImgs.forEach((e) => {
//     ofsetTopArr.push(e.offsetTop);
//   });
//   discImgs.forEach((e) => {
//     heightArr.push(e.offsetHeight);
//   });
//   for (i = 0; i < ofsetTopArr.length; i++) {
//     eventPlace.push(ofsetTopArr[i] + heightArr[i] - window.innerHeight);
//   }
//   window.onscroll = () => {
//     eventPlace.forEach((num, index) => {
//       if (window.scrollY > num) {
//         scrolAct(discTexts, discImgs, index);
//       } else {
//         scrolling(discTexts, discImgs);
//       }
//     });
//   };
// }, 100);

ordering(discTexts);
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("nav-menu-onclick");
  nav.classList.toggle("active");
});
