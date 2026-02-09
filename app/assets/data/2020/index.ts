export default [
  {
    "id": "2020A_FE_AM_1",
    "question": "When the decimal arithmetic expression, $\\frac{7}{32}$, is evaluated, which of the following represents the result in binary?",
    "options": ["0.001011","0.001101","0.00111","0.0111"],
    "correctAnswer": 2,
    "solution": `## Usual Method
### Step 1: Divide 7 by 32

$\frac{7}{32} = 0.21875$

### Step 2: Convert 0.21875 to binary.

$0.21875 \times 2 = 0.4375$ (integer is 0).
$0.4375 \times 2 = 0.875$ (integer is 0).
$0.875 \times 2 = 1.75$ (integer is 1).
$0.75 \times 2 = 1.5$ (integer is 1).
$0.5 \times 2 = 1.0$ (integer is 1, and we stop since the fraction is now 0).

### Step 3: Put it together from top to bottom

$0.00111$ (**final answer**)

## Shifting Method (only applicable to powers of 2)
### Step 1: Check if the denominator is a power of 2.

$32 = 2^{5}$ (32 is a power of 2, so the shifting method is applicable)
### Step 2: Write the numerator in binary.

$7 = 111$
### Step 3: Shifting the binary representation
#### How shifting works
- The shifting method is only **applicable** if the following conditions are met:
	- The *denominator* is a ***power of 2***. If the question here were was $\frac{7}{27}$, the shifting method cannot be used since 27 is not a power of 2.
	- During only ***multiplication*** and ***division*** operations. So for questions that require the addition or subtraction of decimal no. the shifting method cannot be used to convert that decimal no. to binary.
- If **multiplication**, you have to ***left-shift***. If **division**, you have to ***right-shift***.
- The amount of shifting to be done is dependent on $2^{n}$, $n$ here is $5$, so we have to shift 5 times here. In this case, we ***right-shift*** because the operation used was **division**.

$111$ (***right-shift*** **5** times) -> $00111$
- Since the decimal conversion wasn't a whole no. then we add $0.$ to obtain the final result.
$00111$ -> $0.00111$
- Therefore, the final answer is $0.00111$.`
  },
  {
    "id": "2020A_FE_AM_2",
    "question": "![Image](Files/Pasted%20image%2020241019112353.png)",
    "options": ["$(p \\cdot (\\overline{p} + q)) \\cdot \\overline{q}$","$(p \\cdot \\overline{q}) \\cdot (\\overline{p} + \\overline{q})$","$p + (p \\cdot q)$","$\\overline{p} + (p \\cdot \\overline{q}) + q$"],
    "correctAnswer": 0,
    "solution": `### Step 1: Simplify the innermost part.

$\overline{p} + q$
- The value of this expression is **TRUE** whenever $p$ is **FALSE** and $q$ is **TRUE**.

### Step 2: Evaluate the left-most expression.

$p \cdot (\overline{p} + q)$
- The value of this expression is **TRUE** when $p$ is **TRUE** and $\overline{p} + q$ is also **TRUE**.
- However, if $p$ is **TRUE**, then $\overline{p} + q$ depends only on $q$. If $q$ is **FALSE**, the whole expression $(p \cdot (\overline{p} + q)) \cdot \overline{q}$ becomes FALSE.

### Step 3: Evaluate the whole expression.

$(p \cdot (\overline{p} + q)) \cdot \overline{q}$
- $\overline{q}$ is **TRUE** if $q$ is **FALSE**.
- For the whole expression to be **TRUE**, $p \cdot (\overline{p} + q)$ must be **TRUE** and $\overline{q}$ must also be **TRUE**.
- This means $q$ must be **FALSE**. But if $q$ is **FALSE**, the entire expression also becomes **FALSE**.
- If $p$ is **FALSE**, then the $p \cdot (\overline{p} + q)$ expression is **FALSE** as well.
- Therefore, this expression always evaluates to **FALSE**, regardless of the truth values of $p$ and $q$.

Therefore it's a **contradiction**.`
  },
  {
    "id": "2020A_FE_AM_3",
    "question": "A factory manufactures the same products on two production lines, A and B. Line A manufactures $60$% of all products, and B manufactures the remaining $40$%. Defect rates of products manufactured in A and in B are $2$% and $1$%, respectively. When a product was randomly chosen for inspection among the products manufactured in this factory, it was found to be defective. What is the percentage of probability that the product was manufactured in Line A?",
    "options": ["40","50","60","75"],
    "correctAnswer": 3,
    "solution": `### Step 1: Calculate the total defective products for each line.

Line A: $60\% \times 2\% = 1.2\%$ of total products
- Line A has a total of $1.2\%$ of defective products.
Line B: $40\% \times 1\% = 0.4\%$ of total products
- Line B has a total of $0.4\%$ of defective products.

### Step 2: Combine both to calculate the total percentage of defective products.

Total defects = $1.2\% + 0.4\% = 1.6\%$ of total products
- $1.6\%$ of all products are defective.

### Step 3: Find the proportion of defective products from Line A.

$\frac{Defects from A}{Total defects} = \frac{1.2}{1.6} = 0.75$
- Therefore, there's a $75\%$ chance of probability that the product was manufactured in A.`
  },
  {
    "id": "2020A_FE_AM_4",
    "question": "For an $8$-bit code with the most significant bit as its parity bit, which of the following is used to obtain the lower seven ($7$) bits other than parity?",
    "options": ["Perform a bitwise AND operation with $0$F in hexadecimal","Perform a bitwise AND operation with $7$F in hexadecimal","Perform a bitwise OR operation with $0$F in hexadecimal","Perform a bitwise XOR (exclusive OR) operation with FF in hexadecimal"],
    "correctAnswer": 1,
    "solution": `### Illustration
![Image](Files/Pasted%20image%2020241019155644.png)

- Therefore, the correct answer is b).`
  },
  {
    "id": "2020A_FE_AM_5",
    "question": "In machine learning, which of the following is an appropriate explanation of supervised learning?",
    "options": ["Clusterizing input data according to the statistical features or specific conditions of the data without any explicit processing beforehand","Learning to achieve the highest score from rating good and bad aspects of individual actions","Predicting a subsequent user action from the frequency of appearances of behavioral data accumulated from computer users","Training by feeding input data and their correct output so that the response to unknown data is improved"],
    "correctAnswer": 3,
    "solution": `### Explanation:

- In supervised learning, the machine is trained on a labeled dataset, where each training example consists of an input paired with a correct output (label). The goal for the machine is to map inputs to outputs such that when the machine encounters new unseen data, it can make accurate predictions.`
  },
  {
    "id": "2020A_FE_AM_6",
    "question": "![Image](Files/Pasted%20image%2020241021154848.png)",
    "options": ["A","B","C","D"],
    "correctAnswer": 1,
    "solution": `### Explanation:

- Each node in a BST has at most **two children**, a *left* child and a *right* child. The *left* child contains values **less than** the *parent* node, and the *right* child contains values **greater than** the parent node.`
  },
  {
    "id": "2020A_FE_AM_7",
    "question": "Which of the following is a description of quicksort algorithm?",
    "options": ["It repeats the process of comparing and swapping each pair of adjacent elements so that smaller elements are gradually moved towards the end.","It repeats the process of finding the minimum element of the data, followed by its removal.","It repeats the process of inserting each element of data into the correct position of a sorted sequence.","It repeats the process of selecting an element as a pivot and partitions the data so that smaller elements appear before the pivot, and larger elements appear afterwards."],
    "correctAnswer": 3,
    "solution": `### Explanation:

- ***Quicksort*** is a sorting algorithm that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.`
  },
  {
    "id": "2020A_FE_AM_8",
    "question": "![Image](Files/Pasted%20image%2020241021170001.png)",
    "options": ["4","9","10","11"],
    "correctAnswer": 3,
    "solution": `### Step 1: Setup the variables.

A (L) = $876$
B (S) = $204$

### Step 2: Understanding the Process.

How does the *Euclidean* algorithm work based on the illustration?
- **Condition 1:** If $L > S$, subtract $S$ from $L$.
- **Condition 2:** If $L < S$, subtract $L$ from $S$.
- **Condition 3:** If $L = S$, terminate the process.
Hence, the algorithm terminates once $L$ is equal to $S$.

### Step 3: Commence the algorithm.

- **First comparison**:
    - $L = 876$ | $S = 204$
    - $L > S$, so subtract $S$ from $L$. $L = 876 - 204 = 672$.
- **Second comparison**:
    - $L = 672$ | $S = 204$
    - $L > S$, so subtract $S$ from $L$. $L = 672 - 204 = 468$.
- **Third comparison**:
    - $L = 468$ | $S = 204$
    - $L > S$, so subtract $S$ from $L$. $L = 468 - 204 = 264$.
- **Fourth comparison**:
    - $L = 264$ | $S = 204$
    - $L > S$, so subtract $S$ from $L$. $L = 264 - 204 = 60$.
- **Fifth comparison**:
    - $L = 60$ | $S = 204$
    - $L < S$, so subtract $L$ from $S$, $S = 204 - 60 = 144$
- **Sixth comparison**:
    - $L = 60$ | $S = 144$
    - $L < S$, so subtract $L$ from $S$, $S = 144 - 60 = 84$
- **Seventh comparison**:
    - $L = 60$ | $S = 84$
    - $L < S$, so subtract $L$ from $S$. $S = 84 - 60 = 24$.
- **Eighth comparison**:
    - $L = 60$ | $S = 24$
    - $L > S$, so subtract $S$ from $L$. $L = 60 - 24 = 36$.
- **Ninth comparison**:
    - $L = 36$ | $S = 24$
    - $L > S$, so subtract $S$ from $L$. $L = 36 - 24 = 12$.
- **Tenth comparison**:
    - $L = 12$ | $S = 24$
    - $L < S$, so subtract $L$ from $S$. $S = 24 - 12 = 12$.
- **Eleventh comparison**:
    - $L = 12$ | $S = 12$
    - $L == S$, so the algorithm terminates.
Therefore, there's exactly $11$ comparisons needed to obtain the result.`
  },
  {
    "id": "2020A_FE_AM_9",
    "question": "![Image](Files/Pasted%20image%2020241022151351.png)",
    "options": ["[1, 2, 3, 1, 2, 3]","[1, 2, 3, 3, 2, 1]","[3, 2, 1, 1, 2, 3]","[3, 2, 1, 3, 2, 1]"],
    "correctAnswer": 0,
    "solution": `### Understanding the Process:

![Image](Files/Pasted%20image%2020241022151441.png)`
  },
  {
    "id": "2020A_FE_AM_10",
    "question": "![Image](Files/Pasted%20image%2020241022151952.png)",
    "options": ["315","360","1215","1260"],
    "correctAnswer": 1,
    "solution": `### Step 1: Identify what type of cache access it is.

**Simultaneous Cache Access**: The CPU accesses both the cache and the main memory at the ***same time*** (parallel).
**Hierarchical Cache Access**: The CPU first accesses the cache memory.
- Based on the first sentence, we can directly see that it's a **Hierarchical Cache Access**.

### Step 2: Calculate the Hit Ratio

Hit ratio $= 1 -$ Miss ratio
$1 - 0.2 = 0.8$ | **Hit ratio** $= 0.8$

### Step 3: Apply the formula.

Formula: Average Access Time = (Hit Ratio x Cache Access Time) + (Miss Ratio x Main Memory Access Time)
$= (0.8 \cdot 75) + (0.2 \cdot 1500) = 360$`
  },
  {
    "id": "2020A_FE_AM_11",
    "question": "Which of the following causes an external interrupt?",
    "options": ["Notification of elapsed time by a timer","The execution of a division-by-zero instruction","The execution of a non-existent operation code","The occurrence of a page fault"],
    "correctAnswer": 0,
    "solution": `### Explanation:

- **External interrupts** are caused by events originating outside the CPU, such as hardware signals (e.g., timers, input/output devices).
- **Internal interrupts** (or exceptions) are generated by the processor itself, typically due to errors or unusual conditions during program execution.`
  },
  {
    "id": "2020A_FE_AM_12",
    "question": "Which of the following is an appropriate explanation of a device driver?",
    "options": ["Software to control peripheral devices that are connected to a PC","Software to install an application on a PC","Software to invade another PC and cause damage","Software to register the operation procedures for a keyboard or other devices and to automate this operation"],
    "correctAnswer": 0,
    "solution": `### Explanation:

- A device driver is a special kind of software program that controls a specific hardware attached to a computer.`
  },
  {
    "id": "2020A_FE_AM_13",
    "question": "ECC is used for error detection and correction in memory. When n+2 redundant bits are required for a data bus having a width of 2n bits, what is the number of redundant bits that are required for a data bus having a width of 128 bits?",
    "options": ["3","8","9","10"],
    "correctAnswer": 2,
    "solution": `### Step 1: Express 128 as a power of 2.

Data bits $= 128$
$128 = 2^{7}$

### Step 2: Apply the formula provided.

Number of redundant bits $= n + 2$
$= 7 + 2 = 9$`
  },
  {
    "id": "2020A_FE_AM_14",
    "question": "In a web system, which of the following is an appropriate benefit of a web server and an application (AP) server being placed on different physical servers?",
    "options": ["Because the business logic that accompanies an access to data is placed in a program on the web server, the program on the AP server does not need to be changed in association with a change in the business logic.","Because the difference between the character coding scheme of the web browser and that of the AP server is absorbed by the web server, garbled (or unreadable) characters do not appear.","Because the execution environment of the client is implemented on the web server, the client and the AP server do not need to exchange screen data for each request, and only a small amount of data communication is required.","Processing can be distributed according to the type of request from a client in such a way that a request for static content having a light load is processed by the web server, and a request for dynamic content having a heavy load is processed by the AP server."],
    "correctAnswer": 3,
    "solution": `### Explanation:

a) **Incorrect**
- Business logic is usually handled by the **application server**, not the web server. Changing business logic would require updates on the AP server, not the web server.

b) **Incorrect**
- Encoding issues are usually addressed in the software, not in server separation.

c) **Incorrect**
- The **web server** doesn't run the execution environment of the client (typically a browser). The separation of the web and application servers doesn't reduce client-server communication, as data still needs to be exchanged.

d) **Correct**
- Separating the web server and AP server allows for load balancing:
	- **Static content** (HTML, CSS, images) is handled by the **web server**.
	- **Dynamic content** (database queries or business logic) is processed by the application server.

Option 'd' highlights the primary benefit of separating web and application servers, which is the ability to optimize and distribute processing load efficiently between static and dynamic content.`
  },
  {
    "id": "2020A_FE_AM_15",
    "question": "Which of the following achieves data redundancy via mirroring?",
    "options": ["RAID 0","RAID 1","RAID 5","RAID 6"],
    "correctAnswer": 1,
    "solution": `### Explanation:

- **a) RAID 0**: This does **not** provide redundancy. Instead, it uses **striping**, where data is split across multiple disks. It improves performance but offers no fault tolerance—if one disk fails, all data is lost.

- **c) RAID 5**: This uses **striping with parity**, which provides fault tolerance by distributing parity information across the drives. RAID 5 can tolerate one drive failure but does not use mirroring.

- **d) RAID 6**: Similar to RAID 5, RAID 6 uses **striping with double parity**, allowing it to tolerate two simultaneous drive failures. However, it does not use mirroring.

**a) Incorrect**
- RAID 0 uses **striping**, where data is split across multiple disks. It improves performance but offers no fault tolerance—if one disk fails, all data is lost.

**c) Incorrect**
- RAID 5 uses **striping with parity**, which provides fault tolerance by distributing parity information across the drives. RAID 5 can tolerate one drive failure.

**d) Incorrect**
- RAID 6 uses **striping with double parity**, allowing it to tolerate two simultaneous drive failures.

**b) Correct**
- RAID 1 uses **mirroring**, where all data is written to two (or more) drives simultaneously. This creates an exact copy (mirror) of the data on multiple drives, ensuring redundancy. If one drive fails, the data can still be retrieved from the other mirrored drive(s).`
  },
  {
    "id": "2020A_FE_AM_16",
    "question": "Which of the following is an appropriate description of the dispatcher in an operating system?",
    "options": ["A function in which multiple tasks appear to be running simultaneously on a single processor","The allocation of the right to use a processor for a ready process","The context that is the information required for process execution","The determination of the order of execution for each process"],
    "correctAnswer": 1,
    "solution": `### Explanation:

**a) Incorrect**
- The process described is **multitasking**, where the operating system switches between tasks quickly to give the appearance of simultaneous execution.

**c) Incorrect**
- This refers to the **process control block (PCB)**, which holds the state and context information of a process.

**d) Incorrect**
- This refers to **scheduling**, which simply executes the decisions made by the scheduler.

**b) Correct**
- The ***dispatcher*** is responsible for the actual handover of CPU control from one process to another, allocating the processor to a process that is ready to run.`
  },
  {
    "id": "2020A_FE_AM_17",
    "question": "Among the processes that are performed by a compiler for a procedural language, which of the following is the process that is performed first?",
    "options": ["Lexical analysis","Optimization","Semantic analysis","Syntactic analysis (parsing)"],
    "correctAnswer": 0,
    "solution": `### Explanation:

b) **Incorrect**
- This phase occurs much later in the compilation process.

c) **Incorrect**
- This phase follows syntactic analysis.

d) **Incorrect**
- This phase comes after lexical analysis (second phase).

a) **Correct**
- This phase is first step in the compilation process, where the compiler reads the source code and converts it into tokens.`
  },
  {
    "id": "2020A_FE_AM_18",
    "question": "![Image](Files/Pasted%20image%2020241023183937.png)",
    "options": ["A","B","C","D"],
    "correctAnswer": 2,
    "solution": `### Step 1: Break down the problem.

- **Task A** has **high priority**.
- **Task B** has **medium priority**.
- **Task C** has **low priority**.
	- Each task alternates between **CPU** and **I/O operations**.
	- The total execution window we are concerned with is from $3$ ms to $10$ ms ($7$ ms total).

### Step 2: Review the Task Information

![Image](Files/Pasted%20image%2020241023184645.png)
- Task **A**, **B**, and **C** start simultaneously at $3$ ms. Our goal is to determine which scheduling diagram correctly represents the process execution.
### Step 3: Apply the concept of Priority Based Scheduling

In **priority scheduling**, the task with the highest priority gets the CPU whenever it is available. If a task is doing I/O, the CPU is allocated to the next highest-priority task that is ready for CPU execution.

- **Task A (High priority)**:
	- Starts at $3$ ms with $2$ ms of CPU time, so it will run from **3 ms to 5 ms**.
	- It will then need I/O for $2$ ms (from **5 ms to 7 ms**), during which the CPU is free for another task.
- **Task B (Medium priority)**:
	- While Task A is doing I/O (from **5 ms to 7 ms**), Task B can start its CPU execution since it has the next highest priority.
	- Task B needs $3$ ms of CPU, but since it can only execute for $2$ ms before Task A is ready to reclaim the CPU, Task B will run from **5 ms to 7 ms**.
	- Task B will now be interrupted to let Task A finish its CPU burst.
- **Task A resumes**:
	- At **7 ms**, Task A finishes its I/O and reclaims the CPU for its final $2$ ms burst. Task A completes at **9 ms**.
- **Task B resumes**:
	- After Task A finishes at $9$ ms, Task B will resume and complete its final $1$ ms of CPU time (since it only ran for 2 ms earlier).
	- Task B completes at **10 ms**.
- **Task C (Low priority)**:
	- Task C can only start its execution once both higher-priority tasks are either in I/O or completed.
	- Task C will start at **7 ms**, as Task A is doing I/O and Task B is running.
	- Task C performs $2$ ms of CPU from **7 ms to 9 ms**, and then will need I/O. However, Task A resumes and finishes before Task C gets a chance to proceed further.

### Step 4: Summarize and Conclude

Summary:
- **From 3 ms to 5 ms**: Task A executes on the CPU.
- **From 5 ms to 7 ms**: Task B executes on the CPU while Task A is doing I/O.
- **At 7 ms**: Task A resumes and completes its remaining CPU execution (from 7 ms to 9 ms).
- **From 7 ms to 9 ms**: Task C starts executing but is interrupted for I/O after 2 ms.
- **At 9 ms**: Task B completes its remaining 1 ms of CPU time.

Therefore, the correct answer is option c because:
- **Task A** runs from **3 to 5 ms (CPU)** and **7 to 9 ms (CPU)**.
- **Task B** runs from **5 to 7 ms (CPU)** and finishes from **9 to 10 ms**.
- **Task C** runs from **7 to 9 ms** and is **then interrupted for I/O**.`
  },
  {
    "id": "2020A_FE_AM_19",
    "question": "Which of the following represents appropriate handling for open source software according to OSI's definition?",
    "options": ["For open- source software that is created for a specific industry, the scope of publishing of the source code can be limited to that industry.","If open- source software is to be modified for uses such as internal use by a company without being redistributed, the modified part of the source code does not have to be published.","When open- source software is modified and redistributed, the same license as the original software must be used for distribution so that the distribution conditions are remain the same as the original software.","When open- source software is redistributed by a third party as a product, the developer of the open- source software can charge a license fee to the third party."],
    "correctAnswer": 2,
    "solution": `### Definition:

The Open Source Initiative (OSI) defines open-source software as software that meets certain criteria:
- **Free redistribution:** The software must be freely redistributable, including the right to sell copies.
- **Source code availability:** The source code must be made available, allowing users to modify and improve the software.
- **Derivative works:** Users must be allowed to create derivative works of the software and distribute them.
- **No discrimination against persons or groups:** The software cannot discriminate against any person or group.
- **No discrimination against fields of endeavor:** The software cannot be restricted to any particular field of endeavor.
- **Distribution of license terms:** The license terms must be attached to the software and must allow for redistribution.

### Comparison:

a) **Incorrect**
- It limits the scope of publishing the source code to a specific industry, which violates the principle of "free redistribution" and "no discrimination against fields of endeavor."

b) **Incorrect**
- It suggests that modified parts of the software do not need to be published if they are not being redistributed, which violates the principle of "source code availability" and "derivative works".

d) **Incorrect**
- It suggests that the original developer can charge a license fee for redistribution by a third party, which violates the principle of "free redistribution".

c) **Correct**
- It directly addresses the requirement for "free redistribution" and ensures that the same conditions for distribution are maintained when the software is modified and redistributed.`
  },
  {
    "id": "2020A_FE_AM_20",
    "question": "Which of the following is an appropriate description of DRAM?",
    "options": ["It is memory that requires a refresh operation, and it is used as the main memory of a PC.","It is non-volatile memory of a NAND type or a NOR type, and it is used as an SSD.","It is non-volatile memory that is capable of erasing and writing data in byte units, and it is used when data need to be retained even when the power supply is turned off.","Its memory cells consist of flip-flops, and it is used for cache memory."],
    "correctAnswer": 0,
    "solution": `### Explanation:

b) **Incorrect**
- It describes flash memory, which is a type of non-volatile memory used in solid-state drives (SSDs).

c) **Incorrect**
- It describes NOR flash memory, which is another type of non-volatile memory used in embedded systems and microcontrollers.

d) **Incorrect**
- It describes SRAM (Static Random Access Memory), which is another type of volatile memory used for cache memory.

a) **Correct**
- DRAM is a type of volatile memory that requires periodic refreshing to retain its data. It is the most common type of main memory used in computers due to its high capacity and relatively low cost.`
  },
  {
    "id": "2020A_FE_AM_21",
    "question": "Which of the following is a secondary (rechargeable) battery?",
    "options": ["Alkaline–manganese dry-cell battery","Fuel cell","Lithium-ion battery","Silver-oxide battery"],
    "correctAnswer": 2,
    "solution": `### Explanation:

- **a) Incorrect**: It's a primary battery, meaning it cannot be recharged.
- **b) Incorrect**: It's a device that converts chemical energy into electrical energy. While it can generate electricity for extended periods, it's not technically a battery.
- **d) Incorrect**: It's a primary battery and cannot be recharged.
- **c) Correct**: It's a secondary battery, meaning it can be recharged multiple times.`
  },
  {
    "id": "2020A_FE_AM_22",
    "question": "![Image](Files/Pasted%20image%2020241023182339.png)",
    "options": ["A","B","C","D"],
    "correctAnswer": 2,
    "solution": `### Explanation:

**OR Gate Output**: Z = X + Y

**Desired NAND Gate Output**: Z = ¬(X * Y)

**Connecting the NOT Gate**:
- To convert the OR gate output to a NAND gate output, we need to negate the output of the OR gate.
- Adding a NOT gate to the output of the OR gate inverts the OR gate’s output, thus achieving Z = ¬(X + Y).

![Image](Files/Pasted%20image%2020241023183403.png)`
  },
  {
    "id": "2020A_FE_AM_23",
    "question": "Which of the following is an appropriate usage of radio buttons in GUI applications?",
    "options": ["To select multiple items from a group of items","To select one item from a group of mutually exclusive items","To select one item from a list or to enter new item into a text box","To select one item from a list that is displayed when a button is pressed"],
    "correctAnswer": 1,
    "solution": `### Explanation:

- **a) Incorrect**: Check boxes are used when multiple selections are allowed.
- **c) Incorrect**: Combo box or dropdown menu is used to enter new text.
- **d) Incorrect**: Dropdown menu allows users to choose one item from a list that appears only when the button is pressed.
- **b) Correct**: Radio buttons are designed for selecting a single option from a group of mutually exclusive choices.`
  },
  {
    "id": "2020A_FE_AM_24",
    "question": "Which of the following is a method of improving the appearance of a jagged edge of a slanted line to be smoothed on a screen, such as that of an LCD?",
    "options": ["Anti-aliasing","Bump mapping","Shading","Texture mapping"],
    "correctAnswer": 0,
    "solution": `### Explanation:

- **b) Incorrect**: Bump mapping is a technique used to create the illusion of surface detail and texture without adding more geometry.
- **c) Incorrect**: Shading refers to the process of adjusting the color and brightness of surfaces in 3D models to simulate light and shadow, giving a sense of depth and realism.
- **d) Incorrect**: Texture mapping is the process of applying a 2D image (a texture) onto the surface of a 3D model to add detail like color or patterns.
- **a) Correct**: Anti-aliasing is a technique used to reduce the appearance of jagged edges (also known as "aliasing") on diagonal or curved lines on a digital screen.`
  },
  {
    "id": "2020A_FE_AM_25",
    "question": "![Image](Files/Pasted%20image%2020241023152758.png)",
    "options": ["A","B","C","D"],
    "correctAnswer": 2,
    "solution": `### Step 1: Understanding Function Dependency

Functional Dependencies basically work like this:
- A → B: Knowing A allows us to determine B
- A → C: Knowing A allows us to determine C
- CP → Q: Knowing both C and P allows us to determine Q
- CP → T: Knowing both C and P allows us to determine T

### Step 2: Apply and Compare

- **a) Incorrect**: Knowing A only allows us to derive both B and C.
- **b) Incorrect**: Knowing A only allows us to derive both B and C. We cannot derive anything with B.
- **d) Incorrect**: Knowing C and P only allows us to derive both Q and T.
- **c) Correct**: Knowing A allows us to derive both B and C. Now, knowing C and P allows us to derive both Q and T.

Thus, A and P can determine all attributes in the relation.`
  },
  {
    "id": "2020A_FE_AM_26",
    "question": "![Image](Files/Pasted%20image%2020241023180435.png)",
    "options": ["A","B","C","D"],
    "correctAnswer": 3,
    "solution": `### Understanding the SQL Query Logic:

Let's break down the logic needed for the SQL Query in this problem:
1. **Goal of the Query**:
    - We want to retrieve the **Manager_ID** and the **average salary** of the employees reporting directly to each manager. The query must be structured to join the employee table with itself to compare employees and their managers.
2. **Self-Join (Employees a, Employees b)**:
    - We are joining the \`Employees\` table with itself (aliasing as \`a\` and \`b\`).
    - In this case:
        - \`a\` represents the **employees** (whose salaries we are averaging).
        - \`b\` represents the **managers** of those employees.
3. **Columns E and F**:
    - We need to retrieve the **Manager_ID** for each manager and the average salary of their employees.
4. **Correct Mapping of E and F**:
    - **E** is the **Manager_ID** (from table \`b\`, because \`b\` represents the managers).
    - **F** is the **Emp_ID** (from table \`a\`, because \`a\` represents the employees who report to the managers).
    - This is based on the \`WHERE\` condition, which checks if \`a.Manager_ID = b.Emp_ID\`. This condition matches each employee (\`a\`) with their manager (\`b\`).
5. **Grouping and Ordering**:
    - We group by the **Manager_ID** (\`b.Emp_ID\`), as we want to calculate the average salary of the employees for each manager.
    - We also order the results by **Manager_ID** (\`b.Emp_ID\`) to display the managers in order.

### Why option d is correct?:

- **E** should be \`b.Emp_ID\`, which represents the **Manager_ID** in the final output (because \`b\` is the manager).
- **F** should be \`a.Manager_ID\`, which represents the manager's ID in relation to the employee (because \`a\` is the employee).`
  },
  {
    "id": "2020A_FE_AM_27",
    "question": "![Image](Files/Pasted%20image%2020241023181132.png)",
    "options": ["A","B","C","D"],
    "correctAnswer": 3,
    "solution": `### Understanding the Relationships and Conditions:

Let's break them down:
1. **Condition (1): One or more employees belong to a department.**
    - This implies that a department must have at least one employee, but it can have many employees.
    - This is reflected by a **1..*** multiplicity on the department side (because each department must have at least one employee, but can have many).
    - Therefore, the multiplicity in **I** (on the side of 'Department') should be **1..***.
2. **Condition (2): An employee belongs to only one department.**
    - This implies that an employee cannot belong to more than one department at the same time (i.e., one-to-one relationship at any given moment).
    - This is represented by a multiplicity of **1..1** on the employee side in the 'Assignment history' entity. In the context of the 'Assignment history,' each entry will correspond to exactly one employee and exactly one department at a given time.
3. **Condition (3): The history of departments to which an employee has belonged is recorded as the assignment history.**
    - This means an employee can have many entries in the assignment history, reflecting multiple departments they have belonged to over time.
    - Thus, the 'Assignment history' can have multiple entries per employee, making the multiplicity on the employee side **1..*** (because an employee can have multiple assignment records, but each record belongs to one employee at a time).
    - Therefore, the multiplicity in **II** (on the side of 'Employee') should be **1..***.

### Why option d is correct?:

- **I** (Department side of the assignment history): A department can have one or more employees. Hence, the multiplicity is **1..***.
- **II** (Employee side of the assignment history): An employee can have multiple assignments in the history (but each assignment relates to exactly one employee). Hence, the multiplicity is **1..***.`
  },
  {
    "id": "2020A_FE_AM_28",
    "question": "When a failure occurs in a storage unit that stores a database, which of the following is an operation that can recover the database by using backup files and a log?",
    "options": ["Archive","Checkpoint dump","Commit","Rollforward"],
    "correctAnswer": 3,
    "solution": `### Explanation:

- **a) Incorrect**: **Archiving** refers to the process of moving data that is no longer actively used to a separate storage location for long-term retention.

- **b) Incorrect**: **Checkpoint dump** is a point-in-time snapshot of the database taken at regular intervals.

- **c) Incorrect**: **Commit** indicates that a transaction has been completed and all changes should be made permanent in the database.

- **d) Correct**: **Rollforward** is a recovery operation used in database management systems to restore a database to a consistent state after a failure.`
  },
  {
    "id": "2020A_FE_AM_29",
    "question": "Which of the following is an appropriate explanation of the granularity of locks?",
    "options": ["When a large number of transactions update the same data, and the granularity is set as large, the number of transactions that can be simultaneously executed increases.","When all data in a table are referenced, and the granularity is set as large, data referenced from other transactions can be undisturbed.","When data are updated, and the granularity is set as large, the waiting times of other transactions increase, and the total throughput declines.","RollfWhen the granularity is set as large, the number of included data increases, and the number of locks that one transaction makes increases.orward"],
    "correctAnswer": 2,
    "solution": `### Explanation:

- **a) Incorrect**: It's incorrect because large granularity actually reduces the number of transactions that can be executed simultaneously. A larger lock scope means that more data is locked, thereby preventing other transactions from accessing it.

- **b) Incorrect**: The statement is misleading. When granularity is large, other transactions cannot access the locked data, causing disturbances rather than undisturbed access.

- **d) Incorrect**: It's incorrect because a larger granularity means that a single lock may cover more data, which reduces the total number of locks needed, not increases it.

- **c) Correct**: **Granularity of locks** refers to the size or scope of the data that a lock controls. When the granularity is set as large, it can lead to increased waiting times for other transactions because they may be blocked from accessing any part of the locked resource until the lock is released.`
  },
  {
    "id": "2020A_FE_AM_30",
    "question": "Approximately how many seconds is required to transmit a file of $106$ bytes via a $64$-kbit/s communication line? Here, the transmission efficiency of the line is $80$%.",
    "options": ["19.6","100","124","156"],
    "correctAnswer": 3,
    "solution": `### Step 1: Convert the file size to bits.

Formula: bytes × bits/byte
$= 1,000,000 × 8 = 8,000,000$ bits

### Step 2: Calculate the effective transmission speed.

Formula: Effective speed = kbit/s × transmission efficiency
$= 64 × 0.80 = 51.2$ kbit/s

### Step 3: Convert the kbit/s to bits.

$= 51.2 = 51,200$ bits

### Step 4: Calculate the time to transmit the file.

 ![Image](Files/Pasted%20image%2020241023161437.png) 
 $\frac{8,000,000}{51,200} = 156.2$ seconds

- Therefore, option d, 156, is correct.`
  },
  {
    "id": "2020A_FE_AM_31",
    "question": "Which of the following is a device that connects multiple LANs by relaying data through the protocol information of the data link layer of the OSI basic reference model?",
    "options": ["Bridge","Gateway","Repeater","Router"],
    "correctAnswer": 0,
    "solution": `### **Explanation:**

**a) Bridge** - Used to connect two or more LAN to create a larger network, operating at the Data Link Layer. It only connects LAN segments that use the same protocol. Think of bridges as a simpler, less efficient version of a switch. If a switch can connect hosts and LAN segments (switch to switch), a bridge can only connect LAN segments, not the hosts. Also keep in mind that **Every switch is a bridge, but bridges are not truly switches.**

### Other Options

**b) Gateway** - Acts as a gate between two networks, allowing for communication even if they use different protocols. So, in a sense, a gateway performs protocol translation or data formatting in order for data to flow between networks easily.

**c) Repeater** - It operates at the physical layer, retransmitting data over longer distances, eliminating signal degradation when traveling from source to destination. It does not care about any protocol information.

**d) Router** - A router directs data packets between networks, determining the best path for the data to travel between networks, operating at the network layer. A router connects LAN to WAN, while a bridge connects LAN to LAN.`
  },
  {
    "id": "2020A_FE_AM_32",
    "question": "Which of the following is a role played by a DNS in a TCP/IP network?",
    "options": ["It assigns an unused IP address from the pool of addresses in response to a request from a PC or a printer.","It associates domain or host names with IP addresses.","It converts private IP addresses used within a company into global IP addresses, and it enables access to the Internet.","It enables a program in a server to be called by only specifying the program name without being aware of the IP address of the server."],
    "correctAnswer": 1,
    "solution": `### **Explanation:**

**b)** **DNS (Domain Name System)** is responsible for translating human-readable domain names (www.wuwatracker.com) into their corresponding IP addresses (104.21.6.165). This allows users to easily access websites using familiar names instead of memorizing an IP address.

### Other Options

**a)** It describes **DHCP (Dynamic Host Configuration Protocol)**, which is responsible for automatically assigning IP addresses to hosts or devices on a network, simplifying network management and preventing conflicts from having similar IP addresses.

**c)** This process describes what **NAT (Network Address Translation)** does, which converts private IP addresses into public IP addresses (and vice versa), allowing internet access to devices using private IPs.

**d)** This describes the Service Discovery protocol. While **DNS (Domain Name System)** resolves domain names to IP addresses, it does **not** provide the ability to call specific programs or services on a server by name. For this, you would need additional protocols or layers of service discovery, which are not part of DNS's core functionality.`
  },
  {
    "id": "2020A_FE_AM_33",
    "question": "What is the broadcast address of a network to which the IP address 192.168.57.123/22 belongs?",
    "options": ["192.168.55.255","192.168.57.255.","192.168.59.255","192.168.63.255"],
    "correctAnswer": 2,
    "solution": `### **Explanation:**

### Step 1: Understand the Subnet Mask

The CIDR notation \`/22\` indicates that the subnet mask has 22 bits.
- **Subnet Mask**: 255.255.252.0
- In binary: \`11111111.11111111.11111100.00000000\`

### Step 2: Determine the *Network* Address

To find the network address, perform a bitwise AND operation between the IP address and the subnet mask.
- **IP Address**: 192.168.57.123 (binary: \`11000000.10101000.00111001.01111011\`)
- **Subnet Mask**: 255.255.252.0 (binary: \`11111111.11111111.11111100.00000000\`)

Bitwise AND of IP address and Subnet Mask
\`\`\`
(192.168.56.0)  11000000.10101000.00111000.00000000
(255.255.252.0) 11111111.11111111.11111100.00000000
---------------------------------------------------
(192.168.56.0)  11000000.10101000.00111000.00000000
\`\`\`
The network address is **192.168.56.0**.

### Step 3: Calculate the Broadcast Address

With a \`/22\` mask, there are **10 bits** for hosts (32 total bits - 22 bits for the network). This means the broadcast address is calculated by adding \`2^10 - 1\` to the network address:
- **Host Range**: 192.168.56.0 to 192.168.59.255
- The broadcast address is the last address in this range: **192.168.59.255**.`
  },
  {
    "id": "2020A_FE_AM_34",
    "question": "Which of the following is an Internet standard that extends the format of email header fields to handle not only text messages but also audio and image files?",
    "options": ["HTML","MHS","MIME","SMTP5"],
    "correctAnswer": 2,
    "solution": `### **Explanation:**

**c) MIME** - **(Multipurpose Internet Mail Extensions)** is a widely used internet standard that extends the original format of email to support the transmission of various media types. MIME allows emails to include non-text content such as images, audio, video, and other file attachments.

### Other Options

**a) HTML** - **(Hypertext Markup Language)** is the standard markup language used for creating web pages and web applications. It structures the content on the web through the use of tags for headings, paragraphs, links, images, and more. It is not designed for email transmission.

**b) MHS** - **(Message Handling System)** was designed to handle message tracking, non-delivery reports, and multi-protocol routing. MHS is more robust but also more complex and slower compared to modern standards. In a way, MHS has similar core goals with SMTP, but MHS is more feature-rich and complex.

> [!TIP]
> Imagine (MHS) Notion having the same goals as (SMTP) Obsidian. Notion has more features and is more than just a note-taking app, while Obsidian excels at lightweight note-taking without extra layers of complexity. Also, MHS is designed for a different set of protocols compared to SMTP.

**d) SMTP** - **(Simple Mail Transfer Protocol)** is a protocol used for sending and receiving email messages across the internet. It handles the transmission of emails but does not concern itself with the format or content types of the messages being sent. While SMTP lacks the complexity of MHS, it is faster, more efficient, and well-suited for the broader, less formal nature of internet communication.`
  },
  {
    "id": "2020A_FE_AM_35",
    "question": "Which of the following attacks is classified as DNS cache poisoning?",
    "options": ["False domain information is injected into the DNS server that is referenced by a PC, and it leads the user to a fake server.","The version information of the DNS server software is obtained to identify a security hole.","To interrupt the target service, the attacker uses the DNS server as a steppingstone to send a large number of recursive queries.","To obtain internal information, the zone information stored in the DNS server is compiled and transferred."],
    "correctAnswer": 0,
    "solution": `### **Explanation:**

**DNS cache poisoning** occurs when a hacker tricks a DNS resolver into storing incorrect information in its cache. This incorrect information would redirect users or hosts to malicious sites instead of the legitimate ones they intended to visit. The attacker can use this to steal sensitive information, spread malware, or conduct phishing attacks.`
  },
  {
    "id": "2020A_FE_AM_36",
    "question": "Which of the following is a type of public-key cryptography that utilizes the difficulty of factorizing extremely large numbers into primes?",
    "options": ["AES","DH","DSA","RSA"],
    "correctAnswer": 3,
    "solution": `### **Explanation:**

**d) RSA (Rivest–Shamir–Adleman)** - A **public-key encryption algorithm** that relies specifically on the difficulty of breaking down a large number into the two prime numbers that were used to create it.

### Other Options

**a) AES (Advanced Encryption Standard)** - Is a **symmetric encryption algorithm**, which means it uses the same key for both locking and unlocking the data (encrypting and decrypting). It relies on complex mathematical operations like substitution and permutation to securely encrypt data.

**b) DH (Diffie-Hellman)** - Is a method used for **securely exchanging cryptographic keys** over a public channel, so two people can share a secret key without someone else figuring it out. It uses math based on something called **discrete logarithms.**

**c) DSA (Digital Signature Algorithm)** - Is a **digital signature algorithm**, which is used for verifying the authenticity of digital messages or documents. It also relies on the **discrete logarithm problem** for its security.`
  },
  {
    "id": "2020A_FE_AM_37",
    "question": "Which of the following is appropriate conduct for a white-hat hacker?",
    "options": ["Breaking into a system and changing one of the files without permission and reporting the weaknesses to the owner.","Breaking into a system to analyze its vulnerabilities with the owner’s permission and within the prescribed rules of engagement.","Logging into a system to show fellow hackers real-life examples of deleting a file without the owner’s permission.","Looking at secret data on a system with the motivation of personal or financial objectives, protest, or espionage."],
    "correctAnswer": 1,
    "solution": `### **Explanation:**

A White-hat hacker acts ethically and with authorization. They could be testing a system for someone, finding vulnerabilities to help improve security, rather than trying to damage it or take advantage of the vulnerabilities. So, the appropriate conduct for a White-hat hacker would be 'Breaking into a system to analyze its vulnerabilities with the owner’s permission and within the prescribed rules of engagement.'`
  },
  {
    "id": "2020A_FE_AM_38",
    "question": "Which of the following is an appropriate explanation of an SQL injection attack?",
    "options": ["It is an attack in which a command for performing a malicious query or operation is entered in the website where there is a vulnerability in a web application to acquire or falsify data without authorization. ","It is an attack in which a commercial DBMS vulnerability is exploited to search the host database server and cause repeated infections in order to cause a sudden rise in Internet traffic. ","It is an attack in which a malicious script is executed on the visitor’s web browser by sending the malicious code to the website displaying the visitor’s input data. ","It is an attack in which a website visitor is made to view a web page containing an embedded malicious script, and the visitor is then made to perform an unintentional operation on another website."],
    "correctAnswer": 0,
    "solution": `### **Explanation:**

SQL injection exploits vulnerabilities in a web application's input fields, allowing attackers to execute SQL commands to manipulate the database.

### Example Scenario

Consider a website that uses the following query to log in:
\`\`\`sql
SELECT * FROM users WHERE username = 'john' AND password = 'password123';
\`\`\`

Typically, you would need to know both the password and the username in order to bypass the authentication check. However, since usernames are easier to guess than passwords, the attacker can instead inject a malicious input into the username field:
\`\`\`bash
john' OR '1'='1
\`\`\`

Transforming the original query into:
\`\`\`sql
SELECT * FROM users WHERE username = 'john' OR '1'='1' AND password = 'password123';
\`\`\`

### Breakdown of the Conditions

**First Condition (\`username = 'john'\`)**
- If 'john' exists in the database, this condition evaluates to **true**.

**Second Condition (\`'1'='1' AND password = 'password123'\`)**
- Here, \`'1'='1'\` is always **true**.
- However, for this part of the condition to be **true**, the password also needs to be correct, which is not typically known to the attacker.

Since the query uses an **OR** condition, only one part of the overall condition needs to be true for the query to return results. This means the attacker only needs to know the username of a user, making it easier to gain access to unauthorized accounts.`
  },
  {
    "id": "2020A_FE_AM_39",
    "question": "Which of the following is an appropriate use of a private key for a digital signature?",
    "options": ["The recipient can use the private key to restore an encrypted message to its original status. ","The sender can use the private key to create a signature and attach it to a message, and the recipient can confirm the sender. ","The sender can use the private key to encrypt a message with an attached fixed string, and the recipient can identify sections that are falsified. ","The sender can use the private key to encrypt a message, and the content of the message cannot be understood by unrelated parties."],
    "correctAnswer": 1,
    "solution": `### **Explanation:**

**b)** A **private key** in the context of a digital signature is used by the sender to **create** the signature, which ensures the authenticity of the message. The recipient can then verify the signature using the sender's **public key**, confirming that the message came from the sender and wasn't altered.

### Other Options

**a)** is incorrect because **private keys are not used by the recipient** to decrypt a message. Private keys are typically used by the sender to sign, while **public keys** are used to verify the signature or decrypt messages.

**c)** is incorrect because while private keys can be used to sign data, the process described here (encrypting with a fixed string) is not how private keys function in digital signatures.

**d)** is incorrect because **encrypting a message** is usually done using the **recipient’s public key**, not the sender’s private key. The private key is used for signing, not encrypting messages for confidentiality.`
  },
  {
    "id": "2020A_FE_AM_40",
    "question": "Which of the following is a characteristic of a worm, as compared with a Trojan horse?",
    "options": ["Arbitrarily encrypting files so that they cannot be read normally ","Causing an infection to spread by itself by using the network and removable media ","Performing an unauthorized action as an individual program ","Waiting without performing any activity until a specific condition is established"],
    "correctAnswer": 1,
    "solution": `### **Explanation:**

**b)** A **worm** is a type of malware that can **spread by itself** across networks and through removable media (like USB drives). Unlike a Trojan horse, which requires the user to execute the program, worms exploit vulnerabilities and propagate automatically without user intervention.

### Other Options

**a)** is incorrect because arbitrarily encrypting files is a characteristic of **ransomware**, not a worm.

**c)** is incorrect because performing an unauthorized action as an individual program is characteristic of a **Trojan horse**, which masquerades as legitimate software but performs malicious actions when executed.

**d)** is incorrect because waiting for a specific condition before acting is characteristic of a **logic bomb**, not a worm.`
  },
  {
    "id": "2020A_FE_AM_41",
    "question": "Which of the following is an appropriate explanation of CSIRT?",
    "options": ["It is a generic term for an organization that is established within a company, organization, or government agency, and it receives reports on information security incidents for investigation and response.","It is a generic term for people or an organization whose aim is to achieve a religious or political goal by utilizing IT.","It is an organization that creates technical documents concerning the Internet, and it investigates standardization issues.","It is an organization that defines the IP-address allocation policy. It operates and monitors DNS root servers and coordinates DNS management and other such matters on a global scale."],
    "correctAnswer": 0,
    "solution": `### Explanation:

A **CSIRT** (Computer Security Incident Response Team) is a specialized team responsible for responding to information security incidents, such as breaches, malware attacks, or data leaks. They investigate, mitigate, and help prevent future security issues by handling reports of incidents, analyzing their causes, and providing recommendations for improving security practices.`
  },
  {
    "id": "2020A_FE_AM_42",
    "question": "There is a network that is divided into three (3) segments (i.e., external segment, DMZ, and internal segment) by one (1) firewall... Which of the following is the most appropriate method of server installation that can protect important data from unauthorized access from the Internet?",
    "options": ["Installation of the web server and database server in the internal segment","Installation of the web server and the database server in the DMZ","Installation of the web server in the DMZ and the database server in the internal segment","Installation of the web server in the external segment and the database server in the DMZ"],
    "correctAnswer": 2,
    "solution": `## **Explanation:**

The scenario requires balancing user accessibility with the protection of sensitive data stored in the server. The **DMZ (Demilitarized Zone)** is a semi-trusted network that is accessible from the **external network**, and the **internal segment** is the most secure part of the network, designed to protect sensitive data from external threats. The **external network** is available to anyone, making it less secure and more likely to face attacks.

The **web server** is intended for users to access services, so placing it in the **DMZ** would allow it to be reachable from the external network while maintaining a level of security. The DMZ allows the web server to interact with users and restricts direct access to the internal network.

Meanwhile, the **database**, which contains important and sensitive data, should be placed in the **internal segment**, the most secure part of the network. This placement ensures that the database is well-protected from unauthorized access, and only the web server in the DMZ (or other authorized systems) can communicate with it.`
  },
  {
    "id": "2020A_FE_AM_43",
    "question": "Which of the following is a purpose of using a port scanner during an inspection of a web server?",
    "options": ["Detecting the vulnerability of contents by logging in with a valid user ID and directly checking the contents of the web server","Detecting unauthorized use by analyzing the access history of the web server","Ensuring that no unnecessary service is operating by enumerating services on the web server","Ensuring that there is no deviation from the information-security policy by checking the management status of the web-server user IDs with the operator"],
    "correctAnswer": 2,
    "solution": `### Explanation:

A **port scanner** is a tool used to scan and identify open ports on a server. Each port corresponds to a specific service running on the server (e.g., HTTP, FTP, SSH). By scanning the ports, you can determine which services are active, which is very useful in checking if there are unnecessary services that are running.

### Other Options

**a)** is about checking the contents of the web server by logging in.

**b)** is about analyzing access history, not scanning ports.

**d)** is about checking user ID management, which is not something a port scanner does.`
  },
  {
    "id": "2020A_FE_AM_44",
    "question": "![Image](Files/Pasted%20image%2020241019171543.png)",
    "options": ["A","B","C","D"],
    "correctAnswer": 2,
    "solution": `### **Explanation:**

> [!NOTE] Type of ports (AVAST)
> ![Image](Files/Pasted%20image%2020241019180010.png)

A PC uses dynamic ports, specifically those in the range of **1024 and higher**, to establish network connections. Port **80** is designated for HTTP (HyperText Transfer Protocol) traffic, which is the default port for web servers. Therefore, when a PC initiates a connection, it will use a source port number of 1024 or higher and a destination port number of 80. Conversely, the web server will have its source port set to 80 for incoming connections, while the destination port will be from the dynamic range for outgoing responses (1024 or higher).`
  },
  {
    "id": "2020A_FE_AM_45",
    "question": "Which of the following UML diagrams shows the exchange of messages among objects, message transmission, and object lifelines in a time series?",
    "options": ["Activity diagram","Communication diagram","Sequence diagram","State-machine diagram"],
    "correctAnswer": 2,
    "solution": `### Explanation:

**c.) Sequence diagram** - shows the order of messages exchanged between objects, including their lifelines and the interactions that occur during a particular scenario. Sequence diagrams are particularly useful for detailing the dynamic behavior of a system.

### Other Options

**a) Activity Diagram**: This diagram models the flow of activities and actions within a system, showing the dynamic aspects but not the time-ordered interactions between objects.

**b) Communication Diagram**: While this diagram also depicts the interactions between objects, it focuses more on the structural organization of the objects rather than the specific sequence of message exchanges.

**d) State-Machine Diagram**: This diagram represents the states of an object and the transitions between those states but does not focus on message exchanges among objects.`
  },
  {
    "id": "2020A_FE_AM_46",
    "question": "Which of the following is an appropriate relation between a class and an instance in object-oriented programming?",
    "options": ["An instance defines the specifications of a class.","An instance is created based on the definition for a class.","Multiple classes correspond to one (1) instance.","Only one (1) instance exists for one (1) class."],
    "correctAnswer": 1,
    "solution": `### Explanation:

In object-oriented programming (OOP), a **class** acts as a blueprint for creating **instances** (or objects). When you instantiate a class, you're creating an object that has the properties and behaviors defined in the class. For example, if you have a class named Dog, an instance could be a specific dog like \`myDog\`, which has its own attributes that are defined in the Dog class.

### Other Options

**a) An instance defines the specifications of a class**: This is incorrect because the class defines the specifications, not the instance. An instance is a realization of that specification.

**c) Multiple classes correspond to one (1) instance**: This is incorrect since one instance is created from a single class. A class can have multiple instances, but each instance belongs to only one class.

**d) Only one (1) instance exists for one (1) class**: This is also incorrect. A class can have many instances. For example, the \`Dog\` class can have instances like \`dog1\`, \`dog2\`, etc.`
  },
  {
    "id": "2020A_FE_AM_47",
    "question": "Which of the following is the type of module coupling that has the weakest degree of coupling in which the exchange of information between modules is performed only using parameters?",
    "options": ["Common coupling","Control coupling","Data coupling","Content coupling"],
    "correctAnswer": 2,
    "solution": `### Explanation:
---
Data coupling is a coupling where modules share data through parameters. Meaning each module only needs to know the data format it receives and not the internal workings of the other module, making it the weakest degree of coupling.
### Other Options

**a) Common coupling**: This occurs when multiple modules share the same global data. It is considered a strong form of coupling because changes in the global data can affect all modules that use it.

**b) Control coupling**: This type of coupling happens when one module controls the behavior of another by passing control information (e.g., flags). This introduces a level of dependency between the modules.

**d) Content coupling**: This is the strongest form of coupling, where one module directly accesses or modifies the content of another module. This makes the modules highly dependent on each other and is generally to be avoided.`
  },
  {
    "id": "2020A_FE_AM_48",
    "question": "In the development process, which of the following is an activity that should be performed for software architectural design?",
    "options": ["Analyzing the requirements in incremental steps by expressing them in the form of a diagram, etc.","Describing the specifications so that the program is clarified on a line-by-line basis","Obtaining the opinion of the customer and determining the specifications","Transforming the requirements for the software item into an architecture that describes its top-level structure and identifies its software components"],
    "correctAnswer": 3,
    "solution": `## **Explanation:**

In software architectural design, the main goal is to take the requirements and develop a high-level structure that outlines the key components and how they interact. This ensures the system meets the functional and non-functional requirements.

### Other Options

**a)** Analyzing the requirements in incremental steps by expressing them in the form of a diagram, etc. – This refers more to _requirements analysis_, not architectural design.

**b)** Describing the specifications so that the program is clarified on a line-by-line basis – This is more aligned with _detailed design_ or coding, not the architectural level.

**c)** Obtaining the opinion of the customer and determining the specifications – This is part of the _requirements gathering_ phase, which occurs before architectural design.`
  },
  {
    "id": "2020A_FE_AM_49",
    "question": `The figure below shows that the cumulative number of bugs reached the target value, when the number of completed test items was X. Which of the following is an appropriate explanation of the situation shown in this figure?

![Image](Files/Pasted%20image%2020241020005721.png)`,
    "options": ["It indicates that a large number of bugs may still remain internally.","It indicates that desk-checking and simulation were performed satisfactorily prior to testing. ","It indicates that the probability of occurrence of bugs after shipping is low, because the target cumulative number of bugs was reached.","It indicates that a small number of bugs may still remain internally."],
    "correctAnswer": 0,
    "solution": `## **Explanation:**

The graph shows the cumulative number of bugs reaching the target value after completing a number of test items. Seeing the graph it shows that the curve is still increasing sharply, suggesting more bugs could still exist internally and reaching the target won't guarantee that all bugs have been found. More bugs will be discovered with more testing.

> [!TIP] 
> Just think of it as a game where the more you play, the more bugs you keep finding. Even though you’ve caught the target number of bugs (X), there are still plenty of bugs waiting to be caught because they keep popping up. This means the game isn't really over yet, and there could be many more bugs hiding. That's why **a)** is the right answer—there are still bugs left, even though you’ve reached your target.`
  },
  {
    "id": "2020A_FE_AM_50",
    "question": "Which of the following is an appropriate description of an extreme programming (XP) practice?",
    "options": ["After the code is created, and it is confirmed that it can be integrated, test cases are created.","Integration of the code and testing are continuously repeated.","The code that passed the tests is not refactored until the next iteration.","The customer is responsible for the specification of unit tests."],
    "correctAnswer": 1,
    "solution": `### Explanation:

Extreme Programming (XP) emphasizes continuous integration and testing throughout the development process. This ensures that the software is always in a working state, and issues are identified early. It is very collaborative and encourages continuous communication between the customer and the development team.

> [!TIP] 
> The idea is that everyone works together closely—developers, customers, and testers—so that the software is always moving in the right direction and evolving based on constant feedback.`
  },
  {
    "id": "2020A_FE_AM_51",
    "question": "According to the 6th edition of the PMBOK Guide, which of the following is an activity for the planning process group in project resource management?",
    "options": ["Acquire resources","Control resources","Develop project team","Estimate activity resources"],
    "correctAnswer": 3,
    "solution": `### Explanation:

In the **Planning Process Group** of **Project Resource Management**, one key activity is to estimate the type and quantity of resources (people, equipment, materials) required to perform project activities. This falls under **"Estimate Activity Resources"**, which helps plan and allocate the necessary resources efficiently.`
  },
  {
    "id": "2020A_FE_AM_52",
    "question": `The activities and milestones of a project are shown in the arrow diagram below. Which of the following is an impact of reducing the duration of activity, D, by 3 days?

![Image](Files/Pasted%20image%2020241020014458.png)`,
    "options": ["Project duration is not changed.","Project duration is reduced by 1 day.","Project duration is reduced by 2 days","Project duration is reduced by 3 days."],
    "correctAnswer": 1,
    "solution": `### Explanation:

To determine the impact of reducing the duration of activity **D** by 3 days, we first need to calculate the **critical path** (Longest Path).

### Finding critical path

- Path 1: A → B → E
  - Duration: 6 + 5 + 4 = 15 days
- Path 2: C → D → E
  - Duration: 7 + 5 + 4 = 16 days (**this is the critical path**)
- Path 3: C → F
  - Duration: 7 + 6 = 13 days

Path 2 is the longest and determines the project duration.
### Impact of reducing activity D by 3 days

- Path 2 will be reduced to 13 days
  - **Path 2**: 7 (C) + 2 (D) + 4 (E) = 13 days.

After the reduction, the critical path becomes **Path 1: A → B → E** with 15 days, and the new project duration is reduced by **1 day** (from 16 days to 15 days). Making the answer b) Project duration is reduced by 1 day.`
  },
  {
    "id": "2020A_FE_AM_53",
    "question": "The functional size of a new system was estimated to be 500 function points (FP). Apart from development, the project requires 10 person-months in total for installation of the system and education of developers. Additionally, for project management, 10% of the total person-months of development, installation, and education is required. How many person-months are required in total for this project? Here, the productivity in development is 10 FPs per person-month.",
    "options": ["51","60","65","66"],
    "correctAnswer": 3,
    "solution": `### Explanation:

Apart from **development** the project requires 10 person-months for **installation and education**. And another person-months for **project management**, which is 10% of the total person-months from development, installation and education. This means we need to add development, installation and education, and project management person-months to calculate the total.

### Gathered Data

1. Development
  - The system size is 500 function points (FP), and the productivity is 10 FPs per person-month.
  - Development person-months = 500 / 10 = 50 person-months
2. Installation and education
  - **Given**: 10 person-months.
3. Project management
  - Project management effort is **10%** of the total person-months for development, installation, and education.
  - Total without project management = 50 (development) + 10 (installation and education) = 60 person-months.
  - Project management = 10% × 60 = 6 person-months

### Total person-months

Total = 50 (development) + 10 (installation and education) + 6 (project management) = **66** person-months.`
  },
  {
    "id": "2020A_FE_AM_54",
    "question": "Which of the following is used in quality management to help determine whether a process is stable by using plotted time-series data and limit lines?",
    "options": ["Brainstorming","Cause-and-effect diagram","Control chart","Run chart"],
    "correctAnswer": 2,
    "solution": `### Explanation:

A **control chart** is used in quality management to monitor and determine whether a process is stable over time. It displays time-series data and includes upper and lower control limits to track variation. If the data points remain within these limits, the process is considered stable. Control charts help identify any trends or deviations from the norm.

### Other Options:

**a) Brainstorming** – This is a technique used for generating ideas or solutions, not for monitoring process stability.

**b) Cause-and-effect diagram** – Also known as a fishbone diagram, it is used to identify potential causes of problems but does not track process stability over time.

**d) Run chart** – A run chart also plots data over time, but it doesn't have control limits like a control chart, making it less useful for determining process stability.`
  },
  {
    "id": "2020A_FE_AM_55",
    "question": "Which of the following is an appropriate definition of the total cost of ownership (TCO) in the context of system cost?",
    "options": ["It is the total amount of expenses at the time of system installation.","It is the total amount of expenses related to the development of business systems.","It is the total amount of expenses, including those from system installation through operation and maintenance/management.","It is the total amount of operation expenses for systems related to communications and networking."],
    "correctAnswer": 2,
    "solution": `### Explanation:

**Total Cost of Ownership (TCO)** refers to the **total lifetime cost** of a system or asset, including all expenses from its installation, development, ongoing operation, maintenance, and eventual disposal or retirement. TCO provides a comprehensive view of the costs involved in owning and managing a system beyond just the initial purchase or installation.

### Other Options:

**a) It is the total amount of expenses at the time of system installation** – This only considers the cost at the time of installation, but TCO includes all costs over the system's entire life.

**b) It is the total amount of expenses related to the development of business systems** – TCO goes beyond just development costs to include operational and maintenance costs as well.

**d) It is the total amount of operation expenses for systems related to communications and networking** – This is only a subset of TCO, which includes all aspects, not just communication and networking expenses.`
  },
  {
    "id": "2020A_FE_AM_56",
    "question": "In IT service management, which of the following is an activity that is performed for management of incidents and service requests?",
    "options": ["Evaluating if customer satisfaction with the service desk meets the agreed service targets and performing a review for identifying improvement opportunities","Examining measures wherein the amount of free space on a disk is near its threshold","Investigating the impact of changes made to a program","Receiving a failure report from a user and checking to see if it corresponds to a known error"],
    "correctAnswer": 3,
    "solution": `### Explanation:

In **IT service management**, **incident management** focuses on restoring normal service operation as quickly as possible after a disruption. One of the key activities is receiving failure reports (incidents) from users and determining if they correspond to a **known error** that already has a documented workaround or solution. This is a crucial part of the incident management process to minimize the impact on service.

### Other Options:

**a) Evaluating customer satisfaction and performing reviews** – This is part of **service level management**, which focuses on ensuring service performance aligns with agreed targets, not incident management.

**b) Examining free disk space** – This is part of **capacity management** or **monitoring**, not incident and service request management.

**c) Investigating the impact of changes** – This falls under **change management**, which deals with assessing the impact of changes to the IT environment, not incidents or service requests.`
  },
  {
    "id": "2020A_FE_AM_57",
    "question": "Which of the following is the most appropriate description about the backup of data on a disk that is connected to a server?",
    "options": ["All data are backed up on the day the system commences full operations, and only frequently updated data are backed up thereafter to shorten the work time.","Data distributed and stored in multiple files are backed up when a series of update processes to the files are completed.","Data whose frequency of use are low after a certain period of time are deleted from the current disk, and the data that have been backed up are also deleted.","Important data are backed up by overwriting data on the same media, so that the backup media are not mistaken."],
    "correctAnswer": 1,
    "solution": `### Explanation:

b) suggests that the backup process is conducted after a series of updates, ensuring that the latest version of the files is captured. This strategy helps maintain consistency and ensures that the backup reflects the most current state of the data.

### Other Options:

**a)** This option implies a fixed schedule for backups that may not account for all changes made in between, risking data being out of date.

**c)** While managing data based on usage frequency is a common practice, automatically deleting backed-up data can lead to potential data loss, which is not typically advisable.

**d)** Overwriting important data on the same media is not a recommended practice, as it increases the risk of data loss.`
  },
  {
    "id": "2020A_FE_AM_58",
    "question": "Which of the following is the most appropriate description about a system auditor?",
    "options": ["The entire interview must be conducted by one (1) system auditor, because discrepancies may occur in the record if multiple auditors are involved.","The system auditor must instruct the department being audited to implement improvement measures for deficiencies identified during the interview..","The system auditor must make an effort to obtain documents and records that support the information obtained from the department being audited during the interview.","The system auditor must select interviewees from administrators who have been an auditor within the department being audited."],
    "correctAnswer": 2,
    "solution": `### **Explanation:**

A **system auditor** is a professional responsible for evaluating an organization's information systems, including its software, hardware, data, and processes. The goal of a system auditor is to ensure that systems are functioning effectively, securely, and in compliance with relevant regulations and policies.

### Other Operations

**a)** Having only one auditor is not always necessary. Multiple auditors can help gather more information and provide different views.

**b)** Auditors can identify problems, but it's not their job to order the department to fix them. They recommend changes, but management decides what to do.

**d)** Interviewing only auditors can create bias. It’s better to talk to people in various roles to get a complete picture of the department.`
  },
  {
    "id": "2020A_FE_AM_59",
    "question": "Which of the following is the most appropriate measure that a management executive must take to secure the appearance of independence for an internal system auditor?",
    "options": ["Assigning the system auditor to the internal audit department ","Making it compulsory for the system auditor to undergo continuous learning of IT","Setting up an auditing-skills training system for the system auditor ","Specifying and publishing the knowledge and experience necessary for the system auditor"],
    "correctAnswer": 2,
    "solution": `### **Explanation:**

By placing the system auditor within the internal audit department, it helps ensure that they can operate independently from other departments they may be auditing, thereby enhancing the credibility and objectivity of their work.

### Other Operations

**b)** This is important for the auditor's professional development but does not directly secure their independence in the auditing process.

**c)** While training is beneficial for skill enhancement, it doesn't ensure that the auditor is perceived as independent in their role.

**d)** Defining qualifications is important for transparency and accountability, but it does not directly address the auditor's independence.`
  },
  {
    "id": "2020A_FE_AM_60",
    "question": "When software asset management is audited, which of the following activities is the most appropriate?",
    "options": ["It is checked to see if compatibility with existing systems is evaluated at the time of installation.","It is checked to see if evidence, such as a software-license certificate, is properly retained. ","It is checked to see if failures are localized via database partitioning or other methods. ","It is checked to see if the organizational and functional structure of the software provider is considered."],
    "correctAnswer": 1,
    "solution": `### **Explanation:**

This option focuses on verifying that the organization maintains proper documentation of software licenses, which is crucial for ensuring compliance with licensing agreements and avoiding legal issues. Proper retention of software-license certificates demonstrates responsible software asset management.

### Other Operations

**a)** While compatibility checks are important during installation, this activity is more related to system implementation rather than the auditing of software asset management itself.

**c)** This option pertains to system performance and failure management, not directly to software asset management auditing.

**d)** While understanding the provider's structure can be relevant in certain contexts, it is not a primary focus during a software asset management audit.`
  }
];
