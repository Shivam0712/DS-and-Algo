# Associate Arrays

## Topological Index

### 1. Associative Arrays
- Abstract Data Types
- Implementation Methods
- Key-Value Pairs
- One-Dimensional Arrays
- Balanced Binary Search Trees
- **Key Terms:** Associative Arrays, Maps, Dictionaries, Key-Value Pairs, One-Dimensional Array, Binary Search Trees

### 2. Hashtable Introduction - Basics
- Constant Time Complexity
- Key-Value Storage Efficiency
- Unique Keys in Applications
- One-Dimensional Array Use
- **Key Terms:** Hash Table, Constant Time Complexity, Insertion, Deletion, Key-Value Pairs, One-Dimensional Array

### 3. Hashtable Introduction - Collisions
- Collision Concept
- Handling Collisions
- Chaining and Open Addressing
- Linear and Quadratic Probing
- Rehashing Methods
- **Key Terms:** Collisions, Hash Functions, Chaining, Open Addressing, Linear Probing, Quadratic Probing, Rehashing

### 4. Hashtable Introduction - Dynamic Resizing
- Load Factor Concept
- Collision Probability
- Dynamic Resizing of Array
- Memory and Running Time Tradeoff
- **Key Terms:** Load Factor, Dynamic Resizing, Collision Probability, Memory Complexity, Running Time Complexity

### 5. Linear Probing Implementation
- Hash Table Class Creation
- Key-Value Pair Insertion
- Hash Function Implementation
- Handling Collisions with Linear Probing
- **Key Terms:** Hash Table, Linear Probing, Hash Function, Key-Value Insertion, Python

### 6. Dictionaries in Python
- Built-in Dictionary Functionality
- Accessing and Manipulating Data
- Iteration and Deletion
- **Key Terms:** Python Dictionary, Key-Value Access, Iteration, Clear Function

### 7. Why to Use Prime Numbers in Hashing?
- Reducing Collisions
- Uniform Key Distribution
- Factors in Hash Functions
- **Key Terms:** Prime Numbers, Hashing, Collisions, Key Distribution, Hash Functions

### 8. Practical (Real-World) Applications of Hashing
- Cryptography
- Password Verification
- Blockchain Technology
- **Key Terms:** Hashing Applications, Cryptography, Passwords, Blockchains, SHA256

## Notes

### Hashtable Introduction - Basics

1. **Motivation for Hash Tables**:
   - Aimed at efficiently storing key-value pairs for quick constant time complexity operations.

2. **Example Usage**:
   - Commonly used for mapping authors to their novel titles, or email addresses to users.

3. **One-Dimensional Array as Base Structure**:
   - Hash tables typically use a one-dimensional array for storage.

4. **Key-to-Index Conversion via Hash Functions**:
   - The hash function is pivotal in converting keys to array indices.
   - Ensures unique mapping and even distribution to minimize collisions.

5. **Necessity of Unique Keys**:
   - Key uniqueness is vital to prevent the same index mapping for different users.

6. **Use of Modulo Operator in Hash Functions**:
   - Ensures generated indices fit within the array's size constraints.

### Hashtable Introduction - Collisions

1. **Collision Occurrence in Hashing**:
   - Collisions happen when different keys map to the same array index.

2. **Handling Collisions**:
   - Two primary methods: chaining and open addressing.
   - Chaining involves linked lists; open addressing includes linear probing, quadratic probing, and rehashing.

3. **Chaining Method Details**:
   - Stores colliding items in a linked list at the collision index.
   - Can lead to linear time complexity in worst-case scenarios.

4. **Open Addressing Strategies**:
   - Linear probing: sequential checking of indices post-collision.
   - Quadratic probing: checks indices based on quadratic polynomial distance.
   - Double hashing: applies a second hash function for new indices.

5. **Impact of Collision Handling Methods**:
   - Each method has its trade-offs in terms of complexity and memory usage.

### Hashtable Introduction - Dynamic Resizing

1. **Role of Load Factor**:
   - Indicates how full the hash table is; crucial for deciding when to resize.

2. **Dynamic Resizing Triggers**:
   - Java and Python resize their hash tables based on specific load factor thresholds.

3. **Resizing Process and Implications**:
   - Involves rehashing all items, leading to a potentially expensive operation.
   - Necessary to maintain efficiency and minimize collision probability.

### Linear Probing Implementation

1. **Linear Probing Concept**:
   - Involves sequentially probing the next array index when a collision occurs.
   - Ensures that if the desired index is occupied, the next available slot is used.

2. **Hash Table Class in Python**:
   - Class `HashTable` created to encapsulate hash table functionalities.
   - Includes initialization block, hash function, and methods for insertion and retrieval.

3. **Initialization and Capacity Management**:
   - Establishes initial capacity of the hash table (e.g., 10 slots).
   - Prepares separate lists for keys and values, initially filled with `None`.

4. **Hash Function Details**:
   - Transforms each key into an integer index based on ASCII values of characters.
   - Uses modulo operation to ensure index falls within array capacity.

