/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let temp=head;
    let set = new Set();
    while(temp!=null){
        if(set.has(temp)){
            return true
        }
        set.add(temp)
        
        temp=temp.next
    }  
    return false

 
};