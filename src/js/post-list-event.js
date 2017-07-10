var $ = require('jquery');
var favoriteService = require('./favorite-service');
var storage = require('./storage');

var articleId = $('.card').data('article-id');
function buildPostName() {
    return "post_"+ articleId;
}
var araay = new Array();
var i;

console.log("local storage");
for (i = 0; i < localStorage.length; i++)   {

    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
}
function checkFavReloadPage() {
    for (i = 0; i < araay.length; i++)   {
        if(storage.checkExists(buildPostName())){

            var article = $('a.favorite');
            article.removeClass("favorite green").addClass("favorited blue");
            console.log("checkfavorite "+ articleId);
            //storage.store(buildPostName(), articleId);
        }
    }
}
checkFavReloadPage();



$('.blog-card').on('click','a.favorite',function () {
    console.log("Hola que haces!")
    var self = this;
    var articleId = $(self).data('article-id');
    console.log("Add favorite="+ articleId);
    $(self).removeClass("favorite green").addClass("favorited blue");
    storage.store(buildPostName(), articleId);
    araay.push(storage);
    console.log(araay)
});

$('.blog-card').on('click','a.favorited', function () {
    console.log('Desfav  Article')
    var self = this;
    var articleId = $(self).data('article-id');
    storage.clearOne(buildPostName());
    console.log("Remove favorite ="+ articleId);
    $(self).removeClass("favorited blue").addClass("favorite green");
    araay.pop();

});
for (var i = 0; i < araay.length; i++) {
    // Iterate over numeric indexes from 0 to 5, as everyone expects.
    console.log(araay[i]);
}