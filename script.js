let number = 0
let a = 0
let b = 0
let h = 0

document.getElementById('button').addEventListener('click', calculate)

function calculate () {
  a = document.getElementById('input1').value
  b = document.getElementById('input2').value
  h = document.getElementById('input3').value

  a = parseInt(a)
  b = parseInt(b)
  h = parseInt(h)

  number = (a + b) / 2 * h

  alert(number)
  
  document.getElementById('answer-text').innerHTML = number
}
