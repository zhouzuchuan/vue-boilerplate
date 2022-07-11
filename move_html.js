const fs = require('fs')
const dirNames = fs.readdirSync('./dist/src/pages')
for (let i = 0; i < dirNames.length; i++) {
    fs.copyFileSync(
        `./dist/src/pages/${dirNames[i]}/index.html`,
        `./dist/${dirNames[i]}.html`
    )
}
fs.rm('./dist/src', { recursive: true, force: true }, function () {})
