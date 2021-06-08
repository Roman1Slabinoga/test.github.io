const element = document.getElementById("menu");

document.getElementById("burger").addEventListener("click", function() {
  console.log(element);
  element.classList = "active";
  return false;
});

document.getElementById("close").addEventListener("click", function() {
  console.log(element);
  element.classList = "";
  return false;
});