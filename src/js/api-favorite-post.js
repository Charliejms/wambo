var $ = require('jquery');

module.exports = {
    favorite : function (articleId, userId, successCallback, errorCallback ) {

        if (typeof(Storage) !== "undefined") {
            // Code for localStorage/sessionStorage.
            sessionStorage.setItem("article", articleId);
            console.log(sessionStorage.getItem('article'))
            successCallback();
        } else {
            // No Web Storage support
            errorCallback();
        }
    },

    unfavorite : function (articleId, userId, successCallback, errorCallback) {

        if (typeof(Storage) !== "undefined") {
            // Code for localStorage/sessionStorage.
            if(sessionStorage.getItem('article') == articleId){
                sessionStorage.removeItem("article");
                console.log(sessionStorage.getItem('article'))
                successCallback();
            }else {
                errorCallback();
            }
        } else {
            //No Web Storage support..
                errorCallback();
        }
        
    }
}