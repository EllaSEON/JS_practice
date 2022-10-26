const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// 돋보기 클릭할때도 focus가 돼서 늘어나게끔 만들기
searchEl.addEventListener('click',function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  // setAttribute : 선택한 요소의 속성이름, 속성값 넣는다
  searchInputEl.setAttribute('placeholder','통합검색');
});

// blur = input요소에 focus가 해제되면
searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  // setAttribute : 선택한 요소의 속성이름, 속성값 넣는다
  searchInputEl.setAttribute('placeholder','');
});