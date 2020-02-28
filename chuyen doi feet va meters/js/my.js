

function footToMeter(x) {
    meter = 0.305 * x;
}

function meterToFoot(x) {
    foot = 3.279 * x;
}

function displayMeter(x) {
    footToMeter(x);
    document.getElementById('meter').innerHTML = meter;
}
function displayFoot(x) {
    meterToFoot(x);
    document.getElementById('foot').innerHTML = foot;
}