<?php
$con=mysql_connect('127.0.0.1','root','root');
mysql_select_db('beibeiuser',$con);
$sql="select * from shopcar where username='18309294337'";
$result=mysql_query($sql,$con);
$show=array();
if(mysql_num_rows($result)>=1){
  while($rows=mysql_fetch_assoc($result)){
      $show[]=$rows;
  }
  echo json_encode($show);
}
 ?>