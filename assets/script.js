var requestURL = 'https://www.loc.gov/?fo=json';
var submitBtn = $('.btn-primary');
redirectUrl = './search-results.html';

submitBtn.on ('click', function() {
    window.location.replace(redirectUrl);
})