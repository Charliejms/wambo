var $ = require('jquery');
var apiFavPost = require('./api-favorite-post');

$('.card-action-buttons').on('click','a.favorite',function () {
    var self = this;
    //atributos data del article
    console.log(self);
    var articleId = $('.card').data('article-id');

    var isVisible = $('.favorite').is(":visible");

    apiFavPost.favorite(articleId,1,function (response) {
        $(self).removeClass("favorite green").addClass("favorited blue");
        console.log("favorite"+ articleId);
    },function (response) {
        console.error("Error favorite article", response);
    });
});

$('.card-action-buttons').on('click','a.favorited',function () {
    var self = this;
    //atributos data del article
    console.log(self);
    var articleId = $('.card').data('article-id');
    apiFavPost.unfavorite(articleId,1,function (response) {
        $(self).removeClass("favorited blue").addClass("favorite green");
        console.log("favorited"+ articleId);
    },function (response) {
        console.error("Error unfavorite article", response);
    });

});
