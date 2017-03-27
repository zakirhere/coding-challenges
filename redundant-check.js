conditionalCheck = function() {
    var argvGrid = true;
    var browser = 'chrome';

    if(argvGrid) {
        console.log('grid found')
    }
    else {
        if(!argvGrid && browser == 'chrome') {
            console.log('browser is chrome');
        }
    }
}

conditionalCheck();
