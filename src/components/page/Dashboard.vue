<template>
<div class="wrapper wrapper-content animated fadeInRight">
    <iframe src="http://open.auxgroup.com/#/doc" width="100%" height="600px"  frameborder="0" id="iframeId"></iframe>
    <div class="social-feed-box">
    <div class="pull-right social-action dropdown">
        <ul class="dropdown-menu m-t-xs">
            <li><a href="#">Config</a></li>
        </ul>
    </div>
    <div class="social-body">
        <div class="actions">
            <a class="btn btn-xs btn-white"><i class="fa fa-thumbs-o-up"></i> &nbsp;点赞&nbsp;</a>
            <a class="btn btn-xs btn-danger"><i class="fa fa-thumbs-up"></i> &nbsp;点赞&nbsp;</a>
            <a class="btn btn-xs btn-white"><i class="fa fa-heart-o"></i> &nbsp;收藏&nbsp;</a>
            <a class="btn btn-xs btn-danger"><i class="fa fa-heart"></i> &nbsp;收藏&nbsp;</a>
            <a class="btn btn-white btn-xs"><i class="fa fa-comments"></i>&nbsp;联系作者&nbsp;</a>
            <a class="btn btn-white btn-xs"><i class="fa fa-share"></i> &nbsp;分享&nbsp;</a>
        </div>
    </div>
    <div class="social-footer">
        <div class="social-comment">
            <a href="" class="pull-left">
                <img alt="image" src="static/profile_small.jpg">
            </a>
            <div class="media-body">
                <a href="#">
                    小李子
                </a>
                小李子说小李子说小李子说小李子说：写得好
                <br>
                <small class="text-muted">12.06.2014</small>
            </div>
        </div>

        <div class="social-comment">
            <a href="" class="pull-left">
                <img alt="image" src="static/profile_small.jpg">
            </a>
            <div class="media-body">
                <textarea class="form-control" placeholder="留下你的感言。。。"></textarea>
            </div>
        </div>

    </div>

    </div>
</div>
</template>

<script>
export default {
    methods:{

    },
    mounted(){
        console.log($(window).height())
        $('#iframeId').height($(window).height() - 135);
        console.log($('#iframeId').height())
    }
}

</script>