deploy() {
    npm run build
    npm run pushlive "$*"
}