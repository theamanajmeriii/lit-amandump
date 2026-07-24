/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {

    let temp = head;
    let count = 0;

    // Count the nodes
    while (temp != null) {
        count++;
        temp = temp.next;
    }

    // Find middle index
    let mid = Math.floor(count / 2);

    // Start again from head
    temp = head;

    // Move temp to the middle
    while (mid > 0) {
        temp = temp.next;
        mid--;
    }

    // Return the middle node
    return temp;
};