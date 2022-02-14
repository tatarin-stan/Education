import { IList } from "./types";

export class AList implements IList{
    private array: number[];
    private size: number;
    constructor() {
        this.array = [];
        this.size = 0;
    }

    clear(): void{
        this.array.length = 0;
        this.size = 0;
    };

    getSize(): number{
        this.size = this.array.length;
        return this.size;
    };

    add(item: any): void{
        this.array[this.size] = item;
        this.size++;
    };

    set(item, index: number): number[] {
        const arr = this.array;
        this.array = [];
        this.size = 0;

        if(index < 0) {
            console.log(false);
        }
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            if (i === index) {
                this.add(item);
            } else {
                this.add(element);
            }
        }
        return this.array;
    }

    get(index: number): number {
        return this.array[index];
    }

    remove(item: any): void{
        for (let i = 0; i < this.array.length; i++){
            if (this.array[i] === item) {
                this.array[i] = undefined;
                this.size--;
                return item;
            }
        }
    };

    toArray(): number[]{
        return this.array;
    };

    toString(): string{
        let result = ``;
        for (const i of this.array) {
            result = `${result} ${i}`;
        }
        return result;
    };

    contains(item): boolean {
        for (let i = 0; i < this.size; i++) {
            const element = this.array[i];
            if (element === item) {
                return true;
            }
        }
        return false;
    }

    minValue(): number{
        let min = this.array[0];
        for (const k of this.array) {
            if (min > k) {
                min = k;
            }
        }
        return min;
    };

    maxValue(): number{
        let max = this.array[0];
        for (const k of this.array) {
            if (max < k) {
                max = k;
            }
        }
        return max;
    };

    minIndex(): number{
        let index = 0;
        let min = this.array[0];
        for (let i = 0; i < this.array.length; i++){
            if (min > this.array[i]) {
                min = this.array[i];
                index = i;
            }
        }
        return index;
    };

    maxIndex(): number{
        let index = 0;
        let max = this.array[0];
        for (let i = 0; i < this.array.length; i++){
            if (max < this.array[i]) {
                max = this.array[i];
                index = i;
            }
        }
        return index;
    };

    reverse(): void{
        let newArray = [];
        for (let i = 0; i < this.array.length; i++){
            newArray[i] = this.array[(this.array.length - 1) - i];
        }
        this.array = newArray;
    };

    halfReverse(): void{
        let halfFirst = Math.floor(this.array.length / 2);
        let halfSecond = this.array.length - halfFirst;
        let newArray = [];
        for (let i = 0; i < halfSecond; i++) {
            newArray[i] = this.array[i + halfFirst];
        }
        for (let i = 0; i < halfFirst; i++) {
            newArray[i + halfSecond] = this.array[i];
        }
        this.array = newArray;
    };

    retainAll(items: number[]): void{
        for (let i = 0; i < this.array.length; i++) {
            let deleteValue = false;
            for (let j = 0; j < items.length; j++) {
                if (this.array[i] === items[j]) {
                    deleteValue = true;
                    break;
                }
            }
            if (!deleteValue) {
                this.array[i] = undefined;
                this.size--;
            }
        }
    };

    removeAll(items: number[]): void{
        for (let i = 0; i < this.array.length; i++) {
            let deleteValue = true;
            for (let j = 0; j < items.length; j++) {
                if (this.array[i] === items[j]) {
                    deleteValue = false;
                    break;
                }
            }
            if (!deleteValue) {
                this.array[i] = undefined;
                this.size--;
            }
        }
    };

    sort(): void{
        const arrayAnswer: number[] = mergeSort(this.array);

        function merge(left, right) {
            let arr = [];
            while (left.length && right.length) {
                if (left[0] < right[0]) {
                    arr.push(left.shift());
                } else {
                    arr.push(right.shift());
                }
            }
            return [ ...arr, ...left, ...right ]
        }

        function mergeSort(arr): number[]{
            const half = arr.length / 2;
            if(arr.length < 2){
                return arr;
            }
            const left = arr.splice(0, half);
            return merge(mergeSort(left), mergeSort(arr));
        }

        this.array = arrayAnswer;
    };

    print(): string{

        let str = '';
        for(var i = 0; i < this.array.length; i++){
            if (this.array[i] !== undefined) {
                str = `${str} ${this.array[i]}`;
            }
        }
        return str.trim();
    };
}

module.exports = { AList }