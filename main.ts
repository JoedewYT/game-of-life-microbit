function RandomizeField () {
    sel_x = 0
    sel_y = 0
    RandLight(sel_x, sel_y)
    for (let index = 0; index < 25; index++) {
        if (sel_x == 4) {
            sel_y += 1
            sel_x = -1
        } else {
            sel_x += 1
            RandLight(sel_x, sel_y)
        }
    }
}
function RandLight (x: number, y: number) {
    if (Math.randomBoolean()) {
        led.plot(x, y)
    } else {
        led.unplot(x, y)
    }
}
let sel_y = 0
let sel_x = 0
RandomizeField()