5. **Insertion Method Mechanics**:
   - Checks for an existing key to update its value or find a new index using linear probing.
   - Updates or inserts the key-value pair at the calculated index.

6. **Retrieval Method Functionality**:
   - Retrieves a value by converting the key to an index using the hash function.
   - Linearly probes through the array if the first index is not a match.

7. **Collision Handling via Linear Probing**:
   - If an index is occupied, increments the index sequentially until an empty slot is found.
   - Wraps around to the beginning of the array if the end is reached.

8. **Testing and Validation**:
   - The implementation is tested for various scenarios including key insertions, updates, and retrievals.
   - Special cases like inserting duplicate keys and retrieving non-existent keys are also tested.

9. **Performance Considerations**:
   - Linear probing can lead to clustering, affecting the performance.
   - The load factor plays a role in determining when to resize the array to maintain efficiency.

10. **Resizing and Rehashing**:
   - Discusses the need for resizing the hash table when it gets too full.
   - Rehashing all keys is necessary after resizing to maintain the distribution of items.

11. **Modulo Operator in Index Calculation**:
   - Ensures that all calculated indices are valid within the current array size.
   - Prevents index out-of-bounds errors during insertion and retrieval.

### Dictionaries in Python

1. **Python's Built-in Dictionary Feature**:
   - Demonstrates usage of Python's dictionary as a practical implementation of a hash table.

2. **Basic Operations**:
   - Creation, accessing values by keys, and iterating over items.

3. **Utility Functions**:
   - Includes methods for retrieving items, keys, values, and clearing the dictionary.

4. **Dictionary Deletion**:
   - Discusses how to clear contents or completely delete a dictionary.

### Why to Use Prime Numbers in Hashing?

1. **Prime Numbers for Array Sizing**:
   - Explains why prime numbers are ideal for the size of the underlying array in a hash table.

2. **Reducing Collision Probability**:
   - Prime numbers help in distributing keys more uniformly, thus minimizing collisions.

3. **Examples and Illustrations**:
   - Demonstrates how non-prime array sizes can lead to predictable collision patterns.

4. **Benefits of Prime Numbers in Hashing**:
   - Emphasizes on achieving widespread key distribution and efficient hash table operation.

### Practical (Real-World) Applications of Hashing

1. **Index Generation and Data Storage**:
   - Hashing is ideal for creating efficient data structures like hash maps and dictionaries.

2. **Cryptography**:
   - Used for creating cryptographic fingerprints of files or data.

3. **Password Security**:
   - Storing hashes of passwords instead of actual passwords for enhanced security.

4. **Blockchain Technology**:
   - Critical in the secure linking of blocks within blockchains.

These detailed points cover the fundamentals and nuances of hash tables, including their implementation, collision handling, dynamic resizing, practical applications, and the significance of using prime numbers in hashing.

## Questions Banks

### Topic: Associative Arrays and Hashtable Introduction

#### 1. What are associative arrays also known as?
   - A) Binary Trees
   - B) Maps or Dictionaries
   - C) Linked Lists

#### 2. Associative arrays are an example of which type of data structure?
   - A) Concrete data types
   - B) Abstract data types
   - C) Primitive data types

#### 3. In associative arrays, each key appears how many times?
   - A) At most once
   - B) More than once
   - C) Depends on the implementation

#### 4. Which data structure is NOT typically used to implement associative arrays?
   - A) One-dimensional arrays
   - B) Balanced binary search trees
   - C) Stacks

#### 5. What is a key characteristic of associative arrays in terms of element access?
   - A) Sequential access
   - B) Random access
   - C) Indexed access

#### 6. What is a primary motivation for using hash tables?
   - A) To enhance sorting efficiency
   - B) To ensure constant time complexity for most operations
   - C) To increase memory usage

#### 7. What is the basic data structure used in hash tables?
   - A) Linked List
   - B) Graph
   - C) One-dimensional array

#### 8. What is the purpose of a hash function in a hash table?
   - A) To sort the key-value pairs
   - B) To transform keys into array indexes
   - C) To balance the binary tree

#### 9. What kind of time complexity is desired for operations in hash tables?
   - A) O(1) constant
   - B) O(n) linear
   - C) O(log n) logarithmic

#### 10. In hash tables, what does the term 'collision' refer to?
   - A) When the table becomes full
   - B) When two keys hash to the same index
   - C) When the table needs resizing

### Answer Sheet:
1. B
2. B
3. A
4. C
5. B
6. B
7. C
8. B
9. A
10. B

### Topic: Hashtable Introduction - Collisions

#### 1. What is a collision in the context of a hash table?
   - A) When the hash table runs out of memory
   - B) When two keys hash to different indices
   - C) When two or more keys hash to the same array index

#### 2. What is one method to handle collisions in a hash table?
   - A) Chaining
   - B) Increasing array size
   - C) Decreasing hash function complexity

#### 3. What is a disadvantage of using chaining to handle collisions?
   - A) It requires additional memory for references
   - B) It decreases the array size
   - C) It simplifies the hash function

