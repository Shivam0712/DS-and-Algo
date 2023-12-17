# AVL Trees

## Topological Index


### Motivation behind Balanced Binary Search Trees

- Understanding Data Structures
- Advantages and Disadvantages
- Manipulation of Data Structures
- Linear Search Limitations
- Binary Search Trees
- Logarithmic Time Complexity
- Disadvantages of Binary Search Trees
- Worst Case Scenarios
- Need for Balanced Trees
- Concept of Tree Health
- Introduction of AVL Trees

**Key Terms:** Data Structures, Arrays, Linked Lists, Binary Search Trees, Linear Search, Logarithmic Running Time, Balanced Trees, AVL Trees, Tree Health, Rotations.

### What are AVL Trees?

- Introduction to AVL Trees
- Efficient Data Manipulation
- Origins and Inventors
- Balanced Binary Search Tree
- Logarithmic Running Time
- Comparison with Red-Black Trees
- Usage in Operating Systems
- AVL vs Red-Black Trees
- Rigid Balancing in AVL
- Algorithmic Efficiency
- Implementation Differences

**Key Terms:** AVL Trees, Data Manipulation, Binary Search Trees, Logarithmic Running Time, Red-Black Trees, Operating Systems, Algorithmic Efficiency, Data Structure Balancing, Tree Rotations.

### AVL Trees Introduction - Height

- Fundamentals of AVL Trees
- Imbalance in Binary Search Trees
- Tracking Tree Imbalance
- Height Parameter Concept
- Calculating Tree Height
- Internal and Leaf Nodes
- Significance of Height Parameter
- Balancing Binary Search Trees
- Impact of Imbalance on Performance
- Height Parameter in Balancing

**Key Terms:** AVL Trees, Binary Search Trees, Tree Imbalance, Height Parameter, Tree Height, Leaf Nodes, Binary Tree Balancing, Performance Impact, Height Calculation.

### AVL Trees Introduction - Rotations

- Basics of AVL Tree Rotations
- Types of Rotations
- Left and Right Rotations
- Tree Structure Changes
- Rotation Implementation
- Rotation Impact on Tree Properties
- Case-Based Rotation Analysis
- Balancing Through Rotations
- Rotation Complexity

**Key Terms:** AVL Trees, Tree Rotations, Left Rotation, Right Rotation, Tree Structure, Rotation Implementation, Binary Search Tree Properties, Balancing, Rotation Complexity.

### AVL Trees Introduction - Illustration

- Practical Illustration of AVL Trees
- Insertion and Balancing Examples
- Rotation Scenarios
- Multiple Rotation Necessity
- Recalculating Parameters
- Balance Factor Importance
- Real-World AVL Tree Usage
- Running Time Complexity
- Insertion and Removal Operations
- Importance of Balance in AVL Trees

**Key Terms:** AVL Trees, Illustration, Insertion, Tree Balancing, Rotations, Parameter Recalculation, Balance Factor, Running Time Complexity, Tree Operations, AVL Tree Balance.

### AVL Tree Implementation I

- Implementing AVL Tree Node Class
- Node Initialization
- Left and Right Children
- Parent Node Reference
- Height Parameter Setup
- AVL Tree Class Creation
- Root Node Reference
- Insert Method
- Recursive Node Insertion
- Height Parameter Update
- Handling Violations

**Key Terms:** AVL Tree Implementation, Node Class, Initialization, Children Nodes, Parent Reference, Height Parameter, AVL Tree Class, Insertion Method, Recursive Insertion, Violation Handling.

### AVL Tree Implementation II

- Implementing AVL Tree Removal
- Recursive Node Removal
- Base Case Handling
- Removal Cases Analysis
- Leaf Node Removal
- Single Child Node Removal
- Two Children Node Removal
- Predecessor Swap Method
- Handling Violations Post-Removal

**Key Terms:** AVL Tree, Node Removal, Recursive Removal, Base Case, Leaf Node, Single Child Node, Two Children Node, Predecessor Swap, Violation Handling.

### AVL Tree Implementation III

- Calculating Height Parameter
- Handling Violations in AVL Trees
- Calculating Balance Factor
- Violation Helper Function
- Rotation Decision Logic
- Update Height Parameter
- Checking Subtree Balance
- Iterative Violation Handling
- Balance Factor Importance

**Key Terms:** Height Parameter, AVL Tree Violations, Balance Factor, Violation Helper, Rotation Logic, Subtree Balance, Iterative Handling, Balance Factor.

