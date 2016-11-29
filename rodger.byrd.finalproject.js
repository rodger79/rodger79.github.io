/* Rodger Byrd
   Final Project
   11/28/16
*/

//Need to define AST for language
// D ::= epsilon | F / D | F * D |
// F ::= | C - F | C + F |
// C ::= numbers | (D)


var TOKEN = {
  type: '.'
}

LPAREN: '('
RPAREN: ')'
DOT: '.'
ADD: '+'
SUB: '-'
MULT: '*'
DIV: '/'
NUM: /[-.0-9]+/


var varString = "1+1.0";

evaluate1(varString);

function evaluate1(x) {

  //define object that gets the value of the analyzed input and becomes lexical output
  for ( var i = 0, len = x.length; i < len; i++){
    //console.log(x[i]);
    switch (x[i]) {
      case '.':
        this._token = new createToken(TOKEN.DOT,'.');
        break;
        
    }
  }
  

}

function createToken(type, value) {
    return {
        type: type,
        value: value
    };
}

function _nextToken() {
  switch (c) {
    case '.':
      this._token = new createToken(Token.DOT);
      break;
    case '(':
      this._token = new createToken(Token.LPAREN);
      break;
    case ')':
      this._token = new createToken(Token.RPAREN);
      break;
    case '+':
      this._token = new createToken(Token.RPAREN);
      break;
  }
}
