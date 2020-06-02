// ①.htmlにJSの記述をする
function btn_click() {
  window.alert("クリックされました！")
}

// ②.htmlにJSの記述をしない
window.onload = function() {
  document.getElementById("btn").onclick = function() {
    window.alert("ボタンがクリックされました");
  };
};