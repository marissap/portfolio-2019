---
title: "Lessons from using self-learned Golang in the workplace"
description: 'Just like applying skills from a degree to the workplace is different, so is applying self-learned skills. That’s why I wanted to take some time to share some of the ways my thinking shifted once I started using Go in a professional environment.'
date: '2020-05-16'
image:
tags: ['golang','workplace']
---

When I was first learning Golang, I didn't think I would be using it in the workplace just 4 months later. I'm still learning the language but I'd like to think I'm no longer a beginner. Just like applying skills from a degree to the workplace is different, so is applying self-learned skills. That's why I wanted to take some time to share some of the ways my **thinking shifted** once I started using Go in a professional environment.

#### 1. Channels are king

I viewed channels as a data transfer pipeline for `goroutines`, allowing data to be written and read to. I was half right. 


> Channels should be thought of as a communication tool. 

Channels are about the transfer of information but not just data that you want to access in a different goroutine. It can be an alert. A channel, without a buffer, would only receive a message if there is an error thus notifying another goroutine that some part of the system/program has malfunctioned.

Channels are Go's main synchronization mechanism. The standard library does have mutex for goroutine sync but channels are special. They block without explicit locks or condition variables. Synchronization and data transfer become one. 

#### 2. The standard library is enough

Before Go, I'd primarily worked with Python and JavaScript. In these languages, most projects (right or wrong) have at least a few third-party dependencies. This isn't the case with Go.

Go's standard library is very robust. Aside from APIs, which I'll talk about next, everything can be done with the standard library.

I was so used to outsourcing certain parts of my projects instead of looking in the language first. Go is very opinionated, there aren't a hundred variations to write something, so you're forced into following best practices. This means, you're less likely to farm out work and if you do, you can be pretty confident in its integrity.

#### 3. Integrating with APIs

Like so many, a lot of my work is with systems running in the cloud. Talking to AWS, was my first exposure to Go and APIs.

Like I mentioned above, Go imposes/encourages a certain style without an actual style guide. Therefore, integrating with APIs is far more straightforward. You aren't learning both the third-party system and their logic, just the system. The logic behind the APIs functions is so similar to yours.

#### 4. It's all about concurrency

I don't think I truly grasped the importance of concurrency until I saw it applied in a distributed system. In my small project, concurrency wasn't necessary but when you're processing requests, making computations, and responding, concurrency is a must.

At first read, one might assume concurrency and parallel programming are similar or even the same. However, concurrency is a programming paradigm. Concurrent programs can run in parallel, but they don’t have too. 


> The main benefit of concurrent programs is their ability to break up executions into different, independent tasks. 

Goroutines run in the same memory space so the key to making this concurrent system work is synchronization. There is a myriad of ways to control synchronization however, channels are primarily used. See above for more on that.

In a large system, functions heavily rely on shared data and when your system is distributed, managing access to that data is a challenge. Go helps make that easier.

### What’s the number one lesson you learned when you applied your own skills in a professional environment? How is it different from learning on the job?
I'd love to hear your thoughts and stories. Let me know on Twitter [@os_maris](https://twitter.com/os_maris)!