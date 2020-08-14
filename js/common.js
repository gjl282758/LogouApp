$(function(){
    //获取搜索框焦点
    $('input[date-kw="search"]').focus(function(){
        location.href='./search.html';
    })
    //返回上一页
    $('[data-back="prev"]').click(function(){
        history.go(-1);
        // history.go(0);刷新
        // history.go(1)下一页
    })
    bottomNav()
    //激活底部导航样式
    function bottomNav(){
        //动态获取pathname
        var pth=location.pathname;
        // console.log(pth);
        $(`.footer a[href=".${pth}"]`).addClass('active').parent().siblings().find('a').removeClass('active');
        /* //先删除所有a标记的active
        $('.footer a').removeClass("active");
        //再给点击当前a加上class active
        $(`.footer a[href=".${path}"]`).addClass("active"); */
    }














})