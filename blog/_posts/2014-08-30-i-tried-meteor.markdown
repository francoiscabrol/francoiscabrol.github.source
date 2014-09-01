---
layout: post
title:  Meteor, a fast way to make reactive web apps
description: Meteor is an innovative Node.js framework to build reactive and full javascript web app.
tags: [javascript, meteor, node.js]
--- 

Meteor is very impressive. It is the first web framework that I've seen that is both a **client-side and server-side** technology. The first goal of meteor is to provide a solution for **developing reactive (also called real-time) web app**. The version 1.0 is comming so it is the right time to pay attention to it.

So Meteor is based on Node.js. If you don't know what Node.js is, you have to understand that Node is a Javascript interpreter running on the OS (Windows/MACOS/Linux,...) and providing a native powerfull [low level API](http://nodejs.org/api/). This API allows to read/write files, create a server, and do a lot of basic stuff. You can create server application in Javascript only with that. But since the most of web server applications need pretty much the same architecture and functions, as in every language, using a web framework allows to make apps really faster and with less pain. Meteor is a web framework to make reactive applications.

> If there is changes from any client, data changements are immediately send to everyone’s.

What means reactivity? That's means if there is changes from any client, data changements are immediately send to everyone's.

> Atmospherejs packages provide code for the client-side or the server-side as well as for both

Since the v0.9 of meteor you can use any **atmospherejs** packages without meteorite and that simplify your life. [Atmospherejs.com](http://atmospherejs.com) reference all meteor packages developed by the community. The best thing is that packages provide code for the client-side as well as for the server-side since meteor is a both-side framework.

> A good occassion to discovered no sql databases (if you don't know)

For instance, you have to use mongodb with meteor. There is no other choice. This will change maybe but for now that is the biggest restriction. And the reason is that meteor provide an higher level api for using the mongodb api on the server-side... and on the client-side as well! This implementation allows to preserve the reactivity without much code to write. The client-side api is minimongo and I invite you to learn more about this that contribute to make meteor so powerful. 

> Yes, Meteor is secure (well, if you do what needed)

When I started to learn meteor, persons said me 'Be carreful! meteor is not secure!'. Ok, don't listen this rumor, it is wrong.

The principal reason for why this rumor exists is well explain on this article 

> Try it yourself!

The quickest way to try meteor is to install some [meteor examples](https://www.meteor.com/examples/leaderboard). Just few command lines are enought.
		
- If you want to install meteor:

		$ curl https://install.meteor.com | sh	
		
- Download and launch the Leaderboard example:

		$ meteor create --example leaderboard
		$ cd leaderboard
		$ meteor
		