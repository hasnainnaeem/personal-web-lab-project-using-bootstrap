let isEmailFilled = false, isFirstNameFilled = false, isMessageFilled = false;

function checkLength(elem, fieldType, minLength, feedbackType) {
    let isFiledCorrectly = false;
    let textField = elem;
    let formFeedback = textField.next();
    if(textField.val().length < minLength) {
        if(feedbackType=="warning")
            formFeedback.attr("class", "warning");

        else if(feedbackType=="tip")
            formFeedback.attr("class", "feedback");

        formFeedback.text(fieldType + " must contain " + minLength + " characters.");
        isFiledCorrectly = false;
    }
    else {
        formFeedback.text("");
        isFiledCorrectly = true;
    }

    return isFiledCorrectly;
}

function checkEmail(elem, feedbackType) {
    let emailField = elem;
    let formFeedback = emailField.next();
    if(!emailField.val().includes('@')) {
        formFeedback.text("Incorrect Email. Rewrite correct email.");
        formFeedback.attr("class", "warning");
        isEmailFilled = false;
    }
    else {
        formFeedback.text("");
        isEmailFilled = true;
    }

    return isEmailFilled;
}

// validating first name
let fnameElem = $("#fname");
fnameElem.on('focus', function() {
    isFirstNameFilled = checkLength($(this), "First name", 3, "tip" );
});
fnameElem.on('blur', function() {
    isFirstNameFilled = checkLength($(this), "First name", 3 ,"warning")
});

// validating email
let emailElem = $("#email");
emailElem.on('blur', function() {
    isEmailFilled = checkEmail($(this));
});

// validating message
let messageElem = $("#message");
messageElem.on('focus', function() {
    isMessageFilled = checkLength($(this), "Message", 3, "tip" );
});
messageElem.on('blur', function() {
    isMessageFilled = checkLength($(this), "Message", 3 ,"warning")
});

// Sending data to Back-end script
$contactForm = $("#contact-form");
$contactForm.submit(function(e) {
    e.preventDefault();
    if(!(isFirstNameFilled && isEmailFilled && isMessageFilled))
    {
        if($contactForm.has("#form-not-filled-message").length) // Insert message if not previously inserted
            null;
        else
            $contactForm.append("<p class='warning' id='form-not-filled-message'>" +
                "Please fill form correctly before submitting.</p>").hide().fadeIn();
    }
    else {
        let details = $contactForm.serialize();
        $.post("php/contact.php", details, function(data){
            $data = $(data);
            $data.attr("id", "form-submitted-message");
            $contactForm.find("input, textarea").val("");
            if($contactForm.has("#form-submitted-message").length)  // insert if not previously inserted
                null;
            else
                $contactForm.append($data).hide().fadeIn();
        });
    }
});

