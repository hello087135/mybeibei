<?php 
$username=$_GET['username'];
$img=$_GET['img'];
$count=$_GET['count'];
$con= mysql_connect('127.0.0.1','root','root');
mysql_select_db('beibeiuser',$con);
$sql='update shopcar set count='.$count.' where img ="'.$img.'" and username='.$username;
$result=mysql_query($sql,$con);
if($result>=1){
   echo 1;
}else{
    echo 0;
}
mysql_close($con);
?>