//% color=190 weight=100 icon="\uf25b" block="Roman Numerals"
//% groups=['LED matrix', 'others']
namespace roman {
    //% blockId=roman_show_number
    //% block="show|number %num"
    export function showNumber(num: number, interval: number = 150): void {
        basic.showString(Math.roundWithPrecision(num, 2).toString(), interval)
    }
}

basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `);