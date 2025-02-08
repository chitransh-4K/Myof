let html1 = document.querySelector("#logo1");
let css1 = document.querySelector("#logo2");
let js1 = document.querySelector("#logo3");
let run = document.querySelector("#run");
let runner = document.querySelector("#runner");
let html = document.querySelector("#html1");
let css = document.querySelector("#css");
let js = document.querySelector("#js");

let full = document.querySelector("#full");
let max = document.querySelector("#max");

let mini = document.querySelector("#mini");
let help = document.querySelector("#other-out")

let htmlEditor = ace.edit("html1");
htmlEditor.setTheme("ace/theme/merbivore");
htmlEditor.session.setMode("ace/mode/html");
const htmlBoilerplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Hello, World!</h1>

    <script src="script.js"></script>
</body>
</html>`;

htmlEditor.setValue(htmlBoilerplate);

let cssEditor = ace.edit("css");
cssEditor.setTheme("ace/theme/merbivore");
cssEditor.session.setMode("ace/mode/css");
const cssBoilerplate = `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Montserrat;
}
html,
body {
  height: 100%;
  width: 100%;
}`;

cssEditor.setValue(cssBoilerplate);

let jsEditor = ace.edit("js");
jsEditor.setTheme("ace/theme/merbivore");
jsEditor.session.setMode("ace/mode/javascript");
const jsBoilerplate = `console.log("Hello World")`;
jsEditor.setValue(jsBoilerplate, -1);

run.addEventListener("click", function () {
  htmlEditor.session.setValue(htmlEditor.getValue());
  runCode();
});
run.addEventListener("click", function () {
  runCode();
});
run.addEventListener("click", function () {
  runCode();
});

runner.addEventListener("click", function () {
  htmlEditor.session.setValue(htmlEditor.getValue());
  runCoder();
});
runner.addEventListener("click", function () {
  runCoder();
});
runner.addEventListener("click", function () {
  runCoder();
});


max.addEventListener('click',function(){
  full.style.zIndex=5;
})
max.addEventListener('click',function(){
  help.style.zIndex=5;
})
mini.addEventListener('click',function(){
  full.style.zIndex=-1;
})
mini.addEventListener('click',function(){
  help.style.zIndex=-1;
})
html1.addEventListener("click", function () {
  html.style.zIndex = 2;
  css.style.zIndex = 1;
  js.style.zIndex = 1;
});
css1.addEventListener("click", function () {
  html.style.zIndex = 1;
  css.style.zIndex = 2;
  js.style.zIndex = 1;
});
js1.addEventListener("click", function () {
  html.style.zIndex = 1;
  css.style.zIndex = 1;
  js.style.zIndex = 2;
});

function runCode() {
  let htmlCode = htmlEditor.getValue();
  let cssCode = cssEditor.getValue();
  let jsCode = jsEditor.getValue();

  let out = document.querySelector("#right");
  out.srcdoc = `
        <html>
        <head>
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
            <script>${jsCode}<\/script>
        </body>
        </html>
    `;
}
function runCoder() {
  let htmlCode = htmlEditor.getValue();
  let cssCode = cssEditor.getValue();
  let jsCode = jsEditor.getValue();

  let out = document.querySelector("#full");
  out.srcdoc = `
        <html>
        <head>
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
            <script>${jsCode}<\/script>
        </body>
        </html>
    `;
}

runCode();
runCoder();
