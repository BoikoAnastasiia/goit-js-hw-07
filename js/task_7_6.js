// Напиши скрипт, который бы при потере фокуса на инпуте,
//   проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым,
//   если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector("#validation-input");
const right = inputRef.classList.add(".valid");
const wrong = inputRef.classList.add(".invalid");

const lenght = inputRef.dataset.length;
console.log(lenght);

inputRef.addEventListener("blur", (event) => {
  if (event.target.value.lenght < 6) {
    return wrong;
  }
  return right;
});
