const text = "The Lord is our Saviour!!";

let index = 0;

function writeText() {
  document.body.innerText = text.slice
    (0, index);

  index++;

  if (index > text.length) {
    index = 0;
  }
}

setInterval(writeText, 100); //Without setInterval the text won't generate
