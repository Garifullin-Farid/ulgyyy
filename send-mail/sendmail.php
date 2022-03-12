<?php
    use PHPMailer-6.6.0\PHPMailer-6.6.0\PHPMailer;
    use PHPMailer-6.6.0\PHPMailer-6.6.0\Exception;

    require "PHPMailer-6.6.0/src/Exception.php";
    require "PHPMailer-6.6.0/src/PHPMailer.php";

    $mail = new PHPMailer(true);
    $mail->CharSet = "UTF-8";
    $mail->setLanguage("ru","phpmailer/language/");
    $mail->IsHTML(true);

    $mail->setForm('user');
    $mail->addAddress("faridgarifullin3@gmail.com")
    $mail->Subject="новый баг";

    $body = "<h1>Новый баг</h1>";
    $body.="<p><strong>Имя</strong>".$_POST['name']."</p>"
    $mail->Body = $body;
    if(!$mail->send()){
       $massage ="ошибка";
    }
    else{
        $massage ="Данныe отправлены";
    }
    $response =['message'=>$massage];
    header("Content-type: application/json");
    echo json_encode($response);
    ?>
    