const categoryRef = document.querySelectorAll(".item");
console.log(`В списке ${categoryRef.length} категории.`);

categoryRef.forEach((item) => {
  const categoryNameRef = item.querySelector("h2");
  const categoryElementsRef = item.querySelectorAll("li");
  return console.log(
    `Категория: ${categoryNameRef.textContent}\r\nКоличество элементов: ${categoryElementsRef.length}`
  );
});
