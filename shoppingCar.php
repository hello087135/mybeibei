<?php
$username=$_GET['username'];
$conn=mysql_connect('127.0.0.1','root','root');
mysql_select_db('beibeiuser',$conn);
$sql="select * from shopcar where username='".$username."'";
$result=mysql_query($sql,$conn);
$show=array();
if(mysql_num_rows($result)>=1){
  while($rows=mysql_fetch_assoc($result)){
      $show[]=$rows;
  }
  echo json_encode($show);
}
mysql_close($conn);
 ?>