<?php 
$username=$_GET['username'];
$img=$_GET['img'];
$con= mysql_connect('127.0.0.1','root','root');
mysql_select_db('beibeiuser',$con);
$sql='select count from shopCar where username='.$username.' and img ="'.$img.'"';
$result=mysql_query($sql,$con);
$arr=array();
if(mysql_num_rows($result)>=1){
   $res=mysql_fetch_assoc($result);
   $arr[]=$res;
   echo json_encode($arr);
}else{
    echo 0;
}
mysql_close($con);
?>