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

console.log(podsay('I am a peapod'));

/*
        __________
     _~`          `~~-.    .--------------------------.
    (                  \   |       I am a peapod      |
   /       (o) (o)      \  '--------------------------'
  /        .      .      \
 /          \    |       |
<.________   `---'        \
          `---------------->
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

        __________
     _~`          `~~-.    .--------------------------.
    (                  \   |   Let's make a graphic   |
   /       (o) (o)      \  '--------------------------'
  /        .      .      \
 /          \    |       |
<.________   `---'        \
          `---------------->
```


## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
