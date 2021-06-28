

/**
 * robot blocks
 */
//% weight= 0 color=#0abcff icon="\uf207" block="Quadruped"
//% groups='["control","Advanced"]'
namespace Quadruped {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% group="control"
    //% blockGap=8
    //% blockId=Quadruped_init block="Quadruped init"
    export function init(): void {
        let i = 0
        // Add code here
    }
    /**
    * TODO: describe your function here
     * @param n describe parameter here, eg: 5
    * @param s describe parameter here, eg: "Hello"
    * @param e describe parameter here
    */
    //% group="Advanced"
    //% blockGap=8
    //% blockId=Quadruped_aa block="aa"
    export function aa(): void {
        let i = 0
        // Add code here
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
