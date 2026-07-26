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

let temp=head;
let arr=[];

while(temp!=null){
    arr.push(temp.val);
    temp = temp.next;
}

let i = 0;
let j = arr.length - 1;
let ans = 0;

while(i < j){
    ans = Math.max(ans, arr[i] + arr[j]);
    i++;
    j--;
}

return ans;
    
};