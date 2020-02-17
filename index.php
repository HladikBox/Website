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
  
  $info=$pageapi->index();
  $smarty->assign("info",$info);

  $indexfriend=$pageapi->indexfriend();
  //print_r($indexfriend);
  for($i=0;$i<count($indexfriend);$i++){
    $indexfriend[$i]["seq"]=$i;
  }
  $smarty->assign("friendlist",$indexfriend);

  $indexfeature=$pageapi->indexfeature();
  $smarty->assign("indexfeature",$indexfeature);

  $indexgood=$pageapi->indexgood();
  $smarty->assign("indexgood",$indexgood);
  
  $smarty->display(ROOT.'/templates/index.html');
  
?>