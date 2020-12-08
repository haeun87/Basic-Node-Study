# 학습 범위 
- case 156 ~ case 158 (p293)

# 학습 내용

- pug 모듈 설명

# 해당 프로젝트에 사용된 모듈
- pug : 자바스크립트를 주입해서 html 형식으로 render할 수 있는 스크립트 양식을 사용하기 위한 모듈

# 학습 메모
- pug는 ejs와 달리 render 함수가 아닌 compile 함수를 사용
- 기본 형식은 태그<> 없이 tab 등의 구분으로 변환하는 방식 <br>
    => 띄어쓰기 또는 tab을 적절히 사용하지 않는 경우 오류가 발생함 <br>
    => <>가 없어 end tag도 없음
- pug의 주요 태그
    => 'style.' : style 태그를 입력할 때 '.'표를 붙여 style이 시작됨을 알림 <br>
    => 'script.' : script 태그를 입력할 때 '.'표를 붙여 script이 시작됨을 알림 <br>
    => '//' : 주석 처리<br>
    => '#' : div 태그에 해당 <br>
    => '.' : div class 속성 <br>
    => 'ul'/'li' : ul/li 태그와 동일 <br>
- pug의 특수 태그
    => #{값} : response로 전달받은 데이터를 출력할 때 양식 <br>
    => '-' : 자바스크립트를 입력할 때 사용 <br>