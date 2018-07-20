
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

api() {
  npm run api
}

gendb() {
  cd server
  npx babel-node db
}

rundb() {
  cd server
  npx babel-node server
}

migrate() {
  cd server
  sequelize db:migrate
  cd ..
}

seed() {
  cd server
  sequelize db:seed:all
  cd ..
}