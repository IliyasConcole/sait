<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $sname = htmlspecialchars($_POST['sname']);
    $bornDate = htmlspecialchars($_POST['bornDate']);
    $mail = htmlspecialchars($_POST['mail']);
    $aboutMe = htmlspecialchars($_POST['aboutMe']);

    $to = 'recipient@example.com'; // Замените на ваш email
    $subject = 'Новая анкета';
    $message = "Имя: $name\nФамилия: $sname\nДата рождения: $bornDate\nEmail: $mail\nО себе: $aboutMe";
    $headers = 'From: webmaster@example.com' . "\r\n" .
               'Reply-To: webmaster@example.com' . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["status" => "success", "message" => "Письмо успешно отправлено."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Ошибка при отправке письма."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Неверный метод запроса."]);
}
?>
