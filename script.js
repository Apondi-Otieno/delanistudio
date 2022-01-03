// add form alert and mailchimp

let form = $('form');
let name =$('name')
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