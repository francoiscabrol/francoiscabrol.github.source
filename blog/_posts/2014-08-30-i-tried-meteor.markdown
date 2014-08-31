---
layout: post
title:  I tried Meteor
description: Meteor is an innovative Node.js framework to build reactive and full javascript web app.
tags: [javascript, meteor, node.js]
--- 

Meteor is very impressive. It is the first web framework that I've seen that is both a **client-side and server-side** technology. The first goal of meteor is to provide a solution for **developing reactive (also called real-time) web app**. The version 1.0 is comming so it is the right time to pay attention to it.



## Based on Node.js

If you don't know what node.js is, you can't understand why node.js developer needs frameworks like meteor.

## A reactive framework

What's reactivity? That's means if there is changes from any client, data changements are immediately send to everyone's.

## Come with a package manager

Since the v0.9 of meteor you can use any **atmospherejs** packages without meteorite and that simplify your life. [Atmospherejs.com](http://atmospherejs.com) reference all meteor packages developed by the community. The best thing is that packages provide code for the client-side as well as for the server-side since meteor is a both-side framework.

## The database

For instance, you have to use mongodb with meteor. There is no other choice. This will change maybe but for now that is the biggest restriction. And the reason is that meteor provide an higher level api for using the mongodb api on the server-side... and on the client-side as well! This implementation allows to preserve the reactivity without much code to write. The client-side api is minimongo and I invite you to learn more about this that contribute to make meteor so powerful. 

## The security

When I started to learn meteor, persons said me 'Be carreful! meteor is not secure!'. Ok, don't listen this rumor, it is wrong.

The principal reason for why this rumor exists is well explain on this article 

## Try it yourself!

The quickest way to try meteor is to install some [meteor examples](https://www.meteor.com/examples/leaderboard). Just few command lines are enought.