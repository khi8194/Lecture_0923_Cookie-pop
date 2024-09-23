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
	setCookie("today", "done", 10);
});

/*
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
*/

function setCookie(name, value, sec) {
	let now = new Date();
	//아래와 같이 getTime으로 현재 시간값을 가져와서 초단위로 값을 변경하면, 잘못된 날짜 정보로 만료일 설정을 예방
	let duedate = now.getTime() + sec * 1000;
	//쿠키값은 화면 새로고침되어야지만 갱신된값이 반영
	now.setTime(duedate);
	document.cookie = `${name}=${value}; path=/; expires=${now.toUTCString()}`;
	alert("쿠키 생성");
}
