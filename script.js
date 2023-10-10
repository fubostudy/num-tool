const inputArea = document.getElementById("inputArea");
const outputArea = document.getElementById("outputArea");
const numberProcessed = document.getElementById("numberProcessed"); // 新增的区域
const copyAlert = document.getElementById("copyAlert");
const map = {
  0: "t",
  1: "d",
  2: "f",
  3: "w",
  4: "k",
  5: "p",
  6: "a",
  7: "y",
  8: "m",
  9: "e",
  "+": "z", // 新的映射规则
};

inputArea.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\s+/g, "");
  numberProcessed.value = value; // 显示处理后的数字

  if (/^[0-9+zZ]+$/.test(value)) {
    let result = value
      .split("")
      .map((num) => map[num] || num) // 使用新的映射规则
      .join("");
    result = result.charAt(0).toUpperCase() + result.slice(1);
    outputArea.value = result;
  } else if (/^[a-z]+$/i.test(value)) {
    let result = value
      .split("")
      .map((char) => {
        for (let [num, mappedChar] of Object.entries(map)) {
          if (mappedChar === char.toLowerCase()) return num;
        }
        return char;
      })
      .join("");
    outputArea.value = result;
  } else {
    outputArea.value = "";
  }

  copyToClipboard(outputArea.value);
  inputArea.focus();
  showCopyAlert();
});

function showCopyAlert() {
  copyAlert.classList.add("show");
  setTimeout(() => {
    copyAlert.classList.remove("show");
  }, 1000);
}

function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}
