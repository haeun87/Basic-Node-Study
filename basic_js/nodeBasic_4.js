/*
    case 44 ~ case 
*/

/*
    case 44 ~ case 49 : 함수
     => 자바스크립트 함수는 일급 객체이므로 함수를 변수에 넣거나 함수에 파라미터로 전달할 수 있다.
*/

// 등급 조회 함수 

let students = [
    {name : '둘리', age : 10, score : 66},
    { name: '도우너', age: 11, score: 87 },
    { name: '마이클', age: 30, score: 95 },
    { name: '희동', age: 3, score: 9 }
]

let getDegree = score => {
    if (score >= 90){
        return 'A';
    } else if (score >= 80){
        return 'B';
    } else if (score >= 60){
        return 'C';
    } else{
        return 'F';
    }
}

students.forEach( student =>{
    let result = `name : ${student.name}, score : ${getDegree(student.score)}`;
    console.log(result);
});

/*
    case 50 ~ case 52 : 화살표 함수
     => 자바스크립트 고유의 특수 함수 표기법
     => 인수가 하나이거나 함수의 연산이 1줄에 끝나는 경우에는 각각 괄호를 생략할 수 있다.
*/
var a = 13; var b = 12;
let sum = (a,b) => a + b; // 1줄인 경우에는 return도 생략 가능!
console.log(sum(a,b));

/*
    case 53 : 콜백 함수
     => 특정 함수에 파라매터로 전달된 함수를 지칭함.
     => 콜백함수를 파라매터로 연결하는 형태를 체이닝(chaining)이라고 지칭함.
*/

let funcChild = result => console.group(`결과는 ${result} 입니다.`);

let funcParent = (calResult, callback) => callback(calResult);

funcParent(sum(10,20), funcChild); // sumb을 계산하고 callback이 그 값을 받아 재계산한다!

/*
    case 54 : 함수의 유효 범위
*/

// 전역 변수
let resultSubstraction;
function substraction(a, b){
    resultSubstraction = a -b;
}

substraction(100, 50); // resultSubstraction에 값을 할당하는 함수 연산
console.log(resultSubstraction); // 결과값 산출

// 변수에 익명함수 형태로 함수를 정의할 수 있음.
function multiple(a , b) {
    let result = a * b;
    return result;
}

let r = multiple(10, 10); // result를 받는다.
console.log(r);

//지역 변수
function addition(a, b){
    let resultSum = a + b;
}

addition(10,30);
// console.log(resultSum); //Uncaught ReferenceError: resultSum is not defined


