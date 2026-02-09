export default [
  {
    "id": "2022A_FE_AM_1",
    "question": "For an 8-bit binary integer, which of the following sets the least significant bit to 1 while leaving the other bits unchanged?",
    "options": ["Perform bitwise AND operation with 00000001.","Perform bitwise NAND operation with 11111110.","Perform bitwise OR operation with 00000001.","Perform bitwise XOR operation with 00000001."],
    "correctAnswer": 2,
    "solution": `You want to set the least significant bit (LSB) to 1 while leaving the other bits unchanged in an 8-bit binary integer.

The least significant bit is the rightmost bit in the binary number (position 0).

Suppose we have an 8-bit binary integer that is x = 10110010.

a) Perform bitwise AND operation with 00000001.
	x           = 10110010
	00000001    = 00000001
	-----------------------
	              00000000
This operation clears all bits except the least significant bit. It does not leave the other bits unchanged, so this is incorrect.

b) Perform bitwise NAND operation with 11111110.
	x           = 10110010
	11111110    = 11111110
	-----------------------
	              01001101
This operation flips all bits except the least significant bit, which is not what we want.

c) Perform bitwise OR operation with 00000001.
	x           = 10110010
	00000001    = 00000001
	-----------------------
	              10110011
This operation sets the least significant bit to 1 while leaving the rest of the bits unchanged. This is correct.

d) Perform bitwise XOR operation with 00000001.
	x           = 10110010
	00000001    = 00000001
	-----------------------
	              10110011
This changes the least significant bit if it was 0, but if it was already 1, XOR would change it to 0, which is not what we want. Therefore, this is incorrect for numbers where the LSB is already 1.

Conclusion: c) Perform bitwise OR operation with 00000001 is the correct answer because it sets the least significant bit to 1 and leaves the other bits unchanged.`
  },
  {
    "id": "2022A_FE_AM_2",
    "question": "Which of the following is an appropriate explanation of the loss of significance?",
    "options": ["It occurs when the result of an operation exceeds the maximum handle limit and raises an exception.","It occurs when two nearly equal floating-point numbers are subtracted to produce a result of unacceptably reduced significant digits.","It refers to a rounding error that occurs when the part smaller than the least significant digit of the result is rounded off, up, or down in floating-point operations.","It refers to the case when two floating-point numbers are added, but the less significant digits of either one do not affect the result."],
    "correctAnswer": 1,
    "solution": `Loss of significance (also called catastrophic cancellation) happens in numerical computing when subtracting two nearly equal numbers in floating-point arithmetic. This subtraction causes the significant digits in the result to be lost, leaving a result with very few meaningful digits.

a) Describes overflow. Overflow occurs when the result of a computation is too large to be represented in the available number of bits. This raises an exception or error in most systems.

c) Describes rounding error, which happens when the exact result of a floating-point operation cannot be represented in a finite number of digits, so the result is rounded. While related to precision, this is not specifically loss of significance.

d) Describes absorption or precision loss due to addition, where adding a very small number to a much larger number results in the small number having no effect due to the limitations of floating-point precision. This is a different phenomenon than loss of significance caused by subtraction.`
  },
  {
    "id": "2022A_FE_AM_3",
    "question": "When two dice are rolled, what is the probability that the sum of the dice is 5? Here, the two dice are fair and independent.",
    "options": ["$\\frac{1}{18}$","$\\frac{1}{12}$","$\\frac{1}{9}$","$\\frac{1}{6}$"],
    "correctAnswer": 2,
    "solution": `To find the probability that the sum of the dice is 5, we can follow these steps:

1. Find the total possible outcomes:
Each die has 6 faces, so when rolling two dice, the total number of possible outcomes is:
$6 \cdot 6 = 36$

2. Find Favorable Outcomes:
Now, let's list all the possible pairs of dice that sum to 5:
- (1, 4)
- (2, 3)
- (3, 2)
- (4, 1)
So, there are 4 favorable outcomes where the sum of the two dice is 5.

3. Calculate the Probability:
The probability is the ratio of favorable outcomes to the total possible outcomes:
$P(sum~of~5) = \frac{favorable~outcomes}{total~outcomes} = \frac{4}{36} = \frac{1}{9}$

The probability that the sum of the two dice is 5 is $\frac{1}{9}$, so the correct answer is: c) $\frac{1}{9}$.`
  },
  {
    "id": "2022A_FE_AM_4",
    "question": `What is the value of the following arithmetic expression in reverse Polish notation?
9      2      1      +      -      3      *`,
    "options": ["0","4","10","18"],
    "correctAnswer": 3,
    "solution": `If the arithmetic expression is in Reverse Polish Notation (RPN), then the operators come after the operands. Find 2 operands that have an operator after them. Then perform the operation according to the operator. Repeat until you get the result.

Since we get 18 as the result of our arithmetic expression, the answer is d) 18.`
  },
  {
    "id": "2022A_FE_AM_5",
    "question": "What is the Hamming distance of bit strings 10101 and 11110?",
    "options": ["0","2","3","5"],
    "correctAnswer": 2,
    "solution": `Hamming distance is a metric used in information theory and coding theory to measure the difference between two strings of equal length. It is defined as the number of positions at which the corresponding symbols (bits) in the two strings are different.

The Hamming distance between two strings $s_{1}$ and $s_2$ of equal length $n$ is calculated as:
$d(s_{1},s_{2}) = \sum_{i=1}^{n}(s_{1}[i] \neq s_{2}[i])$
where $s_{1}[i]$ and $s_{2}[i]$ are the characters at the $i$-th position of the strings.

To calculate the Hamming distance of bit strings 10101 and 11110:
- 1 vs 1 => same
- 0 vs 1 => different
- 1 vs 1 => same
- 0 vs 1 => different
- 1 vs 0 => different
There are 3 different characters between the two bit strings so the Hamming distance is 3. Therefore, the answer is c.`
  },
  {
    "id": "2022A_FE_AM_6",
    "question": "There are three (3) blue balls and four (4) green balls in a box. When two balls are randomly taken out from the box, what is the probability that both are blue?",
    "options": ["$\\frac{2}{49}$","$\\frac{1}{15}$","$\\frac{1}{7}$","$\\frac{9}{49}$"],
    "correctAnswer": 2,
    "solution": `To find the probability of drawing two blue balls from a box containing three blue balls and four green balls, we can use the following steps:

### 1. Determine the total number of balls
- Number of blue balls: $3$
- Number of green balls: $4$
#### $Total~number~of~balls:~3+4=7$

### 2. Calculate the total ways to choose 2 balls from 7
The total number of ways to choose 2 balls from 7 is given by the combination formula $\binom{n}{k}$, which represents choosing $k$ items from $n$ items without regard to the order.
#### $Total~Ways=\binom{7}{2} = \frac{7~\cdot~6}{2~\cdot~1}=21$

### 3. Calculate the ways to choose 2 blue balls from 3
Now, we calculate the number of ways to choose 2 blue balls from the 3 available:
#### $Ways~to~choose~2~blue~balls=\binom{3}{2}=\frac{3~\cdot~2}{2~\cdot~1} = 3$

### 4. Calculate the probability
The probability PPP of both balls being blue is the ratio of the number of favorable outcomes (choosing 2 blue balls) to the total outcomes (choosing any 2 balls):
#### $P(both~blue)=\frac{Ways~to~choose~2~blue~balls}{Total~Waysto~choose~2~blue~balls}=\frac{3}{21}=\frac{1}{7}$

The probability that both balls drawn are blue is $\frac{1}{7}$. Therefore, the answer is **c**.`
  },
  {
    "id": "2022A_FE_AM_7",
    "question": "Five (5) characters, A, C, K, S, and T, are input in this order. When using stacks, what is the minimum number of stacks required to rearrange the characters and output S, T, A, C, and K, in this order? Here, when a pop operation is performed for any stack, the popped character always becomes an output. Also, characters cannot be moved between stacks.",
    "options": ["1","2","3","4"],
    "correctAnswer": 2,
    "solution": `To determine the minimum number of stacks required to rearrange the characters A, C, K, S, and T into the output order S, T, A, C, and K using stacks, we need to analyze the properties of stacks and how they operate.
### Stack Properties:
1. **LIFO Structure**: Stacks operate on a Last In, First Out (LIFO) principle. This means the last element added to the stack will be the first one to be removed.
2. **Single Movement**: Once an element is in a stack, it cannot be moved to another stack. It can only be popped from its current stack.

Push A to Stack #1, C to Stack #2, K to Stack #3, S to Stack #1 then T to Stack #2.
stack1 = [A, S]
stack2 = [C, T]
stack3 = [K]
Then pop in this specific order:
stack1, stack2, stack1, stack2, stack3

You should be able to print S, T, A, C, and K in this order.

Since we used a minimum of 3 stacks, the answer is **c**.`
  },
  {
    "id": "2022A_FE_AM_8",
    "question": "When a two-dimensional array A(5,5) is mapped to computer memory (i.e. a one-dimensional array) in row-major (row-directional) order or column-major (column-directional) order, how many elements occupy the same memory addresses in both cases? Here, the first element A(1,1) is mapped to the same starting memory address in either case.",
    "options": ["2","3","4","5"],
    "correctAnswer": 3,
    "solution": `In a 5x5 array, the same address means that the row and column of the array index are of equal value. To visualize:
![Image](Files/Pasted%20image%2020241017231141.png)

There are 5 same addresses in the 5x5 array. So the answer is **d**.`
  },
  {
    "id": "2022A_FE_AM_9",
    "question": "Which of the following characterizes the hash method in table search?",
    "options": ["It determines the storage location using a function of a key.","It is a method that avoids collisions among storage locations.","It is one of the methods that use a binary tree.","It takes time almost proportional to the table size for searching."],
    "correctAnswer": 0,
    "solution": `Hashing uses a hash function to convert a key into an index in a hash table. The hash function takes the key as input and produces a hash code, which is then used to determine the location where the corresponding value will be stored. Therefore the closest answer is **a**.

**b)** While hashing aims to minimize the number of collisions (when two different keys hash to the same index), it cannot entirely avoid them due to the limited number of available storage locations compared to the potentially infinite number of keys. Instead, hash tables implement strategies (such as chaining or open addressing) to handle collisions when they occur.

**c)** Hashing and binary trees are different data structures used for searching and storing data. Binary trees, particularly binary search trees (BST), organize data in a hierarchical manner and allow for ordered retrieval. Hashing, on the other hand, relies on hash tables and does not use tree structures to store data.

**d)** The average-case time complexity for searching in a well-designed hash table is **constant time**, denoted as $O(1)$, rather than being proportional to the size of the table. However, in the worst case (e.g., when many collisions occur), the time complexity can degrade to $O(n)$, where $n$ is the number of elements stored in the hash table. Nonetheless, a good hash function and collision resolution strategy typically keep search times close to constant.`
  },
  {
    "id": "2022A_FE_AM_10",
    "question": "Which of the following is a technology used to provide dynamic UI contents without reloading the entire web page by using an asynchronous communication feature of JavaScript?",
    "options": ["Ajax","CSS","RSS","SNS"],
    "correctAnswer": 0,
    "solution": `Ajax is a set of web development techniques that allow for asynchronous communication between the client and server. It enables web pages to update dynamically by retrieving data from the server without needing to reload the entire page. Therefore, the answer is **a**.

**b)** Cascading Style Sheets (CSS) is a stylesheet language used for describing the presentation of a document written in HTML or XML. It does not provide any dynamic content loading capabilities or asynchronous communication.

**c)** Really Simple Syndication (RSS) is a web feed format used for delivering regularly changing web content, such as news articles or blog posts. It is not related to dynamic content updates on a web page without reloading.

**d)** Social Networking Service (SNS) refers to platforms and services that enable users to create and share content or participate in social networking. While they may use technologies like Ajax for dynamic content, SNS itself is not a technology for asynchronous communication.`
  },
  {
    "id": "2022A_FE_AM_11",
    "question": "There is a 32-bit microprocessor with 32-bit external data bus, driven by 64 MHz input clock, and the processor takes 8 input clock cycles to complete 1 bus cycle. What is the theoretical maximum data transfer rate in megabytes per second (MB/s) for the external data bus of the processor?",
    "options": ["3","32","256","320"],
    "correctAnswer": 1,
    "solution": `To determine the theoretical maximum data transfer rate for the 32-bit microprocessor with a 32-bit external data bus, we can follow these steps:

### Given:
- Input Clock Frequency: 64 MHz
- Clock Cycles per Bus Cycle: 8 cycles
- Data Bus Width: 32 bits

### Steps to Calculate Maximum Data Transfer Rate:

#### 1. Determine the Bus Cycle Frequency:

Bus Cycle Frequency = Input Clock Frequency / Clock Cycles Per Bus Cycle = 64 MHz / 8 = 8 MHz

#### 2. Calculate Data Transfer per Bus Cycle:

Data Transfer Per Bus Cycle = 32 bits * 1 byte / 8 bits = 4 bytes

#### 3. Calculate Theoretical Maximum Data Transfer Rate:

Data Transfer Rate = Bus Cycle Frequency * Data Transfer Per Bus Cycle = 8 MHz * 4 bytes = 32 MB/s

### Conclusion:
The theoretical maximum data transfer rate for the external data bus of the processor is 32 MB/s. Therefore, the answer is b.`
  },
  {
    "id": "2022A_FE_AM_12",
    "question": "There is a computer that has an average instruction execution time of 20 nanoseconds. What is the performance of this computer in MIPS?",
    "options": ["5","10","20","50"],
    "correctAnswer": 3,
    "solution": `To calculate the performance of the computer in MIPS (Million Instructions Per Second), we can use the following formula:

MIPS = 1 / (Average Instruction Time In Seconds * 10^6)

### Given:
- Average Instruction Execution Time = 20 nanoseconds = 20 * 10^-9 seconds

### Calculate the MIPS:

MIPS = 1 / (20 * 10^-9 secs * 10^6) = 50 MIPS

### Conclusion:
The performance of the computer is 50 MIPS. Therefore, the answer is d.`
  },
  {
    "id": "2022A_FE_AM_13",
    "question": "There is a disk drive that has a capacity of 8 GB. The drive has five (5) platters with two (2) surfaces: 10,000 tracks per surface and 200 sectors per track. How many bytes are in each sector? Here, 1 GB is 1,000,000,000 bytes.",
    "options": ["100","200","400","800"],
    "correctAnswer": 2,
    "solution": `To determine how many bytes are in each sector, we can break down the problem using the provided information and perform the following calculations:

### Given:
- Disk capacity: 8 GB = 8,000,000,000 bytes (since 1 GB = 1,000,000,000 bytes)
- Number of platters: 5
- Number of surfaces per platter: 2 (so there are 5 * 2 = 10 surfaces)
- Number of tracks per surface: 10,000
- Number of sectors per track: 200

### Step-by-step calculation:

#### 1. Calculate the total number of sectors on the disk:

Each surface has:

10,000 tracks * 200 sectors per track = 2,000,000 sectors per surface

Since there are 10 surfaces:

2,000,000 sectors per surface * 10 surfaces = 20,000,000 sectors

#### 2. Calculate the number of bytes per sector:

8,000,000,000 bytes / 20,000,000 sectors = 400 bytes per sector

### Conclusion:
Each sector contains 400 bytes. Therefore, the answer is c.`
  },
  {
    "id": "2022A_FE_AM_14",
    "question": "Which of the following is a memory device that stores programs or data in factories and only has the read operation for the stored programs or data?",
    "options": ["DRAM","Flash Memory","Mask ROM","SRAM"],
    "correctAnswer": 2,
    "solution": `Mask ROM is a type of non-volatile memory that is programmed during the manufacturing process (in factories). Once the data or programs are written into Mask ROM, they cannot be altered or erased. The only operation allowed is reading the data. This is typically used for permanent data storage like firmware in devices. Therefore, c is the correct answer.

- DRAM is a type of volatile memory, meaning it requires power to maintain its data. It is used as the main memory in computers and can be both read and written to. DRAM is not pre-programmed and does not store data permanently.

- Flash memory is non-volatile memory, meaning it retains data even when power is removed. It can be read and written to multiple times. It is commonly used in USB drives, SSDs, and memory cards. Flash memory can be rewritten, so it is not limited to the read operation.

- SRAM is another type of volatile memory used in cache memory in computers. It can be read and written to, and it loses data when power is turned off. Like DRAM, it is not factory-programmed.`
  },
  {
    "id": "2022A_FE_AM_15",
    "question": `An information processing system consists of a database and web server with the specifications shown in the table below:

![Image](Files/Pasted%20image%2020241018163139.png)

When the throughput of an entire processing system is determined by the throughput of the server with the lowest throughput, what is the throughput of the entire processing system in TPS (transactions per second)? Here, the throughput of a server is calculated by multiplying the number of transactions in a second with the upper limit of CPU utilization. A database and web server perform the processing independently, and there is one CPU in each server.`,
    "options": ["160","225","250","385"],
    "correctAnswer": 0,
    "solution": `To calculate the throughput of the database server in transactions per second (TPS), use the following formula:

Throughput (TPS) = 1 / (Processing time per transaction (in seconds)) * CPU utilization

First, convert milliseconds to seconds:
1 ms = 0.001 secs

### Calculate the throughput of the database and the web server:

Throughput (Database) = 1 / (0.005 secs) * 80% = 160 TPS

Throughput (Web Server) = 1 / (0.004 secs) * 90% = 225 TPS

### Conclusion:
The throughput of the entire processing system is determined by the server with the lowest throughput, which in this case is the database server with 160 TPS. Therefore, the throughput of the entire processing system is 160 TPS, so the correct answer is: a) 160.`
  },
  {
    "id": "2022A_FE_AM_16",
    "question": `Which of the following is the approximate availability of the entire system in the figure below? The availability is calculated by rounding off to two decimal places. The numeric value within parentheses is the availability of each device, and the system is available when two or more of the devices connected in parallel are operating in the left part (device 1 to 3) and one or more of the devices connected in parallel is operating in the right part (device 4 to 5).
![Image](Files/Pasted%20image%2020241018171532.png)`,
    "options": ["0.65","0.81","0.94","0.99"],
    "correctAnswer": 2,
    "solution": `To solve this problem, we need to calculate the overall system availability based on the given devices and their availability. The system is made up of two parts:

- **Left part (Devices 1, 2, and 3)**: The system is available if **two or more** devices are working.
- **Right part (Devices 4 and 5)**: The system is available if **one or more** devices are working.

### **Step-by-step process:**

#### **1. Calculate the availability for the left part (Devices 1, 2, and 3):**
We first calculate the probability that all three devices fail:
$P(\text{all fail}) = (1 - 0.9) \times (1 - 0.8) \times (1 - 0.9) = 0.1 \times 0.2 \times 0.1 = 0.002$

Next, we calculate the probability that exactly one device is working (causing the system to fail):
$P(\text{only Device 1}) = 0.9 \times (1 - 0.8) \times (1 - 0.9) = 0.9 \times 0.2 \times 0.1 = 0.018$
$P(\text{only Device 2}) = (1 - 0.9) \times 0.8 \times (1 - 0.9) = 0.1 \times 0.8 \times 0.1 = 0.008$
$P(\text{only Device 3}) = (1 - 0.9) \times (1 - 0.8) \times 0.9 = 0.1 \times 0.2 \times 0.9 = 0.018$

Thus, the total probability of failure of two or more devices is:
$P(\text{left part unavailable}) = 0.002 + 0.018 + 0.008 + 0.018 = 0.046$
Therefore, the availability of the left part is:
$P(\text{left part available}) = 1 - 0.046 = 0.954$

#### **2. Calculate the availability for the right part (Devices 4 and 5):**
For the right part, the system is available if at least one device is working. The probability that both fail is:
$P(\text{both fail}) = (1 - 0.9) \times (1 - 0.9) = 0.1 \times 0.1 = 0.01$
Thus, the availability of the right part is:
$P(\text{right part available}) = 1 - 0.01 = 0.99$

#### **3. Calculate the overall system availability:**
The overall system availability is the product of the availabilities of the left and right parts:
$\text{System availability} = P(\text{left part available}) \times P(\text{right part available}) = 0.954 \times 0.99 = 0.94446$

### **Conclusion:**
The system availability is $0.94446$. Since **c** has the closest answer, it is the correct choice.`
  },
  {
    "id": "2022A_FE_AM_17",
    "question": `On a computer with virtual memory, the number of blocks in real memory is three (3). One of the two (2) algorithms of FIFO and LFU (least frequently used) is used for selecting the page to be removed from real memory. When five (5) pages are referenced in the page-reference sequence shown below as a string, which of the following is an appropriate combination of the number of page fault operations for each algorithm? Here, the three (3) blocks in the real memory are initially empty.

![Image](Files/Pasted%20image%2020241018172126.png)`,
    "options": ["A","B","C","D"],
    "correctAnswer": 3,
    "solution": `FIFO (First-In-First-Out)
- Reference 1: **Page fault** (load 1) - Memory: [1]
- Reference 3: **Page fault** (load 3) - Memory: [1, 3]
- Reference 2: **Page fault** (load 2) - Memory: [1, 3, 2]
- Reference 1: No page fault (1 is already in memory) - Memory: [1, 3, 2]
- Reference 4: **Page fault** (replace 1 with 4) - Memory: [4, 3, 2]
- Reference 5: **Page fault** (replace 3 with 5) - Memory: [4, 5, 2]
- Reference 2: No page fault (2 is already in memory) - Memory: [4, 5, 2]
- Reference 3: **Page fault** (replace 2 with 3) - Memory: [4, 5, 3]
- Reference 4: No page fault (4 is already in memory) - Memory: [4, 5, 3]
- Reference 5: No page fault (5 is already in memory) - Memory: [4, 5, 3]

**Total Page Faults for FIFO**: **6**

LFU (Least Frequently Used)
- Reference 1: Page fault (load 1) - Memory: [1], Frequency: {1: 1}
- Reference 3: Page fault (load 3) - Memory: [1, 3], Frequency: {1: 1, 3: 1}
- Reference 2: Page fault (load 2) - Memory: [1, 3, 2], Frequency: {1: 1, 3: 1, 2: 1}
- Reference 1: No page fault (1 is already in memory) - Memory: [1, 3, 2], Frequency: {1: 2, 3: 1, 2: 1}
- Reference 4: Page fault (remove 3, which has the lowest frequency) - Memory: [1, 2, 4], Frequency: {1: 2, 2: 1, 4: 1}
- Reference 5: Page fault (remove 2, which has the lowest frequency) - Memory: [1, 4, 5], Frequency: {1: 2, 4: 1, 5: 1}
- Reference 2: Page fault (remove 4, which has the lowest frequency) - Memory: [1, 5, 2], Frequency: {1: 2, 5: 1, 2: 1}
- Reference 3: Page fault (remove 5, which has the lowest frequency) - Memory: [1, 2, 3], Frequency: {1: 2, 2: 2, 3: 1}
- Reference 4: Page fault (remove 3, which has the lowest frequency) - Memory: [1, 2, 4], Frequency: {1: 2, 2: 2, 4: 1}
- Reference 5: Page fault (remove 4, which has the lowest frequency) - Memory: [1, 2, 5], Frequency: {1: 2, 2: 2, 5: 1}

**Total Page Faults for LFU**: **9**

Therefore, the correct answer is **6 and 9**.`
  },
  {
    "id": "2022A_FE_AM_18",
    "question": `In an OS, task scheduling is performed by the priority order method. The table below shows the priorities for three (3) tasks A to C and the execution sequence and execution time of the CPU and I/O device for the tasks when each task is executed individually. What is the idle time of the CPU in milliseconds from the time when the three (3) tasks are set to the ready state to the time when the execution of all of the tasks is finished? Here, there is one (1) CPU, the CPU consists of one (1) core, there is no I/O contention, and no overhead of the OS is considered. In the table below, the numbers in parentheses indicate the execution time for each operation.
![Image](Files/Pasted%20image%2020241018191032.png)`,
    "options": ["2","3","4","5"],
    "correctAnswer": 1,
    "solution": `Idle time of the CPU refers to the timeframe where the CPU is not in use. To answer this question, we have to visualize the execution sequence of the Operating System.

![Image](Files/Pasted%20image%2020241018193008.png)

The CPU has an idle time of 2 + 1 = 3 ms so the answer is **b) 3 ms**.`
  },
  {
    "id": "2022A_FE_AM_19",
    "question": "Which of the following is the standard API (Application Programming Interface) used by a Java application to access a database?",
    "options": ["HTML","Java VM","JDBC","SQL"],
    "correctAnswer": 2,
    "solution": `Java Database Connectivity (JDBC) is the standard API in Java for connecting and executing queries with a database. It provides methods to query and update data in a database. Therefore, the answer is **c) JDBC**.

**a) HTML**: Hypertext Markup Language (HTML) is used for creating and structuring content on the web. It does not provide an interface for database access.

**b) Java VM**: The Java Virtual Machine (JVM) is an environment that allows Java bytecode to be executed. It is not an API for database access.

**d) SQL**: Structured Query Language (SQL) is a language used for managing and manipulating databases. While SQL is often used within JDBC to perform database operations, it is not an API itself.`
  },
  {
    "id": "2022A_FE_AM_20",
    "question": `A half adder is a logic circuit that performs the addition of two single-bit binary numbers and outputs the sum and carry. The truth table of a half adder is shown in the table below. Which of the following is an appropriate logic diagram of the half adder?
![Image](Files/Pasted%20image%2020241018200734.png)
![Image](Files/Pasted%20image%2020241018200748.png)`,
    "options": ["A","B","C","D"],
    "correctAnswer": 2,
    "solution": `To design a half adder logic circuit based on the provided truth table, we can summarize the output conditions:

**Sum (S)**: This output is true (1) when exactly one of the inputs (A or B) is true. This can be expressed as the XOR operation:
$S = A\oplus B$

**Carry (C)**: This output is true (1) only when both inputs are true. This can be expressed as the AND operation:
$C = A \cdot B$

The logic diagram for a half adder can be constructed using:
- **XOR Gate** for the Sum (S) output
- **AND Gate** for the Carry (C) output

### Conclusion:
The answer to the question is **c)**.`
  },
  {
    "id": "2022A_FE_AM_21",
    "question": "By using a sensor that detects changes in shape, the condition of infrastructure such as elevated highways can be monitored and maintained. Which of the following is a sensor that is used for this purpose?",
    "options": ["Gyro","Hall Element","Strain Gage","Thermistor"],
    "correctAnswer": 2,
    "solution": `A **strain gage** measures the amount of deformation (strain) in an object when a force is applied. This makes it highly effective for monitoring the structural integrity of infrastructure, as it can detect changes in shape due to stress or strain. Therefore, the answer is **c)**.

**a) Gyro**: A gyroscope measures angular velocity and orientation, which is useful for navigation and stability control but not for detecting changes in shape.

**b) Hall element**: Hall effect sensors detect magnetic fields and are commonly used for position sensing and current measurement but are not designed for monitoring structural changes.

**d) Thermistor**: A thermistor is a temperature-sensitive resistor used to measure temperature changes. While it can monitor thermal conditions, it does not detect changes in shape or deformation.`
  },
  {
    "id": "2022A_FE_AM_22",
    "question": "Which of the following uses a flip-flop circuit in a memory cell?",
    "options": ["DRAM","EEPROM","SDRAM","SRAM"],
    "correctAnswer": 3,
    "solution": `The memory type that uses a flip-flop circuit in its memory cell is: **d) SRAM**

**a) DRAM (Dynamic Random Access Memory)**: DRAM uses capacitors to store bits of data, which must be refreshed periodically to maintain the stored information. It does not use flip-flops.

**b) EEPROM (Electrically Erasable Programmable Read-Only Memory)**: EEPROM uses a different technology for storing data, typically involving floating-gate transistors, but does not utilize flip-flops.

**c) SDRAM (Synchronous Dynamic Random Access Memory)**: SDRAM is a type of DRAM that is synchronized with the system clock but still relies on capacitors for data storage, not flip-flops.`
  },
  {
    "id": "2022A_FE_AM_23",
    "question": `For a given decimal data, the check digit is calculated with the method below and is appended to the original data. When the given data is 7394, what is the result? Here, the weight is 1234 and the base number is 11. 
- (1) For each digit of the data, calculate the product with the digit at the same radix of the weight and calculate the sum of these products. 
- (2) Calculate the remainder after the division of the sum by the base number. 
- (3) Subtract the remainder from the base number and let the last digit of the result be the check digit.`,
    "options": ["73940","73941","73944","73947"],
    "correctAnswer": 0,
    "solution": `To find the check digit for the given decimal data 7394 using the specified method, we will follow the steps outlined:

#### **Given:**
- Data: **7394**
- Weight: **1234**
- Base Number: **11**

### **1. Calculate the sum of products**
For each digit of the data, we calculate the product with the corresponding weight:
#### $7~\cdot~1 = 7$
#### $3~\cdot~2 = 6$
#### $9~\cdot~3 = 27$
#### $4~\cdot~4 = 16$

Sum the products
#### $7+6+27+16=56$
### **2. Calculate the remainder**
Now we calculate the remainder when the sum is divided by the base number (11):
#### $56~\text{mod}~11 =1$
### **3. Calculate the check digit**
Next, we subtract the remainder from the base number and take the last digit of the result:
#### $11-1=10$
The last digit of 10 is 0, which means the check digit is 0.

### **Conclusion:**
Appending the check digit to the original data gives:
#### $7394~\text{becomes}~73940$
Therefore, the answer is **a**).`
  },
  {
    "id": "2022A_FE_AM_24",
    "question": "Which of the following is the most appropriate explanation of augmented reality (AR)?",
    "options": ["By appealing to the five senses through equipment, such as a head-mounted display, a person can experience locations or worlds that do not exist as if they were real.","By constructing a 3D virtual space that is natural to humans and changing the virtual space in accordance with a person’s movement, he or she can feel as if he or she were in that place.","By seamlessly interweaving computer-generated information with the physical world, the viewer can perceive it as an immersive aspect of the real environment.","By viewing a video recorded in the past, the viewer can feel as if he or she were in that era and at that location."],
    "correctAnswer": 2,
    "solution": `**AR** overlays digital content onto the real world, allowing users to interact with both simultaneously. It creates an **immersive experience** by **blending the virtual and physical environments.** Choice **c)** accurately describes **AR** so it is correct.

**a)** Describes a virtual reality (VR) experience more than augmented reality. AR typically overlays digital information onto the real world rather than creating entirely new worlds.

**b)** This description also leans more toward virtual reality. While AR may involve spatial awareness, it doesn't create an entirely separate 3D space; rather, it enhances the existing physical space.

**d)** This statement does not accurately define augmented reality. It describes a viewing experience that is more akin to nostalgia or historical representation rather than the interactive overlay characteristic of AR.`
  },
  {
    "id": "2022A_FE_AM_25",
    "question": "Which of the following is an appropriate description of the mapping between a relational model and relational database as its implementation?",
    "options": ["A domain is mapped to a character type or a character string type.","A relation is mapped to a table.","Attributes and columns are ordered from left to right.","Neither tuples nor rows have duplicates."],
    "correctAnswer": 1,
    "solution": `In relational databases, a **relation** in the relational model is implemented as a **table**. A relation represents a set of tuples, and a table holds rows of data that correspond to those tuples. Therefore, **b)** is correct.

**a)** This is incorrect because a domain in a relational model refers to the set of possible values an attribute can take. It can be mapped to various data types, not just character or string types (it could also be integers, floats, etc.).

**c)** This is incorrect because attributes (columns) in a relation are **unordered**. Their physical placement (left to right) in a table doesn't affect their meaning or the integrity of the relation.

**d)** This is incorrect for rows in a relational database. While in theory, a relation should not have duplicate tuples, many relational databases allow duplicate rows unless constraints like **primary keys** or **unique constraints** are explicitly enforced.`
  },
  {
    "id": "2022A_FE_AM_26",
    "question": "In a relational database, which of the following is an appropriate purpose for defining a foreign key?",
    "options": ["To prevent fragmentation in the record storage area due to the repeated deletion and insertion of records","To provide a constraint to maintain referential consistency between the records of related tables","To restore as many records as possible when they are damaged by failure, based on the mutual relationship between tables","To speed up the searching and updating of related tables by storing them closer together"],
    "correctAnswer": 1,
    "solution": `A foreign key is used to ensure that a relationship between two tables is consistent. It prevents actions that would break the link, such as inserting a record with a foreign key that doesn't exist in the related table or deleting a referenced record. Therefore, the appropriate purpose for defining a foreign key in a relational database is:

b) To provide a constraint to maintain referential consistency between the records of related tables.

Explanation for other options:

a) This is incorrect. Preventing fragmentation in the storage area is typically handled by physical database maintenance activities, such as reindexing or database compaction, and is unrelated to the concept of foreign keys.

c) This is incorrect. Restoring records after failure is typically handled by backup and recovery systems, not by foreign key constraints.

d) This is incorrect. While related tables might benefit from optimization techniques (such as indexing), the foreign key constraint itself does not directly speed up searches or updates. Its primary role is to maintain referential integrity, not performance optimization.`
  },
  {
    "id": "2022A_FE_AM_27",
    "question": `In the process of table implementation, which of the following is an appropriate SQL statement that removes a column in an existing table?
![Image](Files/Pasted%20image%2020241018205416.png)`,
    "options": ["A","B","C","D"],
    "correctAnswer": 1,
    "solution": `The ALTER TABLE command with the DROP COLUMN clause is the standard SQL syntax for removing a column from an existing table. Therefore, the answer is b).

Explanation for other options:

a) This is incorrect. SQL does not use the DELETE COLUMN syntax for removing a column.

c) This is incorrect. The UPDATE command is used to modify data in existing rows, not to alter the structure of a table. There is no DELETE COLUMN syntax in SQL.

d) This is incorrect. Similar to option c, the UPDATE command is not used for altering table structure, and DROP COLUMN cannot be used with UPDATE.`
  },
  {
    "id": "2022A_FE_AM_28",
    "question": "Which of the following is the purpose of setting an index in the columns of the table of a relational database?",
    "options": ["To enable efficient access to the storage location of data so that the search speed can be improved","To ensure that no value is duplicated in a column","To match the value of the column of the foreign key with the value of the primary key of another table","To save disk space when a single large table is distributed and saved on several disks"],
    "correctAnswer": 0,
    "solution": `An index is used to improve the performance of data retrieval operations by allowing the database to locate rows more quickly, thus improving the search speed. Since a) accurately describes the purpose of setting an index, it is correct.

Explanation for other options:

b) This is incorrect. While unique constraints or primary keys ensure that no value is duplicated, this is not the purpose of setting an index. An index may be created on unique columns, but it doesn't ensure uniqueness on its own.

c) This is incorrect. Foreign key constraints are used to maintain referential integrity between tables, not indexes. Indexes are primarily focused on speeding up data retrieval.

d) This is incorrect. Indexes typically do not save disk space; they actually consume additional disk space because they store a separate data structure for faster access. Partitioning is the mechanism used to distribute a large table across multiple disks, not indexing.`
  },
  {
    "id": "2022A_FE_AM_29",
    "question": `In a company, the received-orders are monitored monthly based on the customer file, product file, person-in-charge file, and the current month’s received-orders file. When the items of each file are as shown in the table below, which of the following can be retrieved for the received orders of current month and the three (3) previous months using the four (4) files?

![Image](Files/Pasted%20image%2020241018210603.png)`,
    "options": ["Customer-wise received orders by product","Customer-wise received orders by the person in charge","Person-in-charge-wise received orders by product","Product-wise received orders by customer"],
    "correctAnswer": 1,
    "solution": `The Customer file links each customer to a specific person-in-charge through the person-in-charge code. The Current month's received orders file provides information on received orders, mapped to the customer through the customer code. By joining these two files, you can retrieve the received orders for the current month and the previous three months, organized by customer and the person-in-charge.

So, with the data structure presented, you can retrieve the orders for each customer, categorized by the person responsible for them.`
  },
  {
    "id": "2022A_FE_AM_30",
    "question": `In an IP network consisting of four (4) hosts, two (2) L2 switches, and a router shown below, a packet is transmitted from PC01 to PC03. Which of the following is an appropriate combination of the source and destination addresses of this packet when it leaves Switch1?

![Image](Files/Pasted%20image%2020241018211640.png)

![Image](Files/Pasted%20image%2020241018211703.png)`,
    "options": ["A","B","C","D"],
    "correctAnswer": 1,
    "solution": `To determine the appropriate combination of source and destination addresses when a packet is transmitted from PC01 to PC03, we need to analyze the network configuration provided in the diagram.

Here’s the breakdown of the correct address combination when the packet leaves Switch1:

- Source IP: The source IP will remain 192.168.1.31 (PC01's IP address) because the IP addresses do not change as the packet moves between devices.
- Destination IP: The destination IP will remain 192.168.2.31 (PC03's IP address) because that's where the packet is ultimately heading.
- Source MAC: The source MAC address will be that of PC01, which is aa:aa:aa:aa:aa.
- Destination MAC: Since the packet is heading toward the router to reach another subnet, the destination MAC address will be the MAC of the router's Port 01 interface, which is cc:cc:cc:cc:cc.

Therefore, the answer is a) as it has the appropriate combination of the source and destination addresses of the packet when it leaves Switch1.`
  },
  {
    "id": "2022A_FE_AM_31",
    "question": "Which of the following is a TCP/IP protocol that is used to find the corresponding MAC address from an IP address?",
    "options": ["ARP","ICMP","IP","RARP"],
    "correctAnswer": 0,
    "solution": `ARP is used to find the corresponding MAC address for a given IP address in a local network. It operates by sending a request to all devices on the network, asking who owns the specific IP address, and the device with that IP address responds with its MAC address. Therefore, the answer is a).

Explanation for other options:

b) ICMP (Internet Control Message Protocol): Used for sending error messages and operational information, such as with the ping command.

c) IP (Internet Protocol): Responsible for delivering packets from the source host to the destination host based on IP addresses.

d) RARP (Reverse Address Resolution Protocol): Used to find an IP address from a given MAC address, which is the reverse process of ARP. However, it is rarely used now.`
  },
  {
    "id": "2022A_FE_AM_32",
    "question": "Which of the following is the subnet mask corresponding to an IP address in slash notation, 192.168.22.31/27?",
    "options": ["255.255.255.192","255.255.255.224","255.255.255.248","255.255.255.252"],
    "correctAnswer": 1,
    "solution": `The notation /27 indicates that the first 27 bits of the IP address are used for the network portion, and the remaining 5 bits are for the host portion.

A subnet mask represents the network portion with 1's and the host portion with 0's. For a /27 subnet, the subnet mask would be:
11111111.11111111.11111111.11100000

Converting the binary value 11100000 to decimal gives 224, so the full subnet mask is:
255.255.255.224

Thus, the subnet mask corresponding to 192.168.22.31/27 is 255.255.255.224. Therefore, the answer is b).`
  },
  {
    "id": "2022A_FE_AM_33",
    "question": "Which of the following protocol supports the congestion control feature?",
    "options": ["ARP","ICMP","TCP","UDP"],
    "correctAnswer": 2,
    "solution": `TCP (Transmission Control Protocol) supports congestion control as part of its reliable data transfer mechanism. It adjusts the rate of data transmission based on network conditions to avoid overwhelming the network, using techniques like slow start, congestion avoidance, and fast recovery. Therefore, the answer is c).

Explanation for other options:

a) ARP (Address Resolution Protocol): Used to map IP addresses to MAC addresses; does not deal with congestion control.

c) ICMP (Internet Control Message Protocol): Used for sending error messages and operational information, like 'ping,' but doesn't handle congestion control.

d) UDP (User Datagram Protocol): A simpler, connectionless protocol that does not include congestion control mechanisms.`
  },
  {
    "id": "2022A_FE_AM_34",
    "question": "Which of the following is a global IPv4 address?",
    "options": ["10.10.10.10","129.10.9.7","172.16.1.5","192.168.20.3"],
    "correctAnswer": 1,
    "solution": `Global IP addresses are used on the public internet and are unique across the globe, whereas private IP addresses are used within local networks and are not routable on the public internet.

- 10.10.10.10: This belongs to the private IP address range 10.0.0.0 - 10.255.255.255.
- 172.16.1.5: This is part of the private IP address range 172.16.0.0 - 172.31.255.255.
- 192.168.20.3: This is part of the private IP address range 192.168.0.0 - 192.168.255.255.
- 129.10.9.7: This is a public (global) IP address because it does not fall within any of the private IP address ranges.
Therefore, the answer is b).`
  },
  {
    "id": "2022A_FE_AM_35",
    "question": "The three properties of information security are confidentiality, integrity, and availability. Which of the following is an attack on integrity?",
    "options": ["DDoS","Phishing","Shoulder surfing","Website defacement"],
    "correctAnswer": 3,
    "solution": `Website defacement is an attack on integrity, as it involves unauthorized modification of the content on a website, altering its information or appearance without permission.

- DDoS (Distributed Denial of Service) is an attack on availability, as it aims to overwhelm a system and make it unavailable to users.
- Phishing is primarily an attack on confidentiality, as it attempts to steal sensitive information like usernames, passwords, or financial details.
- Shoulder surfing is also an attack on confidentiality, as it involves observing someone's private information without their consent (e.g., by looking over their shoulder).
Since the question asks which of the choices is an attack on integrity, the answer is d).`
  },
  {
    "id": "2022A_FE_AM_36",
    "question": "When a system with a database is being developed, a security requirement states that the data must be encrypted with a key before being saved to the database, and the same key is required for decryption when the data is being read. Which of the following is an appropriate algorithm that can be used to satisfy the security requirement?",
    "options": ["AES","Diffie-Hellman","RSA","SHA-256"],
    "correctAnswer": 0,
    "solution": `AES (Advanced Encryption Standard) is a symmetric encryption algorithm, meaning the same key is used for both encryption and decryption, which matches the requirement stated (using the same key for both operations).

Explanation for other options:

b) Diffie-Hellman is a key exchange algorithm, used to securely exchange cryptographic keys over a public channel, but it is not used for encrypting and decrypting data directly.

c) RSA is an asymmetric encryption algorithm, which uses a pair of keys (public and private) for encryption and decryption. This does not satisfy the requirement of using the same key for both operations.

d) SHA-256 is a hashing algorithm, used to produce a fixed-length output (hash) from input data. Hashing is a one-way process, and it's not suitable for encrypting and decrypting data.`
  },
  {
    "id": "2022A_FE_AM_37",
    "question": "Which of the following is a cyber-attack that redirects a victim to a fake website by manipulating DNS to obtain personal information from the victim?",
    "options": ["Pharming","Phishing","Spamming","Trojan horse"],
    "correctAnswer": 0,
    "solution": `Pharming is a type of cyber-attack that redirects users to a fake website by altering the DNS (Domain Name System) or exploiting vulnerabilities, even if the correct website address is entered. The goal is to steal personal information, such as login credentials or financial details, by tricking users into believing they are on a legitimate site.

Explanation for other options:

b) Phishing involves tricking victims through deceptive emails or messages into voluntarily clicking a link or entering their information on a fake website.

c) Spamming refers to sending unsolicited messages, usually in bulk, often for advertising purposes.

d) Trojan horse is malicious software disguised as legitimate software, allowing attackers to gain unauthorized access to a victim's system.`
  },
  {
    "id": "2022A_FE_AM_38",
    "question": "When security risk management processes incorporate the approach of the PDCA (Plan, Do, Check, Act) cycle, which of the following is a process that belongs to Act?",
    "options": ["Establish a security policy and develop a security risk management plan.","Implement the security risk management plan.","Maintain and improve the security risk management plan by learning from incidents.","Monitor the security risks as planned in the risk management plan."],
    "correctAnswer": 2,
    "solution": `In the PDCA (Plan, Do, Check, Act) cycle, the stages are defined as follows:

- Plan: Establish objectives, policies, and processes. In this context, it involves establishing a security policy and developing a security risk management plan. (Related to option a)

- Do: Implement what was planned. In this case, it refers to executing the security risk management plan. (Related to option b)

- Check: Monitor and evaluate the results against the plan to ensure that objectives are being met. In this context, it involves monitoring the security risks as planned. (Related to option d)

- Act: Based on the results of the 'Check' phase, take corrective actions to continuously improve. This includes maintaining and improving the plan by learning from incidents and making necessary adjustments. (Related to option c)

Thus, the process of maintaining and improving based on feedback belongs to the Act phase.`
  },
  {
    "id": "2022A_FE_AM_39",
    "question": "Which of the following is the protocol that is used together with HTTP in HTTPS?",
    "options": ["SHA","SSH","TLS","VPN"],
    "correctAnswer": 2,
    "solution": `TLS is the protocol that encrypts HTTP traffic to create HTTPS (HTTP Secure). It ensures the security of data transmitted over the internet by providing encryption, authentication, and integrity checks. TLS is a successor to SSL (Secure Sockets Layer) and is widely used in secure communications. Therefore, the answer is c).

Explanation for other options:

a) Secure Hash Algorithm (SHA) is a family of cryptographic hash functions used to ensure data integrity. While it plays a role in secure communications, it is not a protocol and does not directly function as the underlying protocol for HTTPS.

b) Secure Shell (SSH) is a protocol used for secure remote login and other secure network services over an unsecured network. Although it provides secure communication, it is not used in conjunction with HTTP to create HTTPS.

d) A Virtual Private Network (VPN) creates a secure connection over a less secure network, such as the internet, but it is not specifically a protocol like TLS. VPNs are used to protect internet traffic from snooping and interference, but they are not directly involved in the encryption of HTTP to form HTTPS.`
  },
  {
    "id": "2022A_FE_AM_40",
    "question": "Which of the following is an appropriate term associated with the fraudulent action of impersonating an authorized person?",
    "options": ["Destruction","Falsification","Spoofing","Tapping"],
    "correctAnswer": 2,
    "solution": `Spoofing is the act of impersonating someone or something to deceive others, often used in the context of technology (e.g., email spoofing, IP spoofing). It specifically refers to impersonating an authorized person or entity, making it the most appropriate term for the given context. Therefore, the answer is c).

Explanation for other options:

a) Destruction refers to the act of damaging or destroying something, typically data or property. It does not specifically relate to impersonation.

b) Falsification involves altering or fabricating information or documents to mislead or deceive. While it can involve impersonation, it is a broader term and does not specifically refer to the act of impersonating an authorized person.

d) Tapping generally refers to the interception of communication, such as wiretapping. It is not directly related to impersonation.`
  },
  {
    "id": "2022A_FE_AM_41",
    "question": "An attacker calls a corporate help desk, masquerading as an employee who has forgotten his password. The help desk staff resets the password to the company default “password1.” The attacker then uses this password to access the company network and information on the server. What is this type of attack called?",
    "options": ["Buffer overflow attack","Denial-of-Service attack","Shoulder surfing","Social engineering"],
    "correctAnswer": 3,
    "solution": `**Social engineering** involves manipulating individuals into divulging confidential or personal information that may be used for fraudulent purposes. In this case:

- The attacker pretends to be an employee who has forgotten their password.
- The help desk staff, without verifying the caller's identity properly, resets the password to a default value.
- The attacker then uses the reset password to gain unauthorized access to the company network.

This attack relies on the human element of security rather than exploiting technical vulnerabilities, making it a classic example of social engineering. Therefore, the answer is **d)**.

**a) Buffer overflow attack:** This is a technical exploit where an attacker sends more data to a buffer than it can handle, potentially allowing the attacker to execute arbitrary code.

**b) Denial-of-Service attack:** This attack aims to make a service unavailable to its intended users by overwhelming it with traffic or requests.

**c) Shoulder surfing:** This involves an attacker observing someone as they enter sensitive information, such as a password, typically in a physical setting.`
  },
  {
    "id": "2022A_FE_AM_42",
    "question": "When a biometric authentication system is introduced, which of the following is the most appropriate point to be taken into account?",
    "options": ["Adjusting the device by considering both the probability of incorrectly rejecting an authorized user and that of incorrectly accepting an unauthorized user","Preventing the decrease in the probability of incorrectly rejecting an authorized user by using a product that frequently updates the malware definition file","Requesting an entrusted third party to issue a digital certificate for the person to be authenticated","Setting the appropriate amount of knowledge for authentication to balance the amounts of knowledge that cannot be easily guessed and that can be memorized by a person to be authenticated"],
    "correctAnswer": 0,
    "solution": `In biometric authentication systems, there are two critical performance metrics to consider:

- **False Rejection Rate (FRR):** The probability that an authorized user is incorrectly rejected by the system.
- **False Acceptance Rate (FAR):** The probability that an unauthorized user is incorrectly accepted by the system.

When implementing a biometric system, it's essential to balance these two rates. A system that is too strict may have a high FRR, causing inconvenience to legitimate users, while a system that is too lenient may have a high FAR, compromising security. Therefore, adjusting the system to find an optimal balance between FRR and FAR is crucial for ensuring both security and usability. In conclusion, option **a)** is the right choice.

**b)** While keeping malware definitions updated is important for security, it does not directly relate to the performance metrics of a biometric system.

**c)** Involving a third party for digital certificates is more relevant to digital signature and PKI (Public Key Infrastructure) than to biometric authentication.

**d)** This option relates more to knowledge-based authentication (e.g., passwords) rather than biometrics, where the focus is on physical characteristics.`
  },
  {
    "id": "2022A_FE_AM_43",
    "question": "Which of the following is the purpose of using a message authentication code?",
    "options": ["To check the encryption method of a message","To check the overview of a message","To confirm that there is no falsification of a message","To secure the confidentiality of a message"],
    "correctAnswer": 2,
    "solution": `A **message authentication code** is a short piece of information used to authenticate a message and confirm its integrity and authenticity. When a sender generates a MAC for a message, it involves applying a cryptographic algorithm and a secret key. The MAC ensures that:

- The message has not been altered in transit (integrity).
- The message is from a legitimate sender who possesses the secret key (authentication).

If the recipient calculates the MAC on the received message and it matches the MAC sent by the sender, it confirms that the message has not been tampered with and is indeed from the expected sender.

### Brief Overview of Other Options:

- **a)** A MAC does not check the encryption method; it focuses on message integrity and authenticity.
- **b)** The term 'overview of a message' is vague and not relevant to the function of a MAC.
- **d)** While a MAC can help protect the integrity of a message, it does not provide confidentiality. Confidentiality is typically ensured through encryption.

In summary, the correct answer is **c) To confirm that there is no falsification of a message**.`
  },
  {
    "id": "2022A_FE_AM_44",
    "question": "Which of the following is an explanation of WAF?",
    "options": ["It centrally stores and manages operation logs from various systems to quickly detect and analyze an event that can be a security threat.","It is a standard of encryption methods for wireless LAN, certified by the Wi-Fi Alliance, and supports AES encryption.","It is equipped with firewall functions and has antivirus, intrusion detection, and other functions that work together to manage multiple security functions in an integrated manner.","It monitors the accesses to a website, and when it detects a pattern that is likely from an attacker, it blocks those accesses."],
    "correctAnswer": 3,
    "solution": `A **Web Application Firewall (WAF)** is specifically designed to protect web applications by monitoring and filtering HTTP traffic between a web application and the Internet. It analyzes incoming requests to detect and block malicious traffic, including:

- SQL injection
- Cross-site scripting (XSS)
- Other types of attacks targeting web applications

By identifying patterns that match known attack vectors, a WAF can help safeguard web applications from vulnerabilities and threats.

**a)** This description fits a Security Information and Event Management (SIEM) system, which collects and analyzes logs for security threat detection.

**b)** This describes Wi-Fi Protected Access (WPA), a security protocol for wireless LANs.

**c)** This option describes a next-generation firewall (NGFW) or Unified Threat Management (UTM) device, which combines various security functions, but it is not specifically a WAF.

In summary, the correct answer is **d) It monitors the accesses to a website, and when it detects a pattern that is likely from an attacker, it blocks those accesses.**`
  },
  {
    "id": "2022A_FE_AM_45",
    "question": "Which of the following is an appropriate description of a UML use case diagram?",
    "options": ["It shows the behavior during the object’s life cycle using finite state transitions.","It shows the exchange of messages among objects and objects’ lifelines in a time series.","It shows the flow from one activity to another activity in a system or business process.","It shows the scenarios for how actors, i.e., external users or machines, interact with a system."],
    "correctAnswer": 3,
    "solution": `A UML (Unified Modeling Language) use case diagram is used to represent the functional requirements of a system. It illustrates:

- **Actors:** External entities (users or other systems) that interact with the system.
- **Use Cases:** Specific functions or scenarios that the system performs in response to the actions of the actors.

The use case diagram helps in visualizing the relationships between actors and use cases, highlighting what the system does from the user’s perspective.

### Brief Overview of Other Options:

- **a)** This describes a state machine diagram, which models the states and transitions of an object over its life cycle.
- **b)** This describes a sequence diagram, which illustrates the interactions and message exchanges among objects over time.
- **c)** This describes an activity diagram, which represents workflows and the flow of control in a system or process.

In summary, the correct answer is **d) It shows the scenarios for how actors, i.e., external users or machines, interact with a system.**`
  },
  {
    "id": "2022A_FE_AM_46",
    "question": "In UML 2.0, which of the following is a diagram that represents the interactions between objects in time series?",
    "options": ["Activity diagram","Component diagram","Sequence diagram","State transition diagram"],
    "correctAnswer": 2,
    "solution": `A **sequence diagram** is a type of interaction diagram that shows how objects interact in a particular scenario of a use case. It focuses on the order of messages exchanged between objects over time, displaying the sequence of events that occur. The vertical axis represents the different objects (lifelines), while the horizontal axis shows the messages exchanged in a time-ordered fashion.

### Brief Overview of Other Options:

- **a) Activity diagram:** This diagram represents workflows and the flow of control or activities in a system but does not focus specifically on time-ordered interactions.
- **b) Component diagram:** This diagram shows the organization and dependencies among components in a system, emphasizing the architecture rather than interactions.
- **d) State transition diagram:** This diagram describes the states of an object and the transitions between those states, focusing on the lifecycle of an object rather than time-based interactions.

In summary, the correct answer is **c) Sequence diagram.**`
  },
  {
    "id": "2022A_FE_AM_47",
    "question": "Which of the following is a structural design pattern that allows classes with incompatible interfaces to work together?",
    "options": ["Adapter","Factory","Iterator","Singleton"],
    "correctAnswer": 0,
    "solution": `The **Adapter pattern** acts as a bridge between two incompatible interfaces. It allows a class to work with methods or functions that are incompatible by converting the interface of one class into an interface that the client expects. This pattern enables integration of different systems and promotes code reusability.

### Brief Overview of Other Options:

- **b) Factory:** The Factory pattern is a creational design pattern that provides an interface for creating objects without specifying the exact class of the object that will be created.
- **c) Iterator:** The Iterator pattern is a behavioral design pattern that provides a way to access elements of a collection sequentially without exposing the underlying representation of the collection.
- **d) Singleton:** The Singleton pattern is a creational design pattern that restricts a class to a single instance and provides a global point of access to that instance.

In summary, the correct answer is **a) Adapter.**`
  },
  {
    "id": "2022A_FE_AM_48",
    "question": "Which of the following is the most appropriate description of a stack trace that is used for debugging a program?",
    "options": ["A trace of call stack methods/functions/subroutines","Stacking/gathering the traces left by other programs","The traces left in memory from a stack data structure","Tracing stack data structure that is used in the program"],
    "correctAnswer": 0,
    "solution": `A **stack trace** is a report of the active stack frames at a certain point in time during the execution of a program, typically when an exception or error occurs. It provides information about the sequence of method or function calls that led to the current state, allowing developers to trace back through the call stack to identify where an error originated. The stack trace typically includes:

- The names of the methods/functions/subroutines that were called.
- The order in which they were called.
- The line numbers in the source code where the calls were made.

### Brief Overview of Other Options:

- **b)** This does not accurately describe a stack trace; it refers to traces from other programs rather than the call stack of the current program.
- **c)** This description could imply the stack data structure itself but does not relate to the context of debugging.
- **d)** While it mentions the stack data structure, it does not convey the debugging aspect or the concept of tracking method calls.

In summary, the correct answer is **a) A trace of call stack methods/functions/subroutines.**`
  },
  {
    "id": "2022A_FE_AM_49",
    "question": "Among the software development activities, which of the following corresponds to refactoring that is emphasized in agile development?",
    "options": ["To improve the maintainability of a program, the internal structure of a program is changed without any change in the external specifications.","To improve the quality of a program, two (2) programmers cooperate and perform the coding of one (1) program.","To obtain feedback from the users, a prototype of the software is created at an early stage.","To promptly develop a program, test cases are set in advance, and then the program is coded."],
    "correctAnswer": 0,
    "solution": `**Refactoring** refers to the process of restructuring existing computer code without changing its external behavior. The goal is to improve the internal structure, readability, and maintainability of the code. In agile development, refactoring is often performed to make the codebase cleaner and easier to work with, enhancing the overall quality of the software without altering what the software does from the user's perspective.

### Brief Overview of Other Options:

- **b)** This describes pair programming, which is a collaborative coding practice rather than refactoring.
- **c)** This refers to prototyping, a technique for gathering user feedback early in the development process, not specifically related to refactoring.
- **d)** This describes test-driven development (TDD), where tests are written before the code, which is a separate practice from refactoring.

In summary, the correct answer is **a) To improve the maintainability of a program, the internal structure of a program is changed without any change in the external specifications.**`
  },
  {
    "id": "2022A_FE_AM_50",
    "question": "In eXtreme Programming (XP), which of the following is advocated as a practice?",
    "options": ["Inspection","Pair programming","Structured design","Use case utilization"],
    "correctAnswer": 1,
    "solution": `**Pair programming** is a core practice in eXtreme Programming (XP) where two programmers work together at one workstation. One programmer, called the 'driver,' writes the code while the other, called the 'observer' or 'navigator,' reviews each line of code as it is written. This practice enhances collaboration, allows for real-time feedback, and helps to improve code quality while also fostering knowledge sharing between team members.

### Brief Overview of Other Options:

- **a) Inspection:** While inspection is a quality assurance practice, it is not specific to eXtreme Programming.
- **c) Structured design:** This refers to a traditional software design approach, not a specific practice within XP.
- **d) Use case utilization:** While use cases can be utilized in XP, they are not a primary practice of the methodology.

In summary, the correct answer is **b) Pair programming.**`
  },
  {
    "id": "2022A_FE_AM_51",
    "question": "A project consisting of several activities has a single critical path. Which of the following is an appropriate description of critical path activities for the project?",
    "options": ["Critical path activities can be performed in parallel.","Critical path activities have a non-zero total float time.","For each critical path activity, the early start date equals the late start date.","The activity with the longest duration in the project is one of the critical path activities."],
    "correctAnswer": 2,
    "solution": `In project management, critical path activities are those that directly impact the overall project duration. The key characteristics of critical path activities include:

- They have zero total float (or slack), meaning any delay in these activities will directly delay the project.
- The early start date (the earliest time an activity can start) is equal to the late start date (the latest time an activity can start without delaying the project).

### Brief Overview of Other Options:

- **a)** Critical path activities cannot be performed in parallel if they are sequential; they must be completed in a specific order to maintain the critical path.
- **b)** Critical path activities have zero total float, not non-zero. Non-zero total float indicates that there is flexibility in the schedule, which does not apply to critical path activities.
- **d)** While an activity with the longest duration may be part of the critical path, it is not necessarily true that it will always be a critical path activity. The critical path is determined by the sequence of dependent activities that dictate the project's total duration, not just the longest activity.

In summary, the correct answer is **c) For each critical path activity, the early start date equals the late start date.**`
  },
  {
    "id": "2022A_FE_AM_52",
    "question": "Which of the following is an appropriate description of the Responsibility Assignment Matrix that is used for project human resource management?",
    "options": ["Allocating work packages to those who are responsible for project work","Defining the limits of the project sponsor’s responsibilities","Defining the terms of reference of the project","Monitoring the current engagement level of stakeholders"],
    "correctAnswer": 0,
    "solution": `The **Responsibility Assignment Matrix (RAM)** is a tool used in project management to map the relationship between project activities (or work packages) and the individuals or roles responsible for completing them. It clarifies who is responsible, accountable, consulted, and informed (often summarized as RACI) for each task or deliverable within a project. This helps ensure clear ownership of tasks and facilitates communication among team members.

### Brief Overview of Other Options:

- **b)** While defining responsibilities is part of RAM, specifying the limits of a project sponsor’s responsibilities is not its primary function.
- **c)** Defining the terms of reference of the project is related to project initiation and governance but is not the focus of a RAM.
- **d)** Monitoring the current engagement level of stakeholders is related to stakeholder management but does not describe the function of a RAM.

In summary, the correct answer is **a) Allocating work packages to those who are responsible for project work.**`
  },
  {
    "id": "2022A_FE_AM_53",
    "question": "Which of the following is an appropriate purpose for using a WBS (work breakdown structure) in a software development project?",
    "options": ["To clarify the time sequence of activities and understand the critical path that should be intensively managed","To decompose a development task into smaller sub-tasks with a manageable size and organize them into a hierarchical structure","To optimize the total cost when there is a trade-off relationship between the number of days and the costs required for development","To show the schedule of activities by using bars and clarify the start dates and end dates of the activities as well as the progress at the current point"],
    "correctAnswer": 1,
    "solution": `The **Work Breakdown Structure (WBS)** is a key project management tool that breaks down a project into smaller, more manageable components or tasks. This hierarchical decomposition allows for better planning, monitoring, and control of the project. It helps in organizing the work, defining the scope, and establishing a clear structure for assigning responsibilities.

### Brief Overview of Other Options:

- **a)** This describes scheduling and critical path analysis, which are more relevant to the project schedule management rather than the purpose of a WBS.
- **c)** While cost optimization is important in project management, it is not the primary purpose of a WBS, which focuses on task decomposition.
- **d)** This describes a Gantt chart, which is used for scheduling activities, showing start and end dates, rather than the hierarchical breakdown of tasks.

In summary, the correct answer is **b) To decompose a development task into smaller sub-tasks with a manageable size and organize them into a hierarchical structure.**`
  },
  {
    "id": "2022A_FE_AM_54",
    "question": "Which of the following is an appropriate description for group decision-making techniques used in the estimation process of an activity duration?",
    "options": ["The estimates created using these techniques may include contingency reserves, sometimes referred to as time reserves or buffers, in the project schedule to account for schedule uncertainty.","These are team-based approaches, such as brainstorming, the Delphi, or nominal group techniques, which are useful for engaged team members to improve their estimation accuracy and commit to the estimates.","These techniques use statistical relationships between historical data and project parameters to calculate an estimate for project cost, budget, or duration.","Using these techniques, a group of experts, guided by historical information, can provide duration estimate information or recommended maximum activity durations from prior similar projects."],
    "correctAnswer": 1,
    "solution": `Group decision-making techniques in estimation, such as **brainstorming, the Delphi method, and nominal group technique**, are designed to gather input from multiple team members to improve the accuracy of estimates. These collaborative approaches allow team members to share insights, consider diverse perspectives, and reach a consensus on duration estimates, leading to more reliable project planning.

### Brief Overview of Other Options:

- **a)** While contingency reserves may be included in project schedules, this statement does not specifically describe group decision-making techniques.
- **c)** This describes quantitative estimation methods (like parametric estimating), which are not focused on group decision-making.
- **d)** This refers to expert judgment and historical data analysis, which may not necessarily involve group decision-making techniques.

In summary, the correct answer is **b) These are team-based approaches, such as brainstorming, the Delphi, or nominal group techniques, which are useful for engaged team members to improve their estimation accuracy and commit to the estimates.**`
  },
  {
    "id": "2022A_FE_AM_55",
    "question": "Which of the following is an appropriate meaning of a mission-critical system?",
    "options": ["As with an operating system, it is an indispensable system necessary for operating a business system.","It is a system that has a significant impact on corporate activities and society when a failure occurs.","It is a system that is first installed on a trial basis, and if successful, a full-scale installation is implemented.","It is a system where the operating performance is close to the limit."],
    "correctAnswer": 1,
    "solution": `A **mission-critical system** is vital to an organization's operations. If such a system fails, it can lead to severe consequences, including financial loss, damage to reputation, or disruption of essential services. These systems are essential for the ongoing operation and success of the organization and often require high availability and reliability.

### Brief Overview of Other Options:

- **a)** This describes an operating system's role but does not specifically define a mission-critical system.
- **c)** This refers to a trial installation approach and does not pertain to the definition of mission-critical systems.
- **d)** While performance limits may be a consideration, it does not capture the essence of what makes a system mission-critical.

In summary, the correct answer is **b) It is a system that has a significant impact on corporate activities and society when a failure occurs.**`
  },
  {
    "id": "2022A_FE_AM_56",
    "question": "Which of the following is an appropriate description of the relationship between a record of an incident and a record of a problem in IT service management?",
    "options": ["A cross-reference to the incident that triggered the record of the problem is included in the record of the problem.","If known errors have been identified at the time of ending the record of the problem, the record of the incident that triggered the record of the problem is deleted.","One (1) problem record is always associated with one (1) incident record.","Problems are classified and recorded by a different criterion from the classification of incidents."],
    "correctAnswer": 0,
    "solution": `In IT service management, an **incident** is an unplanned interruption or reduction in the quality of an IT service, while a **problem** is the underlying cause of one or more incidents. When a problem record is created, it typically includes a cross-reference to the incident(s) that triggered it, helping to track the relationship between the incidents and the problem being investigated.

### Brief Overview of Other Options:

- **b)** The record of the incident is not deleted when a problem record is created; instead, the incident remains in the records for reference and tracking purposes.
- **c)** A problem record can be associated with multiple incident records, especially if the same issue affects multiple users or services.
- **d)** While problems and incidents may be classified differently, they are often related, and their classification criteria are not necessarily distinct.

In summary, the correct answer is **a) A cross-reference to the incident that triggered the record of the problem is included in the record of the problem.**`
  },
  {
    "id": "2022A_FE_AM_57",
    "question": "A system is planned to be operational 22 hours per day. However, there are two (2) failures with downtimes of 0.5 hours and 1.5 hours in 100 days. Which of the following is the approximate MTBF of this system during the period in hours?",
    "options": ["0.00091","1.0","2.0","1100"],
    "correctAnswer": 3,
    "solution": `## **Explanation:**

To calculate the Mean Time Between Failures (MTBF) for the system, we can use the formula:
#### $\text{MTBF}=\frac{\text{Total Opeational Time}}{\text{Number of Failures}}$
### Given Data:

- Operational hours per day: 22 hours
- Number of days: 100 days
- Number of failures: 2
- Downtime for failures: 0.5 hours and 1.5 hours (though downtime is not needed for MTBF calculation)
### Steps:

1. **Calculate the total operational time:**
	#### $\text{Total Operational Time} = \text{Operational Hours per day}~\times~\text{Number of Days}=\frac{22~hours}{1~\cancel{day}}~\times~100~\cancel{days}=2200~hours$
2. **Calculate MTBF:**

	#### $\text{MTBF}=\frac{\text{Total Opeational Time}}{\text{Number of Failures}} = \frac{2200~\text{hours}}{2}=1100~hours$

### **Conclusion:**

The approximate MTBF of this system during the period is **d) 1100**.`
  },
  {
    "id": "2022A_FE_AM_58",
    "question": "When a business continuity plan (BCP) is developed given the possibility of a system failure, which of the following is the item that is implemented as part of business impact analysis?",
    "options": ["Collectively educating the concerned persons about the alternate procedures and recovery procedures during an information system failure","Determining the maximum allowable downtime for the information system","Executing a test to verify the effectiveness of BCP","Revising the contents of the BCP given changes in the internal and external environment of the information system"],
    "correctAnswer": 1,
    "solution": `**Business Impact Analysis (BIA)** is a crucial part of the business continuity planning process, focusing on identifying critical business functions and the impact that disruptions can have on those functions. One of the key aspects of BIA is determining the **Maximum Allowable Downtime (MAD)**, which defines how long a system can be down before significantly impacting the organization.

### Brief Overview of Other Options:

- **a)** While educating concerned persons about procedures is important, it is more about training and awareness rather than BIA itself.
- **c)** Executing tests to verify BCP effectiveness is part of the testing and maintenance phase of BCP, not BIA.
- **d)** Revising the BCP based on changes is part of the ongoing maintenance and review process but not specifically a part of BIA.

In summary, the correct answer is **b) Determining the maximum allowable downtime for the information system.**`
  },
  {
    "id": "2022A_FE_AM_59",
    "question": "Which of the following is the most appropriate purpose for which a system auditor exchanges opinions with an audited department concerning the draft version of an audit report?",
    "options": ["To confirm that there are no factual errors in the findings and recommendations to be described in the audit report","To issue the audit report to the audited department before the audit report is submitted to the person who is requesting the audit","To receive the approval of the responsible person of the audited department concerning the recommendations described in the audit report","To substitute with additional auditing activities concerning the part of the audit report for which evidence is insufficient by orally confirming with the audited department"],
    "correctAnswer": 0,
    "solution": `During the audit process, it is essential to ensure the accuracy of the findings and recommendations. By exchanging opinions with the audited department on the draft report, the auditor can verify that the information presented is correct and that there are no misunderstandings or misinterpretations. This step helps to maintain the integrity of the audit process and ensures that the final report reflects an accurate assessment of the department's operations.

### Brief Overview of Other Options:

- **b)** While sharing the draft may happen, the main purpose is not to issue it prior to submission but to ensure accuracy and clarity.
- **c)** While obtaining approval may be a goal, it is not the primary purpose of discussing the draft; auditors typically seek feedback rather than formal approval.
- **d)** Substituting additional auditing activities is not appropriate; auditors should gather sufficient evidence before concluding, rather than relying on oral confirmation for parts of the report.

In summary, the correct answer is **a) To confirm that there are no factual errors in the findings and recommendations to be described in the audit report.**`
  },
  {
    "id": "2022A_FE_AM_60",
    "question": "Which of the following is the appropriate activity performed by a system auditor who audits access control?",
    "options": ["Creating and storing the access control records for the software","Establishing an access control policy for the network","Implementing the access control procedures for hardware","Viewing the access control rules for data"],
    "correctAnswer": 3,
    "solution": `In the context of auditing access control, the system auditor's role involves examining and evaluating the effectiveness of the existing access control measures. This includes reviewing the access control rules that dictate how data can be accessed, by whom, and under what conditions. By viewing these rules, the auditor can assess whether they align with security policies and effectively protect sensitive data from unauthorized access.

### Brief Overview of Other Options:

- **a)** Creating and storing access control records is more of an operational task that falls under the responsibilities of system administrators or IT personnel rather than auditors.
- **b)** Establishing an access control policy is a governance activity typically performed by management or security personnel, not an auditor.
- **c)** Implementing access control procedures is also an operational task, focused on executing policies rather than auditing them.

In summary, the correct answer is **d) Viewing the access control rules for data.**`
  }
];
