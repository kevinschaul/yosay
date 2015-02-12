# podsay

> Tell Peapod what to say

Like [cowsay](http://en.wikipedia.org/wiki/Cowsay), but less cow.

(Forked from [yosay](https://github.com/yeoman/yosay))


## Install

```sh
$ npm install --save podsay
```


## Usage

```js
var say = require('podsay');

console.log(podsay('trust me, i am a peapod'));

/*
      ..~~~~~~~~....
   ,-'              ``_       .--------------------------.
  /       d@b   d@b    `\     |  trust me, i am a peapod |
 |       :* @l :* @l     `\   '--------------------------'
 /        `PP   `PP        |
<._____     \____/          \>
       ````-----------``````
 */
```

*You can style your text with [chalk](https://github.com/sindresorhus/chalk) before passing it to `podsay`.*


## CLI

```
$ npm install --global podsay
```

```
$ podsay --help

  Usage
    podsay <string>
    podsay <string> --maxLength 8
    echo <string> | podsay

  Example
    podsay "Let's make a graphic"

      ..~~~~~~~~....
   ,-'              ``_       .--------------------------.
  /       d@b   d@b    `\     |   Let's make a graphic   |
 |       :* @l :* @l     `\   '--------------------------'
 /        `PP   `PP        |
<._____     \____/          \>
       ````-----------``````
```


## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
