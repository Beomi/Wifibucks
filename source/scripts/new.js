var url = 'first.wifi.olleh.com/starbucks/index_kr.html';

// Click and auth all check boxes
if (window.location.href.includes(url)) {
    document.querySelector('#agreement_agree').checked = true;
    document.querySelector('#purpose_agree').checked = true;
    document.querySelector('#contents > div.con_agree > div.con_box > fieldset > div.bottom_btn > div.btn > a').click()
}
