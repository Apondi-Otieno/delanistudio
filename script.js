
// add toggle for what we do section

$(document).ready(function () {
    $("#development-icon").click(function () {
        $("#development-icon").slideDown('1500').hide('1000');
        $("#development").show('1500');
    });
    $("#development").click(function () {
        $("#development").slideUp('1500');
        $("#development-icon").slideDown('1500');
    });
});

$(document).ready(function () {
    $("#design-icon").click(function () {
        $("#design-icon").slideDown('1500').hide('1000');
        $("#design").show('1500');
    });
    $("#design").click(function () {
        $("#design").slideUp('1500');
        $("#design-icon").slideDown('1500');
    });
});

$(document).ready(function () {
    $("#management-icon").click(function () {
        $("#management-icon").slideDown('1500').hide('1000');
        $("#management").show('1500');
    });
    $("#management.click(function () {
        $('#management').slideUp('1500');
    $("#management-icon").slideDown('1500');
});
});


// add jquery hover property
$(document).ready(function () {
    $("#work1").mouseover(function () {
        $("#overlay").show();
    }).mouseout(function () {
        $("#overlay").hide();
    });
});
$(document).ready(function () {
    $("#work2").mouseover(function () {
        $("#overlay2").show();
    }).mouseout(function () {
        $("#overlay2").hide();
    });
});
$(document).ready(function () {
    $("#work3").mouseover(function () {
        $("#overlay3").show();
    }).mouseout(function () {
        $("#overlay3").hide();
    });
});
$(document).ready(function () {
    $("#work4").mouseover(function () {
        $("#overlay4").show();
    }).mouseout(function () {
        $("#overlay4").hide();
    });
});

$(document).ready(function () {
    $("#work5").mouseover(function () {
        $("#overlay5").show();
    }).mouseout(function () {
        $("#overlay5").hide();
    });
    $("#work6").mouseover(function () {
        $("#overlay6").show();
    }).mouseout(function () {
        $("#overlay6").hide();
    });
    $("#work7").mouseover(function () {
        $("#overlay7").show();
    }).mouseout(function () {
        $("#overlay7").hide();
    });
    $("#work8").mouseover(function () {
        $("#overlay8").show();
    }).mouseout(function () {
        $("#overlay8").hide();
    });
});


// add form alert 
$(document).ready(function () {
    $("form#contact").submit(function (event) {
        event.preventDefault();
        var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("textarea#message").val();
        if ($("input#name").val() && $("input#email").val()) {
            alert(name + ", we have received your message. Thank you for reaching out to us.");
        }
        else {
            alert("Please enter your name and email!");
        }

    });

});
