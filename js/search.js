$(function () {
    //进入页面调用
    getData()
    $('#search-btn').click(addData);
    //添加数据
    function addData() {
        // alert(1)
        // 获取input里面的值
        var kw = $('#keyword').val();
        if (kw == '') return false;
        var data = localStorage.getItem('kw');
        if (data) {//有值
            var arr = JSON.parse(data);
            // arr.push(kw);
            arr.unshift(kw);
            localStorage.setItem('kw', JSON.stringify(arr));
        } else {
            var arr = [];
            // arr.push(kw);
            arr.unshift(kw);
            localStorage.setItem('kw', JSON.stringify(arr));
        }
        //追加到ul的第一个
        $('#content').prepend(`<li>${kw}</li>`);
        //清空input的val
        $('#keyword').val('');

    }
    // 渲染数据
    function getData() {
        //从本地存储获取数据
        var kw = localStorage.getItem('kw');
        if (!kw) return false;
        var arr = JSON.parse(kw);
        var addhtml = "";
        // let len = arr.length - 1;
        // for (var i = len; i >= 0; i--) {
        //     addhtml += `<li>${arr[i]}</li>`;
        // }
        let len=arr.length;
        for(var i=0;i<len;i++){
            addhtml += `<li>${arr[i]}</li>`;
        }
        $('#content').html(addhtml);
    }
    // 给垃圾桶添加点击事件
    $('#del').click(delData);
    function delData() {
        // alert(1)
        if (confirm("您确定要删除搜索记录吗？")) {
            //删除本地存储
            localStorage.removeItem('kw');
            //清空搜索记录
            $('#content').html('');
        }
    }


})