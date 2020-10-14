---
title: "Data Analytics Dashboard"
project: true
project-id: 1
summary: false
featuredImage: ../images/shiny.png
language: "R, R Shiny"
url: undefined
date: "October 2019"
---

I designed and created a prototype dashboard in R Shiny to display app analytics for a CBH app developed at Adapptor. 

To complete this project, I needed to learn how to create queries in BigQuery to access the specific data required to create meaningful visualisations. I queried the database directly in R using [bigrquery](https://cran.r-project.org/web/packages/bigrquery/bigrquery.pdf) however the large size of this database meant that I needed to think about how often these queries should take place, maintaining a balance between performance and reliable data. 

Most graph visualisations were constructed with [ggplot](https://ggplot2.tidyverse.org/) and map visualisations were made with [R Leaflet](https://rstudio.github.io/leaflet/)

The dashboard was developed using [Shiny Dashboard](https://rstudio.github.io/shinydashboard/). 
