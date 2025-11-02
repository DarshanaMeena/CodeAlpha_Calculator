 const screen = document.getElementById("screen");
const buttons = document.querySelectorAll(".btn");

// Button click handling
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.innerText === "=") {
      try {
        screen.value = eval(screen.value);
      } catch {
        screen.value = "Error";
      }
    }
    else if (btn.innerText === "C") {
      screen.value = "";
    }
    else if (btn.innerText === "DEL") {
      screen.value = screen.value.slice(0, -1);
    }
    else {
      screen.value += btn.innerText;
    }
  });
});

// BONUS: Keyboard support
document.addEventListener("keydown", e => {
  if ("0123456789/*-+.".includes(e.key))
    screen.value += e.key;

  if (e.key === "Enter")
    try { screen.value = eval(screen.value); }
    catch { screen.value = "Error"; }

  if (e.key === "Backspace")
    screen.value = screen.value.slice(0, -1);

  if (e.key.toLowerCase() === "c")
    screen.value = "";
});