### AVL Tree Implementation IV

- Right and Left Rotation Functions
- Node Reference Updates
- Parent Updating Mechanism
- Height Parameter Recalculation
- Root Node Update
- In-Order Traversal Function
- Tree Structure Demonstration
- Node Relationship Display

**Key Terms:** Right Rotation, Left Rotation, Node References, Parent Update, Height Recalculation, Root Node, In-Order Traversal, Tree Structure.

### AVL Tree Implementation V

- Testing AVL Tree Implementation
- Inserting and Removing Nodes
- Rotation Verification
- Handling Complex Scenarios
- Demonstrating Tree Balance
- AVL Tree Functionality Check

**Key Terms:** AVL Tree Testing, Node Insertion, Node Removal, Rotation Check, Complex Scenarios, Tree Balance, Functionality Verification.

### Practical (Real-World) Applications of Balanced Binary Search Trees
- Game Engines and Rendering
- Compiler Syntax Trees
- Sorting Data Efficiently
- Database Construction
- Choosing Between AVL and Red-Black Trees
- Considerations for Database Usage

**Key Terms:** Balanced Binary Search Trees, Game Engines, Compilers, Sorting, Databases, AVL Trees, Red-Black Trees, Database Usage.

## Notes

### **Motivation Behind Balanced Binary Search Trees (AVL Trees)**
   - Introduction to the topic: Upcoming discussions on balanced binary search trees, specifically AVL trees.
   - Background on data structures: Arrays, linked lists, and binary search trees covered so far.
   - Comparison of linked lists and arrays: Advantages and disadvantages in terms of manipulation at the beginning (linked lists) and end (arrays).
   - Limitation of arrays and linked lists: Necessity of linear search for arbitrary item search.
   - Advantage of binary search trees: Logarithmic time complexity (O(log n)) for searching due to their structured nature.
   - Binary search tree characteristics: Left child smaller than the parent, right child larger.
   - Binary search trees' easy logic: Storing items in a sorted order for efficient binary search.
   - Disadvantages of binary search trees: Average case works well, but worst-case degenerates to linked list with linear time complexities.
   - Example of worst-case scenario: Inserting items in a sequential manner leading to a linked list structure.
   - Conclusion on binary search trees: Possibility of being balanced or imbalanced, need for balancing to achieve logarithmic complexity.
   - Introduction of the height parameter in AVL trees: Ensuring minimal tree height for balanced structures.
   - Overview of AVL trees: Focus on maintaining tree balance to optimize performance.

### **Introduction to AVL Trees**
   - Nature of AVL trees: Balanced binary search trees ensuring logarithmic time complexity.
   - Invention and naming: Developed in 1962 by two Russian scientists, named after their initials (AVL).
   - Similarity to binary search trees: Follows the same basic structure but maintains balance.
   - Comparison with Red-Black Trees: AVL trees are more rigidly balanced, leading to faster operations but requiring more balancing work.
   - Real-world applications: Usage in operating systems, e.g., Windows favoring AVL trees and Linux preferring Red-Black Trees.
   - The balance in AVL Trees: Continuous checking and restructuring for balance after each insertion or deletion.
   - AVL tree operations: Similar to binary search trees, but with additional balance checking and rotations.
   - Handling imbalances: Use of rotations to transform an imbalanced tree into a balanced one.
   - Trade-offs in tree structures: Between construction speed and operational efficiency, differing in AVL and Red-Black Trees.
   - The balancing act: Ensuring logarithmic time complexity for operations in the worst-case scenarios.

### **AVL Trees - Height Parameter**
   - Understanding AVL tree height: Defined as the number of edges on the longest downward path from the root to a leaf.
   - Height parameter for nodes: Calculated as the longest path from a node to a leaf.
   - Recursive calculation of height: Based on the height of left and right children, plus one.
   - Special case for null nodes: Assigned a height of -1, making leaf nodes have a height of 0.
   - Use of height parameter: Determining if a tree is balanced by comparing left and right subtree heights.
   - Balanced vs. Imbalanced Trees: Balanced trees have logarithmic time complexities, imbalanced ones can degrade to linear.
   - Imbalance indication: A significant difference in height parameters between left and right subtrees.
   - Ensuring balance in AVL Trees: Minimizing differences between subtree height parameters.

