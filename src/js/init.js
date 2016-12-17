var commentList = require('./comment-list');

//cargamos el listado de comentarios

commentList.loadComments();

jQuery(document).ready(function() {
    $("time.timeago").timeago();
});