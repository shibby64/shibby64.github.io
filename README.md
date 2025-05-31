# shibby64.github.io

Release Process:

1. Create pull request to merge changes into "master" branch name. Pull request name should summarize changes.
2. Merge with "squash commits" strategy. The commit should inherit the pull request name.
3. Github actions should auto-deploy the changes you just merged.
4. If deployment is successful (it should be), create a version tag off of the fresh commit.
