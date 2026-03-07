user@user-MS-7E32:~/kist-primal.github.io$ git add .
user@user-MS-7E32:~/kist-primal.github.io$ git commit -m "Fix config: restore original with minimal changes"
[main d035199] Fix config: restore original with minimal changes
1 file changed, 175 insertions(+)
create mode 100644 handoff-doc.md
user@user-MS-7E32:~/kist-primal.github.io$ git push origin main
Username for 'https://github.com': Seung-Sub
Password for 'https://Seung-Sub@github.com':
Enumerating objects: 36, done.
Counting objects: 100% (36/36), done.
Delta compression using up to 24 threads
Compressing objects: 100% (20/20), done.
Writing objects: 100% (20/20), 6.24 KiB | 6.24 MiB/s, done.
Total 20 (delta 16), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (16/16), completed with 15 local objects.
To https://github.com/kist-primal/kist-primal.github.io.git
! [remote rejected] main -> main (refusing to allow a Personal Access Token to create or update workflow `.github/workflows/deploy.yml` without `workflow` scope)
error: failed to push some refs to 'https://github.com/kist-primal/kist-primal.github.io.git'
user@user-MS-7E32:~/kist-primal.github.io$
