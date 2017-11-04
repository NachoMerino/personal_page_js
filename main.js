$(document).ready(function() {
    var button;
    var whereAmI = '#aboutme1';
    buttonColor = "white";
    baseButtonColor = "black"
    $('nav,footer,#favcity1,#favsong1,#cotactg1').hide();
    $('nav,footer,#aboutme1').show('slow');
    $('#aboutme').css({ "color": buttonColor });
    whereAmI = '#aboutme1';
    $('nav').on('click', function(e) {
        var target = e.target;
        var button = target.getAttribute('id');
        whereAmI = `#${button +1}`;
        $(`${whereAmI}`).show('slow');
        $(`#${button}`).css({ "color": buttonColor });
    });

    $('#aboutme').on('click', function(e) {
        $('#favcity1,#favsong1,#cotactg1').hide('slow');
        $('#favcity,#favsong,#cotactg').css({ "color": baseButtonColor });
    });

    $('#favcity').on('click', function(e) {
        $('#aboutme1,#favsong1,#cotactg1').hide('slow');
        $('#favsong,#aboutme,#cotactg').css({ "color": baseButtonColor });
    });

    $('#favsong').on('click', function(e) {
        $('#aboutme1,#favcity1,#cotactg1').hide('slow');
        $('#favcity,#aboutme,#cotactg').css({ "color": baseButtonColor });
    });

    $('#cotactg').on('click', function(e) {
        $('#aboutme1,#favcity1,#favsong1').hide('slow');
        $('#favcity,#aboutme,#favsong').css({ "color": baseButtonColor });
    });

    $(document).keyup(function(event) {
        if (event.keyCode == 39) {

            $(`${whereAmI}`).hide('slow');
            $(`${whereAmI}`).next().show('slow');
            whereAmI = $(`${whereAmI}`).next()[0].id;
            whereAmI = '#' + whereAmI;
            if (whereAmI == '#final') {
                $(`${whereAmI}`).hide('slow');
                whereAmI = '#aboutme1';
                $(`${whereAmI}`).show('slow');
            }
        } else if (event.keyCode == 37) {
            $(`${whereAmI}`).hide('slow');
            $(`${whereAmI}`).prev().show('slow');
            whereAmI = $(`${whereAmI}`).prev()[0].id;
            whereAmI = '#' + whereAmI;
            if (whereAmI == '#begin') {
                $(`${whereAmI}`).hide('slow');
                whereAmI = '#cotactg1';
                $(`${whereAmI}`).show('slow');
            }
        }
    });
});