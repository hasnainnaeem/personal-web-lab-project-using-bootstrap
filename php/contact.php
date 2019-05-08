<?php
// site owner
$site_name = 'Personal Website';
$sender_domain = 'hasnainnaeemmk@gmail.com';
$to = 'mnaeem.bscs17seecs@seecs.edu.pk';


// contact form fields
$name = htmlspecialchars(trim( $_POST['fname'] )) . ' ' . htmlspecialchars(trim( $_POST['lname'] ));
$email = htmlspecialchars(trim( $_POST['email'] ));
$subject = "Email from Personal Website";
$message = htmlspecialchars(trim( $_POST['message'] ));


// check for error
$error = false;

if ( $name === "" ) { $error = true; }

if ( $email === "" ) { $error = true; }

if ( $subject === "" ) { $error = true; }

if ( $message === "" ) { $error = true; }


// if no error, then send mail
if ( $error == false )
{
    $body = "Name: $name \n\nEmail: $email \n\nMessage: $message";

    $headers = "From: " . $site_name . ' <' . $sender_domain . '> ' . "\r\n";
    $headers .= "Reply-To: " . $name . ' <' . $email . '> ' . "\r\n";

    $mail_result = mail( $to, $subject, $body, $headers );

    if ( $mail_result == true )
    {
        echo 'Mail successfully sent.';
        echo "<br /><b>Thank you " . $_POST['fname'] . " for contacting me! I'll get in touch with you soon.</b></p>";
    }
    else
    {
        echo 'Mail could not be sent. Please try again.';
    }
    // end if
}
else
{
    echo 'error';
}
// end if

