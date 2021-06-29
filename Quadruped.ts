





/**
 * Quadruped
 */
//% weight= 0 color=#0abcff icon="\uf207" block="Quadruped"
//% groups='["Set up","control"]'
namespace Quadruped {

    /**
     *TODO:SPI and data initialization before startup，No return value
     */
    //% group="Set up"
    //% blockGap=8
    //% blockId=Quadruped_init block="Quadruped init"
    export function init(): void {
        SPI_Init()
    }

    /**
    * TODO:Chassis feedback information, return hexadecimal number
    */
    //% group="control"
    //% blockGap=8
    //% blockId=Quadruped_Status block="Quadruped Status"
    export function Status(): number {
        return robot_mode;
    }

    /**
     *TODO:Control speed direction, angle reset (value is 0)
     */
    //% group="control"
    //% blockGap=8
    //% blockId=Quadruped_Reset block="Quadruped Reset"
    export function Reset(): void {
        rc_spd_cmd_X = 0.00 //x_speed
        rc_spd_cmd_y = 0.00 //y_speed
        rc_att_rate_cmd = 0.00 // Turn to speed
        rc_spd_cmd_z = 0.00 //Altitude speed
        //rc_pos_cmd = 0.00 //height
        rc_att_cmd_x = 0.00 //Pitch
        rc_att_cmd_y = 0.00 //Side swing
        rc_att_cmd = 0.00 //Heading
    }


    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% subcategory=sensor
    //% blockId=BitBot_Model block="bb"

    export function fib(value: number): number {
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }
}
