## Github-workflow
---
### Setup
##### Main branch
- We have a master branch that serves as a release branch.
- This is the branch that we will publish.
- All parts of this branch should work well.

##### Development branch
- This branch is where we merge all our features, for example "Add navbar".
- This is the branch that we use for creating feature-brances when we take on a task from the sprint log.
- Everything should hopefully work, but there may be links or information that are just placeholders.

##### Feature branches
- These are the branches we work on, one at a time or more.
- The code that is committed here does not need to be 100% functional when pushed up.
- If you have problems, you can get help and input through these branches.
- When these are to be merged into the Development branch, they are deleted.
- ##### Namestandard for feature branches
  - The feature brances can be of different types:
    - feature
    - buggfix
    - ...
  - The branchname begin with the name of the developer, branchtype and then the name of the assigmnent. 
  - Every seperate part in the branch is written in Camel casing.
    - developerName_branchtype_assigment
      - **johannes_feature_headerComponent**
      - **annas_buggfix_brokenNavbar**
      
To merge into our project, we use pull requests. Then a merge can be done directly in Github and the feature branch can be removed. You have to remove your local branch yourself.

At least 3 people must approve a pull request, and preferably write comments on the code. We do this so that everyone gets a chance to have their code properly reviewed before merging to the Development branch.

Testing occurs continuously, but it should be well tested at all levels. Before the feature branch is merged into the Development branch and before the Development branch is merged into Master.
