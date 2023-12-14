
ards Analogy
- Access to Top Element
- Implementation Methods
- LIFO Structure
- Basic Operations
- Programming Language Usage
- Stack Frames in OS
- **Key Terms:** Stack, Abstract Data Type, LIFO, Pop, Push, Peek, Programming Languages, Stack Frames, Operating Systems.

**2. Stacks in memory management (stacks and heaps)**

- Differences between Stack and Heap Memory
- Memory Loading Process
- Stack Memory Attributes
- Heap Memory Attributes
- Memory Fragmentation
- Stack Overflow Error
- Heap Memory Overflow
- **Key Terms:** Stack Memory, Heap Memory, Memory Fragmentation, Stack Overflow, Heap Overflow, Memory Allocation, Random Access Memory.

**3. Stack memory visualization**

- Function Calls and Local Variables
- Class Variables and Instance Variables
- Stack Memory and Heap Memory
- Garbage Collection
- **Key Terms:** Function Calls, Local Variables, Class Variables, Instance Variables, Stack Memory, Heap Memory, Garbage Collection.

**4. Stack implementation**

- Stack Class Creation
- Push Method
- Pop Method
- Peek Method
- Stack Size Method
- **Key Terms:** Stack Class, Push, Pop, Peek, Stack Size.

**5. Practical (real-world) applications of stacks**

- Browser Back Button
- Undo Operation in Applications
- Stack Memory in Operating Systems
- **Key Terms:** Browser Back Button, Undo Operation, Stack Memory, Operating Systems.

## Summarries

## 1. What are stacks?

- **Stack Abstract Data Type**: A data type with undefined implementation, similar to a deck of cards where access is limited to the top item only. 
- **Implementation Methods**: Stacks can be implemented using linked lists or arrays.
- **LIFO Structure**: Stacks operate on a Last In, First Out principle.
- **Basic Operations**: Include push (insert item), pop (remove last item), and peek (return value of top item without removing it).
- **Programming Language Usage**: Stacks are essential in modern programming languages for storing function calls and local variables.
- **Stack Frames in OS**: Operating systems use stack frames to execute basic operations.

## 2. Stacks in memory management (stacks and heaps)

- **Differences between Stack and Heap Memory**: Stack memory is smaller, faster, and can't become fragmented, while heap memory is larger, slower, and can become fragmented.
- **Memory Loading Process**: When an application is run, the machine level binary code is loaded into memory.
- **Stack Memory Attributes**: Stores local variables and method calls, can result in stack overflow error if too many stack frames are added.
- **Heap Memory Attributes**: Used for dynamic memory allocation, can result in heap memory overflow if too many objects are allocated.

## 3. Stack memory visualization

- **Function Calls and Local Variables**: Stored on the stack memory, allowing the programming language to know where to return after a function is executed.
- **Class Variables and Instance Variables**: Stored on the heap memory, with a reference stored on the stack memory.
- **Stack Memory and Heap Memory**: Stack memory stores function calls, parameters and local variables, while heap memory stores objects and their related class variables.
- **Garbage Collection**: Removes unused objects from the heap memory.

## 4. Stack implementation

- **Stack Class Creation**: A stack is created as a one-dimensional array within a Python class.
- **Push Method**: Inserts an item into the stack.
- **Pop Method**: Removes the last item inserted into the stack.
- **Peek Method**: Returns the value of the top item without removing it.
- **Stack Size Method**: Returns the number of items in the stack.

## 5. Practical (real-world) applications of stacks

- **Browser Back Button**: Uses a stack to store recently visited URLs, allowing users to return to previously visited pages.
- **Undo Operation in Applications**: Uses a stack to store states, allowing users to return to previous states.
- **Stack Memory in Operating Systems**: Stores function calls and local variables, allowing the operating system to know where to return after a function is executed.

## Question Bank

### Topic: Understanding Stacks in Computer Science

**1. What is a Stack in computer science?**
   - A) A type of data type that defines behavior without the underlying implementation.
   - B) A type of data type that can only be implemented with one-dimensional arrays.
   - C) A type of data type that allows access to all elements at any point in time.

**2. What is the structure of a Stack?**
   - A) First in, First out (FIFO)
   - B) Last in, First out (LIFO)
   - C) Last in, Last out (LILO)

**3. What is the 'pop' operation in a Stack?**
   - A) It removes and returns the last item inserted in the Stack.
   - B) It adds a new item to the top of the Stack.
   - C) It returns the value of the top item without removing it.

**4. What is the 'push' operation in a Stack?**
   - A) It removes and returns the last item inserted in the Stack.
   - B) It adds a new item to the top of the Stack.
   - C) It returns the value of the top item without removing it.

