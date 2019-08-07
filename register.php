<?php
header("content-type","text/html;charset=utf-8");
$username=$_GET['username1'];
$con=mysql_connect('127.0.0.1','root','root');
mysql_select_db('beibeiuser',$con);
$sql='select * from user where(username='.$username.')';
$res=mysql_query($sql,$con);
$res1=mysql_num_rows($res);
if($res1>=1){
echo 1;
}
else{
    echo 0;
}
mysql_close($con);
?>