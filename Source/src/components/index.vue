<template>
    <div>





<div class="section-1">
    <div class="container"><h1 class="heading">{{content.title}}</h1>
        <p class="description">{{content.subtitle}}</p>
        <div class="notice-container">
            <div class="icon"><img
                src="../assets/play.png"
                alt="了解我们在做什么"></div>
            <a href="/#/plan" class="notice-link" target="_blank">了解我们在做什么</a></div>
        <div class="apply-for-trial">
            <form method="get" action="/signup" onsubmit="ga('send', 'event', 'Enterprise', 'Register', 'EmailIndex')"
                  class="input-container"><input id="emailInput" type="email" placeholder="邮箱地址" name="email"
                                                 class="input input-email">
                <button id="submitTrialEmail" disabled="disabled" class="button input-button">免费试用</button>
            </form>
        </div>
    </div>
</div>
<div id="coverflow" class="section-4">
    <div class="header">{{content.problem}}</div>
    <div class="container">
        <div class="coverflow-container">
            <div class="info">
                <div id="InfoContent" class="info-content">
                  <div class="info-item"  :class='{active:item.selected=="Y",hide:item.selected!="Y"}' v-for="(item,index) in tiaozhan">
                    <h2 class="heading info-title">{{item.name}}</h2>
                    <div class="info-description">{{item.summary}}
                  </div>
                </div>

                </div>
                <div id="Navigation">
                    <div class="indicators">
                      <div class="indicator" :class='{active:item.selected=="Y"}' v-for="(item,index) in tiaozhan" @click="checktiaozhan(item)"></div>
                    </div>
                </div>
            </div>
            <div id="Images" class="stage">
              <div class="figure  undefined " :class='{active:item.selected=="Y",hide:item.selected!="Y"}' v-for="(item,index) in tiaozhan" >
                <img :src="uploadpath+'photo/'+item.img" ></div>
            </div>
        </div>
    </div>
</div>
<div class="section-2">
    <div class="wrap">
        <div class="bg-left"></div>
        <div class="bg-right"></div>
        <div class="title">如果您也遇到以上问题，请详细告诉我们您的场景和需求，我们为您提供了 30 分钟免费的专业研发管理咨询服务。</div>
        <div class="btnArea"><a href="https://codingnet.mikecrm.com/FKqo01I" target="_blank" class="link">填写表单即可获取</a></div>
    </div>
