# Heaps

## Topological Index

### What are priority queues?
- Definition and Role
- Priority Value Concept
- Implementation Variants
- Queue vs. Priority Queue
- Heaps as Implementations
- Misleading Heap Concept
- One-Dimensional Array Use
- Priority in Queue Context
- Concrete Example: Heap
- **Key Terms:** Priority Queue, Abstract Data Type, Heap, Self-Balancing Trees, One-Dimensional Array, Priority Value

### Heap introduction - basics
- Binary Trees Relation
- Heap Types: Min and Max
- Heap Efficiency in Sorting
- Complete Binary Trees
- No Need for Tree Balancing
- Graph Algorithm Applications
- Heap Properties
- Binary Search Trees Comparison
- **Key Terms:** Heap, Binary Trees, Minimum Heap, Maximum Heap, Sorting, Graph Algorithms, Binary Search Trees

### Heap introduction - array representation
- Array Representation of Heaps
- Node-Child Relationship
- Parent Node Identification
- Heap Construction Process
- Heapify Operation
- Insertion and Root Retrieval
- **Key Terms:** Array Representation, Heapify, Maximum Heap, Node Indexing, Parent-Child Relationship

### Heap introduction - remove operation
- Removing the Root Node
- Removing Arbitrary Items
- Array Adjustments
- Heapify Post-Removal
- Running Time Complexity
- **Key Terms:** Root Node, Arbitrary Item Removal, Heapify, Running Time Complexity, Data Structure Adjustment

### Using heap data structure to sort (heapsort)
- Heap Sort Origin
- Comparison with Quicksort
- In-Place Algorithm
- Stability in Sorting
- Constructing Heaps for Sorting
- Swap and Heapify Process
- Running Time Complexity
- **Key Terms:** Heap Sort, Quicksort, In-Place Algorithm, Sorting Stability, Running Time Analysis

### Heap introduction - operations complexities
- Memory Complexity
- Finding Minimum/Maximum
- Insertion and Removal
- Comparison with Binary Search Trees
- Optimization through Data Structures
- **Key Terms:** Memory Complexity, Heap Operations, Binary Search Trees, Optimization, Data Structure Efficiency

### Binomial and Fibonacci heaps
- Advanced Heap Types
- Binomial Heaps for Merging
- Fibonacci Heaps Efficiency
- Graph Algorithm Applications
- Complexity Comparisons
- **Key Terms:** Binomial Heaps, Fibonacci Heaps, Mergeable Heaps, Graph Algorithms, Complexity Analysis

### Heap Implementation
- **Class Structure**
  - Defining the Heap Class
  - Initializing Class Attributes
- **Heap Capacity and Size**
  - Handling Heap Capacity
  - Tracking Current Heap Size
- **Insertion Operation**
  - Methodology for Inserting Items
  - Heap Size Incrementation
- **Fix-Up Procedure**
  - Ensuring Heap Property Compliance
  - Recursive Fix-Up Implementation
- **Peak and Poll Operations**
  - Retrieving Maximum Element
  - Removing and Returning Maximum
- **Heapify Process**
  - Adjusting Heap after Removal
  - Recursive Heapify Implementation
- **Implementation Challenges**
  - Handling Edge Cases
  - Ensuring Efficiency and Stability
- **Testing and Validation**
  - Unit Testing for Heap Operations
  - Validating Heap Properties Post-Operations
- **Complexity Analysis**
  - Time Complexity of Heap Operations
  - Memory Utilization in Heap Construction
- **Practical Applications**
  - Real-world Use Cases for Heaps
  - Comparing Heap with Other Data Structures

### Heaps in Python
- Built-in Heap Implementation
- Min Heap with HeapQ
- Array Transformation
- Insertion and Retrieval
- **Key Terms:** Python, HeapQ, Min Heap, Array Transformation, Data Retrieval

## Notes

## Questions Banks

### Topic: Understanding Priority Queues and Heap Data Structures

#### Priority Queues

