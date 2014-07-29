---
layout: project
title: Harmony helper
subtitle: A chord progression analyser
description: Harmony helper is a little web app that allows to get all scales and modes that fit a chord progression  
websites:
  - title: App on Heroku
    url: http://harmonyhelper.herokuapp.com
tags: [interface, music, generation, web, play, java]
---

{% picture harmony%20helper_1.png %}

Harmony helper is a simple web app that allows to get all scales and modes that fit a chord progression. Enter your chords and see the result.

The next step will be to generate example of melody that fit with the chords.

The algorithm use the java library [libjamu]({% post_url 2014-03-10-libjamu %}) for the music theory, the  interface is made with [bootstrap 3](http://getbootstrap.com) and the [play framework](http://www.playframework.com) is used for the server side.

You can see the app online at [http://harmonyhelper.herokuapp.com](http://harmonyhelper.herokuapp.com).
