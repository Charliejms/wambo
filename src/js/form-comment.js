/**
 * Created by richardcj on 24/10/16.
 */

var $ = require('jquery');

$('.new-comment-form').on("submit", function (e) {
    //Validar el formualario
    e.preventDefault();
    var inputs = $('.new-comment-form input');

    for (var i = 0;  i < inputs.length; i++){
        var input = inputs[i];
        if(input.checkValidity()==false){
            alert(input.validationMessage);
            input.focus();
            return false;
        }
    }

    //comentario nuevo

    var comment = {
        name: $('#name').val(),
        lastName : $('#last_name').val(),
        email: $('#email').val(),
        comment: $('#textarea_comment').val()
    }

    //petición AJAX para guardar la información Sparest-Backend
    $.ajax({
        url :  "/api/comment/",
        method: "post",
        data: comment,
        beforeSend: function () {
            $(inputs).attr("disabled", true);
            $(".new-comment-form button").text("Saving comment").attr("disabled", true)
        },
        success: function () {
            console.log("SUCCESS", arguments);
            $('form')[0].reset();
            $('#name').focus();
        },
        error: function () {
            console.log("ERROR", arguments);
        },
        complete: function () {
            $(inputs).attr("disabled", false);
            $(".new-comment-form button").text("Comment").attr("disabled", false)
        }
    })
    return false;

});



