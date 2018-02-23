var authURL = 'http://first.wifi.olleh.com/starbucks/index_kr.html';
switch (window.location.href) {
    case authURL:
        document.querySelector('#agreement_agree').checked = true;
        document.querySelector('#purpose_agree').checked = true;

        document.querySelector('#contents > div.con_agree > div.con_box > fieldset > p > a > span').click()
        break;
    default:
        window.location.href = authURL;
}