**1. What is a priority queue?**
   - A) A data structure where elements are sorted based on their value.
   - B) A data structure where elements are served based on their priority.
   - C) A data structure where elements are organized in a first-in-first-out manner.

**2. Which data structure can be used to implement priority queues?**
   - A) Arrays
   - B) Heaps
   - C) Linked Lists

**3. In a priority queue, how are elements with high and low priorities treated?**
   - A) Elements with high priority are served after those with low priority.
   - B) All elements are served equally, irrespective of priority.
   - C) Elements with high priority are served before those with low priority.

**4. Can priority queues be implemented using self-balancing trees?**
   - A) Yes
   - B) No
   - C) Only in specific cases

**5. What is a crucial feature of priority queues in sorting algorithms?**
   - A) They can sort elements in ascending order only.
   - B) They serve higher priority items first, aiding in natural ordering.
   - C) They require additional memory to sort elements.

#### Heap Data Structures

**6. What are heaps in the context of data structures?**
   - A) Linear data structures like arrays.
   - B) Tree-based data structures.
   - C) Self-balancing binary search trees.

**7. Which of these is a characteristic of a max heap?**
   - A) Parent nodes have values less than their children.
   - B) Parent nodes have values greater than or equal to their children.
   - C) Child nodes are sorted in ascending order.

**8. What is the time complexity of finding the maximum value in a max heap?**
   - A) O(1)
   - B) O(n)
   - C) O(log n)

**9. In a heap represented by an array, how do you find the left child of a node at index 'i'?**
   - A) \( 2i \)
   - B) \( 2i + 1 \)
   - C) \( i / 2 \)

**10. What operation is performed in a heap when the root node is removed?**
   - A) Balancing
   - B) Heapify
   - C) Rotating

**Answer Sheet:**
1. B
2. B
3. C
4. A
5. B
6. B
7. B
8. A
9. B
10. B

### Topic: Heap Introduction - Array Representation and Remove Operation

#### Array Representation

**11. How is a heap typically represented in programming?**
   - A) As a two-dimensional matrix.
   - B) As a linked list.
   - C) As a one-dimensional array.

**12. In an array representation of a heap, what formula is used to find the right child of a node at index 'i'?**
   - A) \( 2i \)
   - B) \( i / 2 \)
   - C) \( 2i + 2 \)

**13. What is a key advantage of representing a heap with an array?**
   - A) It allows for faster search operations.
   - B) It simplifies the process of adding new elements.
   - C) It provides a clear visual structure of the heap.

**14. How is the root node represented in an array-based heap?**
   - A) At the last index of the array.
   - B) At the middle index of the array.
   - C) At the first index of the array.

**15. What complexity is involved in finding a parent node in an array-represented heap?**
   - A) O(1)
   - B) O(n)
   - C) O(log n)

#### Remove Operation

**16. What is the time complexity of removing the root node from a heap?**
   - A) O(1)
   - B) O(n)
   - C) O(log n)

**17. When a root node is removed from a heap, what replaces it?**
   - A) The rightmost leaf node.
   - B) A new node is created.
   - C) The leftmost leaf node.

**18. After removing the root node from a heap, what operation is necessary to maintain heap structure?**
   - A) Reversing
   - B) Rotating
   - C) Heapifying

**19. What is the time complexity of removing an arbitrary item from a heap?**
   - A) O(1)
   - B) O(n)
   - C) O(log n)

**20. What challenge arises when removing an arbitrary item from a heap?**
   - A) It can unbalance the heap.
   - B) It requires re-heapifying the entire structure.
   - C) It necessitates a linear search for the item.

### Topic: Using Heap Data Structure to Sort (Heapsort)

**21. What sorting algorithm can be implemented using a heap?**
   - A) Bubble sort
   - B) Heapsort
   - C) Quick sort

**22. What is the time complexity of heapsort?**
   - A) O(n)
   - B) O(n log n)
   - C) O(n^2)

