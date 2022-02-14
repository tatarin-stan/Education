import { ITree } from "./types";

class Node{
    value: number;
    left: null | Node;
    right: null | Node;
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null
    }
}

export class BST implements ITree{
    root: null | Node;
    constructor() {
        this.root = null;
    }

    init(array: any): void{
        if (!Array.isArray(array)) {
            return;
        }
        for (let i = 0; i < array.length; i++){
            this.insert(array[i]);
        }
    };

    clear(): void{
        this.root = null;
    };

    size(): number{
        const array = this.toArray();
        return array.length;
    };
    insertN(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertN(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertN(node.right, newNode);
            }
        }
    };

    insert(value: any): void{
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertN(this.root, newNode);
        }
    };

    print(node: any, callback: (arg0: Node) => void): void {
        callback(this.root);
    }

    toArrayRecurse(node) {
        let array = [];
        if (node.left !== null) {
            array.push(...this.toArrayRecurse(node.left));
        }

        array.push(node.value);

        if (node.right !== null) {
            array.push(...this.toArrayRecurse(node.right));
        }
        return array;

    };

    toArray(): number[]{
        return this.toArrayRecurse(this.root);
    };

    search(value): any {
        let current = this.root;

        if (current === null) {
            return undefined;
        }

        while(current) {
            if (current.value === value) {
                return current.value;
            }
            if (current.value > value) {
                current = current.left;
            }
            if (current.value < value) {
                current = current.right;
            }
        }

        return undefined;
    }

    widthHelper(node, level) {
        if (node === null) {
            return 0;
        }

        if(level === 1){
            return 1;
        }

        return this.widthHelper(node.left,level - 1) + this.widthHelper(node.right, level - 1);
    };

    width(): number{
        if (!this.root) {
            return -1;
        }

        let max = 0;

        for (let i = 0; i <= this.height(); i++) {
            let temp = this.widthHelper(this.root, i);
            max = Math.max(temp, max);
        }

        return max;
    };

    heightHelper(node, result) {
        if (node.left === null && node.right === null) {
            return result;
        }

        if (node.left !== null && node.right === null) {
            return this.heightHelper(node.left, result + 1);
        }

        if (node.left === null && node.right !== null) {
            return this.heightHelper(node.right, result + 1);
        }

        return Math.max(this.heightHelper(node.right, result + 1), this.heightHelper(node.left, result + 1));
    };

    height(): number{
        if(!this.root){
            return -1;
        }

        return this.heightHelper(this.root, 1);
    };

    nodes(): number{
        if (!this.root) {
            return -1;
        }

        return this.size() - this.leaves();
    };

    helperLeaves(node): any{
        if (node.left === null && node.right === null) {
            return 1;
        }

        return this.helperLeaves(node.left) + this.helperLeaves(node.right);
    };

    leaves(): number{
        if (!this.root) {
            return -1;
        }

        return this.helperLeaves(this.root);
    };

    helperReverse(node: any) {
        let tempNode = node.right;
        node.right = node.left;
        node.left = tempNode;

        if (node.left !== null) {
            this.helperReverse(node.left);
        }

        if (node.right !== null) {
            this.helperReverse(node.right);
        }
    };

    reverse(): any{
        this.helperReverse(this.root);
    };

    minNode(): any{
        if (!this.root) {
            return -1;
        }

        let current = this.root;

        while (current.left !== null) {
            current = current.left;
        }

        return current;
    };

    maxNode(): any{
        if (!this.root) {
            return -1;
        }

        let current = this.root;

        while (current.right !== null) {
            current = current.right;
        }

        return current;
    };

    MinNode(node) {
        if (!node.left) {
            return node;
        }

        return this.MinNode(node.left);
    };

    removeHelper(node: any, value: any) {
        if (value < node.value) {
            node.left = this.removeHelper(node.left, value)
            return node;
        } else if(value > node.value){
            node.right = this.removeHelper(node.right, value)
            return node;
        } else {

            if(node.left === null && node.right === null){
                node = null;
                return node;
            } else if(node.left === null){
                node = node.right;
                return node;
            } else if(node.right === null){
                node = node.left;
                return node;
            }

            let temp = this.MinNode(node.right);
            node.value = temp.value;
            node.right = this.removeHelper(node.right, temp.value);

            return node;
        }
    };

    remove(value): any{
        if (!this.root) {
            return -1;
        }
        this.root = this.removeHelper(this.root, value);
    };

}