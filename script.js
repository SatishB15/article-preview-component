const shareButton = document.querySelector("#share-button");
const shareBox = document.querySelector("#social-share");

shareButton.addEventListener("click", () => {
  shareBox.classList.toggle("hidden");
  shareButton.classList.toggle("active");
});

shareButton.addEventListener("touchend", () => {
  shareButton.blur();
});