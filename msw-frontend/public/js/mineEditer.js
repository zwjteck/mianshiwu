$(function () {


    function deleteTags () {
        var hasMultipart = true
        var txt = $(this).parent().find('span').text()

        _.remove(multipartTags,function (item) {
            if(item === txt) hasMultipart = false
            return item === txt
        })

        console.log(multipartTags)
        if(singleTags === txt && hasMultipart){
            singleTags = null
        }
        updateTags()
    }

    /**
     * @description 编辑器配置
     **/
    var editor = new wangEditor('editer');
    var _config = [
        'head',
        '|',
        'fontfamily',
        '|',
        'fontsize',
        '|',
        'bold',
        'italic',
        'underline',
        'strikethrough',
        '|',
        'indent',
        'unorderlist',
        'orderlist',
        'alignleft',
        'aligncenter',
        'alignright',
        '|',
        'insertModal',
        '|',
        'img',
        'table',
        'link',
        'insertcode' ,
        'partingline'

    ];
    editor.config.menus = _config;
    // 上传图片（地址）
    editor.config.uploadImgUrl = '/upload';

    editor.config.menuFixed = false;
    editor.config.pasteFilter = false;
    // 隐藏掉插入网络图片功能。该配置，只有在你正确配置了图片上传功能之后才可用。
    editor.config.hideLinkImg = false;

    editor.create();

    $('.wangeditor-menu-img-font2').text('Arial');
    $('.wangeditor-menu-img-text-height').text('16');

    $('#editer').focus(function () {
        $('.wangEditor-menu-container .menu-group:nth-child(7)').removeClass('fn-inline')
    })



    /**
     * @descrption 复制操作
     **/

    var clipboard = new Clipboard('.edit');

    clipboard.on('success', function(e) {
        $.notify("复制成功", 'success');
    });

    clipboard.on('error', function(e) {
        $.notify("复制失败",'error');
    });

    /**
     * @class 导航搜索清除输入框的值
     **/
    $('.search-clear').click(function (e) {
        $('#search-input').val('').focus()

    })


    var multipartTags = ['全部','课程参考'];
    var singleTags = null ;


    /**
     * @descrption **初始化标签选中状态
     **/
    $('.edit-multipart-li').each(function () {
        console.log(multipartTags.indexOf($(this).text()))
        if(multipartTags.indexOf($(this).text()) !== -1){
            $(this).addClass('pink')
        }else{
            $(this).removeClass('pink')
        }
    })

    /**
     * @property {String} 初始化选中标签- ***
     **/
    function updateTags () {
        var $tags = $('.edit-tags-detail')
        $tags.html('')
        for (var i = 0 ; i< multipartTags.length ; i++){
            var _html = '<div class="edit-tag-item fn-inline">' +
                '<span>' + multipartTags[i]+'</span>' +
                '<i>+</i></div>';
            $tags.append(_html)
        }
        var _singleHtml = '<div class="edit-tag-item fn-inline">' +
            '<span>' + singleTags +'</span>' +
            '<i>+</i></div>';
        singleTags && $tags.append(_singleHtml)

        $('.edit-tag-item i').bind('click',deleteTags)
    }
    updateTags()






    /**
     * @descrption 多选标签弹窗
     **/

    $('#target-tags-multipart').click(function () {
        $('.edit-tags-multipart').toggleClass('fn-hide')
        $('.edit-tags-single').addClass('fn-hide')
    })

    /**
     * @descrption 标签选择多选
     **/

    $('.edit-multipart-li').click(function () {
        var _this = this
        if($(this).hasClass('pink')) {
            _.remove(multipartTags,function (item) {
                return item === $(_this).text()
            })
        }else{
            multipartTags.push($(this).text())

        }
        $(this).toggleClass('pink')

        $('.edit-tags-multipart').addClass('fn-hide')
        updateTags()
    })
    
    /**
     * @descrption 单选标签弹窗
     **/

    $('#target-tags-single').click(function () {
        $('.edit-tags-multipart').addClass('fn-hide')
        $('.edit-tags-single').toggleClass('fn-hide')
    })

    /**
     * @descrption 标签选择单选
     **/

    $('.edit-single-li').click(function () {
        $('.edit-single-li').removeClass('pink')
        $(this).addClass('pink')
        singleTags = $(this).text()
        $('.edit-tags-single').addClass('fn-hide')
        updateTags()
    })

    /**
     * @class APP
     * @descrption **
     * @property {Boolean} [options.quantity = true] - ***
     * @property {String} options.actions.product - ***
     * @property {Float} options.actions.price - ***
     **/


    $('.edit-tags-detail i').on('click',deleteTags)


    $('#editer').css({
        height : $('.edit-content').height()
    })


    /**
     * @descrption ** 显示列表页全部
     **/
    $('.edit-item-show').click(function () {
        var _height = $(this).parents('.edit-left-item').height();
        $(this).parents('.edit-left-item').css({
            position : 'absolute',
            left : 0 ,
            top : 0,
            zIndex : 20,
            background :'#fff',

            height:$('#editer').height() - 90

        })
        // edit-item-hide
        $(this).parents('.edit-left-item').find('.edit-item-show').addClass('hide')
        $(this).parents('.edit-left-item').find('.edit-item-hide').removeClass('hide')
        $(this).parents('.edit-left-item').find('.edit-item-copy').removeClass('fn-hide')

        $(this).parents('.edit-left-item').find('.edit-item-description').removeClass('hide')
        $(this).parents('.edit-left-item').find('.edit-item-time').addClass('hide')
        $(this).parents('.edit-left-item').find('.edit-item-content').css({
            maxHeight : '3000'
        })

        $(this).parents('.edit-left-item').find('.edit-item-body').css({
            border : 'none'
        })

        $(this).parents('.edit-left-item').find('.edit-item-focus').removeClass('hide')
    })

    /**
     * @descrption ** 关闭显示区
     **/

    $('.edit-item-hide').click(function () {
        $(this).parents('.edit-left-item').css({
            position : 'relative',
            height:'auto' ,
            zIndex : 0

        })
        $(this).parents('.edit-left-item').find('.edit-item-show').removeClass('hide')
        $(this).parents('.edit-left-item').find('.edit-item-hide').addClass('hide')
        $(this).parents('.edit-left-item').find('.edit-item-copy').addClass('fn-hide')

        $(this).parents('.edit-left-item').find('.edit-item-description').addClass('hide')
        $(this).parents('.edit-left-item').find('.edit-item-time').removeClass('hide')


        $(this).parents('.edit-left-item').find('.edit-item-content').css({
            maxHeight : '145'
        });

        $(this).parents('.edit-left-item').find('.edit-item-body').css({
            borderBottom : '1px solid #eee'
        });

        $(this).parents('.edit-left-item').find('.edit-item-focus').addClass('hide')
    })

    $('.edit-body .edit-content .edit-left-items').perfectScrollbar({
        swipePropagation : false
    });



})