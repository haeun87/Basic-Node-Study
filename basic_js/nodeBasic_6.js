/*
    case 93 ~ case 102
*/

/*
    case 93 ~ case 100 : 재귀 함수 등 (p182)
*/

// 객체 함수의 반환(순차적으로 빠려나오는 개념 <= chaining)

const returnFunction1 = (a, b) => a + b;
const plus1 = returnFunction1;
console.log(plus1(10, 20));//30

const returnFunction2 = () => (a, b) => a + b;
let plus2 = returnFunction2;
console.log(plus2(10, 20));// 함수가 출력됨
plus2 = returnFunction2();
console.log(plus2(10, 20));//30

// 재귀 함수 1 : 카운트다운
const countdown = (value) => {
    (value % 5 === 0) ? console.log('value: ',value) : null ; // 5개씩만 출력
    return (value === 0) ? value : countdown(value-1);
};

console.log('result: ',countdown(20));

// 재귀 함수 2 : 합산
const sumNumber = (start, end, accumulator) => {
    return (start > end ) ? accumulator : sumNumber(start +1, end, accumulator + start);
};

console.log('1부터 10까지의 합 ',sumNumber(1, 10, 0));

// 재귀 함수 3 : 팩토리얼
const factorial = (n) => {
    return (n === 0) ? 1 : n*factorial(n-1);
}

console.log(`4!의 값 = ${factorial(4)}`);

// 재귀함수 4: 피보나치

const fibonacci = (num) => {
    return (num <= 1) ? 1: fibonacci(num-1) + fibonacci(num-2);
}

for(let i=1; i< 10; i++){
    console.log(fibonacci(i));
}

// 재귀 함수 5: 배열의 합계 연산

const scores = [89,54,99,54,78,94,96];

const sumlist = (list, total, length) => {
    return (length === list.length) ? total : sumlist(list, total + list[length], length +1);
}

console.log('sum = ', sumlist(scores, 0, 0));

// 재귀 함수 6: 평균 구하기

const avglist = (list, total, length) => {
    return (length === list.length) ? (total/length) : avglist(list, total + list[length], length +1);
}

console.log('avg = ', avglist(scores, 0, 0));

/*
    case 101: closer (p192)
    => 내부함수가 참조하는 외부함수의 지역변수가 외부함수가 리턴된 이후에도 유효성이 유지될 때 이 내부함수를 클로저라고 칭함
    => 클로저는 외부 함수 변수의 값이 아닌 참조를 저장하는 식으로 동작함
    => 아래 케이스의 경우에는 child 함수가 closer에 해당함
*/

function grandParent(g1, g2){
    const g3 = 3;
    return function parent(p1, p2){
        const p3 = 33;
        return function child(c1, c2){
            const c3 = 333;
            return g1+ g2 + g3 + p1 + p2 + p3 + c1 + c2 + c3;
        };
    };
};

const parentFunction = grandParent(1,2);
const childFunction = parentFunction(11, 22);
console.log(childFunction(111,222));

/*
    case 102: 함성함수 (p194)
    => 여러개의 함수를 겹쳐 쓰는 것을 말함
    => chaining 기법
*/

const loging = x => console.log('결과는 =',x);
const addition = (a, b) => a + b;
loging(addition(3,5));

