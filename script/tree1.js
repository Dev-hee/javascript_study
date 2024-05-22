//부모 parentNode, parentElement 속성
const nav_a_all = document.querySelectorAll('nav a')
const nav_a = document.querySelector('nav a')
console.log(nav_a_all) // Node List 0 1
console.log(nav_a) // 태그 상 먼저 시작대상 a
console.log(nav_a_all[0].parentNode)
console.log(nav_a_all[1].parentNode)
console.log(nav_a.parentNode)
//객체.속성
//객체.속성.속성
console.log(nav_a.parentNode.parentNode) //header
//객체.속성1.속성2.속성3 = '노랑'
nav_a.parentNode.style.backgroudColor='yellow'
nav_a_all[0].parentNode.parentNode.style.backgroudColor= 'pink';
nav_a.parentElement.style.border='2px solid red'
nav_a.parentNode.parentNode.style.width='700px';
nav_a.parentNode.parentNode.style.backgroundImage='url(./images/logo/jpg)';
nav_a.parentNode.parentNode.style.height='100px';

nav_a_all[1].addEventListener('mouseover',function(){
    nav_a_all[1].parentNode.style.borderBottom = '5px solid red'
})
nav_a_all[1].addEventListener('mouseout',function(){
    nav_a_all[1].parentNode.style.border = '0'
})

//자식,자손잡기 childNodes, children
const header = document.querySelector('header')
const headerChild = header.childNodes; //공백포함한 요소
const headerChild2 = header.children; //딱 요소만!(2개)
console.log(header)
console.log(headerChild)//5개
console.log(headerChild[3])
headerChild[1].style.backgroudColor ='yellow' //  h1 노란
console.log(headerChild2[0])
console.log(headerChild2[1])
console.log(headerChild2[0].children[0]) 
//headerChild2[0].Childern[0].style (O)
//headerChild2[0].Childern[0].addEventListerner (O)
//(위) 추가 속성 및 메소드를 연결해서 다양한 기능 수행
console.log(headerChild2[0].innerHTML) 
console.log(headerChild2[0].innerText) 
//(위) 단순 읽기, 변경 단순 수행
//headerChild2[0].innerHTML.style (X)
//headerChild2[0].innerHTML.addEventListerner() (X)