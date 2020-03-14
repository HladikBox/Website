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
  
  $info=$pageapi->businesscms();
  $info["content"]=ApiBase::HtmlDecode($info["content"]);
  $smarty->assign("info",$info);
  
  $smarty->assign("trytips","看看为何商务人员都喜欢云易创");
  $smarty->display(ROOT.'/templates/business-cms.html');
  
?>