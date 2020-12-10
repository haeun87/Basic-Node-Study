# 학습 범위 
- case 176 ~ case 185 (p348) <br>
 => 이중 case 176 ~ case 177은 MySQL에 대한 설명이므로 생략

# 학습 내용
- MySQL 모듈 및 MySQL 연동 방법
- socket.io 모듈 및 socket 통신 방법

# 해당 프로젝트에 사용된 모듈
- mysql : Mysql을 스크립트로 조작할 수 있도록 기능하는 외부 모듈
- express : node.js 서버 통신을 위한 외부 모듈
- http : http 프로토콜 내장 모듈
- socket.io : socket 통신 외부 모듈
# 학습 메모
- mysql 모듈 : MySQL의 원격 조작을 Node.js에서 수행할 수 있도록 지원하는 라이브러리 모듈
    - ORM 방식이 아닌 전통적인 방식의 조작 기능만을 제공함 <br>
        => TypeORM 등의 별도 학습 필요
    - SELECT 쿼리 시 RowDataPacket 객체를 소유한 배열로 결과 값이 반환됨
        => results(또는 data)를 순회하면서 RowDataPacket의 각 속성값을 조회해서 원하는 값을 반환받도록 수정해야 함
- socket.io 모듈 : 소켓 통신을 가능하게 하는 외부 라이브러리 모듈
    - socket.io 모듈 이벤트
        - connection()/disconnection() : 연결과 연결 해제 시의 이벤트 발생 설정 가능
    - socket.io 모듈 메소드
        - on() : 소켓 이벤트 연결
        - emit() : 소켓 이벤트 발생 