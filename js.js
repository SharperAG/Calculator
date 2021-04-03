let numberDis = document.querySelectorAll(".button");
let dis = document.querySelector(" #displayText");

numberDis.forEach((num1) => {
  num1.addEventListener("click", () => {
    console.log(num1);
    dis = num1;
  });
});
