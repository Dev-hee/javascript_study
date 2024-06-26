24/05/14~(ing) 자바스크립트 기초부터 공부
# javascript
* 자바스크립트는 절차적언어, 객체지향언어, 함수형언어,논리형 언어이다.
* 데이터와 절차를 묶어 객체 단위로 관리하는 객체 지향 언어.
* 절차를 순서대로 작성해 나가는 절차적 언어.
* 프로그램 함수를 조합아여 구현해 나가는 함수형 언어
* 데이터 사이의 관계와 논리를 설명해가는 논리형 언어
* 어떤 동작 결과를 내기 위해서는 결과만 생각하는 것이 아닌 그 결과를 내기 위한 과정과 데이터가 필요하다.
* 1. 목표 설정하기
* 2. 흐름도 만들기 (절차)
* 3. 각 단계를 코드로 표현하기 (실행) - 객체,속성,메소드,이벤트를 결정하여 코드 완성하기.
## 외부,내부 스크립트와 주석
### 외부스크립트
* '<script src="경로"></script>
* `html` 파일 2개 이상에 하나의 `script` 파일을 연결 시 파일관리가 편하도록 외부 스크립트로 관리한다.
* 객체 대상에 적용하는 자바스크립트일 수록 `body` 태그내 `script`를 작성한다.
* 객체 대상이 아닐 경우는 `script` 위치를 찾기 쉽도록 `head` 태그 내에 작성하기도 한다.
### 내부스크립트
* `<script> /*스크립트작성위치*/ </script>`
* 내부스크립트는 `script` 내에 `src` 속성을 쓰지 않는다.
* 그 외 특징은 외부 스크립트와 동일
### 주석
* `//내용` 한줄 주석
* `/*내용*/`  여러 줄 주석
-----------------
## 객체,속성,메서드,이벤트
### 객체와 속성
* 객체 : html태그,  자바스크립트에서 기본적으로 제공해주는 다양한 객체들
* 속성 : html 태그의 속성, 자바스크립트가 제공하는 객체에 해당하는 속성들
* 객체. 속성;
* 객체. 속성.속성;
* 객체. 속성.속성.속성;
* 첫번째 속성 앞에는 반드시 객체가 있어야 한다.
* 일반적으로 속성은 메서드보다 반드시 먼저 선언되어야 한다.
* 속성은 '속성.속성' 2개 이상 필요 시 반복할 수 있다.
### 객체와 메서드
* 메서드 : 자바스크립트가 제공하는 실행 명령어
* 객체.메서드();
* 객체.속성.속성.메서드();
### 중급에서 사용하는 객체,속성,메서드 활용 문법
* `객체.메서드(객체.속성.메서드(););`
* `객체.속성.메서드(객체.속성);`
* `객체.속성.속성.메서드(객체.메서드(););`
* `객체.속성.메서드(객체.메서드(객체.속성.메서드();););`
## 변수
### `변수선언키워드 변수명 대입연산자 대입값`
### `var a = 1`
* 변수명은 영문 대소문자, $, _, 숫자를 사용할 수 있다.
* 변수는 한번에 한가지 값만 담을 수 있다.
* 변수 처음 선언 시에는 반드시 선언키워드가 존재해야한다. 
* 이미 데이터를 가지고있는 변수에 새로운 값을 대입하면 기존 값은 사라지고 새로운값만 대입된다.
* 자바스크립트는 절차형 언어이기 때문에 최종 데이터값이 정해졌다 하더라도 최종까지 도달하기 위해 중간에 삽입한 다른 데이터값도 작성 순서에 따라 존재하므로 언제든지 이용할 수 있다.
### 변수 OX 퀴즈
1. `var 1num = 10;` X - 숫자가 앞에들어가서 틀림
2. `var $num = 10;` 0
3. `var 100num = 10;` X
4. `var num100 = 10;` 0 숫자가 뒤에있어서 맞음
5. `var console = 10;` 콘솔이라는 객체명 사용불가 
6. `var num = 10;` 0 
7. `var log = hello;`X 로그는 예약어라 사용 불가. 문자인데 따옴표가 없다.
8. `var Num = 10;` 0        
9. `var num = js;` X 문자인데 따옴표가 없다.
10. `var js = num;` X 문자인데 따옴표가 없다.
## function 함수명() {재사용문법}
* 특정 기능을 하는 구문을 묶어 재사용하는문법 ==함수

