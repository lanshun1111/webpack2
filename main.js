import style from './main.scss'


console.log($)
const fn = ()=>{
 console.log('鸟你好')
}

fn()

const HXR = new XMLHttpRequest()
HXR.open('GET','/api/user',true)
HXR.onload=function (){
  console.log(xhr)
}
HXR.send()