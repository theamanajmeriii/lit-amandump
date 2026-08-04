 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

var partition = function(head, x) {
    let beforeHead = new ListNode(0);
    let afterHead = new ListNode(0);

    let before = beforeHead;
    let after = afterHead;

    while (head) {
        if (head.val < x) {
            before.next = head;
            before = before.next;
        } else {
            after.next = head;
            after = after.next;
        }

        head = head.next;
    }

    after.next = null;
    before.next = afterHead.next;

    return beforeHead.next;
};