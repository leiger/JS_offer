// 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。
// 假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。
// （注意：这两个序列的长度是相等的）

// 思路：新建一个辅助栈模拟入栈出栈过程

function isPopOrder(pushV, popV) {
    if(pushV.length <= 0) {
        return false;
    }

    let temp = [],
    popIndex = 0;

    for(let i = 0; i < pushV.length; i++) {
        temp.push(push[i]);
        while(temp.length > 0 && temp[temp.length - 1] === popV[popIndex]) {
            popIndex++;
            temp.pop();
        }
    }

    if(temp.length === 0) {
        return true;
    }
    else {
        return false;
    }
}