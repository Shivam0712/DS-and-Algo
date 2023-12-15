# DS-and-Algo

In this lecture, we will discuss the various operations related to linked lists.

### Inserting a Node at the Beginning
- Inserting a new item at the beginning of the linked list is easy as we have access to the head node.
- We update the references to point the new node to the first node and set the head node to the new node.
- This operation has a constant running time complexity.

### Inserting a Node at the End
- To insert a new item at the end of the linked list, we need to iterate through all the nodes until we reach the last node.
- We update the reference of the last node to point to the new node.
- This operation has a linear running time complexity as we need to consider each node.

### Removing the First Node
- Removing the first item of the linked list is fast as we only need to update the reference of the head node.
- We set the next node as the new head node.
- This operation has a constant running time complexity.

### Removing an Arbitrary Node
- Removing an arbitrary item or the last item of the linked list requires finding the node to be removed.
- In the worst case, we need to consider all the nodes, resulting in a linear running time complexity.
- We update the references to bypass the node to be removed.

Overall, manipulating the first item in a linked list is efficient with constant running time complexity.
However, manipulating arbitrary items or the last item has a linear running time complexity, which is not ideal.
Other data structures like binary search trees or hash tables can achieve better time complexities for these operations.

In the next lecture, we will discuss the pros and cons of linked lists.

## Pros and Cons of Linked Lists

### Advantages of Linked Lists:
1. Dynamic data structure: Linked lists can acquire memory at runtime without resizing the underlying data structure. This allows for organic growth of the data structure and eliminates the need to know the number of items to be stored at compile time.
2. Ability to store different sized items: Unlike arrays, linked lists can store items of different sizes as they are not located right next to each other in memory.

### Disadvantages of Linked Lists:
1. Increased memory usage: Linked lists require more memory as they store both the data and a pointer/reference to the next node.
2. Lack of random access: One-dimensional arrays allow for fast access to items based on their index, but linked lists do not support random access as the items are not located sequentially.
3. Inability to go backwards: Linked lists only have references to the next node, making it impossible to access the previous item.
4. Unpredictable running time: The performance of an application using linked lists depends on the operations performed. Some operations have constant running time complexity, while others have linear complexity. This makes the application's performance less predictable compared to data structures like binary search trees or hash maps.

Overall, linked lists offer dynamic memory allocation and the ability to store items of different sizes. However, they come with drawbacks such as increased memory usage, lack of random access, inability to go backwards, and unpredictable running time. Other data structures may be more suitable for applications requiring predictable performance.

## Linked List Implementation

In the coming lectures, we will discuss the implementation of Langley's data structures. Let's start by creating a class for the node. The node represents a single node in the data structure. It stores data and a reference to the next node. The first node is called the head node.

To initialize the linked list, we create a class for the list. The head is initially set to None. We also store the number of nodes in the list.

To get the size of the list, we return the number of nodes.

To insert an item at the start of the list, we increment the number of nodes, create a new node, and update the head to point to the new node. If the list is empty, the new node becomes the head.

To insert an item at the end of the list, we increment the number of nodes, create a new node, and find the last item in the list. We update the reference of the last item to point to the new node.

Inserting at the start has a constant running time complexity, while inserting at the end has a linear running time complexity.

In the next lecture, we will discuss how to remove items from the list.

Pros and Cons of Linked Lists:

Advantages:
1. Dynamic data structure: Linked lists can acquire memory at runtime, allowing for organic growth of the data structure.
2. Ability to store different sized items: Linked lists can store items of different sizes as they are not located sequentially in memory.

Disadvantages:
1. Increased memory usage: Linked lists require more memory as they store both data and a reference to the next node.
2. Lack of random access: Linked lists do not support fast access to items based on their index.
3. Inability to go backwards: Linked lists only have references to the next node, making it impossible to access the previous item.
4. Unpredictable running time: The performance of an application using linked lists depends on the operations performed, leading to less predictable performance compared to other data structures.

