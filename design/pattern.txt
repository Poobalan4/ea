Design Patterns:
Creational - how the objects are created
Creational Design Patterns provide ways to instantiate a single object or group of related objects. These patterns deal with the process of object creation in such way that they are separated from their implementing system. That provides more flexibility in deciding which object needs to be created or instantiated for a given scenario.

-Singleton 
- Ensure a class has only one instance and provide a global point of access to it.
-  This pattern ensures that the class has only one instance and provides a global point of access to it. The pattern ensures that only one object of a specific class is ever created. All further references to objects of the singleton class refer to the same underlying instance.
-     All the methods and instances are defined as static. The static keyword ensures that only one instance of the object is created and you can call methods of the class without creating an object.
-    The constructor of a class is marked as private. This prevents any external classes from creating new instances. The class is also sealed to prevent inheritance, that could lead to sub classing that breaks the singleton rules.

- Abstract Factory - animal
- Provide an interface for creating families of related or dependent objects without specifying their concrete classes.



Structural
-Facade - mortgage
-Provide a unified interface to a set of interfaces in a subsystem. Façade defines a higher-level interface that makes the subsystem easier to use.

Behavioral	
- Mediator - chat 
-Define an object that encapsulates how a set of objects interact. Mediator promotes loose coupling by keeping objects from referring to each other explicitly, and it lets you vary their interaction independently.

-Observer - share price update - interface
-Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
