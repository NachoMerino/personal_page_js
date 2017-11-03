$(document).ready(function() {
    console.log('Document is loaded.');
    buttonColor = "white";
    baseButtonColor = "black"
    $('nav,footer,#favcity1,#favsong1,#cotactg1').hide();
    $('nav,footer,#aboutme1').show('slow');
    $('#aboutme').css({ "color": buttonColor });
    whereAmI = '#aboutme1';

    $('nav').on('click', function(e) {
        var target = e.target;
        var button = target.getAttribute('id');
        console.log('the button you press is: ' + `#${button}`);
        whereAmI = `#${button +1}`;
        $(`${whereAmI}`).show('slow');
        $(`#${button}`).css({ "color": buttonColor });

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
            $(`${whereAmI}`).show('slow');
            $('#aboutme1,#favcity1,#favsong1').hide('slow');
            $('#favcity,#aboutme,#favsong').css({ "color": baseButtonColor });
        });

    });



/*
            if (`#${button}` == '#aboutme1') {
                $('#favcity1,#favsong1,#cotactg1').hide('slow');
                $('#favcity,#favsong,#cotactg').css({ "color": baseButtonColor });
            } else if (`#${button}` == '#favcity1') {
                $('#aboutme1,#favsong1,#cotactg1').hide('slow');
                $('#favsong,#aboutme,#cotactg').css({ "color": baseButtonColor });
            } else if (`#${button}` == '#favsong1') {
                $('#aboutme1,#favcity1,#cotactg1').hide('slow');
                $('#favcity,#aboutme,#cotactg').css({ "color": baseButtonColor });
            } else if (`#${button}` == '#cotactg1') {
                $('#aboutme1,#favcity1,#favsong1').hide('slow');
                $('#favcity,#aboutme,#favsong').css({ "color": baseButtonColor });
            }
*/


$(document).keyup(function(event) {
    if (event.keyCode == 39) {
        if (whereAmI == '#myname') {
            $(`${whereAmI}`).hide('slow');
            $('#mycity').show('slow');
            whereAmI = '#mycity';
            $('#favcity').css({ "color": buttonColor });
            $('#favsong,#aboutme').css({ "color": baseButtonColor });


        } else if (whereAmI == '#mycity') {
            $(`${whereAmI}`).hide('slow');
            $('#mysong').show('slow');
            whereAmI = '#mysong';
            $('#favcity,#aboutme').css({ "color": baseButtonColor });
            $('#favsong').css({ "color": buttonColor });

        } else if (whereAmI == '#mysong') {
            $('#myform').show('slow');
            $(`${whereAmI}`).hide('slow');
            whereAmI = '#myform';
            $('#favcity,#favsong').css({ "color": baseButtonColor });
            $('#cotactg').css({ "color": buttonColor });

        } else if (whereAmI == '#myform') {
            $('#myname').show('slow');
            $(`${whereAmI}`).hide('slow');
            whereAmI = '#myname';
            $('#cotactg').css({ "color": baseButtonColor });
            $('#aboutme').css({ "color": buttonColor });

        }

    }
});
$(document).keyup(function(event) {
if (event.keyCode == 37) {
    if (whereAmI == '#mysong') {
        $(`${whereAmI}`).hide('slow');
        $('#mycity').show('slow');
        whereAmI = '#mycity';
        $('#favcity').css({ "color": buttonColor });
        $('#favsong,#aboutme').css({ "color": baseButtonColor });


    } else if (whereAmI == '#myname') {
        $(`${whereAmI}`).hide('slow');
        $('#myform').show('slow');
        whereAmI = '#myform';
        $('#favcity,#aboutme').css({ "color": baseButtonColor });
        $('#cotactg').css({ "color": buttonColor });

    } else if (whereAmI == '#mycity') {
        $('#myname').show('slow');
        $(`${whereAmI}`).hide('slow');
        whereAmI = '#myname';
        $('#favcity,#favsong').css({ "color": baseButtonColor });
        $('#aboutme').css({ "color": buttonColor });

    } else if (whereAmI == '#myform') {
        $(`${whereAmI}`).hide('slow');
        $('#mysong').show('slow');
        whereAmI = '#mysong';
        $('#cotactg').css({ "color": baseButtonColor });
        $('#favsong').css({ "color": buttonColor });

    }
}
});


});