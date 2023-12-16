
# Linked List

## Topological Index


**1. What are linked lists?**
   - Importance of Linked Lists
   - Comparison with Arrays
   - Working of Linked Lists
   - Memory Usage
   - Limitations and Advantages
   - Complex Data Structures
   - **Key Terms:** Linked Lists, Data Structure, Arrays, Nodes, Pointers, Stack, Queue, Binary Search Trees, Hash Maps.

**2. Linked List Introduction - Operations**
   - Linked List Operations
   - Insertion of Items
   - Running Time Complexity
   - Removing Items
   - Manipulation of Items
   - **Key Terms:** Operations, Insertion, Removal, Running Time Complexity, References, Nodes.

**3. Pros and Cons of Linked Lists**
   - Advantages of Linked Lists
   - Disadvantages of Linked Lists
   - **Key Terms:** Dynamic Data Structure, Memory Usage, Random Access, Running Time Complexity.

**4. Linked list implementation I**
   - Node Class Creation
   - Linked List Class Creation
   - Node Insertion 
   - Time Complexity of Insertion
   - **Key Terms:** Node, Linked List, Insertion, Time Complexity.

**5. Linked list implementation II**
   - Testing Functionality of Implementation
   - Traverse Function
   - Time Complexity of Traverse Function
   - Representation Function
   - **Key Terms:** Traverse Function, Time Complexity, Node, Implementation.

**6. Linked list implementation III**
   - Removal of Items
   - Running Time Complexity of Removal
   - Reference Updates
   - **Key Terms:** Removal, Running Time Complexity, References, Nodes.

**7. Revisiting remove operation**
   - Running Time Complexity of Remove Operation
   - Removing First Node
   - **Key Terms:** Remove Operation, Running Time Complexity, First Node.

**8. Comparing linked lists and arrays**
   - Comparison of Arrays and Linked Lists
   - Advantages and Disadvantages of Each
   - **Key Terms:** Arrays, Linked Lists, Time Complexity, Memory Complexity.

**9. Practical (real-world) applications of linked lists**
   - Memory Management in C
   - Use in Windows Applications
   - Use in Photo Viewer Applications
   - Use in Blockchain and Bitcoin Ecosystem
   - **Key Terms:** Memory Management, Windows Applications, Photo Viewer, Blockchain, Bitcoin.

## Notes

### "What are linked lists?"

- Linked lists efficiently store items for operations like inserting, searching, and removing.
- They do not require shifting multiple items, unlike arrays.
- Composed of nodes, each with data and a pointer to the next node.
- The first node is known as the head, and direct access to nodes, unlike arrays, is not possible.
- The last node points to null, signaling the list's end.
- Uses more memory than arrays due to additional pointers.
- Absence of shift operations gives them an advantage over arrays.

**Key Terms:** Linked List, Data Structure, Insert, Search, Remove, Efficiency, Array, Shifting, Memory, Pointer, Node, Head Node, Null

### Linked list introduction - operations

- Discusses operations in linked lists: insert, remove, and traverse.
- Insertion at beginning is efficient, updating references in constant time.
- Inserting at end involves traversing the entire list, resulting in linear time complexity.
- Removing the first item is quick, updating the head to the next node.
- Removing last or arbitrary items takes longer, requiring traversal to locate the item.
- First item manipulations are quick, while others incur linear time complexity.

**Key Terms:** Linked List Operations, Insertion, Removal, Traversal, Head Node, Tail Node, Constant Time, Linear Time, Update References

### Pros and cons of linked lists

- Highlights linked lists' dynamic nature, allowing organic growth without resizing.
- Linked lists use more memory due to data and pointer storage.
- Lack random access, hindering quick retrieval of any node.
- Can't access previous nodes directly, limiting backward navigation.
- Performance varies based on operations, with some fast and others slower.
- Alternative structures like binary search trees offer more predictable performance.

**Key Terms:** Linked Lists, Dynamic Data Structure, Memory Usage, Random Access, Binary Search Trees, Performance, Navigation, Data Retrieval

### Linked list implementation I

