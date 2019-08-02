<?php
$username=$_POST['username1'];
$userPass=$_POST['userPass1'];
$con=mysql_connect('127.0.0.1','root','root');
mysql_select_db("beibeiuser",$con);
$str='select *from user where (username='.$username.')';
$res= mysql_query($str,$con);
$result = mysql_fetch_array($res);
$data=array();
if($result)
{
    $data[] = $result;
    $json = json_encode($data, JSON_UNESCAPED_UNICODE);
	echo $json;
}
mysql_close($con);
?>