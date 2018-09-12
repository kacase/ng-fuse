# ng-fuse (NgFuse)

[![npm version](https://badge.fury.io/js/ng-fuse.svg)](https://badge.fury.io/js/ng-fuse)
[![npm downloads](https://img.shields.io/npm/dt/ng-fuse.svg)](https://npm-stat.com/charts.html?package=ng2-fuse)

### This is a fork of the ng2-fuse package by caiobsouza which seems unmaintained, to enable it for future versions of Angular.

**NgFuse provides an Angular 2 pipe for fuzzy-searching.** <br>This package is powered by the **awesome** and lightweight library [Fuse.js](http://fusejs.io/).

## Installation

> npm i fuse.js --save
> npm i ng-fuse --save

## Usage

Import NgFuseMode in `app.module.ts`

```
import { NgFuseModule } from 'ng2-fuse';
@NgModule({
  imports: [
    ...
    NgFuseModule,
    ...
  ],
  ...
})
```

Using NgFuse within `*ngFor` directive

```
<li *ngFor="let item of (collection | ngFuse:queryString:{keys: ['name', 'email']})"></li>
```

### Options

NgFuse uses [Fuse.js](http://fusejs.io/) default options. For more details, see [Fuse.js Official Documentation](http://fusejs.io/)

```
defaults: NgFuseOptions = {
        shouldSort: true,
        threshold: 0.3,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        minSearchStringLenght: 1
    }
```
