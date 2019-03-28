const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const btn = document.querySelector('.exit')
const main = document.querySelector('main')


main.onclick = e => {
  let i = e.target
  if (i.matches('#one')) {
    showAll('one')
  } else if (i.matches('#two')) {
    showAll('two')
  } else if (i.matches('#three')) {
    showAll('three')
  }
}

function showAll(i) {
  btn.classList = 'press'
  console.log(i)
  main.innerHTML += `
    <div id=${i} class='show target' >
    </div>   
  `
  let target = document.querySelector('.target')

  btn.onclick = e => {
    btn.classList = 'exit'
    main.removeChild(target)
  }
}