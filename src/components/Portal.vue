<template>
<div id="page-top" class="landing-page no-skin-config" style="background: #fff">
   <div class="navbar-wrapper">
        <nav class="navbar navbar-default navbar-fixed-top" :class="{'navbar-scroll':navbarScroll}" role="navigation">
            <div class="container">
                <div class="navbar-header page-scroll">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="index.html"> 报 表 门 户 </a>
                </div>
                <div id="navbar" class="navbar-collapse collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a class="page-scroll" href="#page-top">主页</a></li>
                        <li><a class="page-scroll" href="#features">数据报表</a></li>
                        <li><a class="page-scroll" href="#team">供应链</a></li>
                        <li><a class="page-scroll" href="#testimonials">财务</a></li>
                        <li><a class="page-scroll" href="#pricing">人力资源</a></li>
                        <li><a class="page-scroll" href="#contact">设置</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <div id="inSlider" class="carousel carousel-fade" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#inSlider" data-slide-to="0" class="active"></li>
            <li data-target="#inSlider" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
            <div class="item active">
                <div class="container">
                    <div class="carousel-caption">
                        <h1>1个数字化战略<br/>
                            3步走战术<br/>
                            6大能力塑造<br/>
                            </h1>
                        <p>
                            建流程框架标准体系，价值链拉通，持续变革增效.</p>
                        <p>
                            <a class="btn btn-lg btn-primary" href="#" role="button">阅读更多内容</a>
                        </p>
                    </div>
                </div>
                <div class="header-back one"></div>

            </div>
            <div class="item">
                <div class="container">
                    <div class="carousel-caption blank">
                        <h1>用数据说话、高效运营、智能决策
                        <br/>通过AI算法建模、智能决策.</h1>
                        <p>建新型数字化平台，可视、可控，数字化运营和决策.</p>
                        <p><a class="btn btn-lg btn-primary" href="#" role="button">了解更多详情</a></p>
                    </div>
                </div>
                <div class="header-back two"></div>
            </div>
        </div>
        <a class="left carousel-control" href="#inSlider" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#inSlider" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    <section id="features" class="container services">
    <div class="row">
                <div class="col-lg-2">
                    <div class="contact-box center-version">
                        <router-link to="/blank">
                            <img alt="image" src="../assets/images/dashboard.png">
                            <h3 class="m-b-xs"><strong>仪表盘</strong></h3>
                            <div class="font-bold">My Dashboard</div>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="contact-box center-version">
                        <router-link to="/blank">
                            <img alt="image" src="../assets/images/sales.png">
                            <h3 class="m-b-xs"><strong>销售</strong></h3>
                            <div class="font-bold">Sales</div>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="contact-box center-version">
                        <router-link to="/blank">
                            <img alt="image" src="../assets/images/supply.png">
                            <h3 class="m-b-xs"><strong>供应链</strong></h3>
                            <div class="font-bold">Supply Chain</div>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-2">
                     <div class="contact-box center-version">
                        <router-link to="/blank">
                            <img alt="image" src="../assets/images/finance.png">
                            <h3 class="m-b-xs"><strong>财务</strong></h3>
                            <div class="font-bold">Finance</div>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="contact-box center-version">
                        <router-link to="/blank">
                            <img alt="image" src="../assets/images/hr.png">
                            <h3 class="m-b-xs"><strong>HR</strong></h3>
                            <div class="font-bold">HR</div>
                        </router-link>
                    </div>
                </div>

                <div class="col-lg-2">
                    <div class="contact-box center-version">
                        <router-link to="/blank">
                            <img alt="image" src="../assets/images/service.png">
                            <h3 class="m-b-xs"><strong>服务</strong></h3>
                            <div class="font-bold">Service</div>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="contact-box center-version">
                        <router-link to="/blank">
                            <img alt="image" src="../assets/images/monitor.png">
                            <h3 class="m-b-xs"><strong>监听</strong></h3>
                            <div class="font-bold">Monitor</div>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="contact-box center-version">
                        <router-link to="/blank">
                            <img alt="image" src="../assets/images/data_collection.png">
                            <h3 class="m-b-xs"><strong>数据收集</strong></h3>
                            <div class="font-bold">Data Collection</div>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="contact-box center-version">
                        <router-link to="/blank">
                            <img alt="image" src="../assets/images/bulb.png">
                            <h3 class="m-b-xs"><strong>研究与开发</strong></h3>
                            <div class="font-bold">R&D</div>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="contact-box center-version">
                        <router-link to="/blank">
                            <img alt="image" src="../assets/images/dev.png">
                            <h3 class="m-b-xs"><strong>开发中心</strong></h3>
                            <div class="font-bold">Dev Center</div>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="contact-box center-version">
                        <router-link to="/blank">
                            <img alt="image" src="../assets/images/setup.png">
                            <h3 class="m-b-xs"><strong>设置</strong></h3>
                            <div class="font-bold">Setup</div>
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="contact-box center-version">
                        <router-link to="/blank">
                            <img alt="image" src="../assets/images/unknow.png">
                            <h3 class="m-b-xs"><strong>问题反馈</strong></h3>
                            <div class="font-bold">Feedback</div>
                        </router-link>
                    </div>
                </div>
            </div>
    </section>
    <section id="contact" class="gray-section contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 text-center m-t-lg m-b-lg">
                    <p><strong>&copy; 2017 奥克斯集团</strong><br/> 用数据说话、高效运营、智能决策，先期实现透明可视、数字化运营，最终通过AI算法建模、智能决策.</p>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    data(){
        return {
            changeHeaderOn: 100,
            navbarScroll: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollPage);
    },
    destoryed() {
        window.removeEventListener('scroll', this.scrollPage);
    },
    methods:{
        scrollPage() {
            if (window.pageYOffset > this.changeHeaderOn) {
                this.navbarScroll = true
            } else {
                this.navbarScroll = false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.header-back.one {
background: url("../assets/images/header_one.jpg")  50% 0 no-repeat;
}
.header-back.two {
background: url("../assets/images/header_two.jpg") 50% 0 no-repeat;
}
.contact {
background-image: url("../assets/images/word_map.png");
background-position: 50% 50%;
background-repeat: no-repeat;
margin-top: 60px;
}

</style>