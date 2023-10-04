const result = document.getElementById("result");
const sub = document.getElementById("sub");
const add = document.getElementById("add");

var currentValue = 0;

function updatedResult() {
  result.textContent = currentValue;
  if (currentValue > 0) {
    result.style.color = "green";
  } else if (currentValue < 0) {
    result.style.color = "red";
  } else {
    result.style.color = "blue";
  }
}

sub.addEventListener("click", () => {
  currentValue = currentValue - 1;
  updatedResult();
});
add.addEventListener("click", () => {
  currentValue = currentValue + 1;
  updatedResult();
});

if (currentValue > 0) {
  result.style.color = "green";
} else if (currentValue < 0) {
  result.style.color = "red";
} else if ((currentValue = 0)) {
  result.style.color = "blue";
}
