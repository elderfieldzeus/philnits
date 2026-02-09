export default [
  {
    "id": "2023A_FE_AM_1",
    "question": "In a school class, 13 students play basketball and 19 play football. Among them, 8 students play both. Further, 7 students play neither. How many students are there in the class?",
    "options": ["17","31","33","47"],
    "correctAnswer": 1,
    "solution": `### Step 1: Create Venn Diagram with Student Numbers

We can create a Venn Diagram of all the sports and we firstly add the students in the union \`Basketball ∪ Football\` then we add the students exclusive to their own sports and subtract the union students from them.

![Image](Files/2023-1.png)

### Step 2: We Add the Students Together

$5 + 8 + 11 + 7 = 31$

So our final answer is 31.`
  },
  {
    "id": "2023A_FE_AM_2",
    "question": "$n$ is a binary integer represented in two’s complement. Which of the following operations get the value $7 \\times n$ using only bit shifting and an addition or subtraction operation?",
    "options": ["Shift n 2 bits to the left, then add n to the result.","Shift n 2 bits to the left, then subtract n from the result.","Shift n 3 bits to the left, then add n to the result.","Shift n 3 bits to the left, then subtract n from the result"],
    "correctAnswer": 3,
    "solution": `### Short Intro on Bitwise Operators

> **Bitwise Operators**
> - \`<<\` Signed Left Shift \`x << n\` does $x \times 2^{n}$
> - \`>>\` Signed Right Shift \`x >> n\` does $x \div 2^{n}$

For example, \`6 << 1 == 12\` is visualized like this:

\`\`\`
6
00000110
 
12
00001100
\`\`\`

### We Check Each Answer By Simulating Their Shifts

Remember, our goal is to get $7 \times n$.

Let's try option d:

It translates to \`n << 3 - 1\` which is equal to $x \times 2^3 - 1 \equiv x \times 7$ which is our goal, hence d is the answer.`
  },
  {
    "id": "2023A_FE_AM_3",
    "question": "A parking lot has 10 parking spaces in a row, and 7 cars are parked at random parking spaces. What is the probability that the three empty places are adjacent to each other?",
    "options": ["1/90","1/72","1/15","1/12"],
    "correctAnswer": 2,
    "solution": `### Step 1: We Calculate the Total Number of Ways to Arrange 3 Empty Parking Spaces

We do $\binom{10}{3}$ or $10C3$. This calculates to 120 total ways.

### Step 2: Count the Favorable Combinations

We can illustrate the parking spaces and count how many ways we can arrange the 3 empty parking spaces to be adjacent:

![Image](Files/2023-3.png)

There are 8 favorable combinations.

### Step 3: Calculate the Probability

The probability is $\frac{8}{120}$, which simplifies to $\frac{1}{15}$. The correct answer is c.`
  },
  {
    "id": "2023A_FE_AM_4",
    "question": "What is the sum of two binary fractions 1.0101 and 1.0111 expressed in decimal form?",
    "options": ["2.5","2.75","2.875","2.9375"],
    "correctAnswer": 1,
    "solution": `### We Simply Add Them & Carry the Bits If Necessary

![Image](Files/2023-4.png)

Hence, the answer is b.`
  },
  {
    "id": "2023A_FE_AM_5",
    "question": "Which of the following expressions in postfix notation is equivalent to the expression 2+5×3+4 in infix notation? Here, the operator “×” has higher precedence than “+”.",
    "options": ["2 5 3 4 x + +","2 5 + 3 4 x +","2 5 3 + x 4 +","2 5 3 x + 4 +"],
    "correctAnswer": 3,
    "solution": `### Infix vs Prefix vs Postfix

The equations we're familiar with are infix operations because we put the operator 'in between' the operands.

We want to convert \`2 + 5 × 3 + 4\` from infix to postfix.

- This is equivalent to \`2 + (5 × 3) + 4\`.
- This means the operators should be AFTER their operands.
- We still give \`×\` (multiplication) precedence over \`+\`.

The only valid expression that puts \`5 3 x\` together before addition is:

d) \`2 5 3 x + 4 +\`

Thus, d is the correct answer.`
  },
  {
    "id": "2023A_FE_AM_6",
    "question": `There is communication data that consists of five characters “A”, “B”, “C”, “D”, and “E” that have different appearance frequencies, and in order to compress the data by using Huffman coding, the code table shown below is created. Which of the following is an appropriate code that should be inserted in the blank?
![Image](Files/Pasted%20image%2020241017231221.png)`,
    "options": ["001","010","101","110"],
    "correctAnswer": 3,
    "solution": `![Image](Files/Pasted%20image%2020241017231221.png)

### Video Tutorial on Huffman Coding

It's a strategy of compressing data for JPEG and MPEG files. There's a process to it so watching this tutorial: [Text Compression with Huffman Coding - YouTube](https://www.youtube.com/watch?v=iiGZ947Tcck) is more helpful than me discussing it
![Image](Files/2023-6.png)`
  },
  {
    "id": "2023A_FE_AM_7",
    "question": `When the series of stack operations below is performed on an empty stack, which of the following is the data that is read out by the last READ operation? Here, “PUSH x” is the operation to put data x in the stack, “POP” is used to retrieve data from the stack, and “READ” is used to read data from the top of the stack without removing the original data.

PUSH 2 → READ → PUSH 3 → PUSH 6 → POP → READ → PUSH 4 →READ → PUSH 7 → PUSH 5→ POP → POP → READ`,
    "options": ["2","3","4","6"],
    "correctAnswer": 2,
    "solution": `### Let's Solve This Step By Step

Let's say our stack grows from left to right, where right is the top-most element.

So our empty stack is \`x = {}\`.

1. PUSH 2 \`{ 2 }\`
2. READ \`{ 2 }\` outputs 2
3. PUSH 3 \`{ 2, 3 }\`
4. PUSH 6 \`{ 2, 3, 6 }\`
5. POP \`{ 2, 3 }\`
6. READ \`{ 2, 3 }\` outputs 3
7. PUSH 4 \`{ 2, 3, 4 }\`
8. READ \`{ 2, 3, 4 }\` outputs 4
9. PUSH 7 \`{ 2, 3, 4, 7 }\`
10. PUSH 5 \`{ 2, 3, 4, 7, 5 }\`
11. POP \`{ 2, 3, 4, 7 }\`
12. POP \`{ 2, 3, 4 }\`
13. READ \`{ 2, 3, 4 }\` outputs 4`
  },
  {
    "id": "2023A_FE_AM_8",
    "question": "![Image](Files/Pasted%20image%2020241018221346.png)",
    "options": ["Left child of 16","Left child of 23","Right child of 3","Right child of 10"],
    "correctAnswer": 3,
    "solution": `### Understanding a Binary Search Tree

Rules:

- A parent can only have 2 child nodes.
- For every parent node, all the children to its left are lesser than the parent's value.
- Meanwhile, all the children to the parents' right are greater than than the parent's value.
![Image](Files/2023-8.png)`
  },
  {
    "id": "2023A_FE_AM_9",
    "question": `In the table below, there are five items A through E. Each item cannot be divided into smaller pieces. When a knapsack with a maximum volume of 7 units is used for carrying the items, which of the following is a set of items to be packed in the knapsack so that the total price can be maximized?

| Item | Volume | Price |
| ---- | ------ | ----- |
| A    | 3      | 4     |
| B    | 2      | 3     |
| C    | 3      | 5     |
| D    | 1      | 2     |
| E    | 5      | 9     |`,
    "options": ["A, B, D","A, C, D","B, E","D, E"],
    "correctAnswer": 2,
    "solution": `### Step 1: Find the Price Sum of All The Choices

a) A, B, D = 4 + 3 + 2 = 9
b) A,C,D = 4 + 5 + 2 = 11
c) B,E = 3 + 9 = 12
d) D,E = 2 + 9 = 11

### Step 2: Pick the Choice with the Least Items & Highest Sum

As we can see from our calculations, c) has the highest price (12) while also fulfilling the constraints.

Hence, c) is our answer.`
  },
  {
    "id": "2023A_FE_AM_10",
    "question": "Which of the following is an appropriate description concerning XML?",
    "options": ["It is based on HTML and expands its functions.","It requires a dedicated editor for writing XML documents.","It integrates the logical structure and display style of documents.","It enables users to define the attribute information and logical structure of documents by using the user’s own tags."],
    "correctAnswer": 3,
    "solution": `a) It is based on HTML and expands its functions.
- no, it doesn't necessarily have to expand HTML, it can be like a

config file like \`beans.xml\` for Java.

b) It requires a dedicated editor for writing XML documents.



- no, you can edit it with any text editor. It's just a plaintext file after all.c) It integrates the logical structure and display style of documents.

- no, XML only cares about the logical structure of its tags, not the display style of documents.

- only HTML can inline CSS to talk about display style of documents.

d) It enables users to define the attribute information and logical structure of documents by using the user’s own tags.

- yes, we, as the user, can define attribute & logical structure (tags)

- this is the correct choice`
  },
  {
    "id": "2023A_FE_AM_11",
    "question": "In a CPU, which of the following is a special register that contains the address of the next instruction to be fetched?",
    "options": ["Accumulator","Index Register","Instruction Register","Program Counter"],
    "correctAnswer": 3,
    "solution": `You might've thought it was Instruction Register, however that register holds the CURRENTLY EXECUTING instruction that is about to be decoded & executed by the ALU.

## Description of the Components

- **Accumulator**: This register holds the intermediate result of arithmetic or logical operations. Like if the calculation depends on the sum of a previous expression, we store the sum in the accumulator first before using it in the next expression.

- **Index Register**: This register holds an offset value for memory addresses for accessing struct data types and arrays.

- **Instruction Register**: This register holds the CURRENT instruction that has just been fetched from memory and is about to be decoded and executed.

- **Program Counter (PC)**: The PC always points to the address of the next instruction in the program. After fetching an instruction, the PC is incremented so that it points to the subsequent instruction, ensuring the CPU executes the program sequentially. In case of jumps or branches, the PC is updated with the target address.`
  },
  {
    "id": "2023A_FE_AM_12",
    "question": "Which of the following is an appropriate CPU operation associated with cache memory?",
    "options": ["When a cache hit occurs, the CPU fetches data from ROM.","When a cache hit occurs, the CPU fetches data from the main memory.","When a cache miss occurs, the CPU fetches data from the cache memory.","When a cache miss occurs, the CPU fetches data from the main memory."],
    "correctAnswer": 3,
    "solution": `## Understanding the Cache (Hit & Miss)

The cache is used to store data that is frequently used. So if we frequently use an \`add()\` function, we store it in lower levels of cache so that it is closer to the CPU and faster to read. Reading an instruction or memory address that is in a cache is called a 'Cache Hit'.

![Image](Files/Pasted%20image%2020241019120834.png)

A 'Cache Miss' happens when we do not find it in the next higher level of cache, we look upwards to the next higher level and see if its there. Eventually, going back to the main memory, where our program code resides in. 

In this question, we are currently working in the CPU level with CPU registers (level 0), so if we have a cache miss, this means we did not find something in the Cache Memory (level 1), so we jump another level to Main Memory (level 2).


The other answers do not follow the proper hierarchy and immediately jump multiple levels.`
  },
  {
    "id": "2023A_FE_AM_13",
    "question": "Which of the following is a computer architecture in which a processor executes the same instruction on multiple data?",
    "options": ["MIMD","MISD","SIMD","SISD"],
    "correctAnswer": 2,
    "solution": `### **1. SIMD (Single Instruction, Multiple Data)**:

- **Definition**: SIMD is a parallel computing architecture where **one instruction** is applied to **multiple data** elements at the same time.

- **Example**: Useful for tasks like vector processing or graphics processing, where the same operation (e.g., adding two arrays) needs to be applied to many data points in parallel.

- **Use Case**: Often used in **multimedia applications**, like image processing or video games, where similar operations are performed on large datasets.

### **2. MIMD (Multiple Instruction, Multiple Data)**:

- **Definition**: MIMD is a parallel architecture where **multiple instructions** operate on **multiple data** streams simultaneously. Each processor works independently, executing its own instruction on its own data.

- **Example**: Used in systems with multiple processors or cores, such as multi-core CPUs, where each core can run a different program or task.

- **Use Case**: MIMD is used in **general-purpose multi-core processors** and supercomputers, where different tasks need to run concurrently.

### **3. MISD (Multiple Instruction, Single Data)**:

- **Definition**: MISD is a rare and theoretical architecture where **multiple instructions** operate on **one piece of data**. This means multiple processors work on the same data with different instructions.

- **Example**: It's not widely implemented in practice, but some fault-tolerant systems may use it for error checking by running different algorithms on the same data.

- **Use Case**: Limited real-world use; mostly found in very specialized or research-based systems.

### **4. SISD (Single Instruction, Single Data)**:

- **Definition**: SISD is a traditional, non-parallel computing architecture where **one instruction** is executed on **one piece of data** at a time.

- **Example**: Most **conventional single-core processors** operate in an SISD fashion.

- **Use Case**: Found in simple, sequential processing where parallelism is not required.`
  },
  {
    "id": "2023A_FE_AM_14",
    "question": "ECC is used for error detection and correction in memory. When n+2 redundant bits are required for a data bus having a width of $2^n$ bits, what is the number of redundant bits that are required for a data bus having a width of 128 bits?",
    "options": ["3","8","9","10"],
    "correctAnswer": 2,
    "solution": `## What is ECC?

It is an acronym for 'Error Code Correction' and it's used to pinpoint error codes by using multiple parity bits laid out the block of bits.

![Imagee](Files/Pasted%20image%2020241019124146.png)

Given:
- We need n+2 redundant bits for our data bus
- Our data bus size formula is $2^n$
- Our desired data bus size is 128 bits

Asked:
- How many redundant bits should we allocate for our Data Bus of 128 bits?

Solution:
1. First, we find n, so we do $2^n = 128$.
- what power of $2$ allows us to get 128? Yes, it's 7, so $n = 7$.
2. We can now substitute $n+2$ so that $7 + 2 = 9$, meaning we need $9$ redundant bits for our data bus of size $2^n$.
3. Our answer is **c) 9**.`
  },
  {
    "id": "2023A_FE_AM_15",
    "question": "Which of the following is the most appropriate explanation of grid computing?",
    "options": ["A computing task is distributed to several computers in the network to attain computational capacity.","Physical devices such as computers or network devices are emulated to circumvent compatibility constraints and attain software portability and flexibility.","Requirements are stated as constraints on response time and/or on the temporal validity of sensory data.","Sensing devices are connected to a network to provide feedback and control through personal mobile devices."],
    "correctAnswer": 0,
    "solution": `When you think of a grid, you think of multiple nodes that connect to one another to create a network.

In our choices, only 1 word is synonymous or related to 'multiple nodes', which is in *a) 'A computing task is distributed to several computers'*

Therefore, our answer is a).

> [!quote] Grid computing is defined as a distributed architecture of multiple computers connected by networks that work together to accomplish a joint task.

![Image](Files/Pasted%20image%2020241019125026.png)`
  },
  {
    "id": "2023A_FE_AM_16",
    "question": "Which of the following is an RAID configuration that deploys two parity records to different disk drives enabling two simultaneous disk drive failures in the same RAID group to be recovered?",
    "options": ["RAID0","RAID1","RAID5","RAID6"],
    "correctAnswer": 3,
    "solution": `## What is RAID?

> [!info] Redundant Array of Independent Disks

> Lets us use multiple hard disks as redundant disks in case one breaks, the other two still has a copy of the data.

### Raid Levels

> [!tip] The higher the RAID level, the more redundant the storage is & the more resilient it is to failure. It's better for data integrity, but it's slower to save data across all disks.

![Image](Files/Pasted%20image%2020241019125441.png)

The question requires us to have **TWO disk failures**, so our only possible answer is RAID6 according to the table above.`
  },
  {
    "id": "2023A_FE_AM_17",
    "question": "Which of the following occurs when a program attempts to access a page that is mapped in the virtual address space but is not located in the main memory? Here, the OS supports paging.",
    "options": ["Fatal error","Page fault","Scheduling error","Segmentation fault"],
    "correctAnswer": 1,
    "solution": `## What are their Definitions?

- **Fatal Error**: An irrecoverable error that forces a program to stop.

- **Page Fault**: An event triggered when the program accesses memory not currently in RAM, and the OS retrieves it from disk.

- **Scheduling Error**: A problem in how the OS allocates CPU time to tasks, leading to inefficiency or deadlocks.

- **Segmentation Fault**: A program tries to access illegal or non-existent memory, often leading to a crash.

## What is Paging?

It's when we separate our memory into blocks and keep track of it in a paging table. This paging table maps the memory address of our main memory to our secondary memory, like when code is saved to main memory & is mapped (via paging) to our main memory to execute.

If we try to access memory in our main memory that doesn't exist, it will raise a Page Fault and attempt to find the corresponding mapped page in our secondary memory.

## Discussing the Answer

We might have thought of Segmentation Fault, however that is different. It's when we access memory that DOES EXIST, but we do not have access permissions.

- each program is 'allocated memory' when a program runs - meaning the CPU leases it memory it can borrow and it cannot access others - otherwise it leads to a segmentation fault.

If the computer did not support paging, accessing invalid memory will cause a Fatal Error and crash the program.

However, it does support paging, so a Page Fault is raised instead.

Therefore, our answer is **b) Page fault**.`
  },
  {
    "id": "2023A_FE_AM_18",
    "question": "Which of the following is an appropriate description concerning the round robin process scheduling method?",
    "options": ["CPU resources are allocated to each process in order of priority specified in advance when a particular event occurs.","CPU resources are allocated to each process in order of processing time from shortest to longest.","CPU resources are allocated to the first executable process in the queue when an interval-timer interrupt is generated.","CPU resources are allocated to the process that needs to start immediately when some kind of interrupt is generated."],
    "correctAnswer": 2,
    "solution": `## How does Round Robin Work?

Watch this video: [Scheduling Algorithms - Round Robin Scheduling - YouTube](https://www.youtube.com/watch?v=YzBBJYfwdi8).

Notes:

- we have a set time quantum (window for execution) 

- it serves as the amount of time the CPU works on a process before moving on to the next one

- processes aren't scheduled by time to execute or a specific priority, they are just inserted at the tail of a CIRCULAR queue.

- whoever was the first process to be enqueued, it will be the first to execute for the time quantum amount

- if it's not done, the CPU moves to the next process and does the same.

- if it's done, it's dequeued from the queue.

## Discussing the Possible Answers

a) CPU resources are allocated to each process in order of priority specified in advance when a particular event occurs. 

- we don't have priority in round robin, so this is wrong.

b) CPU resources are allocated to each process in order of processing time from shortest to longest. 

- we don't take into account the processing time in round robin, it's first-come, first-serve.

d) CPU resources are allocated to the process that needs to start immediately when some 

kind of interrupt is generated. 

- the 'process that needs to start immediately' does not fit the first-come, first-serve framework.

- sort of correct, but we can find a better solution to describe Round Robin better

**c) CPU resources are allocated to the first executable process in the queue when an** 

**interval-timer interrupt is generated.** 

- there we go, we allocate resources to the first executable process (first-come, first-serve) and we have an interval-timer interrupt (time quantum).

- this is our answer.`
  },
  {
    "id": "2023A_FE_AM_19",
    "question": "Which of the following is an explanation of the function of an archiver that is one of the data management utilities?",
    "options": ["Compiling several files into one file or reconstructing the original files in order to perform data backup and distribution","Creating both an area for recording data and an area for managing data on a single hard disk","Keeping data secure through file protection for safeguarding data from unauthorized use and destruction, and also through copy protection for preventing unauthorized copying","Rearranging a file into contiguous areas, to the extent possible, on a hard disk in which fragmentation has occurred"],
    "correctAnswer": 0,
    "solution": `You know how in \`.zip\` file management tools like 7z and WinRAR, you can select multiple files and click 'Add to archive'? Afterwards, it compresses and groups your files into a single \`.zip\` file so that it's easier to transfer and compress?

Yeah, that's basically what a) is doing. We are 'archiving' files into a single file to be easily moved or compressed into a smaller format, which we can 'Extract' or reconstruct to the originals if we need to.`
  },
  {
    "id": "2023A_FE_AM_20",
    "question": "Which of the following is a sequential circuit that has two stable states?",
    "options": ["Adder circuit","Capacitor","Flip-flop","NAND gate"],
    "correctAnswer": 2,
    "solution": `## What is a Flip-Flop

A flip-flop in digital electronics is a circuit with **two stable states that can be used to store binary data.**

The stored data can be changed by applying varying inputs.

Flip-flops and latches are fundamental building blocks of digital electronics systems used in computers, communications, and many other types of systems. Both are used as **data storage elements**.

## Why the Others Are Wrong

- **a) Adder circuit**: An adder circuit performs arithmetic operations like addition but does not have stable states. It is a combinational circuit, meaning it doesn't store data but rather computes outputs based on current inputs.

- **b) Capacitor**: A capacitor is a passive electronic component that stores electric charge temporarily, but it does not have defined binary states in the context of a digital circuit like flip-flops do.

- **d) NAND gate**: A NAND gate is a basic logic gate used in digital circuits to perform a logical operation. It's a combinational circuit that produces an output based on its current inputs, but it doesn’t have memory or stable states like a flip-flop.`
  },
  {
    "id": "2023A_FE_AM_21",
    "question": `Use DeMorgan's Law

![Image](Files/Pasted%20image%2020241019133645.png)

Our original circuit expressed in Boolean Algebra is: $((B\cap C)' \cup A)'$`,
    "options": ["A","B","C","D"],
    "correctAnswer": 2,
    "solution": `Our original circuit expressed in Boolean Algebra is: $((B\cap C)' \cup A)'$. Let's simplify this.

1. $(B\cap C) \cap A'$ by DeMorgan's & Double Negation Law
- double negation happened when we distributed the \`'\` to $(B \cap C)'$ making it $(B \cap C)'.$

As we can see, this is equivalent to answer C.

![Image](Files/Pasted%20image%2020241019134139.png)`
  },
  {
    "id": "2023A_FE_AM_22",
    "question": "A power supply unit has a rated output power of 500 watts and an efficiency of 80%. In order to obtain an output power of 500 watts from this power supply unit, how many watts is the minimum input power?",
    "options": ["100","400","625","900"],
    "correctAnswer": 2,
    "solution": `We can define output power as 'Output Power = Input Power * Efficiency'.

So in our example, let's see what's given & let's find the solution.

Given:
- output power 500W
- efficiency 80%

Asked:
- input power

Solution:

1. We can derive the formula for input power by isolating it from our formula.

- (Output Power / Efficiency) = Input Power

2. Now we can substitute the variables into the formula
- (500 / 0.8) = 625.`
  },
  {
    "id": "2023A_FE_AM_23",
    "question": `When an order data in the format shown below is entered, which of the following is a data validation method that is performed to determine whether the order date is a business day and whether the date is on or before the date of data entry or after the date of data entry?

![Image](Files/2023-23.jpg)`,
    "options": ["Duplicate check","Format check","Logical check","Sequence check"],
    "correctAnswer": 2,
    "solution": `## Data Validation Checks

Here's a summary of checks thanks to our AI friend:

### 1. **Duplicate Check**
- **Purpose**: To ensure that data is not entered more than once, avoiding redundancy.
- **Example**: A system checks whether a customer’s ID or order number already exists before allowing new entry.

### 2. **Format Check**
- **Purpose**: To ensure that the data entered follows a specific format or pattern.
- **Example**: A date field must follow the format "YYYY-MM-DD", or a phone number must have a specific number of digits.

### 3. **Range Check**
- **Purpose**: To verify that data falls within a specified range.
- **Example**: A temperature field might only accept values between -50°C and 50°C, or a quantity field must be between 1 and 1000.

### 4. **Length Check**
- **Purpose**: To ensure that data has a specific number of characters.
- **Example**: A password field requires at least 8 characters, or a ZIP code must have exactly 5 digits.

### 5. **Presence Check**
- **Purpose**: To ensure that a field has been filled and is not left blank.
- **Example**: Mandatory fields like a customer’s name or address should not be empty.

### 6. **Logical Check**
- **Purpose**: Verifies that data makes sense in its context and adheres to logical rules or business constraints.
- **Example**: Checking that an order date isn't in the future or that a delivery date isn't earlier than the order date.

### 7. **Consistency Check**
- **Purpose**: To check that data is consistent across different fields or systems.
- **Example**: The shipping address country must match the customer’s country of residence, or a "start date" must precede the "end date."

### 8. **Sequence Check**
- **Purpose**: To ensure that records are in the correct order.
- **Example**: In a booking system, flight legs should follow the sequence from the departure city to the destination.

### 9. **Check Digit Validation**
- **Purpose**: To validate codes using an additional digit calculated based on the others.
- **Example**: Credit card numbers often have a check digit at the end to verify the accuracy of the number.

### 10. **Type Check**
- **Purpose**: To ensure that the data entered is of the correct data type (e.g., text, number, date).
- **Example**: A price field must contain only numeric data, while a name field should not contain numbers.

### 11. **Uniqueness Check**
- **Purpose**: To ensure that a field contains unique values across records.
- **Example**: An email address or username should be unique to each user.`
  },
  {
    "id": "2023A_FE_AM_24",
    "question": "Which of the following is a process in PCM to capture analog values from audio signals at a regular interval?",
    "options": ["Encoding","Reverse quantization","Quantization","Sampling"],
    "correctAnswer": 3,
    "solution": `### Key Processes in PCM:

PCM involves three key steps to convert an analog signal (like an audio signal) into a digital signal:

1. **Sampling**:

- The analog signal is sampled at regular intervals. In this step, the continuous analog signal is measured at discrete points in time.

- **Purpose**: To capture the signal’s amplitude (value) at these regular intervals.

2. **Quantization**:

- After sampling, the analog values are rounded to the nearest value within a range of discrete levels. This process introduces a small

error called 'quantization noise.'

- **Purpose**: To convert the sampled values into a finite set of values for easier digital representation.

3. **Encoding**:

- The quantized values are converted into a binary format (0s and 1s).

- **Purpose**: To represent the data in digital form for storage, transmission, or processing.

## The Answer

d) Sampling matches the description of the question to capture analog signals at regular intervals.

PCM involves three key steps: 1. Sampling, 2. Quantization, 3. Encoding.`
  },
  {
    "id": "2023A_FE_AM_25",
    "question": "In a DBMS, which of the following is a function that decides the schema?",
    "options": ["Definition function","Maintenance function","Recovery function","Security function"],
    "correctAnswer": 0,
    "solution": `a) Definition function: Responsible for defining and managing the database schema, including structure and relationships.

b) Maintenance function: Ensures the smooth operation of the database by updating and optimizing it over time.

c) **Recovery function**: Handles restoring the database to a previous state in case of failure or data loss.

d) **Security function**: Manages access controls, ensuring data integrity and preventing unauthorized access.`
  },
  {
    "id": "2023A_FE_AM_26",
    "question": "Which of the following is an appropriate method used to remove data redundancy in relational database systems?",
    "options": ["Entity-relationship","Functional dependency","Hierarchical","Normalization"],
    "correctAnswer": 3,
    "solution": `a) **Entity-relationship**: A diagrammatic technique to represent entities and relationships between them in a database.

b) **Functional dependency**: A constraint that describes the relationship between attributes in a relational database.

A **functional dependency** exists when one attribute uniquely determines another attribute. For example:

- **EmployeeID → EmployeeName**: This means that each **EmployeeID** uniquely determines the corresponding **EmployeeName**. If you know the **EmployeeID**, you can always determine the **EmployeeName**.

- **DepartmentID → DepartmentName**: This means that for each **DepartmentID**, there is a unique **DepartmentName**. If you know the **DepartmentID**, you can uniquely determine the **DepartmentName**.

c) **Hierarchical**: A database model that organizes data in a tree-like structure, where each record has a single parent.

d) **Normalization**: A process used to structure a relational database to minimize redundancy and dependency by organizing data into related tables.`
  },
  {
    "id": "2023A_FE_AM_27",
    "question": "Which of the following is the most appropriate description concerning the primary role of an SQL query optimizer?",
    "options": ["It determines the most efficient way to execute a query.","It minimizes the number of rows in a result set.","It parses a query and improves it for efficient network transmission.","It stores the results of frequently used queries in a cache."],
    "correctAnswer": 0,
    "solution": "The goal of SQL query optimization is improved database efficiency and performance, minimizing the response time of your queries."
  },
  {
    "id": "2023A_FE_AM_28",
    "question": "![Image](Files/Pasted%20image%2020241019161313.png)",
    "options": ["StudentNumber HAVING AVG(Score) >= 80","StudentNumber WHERE AVG(Score) >= 80","Subject HAVING AVG(Score) >= 80","Subject WHERE AVG(Score) >= 80"],
    "correctAnswer": 0,
    "solution": `This means, we group all scores of the student by their \`StudentNumber\`, then we \`AVG()\` all of it, per student. Afterwards, we use the \`HAVING AVG(Score) >= 80\` to only show \`group, AVG()\` rows that have \`AVG(Score) >= 80\`.

## Aggregate SQL Functions

The \`GROUP BY <attr>\` clause selects rows having a common attribute value \`<attr>\` into a smaller set of rows.
- **typically used with aggregate functions** 
- for example, \`SELECT item_name, SUM(price) FROM items GROUP BY item_name\` will sum all the prices of each item, then group the \`item_name\` column to their corresponding \`SUM(price)\`.

## Discussing Alternatives

b) is wrong because \`WHERE\` does not apply to \`GROUP BY\`, but rather on the initial \`SELECT StudentNumber\`.

c) is wrong because we are trying to average the \`StudentNumber\` scores, not the entire \`Subject\`.

d) is wrong because of the same reason b) is wrong and we are not looking to average the \`Subject\` scores, but rather the \`StudentNumber\` scores.`
  },
  {
    "id": "2023A_FE_AM_29",
    "question": "Which of the following is a file in which values before and after an update of the database are written and saved as the update history of the database?",
    "options": ["Backup file","Checkpoint file","Dump file","Log file"],
    "correctAnswer": 3,
    "solution": `## Summary of Choices

### a) Backup file

A backup file is a copy of the database or a subset of its data that is stored separately to **prevent data loss in case of failure, corruption, or accidental deletion**. Backups can be full (containing the entire database) or incremental (containing only changes made since the last backup).

### b) Checkpoint file

A checkpoint file is a **point-in-time snapshot of the database state, created during the database's operation**. It saves the current state of the database to minimize the amount of data that needs to be recovered after a crash, ensuring that only changes made after the checkpoint need to be processed.
- used to rollback crashes

### c) Dump file

A dump file is a **complete export of the database's contents**, usually in a format suitable for storage or transfer. This can be used to create a backup, migrate data to another database, or analyze the database structure and data.

### d) Log file

A log file **records all changes made to the database, including before and after values of updates**, which provides a history of operations. It is critical for data recovery, allowing the database to be restored to a consistent state in case of a crash or failure.
- used to rollback data mutations or transactions
- it contains data like the type of operation & the values`
  },
  {
    "id": "2023A_FE_AM_30",
    "question": "Which of the following is the most appropriate information for a router to determine the destination of an incoming packet?",
    "options": ["Destination IP address","Destination MAC address","Source IP address","Source MAC address"],
    "correctAnswer": 0,
    "solution": `## Justification

We need to determine the destination, so choices c) and d) for 'Source' metadata is redundant, leaving us with choices a) and b).

We need to remember that routers mainly operate in the Network Layer (Layer 3) while switches operate in the Data Link Layer (Layer 2).
- Network Layer uses packets & IP Addresses
- Data Link Layer uses frames & MAC Addresses

Therefore, since Routers are interested in IP Addresses, the answer is a) Destination IP address to determine the destination of an incoming packet.`
  },
  {
    "id": "2023A_FE_AM_31",
    "question": "Which of the following is a feature of a switching hub (layer 2 switch) network device?",
    "options": ["It breaks a received packet into smaller pieces (fragments) in the network layer.","It dynamically allocates an IP address for a terminal connected to its LAN port.","It forwards a received packet only to its LAN port connected to a device with the packet’s destination MAC address.","It forwards a received packet to all its LAN ports (broadcast)."],
    "correctAnswer": 2,
    "solution": `This is because layer 2 devices deal with MAC Addresses, while layer 3 devices deal with IP Addresses.

d) is wrong because it will only forward the packet to the broadcast MAC address \`FFFF.FFFF.FFFF\` or \`ff:ff:ff:ff:ff:ff\` on the specific pretense that
- it doesn't know the MAC address of the destination (not stored in its MAC table).
- the packet is meant to be received by all devices in the network.`
  },
  {
    "id": "2023A_FE_AM_32",
    "question": "When a PC connected to a LAN is starting up, which of the following protocols is used to automatically assign an IP address to the PC?",
    "options": ["DHCP","DNS","FTP","PPP"],
    "correctAnswer": 0,
    "solution": `Dynamic Host Configuration Protocol

- its set up on routers to automatically "lease" a dynamic IP address to a device - allowing it to use the network.
- most WiFi networks do this because we don't want people to manually configure static IP addresses for each device that connects.

### Process

1. DHCPDISCOVER
- the destination is 255.255.255.255
- the 0.0.0.0 address is the source.
2. DHCPOFFER
- the DHCP server sends a list of IP Addresses available to use.
3. DHCPREQUEST
- the client sends a request to claim the IP address.
4. DHCPACK
- the server confirms the IP Address belongs to the client now.
- if it's not available anymore, then DHCPNAK

## Definition of Other Answers

### b) DNS (Domain Name System)

DNS is a protocol used to translate human-readable domain names (like [www.example.com](http://www.example.com)) into IP addresses (like 192.168.1.1), which are needed for routing traffic over the internet. It acts as a directory for translating domain names into their corresponding IP addresses.

### c) FTP (File Transfer Protocol)

FTP is a protocol used for transferring files between a client and a server over a network, such as the Internet. It allows users to upload and download files to/from a remote server.

### d) PPP (Point-to-Point Protocol)

PPP is a data link layer protocol used to establish a direct connection between two networking nodes, often over serial links like dial-up connections. It provides features like authentication, encryption, and compression for data transmission.`
  },
  {
    "id": "2023A_FE_AM_33",
    "question": "In telecommunication, which of the following is a standard for wireless broadband communication for mobile devices and data terminals?",
    "options": ["IEEE 802.11","LTE","NFC","UWB"],
    "correctAnswer": 1,
    "solution": `Long Term Evolution
- used in 4G mobile internet

## Evolution of Mobile Internet

### 1. **2G (Second Generation)**

- **Launched**: Early 1990s
- **Key Features**: Digital voice communication and basic data services (like SMS and MMS)
- **Speed**: 14.4 Kbps to 64 Kbps
- **Technology**: Uses **GSM (Global System for Mobile Communications)** and **CDMA (Code Division Multiple Access)**
- **Data Services**: Basic internet services like text-based web browsing
- **Significance**: Transition from analog to digital communications, introduction of text messaging (SMS) and limited mobile internet.

### 2. **3G (Third Generation)**

- **Launched**: Early 2000s
- **Key Features**: Mobile broadband, faster data speeds for internet access, video calling, and multimedia services
- **Speed**: 200 Kbps to 42 Mbps (with technologies like HSPA+)
- **Technology**: Uses **UMTS (Universal Mobile Telecommunications System)** and enhanced data technologies like **HSPA (High-Speed Packet Access)** and **EV-DO (Evolution-Data Optimized)**
- **Data Services**: Enhanced browsing, mobile apps, video streaming, email, etc.
- **Significance**: Allowed for smartphones to access the internet more efficiently and for mobile apps and services to develop.

### 3. **4G (Fourth Generation)**

- **Launched**: Late 2000s
- **Key Features**: High-speed mobile internet, support for HD video streaming, online gaming, and large file transfers
- **Speed**: 100 Mbps to 1 Gbps (with technologies like LTE Advanced)
- **Technology**: Uses **LTE (Long-Term Evolution)** and **WiMAX** in some cases
- **Data Services**: High-speed internet, video streaming, mobile gaming, VoIP (Voice over IP), and advanced applications
- **Significance**: Made mobile internet much faster and more reliable, enabling services like HD streaming, online gaming, and a more app-centric mobile experience.

> [!tip] This is where LTE is used!

### 4. **5G (Fifth Generation)**

- **Launched**: Late 2010s (still expanding globally)
- **Key Features**: Extremely fast data speeds, low latency, support for IoT (Internet of Things) devices, real-time services (e.g., autonomous driving), and more efficient handling of network traffic
- **Speed**: 1 Gbps to 10 Gbps or more
- **Technology**: Uses **mmWave (millimeter wave)** technology, massive MIMO (Multiple Input Multiple Output), and advanced beamforming techniques
- **Data Services**: Real-time services like augmented reality (AR), virtual reality (VR), 4K/8K video streaming, smart city infrastructure, autonomous vehicles, etc.
- **Significance**: Supports a massive increase in connected devices and opens up opportunities for futuristic technologies like smart cities, advanced robotics, and AI-driven applications.`
  },
  {
    "id": "2023A_FE_AM_34",
    "question": "Which of the following is a multicast IPv4 address?",
    "options": ["10.1.1.1","192.0.2.0","203.0.113.4","224.0.0.5"],
    "correctAnswer": 3,
    "solution": `Multicast addresses are used for multicast communication, where a single packet is sent to multiple recipients or hosts that have joined a multicast group.

These addresses fall within the **Class D IP address range**: \`224.0.0.0 - 239.255.255.255\`.

![Image](Files/Pasted%20image%2020241019185547.png)

## Other Answers

- **a) 10.1.1.1**: This is a private IP address from the **10.0.0.0/8** range used for private networks, not for multicast.
- **b) 192.0.2.0**: This is a reserved IP address used for documentation, not multicast.
- **c) 203.0.113.4**: This is another reserved IP address for documentation purposes.`
  },
  {
    "id": "2023A_FE_AM_35",
    "question": "Which of the following is a method for embedding a malicious java script code in the content sent to a victim’s web browser from a vulnerable website?",
    "options": ["Cross-site request forgery","Cross-site scripting","OGNL injection","SQL injection"],
    "correctAnswer": 1,
    "solution": `Cross-site scripting (XSS) works by manipulating a vulnerable website so that it sends malicious JavaScript to users.

When the malicious code executes inside a victim's browser, the attacker can steal cookies, browser data, and even perform actions on behalf of the user.

> One modern example is when you insert user content via \`document.getElementById("postContainer").innerHTML = userContent\`, and when \`userContent\` contains malicious JavaScript, it will execute in the browser.`
  },
  {
    "id": "2023A_FE_AM_36",
    "question": "Mr. A encrypts a message to be sent to Mr. B using an asymmetric key encryption method so that only Mr. B can decrypt the message. Which of the following is(are) the private key(s) used to decrypt the message?",
    "options": ["A third party’s","Both Mr. A’s and Mr. B’s","Only Mr. A’s","Only Mr. B’s"],
    "correctAnswer": 3,
    "solution": `Asymmetric encryption works with two keys: a public key and a private key. Mr. A uses Mr. B's public key to encrypt the message, and Mr. B uses his own private key to decrypt it. Therefore, only Mr. B's private key is used to decrypt the message.

![Image](Files/Pasted%20image%2020241019190724.png)`
  },
  {
    "id": "2023A_FE_AM_37",
    "question": "Which of the following is an attack using a trial-and-error method to obtain confidential information such as a user password or personal identification number (PIN)?",
    "options": ["Brute force","Denial of service","Man-in-the-middle","Sniffing"],
    "correctAnswer": 0,
    "solution": `A brute force attack systematically tries every possible combination until the correct one is found. For example, with a 2-digit PIN, a brute force attack tries \`00\`, \`01\`, \`02\`, ..., up to \`99\`.

Other answers:

- **Denial of service (DoS)** attacks overwhelm systems with requests to make them unavailable.
- **Man-in-the-middle** attacks intercept and alter communication between two parties.
- **Sniffing** captures and monitors data traffic but doesn’t actively try to guess passwords.`
  },
  {
    "id": "2023A_FE_AM_38",
    "question": "When information, such as an e-mail or a document file, is sent and received with a digital signature via the Internet, which of the following is an appropriate combination of security properties that ensure that such information is from the signer and has not been altered or tampered with during transmission?",
    "options": ["Atomicity and consistency","Authenticity and integrity","Availability and confidentiality","Durability and isolation"],
    "correctAnswer": 1,
    "solution": `The correct answer is **Authenticity and Integrity**.

- **Authenticity** ensures the message is from the correct sender.
- **Integrity** ensures the data has not been altered during transmission.

Other answers:

- **Atomicity and Consistency** deal with database transaction properties.
- **Availability and Confidentiality** are important but not specific to this case.
- **Durability and Isolation** are more related to transaction properties in databases.`
  },
  {
    "id": "2023A_FE_AM_39",
    "question": "Which of the following is an example of a behavior of a key logger?",
    "options": ["It interrupts the communication between two parties and then collects and falsifies the information being exchanged.","When Internet banking is used, it collects the password entered by the user.","When the user browses movies on a web browser, it arbitrarily displays unintended advertisements for the user.","When the web browser is started, it arbitrarily displays a toolbar that the user has not installed."],
    "correctAnswer": 1,
    "solution": `A **keylogger** is a piece of software or hardware that records every keystroke a user makes, often secretly. It tracks sensitive information like passwords or PINs. For example, when using Internet banking, a keylogger would capture the password entered by the user.

It is a form of **spyware**, as it monitors user activity without their knowledge.`
  },
  {
    "id": "2023A_FE_AM_40",
    "question": "Which of the following is a role of a PKI certification authority as a reliable third party?",
    "options": ["Adding a digital signature to an e-mail body as requested by a user","Enabling the synchronization of time by returning an accurate time to a user’s request","Issuing a digital certificate that certifies the private key of a user or server","Issuing a digital certificate that certifies the public key of a user or server"],
    "correctAnswer": 3,
    "solution": `Public Key Infrastructure (PKI) is used for secure communications through asymmetric encryption. A **Certification Authority (CA)** is responsible for issuing digital certificates that authenticate the identity of users, devices, or services. These certificates **certify the public key** associated with the user or server.

In asymmetrical encryption, the private key is kept secret, and only the public key is shared. Therefore, **option d** is correct, as the CA certifies the public key, not the private key.`
  },
  {
    "id": "2023A_FE_AM_41",
    "question": "![Image](Files/Pasted%20image%2020241019193229.png)",
    "options": ["A","B","C","D"],
    "correctAnswer": 1,
    "solution": "Encryption is used to obscure data so that only authorized parties can access it. In this case, encrypting the communication between the database connection programs ensures that sensitive information is protected during transmission."
  },
  {
    "id": "2023A_FE_AM_42",
    "question": "Companies usually provide a means for their mobile workforce to access the corporate network securely over the Internet through insecure channels such as open wireless networks in hotels or coffee shops. Which of the following is the appropriate technology that can be used for this purpose?",
    "options": ["DMZ (DeMilitarized Zone)","SNMP (Simple Network Management Protocol)","VoIP (Voice over Internet Protocol)","VPN (Virtual Private Network)"],
    "correctAnswer": 3,
    "solution": `A **VPN (Virtual Private Network)** creates a secure, encrypted connection over the internet, allowing users to access private networks securely even over insecure channels like open Wi-Fi networks.

Other answers:

- **DMZ** is a network area that isolates internal networks from external ones.
- **SNMP** is used for managing network devices.
- **VoIP** is for voice communication over the internet.`
  },
  {
    "id": "2023A_FE_AM_43",
    "question": "Which of the following is a technique that attempts to intrude into the system in order to detect security-related vulnerabilities of the computer or network?",
    "options": ["Penetration test","Regression test","Software inspection","Walk-through"],
    "correctAnswer": 0,
    "solution": `A **penetration test** simulates attacks on a system to identify security vulnerabilities and assess potential risks from malicious actors.

Other answers:

- **Regression test** ensures that new code doesn’t break existing functionality.
- **Software inspection** is a formal review process for finding defects.
- **Walk-through** is a review process where developers present their work to peers.`
  },
  {
    "id": "2023A_FE_AM_44",
    "question": "Which of the following is a key that the SSL/TLS certificate of a website contains?",
    "options": ["The encrypted private-key of the website","The encrypted public-key of the website","The unencrypted private-key of the website","The unencrypted public-key of the website"],
    "correctAnswer": 3,
    "solution": `An **SSL/TLS certificate** contains the **unencrypted public key** of the website, which is used to establish secure communication between the client and the server.

The **private key** is never shared in the certificate and is kept secret by the server.

The public key is made available to anyone connecting to the website to facilitate secure communication.`
  },
  {
    "id": "2023A_FE_AM_45",
    "question": "Which of the following is a description concerning a decision table that is one of the design techniques used in system development?",
    "options": ["It represents a combination of conditions and the corresponding operations.","It represents entities by rectangles and their relationship through connecting lines.","It represents the flow of controls, such as a process or selection, by straight lines or arrows.","It represents the flow of data between an external interface, processes, and data store."],
    "correctAnswer": 0,
    "solution": `A **decision table** is a tool used in system design that represents different conditions and the corresponding actions to be taken for each condition.

Other answers:

- **Entity Relationship Diagrams** represent entities and their relationships.
- **Flowcharts** represent control flows in processes.
- **Data Flow Diagrams** represent the flow of data in a system.`
  },
  {
    "id": "2023A_FE_AM_46",
    "question": "The integration test for software composed of modules arranged in a hierarchical structure is performed from a high-level module. In such a case, which of the following is a test module that is used as a substitute for a low-level module?",
    "options": ["Driver","Emulator","Simulator","Stub"],
    "correctAnswer": 3,
    "solution": `### d) Stub

A **test module** that simulates the behavior of a **low-level module** by providing hardcoded responses, allowing testing of higher-level modules in a hierarchical structure without needing the actual implementation of the low-level module.

### Differences between a Stub and a Driver

|Sr.No|Stub|Driver|
|---|---|---|
|**1**|It is used for the top down integration testing.|It is used for the bottom up integration testing.|
|**2**|It is known as a called program.|It is known as the calling program.|
|**3**|It is used when the lower level modules are not available.|It is used when the higher level modules are not available.|`
  },
  {
    "id": "2023A_FE_AM_47",
    "question": "Which of the following is the most appropriate feature of polymorphism in object-oriented programming?",
    "options": ["Developers are allowed to define classes incrementally by reusing classes defined previously as the basis for new classes.","Only the information required to use a software module is published to the module user.","The processes and data are combined into a single object.","The same message can be interpreted differently by different classes of objects"],
    "correctAnswer": 3,
    "solution": `### d) The same message can be interpreted differently by different classes of objects

**Polymorphism** allows a parent class method to be overridden by child classes, so the same method can behave differently depending on the object type invoking it. This is fundamental in **Object-Oriented Programming (OOP)**.

Example in Java:

\`\`\`Java
public static void main(String[] args) {
  Employee joe = new Employee("Average Joe");
  Employee chad = new Manager("Chad");

  joe.introduce(); // Hello, I am Average Joe, an employee!
  chad.introduce(); // Hello, I am Chad, and I manage a Local Branch.
}

public static class Employee {
  String name;
  int id;
  String department = "General";
  Employee(String n) {
    name = n;
  }
  void introduce() {
    System.out.println("Hello, I am " + name + ", an employee!");
  }
}

public static class Manager extends Employee {
  String department = "Local Branch";
  Manager(String n) {
    super(n);
  }
  @Override
  void introduce() {
    System.out.println("Hello, I am " + name + ", and I manage a " + department);
  }
}
\`\`\``
  },
  {
    "id": "2023A_FE_AM_48",
    "question": "Which of the following is approved by the customer when the external design of a system is completed?",
    "options": ["Physical database specification","Program flowchart","Screen layout","System development plan"],
    "correctAnswer": 3,
    "solution": `### c) Screen layout

When the external design of a system is completed, it typically involves creating the **user interface (UI)** and how the system will interact with the user. The **screen layout** is part of this external design.

### Other Choices

- **a) Physical database specification**: More related to **internal design**.
- **b) Program flowchart**: More related to **internal design**.
- **d) System development plan**: An overarching plan for development, not typically **approved by the customer** after external design.`
  },
  {
    "id": "2023A_FE_AM_49",
    "question": "Which of the following is an appropriate description of an extreme programming (XP) practice?",
    "options": ["After the code is created, and it is confirmed that it can be integrated, test cases are created.","Integration of the code and testing are continuously repeated.","The code that passed the tests is not refactored until the next iteration.","The customer is responsible for the specification of unit tests."],
    "correctAnswer": 1,
    "solution": `### b) Integration of the code and testing are continuously repeated.

**Extreme Programming (XP)** is an agile methodology where **continuous integration and testing** are key practices. Code is integrated and tested frequently to catch issues early.

### Why the Other Choices are Incorrect:

- **a) After the code is created, and it is confirmed that it can be integrated, test cases are created**: In XP, tests are written **before** code (Test-Driven Development).
- **c) The code that passed the tests is not refactored until the next iteration**: Refactoring is done continuously.
- **d) The customer is responsible for the specification of unit tests**: The customer provides **user stories** but **developers** write unit tests in XP.`
  },
  {
    "id": "2023A_FE_AM_50",
    "question": "Which of the following is a method that uses a modeling tool to create a design document described with E-R diagrams or other representations from the definition information in an active database?",
    "options": ["Concurrent engineering","Forward engineering","Reverse engineering","Social engineering"],
    "correctAnswer": 2,
    "solution": `### c) Reverse engineering

**Reverse engineering** involves analyzing an existing system to uncover its design, source code, or architecture. It is used to extract information from a functioning system.

### Other Terms

- **Forward engineering**: Development from specifications to a system.
- **Concurrent engineering**: Multiple development phases happen simultaneously.
- **Social engineering**: Manipulation of individuals to divulge confidential information.`
  },
  {
    "id": "2023A_FE_AM_51",
    "question": "![Image](Files/Pasted%20image%2020241019202636.png)",
    "options": ["A","B","C","D"],
    "correctAnswer": 1,
    "solution": `To solve this, we need to calculate the number of **one-on-one meetings** that occur when there are **10 members** and then compare that to the number of meetings when there are **12 members** (after adding two members).

### Step 1: Calculate the number of meetings with 10 members

The number of **one-on-one meetings** between 10 members is a combination problem. The number of ways to choose 2 members from a group of 10 (which is the number of one-on-one meetings) is given by the combination formula:

$\binom{n}{2} = \frac{n(n - 1)}{2}$

Where \(n\) is the number of members.

For 10 members, we can calculate the number of meetings as:

$\binom{10}{2} = \frac{10 \times (10 - 1)}{2} = \frac{10 \times 9}{2} = 45$

So, with 10 members, there are **45 one-on-one meetings**.

### Step 2: Calculate the number of meetings with 12 members

Now, if 2 more members are added, making it 12 members, we calculate the number of meetings again using the same combination formula:

$\binom{12}{2} = \frac{12 \times (12 - 1)}{2} = \frac{12 \times 11}{2} = 66$

So, with 12 members, there are **66 one-on-one meetings**.

### Step 3: Calculate the additional meetings

The additional meetings are the difference between the number of meetings with 12 members and the number of meetings with 10 members:

$\text{Additional meetings} = 66 - 45 = 21$

### Final Answer:
There will be **21 additional meetings** if two members are added to the team.`
  },
  {
    "id": "2023A_FE_AM_52",
    "question": "![Image](Files/Pasted%20image%2020241019203204.png)",
    "options": ["A","B","C","D"],
    "correctAnswer": 3,
    "solution": `This indicates that fewer new bugs are being found per test item, suggesting a stabilizing quality condition.

## What Constitutes Stable Quality?

**A stable quality condition** means that the rate of new bugs being discovered is decreasing as more test items are completed.

> [!tip] When a bug is discovered, making a test documents and stops it, but doesn't remove it from the cumulative calculation.
 > - cumulative means past number of bugs are still being included in the sum.
 > - \`[1, 2, 0, 0]\` the cumulative sum is still 3, not \`0\`, despite no more bugs being in the system.

## Other Choices

- **A)** shows a rapid decrease in the cumulative number of bugs, which is unrealistic as bugs are typically discovered throughout the testing process.
- **B)** shows a continuous increase in the cumulative number of bugs at a relatively constant rate, indicating no improvement in quality.
- **C)** shows a linear relationship between the number of completed test items and the cumulative number of bugs, suggesting a constant rate of bug discovery, which is not indicative of a stable quality condition.`
  },
  {
    "id": "2023A_FE_AM_53",
    "question": "![Image](Files/Pasted%20image%2020241019204336.png)",
    "options": ["A","B","C","D"],
    "correctAnswer": 1,
    "solution": `### Step 1: Calculate the total coding effort (in person-days)

We need to calculate how many person-days are required for coding each type of program and then sum them up:

1. **Input processing**:
   - Number of programs: 20
   - Person-days per program: 1
   $\text{Total for input processing} = 20 \times 1 = 20 \text{ person-days}$

2. **Output processing**:
   - Number of programs: 10
   - Person-days per program: 3
   $\text{Total for output processing} = 10 \times 3 = 30 \text{ person-days}$

3. **Calculation processing**:
   - Number of programs: 5
   - Person-days per program: 9
   $\text{Total for calculation processing} = 5 \times 9 = 45 \text{ person-days}$

#### Total coding effort:
$\text{Total coding person-days} = 20 + 30 + 45 = 95 \text{ person-days}$

### Step 2: Calculate the design and testing effort

According to the problem, design and testing activities require **8 times as many person-days** as coding.

$\text{Design and testing person-days} = 8 \times 95 = 760 \text{ person-days}$

### Step 3: Calculate the total effort

The total effort required to develop the system is the sum of the coding effort and the design and testing effort:

$\text{Total effort} = 95 \text{ (coding)} + 760 \text{ (design and testing)} = 855 \text{ person-days}$

### Step 4: Calculate the minimum number of staff members

We need to complete the project in **95 days**, and the total effort is **855 person-days**. To find the number of staff members required, we divide the total effort by the number of days:

$\text{Number of staff members} = \frac{855 \text{ person-days}}{95 \text{ days}} = 9 \text{ staff members}$

### Final Answer:
The minimum number of staff members required is **9**. Therefore, the correct answer is **b) 9**.`
  },
  {
    "id": "2023A_FE_AM_54",
    "question": "![Image](Files/Pasted%20image%2020241019234227.png)",
    "options": ["A->B->E->I->L","A->C->D->E->H->K","A->C->F->I->L","A->C->G->J->L"],
    "correctAnswer": 3,
    "solution": `## What is Critical Path in Project Management?

Also called critical path analysis (CPA), the critical path method (CPM) is a technique where you identify tasks that are necessary for project completion and determine scheduling flexibilities.

A critical path in project management is the **longest sequence of activities that must be finished on time in order for the entire project to be complete**.
- Any delays in critical tasks will delay the whole project.

## Finding the Answer

Based on the choices, we find the number of days required for all of them, by summing all the numbers for each path.

a) $A\to B\to E \to I \to L = 2 + 3 + 1 + 2 + 3 = 11$

b) $A \to C \to D \to E \to H \to K = 2 + 3 + 1 + 1 + 3 + 2 = 12$

c) $A \to C \to F \to I \to L = 2 + 3 + 3 + 2 + 3 = 13$

d) $A \to C \to G \to J \to L = 2 + 3 + 4 + 2 + 3 = 14$

As we can see, d) takes the longest and is therefore the Critical Path for this Arrow Diagram.`
  },
  {
    "id": "2023A_FE_AM_55",
    "question": "Which of the following is an appropriate policy for creating an SLA?",
    "options": ["Setting a compensation as a penalty for every item that has a service level","Setting a service level for every item that can be taken into consideration","Setting a service level that is maintained into the future without any changes","Setting a service level under the cost and needs of a service provider and its customers"],
    "correctAnswer": 3,
    "solution": `## What is an SLA?

An **SLA (Service Level Agreement)** is a formal contract between a service provider (or vendor) and a customer that defines the level of service expected from the provider.

It specifies key service metrics, responsibilities, and guarantees, and typically includes:
- Response time expectations
- Availability/uptime commitments
- Performance standards

## Appropriate Policy for SLA Creation

A well-crafted SLA should reflect the **costs and needs** of both the provider and the customer. This ensures the agreement is feasible for both parties and provides clear expectations.

### Why Other Choices Are Not Correct

- **A)** Compensation as a penalty could be too rigid and does not encourage a productive relationship.
- **B)** Setting a service level for every item may not be practical and could lead to overly complex SLAs.
- **C)** While setting a static service level might seem convenient, it’s not feasible in a dynamic environment where requirements and resources can change.

### Final Answer:
The correct policy for creating an SLA is **D**: Setting a service level under the cost and needs of a service provider and its customers.`
  },
  {
    "id": "2023A_FE_AM_56",
    "question": "Which of the following is the most appropriate characteristic of the “big bang” or all-at-once migration method that is one of the system migration methods?",
    "options": ["Additional operational costs are incurred because of parallel operations.","An additional application is required for connecting the old and new systems.","The old and new systems operate in parallel, and migration to the new system is performed at a particular point of time.","The problems that occur during migration to the new system have a big impact."],
    "correctAnswer": 3,
    "solution": `## The Big Bang (All-At-Once) Migration Method
In the big bang approach, the entire system is migrated from the old to the new system in a single, large-scale operation at a specific point in time. This means that all data, processes, and users are transitioned simultaneously. There is no parallel operation of the old and new systems after migration — the old system is typically shut down entirely.

### Characteristics of Big Bang Migration:
- **Immediate switch**: The transition happens all at once, meaning that when the migration is complete, users are immediately using the new system.
- **No parallel running**: Unlike other migration strategies, such as phased migration, the old system is decommissioned once the new system goes live.
- **High-risk but fast**: Since the entire system is swapped at once, any issues can cause major disruptions. However, it is quicker because there's no prolonged parallel operation.
- **Lower ongoing operational costs**: Since there is no need to run both systems at the same time, the migration itself can be cheaper in terms of operations, but only if things go smoothly.

### Other Choices
- **a)** This describes a phased migration where the old and new systems operate simultaneously for a time, which is not the case with the big bang approach.
- **b)** This might apply to a hybrid migration where two systems need to coexist temporarily.
- **c)** This describes a phased migration or parallel running strategy, which does not apply to the big bang method.`
  },
  {
    "id": "2023A_FE_AM_57",
    "question": "In IT service management, which of the following is a problem management activity that is performed proactively?",
    "options": ["Analyzing the occurrence trend of incidents and proposing measures that prevent an incident from occurring in the future","Classifying problems that have been detected and recorded, and setting the response priority","Evaluating the effectiveness of a resolution to a critical problem","Monitoring whether an incident occurs again or not for a certain period of time after the problem is resolved"],
    "correctAnswer": 0,
    "solution": `## Proactive Problem Management
Proactive means to do something preemptively without being prompted by some event or reacting to something external (Passive).

### Choices
- **b)** Classifying problems that have been detected and recorded, and setting the response priority
- **c)** Evaluating the effectiveness of a resolution to a critical problem
- **d)** Monitoring whether an incident occurs again or not for a certain period of time after the problem is resolved

### a) Analyzing the occurrence trend of incidents and proposing measures that prevent an incident from occurring in the future
We are proactively trying to find a pattern or trend of incidents and preemptively trying to find countermeasures to solve future problems.`
  },
  {
    "id": "2023A_FE_AM_58",
    "question": "Which of the following is a method that restores the system to its initial state and restarts it when a system failure occurs, that does not accompany preprocessing of a copy before/after an update, and that is also called initial program load?",
    "options": ["Cold start","Rollback","Rollforward","Warm start"],
    "correctAnswer": 0,
    "solution": `## Cold Start
It happens when the server, container, PC, device, etc. is turned off and it needs to power up & load your application. This matches the question description about 'initial program load'.

### Other Answers
- **b) Rollback**: Refers to reverting a system to a previous state, not restoring it to an initial state.
- **c) Rollforward**: Refers to applying changes to move a system forward.
- **d) Warm start**: Involves reusing existing data structures and caches, but does not restore the system to its initial state.`
  },
  {
    "id": "2023A_FE_AM_59",
    "question": "Which of the following is an explanation of an audit work paper?",
    "options": ["A compilation of the information security promissory letter that is presented to the audited department when the auditor implements an audit","A compilation of the standards and guidelines used by the auditor for implementing an audit","A document that must be disclosed along with the audit report to prove that the auditor has fulfilled his or her obligations with proper attention","An execution record of the auditing procedure by an auditor, and it forms the basis of the audit opinion"],
    "correctAnswer": 3,
    "solution": `## Audit Work Paper
An audit work paper is a document that provides a detailed record of the auditing procedures performed by an auditor, along with the evidence gathered during the audit process. These papers are essential for documenting the auditor’s work and supporting the conclusions and opinions expressed in the final audit report. They serve as the foundation of the audit opinion.

### Other Answers
- **a)** Refers to something unrelated to the audit work paper.
- **b)** The audit work paper is not about standards and guidelines; it's about execution.
- **c)** The work paper is confidential and not necessarily disclosed with the audit report.`
  },
  {
    "id": "2023A_FE_AM_60",
    "question": "Which of the following is an appropriate description concerning a system audit team?",
    "options": ["For an audit of the development progress in an information systems department, the audit team consists of members of the information systems department who are familiar with the details of the development.","In order to enable the person requesting the audit to issue improvement instructions on the basis of the audit report, the system audit team reports the audit results to the person requesting the audit.","When an audit of the information system is performed as a part of the business operations audit, the audit team is formed by the members of the user’s department.","When the system audit team accepts the help of an expert, the decisions concerning the range of support, methods, and audit results is the responsibility of the expert."],
    "correctAnswer": 1,
    "solution": `## What is a System Audit Team?
A system audit team typically consists of diverse professionals with varying skills and expertise. The team ensures comprehensive audit coverage and retains responsibility for the audit process.

### Other Choices
- **a)** Auditors should not come from the department being audited.
- **c)** Audit independence is crucial for objectivity.
- **d)** The audit team retains responsibility for the audit process.`
  }
];
