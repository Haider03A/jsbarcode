const input = document.querySelector('#input');
  const button = document.querySelector('#button');
  const mainEle = document.querySelector('main.data')
let a = 0;
button.onclick = function(){
  
  
  const svgEle = document.createElement('svg');
  svgEle.className = "barcode"+ a + "svg"
  mainEle.append(svgEle)
JsBarcode("main.data .barcode"+ a + "svg", input.value, {
  lineColor: '#ECB365',
});
a++


}
