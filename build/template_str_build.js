'use strict';

var _templateObject = _taggedTemplateLiteral(['this is string ', ''], ['this is string ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Tool = require('../tool');

// notes: define back-tick as bt prefix

Tool.log('module', 'ES6 template literal string');
// ============== back-triks =====================
Tool.log('unit', 'Back-tick Basic');
var btTestContext = 'back-tick';

Tool.log('\nCONTEXT: \nvar btTestContext = \'back-tick\';\nthis is a test for ${btTestContext}\n\nRESULT:\nthis is a test for ' + btTestContext + '\n');

// ============== expression ======================
Tool.log('unit', 'Expression');
var btA = 12,
    btB = 12;

Tool.log('\nCONTEXT:\nvar btA = 12, btB = 12;\nbtA + btB is equal to ${btA} + ${btB} = ${btA + btB};\n\nRESULT:\nbtA + btB is equal to ' + btA + ' + ' + btB + ' = ' + (btA + btB) + ';\n');

// ================== use function  ======================
Tool.log('unit', 'use function');
var negativeNum = -12;

Tool.log('\nCONTEXT:\nvar negativeNum = -12;\nuse Math.abs fn ${Math.abs(negativeNum)}\n\nRESULT:\nuse Math.abs fn ' + Math.abs(negativeNum) + '\n');

// ============== tagged string ===================
Tool.log('unit', 'Tagged string');
var tag = function tag(strings) {
    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
    }

    var strings = strings.join('\n');
    var values = values.join('\n');

    // just todo something

    return '\nRESULT:\nstrings:\n' + strings + 'values:\n' + values + '\n';
};
var tagVarA = 12;

Tool.log('\nCONTEXT:\nvar tag = function(strings, ...values){\n    var strings = strings.join(\'\\n\');\n    var values = values.join(\'\\n\');\n\n    // just todo something\n\n    return \'\\nRESULT:\\nstrings:\\n\' + strings + \'values:\\n\' + values + \'\\n\';\n};\nvar tagVarA = 12;\n\nUSAGE:\ntag`this is string ${tagVarA}`\n');
Tool.log(tag(_templateObject, tagVarA));

// =================== raw string => strings.raw[0] ====================
Tool.log('unit', 'raw string => strings.raw[0]');
var rawStr = function rawStr(strings) {
    return '\nRESULT:\n' + strings.raw[0] + '\n';
};
var rawVar = 12;

Tool.log('\nCONTEXT:\nvar rawStr = function(strings, ...values){\n    return \'\\nRESULT:\\n\' + strings.raw[0] + \'\\n\'\n};\nvar rawVar = 12;\n\nUSAGE:\nrawStr`this is string ${rawVar}`\n\nNOTES:\nthe rawVar variable is not show!\n');
Tool.log(rawStr(_templateObject, rawVar));

// =================== raw string => Strings.raw`string` ====================
Tool.log('unit', 'raw string => String.raw');
var rawVar2 = 12;
Tool.log('\nCONTEXT:\nvar rawVar2 = 12;\n\nUSAGE:\nString.raw`this is string ${rawVar2}`\n\nNOTES:\nNot supported by node 0.12.7, String has not the raw method\nTested it in chrome45 is ok!\n');
// Tool.log(String.raw`this is string ${rawVar2}`);