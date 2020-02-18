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
}

?>