</div>
<div class="section-3">
    <div class="container">
        <div class="head">{{content.how}}</div>
        <div class="content-container clearfix">
            <div class="item-wrap" v-for="item in tools">
                <div class="item-container">
                    <div class="icon"><img :src="uploadpath+'photo/'+item.img" :alt="item.name">
                    </div>
                    <div class="title">{{item.name}}</div>
                    <div class="desc short">{{item.summary}}</div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="price" class="section-5">
    <div class="container"><h2 class="heading">{{content.payment}}</h2>
        <div class="content-container">
            <div class="big-card">
                <div class="body">
                    <div class="upper-content-container">
                        <div class="priceCalculator show-mobile-only"><span>每个项目</span><span
                            class="totalCost">¥300</span><span>每年</span></div>
                        <div class="description text-large text-muted"><p>{{content.payment_tips1}}</p>
                            <p class="medium">{{content.payment_tips2}}</p>
                            <p>{{content.payment_tips3}}</p></div>
                        <div class="slider-container show-ipad-and-up">
                            <div id="slider">
                                <div class="slider-bar-container">
                                    <div class="slider-bar">
                                        <div class="slider-bar-highlight"></div>
                                    </div>
                                    <div class="slider-handle" :style="{ left: projectcount*100/fullprojectcount + '%' }">{{projectcount}}</div>
                                </div>
                            </div>
                        </div>
                        <div id="priceCalculator"><input type="number" id="headCount" v-model="projectcount" @input="fixProjectCount()" >
                            <div class="price-desc"></div>
                            <span>个项目</span><span id="totalCost">¥{{projectcount*content.projectprice}}</span><span>每年</span></div>
                        <div class="tip-container">
                            <div class="tip-item first-row" v-for="item in good">
                                <div class="icon"><img :src="uploadpath+'photo/'+item.img"  :alt="item.name"></div>
                                <div class="text">{{item.summary}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="price-package-title text-large text-muted">{{content.buytitle}}</div>
                    <div class="price-packages">
                        <div class="price-package-item"  v-for="item in buydiscount">
                            <div class="price">{{item.price}}</div>
                            <div class="origin-price">{{item.charge}}</div>
                            <div class="team-scale">{{item.support}}</div>
                            <a href="/admin/purchase/service" class="button">立即购买</a></div>
                    </div>
                    <div class="price-package-contact">{{content.morediscount}} <a :href="'tel:'+content.tel">{{content.tel}}</a></div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="section-6">
    <div class="container">
        <div class="content-wrap">
            <div class="bg-left"></div>
            <div class="bg-right"></div>
            <div class="content-container">
                <div class="title"> {{content.privatedeploy}}</div>
                <div class="desc"> {{content.privatedeploysummary}}
                </div>
                <div class="btn-area"><a href="https://e.coding.net/private" target="_blank" class="btn-link"> 了解更多</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="user-cases"><h2 class="heading">{{content.cooperation}}</h2>
    <div class="user-cases-list">
        <div class="item" v-for="item in cooperation"><img
            :src="uploadpath+'photo/'+item.img"
            :alt="item.name"></div>
    </div>
</div>
<div class="contact-us">
    <h2 class="heading">7 * 24 小时专属客户服务</h2>
    <div class="contact-wrapper">
        <div class="border-right">
            <div>联系我们</div>
            <div><a class="spa" :href="'tel:'+content.tel">{{content.tel}}</a></div>
        </div>
        <div class="border-left border-right">
            <div>邮箱</div>
            <div><a class="spa" :href="'mailto:'+content.mail+'?subject='+content.mailsubject">{{content.mail}}</a></div>
        </div>
        <div class="border-left border-right mobile-qrcode">
            <div>微信二维码</div>
            <img :src="uploadpath+'photo/'+content.wechatqrcode"
                alt="微信客服" />
        </div>
        <div class="border-left mobile-qrcode">
            <div>QQ 客服二维码</div>
            <img :src="uploadpath+'photo/'+content.qqqrcode"
                alt="QQ 客服" />
        </div>
        <div class="border-left border-right qrcode">
            <div>微信客服</div>
            <div>{{content.wechat}}</div>
            <img :src="uploadpath+'photo/'+content.wechatqrcode"
                alt="微信客服" />
        </div>
        <div class="border-left qrcode">
            <div>QQ 客服</div>
            <div>{{content.qq}}</div>
            <img :src="uploadpath+'photo/'+content.qqqrcode"
                alt="QQ 客服" />
        </div>
    </div>
</div>


    </div>
</template>

<script>
import axios from 'axios'
import global from '../Global'
export default {
  name: 'index',
  mounted(){
    axios.get("index/tiaozhan").then((response)=>{
      var tiaozhan=response.data;
      for(var i=0;i< tiaozhan.length;i++){
        tiaozhan[i].selected='N';
      }
      if(tiaozhan.length>0){
        tiaozhan[0].selected='Y';
      }
      this.tiaozhan=tiaozhan;
    });
    axios.get("index/content").then((response)=>{
      var content=response.data;
      this.content=content;
    });
    axios.get("index/tools").then((response)=>{
      var tools=response.data;
      this.tools=tools;
    });
    axios.get("index/good").then((response)=>{
      var good=response.data;
      this.good=good;
    });
    axios.get("index/buydiscount").then((response)=>{
      var buydiscount=response.data;
      this.buydiscount=buydiscount;
    });
    axios.get("index/cooperation").then((response)=>{
      var cooperation=response.data;
      this.cooperation=cooperation;
    });
  },
  methods:{
    checktiaozhan(item){
      for(var i=0;i< this.tiaozhan.length;i++){
        if(this.tiaozhan[i].id==item.id){
          this.tiaozhan[i].selected='Y';
        }else{
          this.tiaozhan[i].selected='N';
        }
      }
    },
    fixProjectCount(){
      this.projectcount=parseInt(this.projectcount);
      if(this.projectcount==NaN){
        this.projectcount=0;
      }else{
        if(this.projectcount>this.fullprojectcount){
          this.projectcount=this.fullprojectcount;
        }
      }
    }
  },
  data () {
    return {
      uploadpath:global.uploadpath,
      content:{},
      tiaozhan:[],
      tools:[],
      good:[],
      buydiscount:[],
      cooperation:[],
      projectcount:0,
      fullprojectcount:999
    }
  }
}
</script>
<style scoped>
.spa{
  color:#606c80;
	cursor:pointer;
	font-weight:700;
	padding:0 45px;
	text-align:center
}
</style>
