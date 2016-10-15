/**
 * Created by richardcj on 27/7/16.
 */
var $ = require('jquery');

module.exports = {
    //save comment
    save: function(comment, successCallback, errorCallback) {

        var formData = new FormData();
        formData.append("name", comment.name);
        formData.append("apellido", comment.apellido);
        formData.append("email", comment.email);
        formData.append("comment",comment.comment);
        if (song.cover_file)
            formData.append("cover_url", song.cover_file);
        else
            formData.append("cover_url", "");

        $.ajax({
            url: "/api/comment/",
            method: "post",
            data: formData,
            processData: false,
            contentType: false,
            success: successCallback,
            error: errorCallback
        });
    }
};