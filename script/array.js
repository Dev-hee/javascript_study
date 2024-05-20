// 배열
let yoil = [] //빈 배열
console.log(yoil);
yoil = ['월','화','수','목','금','토','일'];
console.log(yoil);
console.log(`오늘은 ${yoil[0]}요일입니다.`) //오늘은 월요일입니다.
//배열 작성법 2.
let yoil_v2 = new Array(2); //값을 하나만 쓸때 빈배열로 본다.
console.log(yoil_v2)
console.log(yoil_v2[1]) // 정의한적 없음.
yoil_v2[1] = '월'
console.log(yoil_v2)
yoil_v2[0] = '일'
console.log(yoil_v2[0]+'요일')
console.log(yoil_v2)
console.log('-------------------------')
//배열 기초 문제
//1. 원하는 색상을 6개 배열로 각각 저장하고 그 중 좋아하는 색상 2개를 골라서 콘솔에 출력하세요.
// 콘솔결과 예) 좋아하는 색상은 0,0 입니다.

let color = []
console.log(color);
color = ['red', 'blue', 'yellow', 'orange', 'green'];
console.log(color);
console.log(`좋아하는 색상은 ${color[1]},${color[2]} 입니다.`)
//2. 좋아하는 과일을 5개 배열로 저장하고 모두 역순으로 출력해보세요.
let fruitList = new Array('orange', 'tomato', 'banana', 'apple', 'mango');
console.log(fruitList);
//역순출력
let result = `${fruitList[4]},${fruitList[3]},${fruitList[2]},${fruitList[1]},${fruitList[0]}`
console.log(result)
//날씨카드(맑음,흐림,비,눈)을 배열로 생성하고 이번주 기상예보를 출력하세요.
//결과 예)
//월요일 : 맑음
//화요일 : 눈
//수요일 : 비
//목요일 : 흐림
//금요일 : 맑음
//토요일 : 맑음
//일요일 : 눈
//yoil = ['월','화','수','목','금','토','일'];
const weather =['맑음','흐림','비','눈'];
console.log(`오늘 날씨는 ${yoil[0]}요일:${weather[0]} 입니다.`)
console.log(`오늘 날씨는 ${yoil[1]}요일:${weather[1]} 입니다.`)
console.log(`오늘 날씨는 ${yoil[2]}요일:${weather[2]} 입니다.`)
console.log(`오늘 날씨는 ${yoil[3]}요일:${weather[3]} 입니다.`)
console.log(`오늘 날씨는 ${yoil[6]}요일:${weather[2]} 입니다.`)
console.log('-------------------------')
/* let cgv = new Array(8)
console.log(cgv)
console.log(cgv.length)
cgv[0] = 'A1'
console.log(cgv)
cgv[1] = 'C3'
console.log(cgv)
cgv.push('F5')
console.log(cgv)
//배열 속성 활용
let megabox = []
console.log(megabox)
console.log(megabox.length)
megabox.push('A2')
console.log(megabox)
megabox.push('B1')
console.log(megabox)
megabox.unshift('A1')
console.log(megabox)
megabox.pop('A1')
megabox.log(megabox)
megabox.shift()
megabox.log(megabox)
megabox.push('F5','F6')
megabox.log(megabox)
console.log('-------------------------')*/
/*let lottecinema = []
let price = 10000
//ex ) 좌석 배열에 3개의 좌석정보가 들어있을 때 
// 예매하신 좌석은 총 3좌석이며 성인 1명당 10000원 기준으로 총 결제 금액은 30000원 입니다.
lottecinema.push('A5','A6')
lottecinema.unshift('A4')
console.log(lottecinema) //a4 a5 a6
let total = `예매하신 좌석은 총 ${lottecinema.length}좌석이며 
성인 1명당 ${price}원 기준으로 총 결제 금액은 ${lottecinema.length * price}원입니다.`
console.log(total)
//뒤로가기 인원 수정
lottecinema.pop() 
//결제 하기 클릭 후  메세지 출력
total = `예매하신 좌석은 총 ${lottecinema.length}좌석이며 
성인 1명당 ${price}원 기준으로 총 결제 금액은 ${lottecinema.length * price}원입니다.`
console.log(total)
//뒤로가기 인원 수정
lottecinema.push('D5','D6')
//결제 하기 클릭 후 메세지 출력
total = `예매하신 좌석은 총 ${lottecinema.length}좌석이며 
성인 1명당 ${price}원 기준으로 총 결제 금액은 ${lottecinema.length * price}원입니다.`
console.log(total)*/
total_func()
function total_func(){
    total = `예매하신 좌석은 총 ${lottecinema.length}좌석이며 성인 1명당 ${price}원 기준으로 총 결제금액은 ${lottecinema.length * price}원입니다.`
    console.log(total)
}