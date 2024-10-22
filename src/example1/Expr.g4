grammar Expr;

expression:
    variableRef
    | functionRef
;

variableRef: identifier dotIdentifier;

functionRef: identifier dotIdentifier OPEN_PAR CLOSE_PAR;

identifier: ID;

dotIdentifier: DOT identifier;

OPEN_PAR:  '(';
CLOSE_PAR: ')';
DOT:      '.';
ID:        [a-zA-Z] [a-zA-Z0-9_]*;
WS:        [ \n\r\t] -> channel(HIDDEN);
