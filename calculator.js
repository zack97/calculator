const operateData = [
  { value: "(" },
  { value: ")" },
  { value: "%" },
  { value: "AC" },
  { value: 7 },
  { value: 8 },
  { value: 9 },
  { value: "/" },
  { value: 4 },
  { value: 5 },
  { value: 6 },
  { value: "*" },
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: "-" },
  { value: 0 },
  { value: "." },
  { value: "=" },
  { value: "+" },
];

const main = document.querySelector("main");
const calculator = document.createElement("div");
calculator.classList.add("calculator");

const inputDiv = document.createElement("div");
inputDiv.classList.add("input");
const problem = document.createElement("div");
problem.classList.add("problem");
const solution = document.createElement("div");
solution.classList.add("solution");
inputDiv.append(problem, solution);

const operate = document.createElement("div");
operate.classList.add("operate");

operateData.forEach((elem) => {
  const div = document.createElement("div");
  div.textContent = elem.value;
  const specialCharacters = ["(", ")", "%", "/", "*", "-", "+", "AC"];
  if (specialCharacters.includes(elem.value)) {
    div.style.backgroundColor = "lightblue";
  }
  div.addEventListener("click", () => {
    if (elem.value === "AC") {
      problem.textContent = "";
      solution.textContent = "";
    } else if (elem.value === "=") {
      try {
        solution.textContent = eval(problem.textContent);
      } catch (error) {
        solution.textContent = "Error";
      }
    } else {
      problem.textContent += elem.value;
    }
  });
  operate.appendChild(div);
});

calculator.append(inputDiv, operate);
main.appendChild(calculator);
