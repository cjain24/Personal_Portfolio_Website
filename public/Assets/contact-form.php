<?php

if (isset($_POST["submit"]))
{
    $name = $_POST['name'];
    $mail_from = $_POST['mail'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mail_to = 'chiragjain84@outlook.com';
    $header = "From: ".$mail_from;
    $txt = "You've got mail from".$name.".\n\n".$message;

    mail ($mail_to,$subject,$txt,$header);
    header("Location:index.php?mailsent");
}

