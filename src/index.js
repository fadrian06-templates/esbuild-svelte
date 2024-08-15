import App from './App.svelte'
import './index.css'

// Live reload (only development)
import './livereload'

const target = document.querySelector('#root')

if (!target) {
  throw new Error('Root element not found')
}

new App({ target })