- Focuses on implementing linked lists in programming.
- Involves creating node and linked list classes.
- Nodes store data and reference to next node.
- Linked list class maintains head node and list size.
- Insertion at beginning and end of the list are demonstrated.
- Running time complexities for these operations are explained.

**Key Terms:** Implementation, Programming, Node Class, Linked List Class, Head Node, Insertion, Running Time Complexity, Data Structure Design

### Linked list implementation II

- Continues linked list implementation, focusing on traversal and insertion.
- Traversal function iterates through all nodes, displaying data.
- Insertion at end and beginning of the list is explored.
- Highlights the ease of inserting at the beginning but complexity at the end.
- Demonstrates how to view all items in a linked list.

**Key Terms:** Linked List Implementation, Traversal, Insertion, Node Iteration, Data Viewing, Programming Techniques

### Linked list implementation III

- Discusses removing items from linked lists.
- Removal function targets specific data, with linear time complexity.
- Removal process involves finding the item and updating references.
- Removing the first node is more efficient than other positions.
- Demonstrates removal through code examples.

**Key Terms:** Linked List, Remove Function, Linear Time Complexity, Node Reference, Efficient Removal, Programming Example

### Revisiting remove operation

- Clarifies misconceptions about the remove operation in linked lists.
- Removing the first node (head) is efficient with constant time complexity.
- Removing arbitrary items is slower due to linear time complexity.
- The distinction between removing the first node and others is emphasized.

**Key Terms:** Remove Operation, Linked List, Head Node, Constant Time Complexity, Linear Time Complexity, Data Structure Efficiency

### Comparing linked lists and arrays

- Compares arrays and linked lists in terms of structure and efficiency.
- Arrays are static, with fixed size and contiguous memory allocation.
- Linked lists are dynamic, allowing flexible size without resizing.
- Arrays offer quick access to any element, while linked lists lack random access.
- Linked lists excel in manipulating first items, arrays in manipulating last items.
- Memory usage is higher in linked lists due to additional pointers.

**Key Terms:** Arrays, Linked Lists, Data Structure Comparison, Static, Dynamic, Random Access, Memory Usage

### Practical (real-world) applications of linked lists

- Explores real-world applications of linked lists.
- Used in low-level memory management, such as heap allocation.
- Operating systems employ linked lists for task management and memory tracking.
- Photo viewer applications use linked lists for image sequencing.
- Blockchains, like Bitcoin, use linked lists for block management.

**Key Terms:** Linked Lists Applications, Memory Management, Operating Systems, Photo Viewer, Blockchain, Bitcoin

### What are doubly linked lists?

- Introduces doubly linked lists, an extension of standard linked lists.
- Each node points to both next and previous nodes, allowing bidirectional traversal.
- Includes head and tail nodes for quick access to list ends.
- More complex than standard linked lists, requiring additional pointers.
- Ideal for fast manipulation of both first and last items.
- Uses more memory but offers greater flexibility in navigation and item removal.

**Key Terms:** Doubly Linked Lists, Bidirectional Traversal, Head Node, Tail Node, Node Pointers, Data Structure Complexity, Memory Usage

### Doubly linked list implementation

- Focuses on implementing doubly linked lists.
- Nodes in doubly linked lists contain pointers to both next and previous nodes.
- Class structure includes head and tail pointers.
- Demonstrates insertion at the end and traversal in both directions.
- Illustrates the benefits of easy forward and backward navigation.
- More memory-intensive due to additional pointers per node.

**Key Terms:** Doubly Linked List Implementation, Node Structure, Class Design, Insertion, Traversal, Forward Navigation, Backward Navigation

### Running time comparison: linked lists and arrays

- Compares the running time of operations in linked lists and arrays.
- Linked lists offer faster insertion at the beginning compared to arrays.
- Array insertions at the beginning are slower due to shifting elements.
- Demonstrates the time efficiency of linked lists through code examples.
- Emphasizes the importance of choosing the right data structure based on operation needs.

**Key Terms:** Running Time Comparison, Linked Lists, Arrays, Insertion Efficiency, Time Complexity, Data Structure Selection

## Question Bank

