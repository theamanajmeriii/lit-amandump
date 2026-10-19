/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let i = 0;
    let index = 0;
    let n = chars.length

    while (i < n) {


        let curr_char = chars[i];
        let count = 0


        while (i < n && curr_char === chars[i]) {
            count++
            i++
        }

        chars[index] = curr_char;
        index++

        if (count > 1) {
            let count_str = count.toString();
            for (ch of count_str) {
                chars[index] = ch;
                index++
            }
        }
    }
    return index;

};