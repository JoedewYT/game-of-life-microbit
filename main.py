def RandomizeField():
    global sel_x, sel_y
    sel_x = 0
    sel_y = 0
    RandLight(sel_x, sel_y)
    for index in range(25):
        if sel_x == 4:
            sel_y += 1
            sel_x = -1
        else:
            sel_x += 1
            RandLight(sel_x, sel_y)
def RandLight(x: number, y: number):
    if Math.random_boolean():
        led.plot(x, y)
    else:
        led.unplot(x, y)
sel_y = 0
sel_x = 0
RandomizeField()

def on_forever():
    pass
basic.forever(on_forever)
