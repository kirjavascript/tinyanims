(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.tinytween = factory();
  }
    }(typeof self !== 'undefined' ? self : this, function () {

    function tween(callback, ticks = 500) {

        let timer = performance.now();

        ~function frame() {

            let diff = performance.now() - timer;

            if (diff <= ticks) {
                requestAnimationFrame(frame);
                callback(diff / ticks);
            }
            else {
                callback(1);
            }

        } ();

    }

    function lerp(start, end, i) {
        return start + (end - start) * i;
    }

    function ease(t) {
        // from https://gist.github.com/gre/1650294
        return t<.5 ? 2*t*t : -1+(4-2*t)*t;
    }

    return { tween, lerp, ease };
}));