### **AVL Trees - Rotations**
   - Purpose of rotations: To maintain balance in AVL trees and ensure consistent performance.
   - Types of rotations: Left and right rotations, determined by the balance factor of nodes.
   - Right-heavy and left-heavy trees: Indicated by negative and positive balance factors, respectively.
   - Rotation procedures: Detailed explanation of how left and right rotations are performed.
   - Preservation of binary search tree properties: Ensuring parent-child relationships and inorder traversal order remain consistent post-rotation.
   - Different rotation scenarios: Handling left-heavy, right-heavy, left-right, and right-left situations with appropriate rotations.
   - Importance of rotation in AVL Trees: Maintaining balance to guarantee logarithmic running time complexity.
   - Consideration of further imbalances: Need to check for additional imbalances post-rotation.

### **AVL Tree Implementation**
   - Implementation stages: Covering node creation, tree structure, insertion, removal, height calculation, violation handling, and rotations.
   - Node class: Storing data, left and right children, parent node, and height parameter.
   - AVL tree class: Managing the root node and providing insert and remove operations.
   - Insertion process: Adding nodes while maintaining tree balance, updating height parameters.
   - Removal process: Deleting nodes with considerations for tree balance, handling various cases like leaf and single-child nodes.
   - Height calculation: Recursive determination of node height based on children's height.
   - Handling violations: Ensuring tree balance through rotations after insertions and deletions.
   - Rotations: Detailed implementation of left and right rotations to maintain AVL tree properties.
   - Tree traversal: In-order traversal for tree data representation.

### **Practical Applications of Balanced Binary Search Trees**
   - Use in game engines: For efficient rendering of objects in the game world.
   - Application in compilers: Parsing syntax expressions using syntax trees, a variant of binary search trees.
   - Sorting data: Utilizing AVL trees for efficient sorting with O(n log n) complexity.
   - Construction of databases: Employing balanced binary search trees for efficient data lookup, with considerations for insertion and deletion operations.

## Question Bank

### Topic 1: Motivation behind Balanced Binary Search Trees

**1. Why are AVL trees used instead of binary search trees in some cases?**
   - A) AVL trees guarantee logarithmic running time complexity in worst-case scenarios.
   - B) AVL trees require less memory than binary search trees.
   - C) AVL trees are simpler to implement than binary search trees.

**2. What is a disadvantage of using binary search trees in their basic form?**
   - A) They cannot store numeric data efficiently.
   - B) They may degrade to linked lists with linear running time complexities in worst-case scenarios.
   - C) They are not able to handle large data sets.

**3. What is the main characteristic of the left and right children in a binary search tree?**
   - A) The left child is always greater than the parent node.
   - B) The right child is always equal to the parent node.
   - C) The left child is always smaller than the parent node, and the right child is always greater.

**4. Why are rotations introduced in AVL trees?**
   - A) To make the tree look more balanced aesthetically.
   - B) To ensure the tree remains balanced, maintaining logarithmic running time complexity.
   - C) To reduce the memory usage of the tree.

**5. What leads to the imbalance in a binary search tree?**
   - A) Inserting elements in a random order.
   - B) Inserting elements in sorted order.
   - C) Deleting elements from the tree.

**Answer Sheet:**
1. A
2. B
3. C
4. B
5. B

### Topic 2: What are AVL Trees?

**6. Who invented AVL trees?**
   - A) They were invented by two American computer scientists.
   - B) They were invented by two Russian computer scientists.
   - C) The inventor of AVL trees is unknown.

**7. Which of these statements is true about AVL trees?**
   - A) They guarantee logarithmic running time complexity for operations.
   - B) They are faster to construct compared to red black trees.
   - C) They are primarily used in quantum computing.

**8. In the context of operating systems, which one prefers AVL trees?**
   - A) The Windows operating system.
   - B) The Linux operating system.
   - C) Both use AVL trees equally.

**9. What is a distinguishing feature of AVL trees compared to red black trees?**
   - A) AVL trees are more rigidly balanced, leading to faster search operations.
   - B) AVL trees do not allow duplicate values.
   - C) AVL trees can only store integer values.

**10. What is the significance of rotations in AVL trees?**
   - A) Rotations are used for sorting the data in the tree.
   - B) Rotations are used to balance the tree to maintain logarithmic running time complexity.
   - C) Rotations are only used during deletion operations.

**Answer Sheet:**
6. B
7. A
8. A
9. A
10. B

### Topic 3: AVL Trees Introduction - Height

