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



//gsap 애니메이션 라이브러리를 자주씀
//스크롤을 내릴때 우측 뱃지부분 사라지게 하기
//스크롤의 값이 일정값 이상보다 커지면 이 요소를 화면에서 사라지게 하기
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll',_.throttle(function(){
  // console.log(window.scrollY);  
  if(window.scrollY>500){
    //배지 숨기기
    // gsap.to(애니메이션 처리를 할 요소, 지속시간, 옵션);
    gsap.to(badgeEl,0.6,{
      opacity:0,
      //요소를 화면에서 아예 없어지게 해야함
      display:'none'
    });
    }else{
      //배지 보여주기
      gsap.to(badgeEl,0.6,{
        opacity:1,
        display:'block'
      });   
    }
},300))
