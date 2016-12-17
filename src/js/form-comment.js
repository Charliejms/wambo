/**
 * Created by richardcj on 24/10/16.
 */

var $ = require('jquery');
var moment = require('moment');
var commentList = require('./comment-list');

//atributos data del article
var articleId = $('#article-detail').data('article-id');
//moment

var nowDatecomment = moment().format();

var timeago = require('timeago');

$('.new-comment-form').on("submit", function (e) {
    //Validar el formualario
    e.preventDefault();
    var inputs = $('.new-comment-form input');
    var inputTAComment = $('#textarea_comment')[0];

    for (var i = 0;  i < inputs.length; i++){
        var input = inputs[i];
        if(input.checkValidity()==false){
            //alert(input.validationMessage);
            input.focus();
            return false;
        }
    }
    if(inputTAComment.checkValidity() == false){
        inputTAComment.focus();
        return false;
    }

    //comentario nuevo

    var comment = {
        articleId: articleId,
        name: $('#name').val(),
        lastName : $('#last_name').val(),
        email: $('#email').val(),
        comment: $('#textarea_comment').val(),
        publicationComment: nowDatecomment.valueOf()
    }
    console.log(comment);

    //petición AJAX para guardar información en json-server
    $.ajax({
        url :  "http://localhost:3004/comments",
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
            commentList.loadComments();
        },
        error: function () {
            console.log("ERROR", arguments);
        },
        complete: function () {
        $(inputs).attr("disabled", false);
        $(".new-comment-form button").text("Comment").attr("disabled", false)
    }
    });

    return false;

});