Overall, linked lists offer dynamic memory allocation and the ability to store items of different sizes. However, they come with drawbacks such as increased memory usage, lack of random access, inability to go backwards, and unpredictable running time. Other data structures may be more suitable for applications requiring predictable performance.

## Linked List Implementation

In the previous lecture, we discussed the implementation of the node class and the English class. We learned how to insert nodes at the beginning and end of the list. In this lecture, we will test the functionality of the implementation and introduce another function called "traverse".

### Traversing the Linked List
To traverse the linked list and visit each node exactly once, we start with the head node and iterate until we reach the last node. We check if the current node is not None (not the null pointer), and if so, we print the data of the current node. Then, we move to the next node by updating the current node to be the next node. This process continues until we reach the end of the list.

### Main Function
In the main function, we create a linked list called "playing_list". We can insert items at the beginning of the list using the "insert_at_beginning" function. We can also insert items at the end of the list using the "insert_at_end" function. To traverse the list and print all the items, we call the "traverse" function.

### Printing the Items
To print the items, we can either directly print the data of each node or define a representation function in the node class. The representation function returns the data of the node, and Python automatically calls this function when printing an object. We need to ensure that the data is converted to a string before printing.

### Inserting Items at the End
If we insert items at the end of the list using the "insert_at_end" function, the newly inserted items will be placed at the end. The first item inserted will remain the first item in the list.

### Time Complexity
Inserting items at the beginning of the list has a constant time complexity of O(1), while inserting items at the end has a linear time complexity of O(n), where n is the number of items in the list.

In the next lecture, we will discuss how to remove items from the list. Thank you for watching.

## Linked list implementation III

In the previous lecture, we discussed how to insert items into a linked list, determine its size, and traverse through each item. In this lecture, we will focus on removing items from a linked list.

To remove an item from a linked list, we need to define the item we want to remove. This operation has a linear running time complexity because we start from the head node and iterate through each item until we find the item we want to remove. If the list is empty, we simply return as there are no items to remove.

To facilitate the removal process, we need to keep track of the previous node and the current node. Linked lists do not allow for easy access to the previous node, so we must store a reference to it. Therefore, the standard linked list data structure has single pointers, with each node pointing to the next node.

Once we have identified the item we want to remove, we update the reference of the previous node to point to the next node, effectively bypassing the item we want to remove. We do not need to explicitly delete the node, as the garbage collector will handle it if there are no active references to it.

To demonstrate the removal operation, we insert some values into the linked list, traverse through it, and then remove specific items. If we try to remove an item that is not present in the list, nothing will happen. However, if we remove the head node or an internal node, the removal will be successful.

In conclusion, the removal operation in a linked list involves updating the references of the previous node to bypass the item to be removed. The garbage collector will handle the deletion of the node. Linked lists offer dynamic memory allocation and the ability to store items of different sizes, but they come with drawbacks such as increased memory usage, lack of random access, inability to go backwards, and unpredictable running time. For applications requiring predictable performance, other data structures may be more suitable.

## Revisiting remove operation

In the theoretical section, it was stated that the remove operation is fast with linked lists. However, during the implementation, it was discovered that it has a linear running time complexity of O(N), which is not considered fast. The reason for this is that when using linked lists, it is usually assumed that the first item, which is the head node, needs to be removed (and inserted) in constant running time complexity of O(1).

The remove function that has been implemented is perfectly fine if it is used to remove an arbitrary item. In this case, the item needs to be found first, and then the references need to be updated, resulting in a running time complexity of O(N).

However, if the intention is to remove the first node (head node) using the same function, there is no need for the while loop. Python will exit the while loop after the first iteration, resulting in a final running time complexity of O(1).

In conclusion, the first node of a linked list can be removed extremely fast with a constant running time complexity of O(1). This is precisely why the linked list data structure exists - to allow for the manipulation of the first item in an efficient manner.

## Comparing linked lists and arrays