**5. Why is the Stack abstract data type crucial in modern programming languages?**
   - A) Because it allows for faster data access.
   - B) Because it stores function calls and local variables associated with a given function.
   - C) Because it requires less memory than other data types.

### Topic: Stacks in Memory Management

**1. What are the two types of memory used by applications?**
   - A) Stack memory and Heap memory.
   - B) Stack memory and Queue memory.
   - C) Heap memory and Queue memory.

**2. What is stored in Stack memory?**
   - A) Local variables and method calls.
   - B) Objects and reference types.
   - C) Global variables and method calls.

**3. What is stored in Heap memory?**
   - A) Local variables and method calls.
   - B) Objects and reference types.
   - C) Global variables and method calls.

**4. What is the main difference between Stack memory and Heap memory?**
   - A) Stack memory is small in size but fast to access, while Heap memory is large but slow to access.
   - B) Stack memory can become fragmented, while Heap memory cannot.
   - C) Stack memory stores objects and reference types, while Heap memory stores local variables and method calls.

**5. What happens when a large number of stack frames cannot fit into the Stack memory?**
   - A) The system crashes.
   - B) There is a so-called stack overflow error.
   - C) The system automatically increases the size of the Stack memory.

### Topic: Stack Memory Visualization

**1. What happens to the Stack memory when a function execution is completed?**
   - A) The function is removed from the Stack memory along with its local variables.
   - B) The function remains in the Stack memory along with its local variables.
   - C) Only the local variables of the function are removed from the Stack memory.

**2. Where are objects and their related class variables stored?**
   - A) In the Stack memory.
   - B) In the Heap memory.
   - C) In both Stack and Heap memory.

**3. What happens to an object in the Heap memory when there is no active reference to it from the Stack memory?**
   - A) It remains in the Heap memory.
   - B) It is removed by garbage collection.
   - C) It is moved to the Stack memory.

**4. How does Python know where to return after the execution of a given function?**
   - A) It uses a pointer stored in the Heap memory.
   - B) It uses the information stored in the Stack frame of the function.
   - C) It uses a global variable that tracks the function calls.

**5. What happens to the Stack memory when a function calls another function?**
   - A) A new frame is created for the called function on top of the calling function's frame.
   - B) The frame of the calling function is replaced with the frame of the called function.
   - C) The frame of the called function is inserted at the bottom of the Stack memory.

### Topic: Stack Implementation

**1. What is the running time complexity of the 'push' operation in a Stack?**
   - A) O(1)
   - B) O(n)
   - C) O(log n)

**2. What is the running time complexity of the 'pop' operation in a Stack?**
   - A) O(1)
   - B) O(n)
   - C) O(log n)

**3. What does the 'peek' operation in a Stack do?**
   - A) It removes and returns the last item inserted in the Stack.
   - B) It returns the last item inserted in the Stack without removing it.
   - C) It adds a new item to the top of the Stack.

**4. What does the 'isEmpty' function in a Stack do?**
   - A) It checks whether the Stack is empty or not.
   - B) It removes all items from the Stack.
   - C) It returns the number of items in the Stack.

**5. What does the 'stackSize' function in a Stack do?**
   - A) It checks whether the Stack is empty or not.
   - B) It removes all items from the Stack.
   - C) It returns the number of items in the Stack.

### Topic: Practical Applications of Stacks

**1. How does the 'back' button in a browser work?**
   - A) It uses a Stack to store the recently visited URLs, and the 'back' button pops these URLs.
   - B) It uses a Queue to store the recently visited URLs, and the 'back' button dequeues these URLs.
   - C) It uses a Heap to store the recently visited URLs, and the 'back' button removes these URLs from the Heap.

**2. How are 'undo' and 'redo' operations in applications like Photoshop implemented?**
   - A) They are implemented using a Stack to store the states.
   - B) They are implemented using a Queue to store the states.
   - C) They are implemented using a Heap to store the states.

**3. What happens when a function is called in a programming language like Python?**
   - A) A new frame for the function is created in the Stack memory.
   - B) A new frame for the function is created in the Heap memory.
   - C) A new frame for the function is created in the Queue memory.

**4. What happens when a function execution is completed in a programming language like Python?**
   - A) The function is removed from the Stack memory along with its local variables.
   - B) The function remains in the Stack memory along with its local variables.
   - C) Only the local variables of the function are removed from the Stack memory.

**5. What happens when a large number of stack frames cannot fit into the Stack memory?**
   - A) The system crashes.
   - B) There is a so-called stack overflow error.
   - C) The system automatically increases the size of the Stack memory.

**Answer Sheet:**
1. Understanding Stacks in Computer Science: A, B, A, B, B
2. Stacks in Memory Management: A, A, B, A, B
3. Stack Memory Visualization: A, B, B, B, A
4. Stack Implementation: A, A, B, A, C
5. Practical Applications of Stacks: A, A, A, A, B
