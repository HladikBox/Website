<template>
    <div>

    <header class="header" >
        <div class="content clearfix">
            <a href="/#/" class="coding-enterprise-logo">
                <img src="../assets/logo.png" alt="云易创">
            </a>
            <div class="navLink">
                <div class="link"><a href="#price">价格</a></div>
                <div class="link"><a href="https://e.coding.net/private">私有部署</a></div>
                <div class="link"><a href="https://e.coding.net/help/">帮助</a></div>
                <div class="link"><a href="/app">App</a></div>
            </div>
            <div class="nav-btn">
                <a href="/signup" class="btn default">
                    <span>创建企业</span>
                </a>
                <a href="/signin" class="btn primary">
                    <span>登录</span>
                </a>
            </div>
            <div id="head-trigger" class="head-trigger" @click="isshowmobilemenu=true">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </div>
    </header>

        <div class="mobile-header" id="mobile-header" :class="{hide:isshowmobilemenu==false}" >
    <div class="head-container">
        <div class="icon js-cancel-head"  @click="isshowmobilemenu=false">
            <i class="string left"></i>
            <i class="string right"></i>
        </div>
        <div class="content">
            <div class="mobile-link js-cancel-head"><a @click="isshowmobilemenu=false" href="#price">价格</a></div>
            <div class="mobile-link"><a  @click="isshowmobilemenu=false" href="https://e.coding.net/private">私有部署</a></div>
            <div class="mobile-link"><a  @click="isshowmobilemenu=false" href="https://e.coding.net/help/">帮助</a></div>
            <div class="mobile-link"><a  @click="isshowmobilemenu=false" href="/app">App</a></div>
            <div class="mobile-btn default"><a @click="isshowmobilemenu=false" href="/signup">创建企业</a></div>
            <div class="mobile-btn primary"><a @click="isshowmobilemenu=false" href="/signin">登录</a></div>
        </div>
    </div>
</div>
    </div>
</template>


<script>
export default {
  props: [],
  methods: {},
  data() {
    return {
        isshowmobilemenu:false
    };
  }
};
</script>
