
// Services favorite button

var $ = require('jquery');
var storage = require('./storage');

module.exports = {
    _buildPostName: function(articleId) {
        return "post_"+ articleId;
    },
    favorite: function (articleId) {
        if (storage.supportsStorage()){
            storage.store(this._buildPostName(articleId),articleId);
        }else{
            browser: "Local Storage not supported";
        }

    },
    unfavorite: function (articleId) {
        if(storage.supportsStorage()){
            storage.clearOne(this._buildPostName(articleId));
        }else {
            browser: "Local Storage not supported";
        }
    },
    isFavorite: function (articleId) {
        if(storage.checkExists(this._buildPostName(articleId))){
            storage.store(this._buildPostName(articleId),articleId);
        }
    }
}