<template>
    <div class="middle-box text-center animated fadeInDown">
        <h1>404</h1>
        <h3 class="font-bold">页面丢失啦~</h3>

        <div class="error-desc">
            试着检查URL的错误，然后点击浏览器上的刷新按钮，或者在我们的应用中找到其他的东西。
            <form class="form-inline m-t" role="form">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Search for page">
                </div>
                <button type="submit" class="btn btn-primary">查找</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        $('body').addClass('gray-bg')
    },
    destroyed() {
        $('body').removeClass('gray-bg')
    }
}
</script>