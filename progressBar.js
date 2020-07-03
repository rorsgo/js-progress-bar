var bar = document.createElement("div");
var contentBox = document.querySelector(".content");

bar.style.height = "10px";
bar.style.width = "0px";
bar.style.backgroundColor = "#3D3D3D";
bar.style.position = "fixed";
bar.style.top = "0";
bar.style.left = "0";
bar.style.zIndex = "9999";
bar.style.transition = "0.2s";

document.body.append(bar);

function updateBar() {
  const contentHeight = contentBox.offsetHeight;
  const axisY = window.pageYOffset;

  const updatedBar = axisY * 150 / contentHeight;
  bar.style.width = updatedBar + "%";
}

window.addEventListener("load", () => {
  document.addEventListener("scroll", updateBar);
})