/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1);
    let current = dummy;
    let temp1 = list1;
    let temp2 = list2;

    while (temp1 != null && temp2 != null) {
        if (temp1.val <= temp2.val) {      // <= handles equal case
            current.next = temp1;
            temp1 = temp1.next;
        } else {
            current.next = temp2;
            temp2 = temp2.next;
        }
        current = current.next;
    }

    // Attach the remaining nodes
    if (temp1 != null) {
        current.next = temp1;
    }

    if (temp2 != null) {
        current.next = temp2;
    }

    return dummy.next;
};