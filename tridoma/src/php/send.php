<?
    $to = "3221vbif@gmail.com";
    $subject = 'Обратный звонок'; //Заголовок сообщения
    $message = '
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
                    <p>Имя: '.$_POST['name'].'</p>
                    <p>Телефон: '.$_POST['phone'].'</p>
                    <p>Email: '.$_POST['email'].'</p>
                    <p>Сообщение: '.$_POST['comment'].'</p>                                   
                </body>
            </html>'; //Текст сообщения
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: 3221vbif@gmail.com\r\n"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
?>