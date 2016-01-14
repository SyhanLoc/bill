$(document).ready(function () {
    $("#submitButton").click(function () {
        var toAdd = $("input[name=checkListItem]").val();
        var toAddNum = $("input[name=quantity]").val();
        $(".list").append("<li class='item'>" + toAddNum + " " + toAdd + "</li>");
    });
    $(document).on("click", ".item", function () {
        $(this).remove();
    });
    $(document).on('list', function (key) {
    //keyCode == 46 is the DELETE key
    if (key.keyCode == 46) {
        deleteAll();
    }
});
});








  //   console.log($('input:text').val());
  //   var x = 'utility-list';
  //   $('.utility-list').append('<li>
  //               <button class="checkbox">✓</button>' + x + 
  //               '<button class="delete">x</button>
  //           </li>')
  // })
  // $('text').prepend('name');
  //   console.log('name')










