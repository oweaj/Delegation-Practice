function bindEvent(node, type, handler) {
  if (typeof node === "string") {
    node = getNode(node);
  }

  // 정규표현식 (찾아보기)
  if (!/mouseenter|click|mousemove|mouseleave/g.test(type)) {
    typeError("bindEvent 함수의 두 번째 인자는 유효한 이벤트 타입 이어야 합니다.");
  }

  node.addEventListener(type, handler);

  // 함수를 내 뱉는 거는 클로저
  return () => node.removeEventListener(type, handler);
}
