var url = 'istarbucks.co.kr'
var homeUrl = 'https://www.google.com/_/chrome/newtab'

// Redirect to Home url
if (window.location.href.includes(url)) {
    window.location.href = homeUrl
}
