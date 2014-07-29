---
layout: project
title:  Gensession
subtitle: A flexible zoomable interface for melody generation
description: GenSession is a pioneer interface that propose an original way to interact with random music generator.
websites:
  - title: Substance article
    url: http://substance-en.etsmtl.ca/gensession-easy-use-tool-melody-generation/
  - title: Gensession Web page
    url: http://hifiv.ca/~francoiscabrol/GenSession/
tags: [visu, interface, music, generation, java]
---

## What's GenSession?

This projet was done for my master thesis in the lab of <a href="http://profs.etsmtl.ca/mmcguffin/">Michael McGuffin</a>. The video that follow show how it works.

The system allow the user to generate melodies, organize them, manage generation parameters and construct a midi music sequence without music knowledge.

You can try it! No inspiration is required ;)
And luckily there is a [web page]({{page.websites[1].url}}) that explains all about it!

You can also download my master thesis (written in French) at [http://espace.etsmtl.ca/1278/](http://espace.etsmtl.ca/1278/).

Thanks to Substance for writing an [article introducing my master's thesis]({{page.websites[0].url}})!

{% vimeo 68455966 %}

{% picture gensession_1.png %}

## Paper abstract

GenSession is a zoomable user interface in which short clips of musical passages can be created and positioned on a 2-dimensional workspace. Clips can be created by hand, or with automatic genera- tion algorithms, and can be subsequently edited or sequenced together. Links between clips visualize the history of how they were created. The zoomable user interface is enhanced with an automatic re-framing mode, and the generation algorithms used support dynamic parameters that can be sketched as curves over time. GenSession allows melodies and sequences of chords to be generated quickly without expert knowledge.

----------------

## Examples of sessions

And here an example contruct from melody generated with GenSession:

{% soundcloud tracks 149600423 %}
