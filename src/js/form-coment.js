/**
 * Created by richardcj on 1/7/16.
 */

var $ = require('jquery');
var form = $('form-coment');

form.addEventListener("submit", function (evt) {

    //Variables del formulario
    var inputName = $(this).attr("name");
    var inputApellido  = $(this).attr("last_name");
    var inputEmail = $(this).attr('#email');
    var inputTextAreaComent = $(this).attr('#comment');


    if(name.check.checkValidity() == false){
        inputName.focus();
        evt.preventDefault();
        return false;
    }
    if (inputApellido.checkVa){

    }


});