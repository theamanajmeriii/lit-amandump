/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow=head;
    let fast=head;
    while(fast!=null && fast.next!=null){
        slow=slow.next;
        fast=fast.next.next;
    }
    let curr=slow;
    let prev=null;
    let next=null;
    while(curr!=null){
        next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next
    }
    slow=prev
    fast=head;
    while(slow!=null){
        if (slow.val != fast.val) {
            return false;
        }
        slow=slow.next;
        fast=fast.next;

    }
    return  true;
    
};