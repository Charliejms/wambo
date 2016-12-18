//Cargar comentarios cuando cargue la pagina de detalle
var $ =  require('jquery');
var moment = require('moment');
var utils = require('./utils');
var apiComments = require('./api-comment');

module.exports = {
    loadComments: function () {
        apiComments.list(function(data){
            if (data.length == 0){
                var html ='No comments here. Be first!';
                $('.comments-list').append(html);

            }else {
                $('.comments-list').html(''); // Clean comments
                for(var i in data){
                    var comment = data[i];
                    var name =  comment.name  || "";
                    var lastName = comment.lastName || "";
                    var content = comment.comment || "";
                    var timeAgo = comment.publicationComment || "";

                    var html ='<ul class="collection comment-item"><li class="collection-item avatar">';
                    html +='<i class="mdi-file-folder circle light-blue"></i>';
                    html +='<span class="collection-header title">'+ utils.escapeHTML(name) +' '+ utils.escapeHTML(lastName) +'</span>';
                    html += '<p class="">'+ utils.escapeHTML(content)+'</p>';
                    html += '<p class="grey-text ultra-small"><time class="timeago" datetime="'+timeAgo+'"></time></p>';
                    html += '<i class="secondary-content"></i>';
                    html +='</li></ul>';
                    $('.comments-list').append(html); // Load comments
                }
            }

        },
        function (data) {
            var html ='Oooops! Something went wrong. Try again later.';
            $('.comments-error').append(html);

        });

    }
}

