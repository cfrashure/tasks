/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const new_array: number[] = [];
    if (numbers.length === 0) {
        return new_array;
    } else if (numbers.length === 1) {
        new_array.push(numbers[0], numbers[0]);
    } else {
        new_array.push(numbers[0], numbers[numbers.length - 1]);
    }
    return new_array;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triple = numbers.map((price: number): number => price * 3);
    return triple;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let s: number[] = [];
    s = numbers.map((x: string): number => (parseInt(x) ? parseInt(x) : 0));
    return s;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const no_dollar = amounts.map((x: string): string =>
        x.includes("$") ? x.slice(1) : x
    );
    const s = no_dollar.map((x: string): number =>
        parseInt(x) ? parseInt(x) : 0
    );
    return s;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const slice_q = messages.filter((x: string): boolean => !x.includes("?"));
    const shout = slice_q.map((x: string): string =>
        x.includes("!") ? x.toUpperCase() : x
    );
    return shout;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shorts = words.filter((x: string): boolean => x.length < 4);
    return shorts.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const allRGBList = colors.every(
        (x: string): boolean => x === "red" || x === "green" || x === "blue"
    );
    return allRGBList;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    return sum + "=" + addends.join("+");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const final_array: number[] = [...values];
    const neg_index = values.findIndex((x: number): boolean => x < 0);
    if (neg_index === -1) {
        const sum = final_array.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        final_array.push(sum);
    } else {
        const pre_splice = [...values];
        pre_splice.splice(neg_index, values.length - neg_index);
        const sum = pre_splice.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        final_array.splice(neg_index + 1, 0, sum);
    }
    return final_array;
}
