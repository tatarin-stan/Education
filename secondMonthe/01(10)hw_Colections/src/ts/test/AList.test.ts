import {AList} from "../AList";

const aList = new AList()

    aList.add(5);
    aList.add(25);
    aList.add(55);
    aList.add(99);

describe('AList tests', () => {
    test('tests-1', () => {
        expect(aList.contains(10)).toEqual(true)
    })
    test('tests-2', () => {
        expect(aList.contains(11)).toEqual(false)
    })
    test('tests-3)', () => {
        expect(aList.get(2)).toEqual(15)
    })
    test('tests-4', () => {
        expect(aList.getSize()).toEqual(4)
    })
    test('tests-5', () => {
        expect(aList.print()).toEqual([5,10,15,20])
    })
    test('tests-6', () => {
        expect(aList.minIndex()).toEqual(0)
    })
    test('tests-7', () => {
        expect(aList.maxIndex()).toEqual(3)
    })
    test('tests-8', () => {
        expect(aList.maxValue()).toEqual(20)
    })
    test('tests-9', () => {
        expect(aList.minValue()).toEqual(5)
    })
    test('tests-10', () => {
        expect(aList.retainAll([5,10,15,20])).toEqual([5,10,15, 20])
    })
    test('tests-11', () => {
        expect(aList.reverse()).toEqual([20,15,10,5])
    })
    test('tests-12', () => {
        expect(aList.halfReverse()).toEqual([15,20,5,10])
    })
    test('tests-13', () => {
        expect(aList.toArray()).toEqual([5,10,15,20])
    })
    test('tests-14', () => {
        expect(aList.toString()).toEqual('5101520')
    })
    test('tests-15', () => {
        aList.add(4);
        aList.add(8);
        expect(aList.sort()).toEqual([4,5,8,10,15,20])
    })
    test('tests-16', () => {
        expect(aList.set(4,0)).toEqual([4,5,8,10,15,20])
    })
    test('tests-17', () => {
        expect(aList.set(5,-1)).toEqual([4,5,8,10,15,20])
    })
    test('tests-18', () => {
        expect(aList.removeAll([5])).toEqual([4,undefined,8,10,15,20])
    })
    test('tests-19', () => {
        expect(aList.remove(10)).toEqual(10)
    })
    test('tests-20', () => {
        expect(aList.clear()).toEqual([])
    })
})