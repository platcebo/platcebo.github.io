<?php
// Подключение библиотеки
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Контент письма
// $title = 'Заявка с сайта'; // Название письма
// $body = '<p>Имя: <strong>'.$name.'</strong></p>'.
//         '<p>Телефон: <strong>'.$tel.'</strong></p>'.
//         '<p>Сообщение: <strong>'.$msg.'</strong></p>';


$body = '<h1>заявка с сайта mediacontext</h1>';

if(trim(!empty($_POST['name']))){
  $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['company']))){
    $body.='<p><strong>Название компании:</strong> '.$_POST['company'].'</p>';
}
if(trim(!empty($_POST['tel']))){
    $body.='<p><strong>Номер телефона:</strong> '.$_POST['tel'].'</p>';
}
if(trim(!empty($_POST['email']))){
    $body.='<p><strong>email:</strong> '.$_POST['email'].'</p>';
}
if(trim(!empty($_POST['task']))){
    $body.='<p><strong>Описание задачи:</strong> '.$_POST['task'].'</p>';
}


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    $mail->isSMTP();
    $mail->CharSet = 'UTF-8';
    $mail->SMTPAuth   = true;
  
    // Настройки почты отправителя
    $mail->Host       = 'smtp.google.com'; // SMTP сервера вашей почты
    $mail->Username   = '3221vbif@gmail.com'; // Логин на почте
    $mail->Password   = 'gazp tpmm vdll qhgs'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
  
    $mail->setFrom('3221vbif@gmail.com', 'Заявка с сайта'); // Адрес самой почты и имя отправителя
  
    // Получатель письма
    $mail->addAddress('3221vbif@gmail.com');
  
    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;
  
    $mail->send('d');
  
    // Сообщение об успешной отправке
    echo ('Сообщение отправлено успешно!');
  
  } catch (Exception $e) {
    header('HTTP/1.1 400 Bad Request');
    echo('Сообщение не было отправлено! Причина ошибки: {$mail->ErrorInfo}');
  }
  