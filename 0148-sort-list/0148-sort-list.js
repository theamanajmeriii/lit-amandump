var sortList = function(head) {
    // Base case
    if (head === null || head.next === null) {
        return head;
    }

    // Find middle
    let slow = head;
    let fast = head;
    let prev = null;

    while (fast !== null && fast.next !== null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    // Split into two lists
    prev.next = null;

    // Sort both halves
    let left = sortList(head);
    let right = sortList(slow);

    // Merge two sorted lists
    let dummy = new ListNode(-1);
    let current = dummy;

    while (left !== null && right !== null) {
        if (left.val <= right.val) {
            current.next = left;
            left = left.next;
        } else {
            current.next = right;
            right = right.next;
        }

        current = current.next;
    }

    // Attach remaining nodes
    if (left !== null) {
        current.next = left;
    }

    if (right !== null) {
        current.next = right;
    }

    return dummy.next;
};
    