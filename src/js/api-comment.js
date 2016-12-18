/**
 * Created by richardcj on 27/7/16.
 */
var $ = require('jquery');

module.exports = {

    //save comment
    save: function(comment, successCallback, errorCallback) {

        //petición AJAX para guardar comment en json-server
        $.ajax({
            url :  "http://localhost:3004/comments",
            method: "post",
            data: comment,
            success: successCallback,
            error: errorCallback,
        });
    },

    delete: function (commentId, successCallback, errorCallback ) {
        //petición AJAX para borrar comment en json-server
        $.ajax({
            url :  "http://localhost:3004/comments"+commentId,
            method: "delete",
            success: successCallback,
            error: errorCallback,
        });
    },

    list: function (successCallback, errorCallback ) {
        //petición AJAX para listar comment en json-server
        $.ajax({
            url :  "http://localhost:3004/comments?_sort=id&_order=DESC",
            method: "get",
            success: successCallback,
            error: errorCallback,
        });
    }
};