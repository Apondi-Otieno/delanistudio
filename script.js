// add form alert and mailchimp

let form = $('form');
let name =$('#name');
let email = $('#email');
let message = $('#message');

form.submit(function(event) {
    event.preventDefault();
    if(message.val().length ==0) {
        alert('How can we help?')
    }
    else {
        alert ('Hey $name.we have received your message')
    }
    form[0].reset();
}
// add jquery hover property


// add toggle for what we do section

$(function () {
    toggleWhatWeDo('.management-icon', '.management-text');
    toggleWhatWeDo('.management-text', '.management-icon');
    toggleWhatWeDo('.development-icon', '.development-text');
    toggleWhatWeDo('.development-text', '.development-icon');
    toggleWhatWeDo('.design-icon', '.design-text');
    toggleWhatWeDo('.design-text', '.design-icon');

})

function toggleWhatWeDo(class1, class2) 
{
    $(class1).click(function)
    {
        $(this).addClass('d-none');
        $(class2).removeClass('d-none');
    }
}