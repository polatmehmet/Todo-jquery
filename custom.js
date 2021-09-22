$( document ).ready(function() {
    $('#ekle').click( function () {
        $todo = $('#addTodo').val();
        if ($todo.length > 0 ) {
            $('#todoList').append('<li class="item"><input class="form-check-input" type="checkbox" value="" ><span>'+ $todo +'</span> <button class="close"><i class="fas fa-times  "></i></button>');
        }
    });
});
$(document).on('click','.close',function(){
    if ($(this).siblings('input').is(':checked')) {
        $(this).parent().remove();
    } else {
        alert('Silmek için seçimi tıklamalısınız ?');
    }
})