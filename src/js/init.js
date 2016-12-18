var commentList = require('./comment-list');
var postList = require('./post-list');
var scrollTop =require('./scrolltop');

//cargamos el listado de comentarios
commentList.loadComments();

//Cargamos listado de post-articulos
postList.loadPost();

// Load TimeAgo
jQuery(document).ready(function() {
    $("time.timeago").timeago();
});

//Scroll Top

/*



if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    var articleId = "6";
    var userId = "5";
    localStorage.setItem("article", articleId + userId);

    var data = localStorage.getItem('article');
    console.log(localStorage.getItem('article')[0])
    console.log(data[0])
    console.log(data[1])
    console.log(data[2])
    console.log(data[3])
} else {
    // No Web Storage support
    errorCallback();
}*/
