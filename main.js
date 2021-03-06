
  const printButton = document.querySelectorAll('div.main-file-input > button');
  const mainEle = document.querySelector('div.barcodes')
const searchButton = document.querySelector('div.main-file-input button.button-search')
const searchInput = document.querySelector('div.main-file-input input.input-search')


let a = 1;
const inputFile = document.querySelector('.input-flie')

inputFile.addEventListener('change', () => {
  const reader = new FileReader();
  mainEle.innerHTML = ''
  reader.onload = function(evt) {
  const datas = JSON.parse(reader.result);
  datas.map(data => {
  const svgEle = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const titleEle = document.createElement('h4');
  const divEle = document.createElement('div');

  divEle.className = 'data'
  titleEle.className = 'title'
  svgEle.className.baseVal = "barcode" + data.Id;
  const nodeTitle = document.createTextNode(data.Name)
    
  titleEle.append(nodeTitle)
  divEle.append(titleEle)
  divEle.append(svgEle)
  mainEle.append(divEle)

  JsBarcode('.barcode' + data.Id, data.Id)
  
  })
  
      searchButton.addEventListener('click', () => {
      const searchValue = datas.find(data => data.Id == searchInput.value || data.Name == searchInput.value)
      const theEles = document.querySelectorAll(`.barcode${searchValue && searchValue.Id && searchValue.Id}`)
      
    scrollTo(0,(theEles[0] && theEles[0].parentElement.offsetTop))

	
      theEles.forEach((theEle) => {
		theEle.parentElement.removeAttribute('active')
        theEle.parentElement.setAttribute('active', 1)
      })
    })
  
  
  
  printButton[1].removeAttribute("disabled")
  printButton[2].removeAttribute("disabled")
  searchButton.parentElement.removeAttribute("disabled")
  mainEle.parentElement.classList.add('aa')
  
  };
  reader.readAsText(inputFile.files[0])
})

printButton[1].addEventListener('click', () => {
  print()
})

printButton[2].addEventListener('click', () => {
  mainEle.innerHTML = ''
  inputFile.value = ''
  printButton[1].setAttribute("disabled", null)
  printButton[2].setAttribute("disabled", null)
  searchInput.value = ''
  searchButton.parentElement.setAttribute("disabled", null)
  mainEle.parentElement.classList.remove('aa')
})

searchButton.addEventListener('click', () => {
  searchInput.focus()
})

searchInput.addEventListener('click', (e) => {
	console.log(e.target);
})