const unitRadios = document.querySelectorAll('input[name="unit"]');
const metricBox = document.querySelector(".input-box");
const bmiContent = document.querySelector(".bmi-content");
const resultBox = document.querySelector(".result");
const imperialBox = document.querySelector(".imperial");
const heightInput = document.getElementById("heightInput");
const weightInput = document.getElementById("weightInput");
const infoBmi = document.getElementById("infoBmi");
const bmiNumber = document.getElementById("bmiNumber");

// imperial inputs
// const inputHeightImperial = document.getElementById("heightImperial");
// const inputIn = document.getElementById("inputIn");
// const inputWeightImperial = document.getElementById("weightImperial");
// const inputLbs = document.getElementById("inputLbs");

// toggler function
// function toggler() {
//   metricBox.classList.toggle("hidden");
//   imperialBox.classList.toggle("hidden");
// }

// unitRadios.forEach((radio) => {
//   radio.addEventListener("change", () => {
//     if (radio.value === "imperial") {
//       toggler();
//     } else {
//       toggler();
//     }
//   });
// });

heightInput.addEventListener("input", () => {
  const h = calcHeight(heightInput.value);
  const w = calcWeight(weightInput.value);
  if (h && w) {
    calcBmi(h, w);
  }
});

weightInput.addEventListener("input", () => {
  const h = calcHeight(heightInput.value);
  const w = calcWeight(weightInput.value);
  if (h && w) {
    calcBmi(h, w);
  }
});

function calcHeight(heightVal) {
  const val = parseFloat(heightVal);
  return val > 10 ? val / 100 : val;
}

function calcWeight(weightval) {
  return parseFloat(weightval);
}

function calcBmi(calcHeight, calcWeight) {
  const calc = calcWeight / (calcHeight * calcHeight);
  const result = parseFloat(calc.toFixed(2));

  if (calcHeight && calcWeight) {
    bmiContent.classList.add("hidden");
    resultBox.classList.remove("hidden");
  }

  if (result < 18.5) {
    infoBmi.textContent =
      "Your BMI suggests you're underweight. You may need to gain some weight for optimal health";
    bmiNumber.textContent = result;
  } else if (result >= 18.5 && result < 25) {
    infoBmi.textContent =
      "our BMI suggests you're a healthy weight. Keep maintaining your current lifestyle!";
    bmiNumber.textContent = result;
  } else if (result >= 25 && result < 30) {
    infoBmi.textContent =
      "Your BMI suggests you're overweight. Consider adopting a healthier diet and more physical activity";
    bmiNumber.textContent = result;
  } else {
    infoBmi.textContent =
      "Your BMI suggests obesity. It's important to consult a healthcare professional for guidance";
    bmiNumber.textContent = result; //isNaN(result) ? "Please type weight" : result;

    // bmiContent.classList.remove("hidden");
    // resultBox.classList.add("hidden");
  }
}

// imperial Calc

// imperial events

// inputHeightImperial.addEventListener("input", () => {
//   const feet = parseFloat(inputHeightImperial.value) || 0;
// });

// inputIn.addEventListener("input", () => {
//   const heightInch = inputIn.value;
//   console.log(heightInch);
// });

// inputWeightImperial.addEventListener("input", () => {
//   const weightIm = inputWeightImperial.value;
//   console.log(weightIm);
// });

// inputLbs.addEventListener("input", () => {
//   weightLbs = inputLbs.value;
//   console.log(weightLbs);
// });

// Your BMI suggests you're underweight. You may need to gain some weight for optimal health.
// our BMI suggests you're a healthy weight. Keep maintaining your current lifestyle!
// Your BMI suggests you're overweight. Consider adopting a healthier diet and more physical activity.
// Your BMI suggests obesity. It's important to consult a healthcare professional for guidance.
