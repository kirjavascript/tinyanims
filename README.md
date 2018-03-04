Animation primitives for browsers

Install
---

```bash
$ yarn add tweenlite
```

Extremely tiny (279 bytes minified & gzip'd) library that exposes some basic methods for doing animations.
Exports a global 'tweenlite' when dumped in your page as a script tag.

Requires requestAnimationFrame.

Docs
---

tween(<i>callback</i>, <i>milliseconds = 500</i>)

lerp(<i>start</i>, <i>end</i>, <i>delta</i>)

ease(<i>delta</i>)


Usage
---

```javascript
import { tween, lerp, ease } from 'tweenlite';

// log a bunch of numbers from -20 to 100

tween((t) => {
    const i = lerp(-20, 100, t);
    console.log(i);
}, 1000);

// create some text and do a repeating animation

const txt = document.body.appendChild(Object.assign(
    document.createElement('span'),
    { textContent: 'hello' },
));

~function loop () {
    tween((t) => {
        const i = lerp(20, 30, ease(t));
        txt.style.fontSize = `${i}px`;

        if (t == 1) {
            loop();
        }
    });
} ()

```
