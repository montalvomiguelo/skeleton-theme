import 'vite/modulepreload-polyfill'
import '@/custom-elements/HelloWorld'

// Create and append the custom element
const helloWorld = document.createElement('hello-world')
document.body.appendChild(helloWorld)
