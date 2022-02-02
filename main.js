
  const printButton = document.querySelectorAll('div.main-file-input > button');
  const mainEle = document.querySelector('div.barcodes')

let a = 0;
const inputFile = document.querySelector('.input-flie')

inputFile.addEventListener('change', () => {
  const reader = new FileReader();
  mainEle.innerHTML = ''
  reader.onload = function(evt) {
  const datas = JSON.parse(reader.result);
  datas.map(data => {
  const svgEle = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgEle.className.baseVal = "barcode" + a;
  mainEle.append(svgEle)
  JsBarcode('.barcode' + a, data.Id)
  a++
  })
  printButton[1].removeAttribute("disabled")
  printButton[2].removeAttribute("disabled")
  mainEle.parentElement.classList.add('aa')
  
  };
  reader.readAsText(inputFile.files[0])
})

printButton[1].addEventListener('click', () => {
  print()
})

printButton[2].addEventListener('click', () => {
  mainEle.innerHTML = ''
})