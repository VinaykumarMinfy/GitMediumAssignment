### Initialisation
git init
git add .
git commit -m"commit"
git remote add origin https://github.com/VinaykumarMinfy/GitMediumAssignment.git
git push origin master

### Create branch feature/update-styling
git switch -b feature/update-styling
git add .
git commit -m"update styling:background and textarea boarder"
status
git push origin feature/update-styling
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 1001 bytes | 71.00 KiB/s, done.
Total 5 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/VinaykumarMinfy/GitMediumAssignment.git
 * [new branch]      feature/update-styling -> feature/update-styling
   
git switch master

 ### Create branch feature/add-content
 git switch -b feature/add-content
git add .
git commit -m"Add instructional note below counter"
status
git push origin feature/add-content

### Screenshots showing the merge conflict and resolution process
###
