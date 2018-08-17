var url = 'first.wifi.olleh.com/starbucks/index_kr.html';

// Click and auth all check boxes
if (window.location.href.includes(url)) {
    document.querySelector('#agreement_agree').checked = true;
    document.querySelector('#purpose_agree').checked = true;
    goAct(); // Use global function
}
