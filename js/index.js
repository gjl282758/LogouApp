$(function(){
     // 轮播图
     new Swiper('.silder', {
        //direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        }
    })

    // 内容导航
    new Swiper('.silder-nav', {
        //direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        }
    })

    // 乐购快报
    new Swiper('.new-HOT', {
        direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        }
    })

    new Swiper('.kill', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        }
    })
})