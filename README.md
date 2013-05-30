README
====================

Start up the environment.
---------------------
Start up your shell

run `cd /the/path/to/repo`

run `git checkout master`

run `git pull origin master`

*This pulls all changes from the remote repository and then applies them to your local copy -- this way you're always working with an up-to-date codebase.*

run `git checkout [the branch you want to work on]`

*Probably the `frontend` branch in this case.*

run `git rebase master`

*This will fast-forward the branch you have checked out to your local master branch. Essentially, keeping your active branch up-to-date with the local `master`. It also applies any changes you've made to the active branch in addition to fast-forwarding it.*

run `node server.js`

This will spawn a web server that listens at `http://localhost:3000`

*You will need to run this anytime the process ends e.g. closing your shell.*


Updating the codebase.
---------------------

When making changes to the repo, think of the work you're putting into it like small projects. For example, if you are focused on writing the markup for navigation, once you're finished do the following:

If you've added or removed a file to the repo run `git add .` *This stages all untracked files*

Commit your changes by running `git commit -am "your message"`

Finally, when you're ready to push remotely

run `git push origin master`

*This will apply all your local changes to the remote repository*


