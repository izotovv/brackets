module.exports = function check(str, bracketsConfig) {
    if(str == null) {
        return false;
    }

    let stack = [];
    let openIndex;
    let closeIndex;
    let open = bracketsConfig.map(x => x[0]);
    let close = bracketsConfig.map(x => x[1]);
    let strArr = str.split('');

    stack.push(strArr[0]);

    for (let i = 1; i < strArr.length; i++)
    {
        openIndex = open.indexOf(strArr[i]);
        closeIndex = close.indexOf(strArr[i]);

        if (closeIndex >= 0 && openIndex < 0)
        {
            if (stack.length > 0 &&
                stack[stack.length - 1] == open[closeIndex])
            {
                stack.pop();
                continue;
            }

            return false;
        }
        else if (closeIndex < 0 && openIndex >= 0)
        {
            stack.push(strArr[i]);
        }
        else if (closeIndex >= 0 && openIndex >= 0)
        {
            if (stack.length > 0 &&
                stack[stack.length - 1] == open[closeIndex])
            {
                stack.pop();
                continue;
            }
            else {
                stack.push(strArr[i]);
            }
        } else
            return false;
    }

    if (stack.length !== 0) {
        return false;
    }

    return true;
}
