$(function(){
    $("#wyslij").on('click', function() {
        $(".forminput").each(function() {
            var inputField = $(this).find(".form-control");
            var h7Tag = $(this).find("h7");
            if (inputField.val() === "" && h7Tag.length === 0) {
                $(this).append("<h7 style='color: red;'>Pole obowiązkowe</h7>");
            } else if (inputField.val() !== "" && h7Tag.length > 0) {
                h7Tag.remove(); // Usuwanie wszystkich tagów <h7>
            }
        });
    });
});
