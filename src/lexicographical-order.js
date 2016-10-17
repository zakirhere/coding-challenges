var lexSorter = function(range) {
    var strArr = [];
    for(var i=1; i<=range; i++) {
        strArr.push(i.toString());
    }

    return strArr.sort();
}

console.log('output', lexSorter(15));

