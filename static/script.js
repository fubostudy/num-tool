// // const inputArea = document.getElementById('inputArea');
// // const outputArea = document.getElementById('outputArea');
// // const map = {
// //     '0': 't',
// //     '1': 'd',
// //     '2': 'f',
// //     '3': 'w',
// //     '4': 'k',
// //     '5': 'p',
// //     '6': 'a',
// //     '7': 'y',
// //     '8': 'm',
// //     '9': 'e'
// // };

// // inputArea.addEventListener('input', (e) => {
// //     let value = e.target.value.replace(/\s+/g, '');

// //     if (/^[0-9]+$/.test(value)) {
// //         let result = value.split('').map(num => map[num]).join('');
// //         result = result.charAt(0).toUpperCase() + result.slice(1);
// //         outputArea.value = result;
// //     } else if (/^[a-zA-Z]+$/.test(value)) {
// //         let result = Object.entries(map).find(([key, val]) => val === value.toLowerCase())?.[0] || '';
// //         outputArea.value = result;
// //     } else {
// //         outputArea.value = '';
// //     }

// //     copyToClipboard(outputArea.value);
// // });

// // function copyToClipboard(text) {
// //     const textarea = document.createElement('textarea');
// //     textarea.value = text;
// //     document.body.appendChild(textarea);
// //     textarea.select();
// //     document.execCommand('copy');
// //     document.body.removeChild(textarea);
// // }

// const inputArea = document.getElementById("inputArea");
// const outputArea = document.getElementById("outputArea");
// const map = {
//   0: "t",
//   1: "d",
//   2: "f",
//   3: "w",
//   4: "k",
//   5: "p",
//   6: "a",
//   7: "y",
//   8: "m",
//   9: "e",
// };

// inputArea.addEventListener("input", (e) => {
//   let value = e.target.value.replace(/\s+/g, "");

//   if (/^[0-9]+$/.test(value)) {
//     let result = value
//       .split("")
//       .map((num) => map[num])
//       .join("");
//     result = result.charAt(0).toUpperCase() + result.slice(1);
//     outputArea.value = result;
//   } else if (/^[a-z]+$/i.test(value)) {
//     let result = value
//       .split("")
//       .map((char) => {
//         for (let [num, mappedChar] of Object.entries(map)) {
//           if (mappedChar === char.toLowerCase()) return num;
//         }
//         return char;
//       })
//       .join("");
//     outputArea.value = result;
//   } else {
//     outputArea.value = "";
//   }

//   copyToClipboard(outputArea.value);
// });

// function copyToClipboard(text) {
//   const textarea = document.createElement("textarea");
//   textarea.value = text;
//   document.body.appendChild(textarea);
//   textarea.select();
//   document.execCommand("copy");
//   document.body.removeChild(textarea);
// }

const inputArea = document.getElementById('inputArea');
const outputArea = document.getElementById('outputArea');
const copyAlert = document.getElementById('copyAlert');
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
};

inputArea.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\s+/g, "");

  if (/^[0-9]+$/.test(value)) {
    let result = value
      .split("")
      .map((num) => map[num])
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
  // Return focus to the input area after copying
  inputArea.focus();
  showCopyAlert();
});

function showCopyAlert() {
    copyAlert.classList.add('show');
    setTimeout(() => {
        copyAlert.classList.remove('show');
    }, 1000);  // Alert shows for 2 seconds
}
function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  // Add a simple copy alert (this can be replaced with a nicer UI element if desired)
  // alert('内容已复制到剪贴板!');
}
