// 定义栈的数据结构
// 请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））

// 思路：用一个辅助栈保存最小值
class Stack {
    constructor() {
        this.item = [];
        this.minItem = [];
    }

    push(val) {
        this.item.push(val);
        if(this.minItem.length <= 0 || this.minItem[this.minItem.length-1] > val) {
            this.minItem.push(val);
        }
        else {
            this.minItem.push(this.minItem[this.minItem.length-1]);
        }
    }

    pop() {
        if(this.item.length > 0) {
            this.minItem.pop();
            return this.item.pop();
        }
        else {
            throw new Error("Stack is empty");
        }
    }

    min() {
        if(this.minItem.length <= 0) {
            throw new Error("Stack is empty");
        }
        return this.minItem[this.minItem.length-1];
    }
 }

 let stack1 = new Stack();
 stack1.push(5);
 stack1.push(4);
 stack1.push(6);
 console.log(stack1);
 console.log(stack1.min());
 console.log(stack1);
 console.log(stack1.pop());
 console.log(stack1);