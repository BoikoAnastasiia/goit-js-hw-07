// Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input), подставляет его
// текущее значение в span#name - output.Если инпут пустой,
//   в спане должна отображаться строка 'незнакомец'.

const inputRef = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
  if (event.target.value === "") {
    return (nameOutput.textContent = "незнакомец");
  }
  return (nameOutput.textContent = event.target.value);
});

// nameOutput.hidden = true;

// const checkUp = () => {
//   let userInfo = inputRef.value.trim();
//   nameOutput.hidden = false;
//   inputRef.value.length === 0
//     ? (nameOutput.textContent = "незнакомец")
//     : (nameOutput.textContent = userInfo);
// };
// inputRef.addEventListener("input", checkUp);
// inputRef.addEventListener("blur", checkUp);

// inputRef.addEventListener("input", (event) => {
//   if (event.target.value === null) {
//     nameOutput.textContent = "незнакомец";
//   }
//   nameOutput.textContent = event.target.value;
// });
