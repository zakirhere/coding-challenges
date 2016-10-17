// Given an encoded string, return it's decoded string.
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
// You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.
// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].
// s = "3[a]2[bc]", return "aaabcbc".
// s = "3[a2[c]]", return "accaccacc".
// s = "2[abc]3[cd]ef", return "abcabccdcdcdef".

console.clear()
var str = "2[aa]3[b]";
console.log(decodeString(str));
function decodeString(str) {
    var multiply = 0;
    var qChar = true;
    var needToMultiply = "";
    var out = "";
    for (var i = 0;i < str.length;i++) {
        if (qChar) {
            if (str[i] <= '9' && str[i] >='0') {
                multiply += parseInt(str[i]);
            }
            else if (str[i] === '['){
                qChar = false;
            } else {
                out += str[i];
            }
        } else {
             if (str[i] === ']'){
                qChar = true;
                for (var j = 0;j < multiply;j++)
                    out += needToMultiply;
                needToMultiply = "";
                multiply = 0;
            } 
            else {
                needToMultiply += str[i];
            }
        }
    }
    return out;
};
