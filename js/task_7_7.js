// Напиши скрипт, который реагирует на изменение
// значения input#font - size - control(событие input) и изменяет
// инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputRef = document.querySelector("#font-size-control");
const word = document.querySelector("#text");
const font = () => {
  word.style.fontSize = `${Number(inputRef.value)}px`;
};

inputRef.addEventListener("input", font);
