<?php
//Variable setting
// $name = $_REQUEST['name'];
// $email = $_REQUEST['email'];
// $subject = $_REQUEST['subject'];
// $message = $_REQUEST['message'];
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
if(empty($name) || empty($email)||empty($subject)||empty($message))
{
    echo "Please fill in all the fields.";
}
else
{
    mail("roshan5438@hotmail.com", "Wesbite Msg", $message, "From: $name <$email>");
    echo "<script type='text/javascript'><alert('your message has been sent');
    window.history.log(-1);
    </script>";

}

?>