<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$date = $_POST['date'];
$city = $_POST['city'];
$guest = $_POST['guest'];
$area = $_POST['area'];
$ask = $_POST['ask'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 't-event1@mail.ru';                 // Наш логин
$mail->Password = '5BC5TV6GA4i8rsdtB54m';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('t-event1@mail.ru', 'T-Event');   // От кого письмо 
$mail->addAddress('maxtsurka@puzzlepro.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone . '<br>
	E-mail: ' . $email . '<br>
	Дата: ' . $date . '<br>
	Город: ' . $city . '<br>
	Гостей: ' . $guest . '<br>
	Площадь: ' . $area . '<br>
	Вопрос: ' . $ask . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>