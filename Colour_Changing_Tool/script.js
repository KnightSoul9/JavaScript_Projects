const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

button.forEach(function (button) {
  button.addEventListener("click", function (e) {
    switch (e.target.id) {
      case Grey:
        body.style.backgroundColor = e.target.id;
        break;
      case Yellow:
        body.style.backgroundColor = e.target.id;
        break;
      case Blue:
        body.style.backgroundColor = e.target.id;
        break;
      case White:
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});
