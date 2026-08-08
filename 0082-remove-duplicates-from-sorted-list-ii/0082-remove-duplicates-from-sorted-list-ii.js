/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let dummy= new ListNode(-1);
    dummy.next=head;
    let prev=dummy;
    let curr=head;

    while (curr !== null) {

    let duplicate = false;

    // curr ke saare duplicates skip karo
    while (curr.next !== null &&
           curr.val === curr.next.val) {

        duplicate = true;
        curr = curr.next;
    }

    if (duplicate) {
        prev.next=curr.next
        curr=curr.next
        
    } else {
        prev=curr
        curr=curr.next
    }
    }
    

    return dummy.next



    
};