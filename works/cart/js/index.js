$(function(){
    //初始化fullpage插件
    $(".container").fullpage({
        //配置参数
        sectionsColor:["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        //指示器（小圆点），是否显示项目导航?????
        navigation:true,
        afterLoad:function(link,index){
            //console.log(index)
            $('.section').eq(index-1).addClass("now")
        },afterRender:function(){
        /*点击more切换下一页，在插件加载完毕后*/
            $(".more").on("click",function(){
                $.fn.fullpage.moveSectionDown()
            })
            /*当第四屏的购物车动画结束后执行收获地址动画 */
            $(".section04 .cart").on("transitionend",function(){
                $(".section04 .address").show().find("img:last").fadeIn(1000)
                $(".section04 .text").addClass("show")
            })
            /*第八屏功能*/
            /*1.手要跟着鼠标移动*/
            $('.section08').on('mousemove',function (e) {
                /*鼠标的坐标设置给手*/
                $(this).find('.hand').css({
                    left:e.clientX -300,
                    top:e.clientY - 120
                });
            }).find('.again').on('click',function () {
                /*2.点击再来一次重置动画跳回第一页*/
                /*动画怎么怎么进行的？*/
                /*2.1 加now  类*/
                /*2.2 加leaved  类*/
                /*2.3 加show 类*/
                $('.now,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show');
                /*2.4 加css属性  后果：加一个style属性*/
                /*2.5 用jquery方法  show() fadeIn() 后果：加一个style属性*/
                $('.content [style]').removeAttr('style');

                /*跳回第一页*/
                $.fn.fullpage.moveTo(1);
            });

        },onLeave:function(index,nexindex,direction){
            if(index==2  &&  nexindex==3){
                /*从第二页跳至第三页*/
                $('.section02').addClass("leave")             
            }
            if(index==3  &&  nexindex==4){
                /*从第二页跳至第三页*/
                $('.section03').addClass("leave")             
            }
            if(index==5  &&  nexindex==6){
                /*从第5页跳至第6页*/
                $('.section05').addClass("leave") 
                $(".section06 .box").addClass("show")
            }
            if(index==6  &&  nexindex==7){
                /*从第6页跳至第7页*/
                $(".section07 .star img").each(function(i,item){
                    $(this).delay(i*0.25*2000).fadeIn()
                })
                $('.section06').addClass("leave")
                $(".section06 .text").addClass("show")
            }
        },scrollingSpeed:1000

    })
})