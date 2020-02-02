import importAll from 'import-all.macro'

importAll('./files/*.*').then((files) => {
    console.log(files)
})
