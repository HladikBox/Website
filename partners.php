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
  
  $info=$pageapi->partners();
  $info["content"]=ApiBase::HtmlDecode($info["content"]);
  $smarty->assign("info",$info);
  
  $smarty->assign("trytips","我们的合作伙伴是怎么做的");
  $smarty->display(ROOT.'/templates/partners.html');
  
?>