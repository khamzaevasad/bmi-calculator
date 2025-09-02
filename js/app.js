const unitRadios = document.querySelectorAll('input[name="unit"]');
const metricBox = document.querySelector(".input-box");
const imperialBox = document.querySelector(".imperial");

// toggler function
function toggler() {
  metricBox.classList.toggle("hidden");
  imperialBox.classList.toggle("hidden");
}

unitRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.value === "imperial") {
      toggler();
    } else {
      toggler();
    }
  });
});
