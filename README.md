# 리액트 프로젝트 - 수지별

본 프로젝트는 각 팀원들의 이름 한 글자씩 따와서 웹사이트 제목을 수지별이라고 지었으며, 

Kpop의 영향력으로 인해 전세계적으로 커지면서 아이돌 또는 특정 연예인에 대한 굿즈 기업  매출 상승에  많은 영향을 미치고 단순 스타 응원도구 뿐만 아니라 일상생활에서도 사용가능한 상품들로도 출시가 많이 된다는 것을 바탕으로 **수지를 위한, 수지에 의한 웹사이트**를 구축하게 되었다.

**완성된 페이지**는 아래와 같다.

![[suzyStar] Untitled 3](C:\Users\mijip\Documents\react_workspace\suzy\SuzyStar\public\readme_image\main.png)



- [ ] 참고 사이트: SMTOWN 굿즈 샵 참고

- [ ] 개발 기간: 8/14~8/19

  ![[suzyStar] Untitled 3](C:\Users\mijip\Documents\react_workspace\suzy\SuzyStar\public\readme_image\developDate.png)

  

- [ ] 개발범위 - 전체 Layout(헤더, 이미지 슬라이드, 상품리스트(메뉴, 상품리스트), 상품 외 콘텐츠, 푸터)

<img style="max-height:90%; max-width:90%;" src="C:\Users\mijip\Documents\react_workspace\suzy\SuzyStar\public\readme_image\[suzyStar] Untitled.png" alt="[suzyStar] Untitled"  />



- [ ] 개발범위 - 로그인 페이지(버튼 및 이벤트 설정)
  1. 기존에 존재하는 계정인지 확인
  2. 로그인 성공 시 alert 창과 함께 메인페이지로 자동 이동
  3. 로그인 실패 시 alert 창 출력

![[suzyStar] Untitled 3](C:\Users\mijip\Documents\react_workspace\suzy\SuzyStar\public\readme_image\[suzyStar] Untitled 3.png)



- [ ] 개발범위 - 회원가입 페이지
  1. 버튼 및 이벤트 설정
  2. 새로운 계정에 대한 정보(이름, 아이디, 비밀번호) 입력
  3. 회원가입 완료되면 자동으로 로그인으로 이동

![[suzyStar] Copy of Untitled 3](C:\Users\mijip\Documents\react_workspace\suzy\SuzyStar\public\readme_image\[suzyStar] Copy of Untitled 3.png)



- [ ] 사용기술: React, MobX, Semantic UI



- [ ] 개발 인력: 
  - [ ] 김수빈:
    - [ ] 담당: 팀장
    - [ ] 상품 데이터 관리
    - [ ] 사용자 데이터 관리
    - [ ] 장바구니 기능
  - [ ] 박미지
    - [ ] 담당: 팀원/개발자
    - [ ] 상품 데이터 수집
    - [ ] 회원가입 기능
    - [ ] 푸터(Footer)
  - [ ] 이은별
    - [ ] 담당: 팀원/개발자
    - [ ] 상품 데이터 수집
    - [ ] 로그인 기능
    - [ ] 헤더(Header)



- [ ] 시연 시나리오

  - [ ] 시연은 총 세가지 경우로 나뉜다. 

    1. 비회원일 경우: 상품 리스트 조회와 상품 상세페이지 조회만 가능하다.
    2. 회원일 경우: 상품 리스트 조회, 상품 상세페이지 조회도 가능하고 장바구니 기능과 상품 결제 기능까지 이용 가능하다.
    3. 관리자(admin)일 경우: 회원의 기능을 모두 사용할 수 있으며 상품 관리에서 상품 가격을 수정, 삭제까지 가능하다.

  - [ ] 시연 시나리오를 시각화를 하면 아래와 같다.

    ![[suzyStar] Copy of Untitled 3](C:\Users\mijip\Documents\react_workspace\suzy\SuzyStar\public\readme_image\시나리오.png)



메인 페이지 외 완성된 페이지들은 아래와 같다.

**상품 리스트**

![상품리스트](C:\Users\mijip\Documents\react_workspace\suzy\SuzyStar\public\readme_image\productlist.png)



**상품 상세 페이지**

![상품 상세 페이지](C:\Users\mijip\Documents\react_workspace\suzy\SuzyStar\public\readme_image\productdetail.png)



**로그인 페이지**

![로그인](C:\Users\mijip\Documents\react_workspace\suzy\SuzyStar\public\readme_image\login.png)



**회원가입 페이지**

![회원가입](C:\Users\mijip\Documents\react_workspace\suzy\SuzyStar\public\readme_image\signup.png)



**장바구니**

![장바구니](C:\Users\mijip\Documents\react_workspace\suzy\SuzyStar\public\readme_image\basket.png)



**사용자가 관리자일 경우**

* 가격 업데이트 및 상품 삭제 가능한 버튼이 뜸.

![productadmin](C:\Users\mijip\Documents\react_workspace\suzy\SuzyStar\public\readme_image\productadmin.png)



**상품 외 콘텐츠**

![contents](C:\Users\mijip\Documents\react_workspace\suzy\SuzyStar\public\readme_image\contents.png)



- [ ] 프로젝트 결과
  - [ ] 김수빈 : 기존 예제를 진행할 때는 mobx의 필요성을 못 느꼈는데 페이지가 많아지고 다뤄야할 데이터가 많아 지면서 단순 state가 아닌 mobx 를 써서 편해지는 요소를 발견할 수 있었다.
  - [ ] 박미지: 리액트가 처음이라 전체적인 구조 와 데이터의 흐름을 이해하는데 제일 어려웠다. 하지만 좋은 팀원 분들을 만나 성공적으로 마칠 수 있었다. 프로젝트가 끝난 후 기존 에 배웠던 예제들을 사용해보면서 리액트에 대해 좀 더 배워야겠다.
  - [ ] 이은별: 데이터구조 흐름을 파악하기 어려 웠다. 리액트가 처음이라 많이 어 려웠지만 팀원분들의 도움으로 프 로젝트를 완료할 수 있었다. 리액 트를 활용하여 더 많은 웹사이트를 만들어 보고싶다.



- [ ] 프론트엔드 향후 개선점
  - [ ] 물품 리스트 검색 기능 추가
  - [ ] 상품 수량 수정 
  - [ ] 결제 페이지 제작

