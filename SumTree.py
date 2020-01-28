# your task is to complete this function
# function should return True is Tree is SumTree else return False


def isSumTreeImpl(root):
    sumleft = 0
    sumright = 0
    if(root == None or (root.left == None and root.right == None)):
        return 1
    total = root.left.data + root.right.data
    if(root.data == total and (isSumTreeImpl(root.left) and isSumTreeImpl(root.right))):
        return 1
    return 0

def isSumTree(root):
    return isSumTreeImpl(root)

class Node:
    def __init__(self, val):
        self.right = None
        self.data = val
        self.left = None
class Tree:
    def createNode(self, data):
        return Node(data)
    def insert(self, node, data, ch):
        if node is None:
            return self.createNode(data)
        if (ch == 'L'):
            node.left = self.insert(node.left, data, ch)
            return node.left
        else:
            node.right = self.insert(node.right, data, ch)
            return node.right
    def search(self, lis, data):
        # if root is None or root is the search data.
        for i in lis:
            if i.data == data:
                return i
# Driver Program
if __name__=='__main__':
    t=int(input())
    for i in range(t):
        n=int(input())
        arr = input().strip().split()
        if n ==0:
            print(1)
            continue
        tree = Tree()
        lis=[]
        root = None
        root = tree.insert(root, int(arr[0]), 'L')
        lis.append(root)
        k=0
        for j in range(n):
            ptr = None
            ptr = tree.search(lis, int(arr[k]))
            lis.append(tree.insert(ptr, int(arr[k+1]), arr[k+2]))
            k+=3
        if isSumTree(root):
            print(1)
        else:
            print(0)
# Contributed by: Harshit Sidhwa

''' Please note that it's Function problem i.e.
you need to write your solution in the form of Function(s) only.
Driver Code to call/invoke your function is mentioned above. '''

'''
class Node:
    def __init__(self, val):
        self.right = None
        self.data = val
        self.left = None
'''
