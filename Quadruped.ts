

/**
 * robot blocks
 */
//% weight= 0 color=#0abcff icon="\uf207" block="Robot"
//% groups='["Positional","Advanced"]'
namespace Robot {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% groups="Positional"
    //% blockGap=8
    //% blockId=Robot_init block="go straight at full speed"
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
    //% groups="Advanced"
    //% blockGap=8
    //% blockId=Robot_aa block="aa"
    export function aa(): void {
        let i = 0
        // Add code here
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    //% subcategory = BitBot_Model

    export function fib(value: number): number {
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }
}
