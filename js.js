$(document).ready(function(){
    $('#button1').on('click', function(e){
        e.preventDefault //do not submit right away
        var thisFormData = $('#name').val(); //serialize all form data
        alert(thisFormData); //alert serialized form data
        $('form').submit(); //submit the form after fields/values have been alerted
    });
}); 