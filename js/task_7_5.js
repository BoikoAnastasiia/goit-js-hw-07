// Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input), подставляет его
// текущее значение в span#name - output.Если инпут пустой,
//   в спане должна отображаться строка 'незнакомец'.

const inputRef = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
if (inputRef.input === null) {
  nameOutput.textContent === "незнакомец";
} else {
  inputRef.input = nameOutput.textContent;
}
