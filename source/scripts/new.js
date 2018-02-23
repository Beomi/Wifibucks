var url = 'http://first.wifi.olleh.com/starbucks/index_kr.html';

if (window.location.href === url) {
    document.querySelector('#agreement_agree').checked = true;
    document.querySelector('#purpose_agree').checked = true;
    document.querySelector('#contents > div.con_agree > div.con_box > fieldset > p > a > span').click()
}
