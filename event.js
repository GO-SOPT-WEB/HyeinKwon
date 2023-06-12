import MyMenus from "./data.js";
const HIDDEN_CLASS = "hidden";

// 데이터를 카테고리별로 나누기
function filterCategory(filterdId) {
  // return filterdId === "all"
  //   ? MyMenus
  //   : MyMenus.filter((menu) => menu.category === filterdId);
  switch (filterdId) {
    case "all":
      return MyMenus;
    case "salad":
      return MyMenus.filter((menu) => menu.category === "salad");
    case "sandwich":
      return MyMenus.filter((menu) => menu.category === "sandwich");
    case "side":
      return MyMenus.filter((menu) => menu.category === "side");
  }
}

// 버튼이 체크되어있는지 확인
function isChecked(checkbox) {
  const { checked, id } = checkbox;
  if (checked) {
    showCategory(checkbox);
    showCard(id);
  } else {
    discardCategory(checkbox);
    hiddenCard(id);
  }
}
const checkbox = document.querySelectorAll("input");
checkbox.forEach((data) => {
  data.addEventListener("change", function (event) {
    isChecked(event.target);
  });
});

// 상위 카테고리 선택된 부분 보여주기
const all = document.querySelector(".all");
const salad = document.querySelector(".salad");
const sandwich = document.querySelector(".sandwich");
const side = document.querySelector(".side");

// 체크박스 체크하면 선택된 카테고리 표시
function showCategory(checkbox) {
  switch (checkbox.id) {
    case "all":
      all.classList.remove(HIDDEN_CLASS);
      hiddenCard("all");
      break;
    case "salad":
      salad.classList.remove(HIDDEN_CLASS);
      hiddenCard("salad");
      break;
    case "sandwich":
      sandwich.classList.remove(HIDDEN_CLASS);
      hiddenCard("sandwich");
      break;
    case "side":
      side.classList.remove(HIDDEN_CLASS);
      hiddenCard("side");
      break;
  }
}

//체크박스 해제하면 선택된 상위 카테고리 삭제
function discardCategory(checkbox) {
  switch (checkbox.id) {
    case "all":
      all.classList.add(HIDDEN_CLASS);
      hiddenCard("all");
      break;
    case "salad":
      salad.classList.add(HIDDEN_CLASS);
      hiddenCard("salad");
      break;
    case "sandwich":
      sandwich.classList.add(HIDDEN_CLASS);
      hiddenCard("sandwich");
      break;
    case "side":
      side.classList.add(HIDDEN_CLASS);
      hiddenCard("side");
      break;
  }
}

//상단 태그에서 엑스버튼 눌렀을 때 카드 사라자기
function xbtnhiddenCard(filterdId) {
  const hiddenBtn = filterdId.parentElement;
  handleCheckbox(filterdId.className);

  hiddenBtn.classList.add(HIDDEN_CLASS);
  hiddenCard(filterdId.className);
}

//카드 x 안에 카드 사라지게 하는 기능 추가
const navClick = document.querySelector(".nav_click");
navClick.addEventListener("click", function (e) {
  xbtnhiddenCard(e.target);
});

//상단 태그에서 엑스버튼 눌렀을 때 체크박스의 체크 사라지기
function handleCheckbox(checkId) {
  const checkbox = document.getElementById(`${checkId}`);
  if (checkbox.checked) {
    checkbox.checked = false;
  }
}

//카드 만들기
function makeCard(data) {
  const newOne = JSON.parse(localStorage.getItem("new"));
  if (newOne) {
    MyMenus.push({
      ...newOne,
      category: "sandwich",
      img: "./assets/sandwichsalmon.jpg",
    });
  }

  const cardArticle = document.createElement("article");
  cardArticle.classList.add("card", "slideUp", data.category);

  cardArticle.innerHTML = `
    <h3>${data.name}</h3>
    `;

  const hashtagWrapper = document.createElement("div");
  hashtagWrapper.className = "hashtag_wrapper";
  const hashtagContainer = document.createElement("ul");
  hashtagContainer.className = "hashtag";

  cardArticle.appendChild(hashtagWrapper);
  hashtagWrapper.appendChild(hashtagContainer);

  data.hashtags.forEach((tag) => {
    const hashtag = document.createElement("li");
    hashtag.className = "hashtag_item";

    hashtagContainer.appendChild(hashtag);
    hashtag.innerText = tag;
  });

  const hashtagMore = document.createElement("button");
  hashtagMore.innerText = "+";
  hashtagMore.classList.add("hashtag_btn");
  hashtagWrapper.appendChild(hashtagMore);

  //태그 모달
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerText = `${data.hashtags}`;
  const modalWrapper = document.createElement("div");
  cardArticle.appendChild(modalWrapper);

  function modalOpener() {
    modalWrapper.appendChild(modal);
    modalWrapper.classList.toggle(HIDDEN_CLASS);
  }
  hashtagMore.addEventListener("click", modalOpener);

  const menuImg = document.createElement("img");
  menuImg.classList.add("stuff");
  menuImg.src = data.img;
  menuImg.alt = data.name;
  cardArticle.appendChild(menuImg);

  const mineBtn = document.createElement("img");
  mineBtn.src = "./assets/heartbtn.png";
  mineBtn.alt = "찜버튼";
  mineBtn.classList.add("minebtn");
  cardArticle.appendChild(mineBtn);
  return cardArticle;
}

function showCard(filterdId) {
  const filteredData = filterCategory(filterdId);
  const cardSection = document.querySelector(".card_section");

  filteredData.map((data) => {
    let cards = makeCard(data);
    cardSection.appendChild(cards);
  });
}

//카드 없애기
function hiddenCard(filterdId) {
  const cardArticle = document.querySelectorAll(".card");

  cardArticle.forEach((data) => {
    if (data.classList.contains(filterdId)) {
      data.remove();
    } else if (!data.classList.contains(filterdId)) {
      data.remove();
    }
  });
}

//화면 새로고침하면 실행
window.onload = function () {
  showCard("all");
};
