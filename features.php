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
  
  $info=$pageapi->feature();
  $smarty->assign("info",$info);

  
  $list=$pageapi->featurelist();
  $smarty->assign("list",$list);

  $smarty->assign("trytips","准备好尝试了？");
  $smarty->display(ROOT.'/templates/features.html');
  
?>