#### 4. In chaining, what data structure is typically used to store items in the same bucket?
   - A) Stack
   - B) Queue
   - C) Linked list

#### 5. What is the worst-case time complexity of operations in a hash table when chaining is used and all items hash to the same bucket?
   - A) O(1)
   - B) O(n)
   - C) O(log n)

### Topic: Hashtable Introduction - Dynamic Resizing

#### 6. What does the 'load factor' in a hash table refer to?
   - A) Ratio of the number of occupied buckets to the total number of buckets
   - B) Time taken to access an element
   - C) Memory used by the hash table

#### 7. What triggers dynamic resizing of a hash table?
   - A) When the load factor exceeds a certain threshold
   - B) After a fixed number of operations
   - C) When a collision occurs

#### 8. What is the impact of dynamic resizing of a hash table on the hash values?
   - A) Hash values remain unchanged
   - B) Hash values need to be recalculated
   - C) Hash values are automatically reduced

#### 9. Why can dynamic resizing be a costly operation in hash tables?
   - A) It requires recalculating hash values for all elements
   - B) It reduces the load factor significantly
   - C) It increases the number of collisions

#### 10. What is a potential downside of a high load factor in a hash table?
   - A) Decreases memory usage
   - B) Increases probability of collisions
   - C) Simplifies the hash function

### Topic: Linear Probing Implementation

#### 11. What is linear probing in the context of hash tables?
   - A) Adding new elements at the end of the table
   - B) Searching for the next available slot linearly in case of a collision
   - C) Removing elements in a linear fashion

#### 12. What can be a drawback of linear probing?
   - A) Increases load factor
   - B) Can lead to clustering
   - C) Reduces the array size

#### 13. How does linear probing determine the next index to probe?
   - A) Randomly selects an index
   - B) Checks the next index sequentially
   - C) Uses a secondary hash function

#### 14. What happens in linear probing when the end of the array is reached?
   - A) Probing stops and returns an error
   - B) Probing wraps around to the beginning of the array
   - C) The array is resized

#### 15. How does linear probing handle insertion of a new element?
   - A) Places the element in the first empty slot found
   - B) Places the element in a new array
   - C) Rehashes all elements in the table

### Answer Sheet:
1. C
2. A
3. A
4. C
5. B
6. A
7. A
8. B
9. A
10. B
11. B
12. B
13. B
14. B
15. A

### Topic: Dictionaries in Python

#### 16. What is the Python equivalent of a hash table?
   - A) List
   - B) Dictionary
   - C) Set

#### 17. How can you access a value in a Python dictionary?
   - A) Using its index
   - B) Using its key
   - C) Using its value

#### 18. What method is used to retrieve all key-value pairs from a Python dictionary?
   - A) `keys()`
   - B) `values()`
   - C) `items()`

#### 19. How do you remove all items from a Python dictionary?
   - A) `delete()`
   - B) `clear()`
   - C) `remove()`

#### 20. What is returned when you use the `values()` method on a Python dictionary?
   - A) Just the keys
   - B) Just the values
   - C) Both keys and values

### Topic: Why to Use Prime Numbers in Hashing?

#### 21. Why are prime numbers used in the size of hash tables?
   - A) To simplify the hash function
   - B) To reduce the number of collisions
   - C) To increase the table size

#### 22. What is the effect of using a prime number as the size of the hash table?
   - A) Decreases the spread of keys
   - B) Increases the spread of keys
   - C) Has no effect on the spread of keys

#### 23. What happens if the size of the hash table is not a prime number?
   - A) It becomes easier to compute hash values
   - B) It may lead to more collisions
   - C) It automatically becomes a prime number

#### 24. What is the main benefit of reducing collisions in a hash table?
   - A) Reduces memory usage
   - B) Increases data retrieval speed
   - C) Simplifies the data structure

#### 25. What role do prime numbers play in hash functions?
   - A) They act as multipliers in the hash function
   - B) They determine the range of hash values
   - C) They help in evenly distributing the keys

### Topic: Practical (Real-World) Applications of Hashing

#### 26. Which of the following is a real-world application of hashing?
   - A) Data sorting
   - B) Index generation
   - C) Array resizing

#### 27. How is hashing used in password verification?
   - A) By encrypting the password
   - B) By storing the hash of the password
   - C) By comparing the password lengths

#### 28. In cryptocurrencies like Bitcoin, what role does hashing play?
   - A) It generates the digital currency
   - B) It identifies blocks in the blockchain
   - C) It encrypts user data

#### 29. Why is hashing important in file integrity verification?
   - A) It confirms the file size
   - B) It generates a unique identifier for the file
   - C) It compresses the file for faster transmission

#### 30. How does hashing contribute to efficient data retrieval?
   - A) By sorting the data
   - B) By indexing data through hash maps or dictionaries
   - C) By compressing the data

### Answer Sheet:
16. B
17. B
18. C
19. B
20. B
21. B
22. B
23. B
24. B
25. C
26. B
27. B
28. B
29. B
30. B
