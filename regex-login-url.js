// var strArray = ["https://my.dit.adp.com/static/redbox/l/siteminderagent", 
            //     "https://my.dit.adp.com/static/redbox/login.html?REASON=BADLOGIN"
            //    ];

var str = "https://my.dit.adp.com/static/redbox/l/siteminderagent";           

console.log(failFast(str));

function failFast(url) {
    var badLoginUrl = /REASON=BADLOGIN/;
    var expiredPasswordUrl = /siteminderagent/;

    if(badLoginUrl.test(url) || expiredPasswordUrl.test(url)) {
        console.log(expiredPasswordUrl.toString().replace());
        if(url.indexOf(badLoginUrl.toString().replace('/', '')) >= 0) {
            return ('Bad login found');
        }
        else if(url.indexOf(expiredPasswordUrl.toString().replace('/', '')) >= 0) {
            return ('Expired password flow');
        }
        return 'no match';
    }
    return 'nothing found';
}