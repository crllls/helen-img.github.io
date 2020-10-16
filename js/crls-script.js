$(document).ready(function(){
    $(document).on('click', '.a-useful-links', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
      });
  });


// contact us

$('.contactForm').submit(function(e) {
    
    e.preventDefault();
    
    var myEmail = 'mailto:helenmich2675@yahoo.com?';

    var name = $(this).find('input[name="name"]').val();
    var email = $(this).find('input[name="email"]').val();

    var msg = $('textarea#msg').val().replace(/\n/g, '%0D%0A');

    var subject = 'subject=' + $(this).find('input[name="subject"]').val();
    var fmsg = '&body=' + 'Name: '+ name +
    '%0D%0AEmail: '+ email + '%0D%0A%0D%0A' + msg + '%0D%0A%0D%0A%0D%0A';

    $("#sendMail-tome").attr("href", myEmail+subject+fmsg) ;
    
    if(name != '' && email != '' && subject != '' && msg != '')
        $("#sendMail-tome")[0].click();

}); 
