__Workflow__
Start up your shell

run `cd /the/path/to/repo`

run `git pull origin master`
*This pulls all changes from the remote repository and then applies them to your local copy -- this way you're always working with an up-to-date codebase.*

run `node server.js`
This will spawn a web server that listens at `http://localhost:3000`
*You will need to run this anytime the process ends e.g. closing your shell.*

When making changes to the repo, think of the work you're putting into it like small projects. For example, if you are focused on writing the markup for navigation, once you're finished

If you've added or removed a file to the repo run `git add .` *This stages all untracked files*
Commit your changes by running `git commit -am "your message"`

Finally, when you're ready to push remotely
run `git push origin master`
*This will apply all your local changes to the remote repository*


