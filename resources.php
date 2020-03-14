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
  
  $info=$pageapi->resourcesinfo();
  $smarty->assign("info",$info);

  $list=$pageapi->resourcelist();
  $smarty->assign("list",$list);

  
  $smarty->display(ROOT.'/templates/resources.html');
  
?>