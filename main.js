import style from './main.scss'
import 'bootstrap'  

import moment from 'moment' // 引入
import React  from 'react'
import {render} from 'react-dom'



render(<h1>nihso</h1>,window.root)

// console.log($)
// const fn = ()=>{
//  console.log('鸟你好')
// }

// fn()
// 环境变量
// if(DEV !=='production'){
//   console.log(111)
// }else {
//   console.log(22)
// }

// const HXR = new XMLHttpRequest()
// HXR.open('GET','/qy/user',true)
// HXR.onload=function (){
//   console.log(xhr)
// }
// HXR.send()

let r = moment().endOf('day').fromNow()
console.log(r)
