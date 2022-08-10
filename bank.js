let submits = document.querySelector(".login-area");
let transetion = document.querySelector("#transetion-area");
let dipositwithdrawboxs = document.querySelector("#diposit-withdraw-box");

addEventListener("click", get);
function get() {
  submits.style.display = "none";
  transetion.style.display = "block";
  dipositwithdrawboxs.style.display = "block";
  //console.log("helo aof");
}
