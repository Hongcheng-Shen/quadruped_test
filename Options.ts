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

//############Infrared||红外
enum obstacle_t{
    // block="Obstacle"
    Obstacle = 0,
    // block="No obstacle"
    No_Obstacle = 1

}

//############Human body induction||人体感应
enum obstacle_p {
    // block="Someone"
    Someone = 500,
    // block="unmanned"
    Unmanned = 0

}

//############gesture||手势
enum gesture{
   //% block="From left to right"
    right = 1,
    //% block="Right to left"
    left = 2,
    //% block="Bottom up"
    up = 4,
    //% block="From top to bottom"
    down = 8,
    //% block="Back to front"
    forward = 16,
    //% block="From front to back"
    backward = 32,
    //% block="Clockwise"
    clockwise = 64,
    //% block="Counterclockwise"
    count_clockwise = 128,
    //% block="Wave"
    wave = 256
    
}

//############Ultrasound||超声波
enum Unit{
    //% block="μs"
    MicroSeconds,
    //% block="cm"
    Centimeters,
    //% block="inches"
    Inches
}