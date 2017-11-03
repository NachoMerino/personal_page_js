$(document).ready(function() {
    console.log('Document is loaded.');
    buttonColor = "white";
    baseButtonColor = "black"
    $('nav,footer,#favsong1,#favcity1,#cotactg1').hide();
    $('#myname,nav,footer').show('slow');
    $('#aboutme').css({ "color": buttonColor });
    whereAmI = '#myname';

    $('#aboutme').on('click', function(e) {
        whereAmI = '#aboutme1';
        $(`${whereAmI}`).show('slow');
        $('#favcity1,#favsong1,#cotactg1').hide('slow');
        $('#favcity,#favsong,#cotactg').css({ "color": baseButtonColor });
        $('#aboutme').css({ "color": buttonColor });
    });

    $('#favcity').bind('click', function(e) {
        whereAmI = '#favcity1';
        $('#favsong1,#aboutme1,#cotactg1').hide('slow');
        $(`${whereAmI}`).show('slow');
        $('#favcity').css({ "color": buttonColor });
        $('#favsong,#aboutme,#cotactg').css({ "color": baseButtonColor });
    });
    $('#favsong').bind('click', function(e) {;
        whereAmI = '#favsong1';
        $('#favcity1,#aboutme1,#cotactg1').hide('slow');
        $(`${whereAmI}`).show('slow');
        $('#favcity,#aboutme,#cotactg').css({ "color": baseButtonColor });
        $('#favsong').css({ "color": buttonColor });
    });
    $('#cotactg').bind('click', function(e) {;
        whereAmI = '#cotactg1';
        $('#favsong1,#aboutme1,#favcity1').hide('slow');
        $(`${whereAmI}`).show('slow');
        $('#favcity,#aboutme,#favsong').css({ "color": baseButtonColor });
        $('#cotactg').css({ "color": buttonColor });
    });



    $(document).keyup(function(event) {
        if (event.keyCode == 39) {
            if (whereAmI == '#aboutme1') {
                $(`${whereAmI}`).hide('slow');
                $('#favcity1').show('slow');
                whereAmI = '#favcity1';
                $('#favcity').css({ "color": buttonColor });
                $('#favsong,#aboutme').css({ "color": baseButtonColor });


            } else if (whereAmI == '#favcity1') {
                $(`${whereAmI}`).hide('slow');
                $('#mysong').show('slow');
                whereAmI = '#favsong1';
                $('#favcity,#aboutme').css({ "color": baseButtonColor });
                $('#favsong').css({ "color": buttonColor });

            } else if (whereAmI == '#favsong1') {
                $('#cotactg1').show('slow');
                $(`${whereAmI}`).hide('slow');
                whereAmI = '#cotactg1';
                $('#favcity,#favsong').css({ "color": baseButtonColor });
                $('#cotactg').css({ "color": buttonColor });

            } else if (whereAmI == '#cotactg1') {
                $('#aboutme1').show('slow');
                $(`${whereAmI}`).hide('slow');
                whereAmI = '#aboutme1';
                $('#cotactg').css({ "color": baseButtonColor });
                $('#aboutme').css({ "color": buttonColor });

            }

        }
    });
    $(document).keyup(function(event) {
        if (event.keyCode == 37) {
            if (whereAmI == '#favsong1') {
                $(`${whereAmI}`).hide('slow');
                $('#favcity1').show('slow');
                whereAmI = '#favcity1';
                $('#favcity').css({ "color": buttonColor });
                $('#favsong,#aboutme').css({ "color": baseButtonColor });


            } else if (whereAmI == '#aboutme1') {
                $(`${whereAmI}`).hide('slow');
                $('#cotactg1').show('slow');
                whereAmI = '#cotactg1';
                $('#favcity,#aboutme').css({ "color": baseButtonColor });
                $('#cotactg').css({ "color": buttonColor });

            } else if (whereAmI == '#favcity1') {
                $('#aboutme1').show('slow');
                $(`${whereAmI}`).hide('slow');
                whereAmI = '#aboutme1';
                $('#favcity,#favsong').css({ "color": baseButtonColor });
                $('#aboutme').css({ "color": buttonColor });

            } else if (whereAmI == '#cotactg1') {
                $(`${whereAmI}`).hide('slow');
                $('#favsong1').show('slow');
                whereAmI = '#favsong1';
                $('#cotactg').css({ "color": baseButtonColor });
                $('#favsong').css({ "color": buttonColor });

            }
        }
    });


});