In the previous chapters, we have been already talking about arrays and linked lists, and in this lecture we are going to compare these two data structures. So we are going to talk about the advantages of arrays and the disadvantages of arrays and of course the advantages and disadvantages for linked lists.

### Advantages of Arrays:
1. Static data structure: Arrays are considered static data structures as the size needs to be known in advance. If the number of items changes, the data structure itself needs to be resized.
2. Random access: Arrays allow for fast access to items based on their index. Items are located sequentially in memory, enabling constant running time complexity.

### Disadvantages of Arrays:
1. Lack of dynamic memory allocation: Arrays require the size to be known in advance, making it difficult to handle organic growth of the data structure.
2. Linear running time complexity for manipulating first and last items: Manipulating the first or last items in an array may require shifting or traversing the entire data structure, resulting in linear running time complexity.
3. Memory usage: Arrays do not require additional memory for storing references or pointers, making them more memory-efficient compared to linked lists.

### Advantages of Linked Lists:
1. Dynamic data structure: Linked lists can acquire memory at runtime without resizing the underlying data structure. This allows for organic growth of the data structure and eliminates the need to know the number of items to be stored at compile time.
2. Ability to store different sized items: Unlike arrays, linked lists can store items of different sizes as they are not located right next to each other in memory.

### Disadvantages of Linked Lists:
1. Increased memory usage: Linked lists require more memory as they store both the data and a pointer/reference to the next node.
2. Lack of random access: One-dimensional arrays allow for fast access to items based on their index, but linked lists do not support random access as the items are not located sequentially.
3. Inability to go backwards: Linked lists only have references to the next node, making it impossible to access the previous item.
4. Unpredictable running time: The performance of an application using linked lists depends on the operations performed. Some operations have constant running time complexity, while others have linear complexity. This makes the application's performance less predictable compared to data structures like binary search trees or hash maps.

Overall, linked lists offer dynamic memory allocation and the ability to store items of different sizes. However, they come with drawbacks such as increased memory usage, lack of random access, inability to go backwards, and unpredictable running time. Other data structures may be more suitable for applications requiring predictable performance.

## Practical Applications of Linked Lists

Linked lists have various practical applications in real-world scenarios. Some of these applications include:

1. **Low-level memory management**: Linked lists are essential in programming languages like C, where memory management is done manually. Functions like `malloc` and `free` are used to allocate and deallocate memory on the heap. Linked lists help in organizing and managing memory blocks efficiently.

2. **Heap memory manipulation**: Linked lists are used to store data blocks in heap memory. Each block contains a header that stores information about the block and a reference to the next block. This creates a linked structure, allowing efficient traversal and manipulation of heap memory.

3. **Active tabs in web browsers**: Web browsers use linked lists to manage active tabs. Each tab is represented as a node in the linked list, allowing users to switch between tabs easily.

4. **Photo viewer applications**: Photo viewer applications utilize linked lists to navigate between images. Each image is linked to the next and previous images, enabling users to view the next or previous photo with a simple click.

5. **Blockchain technology**: Linked lists play a crucial role in blockchain technology, particularly in the context of cryptocurrencies like Bitcoin. In a blockchain, each block contains a cryptographic hash that points to the previous block, creating a linked structure. This ensures the integrity and security of the blockchain.

Overall, linked lists are widely used in memory management, data organization, and navigation scenarios. They provide flexibility, efficient memory allocation, and easy traversal. Whether it's managing memory in programming languages, organizing tabs in web browsers, navigating through photos, or ensuring the integrity of blockchain data, linked lists prove to be a valuable data structure.

## What are doubly linked lists?

Doubly linked lists are a type of data structure that allows for efficient storage and manipulation of items. They are an extension of standard linked lists, with the addition of a reference to the last node of the list, called the tail node. Each node in a doubly linked list contains two references: one to the next node and one to the previous node. This allows for traversal of the list in both directions, from left to right and from right to left.