### Topic: What are Linked Lists?

**1. What is a key advantage of using linked lists over arrays?**
   - A) Linked lists require less memory than arrays.
   - B) Linked lists provide faster access to elements by index.
   - C) Linked lists offer more efficient insertion and deletion operations.

**2. How does a linked list fundamentally store its elements?**
   - A) In contiguous memory locations.
   - B) In non-contiguous memory locations with pointers connecting elements.
   - C) In a fixed-size memory allocation.

**3. In a singly linked list, each node contains:**
   - A) Only data.
   - B) Data and a pointer to the next node.
   - C) Data and pointers to both the next and previous nodes.

**4. What is the time complexity of inserting a new element at the beginning of a linked list?**
   - A) O(1)
   - B) O(n)
   - C) O(log n)

**5. In a linked list, how is the last element identified?**
   - A) By a pointer to null.
   - B) By a pointer to the first element.
   - C) By a special flag in the data structure.

**Answer Sheet:**
1. C
2. B
3. B
4. A
5. A

---

### Topic: Linked List Operations

**1. What is the time complexity of inserting a new item at the end of a singly linked list?**
   - A) O(1)
   - B) O(n)
   - C) O(log n)

**2. How does removing the first item in a linked list compare in terms of efficiency with removing the last item?**
   - A) Removing the first item is less efficient than removing the last item.
   - B) Removing the first item is more efficient than removing the last item.
   - C) Both operations have the same efficiency.

**3. When searching for an element in a linked list, what is the time complexity?**
   - A) O(1)
   - B) O(n)
   - C) O(log n)

**4. In a linked list, what does updating the head node directly affect?**
   - A) Insertion at the beginning.
   - B) Removal of the last item.
   - C) Access to the middle elements.

**5. In the context of linked lists, what does the term 'traversing' refer to?**
   - A) Reversing the order of the list.
   - B) Accessing each element of the list sequentially.
   - C) Sorting the elements of the list.

**Answer Sheet:**
1. B
2. B
3. B
4. A
5. B

---

### Topic: Pros and Cons of Linked Lists

**1. Which of the following is a disadvantage of linked lists compared to arrays?**
   - A) Dynamic size.
   - B) Lack of random access.
   - C) Efficient insertion and deletion.

**2. What is a significant advantage of linked lists over arrays?**
   - A) Predictable run time for operations.
   - B) Less memory usage.
   - C) Ability to grow organically without resizing.

**3. In terms of memory usage, why might linked lists be less efficient than arrays?**
   - A) They require contiguous memory allocation.
   - B) They require additional memory for storing pointers.
   - C) They duplicate data for backup.

**4. How does a linked list perform when accessing elements by index compared to an array?**
   - A) Faster than an array.
   - B) Slower than an array.
   - C) Equally as fast as an array.

**5. What aspect of linked lists can make them unpredictable in performance?**
   - A) Constant time complexity for all operations.
   - B) Variable time complexity for different operations.
   - C) Fixed memory allocation size.

**Answer Sheet:**
1. B
2. C
3. B
4. B
5. B

---

### Topic: Linked List Implementation

**1. In implementing a linked list, what does each node typically contain?**
   - A) Data and a reference to the previous node.
   - B) Only the data it stores.
   - C) Data and a reference to the next node.

**2. When initializing a linked list, what is the initial value of the head node?**
   - A) Points to the first element.
   - B)Points to null.
   - C) Points to the last element.

**3. What is a key consideration when adding a node at the end of a linked list?**
   - A) Updating the head node.
   - B) Traversing the entire list to find the end.
   - C) Allocating contiguous memory for the new node.

**4. In a singly linked list, how can you remove a node (not the first one) efficiently?**
   - A) By directly accessing the node and deleting it.
   - B) By updating the pointer of the previous node.
   - C) By shifting all elements after the removed node.

**5. What is the primary purpose of the `init` function in a linked list implementation?**
   - A) To define the initial size of the linked list.
   - B) To establish the initial node connections.
   - C) To initialize the head and possibly the tail nodes.

**Answer Sheet:**
1. C
2. B
3. B
4. B
5. C
