import {genRandomInteger} from './utils/index'
require('./styles/index.scss')
const styles = require('./styles/test.module.scss')

const $span = document.createElement('span')
$span.classList.add(...['test', styles.module])
$span.innerText = genRandomInteger(1, 100).toString()

export default () => {
  document.body.append($span)
}
