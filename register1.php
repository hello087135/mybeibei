<?php 
$username=$_POST['username'];
$userPass=$_POST['userPass'];
$con=mysql_connect('127.0.0.1','root','root');
mysql_select_db('beibeiuser',$con);
$str='insert into user values('.$username.','.$userPass.')';
$result=mysql_query($str,$con);
if($result>=1)
{
    echo 1;
}
else{
    echo 0;
}
?>