# NgEl

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Included

- angular material
- socket.io

## Goal to build

To build a chat web component that is framework agnostic.

## To Run

Install Live Server for Angular Element.

```bash
npm i live-server
```

Serve Angular

```bash
ng serve
```

Serve Angular Element

```bash
// for angular element
npm run build::element  // terminal 1
live-server --open=dist/ng-el/index.html // terminal 2
```

npm run build is equal `bash "build::element": "ng build --watch --prod --output-hashing=none --base-href= "`

Live server will serve the output when angular build.
