module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) return false;
    let stack = [];
    let openBrackets = []
    let closeBrackets = []
    let bracketPair = {}

    for (let i = 0; i < bracketsConfig.length; i++) {
        openBrackets.push(bracketsConfig[i][0])
        closeBrackets.push(bracketsConfig[i][1])
        bracketPair[`${bracketsConfig[i][1]}`] = bracketsConfig[i][0]
    }

    for (let i = 0; i < str.length; i++) {
        let curSymbol = str[i];
        // Текущий символ строки содержится в массиве закрывающихся ковычек?
        if (closeBrackets.includes(curSymbol)) {
            //содержится. А он равен последнему элементу в стеке?
            if (stack[stack.length - 1] == curSymbol) {
                //равен. Тогда исключаем его из стека.
                stack.pop()
                // если пара для текущего символа равна последнему элементу в стеке - удалем его из стека
            } else if (bracketPair[curSymbol] === stack[stack.length - 1]) {
                //если стек пуст - ошибка
                if (stack.length === 0) false;
                // если нет - удаляем текущий символ из стека
                stack.pop()
            } else {
                //если не равна - добавляем в стек
                stack.push(curSymbol)
            }
        // не содержится, значит он открывающий, помещаем его в стек
        } else {
            stack.push(curSymbol)
        } 
    }

    return stack.length === 0;
}
