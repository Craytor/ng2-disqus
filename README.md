[![npm](https://img.shields.io/npm/v/ng2-awesome-disqus.svg?maxAge=2592000?style=plastic)](https://github.com/MurhafSousli/ng2-disqus) [![Build Status](https://travis-ci.org/MurhafSousli/ng2-disqus.svg?branch=master)](https://travis-ci.org/MurhafSousli/ng2-disqus) [![npm](https://img.shields.io/npm/dt/ng2-awesome-disqus.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/ng2-awesome-disqus)

<p align="center">
  <img height="300px" width="300px" style="text-align: center;" src="https://cdn.rawgit.com/MurhafSousli/ng2-disqus/master/assets/logo.svg">
  <h1 align="center">Angular Disqus Module</h1>
</p>

Add disqus to your angular app instantly | [live demo](https://murhafsousli.github.io/ng2-disqus/)

## Installation

Install it with npm

`npm install ng2-awesome-disqus --save`

## Basic usage:

Add `DisqusModule` to **NgModule** `imports` array.

```
import {DisqusModule} from "ng2-awesome-disqus";
@NgModule({
  imports: [
    DisqusModule
  ]
})
```
In your template

```
<disqus [shortname]="shortname" [identifier]="pageId" ></disqus>
```

## Advanced usage:

See Disqus official documentation ([JavaScript configuration variables](https://help.disqus.com/customer/portal/articles/472098-javascript-configuration-variables)) before using these inputs.

```
<disqus [shortname]="shortname" [identifier]="pageId" 
    [url]="customUrl" [categoryId]="catId" [lang]="'en'"
      
    (comment)="onComment($event)"
  ></disqus>
```

Use the output `(comment)` to get user's comment response.

## Issues


If you identify any errors in this component, or have an idea for an improvement, please open an [issue](https://github.com/MurhafSousli/ng2-awesome-disqus/issues). I am excited to see what the community thinks of this project, and I would love your input!

## Author

 **Murhaf Sousli**

 - [github/murhafsousli](https://github.com/MurhafSousli)
 - [twitter/murhafsousli](https://twitter.com/MurhafSousli)

## License

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)](/LICENSE)