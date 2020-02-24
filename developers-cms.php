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
  
  $info=$pageapi->developerscms();
  $smarty->assign("info",$info);

  $list=$pageapi->developerscmslist();
  for($i=0;$i<count($list);$i++){
    $list[$i]["content"]=ApiBase::HtmlDecode($list[$i]["content"]);
  }
  $smarty->assign("list",$list);

  $commentlist=$pageapi->developercmssay();
  $smarty->assign("commentlist",$commentlist);
  
  $smarty->assign("trytips","看看为何开发都喜欢云易创");
  $smarty->display(ROOT.'/templates/developers-cms.html');
  
?>