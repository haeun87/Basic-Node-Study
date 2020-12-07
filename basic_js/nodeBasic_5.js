/*
    case 70 ~ case 92
*/

/*
    case 70 ~ case 73 : 문자열 조작 (p144)
*/

//replace : 문자열의 특정 부분을 변경(result: new string)
let strTemp1 = 'Hello, this is JAVA class';
console.log(`'JAVA' to 'JAVASCRIPT'\n => '${strTemp1}' to '${strTemp1.replace('JAVA','JAVASCRIPT')}'`);

//split : 특장 문자로 분리 (result: 배열)
let strTemp2 = 'Hello/this is/my class/happly coding/!!';
console.log(`split '${strTemp2}' with '/'\n => result below...`);
let arr = strTemp2.split('/');
arr.forEach(el => {console.log(el)});

//substring : 특정인덱스까지의 문자열을 뽑아냄 (result: new string) * python과 달리 -1과 같은 형식은 사용 불가
let strTemp3 = 'This was such a long string, so you should have made it shorten.';
console.log(` 원문 = ${strTemp3}`);
console.log(` 원문 = ${strTemp3.substring(48, strTemp3.length)}`); // 첫번째 인덱스부터 두번째 인덱스의 -1에 해당하는 인덱스까지 추출
console.log(` 원문 = ${strTemp3.substring(48)}`); // 끝까지 parsing하는 경우에 두번째 인자는 생략 가능(그 반대의 경우는 반드시 0이 필요)

//Number : 숫자로 변환
let strNumber = '55555.5555';
let pureNumber = 44444.4445;
console.log('그냥 더했을 때 =',strNumber+pureNumber);// 5555544445
console.log('Number 변환 후 더했을 때 =',Number(strNumber)+pureNumber);// 100000 <= strNumber의 소수점이 생략되지 않음
console.log('parseInt 변환 후  더했을 때 =', parseInt(strNumber)+pureNumber);// 99999.4445 <= strNumber의 소수점이 생략됨
console.log('parseFloat 변환 후  더했을 때 =', parseFloat(strNumber)+pureNumber);// 100000 <= strNumber의 소수점이 생략되지 않음

/*
    case 74 ~ case 78 : 정규 표현식 (p151)
*/
let strTemp4 = '(<h1>:::특별 세일가 - </h1><h2>99,000 원:::</h2>)';
// 태그 없애기
console.log(strTemp4.replace(/<..>/g,''));// <> 내부에 .의 수만큼 매칭되는 경우
console.log(strTemp4.replace(/<.{0,4}>/g,'')); //<> 내부에 0~4개만큼 매칭되는 경우
console.log(strTemp4.replace(/[:/()]|<.{0,4}>/g,'')); //<> [] 내부 문자와 매칭되는 경우 * 또는은 |로 연결

let strTemp5 = 'hello this is javascript class (^0^)/';
console.log(strTemp5.match(/[a-l]{1,3}/g)); // a부터 l까지의 매칭되면서 1~3개 연속인 문자열(순차적으로 검색)

/*
    case 79 ~ case 81 : 인터벌 설정하기 (p159)
*/
// 3초 후에 한번만 출력
setTimeout(() => console.log('hi there!'), 3000);

// setInterver 함수를 설정
var stopHello = setInterval(() => console.log('time to say HELLO'), 1000);//1초에 한번씩

const printBye = () => console.log('now I say GOODBYE');
// 기설정한 함수를 변수로 대입 가능
var stopBye = setInterval(printBye , 3000);// 3초에 한번씩

setTimeout(() => {
    clearInterval(stopHello);// 기존 interval을 제거하는 함수
    clearInterval(stopBye);
    console.log('clean and peace:)');
}, 15000); // 15초 후에 재생 중인 interval을 전부 정지시킨다.

/*
    case 82 ~ case 92 : 배열/리스트 조작 (p162)
    => javascript의 array는 list의 성질을 가지고 있으므로 java 등과 달리 항목의 추가, 수정, 삭제가 자유롭다.
    => index가 명시되지 않은 경우 array, json 오브젝트가 들어 있어 목록처럼 다루는 경우 list라 구분하기도 함
    => es6에서 등장한 map 등과도 혼용해서 사용됨
    => 축약어는 []
*/
const listTemp = [
    {name: 'honigil', age: 24, score: 87 },
    {name: 'ddochi', age: 10, score: 40},
    {name: 'jane', age: 81, score: 98}
];

var iterList = arrayT => {
    console.log('======== START ===========')
    arrayT.forEach( T => {console.log(T);})
    console.log('======== END =============')
};
console.log(listTemp[0]); //특정 인덱스 출력
const yunaKim = {name: 'yuna', age: 30, score: 1000}

iterList(listTemp); // 기존 3개 출력
listTemp.push(yunaKim); // 뒤에서 추가
iterList(listTemp); // 4개 출력
listTemp.pop(); // 뒤에서 제거
iterList(listTemp); // 기존 3개 출력
listTemp.unshift(yunaKim); // 앞에서 추가
iterList(listTemp); // 4개 출력
listTemp.shift(yunaKim); // 앞에서 제거
iterList(listTemp); // 기존 3개 출력

//reserse, sort()
const arrTemp = [1,5,3,6,5,8,7,4,9];
console.log(arrTemp.reverse().toString()); // 배열 뒤집기
console.log(arrTemp.sort().toString()); // 오름차순으로 정렬
console.log(arrTemp.sort().reverse().toString()); // 내림차순으로 정렬


// 지정 조건식 sort
var newList = listTemp.sort((beforeTemp, nextTemp) => {
    return (beforeTemp.age > nextTemp.age) ? 1 : -1;
});// 나이별 정렬 * if else if를 이용하면 다중 정렬도 가능!
newList.forEach(newEl => console.log(`name=${newEl.name}, age=${newEl.age}, score=${newEl.score}`)); 

// JSON Object의 정렬
var objSorting = listTemp.sort((now, next) => now.score - next.score); // 점수로 정렬
objSorting.forEach(newEl => console.log(`name=${newEl.name}, age=${newEl.age}, score=${newEl.score}`)); 

//slice
const arrTemp2 = ['apple','orange','strawberry','melon','banana','pear','grape','watermelon','papaya'];
console.log(arrTemp2.slice(1,3));// 첫번째 인덱스로부터 두번째 인덱스 전까지의 배열요소만 꺼내온다.

// concat
const arrTemp3 = ['rasberry','peach'];
console.log(arrTemp2.concat(arrTemp3));// 뒤로 추가됨