**23. What is a key feature of heapsort compared to quicksort?**
   - A) Heapsort is not a comparison-based sorting algorithm.
   - B) Heapsort is faster than quicksort on most machines.
   - C) Heapsort has a more favorable worst-case time complexity.

**24. In heapsort, what happens after all items are inserted into the heap?**
   - A) They are removed one by one, starting with the highest priority.
   - B) The heap is reversed to achieve sorted order.
   - C) An additional sorting algorithm is applied.

**25. Why is heapsort considered an in-place algorithm?**
   - A) It uses a separate array for sorted elements.
   - B) It doesn't require additional memory apart from the input array.
   - C) It manipulates the original data structure without copying.

**Answer Sheet:**
11. C
12. C
13. B
14. C
15. A
16. C
17. A
18. C
19. B
20. C
21. B
22. B
23. C
24. A
25. B

### Topic: Heap Introduction - Operations Complexities and Advanced Heaps (Binomial and Fibonacci)

#### Operations Complexities

**26. What is the memory complexity of a heap data structure?**
   - A) O(1)
   - B) O(n)
   - C) O(log n)

**27. How quickly can the minimum or maximum item be found in a heap?**
   - A) O(1)
   - B) O(n)
   - C) O(log n)

**28. What is the time complexity of the insert operation in a heap?**
   - A) O(1)
   - B) O(n)
   - C) O(log n)

**29. What is the time complexity of finding an arbitrary item in a heap?**
   - A) O(1)
   - B) O(n)
   - C) O(log n)

**30. What makes heaps particularly efficient for certain algorithms like shortest path?**
   - A) Ability to find the maximum or minimum in constant time.
   - B) Linear memory complexity.
   - C) Quick insertion time.

#### Advanced Heaps (Binomial and Fibonacci)

**31. What is a unique feature of binomial heaps compared to binary heaps?**
   - A) Faster search operations.
   - B) Support for quick merging of two heaps.
   - C) Better memory efficiency.

**32. What distinguishes Fibonacci heaps from binary heaps?**
   - A) Fibonacci heaps can only have one child per node.
   - B) Fibonacci heaps can have several children per node.
   - C) Fibonacci heaps do not allow heap merging.

**33. In a Fibonacci heap, what is the maximum degree of a node in terms of the number of elements, n?**
   - A) O(n)
   - B) O(log n)
   - C) O(n^2)

**34. What is a primary disadvantage of Fibonacci heaps?**
   - A) They are less efficient than binary heaps.
   - B) They are complex and hard to implement efficiently.
   - C) They have higher memory requirements.

**35. Why are advanced heaps like Fibonacci heaps preferred in certain graph algorithms?**
   - A) Due to their ability to handle multiple children efficiently.
   - B) Because they offer constant time complexity for most operations.
   - C) They provide a more intuitive structure for graph representation.

### Topic: Heap Implementation in Python

**36. What is the primary heap implementation in Python?**
   - A) Binary heap
   - B) Binomial heap
   - C) Heap queue (heapq)

**37. What type of heap does Python's `heapq` module implement?**
   - A) Maximum heap
   - B) Minimum heap
   - C) Fibonacci heap

**38. When using `heapq.heappush`, what is being performed?**
   - A) Transforming a list into a sorted array.
   - B) Adding an element to a heap while maintaining heap properties.
   - C) Creating a new heap from scratch.

**39. How does the `heapq.heappop` function work in Python?**
   - A) It removes and returns the smallest element from the heap.
   - B) It pops out a random element from the heap.
   - C) It retrieves the largest element without removing it.

**40. What is a key advantage of using Python's built-in heap implementation?**
   - A) It automatically sorts the entire data set.
   - B) It allows for the construction of both minimum and maximum heaps.
   - C) It simplifies heap operations with pre-defined functions.

**Answer Sheet:**
26. B
27. A
28. C
29. B
30. A
31. B
32. B
33. B
34. B
35. B
36. C
37. B
38. B
39. A
40. C
