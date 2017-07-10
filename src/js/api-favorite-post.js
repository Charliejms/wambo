var $ = require('jquery');

function buildPostKey(articleId) {
    return "id_"+ articleId;
}
function buildPostName() {
    return "post_"+ articleId;
}

module.exports = {
    save : function (articleId, userId, successCallback, errorCallback ) {
        //petición AJAX para guardar articulos favoritos  en json-server
        $.ajax({
            url :  "http://localhost:3004/favorite",
            method: "post",
            data: {favorite_id: elem.attr('favorite-data-id')},
            success: successCallback,
            error: errorCallback,
        })

    },

    delete : function (articleId, userId, successCallback, errorCallback) {
        //petición AJAX para borrar articul favorit  en json-server
        
    },
    list : function (successCallback, errorCallback) {
        //petición AJAX para listar  articulos favoritos  en json-server
        $.ajax({
            url :  "http://localhost:3004/favorite",
            method: "get",
            success: successCallback,
            error: errorCallback,
        })
    }

}