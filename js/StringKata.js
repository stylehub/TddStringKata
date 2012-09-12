var stringKata = {
    add: function (stringExpression, delimiter) {
        if (typeof (stringExpression) !== "string") {
            throw new Error("not string!");
        }
        var result = 0,
            digits = stringExpression.split(delimiter || ','),
            i;

        for (i = 0; i < digits.length; i++) {
            if (digits[i] !== '') {
                result += parseInt(digits[i], 10);
            }
        }

        return result;
    }
};