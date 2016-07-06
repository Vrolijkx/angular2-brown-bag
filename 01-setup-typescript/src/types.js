//Show enums
var TestEnum;
(function (TestEnum) {
    TestEnum[TestEnum["JAN"] = 0] = "JAN";
    TestEnum[TestEnum["RONNY"] = 1] = "RONNY";
    TestEnum[TestEnum["WALTER"] = 2] = "WALTER";
})(TestEnum || (TestEnum = {}));
//Show multiple types example type
function checkIfOk(value) {
    return value.length > 20;
}
checkIfOk('kristof geeft demo');
checkIfOk([3, 4, 58, 8]);
function registerListener(l) {
    l('selected');
}
registerListener(function (s) { return console.log("feest"); });
