function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    } else {
        dodger.style.left = "180px";
        }


}

function moveDodgerRight () {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    } else {
          dodger.style.left = "180px";
      }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    };
});

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    };
});

// document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowRight") {
//         moveDodgerRight();
//         alert('I was clicked!');
//     };
// });
