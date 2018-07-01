// Select color input

var color;

// Select size input

var height, width;

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function(event) {

        event.preventDefault();

            height = $('#inputHeight').val();
            width = $('#inputWeight').val();

                makeGrid(height, width);
})

function makeGrid(x ,y) {

// Your code goes here!

    $('tr').remove();
        for (var a = 1 ; a<= x ; a++) {
            $('#pixelCanvas').append('<tr id=table' + a + '></tr>');
            for (var b = 1; b <= y ; b++) {
                $('#table' + a).append('<td></td>');
            }
        }
        $('td').click(function addColor() {
            color = $('#colorPicker').val();

            if ($(this).attr('style')) {
                $(this).removeAttr('style')
            }else{
                $(this).attr('style','background-color:' + color);
            }
        })
}
 