function arabicToRoman(num: number): string {
    let arabic: number = num;
    let result = "";
    let numb: number = 0;

    // Converter source based on:
    // http://csharphelper.com/blog/2016/04/convert-to-and-from-roman-numerals-in-c/
    let thouLetters: string[] = ["", "M", "MM", "MMM"];
    let hundLetters: string[] = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    let tensLetters: string[] = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    let onesLetters: string[] = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    if (arabic >= 4000) {
        // Use parentheses.
        let thou: number = Math.idiv(arabic, 1000);
        arabic %= 1000;
        return "(" + arabicToRoman(thou) + ")" +
            arabicToRoman(arabic);
    }

    numb = Math.idiv(arabic, 1000);
    result += thouLetters[numb];
    arabic %= 1000;

    numb = Math.idiv(arabic, 100);
    result += hundLetters[numb];
    arabic %= 100;

    numb = Math.idiv(arabic, 10);
    result += tensLetters[numb];
    arabic %= 10;

    result += onesLetters[arabic];
    return result;
}

//% color=190 weight=100 icon="\uf25b" block="Roman Numerals"
//% groups=['LED matrix', 'others']
namespace roman {
    //% blockId=roman_show_number
    //% block="show|number %num"
    export function showNumber(num: number, interval: number = 150): void {
        basic.showString(arabicToRoman(num), interval);
    }
}