## 함수(function)
* 재사용되는 문법 사용 시 함수를 이용하여 처리한다.
* 함수 내에 재사용 프로그래밍 코드를 여러 줄 입력하면 다시 그 복잡한 코드를 입력하지 않아도 간단하게 호출 할 수 있다는 장점이 있다.
* `함수생성키워드 함수명(){재사용프로그래밍}`
* `function name(){ ... }`
1. 처음 함수 생성 시 function 키워드 활용 작성
2. 함수 용도에 맞춰 의미있는 함수명 작성 `function 함수명`
3. 함수명 뒤 소괄호 `()`붙이고 바로 그 뒤로 중괄호 `{}` 작성하기
4. 중괄호 `{}` 내에 재사용되는 반복 프로그래밍 코드 작성
5. 재사용 함수를 사용하고 싶은 위치에서 함수 호출하기 **함수호출하기**

### 함수 생성법과 호출법
* 생성 : `function 함수명() {재사용프로그래밍}`
* 호출 : `함수명()`
* 함수를 호출 없이 생성만 하면 절대 화면에서 결과를 볼 수 없다.
* 호출은 생성한 함수명과 동일하게 작성해야 한다.
* 호출은 함수 생성 바깥쪽에서 작성해야한다.

### 데이터 구분하는 쉼표와 연결연산자(+)
* `console.log("a는", a)`
* 위 쉼표 구분은 문자 "a는" 과 변수 a를 각각 다르게 구분하여 필요 시 문자와 변수를 다르게 처리할 수 있다.
* `console.log("a는" + a)`
* 위 연결연산자는 문자 "a는" 과 변수 a를 하나로 연결하여 데이터를 하나로 통합시킨다. 기존 데이터 특징을 없애고 통일하기 때문에 추가 처리가 새로운 연산자를 쓰는 경우가 아니라면 불가능하다. (추가 괄호로 우선순위 설정 가능)

## `+` 연결연산자와 더하기연산자
* 좌항, 우항에 들어간 데이터 종류에 따라 연결,더하기가 구분된다.
* 숫자 + 숫자 = 숫자 (더하기)
* "문자" + "문자" = "문자" (연결)
* "문자" + 숫자 = "문자" (연결)

### 자바스크립트 변수, 함수 주의사항
* 목표설정 기준으로 모든 데이터를 변수에 대입해야 한다.
* 2개 이상의 데이터들을 이용해서 최종 산술식이 필요한 경우는 최종 변수도 따로 만드는 것이 좋다.
* 다양한 목적으로 사용 가능한 변수는 반드시 전역변수로 생성하여 위치 제한 없이 사용할 수 있도록 한다.
* 특정 함수 내에서 일회성으로 사용하는 변수는 `function` 내에서 작성하여 지역변수로 사용한다.
* 함수의 지역변수로 생성 시 서로 다른 함수에서 해당 지역변수 이름을 중복사용할 수 있다.
* `function fun1 {let a=1;}`
* `function fun2 {let a=1;}`

## 배열
* 2개이상 데이터를 저장할 때 배열을 사용 해야한다.
* `const 배열명 = new Array(데이터1, 데이터2)`
* `let 배열명 = [데이터1, 데이터2, 데이터3]`
* `var 배열명 = new Array(5)` //빈 5개 배열 준비 
* 배열 데이터는 0부터 데이터를 인식한다.
* 2번째 데이터를 출력하고 싶으면? 배열번호는 -1 해서 1번
* 배열의 데이터 번호 == index
* `배열명[index]`
* 배열의 `length` 속성은 index와 다르게 1부터 인식한다.
* `배열.length` `객체.속성`
### 배열의 추가 속성
* `array.length` : 배열의 길이(개수) 확인
* `array.push()` : 배열의 마지막 자식 위치로 데이터 추가
* `array.pop()` : 배열의 끝 값 제거
* `array.unshift()` : 배열의 시작위치에 데이터 추가
* `array.shift()` : 배열의 시작 값 제거
--------
## 객체 object
* `변수생성키워드 객체명 = {속성:값, 속성:값,}`
* `변수생성키워드 객체명 = {key:값, key:값,}`
* 객체의 속성은 **key** 라고도 부른다.
* 속성(key)명은 그 속성이 가진 값에 어울리는 의미적인 이름으로 작성한다.(정해진 키워드가 아님)
* 객체 속성에 2개 이상의 값을 설정할 때는 배열을 이용해야 한다.
* `객체명 = {key:['배열첫번째값', '배열두번째값'],}`
## 객체와 배열
* 키:값 구조로 된 객체를 큰 분류로 2개 이상 제작할 때는 배열을 이용해야 한다.
* 배열을 먼저 묶고 배열의 값 위치에 객체를 의이하는 `{}`를 묶어주는 것으로 시작한다.
* `const 이름 = [{},{},{}...]`
* `const 이름 = [{key:value, key:value,},{},{}...]`
* `const 이름 = [{key:[v1, v2], key:value},{},{}...]`

