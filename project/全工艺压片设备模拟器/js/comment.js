//解决a标签不能跳转的问题
mui('body').on('tap','a',function(){
    document.location.href=this.href;
});

//点击三切换菜单栏显示隐藏
$("#offCanvasShow").click(function(){
    mui('.mui-off-canvas-wrap').offCanvas().toggle();
})

//点击菜单按钮切换菜单栏显示隐藏区块
$("p").on('click',function(){
    mui('.mui-off-canvas-wrap').offCanvas('toggle');
});

//初始化scroll控件：
mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});


//点击底部X清楚父元素
$('.my-downloadbar-close').on('tap',function(){
    $('.my-downloadbar-close').parent().remove();
});

//点击底部打开APP按钮跳转至下载页面
$('.my-downloadbar-open').on('tap',function(){
    window.location.href = "download.html"
});

//获得slider插件对象
mui('.mui-slider').slider({
    interval:1000//自动轮播周期，若为0则不自动播放，默认为0；
});