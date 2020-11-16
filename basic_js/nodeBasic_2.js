/*
    * case 16 ~ case 26
*/

/*
    case 16 ~ case 18 : array (p46)
*/

var arr = [3, 2.5, 4, "hello", true]; // 데이터 타입의 제한이 없음

console.log(arr);

arr.push("add Some");
console.log(arr[3]); //hello

/*
    * case 19 ~ case 20 : JSON (p51)
     => JavaScript Object Notation
     => 자바스크립트에서 오브젝트(객체)를 표현하는 방법. 일명 자바스크립트 객체.

*/

let jane = {
    gender : 'Female',
    age : 23,
    job : 'doctor',
    hobby : 'jogging'
}

var work = 'job';

console.log(JSON.stringify(jane)); // toString() X

console.log(jane.toString()); // object Object로 출력됨
// console.log(jane); // 구조체도 출력된다.
console.log('jane = ',jane); // 구조체도 출력된다.
// property는 .로 이어서 출력 가능하지만 변수로 할당한 경우에는 mapping(obj[x] 형식)되어야 한다.
console.log(`제인은 취미가 ${jane.hobby}인 ${jane.age}세의 ${jane[work]}입니다.`);
console.log(jane.work); // undefined

/*
    case 21 : typeof (p54)
    => 변수 타입 조회 함수

    case 22 : boolean (p54)
    => 소문자로 true 또는 false
*/
var var1 = 5.4421;
var var2 = "gooooood!!";
var var3 = true;
console.log(`var1의 데이터타입 = ${typeof var1}, var2의 데이터타입 = ${typeof var2}`); //괄호 없이 사용
console.log('{}의 데이터 타입 = %s, []의 데이터 타입 = %s',typeof {}, typeof []); // 구체적인 구분은 출력되지 않고 object로 출력
console.log(`var3의 데이터타입 = ${typeof var3}`); // boolean type
console.log(20 > 10); // if/else 없이 바로 출력, true

/*
    case 23 : 증감연산자 (p58)
        => += -= *= /=
*/
var1 *= 2;
console.log(var1); //10.8842
var1 /= 2;
console.log(var1); // 5.4421

/*
    case 24 : 비교연산자 (p60)
     => == 와 ===의 차이
     => 기타 부등호는 생략
*/

var a = 5; var b = 6;

if (a == 5){
    console.log(a == 5); // true
    console.log(a == b); // false
    console.log(a == '5'); // true => 형식이 달라도 성림!
}

if (a === 5) {
    console.log(a === 5); // true
    console.log(a === b); // false
    console.log(a === '5'); // false => 형식도 같아야만 성립!
}

/*
    case 25 : 논리연산자 (p62)
     => && 와 ||
    
    case26 : 삼항연산자 (p64)
     => [(질문) ? (true) A : (false) B ;]
*/