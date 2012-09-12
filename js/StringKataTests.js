test(
    'object exists',
    function () {
        equal(
            typeof (window.stringKata),
            'object',
            "object exists"
            );
    }
);

test(
    'has add function',
    function () {
        equal(
            typeof (window.stringKata.add),
            'function',
            "add function exists"
        );
    }
);

test(
    'if gets empty string returns zero',
    function () {
        strictEqual(
            stringKata.add(''),
            0,
            "return zero"
        );
    }
);

test(
    'if gets string, returns int',
    function () {
        strictEqual(
            stringKata.add('5'),
            5,
            "returns 5"
        );

        strictEqual(
            stringKata.add('123456789'),
            123456789,
            "returns 123456789"
        );

        strictEqual(
            stringKata.add('666'),
            666,
            "returns 666"
        );

        strictEqual(
            stringKata.add('0'),
            0,
            "returns 0"
        );
    }
);

test(
    "throws",
    function () {
        try {
            stringKata.add(234);
            ok(
                false,
                "NO exception thown, exception excepted"
            );
        } catch (e) {
            ok(
                true,
                "exception thown, good result"
            );
        }
    }
);

test(
    "sum two number",
    function () {
        strictEqual(
            stringKata.add('10,5'),
            15,
            'return 15'
        );
        strictEqual(
            stringKata.add('0,0'),
            0,
            'return 0'
        );
        strictEqual(
            stringKata.add('60,5'),
            65,
            'return 65'
        );
        strictEqual(
            stringKata.add('0,1'),
            1,
            'return 1'
        );
    }
);

test(
    "delimiter changable",
    function () {
        strictEqual(
            stringKata.add('10.5', '.'),
            15,
            'return 15'
        );
        strictEqual(
            stringKata.add('0sajt0sajt0', 'sajt'),
            0,
            'return 0'
        );
        strictEqual(
            stringKata.add('6,5', ','),
            11,
            'return 11'
        );
        strictEqual(
            stringKata.add('0/1/5', '/'),
            6,
            'return 6'
        );
        strictEqual(
            stringKata.add('0+1+1+1+1+1+1+1+5', '+'),
            12,
            'return 12'
        );
    }
);