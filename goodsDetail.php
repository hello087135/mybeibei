<?php
$id=$_GET['id'];
$con=mysql_connect('127.0.0.1','root','root');
mysql_select_db("beibeiuser",$con);
$str='select * from children where id='.$id;
$res=mysql_query($str,$con);
$arr=array();
if(mysql_num_rows($res)>=1){
while($result=mysql_fetch_assoc($res))
{
    $arr[]=$result;
}
echo json_encode($arr);
}
mysql_close($con);
?>