tags = [];
index = 0;

function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}


function dm(){
    val = tags[index]
    document.getElementById('tag_name').textContent = '@' + val
    console.log(val)
    index++
    url = 'https://www.instagram.com/' + val + '/'
    var win = window.open(url, '_blank');
    win.focus();
}

function cpy(){
    copyToClipboard('💰 BUSINESS 💰 \nPromotion rates?')
}

function ld(){
    tags = document.getElementById('tags').value.split("\n")
}

