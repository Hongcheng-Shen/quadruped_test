//############Movement direction||运动方向
enum Mov_dir {
    //% block="Forward"
    For,
    //% block="Backward"
    Bac,
    //% block="Turn_left"
    Turn_l,
    //% block="Turn_right"
    Turn_r,
    //% block="Shift_left"
    Shift_l,
    //% block="Shift_right"
    Shift_r
}

//############Movement Angle||运动角度
enum Mov_ang {
    //% block="Left_swing"
    L_swing,
    //% block="Right_swing"
    R_swing,
    //% block="Look_down"
    Look_d,
    //% block="Look_up"
    Look_u,
    //% block="Yaw_left"
    Yaw_l,
    //% block="Yaw_right"
    Yaw_r
}

//############Movement gait||运动步态
enum gait {
    //% block="Trot"
    Trot,
    //% block="Run_fast"
    Run_fast,
    //% block="Crawl"
    Crawl
}