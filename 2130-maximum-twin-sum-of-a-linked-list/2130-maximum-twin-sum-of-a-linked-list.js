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
    let slow=head;
    let fast=head;
    let mid=null

    while(fast != null && fast.next != null){
        slow=slow.next;
        fast=fast.next.next
    }
    mid=slow

    let prev=null;
    let curr=mid;
    let next=null;
    while(curr!=null){
        next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next
    }

    let temp=head;
    mid=prev;
    let max=0;
    while(temp!=null && mid!=null){
        max=Math.max(max,temp.val+mid.val)
        temp=temp.next;
        mid=mid.next
    }
    return max
    
     

};