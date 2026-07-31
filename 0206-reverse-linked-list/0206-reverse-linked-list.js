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
    //this time we goin to reverse the linked list
    //using current previous next technique

    let nextNode=null
    let prevNode=null;
    let currNode=head;
    while(currNode!=null){
        nextNode=currNode.next;
        currNode.next=prevNode;
        prevNode=currNode
        currNode=nextNode
    }
    head=prevNode
    return head
    
};