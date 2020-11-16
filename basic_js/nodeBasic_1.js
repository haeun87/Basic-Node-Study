/*
    * case 1 ~ case 15
        => case 1~2는 설치 문제이므로 생략함.
*/

/*
    case 3 : 각 ES5/ES5 별 출력 (p27)
*/
function printHelloEs5(){
    console.log('종전 규정대로 출력');
}

const printHelloEs6 = () => {
    console.log('신규 규정대로 출력');
}

// 두가지 버전이 혼용되서 출력가능하다!
printHelloEs5();
printHelloEs6();

/*
    case 4 : 다양한 출력 방식 (p28)
*/

console.log('hello');
console.log('hello','bye'); // 콤마로 구분해서 출력 가능함(공백 구분)
console.warn(`this line ${'can make error!!'}`); // warn 출력(색깔 구분) & 백틱 형식

/*
    case 5 : 포맷팅 출력 (p29)
*/

console.log('name : %s , age : %d', 'gil-dong', 24); // 템플릿 형식으로 출력 => 별다른 표식 없이 %s/%d 등의 기호로 바로 지정 가능(인자수만큼 콤마로 열거함) cf. format string method
console.log(' %d == %.2f %s',3.147, 3.147); //%d와 %.2f의 구분 없이 숫자로 출력된다.(오류 발생 X) 인수가 없는 포맷자는 글자 그대로 출력된다.

/*
    case 6 : `${'변수'}` 백틱의 사용 (p31)
*/

personName = '영희'
departHour = 9
placeName = '학교'
strSample = `${personName}는 아침 ${departHour} 시까지 ${placeName}에 갑니다.`
console.log(strSample);

/*
    case 7 : 주석 (p33)
    // 한줄 주석
    /*
        여러줄 주석
    */
// */ <= 여러줄 주석 안에 여러줄 주석을 포함하는 경우 내부 주석 닫기를 끝으로 인식하므로 마지막 주석 닫기의 오류가 발생한다.

/*
    case 8 : let (p34)
     => var의 호이스팅과 중복 선언 문제를 개선한 것이 let으로 실질적으로 동일한 역할을 수행함
    
    case 9 : const (p36)
     => 상수 선언에 해당하는 선언자로 static과 동일한 역할을 수행한다. 
     => 다만 스크립트 언어기 때문에 static main 등의 조건이 필요하지는 않고 final이 아니므로 다른 스크립트가 조건 없이 참조할 수 없다.
*/

/*
    case 10: 문자와 숫자 (p38)
     => c나 java와 달리 자료형을 명시하지 않으므로 변수에 전혀 다른 타입으로 재할당하는 것이 가능하다.
*/
let var1 = 10;
console.log(var1);
var1 = "안녕하세요";
console.log(var1);

/*
    case 11: .isNaN() (p40)
     => 숫자인지 아닌지 확인하는 방법
*/
let num = 123
let test1 = isNaN(123)
let test1_al = isNaN('123')
let str = "hello"
let test2 = isNaN("hello")
let ans = 0 / 123
let test3 = isNaN(0 / 123)
console.log(`${num} ?  ${test1}`);
console.log(`${'123'} ? ${test1_al}`); // 문자화한 숫자로 false를 반환함(주의)
console.log(`${str} ?  ${test2}`);  // 명확히 문자열인 경우에만 true가 출력  
console.log(`${ans} ?  ${test3}`);   

/*
    case 12: 연산 (p41)
     => 숫자인지 아닌지 확인하는 방법
*/

const ADD = 1;
const SUB = 2;
const MUL = 3;
const DIV = 4;

let computation = (num1, num2, method) => {
    switch(method){
        case ADD:
            return num1 + num2;
        case SUB: 
            return Math.abs(num1 - num2);
        case MUL:
            return num1*num2;
        case DIV:
            if(num2 === 0){
                return null;
            }
            else{
                return num1 / num2;
            }
        default:
            return null;
    }
} 


var numX = 10
var numY = 20

var func = SUB

ans = computation(numX, numY, func);
if(ans !== null){
    console.log("정답은 =", ans);
}
else{
    console.log("연산 실패...");
}

/*
    case 13: 홀수 짝수 판단 (p42)
*/

numX = 13
numY = 2
console.log(` ${numX} % ${numY} = ${numX % numY}`);
var whichType = numX => {
    if(numX % 2 === 0){
        return "Even";
    }else{
        return "Odd";
    }
}
console.log(` ${numX} % 2 = ${numX % 2} (so numX is ${whichType(numX)})`);

/*
    case 14: .length (p43)
*/
str = "Hello, this is Javascript basic study script!!";
console.log(`length of '${str}' = ${str.length}`); // length는 함수가 아님! cf. size()

/*
    case 15: indexOf() (p44)
*/
console.log('Javascript :', str.indexOf('Javascript')); // str에서 'Javascript'의 인덱스 번호 중 J에 해당
console.log('Python :', str.indexOf('Python')); // 없으면 -1을 return

