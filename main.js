$(document).ready(function() {
    var button;
    var whereAmI = '#aboutme1';
    var node = $("nav button").length;
    buttonColor = "white";
    baseButtonColor = "black"
    $('nav,footer,#favcity1,#favsong1,#cotactg1').hide();
    $('nav,footer,#aboutme1').show('slow');
    $('#aboutme').css({ "color": buttonColor });
    $('nav').on('click', function(e) {

        var target = e.target;
        var button = target.getAttribute('id');
        $(`#${button}`).prev().css({ "color": baseButtonColor });
        $(`#${button}`).prev().prev().css({ "color": baseButtonColor });
        $(`#${button}`).prev().prev().prev().css({ "color": baseButtonColor });
        $(`#${button}`).next().css({ "color": baseButtonColor });
        $(`#${button}`).next().next().css({ "color": baseButtonColor });
        $(`#${button}`).next().next().next().css({ "color": baseButtonColor });
        whereAmI = `#${button +1}`;
        $(`${whereAmI}`).show('slow');
        $(`#${button}`).css({ "color": buttonColor });
        $(`${whereAmI}`).prev().hide('slow');
        $(`${whereAmI}`).prev().prev().hide('slow');
        $(`${whereAmI}`).prev().prev().prev().hide('slow');
        $(`${whereAmI}`).next().hide('slow');
        $(`${whereAmI}`).next().next().hide('slow');
        $(`${whereAmI}`).next().next().next().hide('slow');

    });



    $(document).keyup(function(event) {
        button = whereAmI.slice(0, -1);
        console.log(button);
        if (event.keyCode == 39) {
            $(`${whereAmI}`).hide('slow');
            $(`${button}`).css({ "color": baseButtonColor });
            $(`${whereAmI}`).next().show('slow');
            $(`${button}`).next().css({ "color": buttonColor });
            whereAmI = $(`${whereAmI}`).next()[0].id;
            whereAmI = '#' + whereAmI;
            if (whereAmI == '#final') {
                $(`${whereAmI}`).hide('slow');
                whereAmI = '#aboutme1';
                $(`${whereAmI}`).show('slow');
                $(`${button}`).css({ "color": baseButtonColor });
            }
        } else if (event.keyCode == 37) {
            $(`${whereAmI}`).hide('slow');
            $(`${button}`).css({ "color": baseButtonColor });
            $(`${whereAmI}`).prev().show('slow');
            $(`${button}`).prev().css({ "color": buttonColor });

            whereAmI = $(`${whereAmI}`).prev()[0].id;
            whereAmI = '#' + whereAmI;
            if (whereAmI == '#begin') {
                $(`${whereAmI}`).hide('slow');
                whereAmI = '#cotactg1';
                $(`${whereAmI}`).show('slow');
                $(`${button}`).css({ "color": baseButtonColor });
            }
        }
    });
});