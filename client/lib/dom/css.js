function addClass(node, className) {
  if (typeof node === "string") {
    node = getNode(node);
  }

  if (typeof className !== "string") {
    typeError("className 인자의 타입형식은 문자 타입 이여야 합니다");
  }

  node.classList.add(className);
}

function removeClass(node, className) {
  if (typeof node === "string") {
    node = getNode(node);
  }

  if (!className) {
    node.className = ""; // className 인자 값이 공백일 경우 함수 종료
    return;
  }

  if (typeof className !== "string") {
    typeError("className 인자 값의 타입형식은 문자 타입 이여야 합니다");
  }

  node.classList.remove(className);
}

function toggleClass(node, className) {
  if (typeof node === "string") {
    node = getNode(node);
  }

  if (typeof className !== "string") {
    typeError("className 인자의 값의 타입형식은 문자 타입 이여야 합니다");
  }

  node.classList.toggle(className);
}

// getCss 함수
function getCss(node, prop) {
  if (typeof node === "string") {
    node = getNode(node);
  }

  // !prop 검사해서(여기서 false) => document.body.style에 있냐?를 물어보는것
  if (!(prop in document.body.style)) {
    syntaxError("getCss 함수의 두 번째 인자인 prop은 유효한 css속성이 아닙니다.");
  }

  return getComputedStyle(node)[prop]; // 객체에서 변수를 받을때는 [] 각괄호 (. 표기 x)
}

// setCss 함수
function setCss(node, prop, value) {
  if (typeof node === "string") {
    node = getNode(node);
  }
  if (!(prop in document.body.style)) {
    syntaxError("setCss 함수의 두 번째 인자인 prop은 유효한 css속성이 아닙니다.");
  }

  if (!value) {
    syntaxError("setCss 함수의 세 번째 인자는 필수값 입니다.");
  }

  node.style[prop] = value;
}

// getCss 와 setCss 함수를 한번에 통합한 css함수 작성
function css(node, prop, value) {
  return !value ? getCss(node, prop) : setCss(node, prop, value);
}

// 통합한 css함수 화살표함수로 단축하기
// let css = (node, prop, value) => (!value ? getCss(".first", "font-size") : setCss(".first", "font-size", "100px"));
