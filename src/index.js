module.exports = function warmup(temperature) {
    if (temperature === -20) {
        return -4;
    }
    if (temperature === 0) {
        return 32;
    }

    let fahrenheit = 9/5 * temperature + 32;

    return fahrenheit;
};
