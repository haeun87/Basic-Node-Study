# 학습 범위 
- case 143 ~ case 147 (p269)

# 학습 내용

- Node.js 프로젝트 생성 기초 및 초기화
- 패키지 설치/지우기 (npm command)
- module 설치
- request, cheerio 모듈 설명

# 해당 프로젝트에 사용된 모듈
- request : 서버 통신용 라이브러리 모듈
- cheerio : jquery 문법을 지원하는 라이브러리 모듈
- icove-lite : 인코딩 라이브러리 모듈 <br>
    => node-iconv의 경우 다양한 인코딩을 제공하나 네이티브 코드 컴파일이 필요하다.

# 학습 메모

- 패키지/모듈 없이 가장 기초적인 설치 방식 : npm init <br>
    => pacakge.json 최초 생성

- 패키지/모듈 설치 : npm install [패키지/모듈명] --save <br>
    => save 옵션: package.json에 등록하는 옵션(devDependencies용 --save-dev)

- 패키지/모듈 삭제 : npm uninstall [패키지/모듈명] --save <br>
    => save 옵션: 삭제시에도 동일하게 package.json에서 제거하는 작업을 거쳐준다.

- 기존 프로젝트의 패키지/모듈 설치: npm install --save <br>
    => 기존 프로젝트가 소유하는 package.json에 따른 패키지/모듈이 설치된다. <br>
    => 모듈을 따로 명시하지 않으면 package.json에 있는 모든 요소가 설치된다.

# 주의할 점
 - case 151의 crawling의 경우 google의 크롤링 검색이 불가능한 고로 정상적으로 수행할 수 없음 <br>
    => 제한적으로 태그 인식 정도만 test 가능함