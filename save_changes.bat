git add .
git commit -m "test commit"
git push origin hexo
hexo generate
hexo generate -d
echo "save changes and deploy finish!"
pause