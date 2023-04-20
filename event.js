import MyMenus from "./data.js";
const hiddenClass = "hidden";

// 데이터를 카테고리별로 나누기
function filterCategory(filterdId) {
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
  const is_checked = checkbox.checked;
  if (is_checked === true) {
    showCategory(checkbox);
    showCard(checkbox.id);
  } else {
    discardCategory(checkbox);
    hiddenCard(checkbox.id);
  }
}
const checkbox = document.querySelectorAll("input");
checkbox.forEach((data) => {
  console.log(data.id);
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
      all.classList.remove(hiddenClass);
      break;
    case "salad":
      salad.classList.remove(hiddenClass);
      break;
    case "sandwich":
      sandwich.classList.remove(hiddenClass);
      break;
    case "side":
      side.classList.remove(hiddenClass);
      break;
  }
}

//체크박스 해제하면 선택된 상위 카테고리 삭제
function discardCategory(checkbox) {
  switch (checkbox.id) {
    case "all":
      all.classList.add(hiddenClass);
      break;
    case "salad":
      salad.classList.add(hiddenClass);
      break;
    case "sandwich":
      sandwich.classList.add(hiddenClass);
      break;
    case "side":
      side.classList.add(hiddenClass);
      break;
  }
}

//상단 태그에서 엑스버튼 눌렀을 때 카드 사라자기
function xbtnhiddenCard(filterdId) {
  const hiddenBtn = filterdId.parentElement;
  handleCheckbox(filterdId.className);

  hiddenBtn.classList.add(hiddenClass);
  hiddenCard(filterdId);
}

const deleteBtn = document.querySelectorAll("button");
deleteBtn.forEach((data) => {
  data.addEventListener("click", function (event) {
    xbtnhiddenCard(event.target);
  });
});

//상단 태그에서 엑스버튼 눌렀을 때 체크박스의 체크 사라지기
function handleCheckbox(checkId) {
  const checkbox = document.getElementById(`${checkId}`);
  if (checkbox.checked === true) {
    checkbox.checked = false;
  }
}

//카드 만들기
function makeCard(data) {
  const cardArticle = document.createElement("article");
  cardArticle.classList.add("card");
  cardArticle.classList.add("slideUp");
  cardArticle.classList.add(data.category);

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
    modalWrapper.classList.toggle(hiddenClass);
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
    // console.log(cards);
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