**11. What does the height of a binary search tree represent?**
   - A) The number of nodes in the longest path from the root to a leaf.
   - B) The number of edges on the longest downward path between the root node and a leaf node.
   - C) The total number of nodes in the tree.

**12. How is the height parameter of a node in an AVL tree defined?**
   - A) It's defined as the longest path from the node to the root.
   - B) It's defined as the height of the tree minus the depth of the node.
   - C) It's defined as the longest path from the node to a leaf node.

**13. What is the height parameter of a leaf node in an AVL tree?**
   - A) 1
   - B) 0
   - C) -1

**14. How is the height parameter calculated for internal nodes in an AVL tree?**
   - A) By adding 1 to the height parameter of the tallest child node.
   - B) By averaging the height parameters of the child nodes.
   - C) By multiplying the height parameters of the child nodes.

**15. Why is tracking the height parameter important in an AVL tree?**
   - A) To determine the complexity of traversal operations.
   - B) To ensure the tree remains balanced.
   - C) To track the number of nodes in the tree.

**Answer Sheet:**
11. B
12. C
13. B
14. A
15. B

### Topic 4: AVL Trees Introduction - Rotations

**16. What are the two types of rotations in AVL trees?**
   - A) Left and right rotations.
   - B) Upward and downward rotations.
   - C) Circular and linear rotations.

**17. In what scenario is a right rotation performed in an AVL tree?**
   - A) When the tree is right heavy.
   - B) When the tree is left heavy.
   - C) When the tree is perfectly balanced.

**18. What is the effect of a left rotation on the root node of a subtree in an AVL tree?**
   - A) The root node becomes the left child of its previous right child.
   - B) The root node becomes the right child of its previous left child.
   - C) There is no change to the root node's position.

**19. What is a left-right heavy situation in an AVL tree?**
   - A) When the left subtree is heavier than the right subtree.
   - B) When a node's left child's right subtree is heavier.
   - C) When a node's right child's left subtree is heavier.

**20. Why are rotations important in maintaining an AVL tree?**
   - A) They help in evenly distributing the nodes.
   - B) They are used for efficiently searching the tree.
   - C) They rebalance the tree to maintain logarithmic running time complexity.

**Answer Sheet:**
16. A
17. B
18. A
19. B
20. C

### Topic 5: AVL Trees Introduction - Illustration

**21. What is the first step in inserting an item into an AVL tree?**
   - A) Balancing the tree.
   - B) Finding the correct position for the new item.
   - C) Rotating the tree.

**22. In an AVL tree, what action is taken after every insertion or removal?**
   - A) Recalculating the tree's height.
   - B) Performing an in-order traversal.
   - C) Checking for and handling any violations.

**23. What happens when inserting an item in a place where a node's left child is `null`?**
   - A) The item is not inserted.
   - B) The item replaces the node's current value.
   - C) A new node with the item is created as the left child.

**24. What is the purpose of recalculating height parameters after inserting an item in an AVL tree?**
   - A) To determine if the tree has become unbalanced.
   - B) To find the new root of the tree.
   - C) To update the tree's total node count.

**25. Why is a violation check important after every manipulation in an AVL tree?**
   - A) To ensure the tree remains a valid binary search tree.
   - B) To maintain the tree's balance and logarithmic running time complexity.
   - C) To optimize the tree for faster insertion in the future.

**Answer Sheet:**
21. B
22. C
23. C
24. A
25. B

### Topic 6: AVL Tree Implementation I

**26. What is the primary purpose of the node class in AVL tree implementation?**
   - A) To define the structure and properties of each tree node.
   - B) To create a pool of reusable nodes.
   - C) To keep track of the root node only.

**27. In AVL tree implementation, what information does each node contain?**
   - A) Only the data value.
   - B) Data, left and right children, parent node, and height parameter.
   - C) Data and the balance factor.

**28. Why is the root node crucial in AVL tree implementation?**
   - A) It is used to balance the tree.
   - B) It is the only node with a height parameter.
   - C) It is the starting point for insertions, deletions, and traversals.

**29. In the AVL tree, how is the insert method initiated?**
   - A) By calling a recursive function to find the right position.
   - B) By directly inserting at the root.
   - C) By sorting the tree first.

**30. What happens if the root node is `null` when inserting a new item in an AVL tree?**
   - A) The tree remains unchanged.
   - B) The new item becomes the root node.
   - C) The tree is restructured completely.

**Answer Sheet:**
26. A
27. B
28. C
29. A
30. B

