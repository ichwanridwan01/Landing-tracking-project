const prev = document.querySelector(".before");
const next = document.querySelector(".next");
const image = document.querySelector(".feedback-image");
const feed = document.querySelector(".main");

const user = [
  {
    name: "Tanya Sinclair",
    role: "Ux Enginer",
    feedback:
      " I ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now inthe job of my dreams and so excited about the future. ",
    image: "/images/image-tanya.jpg",
  },
  {
    name: "John Tarkpor",
    role: "Junior Front-end Developer",
    feedback:
      "If you want to lay the best foundation possible I d recommend taking this course.The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ",
    image: "/images/image-john.jpg",
  },
];

let slide = 0;

const navi = () => {
  if (slide > user.length - 1) {
    slide = 0;
  }
  image.innerHTML = `<img src="${user[slide].image}" alt="" />`;
  feed.innerHTML = `<h4>${user[slide].feedback}</h4> <h5><span class="bolder">${user[slide].name}</span>${user[slide].role}</h5>`;
  slide++;
};

navi();

prev.addEventListener("click", navi);
next.addEventListener("click", navi);
