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
let funcEx = (a,b) => a + b; // 1줄인 경우에는 return도 생략 가능!
console.log(funcEx(a,b));

/*
    case 53 ~ case 52 : 화살표 함수
     => 자바스크립트 고유의 특수 함수 표기법
     => 인수가 하나이거나 함수의 연산이 1줄에 끝나는 경우에는 각각 괄호를 생략할 수 있다.
*/