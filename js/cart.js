$(function () {
    //给checkall绑定change事件
    $('#checkall').change(function () {
        // alert(1)
        //获取checkall选定的状态
        var check = $(this).prop('checked');
        // console.log(check); true false
        //给 Radio添加选定状态
        $('.Radio').prop('checked', check);
        $('#checkall').prop('checked', check)
        allpn()
    })
    //给Radio绑定change事件
    $('.Radio').change(function () {
        // alert(1)
        //获取所有Radio的长度
        var Len = $('.Radio').length;
        // console.log(len)
        // 获取所有Radio选中的长度
        var len = $('.Radio:checked').length;
        // console.log(len);
        //判定
        if (Len == len) {
            $('#checkall').prop('checked', true)
        } else {
            $('#checkall').prop('checked', false)
        }
        allpn()

    })
    // 加
    $('.addNum').click(function () {
        // alert(1)
        //获取同级兄弟input的值
        let num = $(this).siblings('.num').val();
        // console.log(num)
        //单品数量自增
        num++;
       /*  // 商品总数增加
        var Num = parseInt($("#Num span").text());
        Num++;
        $("#Num span").text(Num);
        //计算总价
        var compro = parseFloat($(this).closest('.contorl').siblings('.content').find('.car-desc').find('.price').find('span').text());
        $('.total span').text(parseInt($('.total span').text()) + compro); */
        //把自增的结果返回给input的值
        $(this).siblings('.num').val(num);
        xjpr(this, num)
        allpn()

    })
    // 减
    $('.reNum').click(function () {
        // alert(1)
        //获取同级兄弟input的值
        let num = $(this).siblings('.num').val();
        // console.log(num)
        //单品数量自减
        num--;
        if (num < 0) {
            return;
        } /* else {
            // 商品总数减少
            var Num = parseInt($("#Num span").text());
            Num--;
            $("#Num span").text(Num);
            //计算总价
            var compro = parseFloat($(this).closest('.contorl').siblings('.content').find('.car-desc').find('.price').find('span').text());
            $('.total span').text(parseInt($('.total span').text()) - compro);
        } */
        //把自增的结果返回给input的值
        $(this).siblings('.num').val(num);
        xjpr(this, num)
        allpn()
    })
    //封装函数
    //每个商品的小计
    function xjpr(obj, num) {
        //获取单价
        let unitpr = $(obj).closest('li').find('.price1').text();
        console.log(unitpr)
        //小计
        let subtotal = (unitpr * num).toFixed(2);
        // console.log(subtotal)
        $(obj).closest('li').find('.xj').text(subtotal)
    }




    function allpn() {
        // 设置总价
        var totalpro = 0;
        // 设置总数量
        let totalnum = 0;
        //选中商品才进行总价和总数量的计算
        //遍历each
        $('.Radio:checked').each(function () {
            
            //选中商品总数量
            let comnum = parseInt($(this).closest('li').find('.num').val());
            //累加
            totalnum += comnum;
            // console.log(totalnum);
            //选中商品总价 
            let compro = parseFloat($(this).closest('li').find('.xj').text());
            // console.log(compro);
            //累加
            totalpro += compro;
            // console.log(totalpro);
        })
        totalpro=totalpro.toFixed(2);
        $('.num1').text(totalnum);
        $('.pro1').text(totalpro);
    }







})