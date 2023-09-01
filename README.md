# TodoList Project 
* This project is initiated to encourage better understanding of the project application, project structure, and its library usage.  
* This TodoList app is designed for simple and practical note taking, easy preparation, reminding, and managing for the tasks of the day.
## 1. Project Overview
The app is implemented based on Vitejs and React framework, style with CSS and other design/building tools such as:
* Figma 
* Drawio
* Google doc
* github

## 2. Functions 
 This app allow users to :
- add tasks.
- modify the contents of the created tasks.
- delete the contents of the created tasks.
- display the created tasks in the form of a list.
- view the amount of tasks needed to do.
- tick off the task when completed. 
- deny motdifying the content of the created task. 

## 3. Convention Guide
Please, refer to [Convention Guide](https://docs.google.com/document/d/1NtNEuOJXdDEH7tYqWRRfo511oPXGJxyLsDcgiqa8E6A/edit) for more detail.

## 4. Figma UX/UI 
Please, refer to [UX/UI Design](https://www.figma.com/file/wF7CGY2asICwHsox5cCVqJ/TodoList-Drafting?type=design&mode=design&t=DVaVQtGlDyJocZMC-0) for more detail.
## 5. App Flow
Please, refer to [App Flow](https://app.diagrams.net/#G1-rkWxa7A2HwNDS-M-sUHxnHJK-CPXNLg)

## 6. React Flow 
Please, refer to [React Flow](https://app.diagrams.net/#G1-rkWxa7A2HwNDS-M-sUHxnHJK-CPXNLg)
## 7. Git Flow Method
### 1. Main Branch
  * store the stable version of app
### 2. Develop Branch
  * This branch is use as the app developing integreation
  * Any feature that created are merged into develop branch
  * Represents the latest state of the application with features being developed.

### 3. Feature Branches 
  * Feature branch responsible for the app features 
  * Feature branches
    * feature/add
    * feature/delete
    * feature/modify
    * feature/update_status 

### 4. Release Branches
 * For release a new version of TodoList
    * Create a release branch from the develop
    * Release branched :
      * release/1.0 

### 5. Bugfix Branches 
* If any bugs appear when demo the app after release 

### 6. Hoxfix Branches
* used to quickly patch production releases. Hotfix branches are a lot like release branches and feature branches except they're based on main instead of develop.

[Git Flow Reference: ](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=What%20is%20Gitflow%3F,lived%20branches%20and%20larger%20commits)

## 8. Backlog
- When modifying the text overlfow, the rest of the text outside the content box won't be shown. It is practical for a brief description of the task only.
- When the task is checked as done, the number of tasks status still remains the same unless it was deleted. 





