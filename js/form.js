$(function($) {

  $("form").submit(function(event) {

      event.preventDefault();

      $.ajax({
          url: "https://formspree.io/smtxcommunitycodes@gmail.com",
          method: "POST",
          data: {
            name: $("#name").val(),
            email: $("#email").val(),
          },
          dataType: "json"
      }).done(function(){
          $("#name").val("");
          $("#email").val("");
          $(".rsvp").hide();
          $(".seeyouthere").show();
      }).fail(function(){
          alert("Whoops! There's been a mistake!");
      });
  });
});
