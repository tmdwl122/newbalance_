// $('html,body').stop().animate({
//     scrollTop : 0
// }, 1000)






// 햄버거메뉴 클릭 시 메뉴박스 오픈하기
$('.open').on('click', function(){

    if($(this).hasClass('on')) {
     $(this).removeClass('on') 
    } else {                        
        $(this).addClass('on')
        $('#nav').css({
            backgroundColor: '#fff',
        })
        $(".open .bar ").css({
         backgroundColor: '#555'
        })
        $(" #mypage li").css({          
            color: "#555"      
        })
        $('h1').addClass('on')
    }
 })
 
 
 // 햄버거 메뉴박스 닫기
//  $('.openlist li a').on('click', function(){
//      $('.open').removeClass('on')
    
//  })
 
$('.list1 > li').on('click', function(){
    if ($(this).hasClass('on')) {
        $(this).removeClass('on') 
    } else {
        $(this).addClass('on')
        $(this).siblings().removeClass('on')
    }
})