<?php

class PageApi extends ApiBase{
    public function index($json=[]){
       return $this->curlPost("/page/index",$json);
    }
    public function indexfriend($json=[]){
       return $this->curlPost("/page/indexfriend",$json);
    }
    public function indexfeature($json=[]){
       return $this->curlPost("/page/indexfeature",$json);
    }
    public function indexgood($json=[]){
       return $this->curlPost("/page/indexgood",$json);
    }
    public function indexcomment($json=[]){
       return $this->curlPost("/page/indexcomment",$json);
    }
    public function feature($json=[]){
       return $this->curlPost("/page/feature",$json);
    }
    public function featurelist($json=[]){
       return $this->curlPost("/page/featurelist",$json);
    }
    public function developerscms($json=[]){
       return $this->curlPost("/page/developerscms",$json);
    }
    public function developerscmslist($json=[]){
       return $this->curlPost("/page/developerscmslist",$json);
    }
    public function developercmssay($json=[]){
       return $this->curlPost("/page/developercmssay",$json);
    }
    public function businesscms($json=[]){
       return $this->curlPost("/page/businesscms",$json);
    }
    public function partners($json=[]){
       return $this->curlPost("/page/partners",$json);
    }
    public function resourcesinfo($json=[]){
       return $this->curlPost("/page/resourcesinfo",$json);
    }
    public function resourcelist($json=[]){
       return $this->curlPost("/page/resourcelist",$json);
    }
    public function resourcesdetail($json=[]){
       return $this->curlPost("/page/resourcesdetail",$json);
    }
}

?>