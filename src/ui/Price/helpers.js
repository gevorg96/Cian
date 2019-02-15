export function convertToSpaceView(n) {
    n += "";
    n = new Array(4 - n.length % 3).join("U") + n;
    return n.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
}

export function isNumber(obj) {
    return /^-?[\d.]+(?:e-?\d+)?$/.test(obj);
}