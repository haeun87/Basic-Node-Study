# 학습 범위 
- case 159 ~ case 158 (p302)

# 학습 내용

- winston 등 logging 관련 모듈 설명
- express 모듈 

# 해당 프로젝트에 사용된 모듈
- winston : log 작성을 위해 쓰이는 모듈 중 하나 => <a href="https://github.com/winstonjs/winston">참조 문서</a>
- winston-daily-rotate-file : log의 날짜 정보를 가미할 수 있게 도와주는 모듈 => <a href="https://github.com/winstonjs/winston-daily-rotate-file">참조 문서</a>
- moment : dateformat을 지원해주는 모듈 
- express : nodejs에서 주로 사용되는 통신 관련 모듈 (http와 유사) => <a href="http://expressjs.com/">참조 문서</a>
- body-parser : express와 함께 사용되는 미들웨어용 모듈로 사용자가 보낸 웹 데이터를 추출 하는데 사용됨
- morgan : node.js용 http request logger 모듈 => <a href="https://github.com/expressjs/morgan">참조 문서</a>
- cookie-parser : express와 함께 사용되는 미들웨어용 모듈로 쿠키 정보를 생성, 추출 하는데 사용됨
- connect-multiparty : multipart/form-data를 지원하는 미들웨어용 모듈
- parseurl : url 형식으로부터 정보를 추출하는데 사용되는 모듈
- express-session : session 생성에 사용되는 모듈 => <a href="https://github.com/expressjs/session">참조 문서</a>
# 학습 메모
- winston은 2 버젼과 3 버젼의 차이가 크므로 유의해서 사용할 것!
- response 객체의 주요 메소드
    - res.download() : 파일이 다운로드 되도록 프롬프트함
    - res.end() : 응답 프로세스를 종료함
    - res.json(): JSON 응답을 전송함
    - res.jsonp() : JSONP 지원을 통해 JSON 응답을 전송 <br>
        => JSONP는 cross-domain 이슈를 극복하는 방식으로 JSON을 전송하는 방식 <br>
        => XMLHttpRequest 객체를 이용하지 않음
    - res.redirect() : 요청의 경로를 재지정
    - res.render() : 템플릿을 렌더링함
    - res.send() : 다양한 유형의 응답을 전송(ex> HTML, JSON, Array ...)
    - res.sendFile() : 파일을 전송
    - res.sendStatus() : 응답 상태 코드를 설정한 후 해당 코드를 문자열로 표현한 내용을 응답 본문으로 전송( 404 ERROR Message 등)
- request 객체의 주요 메소드와 속성
    - headers : 요청 헤더의 추출
    - Header() : 요청 헤더의 속성 지정 및 추출
    - query : GET 방식으로 요청한 매개변수 확인
    - body : POST 방식으로 요청한 매개변수 확인
    - params : 라우팅 매개변수 추출
- 미들웨어(Middleware) : express 모듈을 통해 request/response 과정 중에 다른 로직을 실행할 수 있도록 분리된 함수
    - http 모듈과 달리 use()를 통해 이벤트 리스너를 연결함
    - next를 통해 다른 미들웨어와 연결함 <br>
        => next()에 비지정한 경우에는 동일한 위치를 가진 미들웨어를 순차적으로 실행 <br>
        => redirect()는 처리 후 다른 루트로 이동하는 로직이나 next()는 원래의 진행 순서를 속행하는 용도 <br>
        => next()에 에러를 지정하여 오류를 발생시키는 것도 가능
    - 미들웨어 예시 => <a href="https://github.com/senchalabs/connect#middleware">참조 문서</a>
    - 주요 미들웨어 종류
        - static 미들웨어
            - 클라이언트로 전송할 파일은 곧바로 전송되지 않고 미들웨어를 거침
            - express.static([static 폴더 경로])로 전송 파일을 읽어올 local 경로를 지정 <br>
                => 지정하지 않으면 파일을 클라이언트로 전송할 수 없다. <br>
                => 지정을 통해 해당 미들웨어가 영향을 줄 수 있는 모든 미들웨어의 후속 처리가 static 폴더 경로에 묶일 수 있음
            - local 경로를 노출하지 않고 클라이언트로 전송 가능
            - 최초 지정으로 참조 경로를 고정시킴으로써 datasource의 통제가 용이함
            - static 미들웨어로 접근할 수 있는 data는 html과 같은 websource를 포함한다
        - body parser 미들웨어
            - 정확히는 미들웨어에 지원되는 parsing 모듈임
            - 사용자 입력 데이터(GET/POST 방식)을 읽어 들어와 미들웨어에서 인식하도록 함 <br>
                => URL과 JSON의 parsing을 통해 데이터를 읽어오는 형식
            - 별도 설치 모듈임에 주의할 것
            - GET의 경우에는 query, POST의 경우에는 body로부터 읽어 들어옴
            - application/x=www-form=urlencoded 인코딩 방식만 지원
        - router 미들웨어
            - 라우팅을 지원하는 라이브러리 모듈
            - 라우팅 : 애플리케이션 엔드 포인트의 정의, URI가 클라이언트 요청에 응답하는 형식
            - 라우팅 메소드
                - get() : GET 요청 발생 시 이벤트 리스너 지정
                - post() : POST 요청 발생 시 이벤트 리스너 지정
                - all() : 모든 요청 발생시 이벤트 리스너 지정
                - put() : PUT 요청 발생 시 이벤트 리스너 지정
                - delete() : DELETE 요청 발생 시 이벤트 리스너 지정 <br>
                => 종전 예제에서 등장한 app.get()은 라우팅 메소드에 해당
            - response/request를 처리하는 핵심은 이 라우팅을 통해 이루어짐
        - morgan 미들웨어
            - http request의 처리 상태를 관리하는 logger 모듈
            - 요청 시간, 요청 방식, 요청 상태 등을 표시
            - 주로 default로 지정된 combined, common을 가장 많이 씀
        - cookie-parser 미들웨어
            - http cookie의 생성과 조회를 가능하게 하는 미들웨어용 모듈
        - connect-multiparty 미들웨어
            - multipart/form-data를 지원하는 미들웨어용 모듈
            - 파일 업로드 및 업로드 파일의 랜덤화 기능 등이 지원되고 있음
        - express-session 미들웨어
            - session 생성에 사용되는 미들웨어
            - session으로부터 클라이언트에 부여된 세센 식별자 쿠키를 부여하고 이에 대응되는 저장소에 데이터를 저장하는 역할 수행
            - request 객체의 session 속성을 활용하는 형식
