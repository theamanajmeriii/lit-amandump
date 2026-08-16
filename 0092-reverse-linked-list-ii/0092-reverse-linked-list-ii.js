var reverseBetween = function(head, left, right) {
    let dummy = new ListNode(-1);
    dummy.next = head;

    // left se ek node pehle
    let leftPrev = dummy;

    for (let i = 1; i < left; i++) {
        leftPrev = leftPrev.next;
    }

    // jis node se reversal start hoga
    let curr = leftPrev.next;

    // old left node reversal ke baad tail banega
    let leftNode = curr;

    let prev = null;
    let nextNode = null;

    // left se right tak reverse
    for (let i = 0; i < right - left + 1; i++) {
        nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    // left side ko reversed part se connect
    leftPrev.next = prev;

    // reversed part ke tail ko remaining list se connect
    leftNode.next = curr;

    return dummy.next;
};