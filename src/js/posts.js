
var $ = require('jquery')



$('.new-post-form').on("click", function (e) {

    var post={
        title: "New post JS",
        intro: "The best stories ever",
        content: "Loren Insum Loren insum"
    }

    //petición Ajax para guardar la información de un post en Wambo
    $.ajax({
        url: "http://localhost:3004/posts",
        method: "post",
        data: post,
        
        success: function (response) {
            console.log("SUCCESS", response)
        },
        error: function () {
            console.error("ERROR", arguments)
        }
    })

    //Prevenimos que el form se envíe con los datos vacios
    e.preventDefault(); // == return false;
});