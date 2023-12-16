
# Binary Search Trees

## Topological Index

### **What are binary search trees?**
- Advantages of Arrays
- Benefits of Linked Lists
- Disadvantages of Traditional Data Structures
- Introduction to Sorted Data Structures
- Binary Search Efficiency
- Sorted Array Example
- Searching in Unsorted Data
- Logarithmic Time Complexity
- Operating Systems and Tree Structures
- Tree Definition in Graph Theory
- Tree Structure Components
- Directed and Undirected Trees
- Internal and Leaf Nodes
- Binary Search Trees Characteristics
- Importance of Tree Balancing
- Complete Binary Search Trees
- Tree Height Calculation
- Balanced vs. Imbalanced Trees
- **Key Terms:** Array, Linked List, Binary Search, Logarithmic Time Complexity, Tree, Graph Theory, Root Node, Internal Node, Leaf Node, Binary Search Tree, Balanced Tree, Imbalanced Tree.

### **Binary search trees theory - search, insert**
- Insertion in Binary Search Trees
- Searching in Binary Search Trees
- Recursive Insertion Method
- Handling Duplicate Values
- Finding Maximum and Minimum
- **Key Terms:** Insertion, Search, Binary Search Tree, Recursive Algorithm, Maximum, Minimum.

### **Binary search trees theory - delete**
- Removing Nodes in Binary Search Trees
- Deletion of Leaf Nodes
- Deletion of Nodes with Single Child
- Deletion of Nodes with Two Children
- Successor and Predecessor in Deletion
- **Key Terms:** Deletion, Leaf Node, Binary Search Tree, Successor, Predecessor.

### **Binary search trees theory - in-order traversal**
- Types of Tree Traversals
- Pre-order Traversal
- Post-order Traversal
- In-order Traversal
- Recursive Traversal Methods
- In-order Traversal for Sorted Output
- **Key Terms:** Traversal, Pre-order, Post-order, In-order, Recursive Traversal.

### **Pros and cons of binary search trees**
- Advantages of Binary Search Trees
- Predictability of Operations
- Disadvantages of Binary Search Trees
- Lack of Random Access
- Complexity in Imbalanced Trees
- **Key Terms:** Binary Search Tree, Advantages, Disadvantages, Random Access, Imbalanced Tree.

### **Binary search tree implementation I**
- Implementing Binary Search Trees
- Node Class Design
- Tree Class Design
- Insertion Implementation
- Handling Left and Right Children
- **Key Terms:** Implementation, Node Class, Tree Class, Insertion, Left Child, Right Child.

### **Binary search tree implementation II**
- Finding Maximum and Minimum Values
- In-order Traversal Implementation
- Stack Memory in Recursive Calls
- **Key Terms:** Maximum Value, Minimum Value, In-order Traversal, Stack Memory, Recursive Call.

### **Stack memory visualization - finding max (min) items**
- Visualizing Stack Memory
- Recursive Maximum and Minimum Finding
- Stack Frames in Recursion
- **Key Terms:** Stack Memory, Maximum, Minimum, Recursive Function, Stack Frame.

### **Stack memory visualization - tree traversal**
- Visualization of Tree Traversal
- Stack Memory in In-order Traversal
- Recursion in Tree Traversal
- Backtracking in Recursion
- **Key Terms:** Tree Traversal, Stack Memory, In-order Traversal, Recursion, Backtracking.

### **Binary search tree implementation III - remove operation**
- Implementing Node Removal
- Handling Different Cases of Removal
- Recursive Node Removal
- Swapping Nodes in Deletion
- **Key Terms:** Node Removal, Binary Search Tree, Recursion, Swapping Nodes.

### **Practical (real-world) applications of trees**
- Trees in File Systems
- Game Trees in Chess and Tic Tac Toe
- Decision Trees in Machine Learning
- Boosting Algorithm in Computer Vision
- **Key Terms:** File Systems, Game Trees, Decision Trees, Boosting Algorithm, Machine Learning.

## Notes

## Question bank

### Topic 1: Fundamentals of Binary Search Trees

1. **What is the primary advantage of binary search trees over arrays and linked lists?**
   - A) Lower memory usage.
   - B) Faster access to elements by index.
   - C) More efficient search operations for arbitrary items.

2. **In binary search trees, how are the nodes organized?**
   - A) Nodes are arranged randomly.
   - B) Each node has a maximum of two children; the left child is smaller and the right child is larger than the parent node.
   - C) Nodes are arranged in ascending order from left to right.

3. **What does the term 'balanced binary search tree' imply?**
   - A) All leaf nodes are at the same level.
   - B) The tree does not contain any nodes.
   - C) The tree is structured in a way that ensures minimum possible height, facilitating faster operations.

