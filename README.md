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

### Serve Angular

```bash
ng serve
```

### Serve Angular Element

- Terminal 1

```bash
npm run build::element
```

Run this command to build angular element.
npm run build is equal `"build::element": "ng build --watch --prod --output-hashing=none --base-href= "`

- Terminal 2

```bash
live-server --open=dist/ng-el/index.html
```

Live server will serve the output when angular build.

## Don't forget to serve the node server.
