//定时调度的id
var intervalID;
var tree;


window.onload = function () {
	initBSt();
};



//初始化，为二叉树添加数据，为按钮绑定监听事件

function initBst () {
	tree = new Tree(8);
	tree.add(1, 8, tree.traverseDF);
	tree.add(5, 8, tree.traverseDF);
	tree.add(4, 8, tree.traverseDF);
	tree.add(2, 1, tree.traverseDF);
	tree.add(3, 1, tree.traverseDF);
	tree.add(6, 1, tree.traverseDF);
	tree.add(12, 1, tree.traverseDF);
	tree.add(14, 1, tree.traverseDF);
	tree.add(7, 5, tree.traverseDF);
	tree.add(9, 5, tree.traverseDF);
	tree.add(11, 5, tree.traverseDF);
	tree.add(10, 4, tree.traverseDF);
	tree.add(13, 4, tree.traverseDF);
	tree.add(15, 8, tree.traverseDF);
	createDOM(tree);
	showTraverse(tree);
}