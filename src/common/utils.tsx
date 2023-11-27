export function getRandomIndex(max: number, min?: number): number {
    if (min) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
        return Math.floor(Math.random() * max);
    }
}

export function compareLastToFirst(array: Array<number>): boolean {
    return array[array.length-1] > array[0]
}