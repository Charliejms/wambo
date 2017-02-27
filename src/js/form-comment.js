/**
 * Created by richardcj on 24/10/16.
 */

var $ = require('jquery');
var moment = require('moment');
var commentList = require('./comment-list');
var apiComment = require('./api-comment');

//atributos data del article
var articleId = $('#article-detail').data('article-id');


var nowDatecomment = moment().format();
var timeago = require('timeago');

// Contar nuemro de palabras:
$("#textarea_comment").on('keyup', function() {

    //var words = this.value.match(/\S+/g).length;
    var limitWords = 120;
    var words = $.trim(this.value).length ? this.value.match(/\S+/g).length : 0;

    if (words > limitWords) {
        // Split the string on first 150 words and rejoin on spaces
        var trimmed = $(this).val().split(/\s+/, limitWords).join(" ");
        // Add a space at the end to keep new typing making new words
        $(this).val(trimmed + " ");
    } else {
        $('#display_count').text(words);
        $('#word_left').text(limitWords-words);
    }

});

$('.new-comment-form').on("submit", function (e) {

    function beforeSend() {
        $(inputs).attr("disabled", true);
        $(".new-comment-form button").text("Saving comment").attr("disabled", true)
    }

    function completeSend() {
        $(inputs).attr("disabled", false);
        $(".new-comment-form button").text("Comment").attr("disabled", false)
    }
    //Validar el formualario
    e.preventDefault();
    var inputs = $('.new-comment-form input');
    var inputTAComment = $('#textarea_comment')[0];

    for (var i = 0;  i < inputs.length; i++){
        var input = inputs[i];
        if(input.checkValidity()==false){
            input.focus();
            return false;
        }
    }
    if(inputTAComment.checkValidity() == false){
        inputTAComment.focus();
        return false;
    }

    //Nuevo comentario

    var comment = {
        articleId: articleId,
        name: $('#name').val(),
        lastName : $('#last_name').val(),
        email: $('#email').val(),
        comment: $('#textarea_comment').val(),
        publicationComment: nowDatecomment.valueOf()
    }

    beforeSend(); //deshabilito el formulario

    //petición  guardar comentario en json-server
    apiComment.save(comment,
        function (response) {
            //console.log("SUCCESS", response);
            $('form')[0].reset();
            $('#name').focus();
            commentList.loadComments();
            completeSend();
    },
        function () {
            console.log("ERROR", arguments);
            completeSend();
    });

    return false;

});



