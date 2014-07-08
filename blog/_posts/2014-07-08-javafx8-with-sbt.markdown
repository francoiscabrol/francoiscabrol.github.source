---
layout: post
title:  Build a JavaFX8 app with sbt
tags: [javafx, java, sbt]
--- 

[Sbt is a simple build tool](http://www.scala-sbt.org) from the scala community. It is a great tool to build java and scala project.

The basic configuration of a sbt project is written in the build.sbt.

With the version 8 of Java and JavaFX, an important fact is that the jfxrt.jar (javafx library) moved to "$JAVA_HOME/jre/lib/ext/jfxrt.jar" with Java8 (from "$JAVA_HOME/jre/lib/jfxrt.jar" with Java7). With sbt, you have to define the path of this jar file.

Example of build.sbt file for a simple Java8 and Javafx8 project:

	organization := "Francois Cabrol"

	name := "My app"

	version := "0.0.1"

	autoScalaLibrary := false

	//Define the java version to use
	javacOptions ++= Seq("-source", "1.8", "-target", "1.8")

	//Add Javafx8 library
	unmanagedJars in Compile += Attributed.blank(file(System.getenv("JAVA_HOME") + "/jre/lib/ext/jfxrt.jar"))

	// Define all libraries to get from maven repository
	// JUnit Interface 0.10
	libraryDependencies ++= Seq(
	   "com.novocode" % "junit-interface" % "0.10" % "test"
	)
	


Note that the same following line should be needed in any ScalaFx8 project:

	//Add Javafx8 library
	unmanagedJars in Compile += Attributed.blank(file(System.getenv("JAVA_HOME") + "/jre/lib/ext/jfxrt.jar"))

Hope this will be useful!		
