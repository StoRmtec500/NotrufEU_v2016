/**
 * Created by martinkuenz on 14.02.16.
 */

var NotrufEU_2016 = new Framework7();

var device = Framework7.prototype.device;

var $$ = Dom7;

var mainView = NotrufEU_2016.addView('.view-main', {
    dynamicNavbar: true,
debug: true

});


// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    if (device.iphone) {
        NotrufEU_2016.alert('Here comes About page');
    } else  {
        console.log('browser');
    }

});




