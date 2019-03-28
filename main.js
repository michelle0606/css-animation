const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const btn = document.querySelector('.exit')


one.onclick = e => {
  btn.classList = 'press'
  one.classList.add('show')
}

two.onclick = e => {
  btn.classList = 'press'
  two.classList.add('show')
}

three.onclick = e => {
  btn.classList = 'press'
  three.classList.add('show')
}

btn.onclick = e => {
  btn.classList = 'exit'
  one.classList.remove('show')
  two.classList.remove('show')
  three.classList.remove('show')
}