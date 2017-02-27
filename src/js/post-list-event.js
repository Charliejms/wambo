var $ = require('jquery');
var favoriteService = require('./favorite-service');
var storage = require('./storage');

var articleId = $('.card').data('article-id');
function buildPostName() {
    return "post_"+ articleId;
}

function checkFavReloadPage() {
    if(storage.checkExists(buildPostName())){

        var article = $('a.favorite');
        article.removeClass("favorite green").addClass("favorited blue");
        console.log("checkfavorite "+ articleId);
        storage.store(buildPostName(), articleId);
    }
}
checkFavReloadPage();



$('.blog-card').on('click','a.favorite',function () {
    console.log("Hola que haces!")
    var self = this;
    var articleId = $(self).data('article-id');
    if(!storage.checkExists(articleId)){
        $(self).removeClass("favorite green").addClass("favorited blue");
        console.log("favorite"+ articleId);
        storage.store(buildPostName(), articleId);
    }

});

$('.blog-card').on('click','a.favorited', function () {
    console.log('Desfav  Article')
    var self = this;
    if(storage.checkExists(buildPostName())){
        storage.clearOne(buildPostName());
        console.log("Remove favorite"+ articleId);
        $(self).removeClass("favorited blue").addClass("favorite green");
    }

});