

//======= GNB 드롭다운

$(document).ready(function(){
   $('.gnb > li > a').on('click', function(){
      // 모든 .item 클래스에서 'active' 클래스 제거
      $('.gnb > li > a').removeClass('active');
      
      // 클릭된 요소에만 'active' 클래스 추가
      $(this).addClass('active');
   });
});

//======= 로그인 인포 드롭다운
$(document).ready(function() {
  $('.info_dropdown button').on('click', function() {
    $('.info_dropdown ul').toggleClass('active');
  });
});