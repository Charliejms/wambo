var $ = require('jquery');

module.exports = {
    save: function (post,  successCallback, errorCallback) {
        //petición AJAX para guardar post-articulo en json-server
        $.ajax({
            url :  "http://localhost:3004/post",
            method: "post",
            data: comment,
            success: successCallback,
            error: errorCallback,
        });
    },
    delete: function (postId,  successCallback, errorCallback) {
        //petición AJAX para guardar post-articulo en json-server
        $.ajax({
            url :  "http://localhost:3004/post"+postId,
            method: "delete",
            success: successCallback,
            error: errorCallback,
        });
    },
    list: function (successCallback, errorCallback) {
        //petición AJAX para guardar post-articulo en json-server
        $.ajax({
            url :  "http://localhost:3004/post",
            method: "get",
            success: successCallback,
            error: errorCallback,
        });
    }
}