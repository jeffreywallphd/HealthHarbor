# PersonalWellnessPod
A Solid Pod application designed to store information about personal wellness along several personal wellness dimensions. This product is designed to have sections for Medical records, Calorie Tracking, Habit Tracking, Mental Health Chat Bot, Physical Fitness, and Financial Tracking.

### No Warranty
This software is provided "as is" without any warranty of any kind, express or implied. This includes, but is not limited to, the warranties of merchantability, fitness for a particular purpose, and non-infringement.

### Disclaimer of Liability
The authors and copyright holders of this software disclaim all liability for any damages, including incidental, consequential, special, or indirect damages, arising from the use or inability to use this software.


## Installation
### Prepare to Install
* Choose an IDE (Integrated development environment) 
    - An IDE is a software application that helps programmers develop software code efficiently. It increases developer productivity by combining capabilities such as software editing, building, testing, and packaging in an easy-to-use application
    - Suitable Options: IntelliJ IDEA, Eclipse, VSCode (My Preference)

### Install Git on your OS
* If you have a mac, there's a chance you may already have git installed
    - Run git --version to check
* If it tells you git is not installed then there are a couple ways to do it. 
* This link goes through the options for mac: https://macpaw.com/how-to/install-git-mac
    - If you have homebrew installed or install it, there are some very simple commands to install git and nodeJS. 
* For non-Mac users, [Download Git](https://github.com/git-guides/install-git)
* [Create GitHub Account](https://github.com/join)
    - Check that it is downloaded via command prompt/terminal: Run command ‘git --version’
* [Familiarize yourself with basic Git Commands](https://www.atlassian.com/git/glossary#commands)
* Review the project documentation reguarding branching

### Download NodeJS
* [Download NodeJs](https://nodejs.org/en/download)
* If you have a mac, you can either use the installer, use HomeBrew, or bash 
* To use HomeBrew run ‘brew install node’
* [Follow other guides on how to install NodeJS](https://nodejs.org/en/download/package-manager)
* Check that it is downloaded via command prompt/terminal: Run command ‘npm -version’

### Pull the project repository from GitHub
* Click on the code button and copy the URL to clipboard  
* Run ‘git clone https://github.com/jeffreywallphd/PersonalWellnessPod.git’ in your command prompt/terminal or the terminal within your IDE
    - You want to run this command where you would like your project directory to be. You may want to create a folder for all your repositories, or put it in a folder for this class. 
* The package.json file is the central place to configure and describe how to interact with and run your application. This has been set up by the prior class. 
* You should be able to access the file at the very bottom of the directory. This file tells us to run a couple different scripts
* To start the site:
    - Run ‘npm start-frontend’ to just start the front end
    - Run ‘npm start-backend’ to just start the back end
    - To get the entire site up and running just run ‘npm start’ which runs both of those commands concurrently, most of you will just need to run this.
    - It may ask you to install a couple other things, just run the commands it tells you 
* it will say something like ‘Server running on http://localhost:8080’ and this should automatically open a new tab with the site running

## Collaboration Practices
Please be sure to read through the [Best Coding Practices](BestCodingPractices.md) document before you start collaborating.

As you use git and GitHub to manager your contributions, follow the guidelines outlined in the [Git Practices](GitPractices.md) document. Remember to pull from main regularly to avoid code conflicts.

## Future Feature Ideas
The following are some ideas for future implementation:

* Electron implementation to allow for a desktop application.
* Rechart implementation for data visualization
