<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$start = $_POST['start'];
$end = $_POST['end'];
$date = $_POST['date'];
$message = $_POST['message'];

$arquivo = "
  <html>
    <div><span>Name: $name</span></div>
    <div><span>Whatshapp: $phone</span></div>
    <div><span>Pick up point: $start</span></div>
    <div><span>Destination point: $end</span></div>
    <div><span>Date and time at the pick up point: $date</span></div>
    <div></div><span>E-mail:<b>$email</b></span></div>
    <div><span>Message: $message</span></div>
  </html>
  ";

$destino = "info@besttransfers.com";
$assunto = "Get in touch";

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= "From: $name <$email>";
$oldLocation = $_SERVER['HTTP_REFERER'];

$enviaremail = mail($destino, $assunto, $arquivo, $headers);
if ($enviaremail) {
  header("Location: $oldLocation?message=success");
} else {
  header("Location: $oldLocation?message=failed");
}
