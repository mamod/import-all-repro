const importAll = require('import-all.macro');

importAll('./files/*.ts').then((files) => {
    console.log(files)
})
