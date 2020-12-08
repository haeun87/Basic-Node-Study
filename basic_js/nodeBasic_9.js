/*
    case 121 ~ case 132
*/

/*
    case 121 ~ case 122: 자바스크립트 이론 및 파일 입출력 모듈 (p232)
    * 비동기(Async)란
        => return 값이 없는 실행 함수
        => 피드백보다 처리 속도가 중요할 때 유용
        => 자바스크립트는 비동기 함수의 장점을 최대화하기 위하여 함수형 프로그래밍을 장려함
*/
// case 123 : fs.write()

const fs = require('fs');

const contents = 
`
            <<GREETINGS>>
 Hello there! This is Javascript class.
 I wish you can enjoy the class either.
 Have a nice day:D
`;

fs.writeFile('./message.txt',contents,(result => console.log('File made done!!')));

setTimeout(() => {},1000);

// case 124 : fs.readFileSync() <= 동기 방식으로 파일 열기
// 읽는 당시에 파일이 없으면 cancel됨
const data = fs.readFileSync('./message.txt');
const stringRead = data.toString();
console.log('sync work01');
console.log(stringRead);

setTimeout(() => {},1000);

// case 125 : fs.readfile() <= 비동기 방식으로 파일 열기
// 파일이 만들어지는 즉시에 반응함
fs.readFile('./message.txt', (err, data) => {
    if (err) throw err;
    console.log('async work01');
    console.log(data.toString());
})

setTimeout(() => {},1000);

// case 126 : 파일 내용 수정 <= write와 로직이 동일함(덮어 쓰기)
fs.readFile('./message.txt', (err, data) => {
    if (err) throw err;
    let contents = data.toString();
    contents = 'replaced';
    fs.writeFile('./message.txt', contents, () => {
        console.log('file modified');
    });
});

setTimeout(() => {},1000);

// case 127 : fs.appendFile() <= 실제 수정
// 명시적으로 파일 작성을 쓰지 않아도 존재하지 않는 파일이 새로 생성됨
const list = [1, 2, 3, 4, 5];
const listFilePath = './chapters.txt'
list.forEach(item => fs.appendFile(listFilePath, `chapter ${item}\n`, () => console.log(`chapter ${item} appended!`)));
setTimeout(() => {
    fs.rmSync(listFilePath);
},3000);



// case 128: fs.mkdirSync() <= 파일 생성
const dirName = `${__dirname}/img`;

if(!fs.existsSync(dirName)){
    fs.mkdirSync(dirName);
}
setTimeout(() => {
    fs.rmdirSync(dirName);
},3000);


// case 129 : 파일 리스트 출력하기
const testFolder = './';

const filenameList = fs.readdirSync(testFolder);

filenameList.forEach( fileName => {
    console.log(fileName);
});

setTimeout(() => {},1000);

// case 130 : json 파일 작성

const userList = [
    {name: 'ddochi', age:10},
    {name: 'gildong', age:24}
];

fs.writeFile('./list.json',JSON.stringify(userList),()=> console.log('JSON MADE!'));

// case 131 : json 불러오기

fs.readFile('./list.json', (err, data) => {
    if (err) throw err;
    const json = JSON.parse(data.toString());
    console.log('name :',json[0].name);
    console.log('name :',json[1].name);
});

// case 132 : 파일이름 변경

const renameFile = (fromFilePathName, toFilePathName) => {
    fs.rename(fromFilePathName, toFilePathName, (err) => {
        if (err) console.log(`ERROR : ${err}`);
    });
};

renameFile('./list.json','./brandNewList.json');

setTimeout(() => {
    fs.rmSync('./brandNewList.json');
},2000);

setTimeout(() => {
    fs.rmSync('./message.txt');
},10000);
