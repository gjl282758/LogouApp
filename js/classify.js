$(function(){
    //事件委派
    $('.main .cate-left').on('click','li',function(){
        // alert(1)
        $(this).addClass('active').siblings().removeClass('active');
    })
})