4. **What is the running time complexity of searching for an item in a balanced binary search tree?**
   - A) O(n)
   - B) O(log n)
   - C) O(1)

5. **Which statement is true about the insertion operation in a binary search tree?**
   - A) It always takes constant time.
   - B) It involves traversing the tree from the root to find the correct position for the new node.
   - C) The new node is always added as a new leaf at the deepest level.

**Answer Sheet:**
1. C
2. B
3. C
4. B
5. B

### Topic 2: Tree Traversal in Binary Search Trees

1. **Which traversal method in a binary search tree results in a sorted order of the elements?**
   - A) Pre-order traversal
   - B) In-order traversal
   - C) Post-order traversal

2. **In post-order traversal, the order of node visitation is:**
   - A) Left child, right child, node
   - B) Node, left child, right child
   - C) Right child, left child, node

3. **What is the time complexity of in-order traversal in a binary search tree?**
   - A) O(1)
   - B) O(log n)
   - C) O(n)

4. **During pre-order traversal, what is the first node type to be visited?**
   - A) The leftmost leaf node
   - B) The root node
   - C) The rightmost leaf node

5. **In a binary search tree, post-order traversal is particularly useful for:**
   - A) Quickly accessing the root node
   - B) Deleting or freeing nodes from the bottom up
   - C) Finding the maximum value

**Answer Sheet:**

Topic 2:
1. B
2. A
3. C
4. B
5. B

### Topic 3: Advantages and Disadvantages of Binary Search Trees

1. **What is a primary advantage of binary search trees?**
   - A) Constant running time complexity for all operations
   - B) Predictable running time for operations
   - C) No need for balancing the tree

2. **A disadvantage of binary search trees is:**
   - A) High memory consumption
   - B) Imbalanced tree can degrade to linear time complexity
   - C) Inability to store diverse data types

3. **In a binary search tree, the average time complexity for search operations is:**
   - A) O(1)
   - B) O(n)
   - C) O(log n)

4. **Which of these is not a drawback of binary search trees?**
   - A) They do not provide random access to elements
   - B) All operations have constant time complexity
   - C) Balancing the tree can be complex

5. **What happens to the efficiency of a binary search tree when it becomes imbalanced?**
   - A) It remains unchanged
   - B) It improves significantly
   - C) It may degrade, leading to increased time complexity

**Answer Sheet:**

Topic 3:
1. B
2. B
3. C
4. B
5. C

### Topic 4: Binary Search Tree Operations - Insertion and Deletion

1. **What is the time complexity for inserting an element into a binary search tree?**
   - A) O(1)
   - B) O(log n)
   - C) O(n)

2. **When inserting a new node in a binary search tree, the node is:**
   - A) Always added as a new root.
   - B) Added as a leaf node in its correct position.
   - C) Inserted randomly in the tree.

3. **What happens when a node with two children is deleted in a binary search tree?**
   - A) The tree is reorganized starting from the root.
   - B) The deleted node is replaced with its in-order predecessor or successor.
   - C) All nodes below the deleted node are also removed.

4. **In deleting a leaf node from a binary search tree:**
   - A) The entire tree must be restructured.
   - B) Only the parent node needs to be updated.
   - C) It does not affect the structure of the tree.

5. **What is a critical step when removing a node with one child in a binary search tree?**
   - A) Replacing the node with the root node.
   - B) Connecting the child of the removed node with the parent of the removed node.
   - C) Removing all nodes in the same level.

**Answer Sheet:**

Topic 4:
1. C
2. B
3. B
4. B
5. B

### Topic 5: Practical Applications of Binary Search Trees

1. **Which of the following is a real-world application of binary search trees?**
   - A) Data compression algorithms.
   - B) File system hierarchy.
   - C) Cryptographic encryption processes.

2. **In game development, binary search trees are used for:**
   - A) Generating random game levels.
   - B) Building game trees for decision-making.
   - C) Enhancing graphics rendering.

3. **How do binary search trees aid in machine learning?**
   - A) They are used for data preprocessing.
   - B) They form the basis of certain algorithms like decision tree classifiers.
   - C) They optimize neural network architectures.

4. **In database management systems, binary search trees are primarily used for:**
   - A) Data storage in physical disks.
   - B) Efficient data retrieval and indexing.
   - C) Managing user interfaces.

5. **Binary search trees are vital in network routing for:**
   - A) Balancing data flow evenly across the network.
   - B) Storing and searching routing tables efficiently.
   - C) Encrypting data packets.

**Answer Sheet:**

Topic 5:
1. B
2. B
3. B
4. B
5. B
