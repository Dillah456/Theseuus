

# Define the Function of The Processor

Central Processin Unit or Processor is an Integrated Cicuit (IC) implemented on single silicone wafer, which controls all the functions of the computer

##### Component
The Arhictecture of CPU are known as Von Neumann Architecture for Modern Computer, 
![[Pasted image 20260827100901.png]]
in which both program and data are inside same memory
1. Control Unit (CU)
	1. Reads the Instruction
	2. Generate digital signals that guide the other compoenents to perform operation based on those instructions
2. Arithmathic Logic Unit (ALU)
	1. Perform Arithemthic Operations: addition, substraction, multiplication, division
	2. Perform logical operation :
	   {and, or, nor, not}
3. Registers :
	1. Are memory devices that store bits of information
	2. Located in CPU
	3. Store Input and Result
	4. The most Quickly Accesible Memory
	5. The size of Register commercially define the Microprocessor
		1. 32Bit Micro can perform 32 Bit and so on
4. Input / Output :
	1. Sends and Receives instructions and data to and from the system memory and the peripherals conected to the computer
	2. Peripherals are any I/O Devices, Monitor, Mice etc.
	3. The I/O  make it possible for Processor to Communicate with peripheral devices and Memory Interface which is called Random Access Memory ( RAM )
5. Memory 
	1. Data 
	2. Program

The microprocessors are designed around digital logic. The basic components of a
microprocessor are the control unit (CU), the arithmetic logic unit (ALU), and the
input/output (I/O) unit. Besides these, a CPU also contains some memory called
registers. All these components perform certain basic functions based on the
instructions they receive.


##### Cache
Cache is temporary storage that is integrated with the CPU chip. In most modern microprocessors, the cache can be up to 50 percent of the total chip area. A
processor can access the cache memory easily and quickly. However, although

accessing the cache is faster than accessing RAM, registers remain the fastest

accessible memory locations
* A Temporary storage that is integrated with the CPU
* Accessing cache is faster than accessing RAM, but still slower than Register

# Installation and Removal of Processor 

There are several Types of Pin management arrays.
Thesepins must match the socket avaible in the system motherboard to install the processor.

There are 4 primary types
1. Dual Inline Package (DIP)
	1. Used in initial microprocessor
	2. helps in solder free installation
2. Single Inline Package (SIP)
	1. Called a slot 1 processor 
3. Pin Grid Array (PGA)
	1. AM4 pada socekt AMD termasuk tipe PGA
	2. 
4. Land Grid Array (LGA)

## Proses Pemasangan 
1. Matikan Komputer dan Lepas dari sumber daya
2. Gunakan ESD Strap (Electro Static Discharge - Electrostatic Discharge )untuk menghilangakan sista Listrik Statis dari tubuh
3. Open Computer case
4. Unplog PSU Power Connector
5. Remove Heatsink and Cooler Fan
	1. Heatsink / Cooler might Adhered / Stuck, because of thermal exchange flux (  Thermal Paste )
	2. To Undo this use Alcohol to wipe any Excessive paste from past usage, 
6. Remove any dust
7. Unlock latch
	1. For LGA open Latch
	2. For PGA open the Retaining frame to unlock the processor
8. Hold the Processor
	1. It is advised to hold the processor from opposite ends using your fingger ( Use Glove( Preverablly))
	2. Ensure to not touch the Top of the pins
9. Lift processor straight out from socket
10. Store removed Processor in static free package
11. Clean the dust, Lint free Cloth, Static Free

### AWS Procedure On installing CPU
Warning
1. Use Static protection
2. Use Dust protection

Procedure 
1. Choose the right Processor
2. Unpack the processor
3. Clean the Motherboard
4. Open the Retaining Frame
5. Match marking between Processor and Socket
6. Place without using force
7. Match marking between Processor and Socket
8. Replace the Retaining Frame
9. Verify the compatibility of Cooling Device
10. Apply heatsink compound, make sure its Compatible
11. Place and secure heatsink
12. Connect fan Power Cable
13. Connect the power cable to the Motherboard
14. Close Computer case
15. Connect the system power