const source = document.querySelector('#source')
source.addEventListener("input", () => {document.querySelector('#output').innerHTML = source.value; console.log(source.value)})