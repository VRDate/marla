/* parser generated by jison 0.4.15 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,6],$V1=[5,9],$V2=[2,9],$V3=[1,13],$V4=[1,18],$V5=[10,49],$V6=[10,12,15],$V7=[1,28],$V8=[1,27],$V9=[1,31],$Va=[1,34],$Vb=[1,32],$Vc=[1,33],$Vd=[1,35],$Ve=[1,36],$Vf=[5,9,10,20,25],$Vg=[1,40],$Vh=[10,12,15,20,23,25,28,29,34,40,43,44,45,48],$Vi=[1,56],$Vj=[10,12,20,23,25,28,29,34,40,43,44],$Vk=[28,34],$Vl=[1,71],$Vm=[1,70],$Vn=[15,23,34],$Vo=[23,34],$Vp=[10,20,25],$Vq=[1,98];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"module":3,"module_item_list":4,"EOF":5,"module_item":6,"type_decl":7,"module_binding":8,"LF":9,"IDENTIFIER":10,"olws":11,"=":12,"expr":13,"param_list":14,"LWS":15,"TYPE":16,"NOTIMPL":17,"INDENT":18,"type_members":19,"OUTDENT":20,"<":21,"type_params":22,">":23,"type_member":24,"|":25,"(":26,"type_case_data_list":27,")":28,":":29,"typeref":30,"param":31,"primary_typeref":32,"type_case_data":33,",":34,"type_param":35,"SQ":36,"fun_typeref":37,"type_args":38,"{":39,"}":40,"tuple_type_args":41,"[":42,"]":43,"\\":44,"?":45,"tuple_type_arg":46,"type_arg":47,"ARROW":48,"INT":49,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"LF",10:"IDENTIFIER",12:"=",15:"LWS",16:"TYPE",17:"NOTIMPL",18:"INDENT",20:"OUTDENT",21:"<",23:">",25:"|",26:"(",28:")",29:":",34:",",36:"SQ",39:"{",40:"}",42:"[",43:"]",44:"\\",45:"?",48:"ARROW",49:"INT"},
productions_: [0,[3,2],[6,1],[6,1],[4,1],[4,2],[8,6],[8,8],[11,1],[11,0],[7,8],[7,10],[7,16],[19,1],[19,2],[24,2],[24,5],[24,4],[24,3],[24,5],[24,3],[24,4],[14,1],[14,2],[31,1],[31,3],[27,1],[27,3],[33,3],[35,2],[22,1],[22,3],[30,1],[32,1],[32,4],[32,2],[32,5],[32,3],[32,3],[32,3],[32,3],[32,2],[32,2],[41,1],[41,3],[46,1],[38,1],[38,3],[47,1],[37,1],[37,3],[13,1],[13,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return $$[$0-1];
break;
case 2: case 45: case 48: case 49:
this.$=$$[$0];
break;
case 4: case 13: case 22: case 26: case 30: case 43: case 46:
this.$=[$$[$0]];
break;
case 5: case 14: case 23:
$$[$0-1].push($$[$0]);this.$=$$[$0-1];
break;
case 10:
this.$=new ast.TypeDecl($$[$0-6],[],[]);
break;
case 11:
this.$=new ast.TypeDecl($$[$0-8],[],$$[$0-6]);
break;
case 12:
this.$=new ast.TypeDecl($$[$0-14],$$[$0-12],$$[$0-9]);
break;
case 15:
this.$=new ast.CaseTypeDeclMember($$[$0], []);
break;
case 16:
this.$=new ast.CaseTypeDeclMember($$[$0-3], $$[$0-1]);
break;
case 17:
this.$=new ast.CaseTypeDeclMember($$[$0-2], []);
break;
case 18: case 28:
this.$=new ast.DataTypeDeclMember($$[$0-2],$$[$0],null);
break;
case 19:
this.$=new ast.DataTypeDeclMember($$[$0-4],$$[$0-2],$$[$0]);
break;
case 20:
this.$=new ast.DataTypeDeclMember($$[$0-2],null,$$[$0]);
break;
case 21:
this.$=new ast.MethodTypeDeclMember($$[$0-3],$$[$0-2],$$[$0]);
break;
case 27: case 31: case 44: case 47:
$$[$0-2].push($$[$0]);this.$=$$[$0-2];
break;
case 29:
this.$="'"+$$[$0];
break;
case 33:
this.$=new ast.NamedTyperef($$[$0],[]);
break;
case 34:
this.$=new ast.NamedTyperef($$[$0-3],$$[$0-1]);
break;
case 35:
this.$=new ast.NamedTyperef("'"+$$[$0],[]);
break;
case 36:
this.$=new ast.NamedTyperef("Map", [$$[$0-3],$$[$0-1]]);
break;
case 37:
this.$=new ast.NamedTyperef("Tuple", $$[$0-1]);
break;
case 38:
this.$=new ast.NamedTyperef("Array", [$$[$0-1]]);
break;
case 39:
this.$=new ast.NamedTyperef("Set", [$$[$0-1]]);
break;
case 40:
this.$=new ast.NamedTyperef("Seq", [$$[$0-1]]);
break;
case 41:
this.$=new ast.UnitTyperef();
break;
case 42:
this.$=new ast.NamedTyperef("Option", [$$[$0-1]]);
break;
case 50:
this.$=new ast.NamedTyperef("Fun", [$$[$0-2],$$[$0]]);
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,9:$V0},{1:[3]},{5:[1,7],6:8,7:4,8:5,9:$V0},o($V1,[2,4]),o($V1,[2,2]),o($V1,[2,3]),{10:[1,10],16:[1,9]},{1:[2,1]},o($V1,[2,5]),{15:[1,11]},o([10,12],$V2,{11:12,15:$V3}),{10:[1,14]},{10:$V4,12:[1,15],14:16,31:17},o([10,12,17,18,21,23,36,49],[2,8]),o([12,21],$V2,{11:19,15:$V3}),o($V5,$V2,{11:20,15:$V3}),{10:$V4,11:21,12:$V2,15:$V3,31:22},o($V6,[2,22]),o($V6,[2,24],{29:[1,23]}),{12:[1,24],21:[1,25]},{10:$V7,13:26,49:$V8},{12:[1,29]},o($V6,[2,23]),{10:$V9,26:$Va,32:30,36:$Vb,39:$Vc,42:$Vd,44:$Ve},o([17,18],$V2,{11:37,15:$V3}),{11:38,15:$V3,36:$V2},o($V1,[2,6]),o($Vf,[2,51]),o($Vf,[2,52]),o($V5,$V2,{11:39,15:$V3}),o($V6,[2,25],{45:$Vg}),o($Vh,[2,33],{21:[1,41]}),{10:[1,42]},{10:$V9,26:$Va,30:43,32:45,36:$Vb,37:44,39:$Vc,42:$Vd,44:$Ve},{10:$V9,26:$Va,28:[1,47],30:49,32:45,36:$Vb,37:44,39:$Vc,41:46,42:$Vd,44:$Ve,46:48},{10:$V9,26:$Va,30:50,32:45,36:$Vb,37:44,39:$Vc,42:$Vd,44:$Ve},{10:$V9,26:$Va,30:51,32:45,36:$Vb,37:44,39:$Vc,42:$Vd,44:$Ve},{17:[1,52],18:[1,53]},{22:54,35:55,36:$Vi},{10:$V7,13:57,49:$V8},o($Vh,[2,42]),{10:$V9,26:$Va,30:60,32:45,36:$Vb,37:44,38:58,39:$Vc,42:$Vd,44:$Ve,47:59},o($Vh,[2,35]),{29:[1,61],40:[1,62]},o($Vj,[2,32]),o($Vj,[2,49],{45:$Vg,48:[1,63]}),{28:[1,64],34:[1,65]},o($Vh,[2,41]),o($Vk,[2,43]),o($Vk,[2,45]),{43:[1,66]},{44:[1,67]},o($V1,[2,10]),{10:$Vl,19:68,24:69,25:$Vm},{11:72,15:$V3,23:$V2,34:[1,73]},o($Vn,[2,30]),{10:[1,74]},o($V1,[2,7]),{23:[1,75],34:[1,76]},o($Vo,[2,46]),o($Vo,[2,48]),{10:$V9,26:$Va,30:77,32:45,36:$Vb,37:44,39:$Vc,42:$Vd,44:$Ve},o($Vh,[2,39]),{10:$V9,26:$Va,32:78,36:$Vb,39:$Vc,42:$Vd,44:$Ve},o($Vh,[2,37]),{10:$V9,26:$Va,30:49,32:45,36:$Vb,37:44,39:$Vc,42:$Vd,44:$Ve,46:79},o($Vh,[2,38]),o($Vh,[2,40]),{10:$Vl,20:[1,80],24:81,25:$Vm},o($Vp,[2,13]),{10:[1,82]},{10:$V4,12:[1,84],14:85,29:[1,83],31:17},{23:[1,86]},{35:87,36:$Vi},o($Vn,[2,29]),o($Vh,[2,34]),{10:$V9,26:$Va,30:60,32:45,36:$Vb,37:44,39:$Vc,42:$Vd,44:$Ve,47:88},{40:[1,89]},o($Vj,[2,50],{45:$Vg}),o($Vk,[2,44]),o($V1,[2,11]),o($Vp,[2,14]),o($Vp,[2,15],{26:[1,90]}),{10:$V9,26:$Va,30:91,32:45,36:$Vb,37:44,39:$Vc,42:$Vd,44:$Ve},{10:$V7,13:92,49:$V8},{10:$V4,12:[1,93],31:22},{11:94,12:$V2,15:$V3},o($Vn,[2,31]),o($Vo,[2,47]),o($Vh,[2,36]),{10:$Vq,27:95,28:[1,96],33:97},o($Vp,[2,18],{12:[1,99]}),o($Vp,[2,20]),{10:$V7,13:100,49:$V8},{12:[1,101]},{28:[1,102],34:[1,103]},o($Vp,[2,17]),o($Vk,[2,26]),{29:[1,104]},{10:$V7,13:105,49:$V8},o($Vp,[2,21]),{11:106,15:$V3,18:$V2},o($Vp,[2,16]),{10:$Vq,33:107},{10:$V9,26:$Va,32:108,36:$Vb,39:$Vc,42:$Vd,44:$Ve},o($Vp,[2,19]),{18:[1,109]},o($Vk,[2,27]),o($Vk,[2,28],{45:$Vg}),{10:$Vl,19:110,24:69,25:$Vm},{10:$Vl,20:[1,111],24:81,25:$Vm},o($V1,[2,12])],
defaultActions: {7:[2,1]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        function lex() {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

var ast = require("../marla/ast");
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip line comment */
break;
case 1:return 15
break;
case 2:return 9
break;
case 3:return 20
break;
case 4:return 18
break;
case 5:return 17
break;
case 6:return 16
break;
case 7:return 'IF'
break;
case 8:return 'ELSE'
break;
case 9:return 'WHERE'
break;
case 10:return 48
break;
case 11:return 49
break;
case 12:return 'FLOAT'
break;
case 13:return 10
break;
case 14:return '*'
break;
case 15:return '/'
break;
case 16:return '-'
break;
case 17:return '+'
break;
case 18:return '^'
break;
case 19:return 12
break;
case 20:return 26
break;
case 21:return 28
break;
case 22:return 21
break;
case 23:return 23
break;
case 24:return 39
break;
case 25:return 40
break;
case 26:return 42
break;
case 27:return 43
break;
case 28:return '\\'
break;
case 29:return 29
break;
case 30:return 25
break;
case 31:return 34
break;
case 32:return 45
break;
case 33:return 36
break;
case 34:return 5
break;
case 35:return 'INVALID'
break;
}
},
rules: [/^(?:\/\/.*?\n)/,/^(?:[\t ])/,/^(?:(\r\n|\n))/,/^(?:⇤)/,/^(?:⇥)/,/^(?:\.\.\.)/,/^(?:type\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:where\b)/,/^(?:->)/,/^(?:[0-9]+\b)/,/^(?:[0-9]+(\.[0-9]+)\b)/,/^(?:[a-zA-Z_]\w*)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:=)/,/^(?:\()/,/^(?:\))/,/^(?:<)/,/^(?:>)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:\\)/,/^(?::)/,/^(?:\|)/,/^(?:,)/,/^(?:\?)/,/^(?:')/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}