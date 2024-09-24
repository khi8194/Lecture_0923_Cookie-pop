/*
문자열.indexOF('찾을 문자열'): 전체 문자열에서 찾을 문자열이 위치해있는 순서값 반환,
만약 전체문자열에서 찾을 문자열이 없으면 -1을 반환

1. 모달의 닫기 버튼 클릭시 모달 안보이게 하기
2. 체크박스 선택한 뒤 닫기 버튼 클릭시 모달 안보이게 함과 동시에 today=done쿠키를 하루만료기한 생성
3. 스크립트가 처음 로딩될 때 조건문으로 today=done이라는 쿠키가 있으면 팝업 안보이게 처리, 없으면 보이게 처리
*/

const [btnView, btnSet, btnDel] = document.querySelectorAll("button");
const modal = document.querySelector("aside");
const btnClose = modal.querySelector("button");
const ck = modal.querySelector("#ck");

btnView.addEventListener("click", () => {
	console.log(document.cookie);
});

btnSet.addEventListener("click", () => {
	setCookie("today", "done", 1);
});

btnDel.addEventListener("click", () => {
	setCookie("today", "done", 0);
	alert("쿠키 삭제");
});

//닫기 버튼 클릭시 모달 안보이게 처리
btnClose.addEventListener("click", () => {
	//닫기 버튼 클릭시 체크박스가 체크되어 있으면 쿠키 생성
	modal.style.display = "none";
	//체크를 하고 닫기하면 checked가 true가 됨
	console.dir(ck);
});

//쿠키생성함수
function setCookie(name, value, day) {
	let now = new Date();
	let duedate = now.getTime() + day * 1000 * 60 * 60 * 24; //1s X 60 (1m) X 60 (1h) X 24 (24H=1Day)

	now.setTime(duedate);
	document.cookie = `${name}=${value}; path=/; expires=${now.toUTCString()}`;
}
