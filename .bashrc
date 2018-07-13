
deploy() {
    npm run build
    git add -A 
    git commit -m "$*"
    git push origin master
    git subtree push --prefix dist/pwa-mat origin live
}

deploytest() {
    npm run build
    git add -A 
    git commit -m "$*"
    git subtree push --prefix dist/pwa-mat origin live
}

dev() {
  npm run dev
}

gendb() {
  cd server
  npx babel-node db
}