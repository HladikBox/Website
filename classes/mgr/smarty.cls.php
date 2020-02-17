<?php

	require ROOT.'/libs/smarty/Smarty.class.php';

$smarty = new Smarty;

$smarty->compile_check = $CONFIG['smarty']['compile_check'];
$smarty->debugging = $CONFIG['smarty']['debugging'];
$smarty->caching=$CONFIG['smarty']['caching'];
$smarty->cache_lifetime=$CONFIG['smarty']['cache_lifetime'];
$smarty->compile_dir=ROOT."/templates_c";
$smarty->cache_dir=ROOT."/cache";
$smarty->left_delimiter="{{";
$smarty->right_delimiter="}}";


 $smarty->assign('docurl',$CONFIG['docurl']);
 $smarty->assign('consoleurl',$CONFIG['consoleurl']);
 $smarty->assign('imgs',$CONFIG['imgs']);
 $smarty->assign('rootpath',$CONFIG['smarty']['rootpath']);
 $smarty->assign('smarty_root',ROOT."/templates");
 $smarty->assign('file_url',$_SERVER["PHP_SELF"]);
 $smarty->assign('file_url_parameter',strtr($_SERVER["QUERY_STRING"],$rep));
 $smarty->assign('REQUEST',$_REQUEST);
 $rep=array($CONFIG['smarty']['rootpath']=>'');
 $smarty->assign('script_path',strtr($_SERVER["PHP_SELF"],$rep));
 $smarty->assign('charset',$CONFIG['charset']);
 $smarty->assign('Title',$CONFIG['Title']);
 $smarty->assign('Url',$CONFIG['URL']);
 $smarty->assign('uploadpath',$CONFIG['uploadpath']);
 $smarty->assign('request_url_encode',base64_encode($_SERVER["REQUEST_URI"]));

?>