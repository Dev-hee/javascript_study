//함수
//매개변수, 화살표 함수(ES6)
//ES5 기본함수 기법
function func1(num1, num2){
    console.log(num1+num2)
}
func1(1,2)
//ES6 화살표함수
//화살표함수는 function 키워드가 생략되므로 function 뒤에 작성하는 함수이름도 쓸 수 없기 때문에 익명함수라고 부른다. 대신 함수 는 함수이름으로 호출하지 않으면 사용할 수 없기 때문에 function 뒤에 작성하던 함수명을 const 또는 let 을 활용하여 변수로 대신 사용한다.
const func2 = (num1,num2) => {
    console.log(num1+num2)
}
func2(3,4)
//------------------------------------------
// 2~9 단 구구단 모두 result 줄바꿈으로 출력하기
// 함수명 dan99
// 매개변수 반드시 1개 이상 생성
// 함수 1개 , 변수 2개(DOM선택용, 구구단복합대입 저장하는 변수)
// 복합대입연산자, + = ,태그 내용 삽입 속성 활용
// 태그 내용 삽입 속성 innerText ? innerHTML ?
const result = document.querySelector('.result')
let total = "";
//function dan99(dan){}
const dan99 = (dan) => {
    //dan"x1="dan*1"
    total = `${dan}x1=${dan*1}<br>`
    total += `${dan}x2=${dan*2}<br>`
    total += `${dan}x3=${dan*3}<br>`
    total += `${dan}x4=${dan*4}<br>`
    total += `${dan}x5=${dan*5}<br>`
    total += `${dan}x6=${dan*6}<br>`
    total += `${dan}x7=${dan*7}<br>`
    total += `${dan}x8=${dan*8}<br>`
    total += `${dan}x9=${dan*9}<br>`
    console.log(total)
    result.innerHTML += total
}
dan99(2)
dan99(3)
// result.innerHTML = dan99 (2)
console.log ('----------------------------')
//매개변수,ES6화살표 함수, 리턴(함수 내에 값을 밖으로 반환)
function func3(a){
    console.log(a+5)
}
function func3_1(a){
    document.write(a+5)
}
function func3(a){
    window.alert(a+5)
}
/* func3(10)
func3_1(10)
func3_2(10) */
//(위) 리턴이 없는 함수
//(아래) 리턴이 있는 함수
const func4 = (a) => { return a+5 }
func4(10)   
console.log(func4(10))
result.innerHTML = func4(10)
// alert(func4(10))

console.log('----------------------')
let n1 = 10
let n2 = 20
function func5(a,b){
    n1 += n2 // n1 = n1+n2 / 30 = 10+20
    n2 = a+b // 20제거, 6=2+4
    n1 += n2 // n1 = n1+n2 / 36 = 30+6
    return n1 // 36
}
console.log(func5 (2,4)) // 36
//함수의 return은 함수 내의 표현식 중 원하는 결과값만 함수호출 위치에서 반환해서 사용할 수 있기 때문에 필수속성으로 사용한다.
const p_result = document.querySelector('p.result')
const errorBtn = document.querySelector('#error')
console.log(p_result, errorBtn)
// 경고 버튼을 클릭 시 p.result 위치에 '잘못클릭하셨습니다.' 함수의 경고 메시지 출력
function error_message(){
    return '잘못클릭하셨습니다.'
}
//경고버튼(errorBtn) 을 클릭 시 (addEventListener)
//실행  -> p.result 위치에  함수의 경고메시지 출력
// errorBtn.addEventListener('click', function(){})
errorBtn.addEventListener('click', () => {
    p_result.innerText = error_message()
})
// 동의 버튼 클릭 시 result위치에 "동의 하셨습니다."
// 동의안함 버튼 클릭 시 result 위치에 "비동의 하셨습니다."
const agreeResult = document.querySelectorAll('p.result')[1]
const agreeBtn = document.querySelector('#agree')
const disagreeBtn = document.querySelector('#disagree')
console.log(agreeResult,agreeBtn,disagreeBtn)
agreeBtn.addEventListener('Click', () => {
    agreeResult.innerHTML = agreeFunc('동의')
})
disagreeBtn.addEventListener('Click', () => {
    agreeResult.innerHTML = agreeFunc('비동의')
})
function agreeFunc(data){
    return `${data} 하셨습니다.`
}