<template>
    <div  class="section-1">
        <div class="slideshow-container">
            <div class="mySlides " :class="{active:index==current,fade:index!=current}" v-for="(item,index) in bp">
                <div class="numbertext">{{index}} / {{bp.length}}</div>
                <img :src="uploadpath+'photo/'+item.img" style="width:100%">
                <div class="text">{{item.name}}</div>
            </div>
            
            
            <a class="prev" @click="current=current-1<0?0:current-1">❮</a>
            <a class="next"  @click="current=current+1>=bp.length?bp.length-1:current+1">❯</a>
            </div>
            <br>
            
    </div>
</template>
<script>
import axios from 'axios'
import global from '../Global'
export default {
    mounted(){
        axios.get("index/bp").then((response)=>{
        var bp=response.data;
        this.bp=bp;
        });
    },
    data(){
        return {
            uploadpath:global.uploadpath,
            bp:[],
            current:0
        };
    }
}
</script>
<style scoped>
.mySlides {display:none}
 
/* 幻灯片容器 */
.slideshow-container {
  position: relative;
  margin: auto;
}
 
/* 下一张 & 上一张 按钮 */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
}
 
/* 定位 "下一张" 按钮靠右 */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}
 
/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}
 
/* 标题文本 */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}
 
/* 数字文本 (1/3 等) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}
 
/* 标记符号 */
.dot {
  cursor:pointer;
  height: 13px;
  width: 13px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}
.active{
    display: block;
}
 
.active, .dot:hover {
  background-color: #717171;
}
 
/* 淡出动画 */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}
 
@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}
 
@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}
</style>
