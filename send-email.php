<?php
if ($_POST['form'] === "contact-form") {
  sendContactForm();
}

function sendContactForm()
{
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $arquivo = "
    <html>
      <div><span>Nome:$name</span></div>
      <div></div><span>E-mail:<b>$email</b></span></div>
      <div><span>Mensagem:$message</span></div>
    </html>
  ";

  $destino = "bp.energy@byd.com";
  $assunto = "Contato pelo Footer do Website";

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
}
