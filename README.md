# nuxt291bug

A repo that demonstrates a possible Nuxt 2.9.1 dependency bug

## Reproducing

1. `cd nuxt291bug`
1. `npm i`
1. `npm run dev`

## Expected

A successful Nuxt build and dev server.

## Actual

```
$ npm run dev

> app@1.0.0 dev <REDACTED>/nuxt291bug
> nuxt


   ╭─────────────────────────────────────────────╮
   │                                             │
   │   Nuxt.js v2.9.1                            │
   │   Running in development mode (universal)   │
   │                                             │
   │   Listening on: http://localhost:3000/      │
   │                                             │
   ╰─────────────────────────────────────────────╯

ℹ Preparing project for development                                                                                                                                                                                                    13:57:17
ℹ Initial build may take a while                                                                                                                                                                                                       13:57:17
✔ Builder initialized                                                                                                                                                                                                                  13:57:17
✔ Nuxt files generated                                                                                                                                                                                                                 13:57:17

✖ Client
  Compiled with some errors in 1.89s

✔ Server
  Compiled successfully in 1.44s


 ERROR  Failed to compile with 36 errors                                                                                                                                                                               friendly-errors 13:57:20

These dependencies were not found:                                                                                                                                                                                     friendly-errors 13:57:20
                                                                                                                                                                                                                       friendly-errors 13:57:20
* core-js/modules/es6.array.find in ./.nuxt/client.js                                                                                                                                                                  friendly-errors 13:57:20
* core-js/modules/es6.array.iterator in ./.nuxt/client.js, ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&      friendly-errors 13:57:20
* core-js/modules/es6.date.to-string in ./.nuxt/utils.js                                                                                                                                                               friendly-errors 13:57:20
* core-js/modules/es6.function.name in ./.nuxt/client.js                                                                                                                                                               friendly-errors 13:57:20
* core-js/modules/es6.object.assign in ./.nuxt/client.js, ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&       friendly-errors 13:57:20
* core-js/modules/es6.object.keys in ./.nuxt/client.js                                                                                                                                                                 friendly-errors 13:57:20
* core-js/modules/es6.object.to-string in ./.nuxt/client.js, ./.nuxt/components/nuxt-link.client.js                                                                                                                    friendly-errors 13:57:20
* core-js/modules/es6.promise in ./.nuxt/client.js, ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&             friendly-errors 13:57:20
* core-js/modules/es6.regexp.constructor in ./.nuxt/utils.js                                                                                                                                                           friendly-errors 13:57:20
* core-js/modules/es6.regexp.match in ./.nuxt/client.js                                                                                                                                                                friendly-errors 13:57:20
* core-js/modules/es6.regexp.replace in ./.nuxt/utils.js, ./.nuxt/components/nuxt.js                                                                                                                                   friendly-errors 13:57:20
* core-js/modules/es6.regexp.search in ./.nuxt/utils.js                                                                                                                                                                friendly-errors 13:57:20
* core-js/modules/es6.regexp.split in ./.nuxt/utils.js, ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-build-indicator.vue?vue&type=script&lang=js&
* core-js/modules/es6.regexp.to-string in ./.nuxt/utils.js                                                                                                                                                             friendly-errors 13:57:20
* core-js/modules/es6.string.includes in ./.nuxt/client.js, ./.nuxt/components/nuxt-link.client.js                                                                                                                     friendly-errors 13:57:20
* core-js/modules/es6.string.iterator in ./.nuxt/client.js                                                                                                                                                             friendly-errors 13:57:20
* core-js/modules/es6.string.repeat in ./.nuxt/utils.js                                                                                                                                                                friendly-errors 13:57:20
* core-js/modules/es6.string.starts-with in ./.nuxt/utils.js                                                                                                                                                           friendly-errors 13:57:20
* core-js/modules/es6.symbol in ./.nuxt/client.js, ./.nuxt/components/nuxt-link.client.js                                                                                                                              friendly-errors 13:57:20
* core-js/modules/es7.array.includes in ./.nuxt/client.js, ./.nuxt/components/nuxt-link.client.js                                                                                                                      friendly-errors 13:57:20
* core-js/modules/es7.object.get-own-property-descriptors in ./.nuxt/index.js                                                                                                                                          friendly-errors 13:57:20
* core-js/modules/es7.promise.finally in ./.nuxt/client.js, ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&     friendly-errors 13:57:20
* core-js/modules/es7.symbol.async-iterator in ./.nuxt/client.js, ./.nuxt/components/nuxt-link.client.js                                                                                                               friendly-errors 13:57:20
* core-js/modules/web.dom.iterable in ./.nuxt/client.js, ./.nuxt/components/nuxt-link.client.js                                                                                                                        friendly-errors 13:57:20
                                                                                                                                                                                                                       friendly-errors 13:57:20
To install them, you can run: npm install --save core-js/modules/es6.array.find core-js/modules/es6.array.iterator core-js/modules/es6.date.to-string core-js/modules/es6.function.name core-js/modules/es6.object.assign core-js/modules/es6.object.keys core-js/modules/es6.object.to-string core-js/modules/es6.promise core-js/modules/es6.regexp.constructor core-js/modules/es6.regexp.match core-js/modules/es6.regexp.replace core-js/modules/es6.regexp.search core-js/modules/es6.regexp.split core-js/modules/es6.regexp.to-string core-js/modules/es6.string.includes core-js/modules/es6.string.iterator core-js/modules/es6.string.repeat core-js/modules/es6.string.starts-with core-js/modules/es6.symbol core-js/modules/es7.array.includes core-js/modules/es7.object.get-own-property-descriptors core-js/modules/es7.promise.finally core-js/modules/es7.symbol.async-iterator core-js/modules/web.dom.iterable
ℹ Waiting for file changes                                                                                                                                                                                                             13:57:20
ℹ Memory usage: 147 MB (RSS: 220 MB)
```