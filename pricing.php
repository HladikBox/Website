<?php
/*
 * Created on 2012-6-30
 *
 * To change the template for this generated file go to
 * Window - Preferences - PHPeclipse - PHP - Code Templates
 */



  require 'include/common.inc.php';
  include ROOT.'/classes/datamgr/page.php';
  $pageapi=new PageApi();
  
  $info=$pageapi->aboutusindex();
  $smarty->assign("info",$info);

  
  $list=$pageapi->aboutusitem();
  $smarty->assign("list",$list);

  $offerlist=$pageapi->officelocation();
  
  
  for($i=0;$i<count($offerlist);$i++){

    $offerlist[$i]['summary']=ApiBase::HtmlDecode($offerlist[$i]['summary']); 
   
  }
  $smarty->assign("offerlist",$offerlist);


  $smarty->assign("trytips","准备好尝试了？");
  $smarty->display(ROOT.'/templates/pricing.html');
  
?>