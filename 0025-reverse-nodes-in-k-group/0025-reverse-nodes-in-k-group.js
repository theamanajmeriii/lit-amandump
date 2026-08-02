 var reverseKGroup = function(head, k) {
    let dummy = new ListNode(0, head);
    let groupPrev = dummy;

    while (true) {

        // 1. Find kth node
        let kthNode = groupPrev;

        for (let i = 0; i < k; i++) {
            kthNode = kthNode.next;

            if (kthNode === null) {
                return dummy.next;
            }
        }

        // 2. Save next group's starting node
        let nextNode = kthNode.next;

        // Current group starts here
        let groupStart = groupPrev.next;

        // 3. Reverse current group
        let prev = nextNode;
        let curr = groupStart;

        while (curr !== nextNode) {
            let temp = curr.next;

            curr.next = prev;

            prev = curr;
            curr = temp;
        }

        // 4. Connect previous part to new group head
        groupPrev.next = kthNode;

        // 5. Old groupStart is now the tail
        groupPrev = groupStart;
    }
};