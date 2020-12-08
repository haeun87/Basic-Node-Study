/*
    case 103 ~ case 116
*/

/*
    case 103 ~ case 105: curring (p196)
    => 여러개의 파라미터를 갖는 함수가 그 중 일부의 파라미터만 필요로 하는 함수를 만드는 기법(즉 파라미터가 부족해도 차후에 채울 수 있게 하는 방식)
    => 함수 중복을 최소화하려는 목적으로 콜백을 응용함
    => 화살표 개수보다 적은 인자값이 들어오면 함수를 반환함
    => 여러개의 화살표가 존재할 때 각 인자값을 ()()로 묶어주면 한꺼번에 받는 것과 동일한 효과(실제는 그 중간에 콜백을 반복함)
*/

//커링의 기본
const add = x => y => x + y;
const add10 = add(10);

console.log(add10(20));// add10에서 1차로 받고 이후 add10 자체에서 2차로 받음
console.log(add(10)(20));// 10과 20을 순차로 받음

// 커링 예제 1
const coffeeMachine = liquid => espresso => `${espresso} + ${liquid}`;

const americanoMachine = coffeeMachine('water');
const latteMachine = coffeeMachine('milk');

const americano = americanoMachine('coffee bean');
const latte = latteMachine('coffee bean');

console.log(americano);
console.log(latte);

//커링 예제 2
const fs = require('fs');// 파일 관련 내장 라이브러리

const openFileAndPrint = path => fileName => fs.readFile(path + fileName, (err, data) => {
    if (err) {throw err;}
    console.log(data.toString()); 
    });

const otherDirOpenFileAndPrint = openFileAndPrint('./');
otherDirOpenFileAndPrint('sample.json'); // 출력

// const thisDirOpenFileAndPrint = openFileAndPrint('./basic_js/');
// thisDirOpenFileAndPrint('unknown.js'); // 오류 발생


/*
    case 106 ~ case 107: predicate (p201)
    => 함수이면서 true/false를 반환하는 함수
*/
// 프리디케이트로 정렬

const numbers = [1, 2, 19, 38, 4, 98, 25];

const isFirstBiggerThenSecond = (first, second) => {
    if (first > second) return 1;
    return -1;
}

const sortedNumbers = numbers.sort(isFirstBiggerThenSecond);
console.log(sortedNumbers);// 정렬된 배열

/*
    case 108 ~ case 109: filter (p204)
    => 특정 조건을 만족하는 요소만 모아 다시 배열로 반환하는 함수
*/
const biggerThen10 = numbers.filter(number => number > 10);
console.log(biggerThen10);// 10보다 큰 수 출력

/*
    case 110 ~ case 111: map 함수 (p208)
    => 배열에 각 값에 대응하여 연산시에 사용
*/
const listTemp1 = [1,2,3,4,5];

const multipledList = listTemp1.map(item => item*10);

console.log(multipledList);

/*
    case 112 ~ case 113: reduce 함수 (p212)
    => 특정 배열의 규모를 줄여가면서 연산시에 사용, 단  2두번째 인자값은 초기값에 해당함
*/

const sumWithInvalue = multipledList.reduce((a,b) => (a+b), 10);
console.log('sum =',sumWithInvalue);

/*
    case 114 ~ case 116: filter,map,reduce 예제 (p216)
    => 병렬로 이어서 처리 가능 cf. function().then().then() ... 
*/

const employeeList = [
    { name: 'barbie', age: 23, department: 'marketing', score: 85},
    { name: 'kenn', age: 31, department: 'sales', score: 90},
    { name: 'gildong', age: 24, department: 'engineering', score: 67},
    { name: 'ddochi', age: 10, department: 'engineering', score: 99},
    { name: 'villgate', age: 70, department: 'engineering', score: 98}
];

const developerAgeList = employeeList.filter(employee => employee.department === 'engineering').map(employee => employee.age);
console.log(developerAgeList.reduce((a, b) => a + b));

const between21to40EmployeeAverage = employeeList
.filter(employee => employee.age >= 21 && employee.age < 40)
.map(employee => employee.score)
.reduce( (previous, current, index, array) => previous + (current/array.length), 0);

console.log('average :',between21to40EmployeeAverage);