# 학습 범위 
- case 171 ~ case 175 (p337)

# 학습 내용
- node-schedule 모듈
- NodeMailer 모듈 => <a href="https://nodemailer.com/message/attachments/">참고 문서</a>

# 해당 프로젝트에 사용된 모듈
- node-schedule : 작업 스케쥴링 기능을 내장하는 외부 모듈
- Nodemailer : Node.js에서 메일을 보내는 기능이 포함된 외부 모듈
# 학습 메모
- node-schedule 모듈 : 특정 작업을 한번 또는 반복해서 설정할 수 있게 하는 모듈임
    - setInverval()과의 차이는 매 주기마다 작업을 수행하는 것이 아닌 지정된 날짜나 시간에 맞춰 작업이 수행되도록 하는 점에 있음
    - 작업 스케쥴링의 종류
        - Cron-style Scheduling
            - Date 객체 대신 지정된 양식에 따라 값을 설정한 문자열을 통해 지정할 속성값을 설정하여 작업 주기를 정하는 방법
            - 문자열 형식 : "$second[0-59] $minute[0-59] $hour[0-23] $dayOfMonth[1-31] $month[1-12] $dayOfWeek[0-7]" <br>
                => 이때 dayofWeek의 0과 7은 일요일(Sun)을 의미하며 1부터 월요일(Mon)이 시작됨 <br>
                => second는 생략 가능(즉, 속성을 6개 또는 5개로 설정할 수 있음)
                => 지정하지 않을 문자는 [*]로 두어 해당 요소와 무관하게 주기가 설정(All의 의미)
                => "00 30 11 * * 1-5"는 매 평일(1-5)의 오전 11시 30분 정각(00 30 11)마다 수행함을 의미
        - Recurrence Rule Scheduling
            - Date 객체 대신 RecurrenceRule 객체(혹은 객체를 저장한 변수)를 통해 지정할 속성값을 설정하여 작업 주기를 정하는 방법
            - RecurrenceRule 객체의 속성은 date 가진 속성과 동일하게 구성되어 있으며 일부만 지정함에 따라 작업 주기도 그 일부에 따라 반복됨
            - rule.hour = 17, rule.minute = 00만 설정한 경우 매일 17시 00분마다 작업이 반복 (cf. Cron-style : "00 00 17 * * *")
            - Cron-style과 달리 7은 속성으로 인정하지 않음
- Nodemailer 모듈 : Node.js에서 메일을 보내는 기능을 제공하는 외부 모듈
    - 간단한 인증(ID/PASSWORD)으로도 쉽게 보낼 수 있게 기능이 구현되어 있음
    - 텍스트, HTML, 파일 첨부 기능을 구현할 수 있음
