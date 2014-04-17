---
layout      : post
title       : SQL data sanitisation scripts
tags        : [SQL]
primarytag  : SQL
intro       : I created several SQL data sanitisation script templates that can be used to obfuscate data.
draft: 1
---

There are various scripts, each performing a transform to a particular data type. To use the scripts, replace the relevant tables and columns. They are fairly recognisable and all follow a similar naming convention, such as `TargetTable` and `TargetColumn`. 

The scripts that do not rely on `NEWID()` may work in non-T-SQL databases.

The project is up on [GitHub](https://github.com/Tyriar/sql-data-sanitisation), check it out and contribute!