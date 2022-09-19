# README #

Visual diff suite based on backstopJS visual diffing tool https://garris.github.io/BackstopJS/

### What is this repository for? ###

* Ideal for comparing identical environments (staging/Prod).  This will go through several key selectors and compare production and staging versions and report back on any differences. 
* Differences can then be manually reviewed and vetted for regressions

### How do I get set up? ###

* $ npm install -g backstopjs
* Run and approve production snapshot
  * backstop --config="Homepage.json" reference approve
* Run testing against current staging environment 
  * backstop --config="Homepage.json" test
* Review html report for possible regressions 

