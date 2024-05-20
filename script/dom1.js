/*let message1 = window.alert('관리자만 접속할 수 있습니다.')
let message2 = window.prompt('1+1?')
let message3 = window.confirm('인쇄하시겠습니까?')
console.log(message1,message2,message3)*/
//window란? 웹브라우저 창
//window.메서드() ? 웹브라우저 창에서 실행되는 기능
//window객체명은 가장 기본이 되는 웹브라우저로 생략가능하다.
//let message4 = alert('경고') //window 생략
//버튼 클릭 시 구글 이동 함수
function btn_func(){
    window.location.href = "https://google.com"
}
window.document.write('hello js')

function txt_func(){
    document.write('hello js')
}
function google_open(){
    open('https://google.com','_blank')
}
function google_500open(){
    open('https://google.com','_blank', 'width=500, height=500')
}
/*
    인라인 스크립트
    1. 함수, 변수 등 자바스크립트는 js파일내에서 작성 
    2. 상호작용이 필요한 html태그에 js연결을 위해서 태그 내에 이벤트(ex)onCllick등으로 함수연결

    인라인 스크립트를 피하는 방법
    * 상호작용 하는 태그를 자바스크립트 내에서 객체로 만든다.
    * 객체.속성
    * 객체.메서드{}
*/
//===========================DOM
const h1Tag = document.getElementsByTagName('h1')
console.log(h1Tag)
console.log(h1Tag[1])
//() 선택하는 태그명 작성
//객체.메서드()
//선택한 DOM태그내에 자식,자손까지 포함해서 선택한다.
const ulTag = document.getElementsByTagName('ul')
console.log(ulTag)// 다수의  ul태그 출력 (배열 구조)
console.log(ulTag[0]) //원하는 ul개별 출력 (index)
const liTag =ulTag[0].getElementsByTagName('li')
console.log(liTag)
console.log(liTag[0],liTag[1],liTag[2])
const aTag = liTag[1].getElementsByTagName('a')
console.log(aTag[0])
// console.log(aTag[0],aTag[1],aTag[2])
console.log('===================================')
const titleCls = document.getElementsByClassName('title')
console.log(titleCls)
console.log(titleCls[0])
console.log(titleCls[1])
const listCls = ulTag[1].getElementsByClassName('list')
console.log(listCls)

//DOM 선택 문제
// 1. gnbCls : gnb1개 잡기
const gnbCls = document.getElementsByClassName('gnb')[0]
console.log(gnbCls)
// 2. li_menu1 : gnb 첫번째 자식 li잡기
const li_menu1 = gnbCls.getElementsByTagName('li')[0]
console.log(li_menu1)
// 3. li_menu1 : gnb 두번째 자식 li잡기
const li_menu2 = gnbCls.getElementsByTagName('li')[3]
console.log(li_menu2)
// 4. li_menu1 : lnb 클래스 2개 모두 잡기
const lnbAll = document.getElementsByClassName('lnb')
console.log(lnbAll)
// 5. li_menu1 : 첫번째 lnb의 sub_menu2 a 잡기
const lnb_sub2 = lnbAll[0].getElementsByTagName('a')[1]
console.log(lnb_sub2)