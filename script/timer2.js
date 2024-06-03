//slider 모든 대상 opacity 0
//slider 모든 대상 transition : opacity 0.3s
//slider 첫번째 opacity:1
const slider = document.querySelectorAll('.slide')
console.log(slider) //NodeList(3) 0 1 2
//slider[1] opacity = 1 = 2번보이기
//slider[2] opacity = 1 = 3번보이기
let num = 0
//slider 공통 적용 재사용 함수
/* let slide_style = (properti='opacity', val='0') => {
    console.log(properti,val)
    for(let i of slider){i.style.[properti] = val}
}*/
let slide_style = () => {
    for(let i of slider){i.style.opacity = 0}
}
let slide_style2 = () => {
    for(let i of slider){i.style.transition = 'opacity 0.3s'}
}
//slide_style()
//slide_style2()
slide_style('opacity',0) //모두 숨기기
slide_style('transition','opacity 0.3s') //모든 동적기능

slider[0].style.opacity = 1 //(초기)첫번째 슬라이드 보이기
//슬라이드 진행 타이머 함수
//1-2-0-1-2-0-1-2
let slide_timer = setInterval(timer_func,3000)
function timer_func() {
    num++
    if(num>=slider.length){
        num=0
        slide_style()
    }
    console.log(num)
    slider[num].style.opacity = 1
}