import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search)
  const username = urlParams.get('username')

  const app = document.getElementById('app')
  if (username) {
    app.innerHTML = `<h1>Hello, ${username}!</h1>`
  } else {
    app.innerHTML = `<h1>Error...</h1>`
  }
})
