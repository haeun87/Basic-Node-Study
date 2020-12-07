/*
    case 27 ~ case 43
*/

/*
    case 27 ~ case 30 조건문 (p68)
*/

var num1 = 30; var num2 = 15; // if를 출력
// var num1 = 15; var num2 = 30; // else if를 출력
// var num1 = 30; var num2 = 30; // else를 출력

// if / else if / else
if (num1 > num2){
    console.log("num1 is Big!");
}else if(num2 > num1){
    console.log("num2 is Big!");
}else{ // num1 == num2
    console.log("It's Same!!");
}

// switch / case / default
var num3 = 6

switch(num3){
    case 1:
        console.log("num3 is 1");
    case 2:
        console.log("num3 is 2");
    case 3:
        console.log("num3 is 3");
    case 4:
        console.log("num3 is 4");
    case 5:
        console.log("num3 is 5");
    default:
        console.log("not in range(1,5)");
}

/*
    case 31 ~ case 36 반복문 (p75)
*/

let sum = 0;


for(var v = 0; v <= 100; ++v){
    sum += v;
}
console.log("v =", v); // 선증감 조건이라 v는 101까지 증가함, 호이스팅 적용된 값
console.log("1부터 100까지의 합 :", sum);

// 구구단
for(let j = 2; j<=9; j++){
    console.log("=== %d 단 시작 ===", j);
    for(let i = 1; i <= 9; i++){
        if(j*i > 50){
            console.log("50보다 큰 값은 출력 안함!")
            break;
        } 
        console.log(`${j} X ${i} = ${j*i}`);
    }
}
/*
    for in VS for of
    1) for in
        => 객체의 key값에 접근 O, 객체의 value 값에 접근 X
        => 내부적으로 Enumerable 속성이 내제되어 있어 그 값이 true로 셋팅되어 있는 경우의 속성만 반복됨
        => 모든 객체에 사용 가능
        => prototype로 상위에 추가된 객체까지 순회함
    2) for of
        => Symbol.iterator 속성을 갖는 컬렉션만 적용됨
        => 인덱스가 아닌 요소를 직접 받아옴
        => 연산 도중 오류 발생시에 전부 null로 표시하게 됨
        => 현재의 객체에 대해서만 순회를 수행함(상위 객체 X)

*/
var data = [1, 2, undefined, NaN, null, ""];

Array.prototype.getIndex = function(){};

console.log("==== for in======")
for(let k in data){
    console.log(data[k]); // undefined부터 시작해서 NaN, null, 심지어 상위 prototype에 추가된 객체까지 순회함
}
console.log("==== for of======")
for(let value of data){
    console.log(value);// 상위 객체를 제외한 현재 객체만 출력.
}
console.log("==== end for ======")

// for of
let userList = [
    {name : 'jane', job : 'doctor', age : 24},
    {name : 'anne', job : 'writer', age : 50},
    {name : 'gildong', job : 'theaf', age : 38}
];



for(let user of userList){
    console.log(`${user.name}의 직업은 ${user.job}입니다.`);
}

// for each()
userList.forEach(user => console.log(`${user.name}의 나이는 ${user.age} 세입니다.`)); // 화살표 함수 형식(생략형)

// while()

var num = 25;
sum = 0;
while(num > 0){
    sum += num--;
    
}
console.log(sum, 25*26/2);// 1부터 25까지의 합 구하기

/*
    case 37 ~ case 40 날짜 함수 (p85)
*/

// Date(yyyy,m[0~11월],d[1~31일],hh,mm,ss) 
console.log(new Date().toLocaleDateString());// 현재 날짜(날짜만 출력하는 포맷 적용)
var birth = new Date(2019, 7, 17, 13, 07, 24)
console.log(birth);// Mon Sep 16 2019 13:07:24 GMT+0900 (GMT+09:00)
console.log("탄생월 =",birth.getMonth()+1,"월");// 8월 ** year, date etc...

//Timestamp
let timeRandom = Math.random()*100000000000 -1; //랜덤으로 timestamp 생성
console.log(new Date(timeRandom));

/*
    case 41 ~ case 42 : 예외 처리 (p92)
     => try / catch / finally
*/

/*
    case 43 : 전역 객체(Global Object) (p96)
     => console도 전역 객체에 해당함!
     => 전역 객체 예시
        process, console, buffer, require()(모듈 로딩), (set)Timeout...
*/

//process : 현재 동작 중인 프로세스의 정보
console.log(process.env); // 컴퓨터 환경과 관련 정보
console.log('---------------');
console.log(process.arch); // 프로세스의 아키텍처 ex> x64, x86
console.log('---------------');
console.log(process.uptime()); // 프로그램 실행된 시간 
console.log('---------------');
console.log(process.memoryUsage()); // 메모리 사용 정보
console.log('---------------');
console.log(process.version); // Node.js 버젼
console.log('---------------');
console.log(__filename, __dirname); // 현재 파일/폴더 경로
console.log('---------------');



