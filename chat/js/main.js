$(document).ready(function() {
  $("input").blur(function() {
    var $this = $(this);
    if ($this.val())
      $this.addClass("used");
    else
      $this.removeClass("used");
  });

  $("#add-name").click(function(e) {
    var name = $("#name").val();

    if($("#name").val() == "") {
      $(".group").addClass("input-error");

      setTimeout(function() {
        $(".group").removeClass("input-error");
      }, 600);

      return false;
    }

    localStorage.setItem("name", name);
  });
});

$(document).ready(function() {
  $("time.timeago").timeago();

  $("#add-text").click( function() {
    var user = localStorage.getItem("name");
    var time = new Date();
    var timeIso = time.toISOString();
    var date = getDate();

    var message = $("#text").val();

    if($("#text").val() == "") {
      $(".btn-chat").addClass("input-error");

      setTimeout(function() {
        $(".btn-chat").removeClass("input-error");
      }, 600);
      return false;
    }


    $("#chat").append("<div class='chat__inner'><p class='chat__item'>" + message + "<span class='chat__username'>" + user + " <time class='timeago' datetime=" + timeIso + ">" + date + " </time></span></p></div>");
    $("time.timeago").timeago();
    $("#form")[0].reset();

    var chat = $("#chat").html();
    localStorage.setItem("chat", chat);
    return false;
  });

  if(localStorage.getItem("chat")) {
    $("#chat").html(localStorage.getItem("chat"));
  }

  $("#clear").click( function() {
    window.localStorage.clear();
    location.reload();
    return false;
  });
});

function getDate() {
  var time = new Date();
  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  var month = time.getUTCMonth() + 1;
  var day = time.getUTCDate();
  var year = time.getUTCFullYear();

  return monthNames[month] + " " + day + ", " + year;
}
