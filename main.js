const BinaryTreeFile = require('./BinaryTree')
const BinaryTree = BinaryTreeFile.BinaryTree

const tree = new BinaryTree()

tree.add('F')
tree.add('B')
tree.add('A')
tree.add('D')
tree.add('C')
tree.add('E')
tree.add('G')
tree.add('I')
tree.add('H')

console.log('Pre orden:', tree.preorder())
console.log('En  orden:', tree.inorder())
console.log('Pos orden:', tree.posorder())