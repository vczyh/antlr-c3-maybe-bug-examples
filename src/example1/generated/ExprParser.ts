// Generated from src/example1/Expr.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class ExprParser extends antlr.Parser {
    public static readonly OPEN_PAR = 1;
    public static readonly CLOSE_PAR = 2;
    public static readonly DOT = 3;
    public static readonly ID = 4;
    public static readonly WS = 5;
    public static readonly RULE_expression = 0;
    public static readonly RULE_variableRef = 1;
    public static readonly RULE_functionRef = 2;
    public static readonly RULE_identifier = 3;
    public static readonly RULE_dotIdentifier = 4;

    public static readonly literalNames = [
        null, "'('", "')'", "'.'"
    ];

    public static readonly symbolicNames = [
        null, "OPEN_PAR", "CLOSE_PAR", "DOT", "ID", "WS"
    ];
    public static readonly ruleNames = [
        "expression", "variableRef", "functionRef", "identifier", "dotIdentifier",
    ];

    public get grammarFileName(): string { return "Expr.g4"; }
    public get literalNames(): (string | null)[] { return ExprParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return ExprParser.symbolicNames; }
    public get ruleNames(): string[] { return ExprParser.ruleNames; }
    public get serializedATN(): number[] { return ExprParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, ExprParser._ATN, ExprParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public expression(): ExpressionContext {
        let localContext = new ExpressionContext(this.context, this.state);
        this.enterRule(localContext, 0, ExprParser.RULE_expression);
        try {
            this.state = 12;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 0, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 10;
                this.variableRef();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 11;
                this.functionRef();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variableRef(): VariableRefContext {
        let localContext = new VariableRefContext(this.context, this.state);
        this.enterRule(localContext, 2, ExprParser.RULE_variableRef);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 14;
            this.identifier();
            this.state = 15;
            this.dotIdentifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public functionRef(): FunctionRefContext {
        let localContext = new FunctionRefContext(this.context, this.state);
        this.enterRule(localContext, 4, ExprParser.RULE_functionRef);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 17;
            this.identifier();
            this.state = 18;
            this.dotIdentifier();
            this.state = 19;
            this.match(ExprParser.OPEN_PAR);
            this.state = 20;
            this.match(ExprParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identifier(): IdentifierContext {
        let localContext = new IdentifierContext(this.context, this.state);
        this.enterRule(localContext, 6, ExprParser.RULE_identifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 22;
            this.match(ExprParser.ID);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public dotIdentifier(): DotIdentifierContext {
        let localContext = new DotIdentifierContext(this.context, this.state);
        this.enterRule(localContext, 8, ExprParser.RULE_dotIdentifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 24;
            this.match(ExprParser.DOT);
            this.state = 25;
            this.identifier();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public static readonly _serializedATN: number[] = [
        4,1,5,28,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,1,0,1,0,3,0,13,
        8,0,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,0,0,
        5,0,2,4,6,8,0,0,23,0,12,1,0,0,0,2,14,1,0,0,0,4,17,1,0,0,0,6,22,1,
        0,0,0,8,24,1,0,0,0,10,13,3,2,1,0,11,13,3,4,2,0,12,10,1,0,0,0,12,
        11,1,0,0,0,13,1,1,0,0,0,14,15,3,6,3,0,15,16,3,8,4,0,16,3,1,0,0,0,
        17,18,3,6,3,0,18,19,3,8,4,0,19,20,5,1,0,0,20,21,5,2,0,0,21,5,1,0,
        0,0,22,23,5,4,0,0,23,7,1,0,0,0,24,25,5,3,0,0,25,26,3,6,3,0,26,9,
        1,0,0,0,1,12
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!ExprParser.__ATN) {
            ExprParser.__ATN = new antlr.ATNDeserializer().deserialize(ExprParser._serializedATN);
        }

        return ExprParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(ExprParser.literalNames, ExprParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return ExprParser.vocabulary;
    }

    private static readonly decisionsToDFA = ExprParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public variableRef(): VariableRefContext | null {
        return this.getRuleContext(0, VariableRefContext);
    }
    public functionRef(): FunctionRefContext | null {
        return this.getRuleContext(0, FunctionRefContext);
    }
    public override get ruleIndex(): number {
        return ExprParser.RULE_expression;
    }
}


export class VariableRefContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public dotIdentifier(): DotIdentifierContext {
        return this.getRuleContext(0, DotIdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return ExprParser.RULE_variableRef;
    }
}


export class FunctionRefContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public dotIdentifier(): DotIdentifierContext {
        return this.getRuleContext(0, DotIdentifierContext)!;
    }
    public OPEN_PAR(): antlr.TerminalNode {
        return this.getToken(ExprParser.OPEN_PAR, 0)!;
    }
    public CLOSE_PAR(): antlr.TerminalNode {
        return this.getToken(ExprParser.CLOSE_PAR, 0)!;
    }
    public override get ruleIndex(): number {
        return ExprParser.RULE_functionRef;
    }
}


export class IdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ID(): antlr.TerminalNode {
        return this.getToken(ExprParser.ID, 0)!;
    }
    public override get ruleIndex(): number {
        return ExprParser.RULE_identifier;
    }
}


export class DotIdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DOT(): antlr.TerminalNode {
        return this.getToken(ExprParser.DOT, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override get ruleIndex(): number {
        return ExprParser.RULE_dotIdentifier;
    }
}
