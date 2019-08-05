<?php 
$con= mysql_connect('127.0.0.1','root','root');
mysql_select_db('beibeiuser',$con);
$str='select * from children';
$res=mysql_query($str,$con);
$data=array();
if(mysql_num_rows($res)>=1){
    while($result=mysql_fetch_assoc($res)){
        $data[]=$result;
    }
    echo json_encode($data);
}
mysql_close($con);
?>