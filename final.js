const dropdownSelect = document.querySelector(".dropdown__select");
const dropdownItems = document.querySelectorAll(".dropdown__item");
const dropdownSelected = document.querySelector(".dropdown__selected");
const dropdownList = document.querySelector(".dropdown__list");
const dropdown = document.querySelector(".dropdown");
const dropdownCaret = document.querySelector(".dropdown__caret");
// Dropdown select
dropdownSelect.addEventListener("click", function (event) {
  // sự kiện khi click vào dropdown__select thì sẽ hiện hoặc xóa show, mũi tên chỉ lên
  dropdownList.classList.toggle("show");
  dropdownCaret.classList.toggle("fa-caret-up");
});
// Dropdown item
dropdownItems.forEach((item) =>
  // sau khi duyệt từng item nó sẽ in ra text, đồng thời xóa dropdownList đi
  item.addEventListener("click", function (event) {
    const text = event.target.querySelector(".dropdown__text").textContent;
    dropdownSelected.textContent = text;
    dropdownList.classList.remove("show");
  })
);
// Click to document
// kiểm tra nếu ko chứa dropdown, tức là click ra ngoài thì sẽ xóa show đi
document.addEventListener("click", function (e) {
  if (!dropdown.contains(e.target)) {
    dropdownList.classList.remove("show");
  }
});
