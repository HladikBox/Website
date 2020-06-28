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
  $smarty->assign("friendlist",$indexfriend);

  $indexfeature=$pageapi->indexfeature();
  $smarty->assign("indexfeature",$indexfeature);

  $indexgood=$pageapi->indexgood();
  $smarty->assign("indexgood",$indexgood);
  
  $indexcomment=$pageapi->indexcomment();
  for($i=0;$i<10;$i++){

    $indexcomment[]=$indexcomment[0];
    $indexcomment[]=$indexcomment[1];
  }

  
  $smarty->assign("trytips","相信我们，您会有惊喜");
  $smarty->assign("indexcomment",$indexcomment);
  $smarty->display(ROOT.'/templates/index.html');
  
?>