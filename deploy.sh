 #!/usr/bin/env bash


npm run build &&
cd dist &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@github.com:wuchuan123/cent-react-wheels.git &&
git push -u origin master -f
cd -
