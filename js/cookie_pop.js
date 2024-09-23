/*
  Cookie : 사용자 브라우저에 물리적인 형태로 특정 데이터를 저장하는 경량의 텍스트 자료 4kb
  사용자 브라우저에 특정 사용자 정보값을 저장해서 웹사이트에서 쿠키에 저장된 값을 기억해 활용하기 위함
  사용예1 : 오늘하루 광고창 보지않기
  사용예2 : 쇼핑몰에 있는 전달 담아놓은 장바구니 정보 출력
  사용예3 : 특정 사이트 접속하고 로그인시 '홍길동'님 반갑습니다.

  응용예 : 사용자가 우리가 개발한 웹 페이지 방문시 각 사용자가 좋아하는 색상을 선택하게 한 뒤,
  해당 정보값을 사용자 컴퓨터에 쿠키로 저장
  앞으로 해당 사용자가 웹페이지 접속할 때마다 사용자 브라우저 쿠키에 저장된 값으로 웹페이지 스타일 테마 변경

  쿠키 : name=value 형식으로 저장, 쿠키 생성시 쿠키의 만료일을 설정가능
  쿠키확인 : document.cookie
*/

// const [btnView, btnSet] = document.querySelectorAll("button");
// btnView.addEventListener("click", () => {
// 	console.log(document.cookie);
// });
// btnSet.addEventListener("click", () => {
// 	setCookie("today", "done", 5);
// });
// //쿠키 생성 함수
// function setCookie(name, value, sec) {
// 	let now = new Date();
// 	//현재 분값을 가져와서 인수로 전달된 분 시간정보를 더함
// 	let duedate = now.getSeconds() + sec;
// 	//바뀐 시간 정보값으로 시간객체정보를 변경
// 	now.setSeconds(duedate);
// 	//변경된 시간 정보값을 표준시로 변경해서 쿠키만료시간으로 설정
// 	document.cookie = `${name}=${value}; path=/; expires=${now.toUTCString()}`;
// }

const [btnView, btnSet] = document.querySelectorAll("button");

btnView.addEventListener("click", () => {
	console.log(document.cookie);
});

btnSet.addEventListener("click", () => {
	//today=done이라는 이름으로 쿠키 생성함과 동시에 만료시간을 1분을 지정하여
	//쿠키가 생성된 시점부터 1분까지만 유지되고 1분뒤에는 자동으로 쿠키 제거됨
	setCookie("today", "done", 1);
});

//쿠키 생성 함수
function setCookie(name, value, min) {
	let now = new Date();
	//현재 분값을 가져와서 인수로 전달된 분 시간정보를 더함
	let duedate = now.getMinutes() + min;
	//바뀐 시간 정보값으로 시간객체정보를 변경
	now.setMinutes(duedate);
	//변경된 시간 정보값을 표준시로 변경해서 쿠키만료시간으로 설정
	document.cookie = `${name}=${value}; path=/; expires=${now.toUTCString()}`;
	alert("쿠키 생성");
}

//위와 같이 쿠키의 만료시간을 second, minutes, date로 지정하면
//쿠키가 생성도는 시점에 만료없이 설정되다보니 64초, 65분, 35일 같은 존재하지 않는 값으로 만료일이 잘못 세팅되는 이슈발생
//해결방법은 getTime()을 이용해서: 표준시가 설정된 이후부터를 초단위로 연산해서 반환된 값으로 설정
