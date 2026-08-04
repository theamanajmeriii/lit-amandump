//for review

var backspaceCompare = function(s, t) {
    let i = s.length - 1;
    let j = t.length - 1;

    while (i >= 0 || j >= 0) {
        let skipS = 0;
        while (i >= 0) {
            if (s[i] === "#") {
                skipS++;
                i--;
            } else if (skipS > 0) {
                skipS--;
                i--;
            } else {
                break;
            }
        }

        let skipT = 0;
        while (j >= 0) {
            if (t[j] === "#") {
                skipT++;
                j--;
            } else if (skipT > 0) {
                skipT--;
                j--;
            } else {
                break;
            }
        }

        if (i >= 0 && j >= 0 && s[i] !== t[j]) return false;
        if ((i >= 0) !== (j >= 0)) return false;

        i--;
        j--;
    }

    return true;
};