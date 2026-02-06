export default [
  {
    "id": "2021A_FE_AM_31",
    "question": "Which of the following is an appropriate transmission operation of a node connected to a CSMA/CD LAN?",
    "options": ["All nodes are connected in a ring topology, where a special frame is circulated around to control transmission rights. Only the node that has the special frame can transmit data.","Each node is logically ordered, a transmission right is passed along in order, and only the node that has received the right can transmit data.","Each node waits for the medium to be idle before transmitting data. When collision occurs, it waits for a random backoff time before retransmission.","Only the node that has a time slot assigned can transmit data."],
    "correctAnswer": 2,
    "solution": `In a **CSMA/CD (Carrier Sense Multiple Access with Collision Detection)** network, such as Ethernet, the following transmission operation is used:

1. **Carrier Sense**: Each node listens to the communication medium to check if it is idle (i.e., no other device is transmitting).

2. **Multiple Access**: All nodes have equal access to the medium and can transmit whenever they sense that the medium is free.

3. **Collision Detection**: If two nodes transmit simultaneously, a **collision** occurs. Each node detects this collision.

4. **Random Backoff**: After detecting a collision, each node waits for a random backoff time (calculated using a specific algorithm) before attempting to retransmit. This reduces the likelihood of another collision happening immediately.

This process ensures that multiple devices can share the same communication medium while minimizing the impact of collisions.

### Why the Others Won't Fit

**a) All nodes are connected in a ring topology, where a special frame is circulated around to control transmission rights. Only the node that has the special frame can transmit data.**:

- This describes the **token ring** network, where a special frame called a **token** circulates around the network, and only the node that possesses the token can transmit data. This is not how CSMA/CD operates.

**b) Each node is logically ordered, a transmission right is passed along in order, and only the node that has received the right can transmit data.**:

- This describes **token passing**, used in certain network topologies, but it is not related to CSMA/CD, which does not involve a transmission right being passed around in a logical order.

**d) Only the node that has a time slot assigned can transmit data.**:

- This describes **Time Division Multiple Access (TDMA)**, where each node is assigned specific time slots for transmission. In contrast, CSMA/CD does not use predefined time slots; it is based on listening to the medium and avoiding collisions.`
  },
  {
    "id": "2021A_FE_AM_32",
    "question": "In a TCP/IP environment, which of the following is a protocol for synchronizing the clocks of multiple computers with that of a time server?",
    "options": ["FTP","NNTP","NTP","RTP"],
    "correctAnswer": 2,
    "solution": `**NTP (Network Time Protocol)** is a protocol used to synchronize the clocks of multiple computers to a precise time source, such as a time server or an atomic clock, over a TCP/IP network. NTP ensures that all devices on a network maintain the same time, which is critical for time-sensitive processes, logging, and security functions.

### Why the Others Won't Fit

**a) FTP (File Transfer Protocol)**:

- **FTP** is a protocol used for transferring files between computers on a network, but it is not related to time synchronization.

**b) NNTP (Network News Transfer Protocol)**:

- **NNTP** is a protocol used for reading and posting messages to newsgroups (online forums), and it is not used for synchronizing time.

**d) RTP (Real-Time Transport Protocol)**:

- **RTP** is a protocol used for delivering audio and video over IP networks in real-time. It is not used for clock synchronization.`
  },
  {
    "id": "2021A_FE_AM_33",
    "question": "Which of the following is an appropriate explanation of DHCP?",
    "options": ["It is a protocol for accessing a directory service.","It is a protocol for automatically assigning an IP address.","It is a protocol for converting a private IP address to a global IP address.","It is a protocol for forwarding an e-mail."],
    "correctAnswer": 1,
    "solution": `**DHCP (Dynamic Host Configuration Protocol)** is a protocol used to automatically assign IP addresses to devices on a network. When a device connects to a network, it sends a request to the DHCP server, which then provides the device with an IP address, along with other configuration information such as the subnet mask, default gateway, and DNS server addresses. This process simplifies network management by avoiding the need for manual IP address assignment.

### Why the Others Won't Fit

**a) It is a protocol for accessing a directory service**:

- This describes **LDAP (Lightweight Directory Access Protocol)**, which is used to access and manage directory services, not to assign IP addresses.

**c) It is a protocol for converting a private IP address to a global IP address**:

- This describes **NAT (Network Address Translation)**, which translates private IP addresses to public (global) IP addresses, not the automatic assignment of IP addresses.

**d) It is a protocol for forwarding an e-mail**:

- This describes **SMTP (Simple Mail Transfer Protocol)**, which is used to send and forward emails, not for IP address assignment.`
  },
  {
    "id": "2021A_FE_AM_34",
    "question": "Which of the following is classified as a web beacon?",
    "options": ["A potential error of an application program used for a website","A technique to collect user information, such as access trends, by embedding a small image in a web page","A virus that is downloaded from a website that deletes image files on a PC","An abusive method of using a malicious script that is harmful to both client PC and web server"],
    "correctAnswer": 1,
    "solution": `A **web beacon** is a tracking technology used to monitor user behavior on websites or in emails. It typically consists of a tiny, often invisible image (like a 1x1 pixel) embedded in a web page or email. When a user visits the page or opens the email, the web beacon is loaded from a server, allowing the website owner or marketer to gather information such as:

- Whether the page or email was viewed.

- The time it was viewed.

- The user's IP address and browser information.

This information helps in analyzing user behavior and access trends without the user being aware of the beacon.

### Why the Others Won't Fit

**a) A potential error of an application program used for a website**:

- This refers to a bug or error in web applications, which is not related to web beacons.

**c) A virus that is downloaded from a website that deletes image files on a PC**:

- This describes a type of malware, but a **web beacon** is not a virus. It's a tool used for tracking user behavior, not for harming the user's system.

**d) An abusive method of using a malicious script that is harmful to both client PC and web server**:

- This describes **cross-site scripting (XSS)** or other malicious scripts, but a web beacon is a legitimate, though sometimes controversial, tracking technique. It does not directly harm the client PC or web server.`
  },
  {
    "id": "2021A_FE_AM_35",
    "question": "When risk treatment is classified as risk avoidance, risk reduction, risk acceptance, and risk sharing, which of the following risk treatments is risk avoidance?",
    "options": ["Applying appropriate controls to lower a risk","Discontinuing some operations that have a risk","Knowingly and objectively not taking any action on a risk","Transferring a risk to other parties"],
    "correctAnswer": 1,
    "solution": `**Risk avoidance** involves completely eliminating the risk by deciding not to engage in the activity that generates it. In this case, **discontinuing some operations that have a risk** is an example of risk avoidance because the organization decides to stop the risky activity altogether, thereby avoiding the potential threat.

### Why the Others Won't Fit

**a) Applying appropriate controls to lower a risk**:

- This describes **risk reduction**, where measures are taken to lower the likelihood or impact of a risk. The risk still exists, but its potential damage is minimized.

**c) Knowingly and objectively not taking any action on a risk**:

- This describes **risk acceptance**, where the risk is acknowledged, but no specific action is taken to mitigate it, often because the risk is deemed acceptable or too costly to address.

**d) Transferring a risk to other parties**:

- This describes **risk sharing (or risk transfer)**, which involves shifting the risk to a third party, such as by purchasing insurance or outsourcing certain operations. The risk remains, but another party bears the responsibility.`
  },
  {
    "id": "2021A_FE_AM_36",
    "question": "Which of the following is installed into an in-house network or server by an intruder to enter through an access path other than the normal path?",
    "options": ["Backdoor","Forensic","Strict routing","Thin client agent"],
    "correctAnswer": 0,
    "solution": `A **backdoor** is a secret or hidden method that allows an intruder to gain unauthorized access to a system, network, or software, bypassing normal security mechanisms. It is typically installed by attackers after they have compromised a system, enabling them to re-enter at any time without needing to go through the usual authentication processes. Backdoors are often used to maintain control over the compromised system while remaining undetected.

### Why the Others Won't Fit

**b) Forensic**:

- **Forensic** refers to the investigation and analysis of digital data, often after a security incident, to understand the attack, recover evidence, or prevent future breaches. It is not related to installing access paths for intruders.

**c) Strict routing**:

- **Strict routing** refers to a type of IP routing where the packet must follow a specific, predetermined path through the network. This is a networking term, not related to unauthorized access paths.

**d) Thin client agent**:

- A **thin client agent** is software used in thin client environments, where client devices rely on a central server to perform most of their computing tasks. This has nothing to do with unauthorized access or backdoor creation.`
  },
  {
    "id": "2021A_FE_AM_37",
    "question": "Biometric authentication includes a verification method that extracts physical characteristics and another verification method that extracts behavioral characteristics. Which of the following is the method that uses behavioral characteristics?",
    "options": ["Performing authentication by extracting characteristics from pen speed and pressure when a signature is provided","Performing authentication by extracting characteristics from the bifurcation angle of the bifurcation point of a blood vessel or from the distance between adjacent bifurcation points","Performing authentication by extracting the characteristic point called minutia from the pattern formed by ridges","Performing authentication by extracting the characteristics of chaotic wrinkles in the eye from the pupil to the outside"],
    "correctAnswer": 0,
    "solution": `**Behavioral characteristics** in biometric authentication are based on the way an individual performs certain actions, such as typing patterns or handwriting. **Option a**, which involves the examination of characteristics from **pen speed and pressure when a signature is provided**, is an example of a behavioral biometric method because it focuses on how the person signs their name, rather than how their handwriting looks like.

### Why the Others Won't Fit

**b) Performing authentication by extracting characteristics from the bifurcation angle of the bifurcation point of a blood vessel or from the distance between adjacent bifurcation points**:

- This describes **vascular pattern recognition**, a **physical characteristic** based on the unique patterns of blood vessels, particularly in the finger or palm. It is not a behavioral trait.

**c) Performing authentication by extracting the characteristic point called minutia from the pattern formed by ridges**:

- This refers to **fingerprint recognition**, which is a **physical biometric** method that relies on the unique patterns of ridges and valleys in a person's fingerprints. It does not involve behavior.

**d) Performing authentication by extracting the characteristics of chaotic wrinkles in the eye from the pupil to the outside**:

- This describes **iris recognition**, which is a **physical characteristic** based on the unique patterns in a person's iris. It is not a behavioral characteristic.`
  },
  {
    "id": "2021A_FE_AM_38",
    "question": "Which of the following is an encryption method that can be used for encrypting data managed in a database using the same key for encryption and decryption?",
    "options": ["AES","PKI","RSA","SHA-256"],
    "correctAnswer": 0,
    "solution": `**AES (Advanced Encryption Standard)** is a **symmetric encryption method**, meaning the same key is used for both encryption and decryption. It is widely used for encrypting data, including data stored in databases, due to its efficiency and security. AES is considered very strong and is commonly used in securing sensitive information.

### Why the Others Won't Fit

**b) PKI (Public Key Infrastructure)**:

- **PKI** is not an encryption method itself, but a framework that uses **asymmetric encryption** (e.g., RSA) to manage public and private keys. Asymmetric encryption uses different keys for encryption and decryption, which is different from what the question is asking.

**c) RSA**:

- **RSA** is an **asymmetric encryption method**, meaning it uses a pair of keys: a public key for encryption and a private key for decryption. It is not suitable for encrypting large amounts of data like in databases, and it does not use the same key for both encryption and decryption.

**d) SHA-256**:

- **SHA-256** is a **hashing algorithm**, not an encryption method. It is used to generate a fixed-size hash value from data, but it does not provide encryption or decryption capabilities.`
  },
  {
    "id": "2021A_FE_AM_39",
    "question": `A given application only has the functions of retrieving and displaying user information from a database that stores such information. Considering information security management, which of the following is the appropriate database access right assigned to an account that the application uses when it accesses the database? The names and scopes of rights are listed below.

[The names and scopes of rights]

Reference right: Permits a record to be selected

Update right: Permits a record to be inserted, updated, and dropped

Administrator right: Permits a table to be displayed, created, altered, and dropped`,
    "options": ["Administrator right","Reference right","Update right","Update right and reference right"],
    "correctAnswer": 1,
    "solution": "In the question it was stated that **the application only has the functions of retrieving and displaying user information from a database.** With this in mind, the update right and administrator right are immediately out of the question since they have authority to insert, update, and even delete records. Since the reference right only has the ability to select records, it makes sense that it is the appropriate database access right assigned to an account of the application."
  },
  {
    "id": "2021A_FE_AM_40",
    "question": "A cybersecurity incident response plan is defined as a set of instructions to aid the cybersecurity team to detect, respond to, and recover from cybersecurity incidents. The cybersecurity incident response plan resolves issues, such as cybercrime, data loss, and service outages that threaten daily work. Which of the following is part of the cybersecurity incident response plan?",
    "options": ["Attacking systems with scripts ","Containment","Social engineering activities ","Stealing user credentials"],
    "correctAnswer": 1,
    "solution": `The answer here should be obvious since all of the choices are malicious hacker activities that a cybersecurity team would not carry out, with the exception of **b) containment**.

**Containment** is a key step in a cybersecurity incident response plan. It involves taking immediate action to limit the spread or damage caused by a security breach or cyberattack. This step focuses on isolating affected systems or networks, preventing the incident from escalating further, and minimizing its impact. Containment is crucial for reducing the risk to critical assets and ensuring that the organization can begin the process of recovery.

According to [Containment - CyberHoot Cyber Library](https://cyberhoot.com/cybrary/containment/), examples of containing a cybersecurity incident include blocking and logging unauthorized access, blocking [malware](http://www.cyberhoot.com/cybrary/malware) sources, closing specific ports and servers, changing administrator passwords, relocating website home pages, and isolating systems or networks.

### Why the Others Won't Fit

**a) Attacking systems with scripts**:
- This refers to offensive actions, often used by hackers or in penetration testing, but it is not part of a legitimate incident response plan. The purpose of a response plan is to defend, not attack.

**c) Social engineering activities**:
- **Social engineering** involves manipulating individuals to gain unauthorized access to systems or sensitive data. This is an attack technique and would not be part of a response plan meant to defend against such attacks.

**d) Stealing user credentials**:
- Stealing user credentials is a malicious activity carried out by attackers. It would never be part of a cybersecurity incident response plan, as the plan is designed to mitigate and respond to threats, not cause them.`
  },
  {
    "id": "2021A_FE_AM_41",
    "question": "Between a client and web server, which of the following is used for inspecting the data that is sent from the client to the web server and blocking attacks, such as SQL injections?",
    "options": ["Cluster configuration","Load balancing function","SSL-VPN function","WAF"],
    "correctAnswer": 3,
    "solution": `A **WAF (Web Application Firewall)** is a security tool specifically designed to protect web applications by filtering and monitoring HTTP traffic between a client and a web server. It inspects the data sent from the client to the server and can detect and block common attacks such as **SQL injections**, **cross-site scripting (XSS)**, and other web-based threats. A WAF adds an extra layer of defense, helping to prevent malicious traffic from reaching the web server.

### Why the Others Won't Fit

**a) Cluster configuration**:

- A **cluster configuration** refers to a group of servers working together to improve performance, availability, or redundancy. It is not related to inspecting or blocking attacks like SQL injections.

**b) Load balancing function**:

- **Load balancing** distributes incoming traffic across multiple servers to ensure no single server becomes overwhelmed. While it improves performance and availability, it does not inspect or block web-based attacks.

**c) SSL-VPN function**:

- **SSL-VPN (Secure Sockets Layer Virtual Private Network)** is used to securely connect remote users to a network via encryption. It ensures secure communication but is not designed to inspect or block web application attacks like SQL injection.`
  },
  {
    "id": "2021A_FE_AM_42",
    "question": "Which of the following is an appropriate description of SSH?",
    "options": ["It cannot use public key pairs, and it uses a password for authentication.","It helps in securely loading web site pages over HTTPS.","It provides a secure channel for server maintenance over a public network.","Its use is required in the Intranet."],
    "correctAnswer": 2,
    "solution": `**SSH (Secure Shell)** is a cryptographic network protocol used for securely operating network services, especially for remote server maintenance and management, over an unsecured public network. It encrypts data, including authentication credentials and session data, ensuring secure communication between the client and server. SSH can use **public key pairs** or **passwords** for authentication, and it is commonly used for tasks like remote login, file transfer, and command execution on servers.

### Why the Others Won't Fit

**a) It cannot use public key pairs, and it uses a password for authentication**:

- This is incorrect because **SSH** can use both **passwords** and **public/private key pairs** for authentication, with key-based authentication often being considered more secure.

**b) It helps in securely loading web site pages over HTTPS**:

- This describes **HTTPS (HyperText Transfer Protocol Secure)**, which uses **SSL/TLS** to secure web page loading, not **SSH**.

**d) Its use is required in the Intranet**:

- While **SSH** can be used within an **Intranet**, it is not specifically required. SSH is used for secure communication, typically over public networks, though it can be employed in any network environment where secure remote access is needed.`
  },
  {
    "id": "2021A_FE_AM_43",
    "question": "Which of the following is an appropriate description concerning Sender Policy Framework (SPF) for email communication?",
    "options": ["It is a policy of the public relations department to designate a specific person to send emails.","It is an email sent from a spoofed email address without authorization.","It matches the sender mail server IP address with the information from the domain server and accepts or rejects email.","It sends an email to the address of a specific person instead of sending them to multiple email addresses."],
    "correctAnswer": 2,
    "solution": `**Sender Policy Framework (SPF)** is an email authentication protocol that helps prevent email spoofing by verifying whether an email is sent from an authorized mail server for a particular domain. When an email is received, SPF checks the **IP address** of the sending mail server against the list of authorized IP addresses published in the sender domain's **DNS (Domain Name System)** records. If the IP matches, the email is considered legitimate; if not, it may be rejected or flagged as suspicious.

### Why the Others Won't Fit

**a) It is a policy of the public relations department to designate a specific person to send emails**:

- This has nothing to do with **SPF**. It refers to an internal organizational policy, not an email authentication method.

**b) It is an email sent from a spoofed email address without authorization**:

- While **SPF** helps to prevent **email spoofing**, this option describes an outcome that SPF tries to mitigate, not the functionality of SPF itself.

**d) It sends an email to the address of a specific person instead of sending them to multiple email addresses**:

- This describes the act of sending an email to a single recipient, which is unrelated to the **SPF** protocol.`
  },
  {
    "id": "2021A_FE_AM_44",
    "question": "Which of the following is an appropriate explanation of OP25B for email communication?",
    "options": ["Blocking communication to port 25 to reduce mass-scale delivery of spam or junk emails","Blocking emails that are sent to more than 25 recipients at once due to organizational policy","Blocking Simple Mail Transfer Protocol (SMTP) communication except those sent to port 25","Blocklisting email addresses that send spams by monitoring email communication to port 25"],
    "correctAnswer": 0,
    "solution": `## What's so special about port 25?

- Port 25 is the default port used for the Simple Mail Transfer Protocol (SMTP), which is the protocol for sending emails across the Internet. Port 25 is primarily used for sending email messages from a client to a server or between servers. It facilitates the transfer of emails from one mail server to another, playing a critical role in email communication

**OP25B (Outbound Port 25 Blocking)** is a technique invented and used mainly by Internet Service Providers (ISPs) in Japan to block or restrict outbound traffic on **port 25**, the port traditionally used for **SMTP (Simple Mail Transfer Protocol)** communication. Port 25 is often exploited by spammers to send large volumes of unsolicited emails (spam) directly to mail servers. By blocking or filtering traffic on this port, ISPs can reduce the risk of spam originating from infected or compromised devices within their network, helping to prevent mass-scale spam or junk email delivery.

### Why the Others Won't Fit

**b) Blocking emails that are sent to more than 25 recipients at once due to organizational policy**:

- This describes a specific policy that limits the number of recipients for an email, but it is unrelated to **OP25B**, which deals with blocking port 25, not limiting the number of recipients.

**c) Blocking Simple Mail Transfer Protocol (SMTP) communication except those sent to port 25**:

- This is incorrect because **OP25B** is specifically about **blocking or restricting port 25**, not allowing only port 25. In fact, many organizations block port 25 to prevent spam, encouraging the use of more secure ports like **587** for authenticated email communication.

**d) Blocklisting email addresses that send spams by monitoring email communication to port 25**:

- While this describes a method to deal with spam, it is not specifically related to **OP25B**, which focuses on **blocking outbound traffic on port 25** rather than monitoring and blocklisting specific email addresses.`
  },
  {
    "id": "2021A_FE_AM_45",
    "question": "![Image](Files/Pasted%20image%2020241019123903.png)",
    "options": ["A","B","C","D"],
    "correctAnswer": 2,
    "solution": `- **Generalization:** In UML, a generalization relationship indicates that one class (subclass) is a specialized version of another class (superclass). This is often represented by a hollow triangle pointing from the subclass to the superclass.

- **Option c:** In this diagram, the \`Sports car\` class is shown as a specialized version of the \`Automobile\` class.

![Image](Files/Pasted%20image%2020241019124046.png)

The hollow triangle pointing from \`Sports car\` to \`Automobile\` signifies this generalization relationship.

### Why the Others Won't Fit

**a) shows a composition relationship, where one object (Automobile inspection certificate) is part of another object (Automobile).

**b) shows an association relationship, indicating a connection between two classes (Automobile and Driver).

**d) shows an aggregation relationship, where one object (Automobile) is composed of multiple other objects (Tire and Engine).`
  },
  {
    "id": "2021A_FE_AM_46",
    "question": "![Image](Files/Pasted%20image%2020241019124720.png)",
    "options": ["A","B","C","D"],
    "correctAnswer": 3,
    "solution": `The circle 'O' in the DFD notation used in the example represents **d) Process**.

- **Rectangle:** Represents an external entity, such as a person, organization, or system.

- **Arrow:** Represents a data flow, showing the direction of data movement.

- **Circle:** Represents a process, which transforms data.

- **Open-ended rectangle:** Represents a data store, where data is stored.

![Image](Files/Pasted%20image%2020241019124845.png)`
  },
  {
    "id": "2021A_FE_AM_47",
    "question": "Which of the following is an appropriate relationship between classes and instances in object orientation?",
    "options": ["An instance defines the specifications of a class.","An instance is created based on the definition of a class.","Multiple classes correspond to a single instance.","Only one (1) instance exists for a single class."],
    "correctAnswer": 1,
    "solution": `This option accurately describes the relationship in object-oriented programming (OOP). A class serves as a blueprint or template that defines the properties and behaviors (methods) of objects. An instance, also known as an object, is created using this blueprint, encapsulating the data and functionality defined by the class. Each instance can have its own unique state while adhering to the structure and rules established by the class.

### Why the Others Won't Fit

**a) An instance defines the specifications of a class.**

- This statement is incorrect because it reverses the relationship. A class defines the specifications and behavior that instances will follow, not the other way around.

**c) Multiple classes correspond to a single instance.**

- This is misleading. An instance is typically associated with one specific class. While an instance can inherit characteristics from multiple classes in some programming paradigms (like multiple inheritance), it is still tied to a specific class definition.

**d) Only one (1) instance exists for a single class.**

- This statement is also false. A class can have multiple instances created from it. Each instance represents a unique object that can have different values for its properties while following the same class structure.`
  },
  {
    "id": "2021A_FE_AM_48",
    "question": "Which of the following is the weakest module coupling?",
    "options": ["To implement as many functions as possible with a single module","To pass arguments that control another module's logic when the module is called","To pass only required data items as arguments between two (2) modules","To use a global area to share data items with other modules"],
    "correctAnswer": 2,
    "solution": `According to [kharagpurcollege.ac.in/studyMaterial/173830Lecture-9-Coupling-cohesion, 2nd semester by Alok Haldar.pdf], The coupling is **the degree of interdependence between software modules**. Two modules that are tightly coupled are strongly dependent on each other. Two modules that are loosely coupled are not dependent on each other.

**c) To pass only required data items as arguments between two (2) modules.**

- This option represents the weakest coupling between modules. By passing only the necessary data items, modules remain independent and less affected by changes in each other. This promotes better maintainability, as changes in one module are less likely to impact others, adhering to the principles of modularity.

### Why the Others Won't Fit

**a) To implement as many functions as possible with a single module.**

- This approach typically leads to high coupling because it combines multiple responsibilities within a single module, making it difficult to modify or test independently.

**b) To pass arguments that control another module's logic when the module is called.**

- This creates tighter coupling between the modules, as one module is directly influencing the behavior of another. Changes in the controlling module could necessitate changes in the controlled module.

**d) To use a global area to share data items with other modules.**

- Using global variables for sharing data increases coupling significantly, as multiple modules may depend on the state of these shared variables. This can lead to issues with maintainability and can make it difficult to track data flow within the system.`
  },
  {
    "id": "2021A_FE_AM_49",
    "question": "Which of the following tests verifies the interfaces between two (2) modules or subsystems?",
    "options": ["Acceptance test","Integration test","Operational test","Unit test"],
    "correctAnswer": 1,
    "solution": `Integration testing is specifically designed to verify the interfaces and interactions between two or more modules or subsystems. This type of testing focuses on how different components work together and helps identify issues that may arise when combining them.

### Why the Others Won't Fit

**a) Acceptance test.**

- Acceptance testing is performed to determine whether the system meets the specified requirements and is ready for delivery. It focuses on validating the overall functionality rather than the interfaces between individual modules.

**c) Operational test.**

- Operational testing typically involves assessing the system's performance in a real-world environment and may focus on operational aspects rather than the interactions between modules or subsystems.

**d) Unit test.**

- Unit testing is concerned with verifying the functionality of individual components or modules in isolation. It does not address the interactions or interfaces between multiple modules.`
  },
  {
    "id": "2021A_FE_AM_50",
    "question": "Which of the following is an appropriate explanation of a comprehensive patent cross license?",
    "options": ["An agreement to share the necessary costs for patent registration is concluded.","The source code is published free of charge on the Internet or other places, and anyone may improve and redistribute the software.","The use of patent rights is mutually licensed among companies in the specified fields of technologies or products.","To ensure that a company's patent rights are not violated, the right to stop a counterpart's manufacturing is exercised."],
    "correctAnswer": 2,
    "solution": `This option accurately describes a comprehensive patent cross license. In such agreements, two or more parties grant each other rights to use their respective patents, typically within specified areas of technology or products. This arrangement helps reduce the risk of litigation and fosters collaboration between companies.

### Why the Others Won't Fit

**a) An agreement to share the necessary costs for patent registration is concluded.**

- This explanation does not capture the essence of a cross-license, which primarily focuses on mutual rights to use patents rather than cost-sharing for registration.

**b) The source code is published free of charge on the Internet or other places, and anyone may improve and redistribute the software.**

- This describes open-source licensing rather than a comprehensive patent cross license. Cross licensing is specifically related to patents, not software source code dissemination.

**d) To ensure that a company's patent rights are not violated, the right to stop a counterpart's manufacturing is exercised.**

- This statement refers to enforcing patent rights rather than the concept of a cross license, which is about granting mutual rights to use patents rather than restricting or stopping production.`
  },
  {
    "id": "2021A_FE_AM_51",
    "question": "Based on the definition of project management process groups in ISO 21500, which of the following is an activity that is to be implemented in the planning process group among the project management processes?",
    "options": ["To define scope","To develop a project charter","To identify stakeholders","To perform quality assurance"],
    "correctAnswer": 0,
    "solution": `### Explanation

Defining the scope is a key activity in the planning process group according to ISO 21500. This process involves determining and documenting the specific goals, deliverables, and boundaries of the project, which is essential for creating a clear project plan.

### Why the Others Won't Fit

**b) To develop a project charter.**

- Developing a project charter is part of the initiation process group, not planning. The project charter formally authorizes the project and provides an initial understanding of objectives and stakeholders.

**c) To identify stakeholders.**

- Identifying stakeholders also falls under the initiation process group, as it involves recognizing those who have an interest in the project early on.

**d) To perform quality assurance.**

- Quality assurance is part of the execution or monitoring and controlling process groups, as it involves evaluating whether project activities meet quality standards, rather than planning.`
  },
  {
    "id": "2021A_FE_AM_52",
    "question": "In project time management, which of the following descriptions is appropriate for 'slack time'?",
    "options": ["It is the amount of time between the earliest start time and earliest finish time of an activity or between the latest start time and latest finish time of an activity","It is the amount of time for which a non-critical path activity can be deferred without delaying the project","It is the amount of time that an activity can be deferred without delaying the earliest start time of any succeeding activity or violating a schedule constraint","It is the amount of time that an activity can be delayed past its latest start time or latest finish time"],
    "correctAnswer": 1,
    "solution": `### Explanation

Slack time, also known as 'float,' is the amount of time an activity can be delayed without affecting the start of subsequent activities or the overall project completion date. This definition accurately reflects slack time in project time management.

### Why the Others Won't Fit

**a) It is the amount of time between the earliest start time and earliest finish time of an activity or between the latest start time and latest finish time of an activity.**

- This describes the duration of an activity, not slack time. Slack time specifically refers to how much an activity can be delayed without impacting other activities or the project.

**b) It is the amount of time for which a non-critical path activity can be deferred without delaying the project.**

- While this is close, it limits slack time to non-critical path activities. In reality, slack applies to any activity with float, not just those off the critical path.

**d) It is the amount of time that an activity can be delayed past its latest start time or latest finish time.**

- This statement is incorrect because once an activity is delayed past its latest start or finish time, it affects the project schedule. Slack time refers to how long an activity can be delayed _before_ this happens.`
  },
  {
    "id": "2021A_FE_AM_53",
    "question": "When the duration for painting a house is estimated, which of the following is an appropriate technique that estimates the duration on the basis of the actual duration of a similar painting job in the past of the same house or other historical data from similar work?",
    "options": ["Analogous estimate","Parametric estimate","Reserve analysis","Three-point estimate"],
    "correctAnswer": 0,
    "solution": `### Explanation

An analogous estimate uses the actual duration of a similar past project or job as a basis for estimating the duration of the current project. In this case, the time it took to paint the same house or another similar house in the past serves as the reference for the new estimate. This technique is commonly used when detailed information is limited and relies on expert judgment and historical data.

### Why the Others Won't Fit

**b) Parametric estimate.**

- A parametric estimate uses statistical relationships between variables (e.g., cost per square foot) to estimate project duration, which is different from relying on direct past experience or historical data of a similar job.

**c) Reserve analysis.**

- Reserve analysis involves adding contingency reserves to the estimate to account for uncertainties, but it does not rely on historical data to estimate the base duration.

**d) Three-point estimate.**

- A three-point estimate uses optimistic, pessimistic, and most likely duration estimates to calculate an expected duration, but it doesn't specifically rely on past similar jobs or historical data.`
  },
  {
    "id": "2021A_FE_AM_54",
    "question": `In system development, when the relationship between person-months and the duration (months) is represented in the approximate expression shown below, and the total person-month is 4096, how many months does it take?

Duration = 2.5 $\times$ $person-months^\frac{^1}{3}$`,
    "options": ["16","40","64","160"],
    "correctAnswer": 1,
    "solution": `### Explanation

To find the duration in months, we are given the formula:

Duration = 2.5 $\times$ $person-months^\frac{^1}{3}$

And the total person-months is 4096. Let's calculate the duration step by step:

Duration = 2.5 $\times$ $(4096)^\frac{^1}{3}$

1. First, calculate the cube root of 4096:

 $(4096)^\frac{^1}{3}$ = 16

2. Now multiply the result by 2.5:

Duration =  2.5 $\times$ 16 = 40

Therefore, the duration is **40 months**.`
  },
  {
    "id": "2021A_FE_AM_55",
    "question": `An IT service is provided under the conditions that are described below. What is the maximum downtime in hours that can satisfy the SLA during a service time period of one (1) month? Here, the number of business days in one (1) month is 30, and no maintenance or other scheduled downtime of the service is performed during the service time period.

[Conditions of the SLA]
- The service time period is from 8:00 AM to 10:00 PM on business days.
- The availability should be 99.5% or more.`,
    "options": ["0.3","2.1","3.0","3.6"],
    "correctAnswer": 1,
    "solution": `### Explanation

A service-level agreement (SLA) defines the level of service expected from a vendor, laying out metrics by which service is measured, as well as remedies should service levels not be achieved. It is a critical component of any technology vendor contract.

In this question it is given in the SLA that the service period is 1 month and that the service time period for this whole month is from 8:00 AM to 10:00 PM, which amounts to 14 hours a day. If the availability of said service should be 99.5%, then the maximum downtime can be calculated using the following formula

downtime = total hours - minimum required available hours

downtime = $(30 \times 14) - (0.995)(30 \times 14)$ = 2.1

downtime = $420 - 417.9$ = 2.1

in this equation, 30 is the number of business days, 14 is the amount of hours per day that the service must be available, and 0.995 is the decimal equivalent of the service availability percentage. The total hours that the service is up in 30 business days is 420, and the required number of hours that the service must be available is 417.9. If you subtract the two then, you get the maximum downtime of the service in horus.`
  },
  {
    "id": "2021A_FE_AM_56",
    "question": "Which of the following is the main purpose of a migration test for a system?",
    "options": ["To confirm that a new system possesses all of the required functions","To confirm that sufficient performance can be derived from the new system using a copy of the actual data from the existing system","To confirm the compatibility of the interface between a program of another existing system and a newly developed program","To confirm the switch procedure from the existing system to the new system and the problems that the switch can cause from the perspective of reliability and efficiency"],
    "correctAnswer": 3,
    "solution": `The primary purpose of a migration test is to ensure a smooth transition from the existing system to the new system. This includes testing the switch procedure and identifying potential issues related to reliability and efficiency during the migration process. It focuses on how well the new system integrates, handles data migration, and how the changeover affects overall operations.

### Why the Others Won't Fit

**To confirm that a new system possesses all of the required functions.**

- This is more aligned with functional testing, which ensures that the system meets its functional requirements.

**To confirm that sufficient performance can be derived from the new system using a copy of the actual data from the existing system.**

- This describes performance testing, which focuses on how well the new system performs under real-world conditions with actual data.

**To confirm the compatibility of the interface between a program of another existing system and a newly developed program.**

- This refers to interface testing, which verifies that the new system can communicate effectively with other existing systems or components.`
  },
  {
    "id": "2021A_FE_AM_57",
    "question": "In IT service management, which of the following is handled by incident management?",
    "options": ["Inquiry regarding the function or usage of the IT service or system","Long delay in an application response","Request for providing the IT service to a new business site","Request for training of recruits on the IT service"],
    "correctAnswer": 1,
    "solution": `Incident management is responsible for handling any disruptions to normal service operations, including issues like long delays in application responses. These are considered incidents because they affect the quality or availability of IT services, and the goal of incident management is to restore normal service operation as quickly as possible.

### Why the Others Won't Fit

**Inquiry regarding the function or usage of the IT service or system.**

- This is typically handled by a **service desk** or **help desk** as a service request, not incident management, since it's more of an inquiry than an issue affecting service performance.

**Request for providing the IT service to a new business site.**

- This would fall under **request fulfillment** or **change management**, as it involves provisioning new services rather than resolving an incident.

**Request for training of recruits on the IT service.**

- This is a service request, not an incident. It would typically be handled through **service request management** rather than incident management.`
  },
  {
    "id": "2021A_FE_AM_58",
    "question": "When the PDCA methodology is applied to a service management system, which of the following corresponds to Act?",
    "options": ["Establishing, documenting, and agreeing the service management system","Implementing and operating the service management system for the design, transition, delivery, and improvement of services","Monitoring, measuring, and reviewing the service management system and services against the policies, objectives, plans, and service requirements, and reporting the results","Taking actions to continually improve the performance of the service management system and services"],
    "correctAnswer": 3,
    "solution": `In the PDCA (Plan-Do-Check-Act) cycle, the 'Act' phase involves taking corrective actions based on the findings from the 'Check' phase to improve processes and performance. This is a continuous improvement step where adjustments are made to ensure the system and services are functioning more effectively and efficiently.

### Why the Others Won't Fit

**Establishing, documenting, and agreeing the service management system.**

- This corresponds to the **Plan** phase, where the framework and objectives of the service management system are established.

**Implementing and operating the service management system for the design, transition, delivery, and improvement of services.**

- This is part of the **Do** phase, where the plans are executed, and the service management system is put into operation.

**Monitoring, measuring, and reviewing the service management system and services against the policies, objectives, plans, and service requirements, and reporting the results.**

- This is the **Check** phase, where the system’s performance is evaluated against the defined goals and objectives to identify any areas of concern.`
  },
  {
    "id": "2021A_FE_AM_59",
    "question": "In the system design stage, which of the following is the point to be checked during the audit of control for reducing the risk of non-fulfillment of user requirements?",
    "options": ["All programming should be performed in accordance with the specified standards and conventions.","The program specifications should be created on the basis of the system design documents.","The test plan should be created on the basis of the system test requirements and must also be approved by the responsible person of the system operations department.","The user department should participate in the review of system design."],
    "correctAnswer": 3,
    "solution": `### Explanation

Involving the user department in the review of system design is critical to ensuring that the system meets the actual needs and requirements of the users. This reduces the risk of non-fulfillment of user requirements, as it ensures that users validate the system design and provide feedback before implementation begins.

### Why the Others Won't Fit

**a) All programming should be performed in accordance with the specified standards and conventions.**
- This relates more to code quality and consistency but is not directly about reducing the risk of not meeting user requirements. It would be checked during the development phase, not specifically in the system design stage.

**b) The program specifications should be created on the basis of the system design documents.**
- While this is an important practice, it pertains to the transition from design to development and doesn't directly address reducing the risk of unmet user requirements during the design stage.

**c) The test plan should be created on the basis of the system test requirements and must also be approved by the responsible person of the system operations department.**
- This is more relevant to the testing phase and ensuring proper validation, but it does not directly focus on reducing the risk of non-fulfillment of user requirements during the design phase.`
  },
  {
    "id": "2021A_FE_AM_60",
    "question": "When IT controls are classified into preventive controls and detective controls, which of the following is to be classified as a detective control?",
    "options": ["A data entry manual is created, and the persons in charge of data entry are trained.","A data entry screen is designed so that operation errors are unlikely to occur.","Access rights are assigned only to the person in charge of data entry.","Taking actions to continually improve the performance of the service management system and services"],
    "correctAnswer": 3,
    "solution": `### Explanation

**d) An output list resulting from data entry is cross-checked with the input form.**

- This is an example of a **detective control**, as it involves identifying errors or irregularities after they have occurred by comparing the output with the input to verify accuracy. Detective controls are designed to find and report errors, fraud, or other issues that might occur during a process.

### Why the Others Won't Fit

**a) A data entry manual is created, and the persons in charge of data entry are trained.**
- This is a **preventive control** because it aims to prevent errors by ensuring that employees are trained and informed before performing data entry tasks.

**b) A data entry screen is designed so that operation errors are unlikely to occur.**
- This is also a **preventive control**, as it is intended to reduce the likelihood of errors occurring during data entry by designing a user-friendly interface.

**c) Access rights are assigned only to the person in charge of data entry.**
- This is another **preventive control** aimed at preventing unauthorized access or misuse by limiting access rights to only those who need them.`
  },
  {
    "id": "2021S_FE_AM_01",
    "question": `Which of the following is equivalent to the logic expression below?

$$
(x+y) \cdot (x+z)
$$

Here, the letters are logic variables; $x+y$, $x \cdot y$, and $\bar{x}$ are OR, AND, and NOT operations on the corresponding variables, respectively.`,
    "options": ["$x\\cdot(y+z)$","$x+y\\cdot z$","$x\\cdot y+y\\cdot z$","$(\\bar{x}+y)\\cdot z$"],
    "correctAnswer": 1,
    "solution": `### Step 1: Refer to Boolean algebra identities

![Image](Files/Pasted%20image%2020241017221750.png)

**Goal:** is to find the most similar form with the given equation

**Answer**: Distributive law is the most similar

The distributive law states that:
$A+BC = (A+B)\cdot(A+C)$

### Step 2: Apply Distributive Law

**Goal**: Substitute distributive law equation with the actual variables

**Answer**:
	$(x+y)\cdot(x+z) = ?$      *(original equation)*
	$(A+B)\cdot(A+C) = A+B\cdot C$

	$A = x$
	$B = y$
	$C = z$

$\therefore$ Resulting into the final equation
$(x+y)\cdot(x+z) = \boxed{x+y\cdot z}$

### Hence, the answer would be **b)**`
  },
  {
    "id": "2021S_FE_AM_02",
    "question": "Which of the following is a decimal that is represented as a finite digit octal fraction?",
    "options": ["$0.3$","$0.4$","$0.5$","$0.8$"],
    "correctAnswer": 2,
    "solution": `## Testing the waters approach

**NOTE**: This only works for these specific problems, specifically:
- single digit decimal fractions to any base number
Refer to the In-Depth Approach for general applications

### Step 1: Multiply all decimal choices by base number
To save time, we can do the initial multiplication of each number by the base number, \`8\`. This is to hope for a choice that immediately gives a terminating number on the first try.

**Condition:** Achieve a result where the fractional part is \`0\`
#### a) $0.3\cdot 8 = 2.4$
#### b) $0.4*8 = 3.2$
#### c) $0.5*8 = 4.0$ !!
#### d) $0.8*8 = 6.4$

Therefore, we arrive at our answer, \`c)\`

## In-Depth Approach
### Step 1: Multiply fractional part by base number
This is according to the general conversion process of decimal fractions to any base number
$$\text{formula} = \text{fractional part} \cdot \text{base number}$$

Since we are looking for the \`octal fraction\`, our \`base is 8\`, so for letter **a)**
$0.3 \cdot 8 = 2.4$

### Step 2: Separate whole number and fractional number from Step 1
Referring to Step 1:
$2.4 \rightarrow 0.4$ , $2$

Break down uses:
- **whole number** - for getting the final octal fraction
- **fractional number** - for continued multiplication

### Step 3: Repeat steps 1 and 2 until fractional number is 0
Ideally, we create a table to keep track of the process.

|             |                  |  Result   | Fractional |  Whole  |
| :---------: | :--------------: | :-------: | :--------: | :-----: |
|   **(1)**   |   $0.3\cdot 8$   |   $2.4$   |   $0.4$    |   $2$   |
| ==**(2)**== | ==$0.4\cdot 8$== | ==$3.2$== | ==$0.2$==  | ==$3$== |
|   **(3)**   |   $0.2\cdot 8$   |   $0.8$   |   $0.8$    |   $0$   |
|   **(4)**   |  $0.8 \cdot 8$   |   $6.4$   |   $0.4$    |   $6$   |
| ==**(5)**== | ==$0.4\cdot 8$== | ==$3.2$== | ==$0.2$==  | ==$3$== |
|     ...     |                  |           |            |         |

**NOTE**: in this case, since we are already looping back, letter **a)** is non-terminating hence, we move on to the next choice.

**IMPORTANT**: to determine a non-terminating fraction, find a step in the conversion table where a step is already similar to a previous step like in this case: \`step (2)\` and \`step (5)\`

### Step 4: Repeat process to other choices until finite number
**HOWEVER**, we can take a shortcut:
	if number is part of the previous table/s, it is immediately non-terminating
#### b) 0.4
- part of a), non-terminating
#### d) 0.8
- part of a), non-terminating

Therefore, leaving us with
#### c) 0.5

which is the answer`
  },
  {
    "id": "2021S_FE_AM_03",
    "question": `The GCD (Greatest Common Divisor) of two positive integers, $x_0$ and $x_1 (x_0 > x_1)$, is computed by the procedure below. When $x_{0} = 175$ and $x_1 = 77$, how many times should step \`(2)\` of this procedure be executed before it stops? Here, '$A ← B$ ' indicates that B is substituted for A.

\`[\`Procedure\`]\`
1) $i ← 2$
2) $x_i ←$ remainder of $x_{i−2}$ divided by $x_{i−1}$
3) if $x_i = 0$, stop with $x_i−1$ as the GCD
4) $i ← i + 1$
5) return to step \`(2)\``,
    "options": ["$3$","$4$","$6$","$7$"],
    "correctAnswer": 1,
    "solution": `### Step 1: Look at step (2) and stop condition
\`step (2)\`: $$x_{i} = \frac{x_{i-2}}{x_{i-1}}$$

\`stop condition\`:  when $x_{i}$ = 0

Basically:
- keep dividing the remainder before the last (\`i-2\`) with the last remainder (\`i-1\`) 
- until the **resulting remainder (\`i\`) is** \`0\`

### Step 2: Do the process starting at i = 2
Do not forget to take note of the given:
$x_{0} = 175$
$x_{1} = 77$

| iterations |                          formula                           | $x_{i}$ |
| :--------: | :--------------------------------------------------------: | :-----: |
|  **(1)**   | $$\frac{x_{0}}{x_{1}} = \frac{175}{77} = 2 \text{ R } 21$$ |  $21$   |
|  **(2)**   | $$\frac{x_{1}}{x_{2}} = \frac{77}{21} = 3 \text{ R } 14$$  |  $14$   |
|  **(3)**   |  $$\frac{x_{2}}{x_{3}} = \frac{21}{14} = 1 \text{ R } 7$$  |   $7$   |
|  **(4)**   |  $$\frac{x_{3}}{x_{4}} = \frac{14}{7} = 2 \text{ R } 0$$   |   $0$   |
End at the \`4th\` iteration because $x_{i}$ = 0

### Hence, the answer is b)`
  },
  {
    "id": "2021S_FE_AM_04",
    "question": `To compare the entrance exams of the current and previous years, a company required many of its employees to take those exams. The correlation coefficient and the regression line were obtained by assigning the scores of the previous year to the x-axis and the scores of the current year to the y-axis. Which of the following can be derived from the results below?

\`[\`Results\`]\`
	The correlation coefficient is 0.8.
	The slope of the regression line is 1.1.
	The y-intercept of the regression line is 10.`,
    "options": ["From the slope and the y-intercept of the regression line, the tendency is to obtain a higher score for the current year than the previous year","From the slope of the regression line and the correlation coefficient, the exam of the current year is of high quality.","From the slope of the regression line, the average score for the current year is 1.1 times that of the previous year.","From the y-intercept of regression line, those who get zero for the current year can get a score as high as 10 for the previous year."],
    "correctAnswer": 0,
    "solution": `### Step 1: Gather important details.

1) correlation coefficient
2) regression line
3) scores of previous year = x-axis
4) scores of current year = y-axis

### Step 2: Interpret details and results.

#### Details
1) correlation coefficient
	- tells us about how related the two variables, \`x\` and \`y\` are
	- $1$ = perfectly correlated (if x goes up, y goes up, and vice versa)
	- $0$ = zero correlation
	- $-1$ = perfect negative correlation (if x goes up, y goes down, and vice versa)
![Image](Files/Pasted%20image%2020241018010152.png)

2) regression line
	- tells us the relationship between the two variables
	- applied in scenarios where the change of the independent variable (x) changes the dependent variable (y)
![Image](Files/Pasted%20image%2020241018010951.png)

#### Results
1) The correlation coefficient is 0.8.
	-  based on the description of correlation coefficients this means that the two variables x and y are \`near perfect correlation\`
2) The slope of the regression line is 1.1.
	- the rate of change per increase of \`x\` is that for every 1 point in x means 1.1 points in y
	- so as the score of the previous year increases, scores of the current year increase more
	- \`an increasing trend\`
3) The y-intercept of the regression line is 10.
	- if \`x\` = 0, then, the \`y\`-axis starts at 10
	- meaning if someone in the previous year \`x\` scores 0, it is expected that they would get 10 in the current year \`y\`

### Step 3: Compare analysis to the choices

#### a) From the slope and the y-intercept of the regression line, the tendency is to obtain a higher score for the current year than the previous year
- from the analyses of both the slope and y-intercept of the regression line, the statement coincides

#### b) From the slope of the regression line and the correlation coefficient, the exam of the current year is of high quality.
- high quality isn't defined or studied in the problem, rather, it is the scores that are being compared

#### c) From the slope of the regression line, the average score for the current year is 1.1 times that of the previous year.
- the slope doesn't talk about the overall average score, instead it talks about each individual score. (1 point of x is 1.1 points for y)

#### d) From the y-intercept of regression line, those who get zero for the current year can get a score as high as 10 for the previous year.
- the variables are reversed, remember step 2
	- current year = y-axis
	- previous year = x-axis
- it should be that if the person's score in the previous year is 0, in the current year that person should get an expected 10 points

### Therefore, the answer is **a)**`
  },
  {
    "id": "2021S_FE_AM_05",
    "question": `The table below is a state transition table used for character string validation. In this table, '$A$' represents the initial state, and '$E$' represents the failure state. Which of the following is a character string that fails this validation? Here, each character of a string is parsed from the leftmost side, and the symbol '$\triangle$' represents a blank character.

![Image](Files/Pasted%20image%2020241018160540.png)`,
    "options": ["$+0010$","$-1$","$12.2$","$\\triangle$"],
    "correctAnswer": 2,
    "solution": `## Solution
We run through each option to the state transition table.
Always go to State A (first row) in the beginning.

**Goal:** Get an option that will go to State E

### Step 1: Run through option a)
Our string would be: $+0010$

First character: \`+\` = Sign $\rightarrow$ go to state C (3rd row)
Next character: \`0\` = Number $\rightarrow$ go to state B (2nd row)
Next character: \`0\` = Number $\rightarrow$ go to state B
Next character: \`1\` = Number $\rightarrow$ go to state B
Next character: \`0\` = Number $\rightarrow$ go to state B

**NOT A FAILURE**

### Step 2: Run through option b)
Our string would be: $-1$

First character: \`-\` = Sign $\rightarrow$ go to state C
Next character: \`1\` = Number $\rightarrow$ go to state B

**NOT A FAILURE**

### Step 3: Run through option c)
Our string would be: $12.2$

First character: \`1\` = Number $\rightarrow$ go to state B
Next character: \`2\` = Number $\rightarrow$ go to state B
Next character: \`.\` = Radix point $\rightarrow$ go to state D
Next character: \`2\` = Number $\rightarrow$ go to state E

**FAILURE**

### Hence, c) is the answer`
  },
  {
    "id": "2021S_FE_AM_06",
    "question": "Which of the following is an appropriate description of parity check (vertical parity) that handles transmission errors on a communication line?",
    "options": ["A parity check can correct 1-bit and 2-bit errors.","A parity check can detect a 1-bit error.","An odd parity check can detect a 1-bit error, but an even parity check cannot even detect a 1-bit error.","An odd parity check can detect any odd number of bit errors, and an even parity check can detect any even number of bit errors."],
    "correctAnswer": 1,
    "solution": `### Parity Check Definition
- adds an extra bit named \`parity bit\`
- checks if the number of \`1 bits\` excluding itself
- two types of \`parity bits\`:
	1) odd - checks if the no. of \`1 bits\` is odd
	2) even - checks if the no. of  \`1 bits\` is even
- very simple
- error prone
- 1-bit error checker, or precisely:
> 	a single bit parity check will detect any odd number of errors, but no even number of errors`
  },
  {
    "id": "2021S_FE_AM_07",
    "question": "When a sequence of data, $A, B, C, D$, arrives in this order, which of the following is a possible sequence that can be produced using a single stack?",
    "options": ["$A, D, B, C$","$B, D, A, C$","$C, B, D, A$","$D, C, A, B$"],
    "correctAnswer": 2,
    "solution": `## Solution
- Iteration through each option, 
- assume that the sequence is generated with the possibility of popping in between each push

### Step 1: Test option a)
#### (1) Push \`A\`

|       |
| :---: |
|       |
|       |
| **A** |
Output Sequence: 

#### (2) Pop \`A\`

|     |
| :-: |
|     |
|     |
|     |
Output Sequence: $A$

#### (3) Push \`B\`

|       |
| :---: |
|       |
|       |
| **B** |
Output Sequence: $A$

#### (4) Push \`C\`

|       |
| :---: |
|       |
| **C** |
| **B** |
Output Sequence: $A$

#### (5) Push \`D\`

|       |
| :---: |
| **D** |
| **C** |
| **B** |
Output Sequence: $A$

#### (6) Pop \`D\`

|       |
| :---: |
|       |
| **C** |
| **B** |
Output Sequence: $A, D$

#### (7) Pop \`C\`

|       |
| :---: |
|       |
| **C** |
| **B** |
Output Sequence: $A, D, C$
**WRONG SEQUENCE, NEXT**

### Step 2: Test option b)
Shortcutting some process steps:
**NOTE:** Popping always pops top value of the stack
#### (1) Push \`A\`

|       |
| :---: |
|       |
|       |
| **A** |
Output Sequence: 

#### (2) Push and Pop \`B\`

|           |
| :-------: |
|           |
| ==**B**== |
|   **A**   |
$\downarrow$

|       |
| :---: |
|       |
|       |
| **A** |
Output Sequence:  $B$

#### (3) Push \`C, D\` and Pop \`D, C\`

|           |
| :-------: |
| ==**D**== |
| ==**C**== |
|   **A**   |
$\downarrow$

|       |
| :---: |
|       |
|       |
| **A** |
Output Sequence:  $B, D, C$
**WRONG SEQUENCE**

### Step 3: Test option c)
#### (1) Push \`A, B, C\` and Pop \`C, B\`

|       |
| :---: |
| **C** |
| **B** |
| **A** |
$\downarrow$
|       |
| :---: |
|       |
|       |
| **A** |
Output Sequence: $C, B$

#### (2) Push \`D\` and Pop \`D, A\`

|       |
| :---: |
|       |
| **D** |
| **A** |
$\downarrow$
|     |
| :-: |
|     |
|     |
|     |
Output Sequence: $C, B, D, A$
**CORRECT SEQUENCE**

### Hence, c) is the correct answer`
  },
  {
    "id": "2021S_FE_AM_08",
    "question": `The in-order traversal of a binary tree is a procedure that visits all nodes of the tree. For a non-empty binary tree \`T\`, it performs the following operations in order.

1) Recursively performs the in-order traversal of the left subtree of \`T\`.
2) Visits the root node of \`T\`.
3) Recursively performs the in-order traversal of the right subtree of \`T\`.

Which of the following is the ordered sequence of nodes when the in-order traversal is performed on the binary tree below?

![Image](Files/Pasted%20image%2020241018165551.png)`,
    "options": ["$1, 2, 4, 7, 8, 5, 3, 6, 9$","$6, 9, 3, 1, 5, 2, 8, 4, 7$","$7, 4, 8, 2, 5, 1, 3, 9, 6$","$7, 8, 4, 5, 2, 9, 6, 3, 1$"],
    "correctAnswer": 2,
    "solution": `### Step 1: Start at left-most subtree: \`Node 7\`
We go to leaf node 7:
- it is a valid subtree (1 node)
- we cannot go deeper as it has no children
![Image](Files/Pasted%20image%2020241018170137.png)
**Sequence:** $7$

### Step 2: Go to parent of \`Node 7\`: \`Node 4\`
According to 2nd instruction:
- go to parent of node T (7) which is node 4
![Image](Files/Pasted%20image%2020241018170510.png)
**Sequence:** $7,4$

### WE CAN ALREADY STOP HERE AND ANS. \`C)\`

## Process Continuation
### Step 3: Repeat in-order process to right-subtree of \`Node 4\`: \`Node 8\`
We go to leaf node 8:
- it is a valid subtree (1 node)
- we cannot go deeper as it has no **children**
![Image](Files/Pasted%20image%2020241018170936.png)
**Sequence:** $7,4,8$

### Step 4: Go back to \`Node 4\`
**NOTE:** already visited, do not write in sequence, continue

### Step 5: Go to parent of \`Node 4\`: \`Node 2\`
According to 2nd instruction:
- go to parent of node T (4) which is node 2
![Image](Files/Pasted%20image%2020241018171307.png)
**Sequence:** $7,4,8,2$

### Step 6: Repeat in-order process to right-subtree of \`Node 2\`: \`Node 5\`
We go to leaf node 5:
- it is a valid subtree (1 node)
- we cannot go deeper as it has no **children**
![Image](Files/Pasted%20image%2020241018171815.png)
**Sequence:** $7,4,8,2,5$

### Step 7: Go to parent of parent of \`Node 5\`: \`Node 1\`
![Image](Files/Pasted%20image%2020241018172540.png)
**Sequence:** $7,4,8,2,5,1$

### Step 8: Repeat in-order process to right-subtree of \`Node 1\`: \`Node 3\`
Cannot go to left-most subtree (no left subtree)
Hence, it becomes the left-most subtree
![Image](Files/Pasted%20image%2020241018172602.png)
**Sequence:** $7,4,8,2,5,1,3$

### Step 9: Repeat in-order process to right-subtree of \`Node 3\`: \`Node 6\`
**Sequence:** $7,4,8,2,5,1,3$

### Step 10: Go to left-most subtree of \`Node 6\`: \`Node 9\`
Leaf-node, place itself
![Image](Files/Pasted%20image%2020241018172634.png)
**Sequence:** $7,4,8,2,5,1,3,9$

### Step 11: Go to parent of \`Node 9\`: \`Node 6\`
![Image](Files/Pasted%20image%2020241018172652.png)
**Sequence:** $7,4,8,2,5,1,3,9,6$
**NO MORE ELEMENTS OR SUBTREES --END--**

### Hence, the answer is c)`
  },
  {
    "id": "2021S_FE_AM_09",
    "question": "Which of the following explains the objective of a recursive call?",
    "options": ["To allow a function to use itself from within its body","To execute processes in an event-driven way rather than in a predetermined order","To retain a function in memory for reuse after its execution","To undo an execution of a process when it fails"],
    "correctAnswer": 0,
    "solution": `### Definition of recursive call
> A recursive function is a function that calls itself during its execution. The process may repeat several times, outputting the result and the end of each iteration.`
  },
  {
    "id": "2021S_FE_AM_10",
    "question": "Which of the following is a technology that provides a dynamic user interface without page transition using an asynchronous communication in JavaScript?",
    "options": ["Ajax","CSS","RSS","SNS"],
    "correctAnswer": 0,
    "solution": `## Definitions
### Ajax (ANSWER)
- **A**synchronous **J**avaScript **A**nd **X**ML.
- Update a web page without reloading the page
- Request data from a server - after the page has loaded
- Receive data from a server - after the page has loaded
- Send data to a server - in the background

### CSS
- NOT JAVASCRIPT
- **C**ascading **S**tyle **S**heets
- CSS describes how HTML elements are to be displayed on screen, paper, or in other media
- CSS saves a lot of work. It can control the layout of multiple web pages all at once
- External stylesheets are stored in CSS files

### RSS
- NOT JAVASCRIPT
- **R**eally **S**imple **S**yndication
- text-based format
- delivers content from sites that are
	- updated on a regular basis,
	- such as news sites or blogs

### SNS
- NOT JAVASCRIPT
- Social Networking Service(?)`
  },
  {
    "id": "2021S_FE_AM_11",
    "question": "Which of the following is a special register that contains the address of the next instruction to be fetched?",
    "options": ["Accumulator","Program Counter (PC)","Stack Pointer","Timer"],
    "correctAnswer": 1,
    "solution": `## Definitions

### Accumulator
- type of register for short-term, intermediate storage of arithmetic and logic data

### Program Counter (ANSWER)
- specialized register 
- indicates the position of the CPU in its instruction sequence 
- holds either the 
	- ==address of the instruction being executed, ==
	- or the address of the next,

### Stack Pointer
- register in CPU
- stores the memory address of the last item added to a stack

### Timer
- a hardware device or a software component 
- measures time or triggers events
- increases value in a specific period of time`
  },
  {
    "id": "2021S_FE_AM_12",
    "question": `Which of the following is the performance of a CPU in MIPS when the instruction mix of the CPU is as listed in the table below? Here, the CPU does not use a pipeline architecture.

|          Instruction type          | Instruction execution <br>time in μs | Appearance ratio |
| :--------------------------------: | :----------------------------------: | :--------------: |
| Register to register <br>operation |                 0.1                  |       40%        |
| Register from memory <br>operation |                 0.3                  |       50%        |
| Unconditional branch <br>operation |                 0.6                  |       10%        |`,
    "options": ["0.04","0.25","4","25"],
    "correctAnswer": 2,
    "solution": `### Step 1: Select and define details

1) **MIPS**
   - Million instructions per second
   - Formula:  
     $$
     \text{MIPS} = \frac{1}{\text{average CPI}} \times \frac{\text{clock rate}}{10^6}
     $$
   - CPI = cycles per instruction
2) **Pipeline architecture** - One execution at a time

### Step 2: Find average CPI

Formula based on table:

$$
\text{average CPI} = \sum_{n=1}^{3} (i_n \cdot a_n)
$$

Substituting values:

$$
\begin{aligned}
\text{average CPI} &= (0.1 \mu \cdot 0.4) + (0.3 \mu \cdot 0.5) + (0.6 \mu \cdot 0.1) \\
&= 0.04 + 0.15 + 0.06 \\
\text{average CPI} &= 0.25 \mu s
\end{aligned}
$$

### Step 3: Find MIPS

$$
\begin{aligned}
\text{MIPS} &= \frac{1}{\text{average CPI}} \times \frac{\text{clock rate}}{10^6} \\
\text{*Clock rate unspecified (=1)} &= \frac{1}{\text{average CPI}} \times \frac{1}{10^6} \\
\text{*Convert } \mu \text{ to s} &= \frac{1}{0.25\mu s} \times \frac{10^6\mu s}{s} \times \frac{1}{10^6} \\
\text{MIPS} &= 4
\end{aligned}
$$

### Hence, the answer is **c)**`
  },
  {
    "id": "2021S_FE_AM_13",
    "question": "Which of the following is a computer system or architecture where the CPU sequentially reads and executes the programs that are stored in the main memory?",
    "options": ["Addressing system","DMA control architecture","Stored program architecture","Virtual memory system"],
    "correctAnswer": 2,
    "solution": `## Definitions
### Addressing system
- computer system
- refers to the method used by a computer to access memory locations.

### DMA control architecture
- control architecture
- Direct Memory Access (DMA)
- allows peripherals to access the main memory independently of the CPU

### Stored program architecture (ANSWER)
- computer architecture
- instructions to be executed are ==stored in the main memory alongside the data==
- ==CPU sequentially fetches and executes these instructions==

### Virtual memory system
- computer system
- allows a computer to use disk storage as an extension of RAM`
  },
  {
    "id": "2021S_FE_AM_14",
    "question": "Which of the following is an appropriate description of USB 3.0?",
    "options": ["It is a serial interface that adopts isochronous transmission that is suitable for audio or video, and has a broadcast transmission mode.","It is a serial interface that has a data transmission mode of 5 Gbit/s that is called super speed.","It is a serialized ATA specification that connects a PC to a peripheral device.","It is an interface that uses four (4) pairs of signal lines transmitting two (2) bits of information in one (1) clock and has a maximum throughput of 1 Gbit/s."],
    "correctAnswer": 1,
    "solution": `## Definition
USB 3.0, also known as SuperSpeed USB, is a Universal Serial Bus (USB) data transfer standard that's commonly used to connect external devices to computers: 

- **Speed**: 5–20 Gbps. 
- **Compatibility**: backwards compatible with USB 2.0 and USB 1.1 devices. 
- **Symbol**: standard USB trident logo with an 'SS' inscription and a transfer speed capability above the trident. 
- **Ports**: usually blue, while USB 2.0 ports are black or white. 
- **Uses**: connect external devices like thumb drives, network adapters, and high-resolution cameras.

### Option a) - Wrong
- does support isochronous transfers
- BUT USB 3.0 also supports other types of data transfers


### Option b) - Correct
- USB 3.0 introduced the 'SuperSpeed' mode
- maximum data transfer rate of **5 Gbit/s**

### Option c) - Wrong
- USB 3.0 is not an ATA
- ATA refers to a different interface used primarily for connecting storage devices like hard drives and SSDs.

### Option d) - Wrong
- maximum throughput is 1 Gbit/s = WRONG`
  },
  {
    "id": "2021S_FE_AM_15",
    "question": "Which of the following is the RAID level where the entire stored data is lost when one of the multi-disks is damaged?",
    "options": ["RAID 0","RAID 1","RAID 5","RAID 6"],
    "correctAnswer": 0,
    "solution": `## Definitions
**RAID**
- Redundant Array of Independent Drives or 
- Redundant Array of Inexpensive Disks

### a) RAID 0 (ANSWER)
- data is split across disks 
- but no data redundancy
- good performance
- but ==if a drive broken, data is permanently lost==
### b) RAID 1
- uses mirroring
- data in one drive is duplicated to another
- data is not lost on disk failure
### c) RAID 5
- stripes data across multiple disks
- includes parity information
- can reconstruct data on one disk failure
### d) RAID 6
- similar to raid 5
- double parity
- adds extra parity info
- allows loss of two disks before data is compromised`
  },
  {
    "id": "2021S_FE_AM_16",
    "question": "Which of the following is the approximate availability of a system in percentage when the MTBF is 30 days and the MTTR is 6 hours?",
    "options": ["$0.83$","$83.33$","$98.36$","$99.17$"],
    "correctAnswer": 3,
    "solution": `### Step 1: Get important definitions

1) MTBF

- mean time between failure

- aka **uptime**

2) MTTR

- mean time to repair

- aka **downtime**

3) System availability

- in \`hours\`

- Formula: $$ \text{Availability} = \frac{\text{uptime}}{\text{uptime} + \text{downtime}} \cdot 100 $$

### Step 2: Use availability formula

$$ \text{uptime} = 30 \text{ days} = 30 \cdot 24 = 720 \text{ hours} $$
$$ \text{downtime} = 6 \text{ hours} $$
$$ \text{Availability} = \frac{720}{720 + 6} \cdot 100 $$
$$ \text{Availability} \approx \boxed{99.17\%} $$

### Hence, the answer is d)`
  },
  {
    "id": "2021S_FE_AM_17",
    "question": `In the switching procedure of processes in the multiprogramming shown in the figure below, which of the following is an appropriate combination of OS processing from A to C?

![Image](Files/Pasted%20image%2020241018222511.png)`,
    "options": ["Restoration of the running state | Selection of the process | Saving of the running state","Saving of the running state | Restoration of the running state | Selection of the process","Saving of the running state | Selection of the process | Restoration of the running state","Selection of the process | Restoration of the running state | Saving of the running state"],
    "correctAnswer": 2,
    "solution": `## Explanation

In the context of process switching the OS must do the following:

1) **Save the current process**: The OS saves the state of the current process into a process control block (PCB).

2) **Load the next process**: The OS loads the PCB of the next process to be executed.

3) **Transfer control**: The OS transfers control to the next process.

### Hence, the answer is c)`
  },
  {
    "id": "2021S_FE_AM_18",
    "question": "Among the page replacement methods in virtual memory management, which of the following is the LRU control method?",
    "options": ["Each page is managed by appending a reference flag and a change flag, and pages without reference or change are replaced with higher priority.","One of the pages in main memory is randomly chosen with the same probability and then replaced.","The page that has been stored in the main memory for the longest time is replaced.","The page that has not been referenced the longest time is replaced."],
    "correctAnswer": 3,
    "solution": `## Explanation

**LRU Control Method**

- least recently used (LRU)

- virtual memory

- a cache replacement policy

- removes the least recently accessed data when a cache reaches its capacity`
  },
  {
    "id": "2021S_FE_AM_19",
    "question": "Which of the following is an appropriate function of a linker?",
    "options": ["To load a load module to the main memory ahead of execution","To monitor the execution of a program and to record the execution results for each step","To perform a resolution of cross references and to create one (1) load module from multiple object modules","To register a created program in a library"],
    "correctAnswer": 2,
    "solution": `## Explanation

A linker, also known as a link editor, is a computer program that performs several functions to combine object files into an executable program:

1) **Combines object files**

- The linker takes object files generated by a compiler and combines them into a single executable file. This process is called file linking.

2) **Assigns memory addresses**

- The linker assigns unique memory addresses to each symbol in the program, including functions and variables.

3) **Resolves references**

The linker resolves references between object files by assigning definite addresses.

4) **Allocates memory**

- The linker allocates memory for static variables and arranges for the initialization of dynamic variables.

5) **Handles relocations**

- The linker adjusts the addresses of symbols when the executable is loaded into memory. This process allows the program to access the correct memory locations.

6) **Sets up entry point**

- The linker sets up the program's entry point.

If the linker encounters unresolved references during the linking process, it will produce an error and fail to create the executable file.`
  },
  {
    "id": "2021S_FE_AM_20",
    "question": "Which of the following is the appropriate explanation of sequence control for controlling industrial devices?",
    "options": ["It is based on fuzziness, such as 'slightly more' or 'slightly less.'","It is resistant to unexpected disturbances because it continuously detects the amount of control and reflects it on the control.","It steps through each phase of control one after another according to a predefined order or set of conditions.","It takes corrective action in advance by assuming the occurrence of disturbances when disturbances can be expected."],
    "correctAnswer": 2,
    "solution": `## Definition

**Sequence control**

- a predefined \`sequence\` of steps to operate a machine

- each step follows the previous one based on a set order of conditions

### Option a)

- describes fuzzy control

### Option b)

- describes feedback control

### Option c) (ANSWER)

- accurate to the definition of sequence control

### Option d)

- describes feedforward control`
  },
  {
    "id": "2021S_FE_AM_21",
    "question": `The half adder in the diagram below adds two (2) single-digit binary numbers, x and y, and produces z (the first digit of the sum) and c (the carry bit) as outputs. Which of the following is the appropriate combination of gate devices A and B?

![Image](Files/Pasted%20image%2020241018230017.png)`,
    "options": ["Exclusive logical sum (XOR) | Logical product (AND)","Logical product (AND) | Logical sum (OR)","Negative logical product (NAND) | Negative logical sum (NOR)","Negative logical sum (NOR) | Exclusive logical sum (XOR)"],
    "correctAnswer": 0,
    "solution": `## Explanation

Recall definition of and **adder** circuit

- sum bit becomes 1 ONLY when

- $x$ = 1 and $y$ = 0

- $x$ = 0 and $y$ = 1

- ==XOR==

- carry bit becomes 1 ONLY when

- $x$ and $y$ = 1

- ==AND==

### Truth table of adder

|  x  |  y  |  z  |  c  |
|:---:|:---:|:---:|:---:|
| $0$ | $0$ | $0$ | $0$ |
| $0$ | $1$ | $1$ | $0$ |
| $1$ | $0$ | $1$ | $0$ |
| $1$ | $1$ | $0$ | $1$ |`
  },
  {
    "id": "2021S_FE_AM_22",
    "question": `Which of the following is not an implementation of the function F = A•B + C•D? Here, '•' represents the logic AND operation, and '+' represents the logic OR operation in the expression.

a)
![Image](Files/Pasted%20image%2020241018231214.png)

b)
![Image](Files/Pasted%20image%2020241018231232.png)

c)
![Image](Files/Pasted%20image%2020241018231239.png)

d)
![Image](Files/Pasted%20image%2020241018231249.png)`,
    "options": ["Circuit diagram A","Circuit diagram B","Circuit diagram C","Circuit diagram D"],
    "correctAnswer": 2,
    "solution": `## Explanation

Recall de Morgan's Law:

1) $\overline{A + B} = \overline{A} \cdot \overline{B}$

2) $\overline{A \cdot B} = \overline{A}+\overline{B}$

3) $\overline{\overline{A}} = A$

Recall logic gates:

1) AND $\rightarrow A\cdot B$

2) OR $\rightarrow A + B$

3) NAND $\rightarrow \overline{A \cdot B} = \overline{A}+\overline{B}$

4) NOR $\rightarrow \overline{A + B} = \overline{A} \cdot \overline{B}$

### Translating option a)

1) upper \`AND\` gate =$A \cdot B$

2) lower \`AND\` gate = $C \cdot D$

3) final \`OR\` gate = $(A \cdot B) + (C \cdot D)$ = **the same**

### Translating option b)

1) upper \`NAND\` gate =$(\overline{A \cdot B})$

2) lower \`NAND\` gate = $(\overline{C \cdot D})$

3) final \`NAND\` gate = $\overline{(\overline{A \cdot B}) \cdot (\overline{C \cdot D})} =(A \cdot B) + (C \cdot D)$ = **the same**

### Translating option c) (ANSWER)

1) upper \`NAND\` gate =$(\overline{A \cdot B})$

2) lower \`NAND\` gate = $(\overline{C \cdot D})$

3) final \`NOR\` gate = $\overline{(\overline{A \cdot B}) + (\overline{C \cdot D})} =(A \cdot B) \cdot (C \cdot D)$ = **not the same**

### Translating option b)

1) upper \`NAND\` gate =$(\overline{A \cdot B})$

2) lower \`NAND\` gate = $(\overline{C \cdot D})$

3) final (alternate) \`NAND\` gate = $\overline{(\overline{A \cdot B}) \cdot (\overline{C \cdot D})} =(A \cdot B) + (C \cdot D)$ = **the same**`
  },
  {
    "id": "2021S_FE_AM_23",
    "question": "Which of the following is an appropriate purpose of check digit?",
    "options": ["To detect an error that an alphabet or a symbol is contained in a numeric item field","To detect an error that the number of digits of an entered code is incorrect","To detect an error that the value of an entered code is incorrect","To detect an error that the value of an entered data is not within a specified range"],
    "correctAnswer": 2,
    "solution": `## Explanation

**Check digit**

- extra digit added to a numeric or alphanumeric code typically at the end

- help detect errors in the transmission or input of data.

- calculated using the other digits of the code

- used to verify that the code has been entered correctly

- BASICALLY,

- checks codes i.e., Barcode, ID numbers

- detects common errors such as mistypes

## Breakdown

### Option a)

- check digit doesn't validate characters

### Option b)

- doesn't check length of code, only validity

### Option c)

- accurate description

### Option d)

- this is data validation`
  },
  {
    "id": "2021S_FE_AM_24",
    "question": "Which of the following explains a drawing software?",
    "options": ["It can create a picture on a screen using the mouse as a brush that can be saved to a bitmap image file.","It can create a scenario-based content by editing and arranging several materials, such as text, images, video, and sound.","It can create a simple movie from a series of still images by gradually changing the differences among images.","It can create vector graphics composed of lines and curves defined mathematically with geometric characteristics that can then be transformed or combined."],
    "correctAnswer": 3,
    "solution": `## Explanation

**Drawing software**

- also known as a graphics program,

- used to create digital images and graphics in 2D or 3D:

- **Vector graphics**: Drawing programs use vector graphics, which allows users to isolate, move, and scale elements of an image independently.

- **Special effects**: Drawing programs often include special effects for creating illustrations.

- **Popular programs**: Some popular drawing programs include Adobe Illustrator, CorelDRAW, and Macromedia Freehand.

## Breakdown

### Option a)

- describes bitmap or raster graphics software i.e., MS Paint,

- **difference:** bitmap graphics software uses pixels rather than vectors

### Option b)

- describes multimedia software, uses a mix of video, audio, and images

### Option c)

- describes animation software

### Option d) (ANSWER)

- accurate description of drawing software`
  },
  {
    "id": "2021S_FE_AM_25",
    "question": "Which of the following is an appropriate explanation of a relational database?",
    "options": ["Data is represented as a table, and the tables are linked to one another using the column values of these tables.","Each attribute is represented as a pair of the attribute value and the storage location of the record having that value and used as an index.","The relationship among records is represented by a data structure using links that can represent both tree and network structures.","The relationship among records is represented by a data structure using pointers that are limited to representing a tree structure."],
    "correctAnswer": 0,
    "solution": `## Explanation

**Relational Database** (RDB)

- way of structuring information in tables, rows, and columns

- has the ability to establish links or relationships between information by joining tables

## Breakdown

### Option a) (ANSWER)

- accurate description

### Option b)

- more fluid approach, related to NoSQL or key-value databases

### Option c)

- describes graph or hierarchical databases

### Option d)

- describes hierarchical (tree structures)`
  },
  {
    "id": "2021S_FE_AM_26",
    "question": "Which of the following is performed periodically to prevent a decline in the access efficiency of a database?",
    "options": ["Backup","Database dump","Reorganization","Rollback"],
    "correctAnswer": 2,
    "solution": `### Option a)
- the process of creating a copy (backing up) of an organization's structured data
- does not help with efficiency
- focuses on integrity and security of data

### Option b)
- process of pulling data from a database and saving it as a structured file
- similar to option a)

### Option c) (ANSWER)
- process of applying changes to a database's data dictionary to the database itself
- improve performance, save disk space, and **improve database efficiency**

### Option d)
- "undo" button for database changes
- eliminates the problematic change and the issues it caused for the infrastructure, application, data, and end users
- focuses on reliability instead of efficiency`
  },
  {
    "id": "2021S_FE_AM_27",
    "question": "A student’s ID, name, and class ID are recorded in the Student table. Which of the following SQL returns records of all students whose names start with A?",
    "options": ["SELECT * FROM Student WHERE name LIKE '%A';","SELECT * FROM Student WHERE name LIKE '%A_';","SELECT * FROM Student WHERE name LIKE 'A_';","SELECT * FROM Student WHERE name LIKE 'A%';"],
    "correctAnswer": 3,
    "solution": `## Explanation

Recall \`SQL\`, specifically the \`LIKE\` operator:
- used in a \`WHERE\` clause to search for a specified pattern in a column.
- Has wildcards:
  - percent sign \`%\` represents zero, one, or multiple characters
    - \`%A\` - any as long as last character is \`A\`
    - **\`A%\` - any as long as first character is \`A\`**
    - \`%A%\` - any as long as there is a character \`A\` in between
  - underscore sign \`_\` represents one, single character
    - \`A_\` - first character is \`A\` and next/last character is any`
  },
  {
    "id": "2021S_FE_AM_28",
    "question": `Among the search processes for the 'Sales' table, which of the following is appropriate to set a hash index rather than a B+ tree index? Here, the column in which the index is set is shown inside <>.

Sales (form number, sales date, product name, user ID, store number, sales amount)`,
    "options": ["Searching for sales with a sales amount of 100 dollars or more. \\<sales amount\\>","Searching for sales with the product name bedginning with 'DB'. \\<product name\\>","Searching for sales with the sales date as the current month. \\<sales date\\>","Searching for sales with the user ID as '1001'. \\<user ID\\>"],
    "correctAnswer": 3,
    "solution": `## Explanation
**Hash Index**
- typically used for equality searches, where the exact value of a field is known and needed
- allows for very fast lookups for **specific values** because it directly computes the location of the data using a hash function.

**B+ Trees**
- data structures
- used to store vast amounts of data that are too large to fit in the main memory.

### Option a)
- large range
- fits for B+ Trees

### Option b)
- can contain many products
- fits for B+ Trees

### Option c)
- can contain a large range of data
- fits for B+ Trees

### Option d) (ANSWER)
- specific user
- fits for hashing`
  },
  {
    "id": "2021S_FE_AM_29",
    "question": "Which of the following is the appropriate explanation of the key value store that is used in the processing of big data?",
    "options": ["It is represented by a two-dimensional table with rows and columns based on the set theory.","It represents the relationship among nodes with the three (3) elements, i.e., 'node,' 'relationship,' and 'property.'","It saves the desired data together with a value that enables this data to be uniquely identified as a pair.","The data for one (1) case is called a 'document,' and the data structure of each document is unrestricted and can be changed whenever data is added."],
    "correctAnswer": 2,
    "solution": `## Explanation
**Key-value Store**
- NoSQL database (non-relational)
- key serves as unique identifier
- efficient data retrieval by **using the key to access the corresponding value**
- ideal for applications requiring fast lookups and scalability
- good for big data`
  },
  {
    "id": "2021S_FE_AM_30",
    "question": "Which of the following is the response time when a client and server at different locations communicate under the conditions below? Here, the response time is in seconds and starts from the moment the client sends a message until a response is received from the server. 1 MB is 10^6 bytes. The propagation delay between the client and server can be ignored.",
    "options": ["1.4","3.8","5.0","5.8"],
    "correctAnswer": 3,
    "solution": `### Step 1: Get the given
- Line speed: **8 Mbit/s** (which is **8 × 10^6** bits/s)
- Transmission efficiency: **60%** (0.6)
- Message size (upstream): **1 MB** = **8 × 10^6** bits
- Message size (downstream): **2 MB** = **16 × 10^6** bits
- Processing time at client side: **0.4 s**
- Processing time at server side: **0.4 s**

### Step 2: Get effective speed
Effective Speed = 8 × 10^6 bits/s × 0.6 = **4.8 × 10^6 bits/s**

### Step 3: Get transmission time
Upstream Time = 8 × 10^6 / 4.8 × 10^6 ≈ **1.67 s**

Downstream Time = 16 × 10^6 / 4.8 × 10^6 ≈ **3.33 s**

### Step 4: Apply formula for response time
Response time = Upstream Time + Server PT + Downstream Time + Client PT
≈ 1.67s + 0.4s + 3.33s + 0.4s
≈ **5.8s**

### Hence, the answer is **d)**`
  }
];