### Advantages of Doubly Linked Lists:
1. Efficient insertion and removal: Due to the presence of references to the first and last nodes, insertion and removal operations at the beginning and end of the list can be performed in constant time complexity.
2. Bidirectional traversal: Doubly linked lists allow for traversal in both directions, making it easier to access and manipulate items in the list.
3. No need for shifting items: Unlike standard linked lists, doubly linked lists do not require shifting of items when inserting or removing at the beginning or end of the list. This results in faster operations.

### Disadvantages of Doubly Linked Lists:
1. Increased memory usage: Doubly linked lists require more memory than standard linked lists due to the additional references to the previous nodes.
2. Complexity of implementation: Implementing doubly linked lists can be more complicated compared to standard linked lists, as it involves managing both the previous and next node references.
3. Search complexity: Searching for an arbitrary item in a doubly linked list still has a worst-case time complexity of linear, as it requires traversing through the list until the item is found.

Despite the disadvantages, doubly linked lists offer advantages such as efficient insertion and removal, bidirectional traversal, and no need for shifting items. These advantages make them suitable for applications where fast manipulation of the first and last items of a data structure is required. However, for applications that require faster search operations, other data structures like binary search trees may be more suitable.

## Doubly Linked List Implementation

In this lecture, we will discuss the concrete implementation of doubly linked lists. Here are the key points:

- To implement a doubly linked list, we need to define a class for the nodes in the list. Each node has an instance variable for the data and two pointers, one to the next node and one to the previous node.
- The doubly linked list class also needs to be defined. It has instance variables for the head node and the tail node. The head node points to the first item in the list, while the tail node points to the last item.
- Insertion in a doubly linked list means inserting an item at the end of the list. To do this, we need to update the references of the tail node. If the list is empty, both the head and tail nodes will point to the new node. If there are already nodes in the list, we update the tail node to point to the new node.
- Doubly linked lists have the advantage of being able to traverse the list in both forward and backward directions. To traverse forward, we start with the head node and move to the next node until we reach the end of the list. To traverse backward, we start with the tail node and move to the previous node until we reach the beginning of the list.
- In the lecture, an example of a doubly linked list is created with three items: 1, 2, and 3. The list is then traversed forward, resulting in the output 1, 2, 3. The list is also traversed backward, resulting in the output 3, 2, 1.

In the next lecture, the running time complexity of lists and linked lists will be compared. Arrays and linked lists are two common data structures, and their performance characteristics will be discussed.

Overall, the lecture covers the implementation of doubly linked lists, including node and list classes, insertion at the end of the list, and traversal in both forward and backward directions. The lecture also mentions the upcoming comparison of running time complexity between lists and linked lists.

## Running time comparison: linked lists and arrays

So far, we have discussed one-dimensional arrays and linked lists as data structures. In this lecture, we will compare the running time of linked lists and arrays.

To begin, let's assume that the list data structure in Python is equivalent to a one-dimensional array in computer science. Although the implementation may differ, we will consider them as arrays for this comparison.

We will focus on the running time of inserting items at the beginning of the data structure. First, let's examine the implementation of a simple linked list. Each node in the linked list has a reference to the next node.

To measure the running time, we will import the time module and use the time function. By subtracting the initial time (now) from the current time, we can determine how long it takes to insert items.

We will insert 500,000 items at the beginning of both the linked list and the array. After the insertion, we will print the time taken for each data structure.

When we run the algorithm, we find that inserting 500,000 items at the beginning of the linked list takes approximately half a second. In contrast, inserting the same number of items in the array takes 52 seconds. This significant difference in time is due to the need for the array to shift all the items during each insertion.

Understanding data structures is crucial for choosing the appropriate one for a given application. In this case, linked lists are much faster when manipulating the first items of the data structure.

In summary, linked lists offer advantages such as dynamic memory allocation and the ability to store items of different sizes. However, they also have disadvantages, including increased memory usage, lack of random access, inability to go backwards, and unpredictable running time. For applications requiring predictable performance, other data structures like binary search trees or hash maps may be more suitable.

Thank you for watching.
