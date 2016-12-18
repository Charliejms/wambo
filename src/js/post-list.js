//Cargar post de home
var $ =  require('jquery');
var moment = require('moment');
var utils = require('./utils');

module.exports = {
    loadPost: function () {
        //Petición AJAX para cargar lista de post
        $.ajax({
            type: "GET",
            url: "http://localhost:3004/posts/",
            dataType: "json",
            context: document.body,
            success: function(data){
                if (data.length == 0){
                    var html ='No more post...';
                    $('.post-list').append(html);

                }else {
                    $('.post-list').html(''); // Clean comments
                    for(var i in data){
                        var post = data[i];
                        var title =  post.title  || "";
                        var media = post.media || "";
                        var author = post.author.name || "";
                        var timeAgo = post.publicationDate || "";
                        var category = post.categories || "";
                        var avatar = post.author.avatar;
                        var id = post.id || "";

                        var html ='<div class="card" data-article-id="'+id+'">' +
                            '<div class="card-image waves-effect waves-block waves-light">' +
                            '<a href="detail.html">';
                        html +='<img src="'+ media +'" alt="blog-img">';
                        html +='</a></div><ul class="card-action-buttons">' +
                            '<li><a class="btn-floating waves-effect waves-light green favorite accent-2"> <i class="small material-icons">star</i> </a> ' +
                            '</li><li><a class="btn-floating waves-effect waves-light light-blue"> <i class="small material-icons">comment</i> </a> ' +
                            '</li></ul>';
                        html +='<div class="card-content"><p class="row">';
                        html +='<span class="left"><a href="#">'+category[0].name+'</a></span>';
                        html +='<span class="right"><time class="timeago" datetime="'+ timeAgo +'">18th June, 2016</time></span> </p>';
                        html +='<h2 id="title" class="card-title grey-text text-darken-4"><a href="#" class="grey-text text-darken-4">'+title+'</a></h2>';
                        html +='<div class="row"><div class="col s6 left-align"><div class="chip"><a href="#">';
                        html +='<img src="'+ avatar +'" alt="">';
                        html += author;
                        html +='</a></div></div></div></div></div>';
                        $('.post-list').append(html); // Load post
                    }
                }

            },
            error:function (data) {
                var html ='Oooops! Something went wrong. Try again later.';
                $('.post-list').append(html);

            }
        });

    }
}