### Topic 7: AVL Tree Implementation II

**31. What is the first step in removing a node from an AVL tree?**
   - A) Recalculating the balance factor.
   - B) Finding the node to be removed.
   - C) Rotating the tree.

**32. How is the removal of a leaf node in an AVL tree handled?**
   - A) By directly deleting it and adjusting its parent.
   - B) By replacing it with its nearest neighbor.
   - C) By rotating the subtree.

**33. In AVL tree removal, what special case must be handled when a node with two children is removed?**
   - A) The tree must be rebalanced immediately.
   - B) The node is replaced with its in-order predecessor or successor.
   - C) Both children are also removed.

**34. Why is handling violation crucial after removing a node in an AVL tree?**
   - A) To ensure the tree remains sorted.
   - B) To maintain the balance of the tree.
   - C) To prepare the tree for subsequent insertions.

**35. When removing a node with a single child in an AVL tree, how is the tree adjusted?**
   - A) The child is removed along with the node.
   - B) The child replaces the node to be removed.
   - C) The child is left unchanged.

**Answer Sheet:**
31. B
32. A
33. B
34. B
35. B

### Topic 8: AVL Tree Implementation III

**36. What is the primary purpose of calculating the height parameter in AVL trees?**
   - A) To optimize tree traversal.
   - B) To determine the balance of the tree.
   - C) To facilitate faster insertion operations.

**37. How is the balance factor in an AVL tree calculated?**
   - A) Difference in the height of left and right subtrees.
   - B) Sum of the heights of left and right subtrees.
   - C) Average height of all subtrees.

**38. What does a positive balance factor in an AVL tree indicate?**
   - A) The right subtree is heavier.
   - B) The tree is perfectly balanced.
   - C) The left subtree is heavier.

**39. What is the role of the violation helper function in AVL trees?**
   - A) To insert new nodes.
   - B) To determine and correct imbalances.
   - C) To calculate the height of the tree.

**40. Why is it important to check the entire path up to the root after every insertion or removal?**
   - A) To find the new root if it has changed.
   - B) To ensure the entire tree remains balanced.
   - C) To update all node values.

**Answer Sheet:**
36. B
37. A
38. C
39. B
40. B

### Topic 9: AVL Tree Implementation IV

**41. What is the main goal of performing rotations in AVL trees?**
   - A) To reorganize the tree for easier traversal.
   - B) To rebalance the tree and maintain its properties.
   - C) To increase the height of the tree.

**42. When is a right rotation in an AVL tree performed?**
   - A) When the left subtree of a node is heavier.
   - B) When the tree is perfectly balanced.
   - C) When the right subtree of a node is heavier.

**43. In AVL trees, what change occurs to the root node of a subtree after a left rotation?**
   - A) It becomes the left child of its right child.
   - B) It remains the root node of the subtree.
   - C) It becomes the right child of its left child.

**44. How do rotations affect the time complexity of AVL tree operations?**
   - A) They increase the time complexity significantly.
   - B) They have a constant time complexity and don't affect the overall complexity.
   - C) They reduce the time complexity to linear.

**45. In AVL tree rotations, why is it necessary to update parent references?**
   - A) To maintain the correct structure of the tree.
   - B) To optimize memory usage.
   - C) To prepare for subsequent rotations.

**Answer Sheet:**
41. B
42. A
43. A
44. B
45. A

### Topic 10: Practical (Real-World) Applications of Balanced Binary Search Trees

**46. How are balanced binary search trees used in game engines?**
   - A) To render objects in the game world.
   - B) To control the game's AI.
   - C) To manage the game's user interface.

**47. What role do binary search trees play in compilers?**
   - A) They optimize the compiler's performance.
   - B) They are used to parse syntax expressions.
   - C) They store the compiler's configuration settings.

**48. In what way can balanced binary search trees assist in sorting data?**
   - A) By providing a way to sort data in logarithmic running time complexity.
   - B) By automatically sorting data upon insertion.
   - C) By reducing the need for external sorting algorithms.

**49. Why are AVL trees considered less suitable for database implementation compared to B-trees?**
   - A) Due to their lower storage capacity.
   - B) Because of the high number of rotations required.
   - C) Because they can only handle numeric data.

**50. Which of the following is a common application of balanced binary search trees?**
   - A) Real-time video processing.
   - B) Network packet routing.
   - C) Sorting and searching operations in databases.

**Answer Sheet:**
46. A
47. B
48. A
49. B
50. C

