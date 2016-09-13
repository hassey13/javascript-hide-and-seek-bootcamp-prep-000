// - Define a function `getFirstSelector(selector)`, which accepts a selector and returns the first element that matches.

function getFirstSelector(selector) {
    return document.querySelector(selector);
}

// - Define a function `nestedTarget()` that pulls a `.target` out of `#nested` (`#` is used for IDs in selectors — but you knew that because you [read the docs](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_Started/Selectors), right? :) ). (Note that in `index.html` `#nested` and `.target` just _happen_ to be `div`s. This method should work with arbitrary elements.)

function nestedTarget() {
    var nest = document.querySelector("#nested");
    return nest.querySelector('.target')
}

// - Define a function `increaseRankBy(n)` that increases the ranks in all of the `.ranked-list`s by `n`. (You might need to make use of [`parseInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

function increaseRankBy(n) {
  var filterInt = function (value) {
    if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) {
      return Number(value);
    };
  return NaN;
  };
  let list = document.querySelectorAll('.ranked-list').length;
      for(let i = 0; i < list; i++) {
          var current = document.getElementsByClassName('ranked-list')[i];
          var L = current.getElementsByTagName('li').length;

          for(let a = 0; a < L; a++) {
            let currentLI = current.getElementsByTagName('li')[a];
            currentLI.innerHTML = (filterInt(currentLI.innerHTML) + n).toString();
          }
      }
};

// - Define a function `deepestChild()` that pulls out the most deeply nested child from `div#grand-node`. (Remember, you can iterate over elements and call `querySelector()` and `querySelectorAll()` on them. This is challenging to implement correctly, but not beyond your ability!)

function deepestChild() {
  var start = document.getElementById('grand-node');
  var next = start.children[0];

  while (next) {
    start = next
    next = start.children[0]
  }
  return next;
}
