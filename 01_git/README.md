# Git

In this section you will learn about `git`. Git is a version control tool experienced software developerrs use when they need to work on code collobaratively or they want to back up their code. In Bootcamp, we'll use git as our primary way of distributing content.

## Video Lessons

For this section, you will watch this [video playlist about Git Basics][git-course].

---

## What you'll use mostly in bootcamp

### Clone Repo

```sh
git clone <url>
cd repo-name
```

### Save your work

```sh
git add .
git commit -m "your commit message"
git push
```

### Create your own branch

```sh
git checkout -b <new-branch-name>
```

### Switch Branch

```sh
git checkout <branch-name>
```

### Update your branch from master

```sh
git checkout master
git pull
git checkout <your-branch>
git merge master
```

**NOTE**: You may have to resolve merge conflicts when doing this. Ask for help if you're not sure how to do this.

---

## Reference Cheat Sheet

### Create

- Clone an existing repo: `git clone <repo-url>`
- Create new local repo: `git init`

### Branches

- List all existing branches: `git branch -av`
- List all branches on your local: `git branch -l`
- Switch to new branch: `git checkout <branch-name>`
- Delete local branch: `git branch -d <branch-name>`

### Local Changes

- List changed files in current working directory: `git status`
- List changes to tracked files: `git diff`
- Add all current changes to next commit: `git add .`
- Commit staged changes: `git commit -m "your commit message"`

### Update, Publish, and Merge

- List all currently configures remotes: `git remote -v`
- Add new remote: `git remote add <name> <url>`
- Download all changes from `<remote>`, but don't integrate into head: `git fetch <remote>`
- Download changes and directly merge into HEAD: `git pull <remote> <branch>`
- Publish local changes on a remote: `git push <remote> <branch>`
- Delete a branch on remote: `git branch -dr <remote/branch>`
- Merge `<branch>` into your current HEAD: `git merge <branch>`
  
### Undo

- Discard all local changes in your working directory: `git reset -hard HEAD`
- Revert a commit: `git revert <commit>`
- Reset your HEAD pointer to a previous commit and discard all changes since then: `git reset -hard <commit>`
  
[git-course]: https://www.youtube.com/watch?v=8oRjP8yj2Wo&list=PLG3Osgh6aITWY4QCO2BHvxRc03sY65ZzQ
