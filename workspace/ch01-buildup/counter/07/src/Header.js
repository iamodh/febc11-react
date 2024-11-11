import Yong from "../yong.js";

function Header() {
  return Yong.createElement(
    "header",
    null,
    Yong.createElement("h1", null, "Counter - 상태 변경시 자동 리렌더링"),
    Yong.createElement(
      "p",
      null,
      "파일 경로: ",
      Yong.createElement(
        "span",
        { id: "filepath" },
        `ch${document.URL.split("/ch")[1]}index.html`
      )
    )
  );
}

export default Header;
