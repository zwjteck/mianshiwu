$(function () {

    /**
     * @class 导航搜索清除输入框的值
     **/
    $('.search-clear').click(function (e) {
        $('#search-input').val('').focus()

    })

    /**
     * @class logo effect
     **/
    $('.logo').animateCss('bounceIn')
    $('.content-ul li').animateCss('flipInX')
    $('.content-project-ul .content-project-li').animateCss('flipInX')


    /**
     * @class 我的标签，多选
     **/

    $('#multipart-radio li a').click(function () {
        console.log('点击多选选标签选中的值是:' + $(this).attr('data-tag'))
        $(this).parent().toggleClass('on')
    })

    /**
     * @class APP 获取我的标签，多选的值
     **/
    function getDataTag() {
        var dataTag = []
        $('#multipart-radio li').each(function () {
            if($(this).hasClass('on')){
                dataTag.push($(this).find('a').attr('data-tag'))
            }
        });
        return dataTag
    }

    console.log(getDataTag())

    /**
     * @class 我的标签，单选
     **/

    $('#singal-radio .radio').click(function () {
        console.log('点击单选标签选中的值是:' + $(this).attr('data-tag'))
        $('#singal-radio .radio').removeClass('selected')
        $(this).addClass('selected')
    })


    /**
     * @class APP 更多下拉
     **/
    $('.mytag-action').dropotron({
        alignment : 'center' ,
        hideDelay : 100,
        offsetX : -100 ,
        offsetY : 30 ,
        expandMode : 'click'
    });

    /**
     * @class 改标签，删除 下拉

     **/
    $('.project-action').dropotron({
        alignment : 'center' ,
        hideDelay : 100 ,
        offsetX : -100 ,
        offsetY : 30 ,
        expandMode : 'click'
    });

});