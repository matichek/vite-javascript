import './style/main.scss'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './js/counter.js'
import { TestModule } from './js/test.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>

  <div class="card">
    <p id="test-text"></p>
    <p id="test-number"></p>
  </div>
`

setupCounter(document.querySelector('#counter'))

const testModule = new TestModule();
document.getElementById('test-text').textContent = testModule.exportText();
document.getElementById('test-number').textContent = testModule.exportNumber();