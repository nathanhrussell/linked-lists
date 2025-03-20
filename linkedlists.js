class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    prepend(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }

        this.size++;
    }

    size() {
        return this.size;
    }

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }

    at(index) {
        if(index < 0 || index >= this.size) {
            return null;
        }

        let currentNode = this.head;
        let counter = 0;

        while (counter < index) {
            currentNode = currentNode.nextNode;
            counter++;
        }

        return currentNode;
    }

    pop() {
        if(!this.head) {
            return null;
        }

        if(this.size === 1) {
            const lastNode = this.head;
            this.head = null;
            this.tail = null;
            this.size--;
            return lastNode;
        }

        let currentNode = this.head;
        let previousNode = null;

        while (currentNode.nextNode) {
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
        }

        previousNode.nextNode = null;
        this.tail = previousNode;
        this.size--;

        return currentNode;
    }

    contains(value) {
        let currentNode = this.head;

        while(currentNode) {
            if (currentNode.value === value) {
                return true;
            }

            currentNode = currentNode.nextNode;
        }

        return false;
    }

    find(value) {
        let currentNode = this.head;
        let index = 0;

        while (currentNode) {
            if (currentNode.value === value) {
                return index;
            }
            currentNode = currentNode.nextNode;
            index++;
        }

        return null;
    }


}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}