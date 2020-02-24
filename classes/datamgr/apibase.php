<?php 

class ApiBase{
    public function curlPost($url,$data)
    {
        Global $CONFIG;
        $url=$CONFIG["apiurl"].$url;
        $ch = curl_init();
        $params[CURLOPT_URL] = $url;    //请求url地址
        $params[CURLOPT_HEADER] = FALSE; //是否返回响应头信息
        $params[CURLOPT_SSL_VERIFYPEER] = false;
        $params[CURLOPT_SSL_VERIFYHOST] = false;
        $params[CURLOPT_RETURNTRANSFER] = true; //是否将结果返回
        $params[CURLOPT_POST] = true;
        $params[CURLOPT_POSTFIELDS] = $data;
        curl_setopt_array($ch, $params); //传入curl参数
        $content = curl_exec($ch); //执行
        curl_close($ch); //关闭连接
        $content=json_decode($content,true);
        return $content;
    }



    public static function HtmlDecode($str) {
        $str=str_replace("/alucard263096/applinkweb/upload/",
        "http://cmsdev.app-link.org/alucard263096/applinkweb/upload/",$str);
        $str=htmlspecialchars_decode($str);
        return $str;
    }
}

?>