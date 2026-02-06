export default [
  {
    "id": "2024S_FE-A_1",
    "question": "What is the decimal representation of the hexadecimal number 123.4?",
    "options": ["83.25","83.5","291.25","291.5"],
    "correctAnswer": 2,
    "solution": `### Step 1: Convert the whole part (123) to decimal.

The hexadecimal number \`123\` can be expanded as:

$1 \times 16^2 + 2 \times 16^1 + 3 \times 16^0$

$= 1 \times 256 + 2 \times 16 + 3 \times 1$

$= 256 + 32 + 3 = 291$

### Step 2: Convert the fractional part (0.4) to decimal.

In hexadecimal, \`4\` means \( 4 \times 16^{-1} \):

$4 \times \frac{1}{16} = \frac{4}{16} = 0.25$

### Step 3: Add the whole and fractional parts together.

$291 + 0.25 = 291.25$`
  },
  {
    "id": "2024S_FE-A_2",
    "question": "Five people are sitting at a table in a restaurant. Two of them ordered coffee, and the other three ordered tea. The waiter forgets who ordered what and puts the drinks in a random order for the five persons. What is the probability that every person gets the correct drink?",
    "options": ["1/30","1/20","1/10","3/10"],
    "correctAnswer": 2,
    "solution": `### Step 1: List down the given

Given:

5 people, 2 coffee orders, 3 tea orders

### Step 2: Calculate the probability

To calculate probability, you must **divide the number of favorable events by the total number of possible events**.

Using the formula above:

$P = \frac{2}{5} \times \frac{1}{4} = \frac{2}{20} = 0.1$

Using the values for tea:

$P = \frac{3}{5} \times \frac{2}{4} \times \frac{1}{3} = \frac{6}{60} = \frac{1}{10} = 0.1$`
  },
  {
    "id": "2024S_FE-A_3",
    "question": `The expression below is represented in postfix (reverse Polish) notation. What is the resulting value of this expression?

100 5 6 2 + * 12 4 / − − 36 −`,
    "options": ["5","18","21","27"],
    "correctAnswer": 3,
    "solution": `### Step 1: Understanding Postfix Notation

In postfix notation, the operator appears after the operands.

### Step 2: Using the Stack Implementation

| **String Symbols** | **Stack** |
|--------------------|----------|
| 100 | 100 |
| 5 | 100 5 |
| 6 | 100 5 6 |
| 2 | 100 5 6 2 |
| + | 100 5 (6+2) |
| * | 100 (5*8) |
| 12 | 100 (40) 12 |
| 4 | 100 (40) 12 4 |
| / | 100 (40) (12/4) |
| - | 100 (40-3) |
| - | (100-37) |
| 36 | 63 36 |
| - | (63-36) |

Thus, the answer is **27**.`
  },
  {
    "id": "2024S_FE-A_4",
    "question": "Which of the following is an appropriate explanation of feedback control?",
    "options": ["It performs control in a predetermined order.","It performs control to keep the output in line with the target value.","It performs control to prevent external disturbances from affecting the output.","It performs control without using the output."],
    "correctAnswer": 1,
    "solution": `### Explanation

Feedback Control refers to **the process of using feedback to monitor and manage the dissemination of information and the outcomes of actions taken to influence it**.`
  },
  {
    "id": "2024S_FE-A_5",
    "question": "![Image](Files/Pasted%20image%2020241017115416.png)",
    "options": ["2, 3, 4, 7, 8, 10, 13, 15, 18","2, 4, 8, 7, 3, 15, 18, 13, 10","10, 3, 2, 7, 4, 8, 13, 18, 15","10, 3, 13, 2, 7, 18, 4, 8, 15"],
    "correctAnswer": 1,
    "solution": `### Step 1: Understanding post-order traversal

**Postorder traversal** follows the Left-Right-Root policy:

- Traverse the left subtree
- Traverse the right subtree
- Visit the root node
 ### Step 2: Traversal Process Visualized
![File](/Files/Drawing%202024-10-17%2011.57.52.png)`
  },
  {
    "id": "2024S_FE-A_6",
    "question": "![Image](Files/Pasted%20image%2020241017120324.png)",
    "options": ["i ≥ 2N – 1","i ≥ 2N + 1","x ≥ 2N – 1","x ≥ 2N + 1"],
    "correctAnswer": 1,
    "solution": `### Step 1: Understanding Flowchart Notation

![Flowchart Legend](Files/Pasted%20image%2020241017120756.png)

### Step 2: Flowchart Breakdown

From the flowchart notation legend above, we can see that the expression meant for A is a conditional expression.

Now to break down the process from the problem:

- **Initialization**:
    - The variable \`x\` starts at 0 (to store the sum).
    - The variable \`i\` starts at 1 (the first odd integer).
- **Loop**:
    - The algorithm adds the current odd integer \`i\` to \`x\`.
    - Then, \`i\` is incremented by 2 to move to the next odd integer.
- **Termination Condition**:
    - The loop should stop when we have summed up the first N odd integers.
    - The N-th odd integer is 2N−1
    - Therefore, the loop needs to terminate when \`i\` exceeds 2N−1.

**Reasoning:**
- The condition to exit the loop must check if \`i\` has exceeded \`2N−1\`.
- The **next odd number** after \`2N−1\` is \`2N+1\`.
- So, when \`i\` reaches \`2N+1\`, we know that the loop has summed all the necessary odd numbers and should stop.`
  },
  {
    "id": "2024S_FE-A_7",
    "question": "How many swaps are required in bubble sort when N elements in the array are already sorted in reverse order?",
    "options": ["$N(N-1) ÷ 2$","$N^2  ÷  2$","$N(N-1)$","$N^2$"],
    "correctAnswer": 0,
    "solution": `### Step 1: Understanding the Bubble Sort Algorithm

When the array is sorted in reverse order, every adjacent pair of elements is out of order. This means that every comparison will result in a swap.

- In the first pass through the array, bubble sort will compare the first element with the second, the second with the third, and so on, until the last element. This results in \`N−1\` comparisons and swaps.
- In the second pass, the largest element (which is now at the end of the array) will not be compared. Thus, there will be \`N−2\` comparisons and swaps.
- This pattern continues, leading to:
    - First pass: \`N−1\` swaps
    - Second pass: \`N−2\` swaps
    - Third pass: \`N−3\` swaps
    - ...
    - Last pass: \`1\` swap

Given this, you can compute the total number of swaps using the formula:

\`Total Swaps = (N−1) + (N−2) + (N−3) + … + 1\`

or through:

\`N(N-1) ÷ 2\`.`
  },
  {
    "id": "2024S_FE-A_8",
    "question": "What is the percentage improvement in total execution time with the 32-bit CPU compared to the 16-bit CPU?",
    "options": ["28.57","40","50","71.43"],
    "correctAnswer": 0,
    "solution": `### Step 1: Calculate Total Execution Times

- **32-bit CPU Execution Times**:
    - **32-bit instructions**: 1 cycle (40% of total instructions)
    - **16-bit instructions**: 1 cycle (40% of total instructions)
    - **8-bit instructions**: 1 cycle (20% of total instructions)

    **Total Execution Time for 32-bit CPU:**
    \`T_32 = (0.4 × 1) + (0.4 × 1) + (0.2 × 1) = 1 cycle\`

- **16-bit CPU Execution Times**:
    - **32-bit instructions**: 2 cycles (since it takes 2 cycles to execute a 32-bit instruction)
    - **16-bit instructions**: 1 cycle (40% of total instructions)
    - **8-bit instructions**: 1 cycle (20% of total instructions)

    **Total Execution Time for 16-bit CPU:**
    \`T_16 = (0.4 × 2) + (0.4 × 1) + (0.2 × 1) = 1.4 cycles\`

### Step 2: Calculate Percentage Improvement

\`Percentage Improvement = ((T_16 - T_32) / T_16) × 100\`

\`Percentage Improvement = ((1.40 - 1.00) / 1.40) × 100 = 28.57%\``
  },
  {
    "id": "2024S_FE-A_9",
    "question": `What is the calculated result?
![Image](Files/Pasted%20image%2020241017125728.png)`,
    "options": ["21.93","26.67","27.92","33.92"],
    "correctAnswer": 2,
    "solution": `### Step 1: Calculate Rotational Latency

![Rotational Latency](Files/Pasted%20image%2020241017130145.png)

### Step 2: Calculate Transfer Time

![Transfer Time](Files/Pasted%20image%2020241017130208.png)

### Step 3: Sum Up All Components

![Final Calculation](Files/Pasted%20image%2020241017130534.png)`
  },
  {
    "id": "2024S_FE-A_10",
    "question": "Which of the following is the port that can theoretically connect up to 127 peripheral devices, controlled by a PC?",
    "options": ["Displayport","HDMI","SATA","USB"],
    "correctAnswer": 3,
    "solution": `### Explanation:
- **USB (Universal Serial Bus)**: USB can connect multiple devices using a single port. Specifically, USB supports a topology where one USB host can manage up
to 127 devices through the use of hubs. Each hub can connect multiple devices, effectively expanding the number of peripherals that can be connected to a single USB port.
### Why the Others Don't Fit:
- **DisplayPort**: Primarily used for video and audio output, it does not support connecting a large number of peripheral devices in the same way USB does.
- **HDMI (High-Definition Multimedia Interface)**: Mainly used for transmitting video and audio from a source (like a PC) to a display (like a monitor or TV), and it does not connect multiple peripheral devices.
- **SATA (Serial Advanced Technology Attachment)**: Used primarily for connecting storage devices such as hard drives and SSDs. It does not support multiple devices in the way that USB does.`
  },
  {
    "id": "2024S_FE-A_11",
    "question": "Which of the following is the design for securing safety and reliability known as 'foolproof'?",
    "options": ["A redundant configuration, such as duplication, can be used so that even when a device failure occurs, the functions of the overall system are not affected.","Even when the user performs an incorrect operation, a problem does not occur in the system.","When a device failure occurs, damage can be minimized by enabling the system to stop safely.","When a device failure occurs, the system runs even if the usable functions are restricted, and the processing efficiency is reduced."],
    "correctAnswer": 1,
    "solution": `### Explanation

A foolproof system is designed in such a way that even if users make mistakes or perform incorrect operations, the system prevents those errors from causing significant problems. It anticipates human errors and ensures that the system remains functional or safe despite such errors. The goal is to make the system 'error-proof' from user mistakes.

**Why the Others Don't Fit:**
- **(a)** Describes redundancy in system design, which is about reliability, not handling user mistakes.
- **(c)** Refers to a fail-safe system, which stops safely on failure but doesn't prevent user errors.
- **(d)** Describes a fault-tolerant system that continues running despite failure, but doesn't focus on user errors.`
  },
  {
    "id": "2024S_FE-A_12",
    "question": `There is a system where the operating status is continuously monitored. Which of the following is an appropriate sequence of work items in capacity planning that is conducted when a new task is applied to the system after several years of operation?

(i) Evaluate the proposed system configuration, assess its appropriateness, and conduct a review if necessary.

(ii) Consider a proposal for the necessary system configuration based on the system characteristics, including factors such as the number of servers and whether parallel distributed processing is performed.

(iii) Understand the performance information of the hardware or the environment inherent to the system based on the operating status of the system.

(iv) Conduct a meeting with users to gather information about the new task, understand requirements such as the estimated number of processes, and determine the time required for processes.`,
    "options": ["(iii), (ii), (iv), (i)","(iii), (iv), (ii), (i)","(iv), (ii), (i), (iii)","(iv), (iii), (i), (ii)"],
    "correctAnswer": 1,
    "solution": `### Explanation

Based on the steps in capacity planning, the correct sequence follows:
1. **Learning the system** → Check performance of the system (iii).
2. **Learning the problem** → Gather task-related requirements (iv).
3. **Making a solution** → Propose system configuration (ii).
4. **Evaluating performance** → Assess appropriateness of configuration (i).

This eliminates choices (c) and (d) as they begin with gathering task-related information before checking system performance. Choice (a) is also eliminated as it skips gathering task requirements before making a solution.`
  },
  {
    "id": "2024S_FE-A_13",
    "question": "An operating system adopts the priority scheduling algorithm for scheduling processes. There are five processes A, B, C, D, and E arriving at the same time with estimated running times of 10, 6, 2, 4, and 8 milliseconds, respectively. Their priorities are 3, 5, 2, 1, and 4, where 1 is the highest priority. What is the mean process turnaround time?",
    "options": ["14","16","20","22"],
    "correctAnswer": 1,
    "solution": `### Explanation

Priority scheduling executes processes based on priority, where lower numbers have higher priority.

**Turnaround time** = Completion time - Arrival time

| Process | Running time | Priority | Turnaround Time |
|---------|-------------|----------|----------------|
| D       | 4           | 1        | 4              |
| C       | 2           | 2        | 6              |
| A       | 10          | 3        | 16             |
| E       | 8           | 4        | 24             |
| B       | 6           | 5        | 30             |

Total turnaround time = 80, Mean turnaround time = 80/5 = **16ms**.`
  },
  {
    "id": "2024S_FE-A_14",
    "question": "![Image](Files/Pasted%20image%2020241017140423.png)",
    "options": ["A","B","C","D"],
    "correctAnswer": 3,
    "solution": `### Explanation

Buffer is a temporary storage for data transfer. To avoid buffer overflow, 
L (buffer size) must be greater than or equal to the accumulated data in the buffer:

L ≧ (S − R) × T

- (S − R) represents the difference between the sending and receiving speeds.
- T represents time, determining how much data accumulates in the buffer.`
  },
  {
    "id": "2024S_FE-A_15",
    "question": "Which of the following is the appropriate explanation of ideal hashing used during a data search?",
    "options": ["It is advanced search technology that determines the intention of a user’s search request by adding recognition and decision functions to an object that combines data and its processing.","It is data search technology that is fast and highly scalable, in which values converted from data with a specific algorithm are used for storage addresses of the data.","It is technology and techniques for searching a large volume of accumulated data to identify trends, correlations, patterns, and other information required for management and marketing.","It is technology created with the aim of increasing the hit ratio for keyword searches and preventing omissions in searches by using a list of synonyms and equivalent words."],
    "correctAnswer": 1,
    "solution": `### Explanation

**Hashing** is a fast data retrieval technique that converts input into a hash value used as an index in a hash table.

- **(a)** Describes AI-based search intent recognition, unrelated to hashing.
- **(c)** Refers to data mining, which finds patterns in large datasets, unlike hashing.
- **(d)** Describes synonym-based search optimization, unrelated to hashing.

Hashing focuses on efficiently storing and retrieving data.`
  },
  {
    "id": "2024S_FE-A_16",
    "question": "![Image](Files/Pasted%20image%2020241017225445.png)",
    "options": ["A","B","C","D"],
    "correctAnswer": 3,
    "solution": `The original circuit consists of:

1. x and y are inputs to a NAND gate. The output of the NAND gate is ​x y, which is the inversion of the AND operation.

2. z goes through a NOT gate before being input to the OR gate. So the value entering the OR gate from z is ​z.

3. The final output function comes from the OR gate, which takes ​x y​ (from the NAND gate) and ​z (from the NOT gate).

Thus, the Boolean expression for the original circuit is:

f(x, y, z) = x y + z

Now, take note of these equivalences in circuits:

![Image](Files/Pasted%20image%2020241017225550.png)

The original circuit is just like this one

![Image](Files/Pasted%20image%2020241017225550.png)

And based on the photo, that circuit is just equivalent to this

![Image](Files/Pasted%20image%2020241017225550.png)

Among the given choices from above, letter D is the right answer as it outputs the same boolean expression as the original circuit which was:

f(x, y, z) = x y + z`
  },
  {
    "id": "2024S_FE-A_17",
    "question": "In the process of creating animation, which of the following is used to record the natural movement of objects, humans, and animals by using sensors and video cameras?",
    "options": ["Key frame method","Morphing","Motion capture","Pixel shader"],
    "correctAnswer": 2,
    "solution": "Motion capture (often abbreviated as \"mocap\") is a technique used in animation and visual effects to record the natural movement of objects, humans, and animals. It involves placing sensors on the subject's body, which capture the movement in real-time. These movements are then used to animate digital characters or objects. Video cameras and sensors are integral to the motion capture process, translating physical actions into digital animations."
  },
  {
    "id": "2024S_FE-A_18",
    "question": "Which of the following is a critical step in creating a relational database?",
    "options": ["Building a network diagram","Creating entity-relationship diagrams","Designing a flowchart","Programming in C++"],
    "correctAnswer": 1,
    "solution": "Creating entity-relationship diagrams are essential before making a relational database because they define the relationships between entities (tables) in your database. By having a clear visual representation of these relationships, creating the relational database becomes easier."
  },
  {
    "id": "2024S_FE-A_19",
    "question": "![Image](Files/Pasted%20image%2020241017231644.png)",
    "options": ["A department has many employees, and employees can have multiple dependents.","A department has many employees, where each employee has exactly one dependent.","An employee can have at most one dependent.","An employee can work in two departments."],
    "correctAnswer": 0,
    "solution": `The diagram shows three entities: **Department**, **Employee**, and **Dependent**.

There is an arrow from **Department** to **Employee**, which suggests a relationship between departments and employees, typically indicating that each department can have multiple employees.

The arrow from **Employee** to **Dependent** suggests that an employee can have multiple dependents.

**Option A** correctly interprets the E-R model by stating that a department can have many employees, and employees can have multiple dependents, which aligns with the structure shown in the diagram.The other options do not fully capture these relationships:

- **b)** suggests each employee has exactly one dependent, which is incorrect based on the diagram's "many" relationship.
- **c)** incorrectly limits employees to at most one dependent.
- **d)** does not relate to the diagram, as it introduces a relationship where an employee can work in two departments, which is not shown in the model.`
  },
  {
    "id": "2024S_FE-A_20",
    "question": "![Image](Files/Pasted%20image%2020241017232054.png)",
    "options": ["CatalogID, Price, SpecialPrice","CatalogID, ProductID, Price, SpecialPrice","Price, Special Price","ProductID, Price, SpecialPrice"],
    "correctAnswer": 1,
    "solution": `

Since the fields of Price and SpecialPrice are already given, what needs to be determined are the remaining fields that can be inferred from the ERD.

From the figure, we can see that there is an optional many relationship between Catalog and CatalogProduct and between ProductItem and CatalogProduct. In a relational database, the practice for defining a relationship between tables is through a foreign key, which can be mapped to the adjacent table.With this information, we can deduce that the CatalogProduct table should have the fields of CatalogID and ProductID as these can be mapped to the primary keys of the ProductItem and Catalog tables. These serve as the foreign keys in the CatalogProduct table that can be used to form a relationship with the adjacent tables.`
  },
  {
    "id": "2024S_FE-A_21",
    "question": "![Image](Files/Pasted%20image%2020241018093758.png)",
    "options": ["GROUP BY Class, AverageScore ORDER BY Class, Subject","GROUP BY Class, Subject ORDER BY Class, AVG(Score)","GROUP BY Class, Subject ORDER BY Class, Subject","GROUP BY Class, Subject, StudentNumber ORDER BY Class, Subject, AverageScore"],
    "correctAnswer": 2,
    "solution": `The correct answer is **c) GROUP BY Class, Subject ORDER BY Class, Subject** because it fits the logical structure and intent of the SQL query.

- The SQL query intends to calculate the average score for each **Class** and **Subject** combination. To do this, you need to group the data by these two fields.
- After calculating the averages, the result should be ordered by **Class** and **Subject**, as specified in the query prompt.

### Why the Others Won't Fit

**a) GROUP BY Class, AverageScore ORDER BY Class, Subject**:
- This is incorrect because **AverageScore** is an alias for the aggregated result (\`AVG(Score)\`), not a column in the original table. You cannot group by a calculated aggregate like **AverageScore**. SQL requires grouping by fields that are not aggregate functions (such as **Class** and **Subject**).

**b) GROUP BY Class, Subject ORDER BY Class, AVG(Score)**:
- Although the grouping part is correct, the **ORDER BY AVG(Score)** is problematic. You cannot order by an aggregate function in this context, since the prompt asks for ordering by **Class** and **Subject** (not by the average score). Ordering by **Class** and **Subject** is more logical when sorting the data.

**d) GROUP BY Class, Subject, StudentNumber ORDER BY Class, Subject, AverageScore**:
- This is incorrect because adding **StudentNumber** in the **GROUP BY** clause would break the purpose of averaging scores by **Class** and **Subject**. By grouping by **StudentNumber**, you would create a group for each student, effectively preventing the \`AVG(Score)\` from being calculated per **Class** and **Subject**.
- Additionally, the **ORDER BY AverageScore** is not what the prompt asks for—it requires ordering by **Class** and **Subject**.`
  },
  {
    "id": "2024S_FE-A_22",
    "question": "Which of the following can change the deadlock state of the transaction back to the normal state?",
    "options": ["Commit","Drop","Rollback","Roll Forward"],
    "correctAnswer": 2,
    "solution": `A **deadlock** occurs when two or more transactions are waiting for each other to release resources, and none of them can proceed. To resolve a deadlock, the system must break the cycle of waiting by aborting one or more transactions involved in the deadlock.

- **Rollback** refers to aborting a transaction and undoing any changes it has made. When a transaction involved in a deadlock is rolled back, it releases the resources it was holding, allowing the other transactions to proceed. This effectively resolves the deadlock and returns the system to a normal state.

### Why the Others Won't Fit

**a) Commit**:
- A **commit** finalizes all changes made by a transaction and permanently saves them to the database. However, in the case of a deadlock, committing is not possible because the transaction is waiting for a resource held by another transaction. Thus, **commit** cannot resolve a deadlock.

**b) Drop**:
- **Drop** is a command that removes a database object (like a table, index, or view) entirely. It is unrelated to resolving a deadlock situation in transactions. Dropping an object won’t free up resources involved in the deadlock, so this option is incorrect.

**d) Roll Forward**:
- **Roll Forward** is typically used during recovery after a failure, where committed transactions are applied to the database to bring it to a consistent state. This does not resolve a deadlock because it is related to restoring the database state after a crash, not resolving transactional conflicts.`
  },
  {
    "id": "2024S_FE-A_23",
    "question": "Which of the following is the network device that makes a forwarding decision on the basis of the destination MAC address in the frame header?",
    "options": ["Patch cable","Repeater hub","Router","Switching hub"],
    "correctAnswer": 3,
    "solution": `A **switching hub** (commonly referred to as a **switch**) is a network device that operates at the **data link layer** (Layer 2) of the OSI model. It makes forwarding decisions based on the **destination MAC address** contained in the frame header. When a frame arrives at the switch, the switch examines the MAC address of the destination device and forwards the frame only to the specific port associated with that address, reducing network congestion and improving performance.

### Why the Others Won't Fit

**a) Patch cable**:
- A **patch cable** is simply a physical medium, typically a twisted pair or fiber optic cable, used to connect devices to a switch, hub, router, or other network components. It does not make any forwarding decisions or interact with MAC addresses. Thus, this is not a network device.

**b) Repeater hub**:
- A **repeater hub** operates at the **physical layer** (Layer 1) of the OSI model. It does not examine or use MAC addresses. Instead, it broadcasts incoming data to all ports without distinguishing between devices, which results in higher network traffic and collisions. Since it does not make forwarding decisions based on the MAC address, this option is incorrect.

**c) Router**:
- A **router** operates at the **network layer** (Layer 3) of the OSI model and makes forwarding decisions based on **IP addresses**, not MAC addresses. It routes packets between different networks by examining the destination IP address. While routers play a key role in networking, they do not make forwarding decisions based on MAC addresses, so this option is incorrect.`
  },
  {
    "id": "2024S_FE-A_24",
    "question": "Which of the following is the broadcast address of the network 192.168.10.0/23?",
    "options": ["192.168.10.0","192.168.10.255","192.168.10.511","192.168.11.255"],
    "correctAnswer": 3,
    "solution": `The IP address **192.168.10.0/23** uses a **/23** subnet mask, which means the subnet mask is **255.255.254.0**. This gives the network a range that spans **2 consecutive Class C subnets** (a total of 512 IP addresses). A /23 subnet has **9 host bits**, which allows for 512 IP addresses (2^9 = 512), including network and broadcast addresses.

Calculating the range:

- **192.168.10.0/23** starts at **192.168.10.0** (the network address).
- The last address in this range is the **broadcast address**. Since a /23 subnet spans 512 addresses, the network range includes addresses from **192.168.10.0** to **192.168.11.255**.

 Breakdown of the addresses:

- The **network address** (first address in the range) is **192.168.10.0**.
- The **last usable address** (the broadcast address) in this range is **192.168.11.255**, which is used to broadcast to all hosts within the network.

### Why the Others Won't Fit

- **a) 192.168.10.0**: This is the **network address**, not the broadcast address. It identifies the network itself and cannot be used as a broadcast address.
- **b) 192.168.10.255**: This would be the broadcast address for a **/24** subnet (with subnet mask 255.255.255.0), but since we are dealing with a **/23** subnet, the broadcast address covers both 192.168.10.x and 192.168.11.x, making **192.168.11.255** the broadcast address.
- **c) 192.168.10.511**: This is not a valid address because the maximum possible address in this range would be **192.168.11.255**.`
  },
  {
    "id": "2024S_FE-A_25",
    "question": `Which of the following is the name of a communication standard that is used in mobile phone networks and has the three characteristics described below?

(1) All communications are processed with a packet switching scheme.

(2) It is possible to use a communication scheme called MIMO that uses multiple antennas.

(3) It has been standardized in the international standardization project 3GPP (3rd Generation Partnership Project).`,
    "options": ["LTE (Long Term Evolution)","MAC (Media Access Control)","MDM (Mobile Device Management)","VoIP (Voice over Internet Protocol)"],
    "correctAnswer": 0,
    "solution": `**LTE (Long Term Evolution)** is a communication standard used in mobile phone networks that meets all three of the characteristics described:

1. **Packet switching scheme**: LTE uses packet-switched communication for data transfer, which is different from older circuit-switched networks used for voice calls. This allows for more efficient use of network resources, especially for data transmission.

2. **MIMO (Multiple Input Multiple Output)**: LTE supports **MIMO**, a technology that uses multiple antennas at both the transmitter and receiver to improve communication performance. MIMO enhances data throughput and signal reliability, which is a key feature in LTE networks.

3. **Standardized by 3GPP**: LTE has been standardized by the **3rd Generation Partnership Project (3GPP)**, which is a global collaboration between telecommunications organizations that work on mobile telecommunication standards like LTE and 5G.

### Why the Others Won't Fit

**b) MAC (Media Access Control)**:
- **Media Access Control (MAC)** is a protocol used to control how devices access and transmit data over a network, typically in wired or wireless LANs. It is not specific to mobile networks and does not meet the criteria of being a mobile communication standard that supports MIMO or packet switching in mobile networks.

**c) MDM (Mobile Device Management)**:
- **Mobile Device Management (MDM)** refers to software solutions used by organizations to manage and secure mobile devices like smartphones and tablets. It has nothing to do with mobile network communication standards and does not involve packet switching or MIMO technology.

**d) VoIP (Voice over Internet Protocol)**:
- **VoIP** is a technology used to deliver voice communications over IP networks (like the internet), but it is not a mobile network communication standard. While VoIP uses packet switching for voice data, it is not standardized by 3GPP, nor does it typically support MIMO technology.`
  },
  {
    "id": "2024S_FE-A_26",
    "question": "Which of the following is the network utility that is used to check detailed TCP connection information of the host?",
    "options": ["arp","ipconfig","netstat","ping"],
    "correctAnswer": 2,
    "solution": `Netstat (network statistics) is a command-line network utility used to display detailed information about TCP (and other protocol) connections on the host machine. It provides information such as:

- Active TCP and UDP connections.
- Listening ports.
- Routing tables.
- Network interface statistics.

Netstat is particularly useful for troubleshooting network issues and checking the status of connections, including which ports are being used and which connections are established or waiting.

### Why the Others Won't Fit

**a) arp (Address Resolution Protocol)**:

- The arp command is used to view and manage the ARP table, which maps IP addresses to MAC addresses. It is not used to check TCP connection information.

**b) ipconfig**:

- ipconfig is a utility that displays network interface configurations on Windows systems, such as IP addresses, subnet masks, and default gateways. It does not provide information about TCP connections.

**d) ping**:

- Ping is used to test the reachability of a host on an IP network. It sends ICMP echo request packets and measures the time it takes to receive a reply, but it does not provide information about TCP connections.`
  },
  {
    "id": "2024S_FE-A_27",
    "question": "Which of the following describes a brute force attack aimed at finding the key of symmetric encryption?",
    "options": ["Finding the key by observing the ciphertext change when the plaintext is altered by a certain amount","Finding the key by testing all key combinations sequentially when a set of plaintext and ciphertext is given","Finding the key by using the algebraic expression representing the relationship between the plaintext, ciphertext, and key as a clue","Finding the key by using the statistical correlation between a part of the information of the plaintext and part of the information of the ciphertext as a clue"],
    "correctAnswer": 1,
    "solution": "This describes a brute force attack because it involves systematically trying every possible key until the correct one is found. In symmetric encryption, the attacker doesn’t know the key, so the goal is to try every possible combination to decrypt the ciphertext."
  },
  {
    "id": "2024S_FE-A_28",
    "question": "Which of the following is a package of unauthorized programs and tools that has functions such as creating a backdoor on a server and hiding the evidence of intrusion inside the server?",
    "options": ["RFID","Rootkit","TKIP","Web beacon"],
    "correctAnswer": 1,
    "solution": `A rootkit is a collection of malicious programs and tools designed to allow unauthorized access to a computer system while concealing its presence. It typically has the following characteristics:

- Backdoor creation: Rootkits often include a backdoor that enables an attacker to remotely access the compromised system without the user’s knowledge.
- Hiding evidence: Rootkits are designed to hide their existence and any traces of intrusion, such as logs or processes, making it difficult for the system owner to detect the attack.
- Stealth and persistence: Rootkits operate in stealth mode and can sometimes survive system reboots or even reinstallations of the operating system.

### Why the Others Won't Fit

**a) RFID (Radio Frequency Identification)**:

- RFID is a technology used for wireless communication between a reader and a tag using radio waves. It is used for identification and tracking of objects (e.g., in supply chains, passports), not for creating backdoors or hiding evidence of intrusions.

**c) TKIP (Temporal Key Integrity Protocol)**:

- TKIP is an encryption protocol used to secure wireless networks, particularly in older Wi-Fi security standards like WPA. It is unrelated to malicious software or tools for hiding evidence of intrusion.

**d) Web beacon**:

- A web beacon is a small, often invisible image file or script embedded in a web page or email, used to track user activity, such as whether an email was opened or a webpage was visited. It is primarily a tracking tool and does not involve creating backdoors or hiding evidence of intrusions.`
  },
  {
    "id": "2024S_FE-A_29",
    "question": "Which of the following is a public-key cryptography algorithm whose security depends on the difficulty of factoring extremely large numbers into primes?",
    "options": ["AES","DH","DSA","RSA"],
    "correctAnswer": 3,
    "solution": `RSA (Rivest-Shamir-Adleman) is a widely used public-key cryptography algorithm that relies on the mathematical challenge of factoring large numbers into their prime factors. The security of RSA is based on the fact that while multiplying two large prime numbers is computationally simple, factoring their product back into the original primes is extremely difficult, especially when the numbers are very large. This is known as the integer factorization problem, and it is the foundation of RSA's encryption and key exchange mechanisms.

### Why the Others Won't Fit

**a) AES (Advanced Encryption Standard)**:

- AES is a symmetric encryption algorithm, meaning the same key is used for both encryption and decryption. AES relies on complex mathematical transformations for security, but it does not depend on the difficulty of factoring large numbers.

**b) DH (Diffie-Hellman)**:

- Diffie-Hellman is a key exchange protocol that allows two parties to securely exchange cryptographic keys over a public channel. Its security relies on the difficulty of solving the discrete logarithm problem, not on factoring large numbers.

**c) DSA (Digital Signature Algorithm)**:

- DSA is a digital signature algorithm used for verifying the authenticity and integrity of a message. Its security is based on the discrete logarithm problem, not on factoring large numbers into primes.`
  },
  {
    "id": "2024S_FE-A_30",
    "question": "Which of the following is the name of an attack where manipulation is employed to place a malicious website near the top of the search results on a search engine?",
    "options": ["Cross-site scripting","DNS cache poisoning","SEO poisoning","Social engineering"],
    "correctAnswer": 2,
    "solution": `SEO poisoning (Search Engine Optimization poisoning) is a type of attack where malicious actors manipulate search engine algorithms to rank malicious websites highly in search results. The goal is to lure users into visiting these harmful sites by making them appear relevant or popular. Once users visit the compromised sites, they may be exposed to malware, phishing attacks, or other malicious activities.

### Why the Others Won't Fit

**a) Cross-site scripting (XSS)**:

- Cross-site scripting is an attack where an attacker injects malicious scripts into web pages viewed by other users. It exploits vulnerabilities in websites but does not involve manipulating search engine rankings.

**b) DNS cache poisoning**:

- DNS cache poisoning is an attack that corrupts the DNS cache, causing users to be redirected to malicious sites when they try to access legitimate domains. This attack targets DNS servers, not search engine results.

**d) Social engineering**:

- Social engineering is the manipulation of individuals to obtain confidential information or gain unauthorized access. It typically involves human interaction, such as phishing or pretexting, and does not involve search engine manipulation.`
  },
  {
    "id": "2024S_FE-A-31",
    "question": "Which of the following is an explanation of the timestamp service in information security?",
    "options": ["It is a service that authenticates biometric information, such as fingerprints, voice prints, vein patterns, retina, and iris, by using the date and time when the information is registered in the authentication system.","It is a service that certifies that electronic data certainly exists on a particular date and time and that the data has not been modified since that date and time.","It is a service that securely verifies that the date and time information is not falsified midway for setting the clocks of the PCs and servers on the network.","It is a web service that securely displays the global date and time information used in official records by using encrypted communication."],
    "correctAnswer": 1,
    "solution": `A timestamp is the current time of an event that a computer records.

Timestamp Service

It's a service that checks if a timestamp has been modified or not.

[What is a timestamp?](https://www.techtarget.com/whatis/definition/timestamp)`
  },
  {
    "id": "2024S_FE-A-32",
    "question": "Which of the following is an appropriate term for an organized and highly skilled team whose mission is to continuously monitor and improve an organization’s security posture while preventing, detecting, analyzing, and responding to cybersecurity incidents, utilizing both technology and well-defined processes and procedures?",
    "options": ["Cybersecurity","Incident Management Center (IMC)","Network Operations Center (NOC)","Security Operations Center (SOC)"],
    "correctAnswer": 3,
    "solution": `Cybersecurity

This is not a team

Incident Management Center (IMC)

This is to restore normal service operation ASAP, not preventing, analyzing and etc.

Network Operations Center (NOC)

They have a centralized location to monitor the infrastructure 24/7. It is the first line of defense when anything fails.

Security Operations Center (SOC)

It's a centralized function where people continuously monitor, and improve security while preventing any threats.`
  },
  {
    "id": "2024S_FE-A-33",
    "question": `In an OS where permissions for reading, writing, or executing a file can be independently set as attributes of the file, one bit is allocated for each of these three (3) permissions to determine whether they are allowed or not. When these three bits are configured using an octal value from 0 through 7, the trial results below are obtained. Which of the following is an appropriate trial result?

(1) When 0 is set, reading, writing, and execution can no longer be performed.

(2) When 3 is set, reading and writing can be performed, but execution cannot.

(3) When 7 is set, reading, writing, and execution can be performed.`,
    "options": ["When 2 is set, reading and execution can be performed.","When 4 is set, only execution can be performed.","When 5 is set, only writing can be performed.","When 6 is set, reading and writing can be performed."],
    "correctAnswer": 1,
    "solution": "![Image](Files/Pasted%20image%2020241017142304.png)"
  },
  {
    "id": "2024S_FE-A-34",
    "question": "Which of the following are components of a UML2.x (including 2.0 and later versions) state diagram?",
    "options": ["Message and Activity","Message and Transition","State and Message","State and Transition"],
    "correctAnswer": 3,
    "solution": `What is UML (Unified Modeling Language)?

Used to model non-software systems used for the military. Basically like a flowchart and the first version only has 9 diagrams.

UML2

Updated version and is more powerful and has more diagrams, etc.

State Diagrams

![Image](Files/Pasted%20image%2020241017143653.png)

State and Transition

- The state is the box. If a condition is satisfied, it runs inside.
- Transitions are the arrows that connects 2 messages together.

A transition may have a trigger, a guard and an effect.

- **Trigger** is the cause of the transition
- **Guard** is a condition for the trigger to cause its transition
- **Effect** is behavior that happens when the transition is triggered

![Image](Files/Pasted%20image%2020241017144718.png)

If nothing sticked, just remember that you're a solider in the military.

**State 1** - You're safe

**Trigger** - Enemy combatant threw a grenade at you
**Guard** - Holy crap gotta do something
**Effect** - Throw it back to him

**State 2** - Ez win

**You need a State and a Transition.**`
  },
  {
    "id": "2024S_FE-A-35",
    "question": `Which of the following represents the appropriate combination of a class and an object in Object Oriented Programming?
![Image](Files/Pasted%20image%2020241017224508.png)`,
    "options": ["A","B","C","D"],
    "correctAnswer": 0,
    "solution": `Class vs Objects

![Image](Files/Pasted%20image%2020241017224949.png)A **Class** is a blueprint for creating objects.

An **Instance** is a specific object from a class.`
  },
  {
    "id": "2024S_FE-A-36",
    "question": "Which of the following is the most appropriate description of polymorphism in object-oriented design?",
    "options": ["It allows developers to define classes incrementally by reusing classes defined previously as the basis for new classes.","It allows the analyst to focus on the important dimensions while ignoring nonessential dimensions.","It combines processes and data into a single object.","It is the provision of a single interface to entities of different types."],
    "correctAnswer": 3,
    "solution": `What is Polymorphism?

In short it means "having multiple forms"

![Image](Files/Pasted%20image%2020241017232033.png)

You can think of a person as a father, a husband, an employee. The same person has multiple behaviors, that's **polymorphism.**`
  },
  {
    "id": "2024S_FE-A-37",
    "question": `There is a program module that is executed only when the integer value of integer x is 25 ≤ 𝑥 < 50. When testing this module using boundary value analysis, which of the following is an appropriate combination of values to be tested?

`,
    "options": ["24, 25, 49, 50","24, 25, 50, 51","25, 26, 49, 50","25, 26, 50, 51"],
    "correctAnswer": 0,
    "solution": `What is Boundary Value Analysis?

It's like testing for edge cases where the system might become broken.
This kind of testing is seeing if the value goes out of bounds or not.

From the example, the range is **25 to 49**.

Anything inside the range is valid.
26 is valid.
27 is valid.
36 is valid.
47 is valid.

Anything outside is invalid
24 is invalid.
99 is invalid.

Why is b not the answer?

**b) 24, 25, 50, 51**

- Starting with 24, it's invalid.
- 25 is valid, so we have our starting range.
- 50 is invalid, soooo where does our range end? We don't know. It could be 49, 48, 34? Who knows?

Similar to other options, we lack information to make our range, so the answer is **a.) 24, 25, 49, 50**`
  },
  {
    "id": "2024S_FE-A_38",
    "question": "Which of the following is an appropriate testing type to ensure that the interfaces and linkages between different parts of programs work properly?",
    "options": ["Acceptance test","Integration test","Qualification test","Unit test"],
    "correctAnswer": 1,
    "solution": `Acceptance Test

It ensures it meets business requirements and user needs before the application gets released.

Integration Test

Verifying modules and interfaces work together.
So, for in a **Banking App** the fund transfers and transaction modules should work smoothly together.

Qualification Test

It ensures that the application meets its standards and requirements before it gets released.

Unit Test

It involves testing whether each component works.
So the answer is **Integration Test**`
  },
  {
    "id": "2024S_FE-A_39",
    "question": "Which of the following is an explanation of the reverse engineering of software?",
    "options": ["The entire software is reconstructed after the existing software is analyzed and understood.","The existing software is analyzed, and its specification and structure are clarified.","The internal structure of the software is changed without any change to the externally observed behavior.","The source code is automatically generated from the design information by a development support tool."],
    "correctAnswer": 1,
    "solution": `What is Reverse Engineering?

You see an amazing website, and you're thinking to yourself. "Wow, how can I build this exquisite looking website?"

***Reverse Engineering***

You try to understand what technologies were used, frameworks, etc.

If you're given a complete Lego house, try to see what blocks were used, which colors were placed, and where they're placed. This should give you an idea on how it was made.

It can't be **a)** if you're wondering because we're not going to reconstruct it again.`
  },
  {
    "id": "2024S_FE-A_40",
    "question": "Which of the following is the appropriate order of the six phases in the SDLC (Software Development Life Cycle) model?",
    "options": ["Requirements Analysis -> Design -> Programming -> Deployment -> Testing -> Maintenance","Requirements Analysis -> Design -> Programming -> Testing -> Deployment -> Maintenance","Requirements Analysis -> Design -> Programming -> Testing -> Maintenance -> Deployment","Requirements Analysis -> Programming -> Testing -> Design -> Maintenance -> Deployment"],
    "correctAnswer": 1,
    "solution": `What is this SDLC Model?

Very self explanatory, it's how a software gets developed and what processes you'll do along the way.

1.) you'll need the requirements

2.) Then, you'll need the outline of the software, not program right away, so **d.** is out of the question

3.) Once you have the design (Figma) you can now program yay.

4.) After that you don't deploy. Big no no, you'll have to test it first.

5.) Once everything passes, you can deploy it.

6.) After deploying, you'll just have to maintain it and keep on a look out for future issues.`
  },
  {
    "id": "2024S_FE-A_41",
    "question": `The activities and milestones of a project are shown in the arrow diagram below. Which of the following is an appropriate description of the project if the duration of activity B is increased by 5 days?
![Image](Files/Pasted%20image%2020241018212653.png)`,
    "options": ["The earliest start time of activity G is delayed by 5 days.","The latest start time of activity F is delayed by 5 days.","The project’s minimum completion time does not change.","The project’s minimum completion time is increased by 5 days."],
    "correctAnswer": 2,
    "solution": `### Identify Paths

**First Path:** A -> B -> F -> H

**Second Path:** C -> D -> G -> H

**Third Path:** A -> B -> E -> G -> H


### Add All the Days

**First Path:** 10 + 5 + 20 + 15 = 50 days

**Second Path:** 10 + 25 + 15 + 15 = 65 days

**Third Path:** 10 + 5 + 10 + 15 + 15 = 55 days


### Add +5 days to Activity B
**First Path:** 10 + 10 + 20 + 15 = 55 days

**Second Path:** 10 + 25 + 15 + 15 = 65 days

**Third Path:** 10 + 10 + 10 + 15 + 15 = 60 days


So, what can we conclude from this?

Both the 1st and 3rd path increased by 5 days, but the 2nd path remained the same.
No matter how short the other path are, the 2nd path will always be the minimum completion time since it's the longest.


Just like in a group work, if you finished your part, but your other group members didn't do it yet, the project is still ongoing. The project will only be finished once everyone finished their parts.`
  },
  {
    "id": "2024S_FE-A_42",
    "question": `What is the Cost Performance Index (CPI) of the project under the conditions listed below?
![Image](Files/Pasted%20image%2020241018222309.png)`,
    "options": ["0.25","0.8","1.0","1.25"],
    "correctAnswer": 3,
    "solution": `### What is a Cost Performance Index (CPI)
When doing projects, it costs money. So you'll need to budget your finds wisely.
CPI helps track how much this thing costs, or that thing costs and increases the overall chance for a project to be completed within budget.

**Formula for Earned Value = Percent of Work Complete x Project Budget**
**Formula for CPI = Earned Value / Actual Cost**

**Earned Value** is basically how much work you've done based on the total project duration.

So far, 1 month has passed by and the duration of the project is 4 months, so we're 25% complete.
Put that in the **Earned Value** formula and we'll get 25,000.

Now we can get the CPI, so input those numbers in the formula and we'll get 1.25.`
  },
  {
    "id": "2024S_FE-A_43",
    "question": "In ITIL 2011 edition, which of the following is the appropriate order for the service lifecycle stages?",
    "options": ["Service design -> Continual service improvement -> Service strategy -> Service operation -> Service transition","Service design -> Service strategy -> Service operation -> Service transition -> Continual service improvement","Service strategy -> Service design -> Service operation -> Service transition -> Continual service improvement","Service strategy -> Service design -> Service transition -> Service operation -> Continual service improvement"],
    "correctAnswer": 3,
    "solution": `### What is an ITIL?
It stands for **Information Technology Infrastructure Library**

so from the name alone it's all about IT, and it has libraries/frameworks which is exactly what it is.

ITIL is like a guide for you to follow a process which doesn't necessarily have to be technology specific. These include processes, checklists, etc.

1) First, by just using common sense you need strategy first (the overall plan) before doing anything, so with that you've eliminated half of the options.
2) Next, you'll need design.
3) Next is transition. This is moving new services into a live environment. Basically going from development to production.
4) Next is operation. This is more like \`maintenance\` from the other management strategies. This is where you'll maintain, handle errors, and overall manage.
5) Lastly, you have the Continual Service Improvement. This is where you'll identify areas of improvement and how you can optimize your servers and costs.`
  },
  {
    "id": "2024S_FE-A_44",
    "question": "In IT service management, which of the following is an activity performed for the management of incidents and service requests?",
    "options": ["Evaluating if customer satisfaction with the service desk meets the agreed service targets and performing a review to identify improvement opportunities","Examining measures wherein the amount of free space on a disk is near its threshold","Investigating the impact of changes made to a program","Receiving a failure report from a user and checking to see if it corresponds to a known error"],
    "correctAnswer": 3,
    "solution": `### A
it's not related to incidents.

### B
This is talking about disks reaching its capacity.

### C
Okay, so this sounds kinda right because you may have changed something and caused an error, but it didn't necessarily say that.

### D
You get an error, check which kind of error it is and see what you can do with it. This is how you manage incidents.`
  },
  {
    "id": "2024S_FE-A_45",
    "question": "Which of the following is the most appropriate description concerning an interview conducted by a system auditor?",
    "options": ["The administrator of the audited department, who has experience in auditing tasks, is selected as the interviewee.","The entire interview is conducted by one (1) system auditor, as discrepancies may occur in the record if multiple auditors are involved.","The system auditor instructs the audited department to take improvement measures for deficiencies found during the interview.","The system auditor makes an effort to obtain documents and records that support the information obtained from the audited department during the interview."],
    "correctAnswer": 3,
    "solution": `### System Auditor
Someone who inspects and approves the security of systems and networks.

So, when you're an auditor, you need to go to other departments to do some kind of inspection.

A person who has experience may sound like the right answer, but not really because there could be biases due to their position / nepotism.

Having 1 auditor isn't right too, just having 1 seems biased. Having multiple auditors for transparency is the way.

### Why not c)
It may sound right and I even thought this was the answer, but system auditors aren't supposed to instruct people, they are just there to inspect.

Soo the answer is **d)**`
  },
  {
    "id": "2024S_FE-A_46",
    "question": "Which of the following is a case that enables the customer support operations at a call center to improve quality by applying a pattern recognition function or machine learning function to the accumulated data?",
    "options": ["Deriving the most appropriate response in real time from related materials and all the previous support history according to the content of the inquiry made by a customer","Displaying the digital content of a response manual or basic customer information on a pop-up window of a screen for responding to requests from the operators","Repeatedly providing role play training to new operators from an experienced operator who serves as a lecturer by using the response manual as the teaching material","Transferring a phone call or the relevant support screen to an experienced operator or a dedicated staff when the operator who is responding to a customer over the phone is unable to provide an answer"],
    "correctAnswer": 0,
    "solution": `### Machine Learning
uses data to gradually improve its accuracy

So, we need to keep feeding it data until it understands a pattern.

**b)** is out of the question because you're just giving it a manual and user information. If it were identifying user information patterns this would be the correct answer.

**c)** is also wrong because it only focuses on newly hires and not the actual interactions between the customers and the operators.

**d)** is just giving the phone to someone else and that's basically almost no interaction.

What we really want are actual interactions between the operators and the customers, so **a)** is the answer.`
  },
  {
    "id": "2024S_FE-A_47",
    "question": "Which of the following is a description of knowledge management?",
    "options": ["Conduct business by a flat organizational structure that has as few hierarchical levels as possible for quick decision making.","Conduct business by utilizing its core strength in know-how and technology that are unique to the company and cannot be imitated by others.","Conduct business that enhances overall capabilities to solve problems by sharing knowledge that is scattered throughout the company.","Implement management innovation in the company on the basis of a comparative analysis with companies that have achieved superior performance."],
    "correctAnswer": 2,
    "solution": `### Knowledge Management
By using common sense, this is really about managing information within the organization.

From that alone, you can think of knowledge being shared across different departments, using that knowledge, applying it, so that everyone can keep up.

**Definition:** collection of methods relating to creating, sharing, using and managing the knowledge and information of an organization.

**Key Word:** Sharing Knowledge`
  },
  {
    "id": "2024S_FE-A_48",
    "question": "Which of the following is an appropriate description of an RFI?",
    "options": ["It is a document describing the basic policy for the system, including a summary of the system, purpose, necessary functions, system requirements, and contract matters.","It is a document that is created after an RFP.","It is a document used by companies looking for the implementation of computerization to request specific system proposals from prospective suppliers such as system vendors.","It is a document used to request information concerning computerization from prospective suppliers such as system vendors."],
    "correctAnswer": 3,
    "solution": `What is an RFI?
It simply means Request for Information, from that alone you can see it in the choices.

But, just think of it as entering into an unfamiliar territory. You have your own company, but have no idea about customer relationship management solutions, so you need an RFI to gain more knowledge about that field.

The main goal for an RFI is to know which suppliers are best for your needs

You can ask for their 
- case studies
- overview about their services and key features

Once that's finished, you can either go to RFP or RFQ

What is an RFP
Request for Proposal

This is more detailed compared to an RFI because you'll be asking for their proposal.

You can ask for
- specifications
- detailed project plan
- timeline

So, it's really up to them on how they can meet your specific needs.

What is an RFQ
Request for Quotation

From the name itself, you're just inquiring about the price.

You can ask
- how much for 15 licenses for this application
- how much to implement this service`
  },
  {
    "id": "2024S_FE-A_49",
    "question": "Which of the following is a strategy that concentrates resources in the segment of a specific customer or specific product in order to achieve specialization?",
    "options": ["Challenger strategy","Follower strategy","Leader strategy","Niche strategy"],
    "correctAnswer": 3,
    "solution": `This question is about who is your target audience? Could be anyone.

### Challenger Strategy
From the name itself, you're challenging your competitors, so that's where your market is. If you have a shoe brand, you have the same market as Adidas, Nike, etc.

### Follower Strategy
From the name itself, you're just following your competitors. If your shoe brand is similar to Adidas in every possible way, except for the logo and idk colors, then you're using this strategy.

### Leader Strategy
From the name itself, you're the leader. You basically have no competition and your market is unknown or not developed yet. You're a trend setter. So an example would be a shoe brand that lets you fly?

### Niche Strategy
From the name itself, your market is very specific. This can be a shoe brand for hikers, that's more niche compared to before.`
  },
  {
    "id": "2024S_FE-A_50",
    "question": "Which of the following is an explanation of core competence that is adopted in business administration?",
    "options": ["It refers to a qualitative and quantitative understanding of its products, services, and operations through comparisons with the strongest competitor or advanced companies.","It refers to dramatical improvements in the costs, quality, service, and speed of a company by fundamentally reviewing and radically redesigning its business processes.","It refers to the company’s unique skills, technologies, and other strengths that are superior to other companies, which serve as a source of competitive advantage.","It refers to the management of the allocation of company-wide management resources in an effective and integrated manner so as to achieve an improvement in management efficiency."],
    "correctAnswer": 2,
    "solution": `Business Administration
managing an organization's resources, time and people.

Core Competence of that is how your business has the upper hand. What gives you that competitive edge?

From that alone, you might be able to cross out some letters.

**a)** Has nothing to do with that, also it's just trying to understand and compare.

**b)** Sure this is great for the company, but not related to business administration. This is more like redesigning your business model and making adjustments.

**c)** Correct Answer. Clearly shows how your business has the upper hand.

**d)** This is more on resource management.`
  },
  {
    "id": "2024S_FE-A_51",
    "question": "Which of the following is an appropriate explanation of telemarketing?",
    "options": ["It refers to direct marketing that includes calling people at home and asking for donations, opinions, or purchases.","It refers to direct marketing that sells products and services and builds customer relationships over the Internet.","It refers to direct marketing that sends offers, announcements, reminders, or other items to a person at a particular address.","It refers to direct marketing that sends sales alerts, links to website updates, appointments, or delivery reminders to large groups of people."],
    "correctAnswer": 0,
    "solution": `### Telemarketing
Pretty self explanatory. Think of it as Telephone and Marketing combined = Telemarketing

Marketing is when you want other people to know your product, and making sure that they find value in it. It's also to build relationships and gather feedback from them.

If you selling toilets, you're providing value on how toilets are a necessity and we use them everyday.

Telemarketing is just marketing on the telephone.

### Why not b?
This is marketing over the internet not on a telephone, so it's wrong.

The only difference is the medium used.

Email marketing uses email
Internet marketing uses the internet
Telemarketing uses the telephone`
  },
  {
    "id": "2024S_FE-A_52",
    "question": "Which of the following is an appropriate explanation of the technology S curve?",
    "options": ["It represents the diffusion process of a new technology. It shows that the growth rate of the penetration rate gradually decreases as products applying the technology penetrate the market, by using a frequency distribution curve.","It represents the maturing process of technology. It shows that during the time until the new technology is actually spread, the degree of awareness changes as time passes.","It represents the process of technological progress. It shows that technology advances slowly at the beginning, then advances rapidly, and thereafter, slowly stagnates.","It represents the relationship between production volume and unit cost. It shows the course of reduction in unit cost with an increase in cumulative production volume."],
    "correctAnswer": 2,
    "solution": `### Technology S Curve
Just like anything in life, over time you'll see some kind of increase.

If you invest in the stock market (S&P500) average returns are typically increasing over the years (excluding the market crashes).

Compound interest starts slow then all of a sudden after a long time it sky rockets. Like if you were to invest in a ROTH IRA, by 60 years old you'll be able to get millions from just depositing a few hundreds/thousands on your 20s.

![Image](Files/Pasted%20image%2020241021150802.png)

It the line also looks like some kind of letter C that's lying down.

The graph below is like the letter S, which is why it's called the **Technology S Curve**

At first, it's just like compound interest. Building your technology is slow, and hard, but as time goes on it gets easier and you'll start to see massive progress.

After a while, once your technology is now developed and has matured, it will reach a stabilization point and slow back down.

![Image](Files/Pasted%20image%2020241021150452.png)`
  },
  {
    "id": "2024S_FE-A_53",
    "question": "Which of the following is an appropriate computing concept that describes the idea of physical objects, such as devices, vehicles, and buildings, that are connected to the Internet and are able to identify themselves to other devices?",
    "options": ["Computer networks","Deep learning","Internet of things","Network topology"],
    "correctAnswer": 2,
    "solution": `### Internet of Things
If you at least paid attention in class, you'll know that this is the answer.

By the name itself, it's really just things/objects that have internet and sensors. These can be our phones, computers, printers, refrigerator (if advanced), etc.

All those devices can connect to the internet, they can collect data, share data, those stuff.

They are also capable of sharing data among each other.

### Computer Networks
Why not this? This also feels like the answer.

Let's look at its definition first
**Computer networking** refers to interconnected computing devices that can exchange data and share resources with each other. These networked devices use a system of rules, called communications protocols, to transmit information over physical or wireless technologies.

Boom, where's the physical device there?

### Deep Learning
There's no physical device here. It's also focused on algorithms and data analysis.

### Network Topology
Now we have physical devices, but we're not exactly talking about those physical devices.

When we talk about formation in the military, you're not actually talking about each person, you don't know their names, etc. You just know that someone stands over here, 100 people over there in the back, 60 on the right, etc.

Network Topology is the same, it's focused on the arrangement of the devices, but it doesn't explain what those object are.`
  },
  {
    "id": "2024S_FE-A_54",
    "question": `A factory manufactures the three products that are shown in the table below. Which of the following is the maximum possible profit in dollars? Here, there is an upper limit to the monthly demand volume for each product. Also, the factory can only use up to 200 hours per month for the manufacturing process and cannot manufacture more than one products in parallel.
![Image](Files/Pasted%20image%2020241021153218.png)`,
    "options": ["26,250","30,000","31,500","33,000"],
    "correctAnswer": 3,
    "solution": `### First find how much units can you produce per hour
For Product X, you can produce 1 unit per 6 minutes. That's 10 units per hour.
60 minutes / 6 minutes = 10 units

For Product Y, 1 unit per 10 minutes.
60 minutes / 10 minutes = 6 units

For Product Z, 1 unit per 15 minutes.
60 minutes / 15 minutes = 4 units.

Once you know how many units you'll get per hour, let's turn that into profits.
### Finding the profits per hour
This is simple, just multiply the units by the profit per unit in the table
Product X:
10 units x $18 = $180/hour

Product Y:
6 units x $25 = $150/hour

Product Z:
4 units x $30 = $120/hour

### Finding maximum production in 1 month
Once your done finding the profits in 1 hour, you'll need to find the maximum amount of time you can use the factory in 1 month.

200 hours per month sounds so little, but I guess that's what they only allow.

24 hours = 1 day
48 hours = 2 days

soo, multiply the 200 hours by 24 to get the equivalent in days.

200 hours x 24 hours = 8.333333 days or 25/3 days

### Find the profits for each product
Now we can find the maximum profit for 8.33333 days (25/3).

Going back to the profits per hour, we can see the Product X has the highest profits per hour, so let's use that first

Product X:  10 units/hour   |   $180/hour
Product Y:    6 units/hour   |   $150/hour
Product Z:    4 units/hour   |   $120/hour

Remember we also have a limit of only 1000 units.

If we only use Product X for the entire 8.3333 days (25/3), we'll product more units than what is given in the table.

10 units x 24 hours x 25/3 days = 2000 units.

For Product X, we can only have 1000, so we'll divide 25/3 days in half (25/6 days), so we can only produce 1000 units.

Now calculate the profits for Product X
$180 x 24 hours x 25/6 days = $18,000

---
We've reached our quota for Product X, but that only took half of the needed time, we have 4.1666666 days remaining or 25/6 days.

Looking at the profits per hour chart, Product Y gives the second best results, so let's use that.

If we calculate whether 6 units/hour will go beyond 900 units in 25/6 days, let's calculate first.

6 units x 24 hours x 25/6 days = 600 units

Nice, 600 units is less than 900 units, so we can allocate the entire factory with just Product Y, and not needing to touch Product Z.

Now calculate the profits for Product Y
$150 x 24 hours x 25/6 days = \$15,000

### Combine the results

Product X = \$18,000

Product Y = \$15,000

Total Profits = $33,000`
  },
  {
    "id": "2024S_FE-A_55",
    "question": "Which of the following is an example of Consumer Generated Media (CGM)?",
    "options": ["A website of a company through which the company publishes information about its management and financial status, as well as performance trends for individual investors","A website of a company through which the company transmits information about the characteristics and usage methods of its products to the general consumers","A website of a government organization through which the organization publishes information about its policies and administrative services to the general public","A website such as a blog and SNS, etc. through which an individual transmits information to an unspecified number of people about the evaluation of products, etc. that the person has used"],
    "correctAnswer": 3,
    "solution": `### Consumer Generated Media
Let's understand what Generated Media is first
These are things that are generated, like text, images, videos.

Consumers and users like us who consume data.

From that alone, you can eliminate anything non-related to that, like government policies and services.

It's not about financial statuses, performance trends, government policies, administrative services (letters a - c)

It's really just people sending to other people their own text messages, videos, images, etc.`
  },
  {
    "id": "2024S_FE-A_56",
    "question": `Which of the following is the maximum value of Z from the constraints that are shown below?

x + y ≤4

x ≥ 0, y ≥ 0

Z= 3x + 4y`,
    "options": ["12","14","16","18"],
    "correctAnswer": 2,
    "solution": `Re-arrange so we get the value of y

y ≤ 4 - x

Substitute y in the Z equation
Z = 3x + 4(4 - x)
Z = 3x + 16 - 4x

Z = 16 - x
So we get this equation above.
We can see that Z decreases as x increases.
To maximize Z (from problem specs) we decrease x as much as we can.

From the definition, we can see x ≥ 0, so the minimum value is 0.

So substitute that

Z = 16 - 0

Z = 16`
  },
  {
    "id": "2024S_FE-A_57",
    "question": `When a company wants to earn a profit of $42,000, which of following is the number of units that the company must sell under the conditions shown in the table below?
![Image](Files/Pasted%20image%2020241021165541.png)`,
    "options": ["14,000","18,200","26,000","26,200"],
    "correctAnswer": 1,
    "solution": `Price per unit = $17

Find the Total Fixed costs so just add them all up
$130,000 + $10,000 = $140,000

Find the Total Variable costs

3 + 4 = 7 dollars/unit

The goal is $42,000

So let's calculate the needed units:
(Fixed Costs + Target Profit) / (Selling Price per Unit - Variable Costs per Unit)

(140000 + 42000) / (17 - 7) = 18,200 units`
  },
  {
    "id": "2024S_FE-A_58",
    "question": "Which of the following is part of total quality management?",
    "options": ["Designing products and services that meet or exceed customers’ expectations","Focusing on the appointment of staff with long-term work experience in a similar environment","Prioritizing central decisions rather than empowerment to ensure the quality of products and services","Promoting the capability of each department to work independently in a competitive manner"],
    "correctAnswer": 0,
    "solution": `It's all about the quality of your product.

Are your customers satisfied? Do they have complaints? Or are they impressed with the craftsmanship, attention to detail, etc. of your product?

By identifying those key points, you'll be able to adjust the quality of your product if they didn't like it for example, this is Total Quality Management.

It's constantly improving your product and addresses complaints from your customers. Trying to prevent factory defects, aligning with customer needs, and so on.`
  },
  {
    "id": "2024S_FE-A_59",
    "question": `When a relation between the list price of a product and the demand for the product is defined as a linear equation, which of the following is the appropriate numerical value to be inserted into blank A below?
![Image](Files/Pasted%20image%2020241021171831.png)`,
    "options": ["30,000","35,000","40,000","45,000"],
    "correctAnswer": 3,
    "solution": `To make your life easier just draw it out

$30 = 0

$10 = 60,000 units

you can find the middle point which is $20, and also finding the mid point of the units. Mid point of 0 and 60,000 is 30,000

$30 = 0

$20 = 30,000 units

$10 = 60,000 units

You can do the same for $20 and $10, finding the mid points. $15 is the mid point between $20 and $10.

The mid point between 30,000 and 60,000 is 45,000
so you now have this.

$30 = 0

$20 = 30,000 units

***$15 = 45,000 units***

$10 = 60,000 units`
  },
  {
    "id": "2024S_FE-A_60",
    "question": "When OSS that is released under GPL is modified and distributed, which of the following is an appropriate action to comply with the GPL?",
    "options": ["A recipient who obtains the derivative work must be strictly prohibited from redistributing copies.","The source code of a separate application that is statically linked to the derivative work does not need to be disclosed.","When the software is modified and distributed, the source code of the distributed copies is made available to the recipients.","When the source code of the derivative work is disclosed, compensation such as related costs cannot be demanded."],
    "correctAnswer": 2,
    "solution": `Open Source-Software, like Linux.

GNU General Public License
This is a license giving all users free access to the source code of that software to be seen, run, tested, studied, etc.

**a)** is wrong because the GPL allows everyone to be able to distribute copies of the software as long as the license terms are followed.

**b)** is wrong because if you link an open source to something that can be copyrighted, GPL states that it needs to be disclosed.

**c)** correct because once you made changes in the source code, anyone else will be able to see that.

**d)** is wrong because under the GPL, you can charge for costs if you want to distribute it, but we can't control if they want to distribute that for free.`
  }
];
