<?php 
$username=$_GET['username'];
$img=$_GET['img'];
$imgd=$_GET['imgd'];
$information=$_GET['information'];
$price=$_GET['price'];
$count=$_GET['count'];
$con=mysql_connect('127.0.0.1','root','root');
mysql_select_db('beibeiuser',$con);
$str='insert into shopcar values ('.$username.',"'.$img.'","'.$imgd.'","'.$information.'",'.$price.','.$count.')';
 $res = mysql_query($str,$con);
if($res>=1){
    echo 1;
}else{
    echo 0;
}
mysql_close($con);

?>