// 6-18
var foo = "dev";

// 이전 참조를 제거. foo 변수는 더 이상 'dev'를 참조하지 않는다.
// 유용해 보이지는 않는다. 변수의 스코프를 좁게 만들어 변수 자체를 재빨리 소멸시키는 편이 낫다.
foo = null;

// 6-19

// document.querySelector 메소드는 조건에 부합하는 HTML 요소를 검색할 수 없는 경우에 null을 반환함.
