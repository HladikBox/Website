<?php

class InstApi extends ApiBase{
    public function info($json=[]){
       return $this->curlPost("/inst/info",$json);
    }
}

?>