const textarea = document.getElementById("textInput");
const charCount = document.getElementById("charCount");

textarea.addEventListener("input", () => {
  const remaining = 100 - textarea.value.length;
  charCount.textContent = remaining;
});
