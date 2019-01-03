# Node Js

***What is nodejs ?***
Node.js is a javascript runtime / platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an **event-driven**, **non-blocking I/O model** that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

***Javascript Event Loop***
Node.js uses a **single threaded model** with event looping *(The event loop sees that the call stack is empty and the callback queue is not empty. So it moves the callbacks (in a first-in-first-out order) to the call stack for execution)*. 
Event mechanism helps the server to respond in a non-blocking way and makes the server highly scalable as opposed to traditional servers which create limited threads to handle requests. Node.js uses a single threaded program and the same program can provide service to a much larger number of requests than traditional servers like Apache HTTP Server.

