const contents = getNode(".contents");
const textField = getNode("#comment37");

function clearText(target) {
  target.value = "";
}

function handler(e) {
  let target = e.target;

  while (!attr(target, "data-name")) {
    target = target.parentNode;

    // nodeName이 대문자로 출력되서 대문자로만
    if (target.nodeName === "BODY") {
      target = null;
      return;
    }
  }

  if (target.dataset.name === "like") {
    toggleClass(target, "active");
  }

  if (target.dataset.name === "comment") {
    textField.focus();
  }

  if (target.dataset.name === "send") {
    if (textField.value === "") {
      console.log("입력해주세요.");
      return;
    }

    let template = `<div class="id">
    <div class="profile_img border_over"><img src="./assets/part03/tiger.png" alt=""></div>
        <div class="comment_field">
            <div class="text_container">
                <div class="name"><a href="#">장재우</a></div>
                <div class="text_field">${textField.value}</div>
            </div>
        </div>
    </div>`;

    insertLast(".comment_container", template);

    clearText(textField);
  }
}

contents.addEventListener("click", handler);
