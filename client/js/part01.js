const data = [
  {
    id: 1,
    src: "visual1.jpg",
    alt: "모던한 테이블과 화분의 조화를 표현한 공간",
  },
  {
    id: 2,
    src: "visual2.jpg",
    alt: "강렬한 의자의 색상과 따뜻한 느낌의 공간",
  },
  {
    id: 3,
    src: "visual3.jpg",
    alt: "호텔 라운지 느낌의 편안한 의자가 있는 공간",
  },
  {
    id: 4,
    src: "visual4.jpg",
    alt: "물방을 모양의 독특한 디자인의 의자들을 나열한 공간",
  },
];

// list가 유사배열이라 forEach를 적용할수없어 먼저 배열로 변환하는 함수
function makeArray(arrayLike) {
  return Array.from(arrayLike);
}

const navigation = getNode(".navigation");
const img = getNode("img");

function handler(e) {
  let target = e.target.closest("li");
  if (!target) return;

  let list = makeArray(navigation.children); // 자식요소 li 배열로 잡아주기
  let index = attr(target, "data-index");

  list.forEach((item) => removeClass(item, "is-active"));

  // target.classList.add("is-active")와 클래스 추가하는 방법은 같음
  addClass(target, "is-active"); // 만든 유틸함수 이용

  attr(img, "src", `./assets/part01/${data[index - 1].src}`); // 클릭하면 그 이미지의 data 인덱스 값으로 인해 메인이미지가 바뀜
  attr(img, "alt", data[index - 1].alt); // 클릭하면 메인 이미지에 대체텍스트도 변경하기
}

navigation.addEventListener("click", handler);
