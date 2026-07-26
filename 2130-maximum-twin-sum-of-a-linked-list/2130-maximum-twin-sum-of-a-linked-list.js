/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

var pairSum = function(head) {

    let stack = [];
    let temp = head;

    // Count nodes
    let n = 0;
    while (temp) {
        n++;
        temp = temp.next;
    }

    let mid = n / 2;

    temp = head;

    // Push first half
    for (let i = 0; i < mid; i++) {
        stack.push(temp.val);
        temp = temp.next;
    }

    let max = 0;

    // Traverse second half
    while (temp) {

        let top = stack.pop();

        max = Math.max(max, top + temp.val);

        temp = temp.next;
    }

    return max;
};