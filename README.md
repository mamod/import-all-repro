## Reproduction

### The problem

importing ts,tsx,.. (or any non .js file) files using `import-all.macro`

to reproduce run

```js
npm install
npm run build
node dist/parcel // success
node dist/babel // Error: Cannot find module './files/log.ts'
```

`import-all.macro` will not be able to detect typescript files if built using babel cli, while using bundlers like webpack/parcel... it will work just fine, the reason is that bundlers use file names map internally to resolve modules, babel will change files extension to `.js` of the transpiled files but `import-all.macro` will keep original globed file names

In `import-all-ts` branch I tried to fix this issue by omitting file extension for typescript and React `ts, tsx, jsx`, I'm aware there is another extensions that babel can transpile using other presets but at least for the common ones this solves the issue, also not sure if this is the best solution too :)

full change commit can be found on [my import-all.macro fork](https://github.com/mamod/import-all.macro)
