class Node {

    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

}


class BinaryTree {

    constructor() {
        this.root = null
        this.route = []
    }

    add(value) {
        this.root = this._add(this.root, value)
    }

    _add(node, value) {
        if (node === null) {
            return new Node(value)
        }

        if (value <= node.value) {
            node.left = this._add(node.left, value)
        }
        else {
            node.right = this._add(node.right, value)
        }
        return node
    }

    inorder() {
        this.route = []
        this._inorder(this.root)
        return this.route
    }

    _inorder(node) {
        if (node !== null) {
            if (this._inorder(node.left)){
                return true
            }
            this.route.push(node.value)
            if (this._inorder(node.right)){
                return true
            }
        }
        return false
    }

    preorder() {
        this.route = []
        this._preorder(this.root)
        return this.route
    }

    _preorder(node){
        if (node !== null){
            this.route.push(node.value)
            if (this._preorder(node.left)) {
                return true
            }
            if (this._preorder(node.right)) {
                return true
            }
        }
        return false
    }

    posorder() {
        this.route = []
        this._posorder(this.root)
        return this.route
    }

    _posorder(node){
        if (node !== null) {
            if (this._posorder(node.left)) {
                return true
            }
            if (this._posorder(node.right)) {
                return true
            }
            this.route.push(node.value)
        }
        return false
    }

    

}

module.exports = {
    BinaryTree
}