* 외부 script를 Head 태그내에 작성하면 HTML 읽기전으로 DCM 연결 시 undefinde가 출력된다.
* 외부 script를 body 태그내에 모든 태그 입력 후 가장 아래쪽에 작성하면 모든 태그를 읽은 후이기 때문에 JS 내에서 DOM연결 시 올바른 DOM정보가 출력된다.
----------------------
## BOM,DOM
### BOM(Browser Objerct Model)
* `window` 최상위 객체를 기준으로 속성, 메소드 이용
* 자주 사용하는 속성, 메소드 : `alert()`, `prompt()`, `confirm()`,`locaton()` 등...
* `window.alert();`
* `alert();`
### DOM(Document Objerct Model)
* `document` 본문 최상위 객체 대상으로 속성, 메소드 이용, 생략할 수 없다.
#### DOM 선택 시 자주 사용하는 메서드(함수) 종류
* `document.getElementsByTagName("태그명")`
* `document.getElementsByClassName("클래스명")`
* `document.getElementsById("아이디명")`
* `document.querySelector("태그명")`
* `document.querySelector(".클래스명")`
* `document.querySelector("#아이디명")`
* `document.querySelectorAll("태그명")`
* `document.querySelectorAll(".클래스명")`
* `getElements...`와 `querySelecoerAll` 함수는 `index`를 사용해서 대상을 선택하므로 사용 시 주의가 필요하다.
---------------------
## 가족관계 선택속성
* `parentNode`, `parentElement`
* `parentNode` ➡ 부모 노드 중 모든 노드를 반환한다.
* `parentElement` ➡ 부모 노드 중에 요소 노드를 반환한다.
* `header>nav` 관계DOM 이 있을 때 `nav`의 부모를 선택할 때 이용할 수 있다.
* DOM.parentNode, DOM.parentElement.parentElement 등..
* `childNodes`, `Childern`
* 공백포함 자식 요소를 반환, 자식 요소를 반환
* `firstChild`, `firstElementChild`
* 공백포함 첫번째 자식 요소를 반환, 첫번째 자식 요소를 반환
* `lastChild`, `lastElementChild`
* 공백포함 마지막 자식 요소를 반환, 마지막 자식 요소를 반환
* `nextSibling`, `nextElementSibling`
* 공백포함 다음 형제 속성, 다음 형제 요소만 인식
* `previousSibling`, `previousElementSibling`
*  공백포함 이전 형제 , 이전 형제 요소만 인식

## 자바스크립트 객체 속성
* `innerHTML` : 객체.속성
* 자바스크립트로 HTML DOM 제작 시 HTML읽기.삽입, 수정 진행용으로 사용하는 속성
* `<span>0</span>` -> `<em>1</em>`
* `<span class="a">0</span>` -> `<span class="b">0</span>`
* `innerText` : 객체.속성
* `<span>0</span>` span 태그가 아닌 단순 문자 0값만 변경하려고 할 때 사용하는 속성
## 자바스크립트 연산자
* `=` 대입연산자
* 새로운 값이 대입되면 기존 값을 제거한다.
* `var a = 10`
* `a = 20` // 최종 a의 결과는? 20
* `+=` 복합대입연산자
* 새로운 값이 대입될 때 기존 값에 추가 대입된다.
* `var a = 10`
* `a += 20` // 최종 a의 결과는? 30 `a = a+20`
## 삼항연산자
* 조건에 따라 값의 참과 거짓을 구분할 때 사용하는 연산자
* `조건? 조건값이 참일 때 실행되는 결과 : 조건값이 거짓일 때 실행되는 결과`
* 조건 작성위치에 비교연산자를 사용한다.
* 비교 연산자 : <,>, ==, <=, >=, !=
## 자바스크립트가 인식하는 참,거짓 종류
* 거짓으로 인식하는 값 = falsy
2. null
3. undefined
4. NaN (Not a number)
5. 0
6. ""// 빈 문자열
* ------true
1. 참 으로 인식하는 값 = truthy
2. false가 아닌 모든 값들
3. 0 보다 큰 숫자
4. [] //빈 배열도 참!
5. {} // 빈 객체도 참!
---------------------------
## 조건문
* `if(조건식){조건식이 참일 경우 실행결과}`
* `if(조건식){참 실행}else{조건식이 거짓일 때 실행결과}`
* 조건식 작성 시 주의사항 > 참, 거짓으로 결과가 구분되는 데이터 확인하고 작성해야 한다.
### falsy 구분되는 값
* false, null, undefined, NaN, 0, ""
### truthy 구분되는 값
* false가 아닌 모든 값, [], {}