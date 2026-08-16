var reverseBetween = function(head, left, right) {
    let dummy= new ListNode(-1);
    dummy.next= head;

    //create dummy

    let leftNode=dummy;
    for(let i=1;i<left;i++){
        leftNode=leftNode.next
    }

    //save the starting node of reversal head

    let curr=leftNode.next;
    let leftover=curr
    let prev=null;
    let nextNode=null;
    for(let i=0;i<right-left+1;i++){
        nextNode=curr.next;
        curr.next=prev;
        prev=curr;
        curr=nextNode
    }

// umm join the prev with last we break the leftNode
//and after that what we do is join the saved node with the curr that's all
    leftNode.next=prev
    leftover.next=curr


    return dummy.next


};