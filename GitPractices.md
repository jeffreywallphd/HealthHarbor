# GitHub Guidlines
## Branching
If you are a developer on your team, you must have Jeff Wall give you access to the repository first.

* We will be using branches to work on our coding tasks. 
    - A branch in github allows you to develop features, fix bugs, or safely experiment with new ideas in a contained area of your repository. 
    - You always create a branch from an existing branch. Typically, you might create a new branch from the default branch of your repository and ours is “main”. 
* Please checkout the main branch which is what the website is running by using the command “git checkout main” 
    - You should already be on this branch if you are just starting
* You must check out a new branch to complete any work, do not make any changes on the main branch
### Create a new branch 
* While you are on the main branch you will run the command git checkout -b  NEW_BRANCH_NAME
* git checkout -b NEW_BRANCH_NAME is the correct way to create a new branch and switch to it. 
    - This is a shorthand for creating a branch: git branch NEW_BRANCH_NAME and then checking it out after creation: git checkout NEW_BRANCH_NAME.
* Create new and separate branches for features or tasks, you do not want to put changes on the main branch that will break the site
* Until a feature or task is completed, leave your work on your branch and test it locally.
* As soon as you finished the work and tested it you must create a pull request

### Merging/Pull Requests
* Once you have completed any work on your branch and have tested it on your computer, you can create a pull request. 
* Create a pull request to propose and collaborate on changes to a repository. These changes are proposed in a branch, which ensures that the default branch only contains finished and approved work.
* Once your changes are ready, go to the github repository and navigate to pull requests: 
    - Click “New Pull Request”
    - Always select “base: Main” on the left side.  On the right select your branch for “compare: BRANCH_NAME”
    - Type a title and fill out given template for your pull request.
    - Submit Pull Request
* The infrastructure team will have to approve this push request so please contact the team ASAP to get your branch approved and merged
    - Assign anyone on the Infrastructure Team to do your review. 
    - Once you assigned them, send a message in the Infrastructure Discord chat with a link to your pull request
    - Pull Requests should be approved within 24hrs. If you have not recieved input or approval within that time frame contact your scrum master to escalate the request.
* Once approved, the code changes you made will be in the “main” branch
    - In order to see your changes in the main branch, run git pull after running git checkout main again
### Merge Conflicts
* There is a chance that you may run into a Merge Conflict, if this is the case please reach out to Kenzie Baker for assistance
* [More information regarding how this works](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

## Changes from other teams
* Now that you know how to add code to the repository, other teams and developers may be writing code and adding it to the main branch as well. 
* What this means is that everytime you go to work on code or create a new branch there may have been updates from other teams. 
* In order to account for this, before creating a new branch, always check out the main branch first. 
* While you are on the main branch you will run a couple different commands
    - ‘git fetch’ : downloads commits, files, and refs from a remote repository into your local repo. Fetching is what you do when you want to see what everybody else has been working on.
    - ‘git pull’ : this calls both git fetch and git merge. It fetches what other changes have been made to the branch and applies them to the branch you are currently working on
    - For our purposes, most of the time, you can just run git pull and then check out your new branch. 
