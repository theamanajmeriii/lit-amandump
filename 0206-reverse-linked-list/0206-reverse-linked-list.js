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
var reverseList = function(head) {
    //using brute force method stack
    let dummy= new ListNode(-1);
    let current = dummy;
    let stack = [];
    while(head!=null){
        stack.push(head.val)
        head=head.next
    }

    while(stack.length>0){
        current.next= new ListNode(stack.pop());
        current=current.next
    }

    return dummy.next
    
};