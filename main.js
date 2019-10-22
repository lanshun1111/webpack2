import style from './main.scss'
import 'bootstrap'
console.log($)
const fn = ()=>{
 console.log('鸟你好')
}

fn()
// 环境变量
console.log(DEV)
if(DEV !=='production'){
  console.log(111)
}

// const HXR = new XMLHttpRequest()
// HXR.open('GET','/qy/user',true)
// HXR.onload=function (){
//   console.log(xhr)
// }
// HXR.send()