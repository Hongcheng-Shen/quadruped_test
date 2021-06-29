serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
Quadruped.init()
Quadruped.Height(10)
Quadruped.Start()
Quadruped.Gait(gait.Trot)
Quadruped.Control_s(Mov_dir.For, 10, 0)
basic.forever(function () {
    Quadruped.Heartbeat()
})
