// Generated from src/example1/Expr.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class ExprLexer extends antlr.Lexer {
    public static readonly OPEN_PAR = 1;
    public static readonly CLOSE_PAR = 2;
    public static readonly DOT = 3;
    public static readonly ID = 4;
    public static readonly WS = 5;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "'('", "')'", "'.'"
    ];

    public static readonly symbolicNames = [
        null, "OPEN_PAR", "CLOSE_PAR", "DOT", "ID", "WS"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "OPEN_PAR", "CLOSE_PAR", "DOT", "ID", "WS",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, ExprLexer._ATN, ExprLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "Expr.g4"; }

    public get literalNames(): (string | null)[] { return ExprLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return ExprLexer.symbolicNames; }
    public get ruleNames(): string[] { return ExprLexer.ruleNames; }

    public get serializedATN(): number[] { return ExprLexer._serializedATN; }

    public get channelNames(): string[] { return ExprLexer.channelNames; }

    public get modeNames(): string[] { return ExprLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,5,28,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,1,0,1,0,1,
        1,1,1,1,2,1,2,1,3,1,3,5,3,20,8,3,10,3,12,3,23,9,3,1,4,1,4,1,4,1,
        4,0,0,5,1,1,3,2,5,3,7,4,9,5,1,0,3,2,0,65,90,97,122,4,0,48,57,65,
        90,95,95,97,122,3,0,9,10,13,13,32,32,28,0,1,1,0,0,0,0,3,1,0,0,0,
        0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,1,11,1,0,0,0,3,13,1,0,0,0,5,
        15,1,0,0,0,7,17,1,0,0,0,9,24,1,0,0,0,11,12,5,40,0,0,12,2,1,0,0,0,
        13,14,5,41,0,0,14,4,1,0,0,0,15,16,5,46,0,0,16,6,1,0,0,0,17,21,7,
        0,0,0,18,20,7,1,0,0,19,18,1,0,0,0,20,23,1,0,0,0,21,19,1,0,0,0,21,
        22,1,0,0,0,22,8,1,0,0,0,23,21,1,0,0,0,24,25,7,2,0,0,25,26,1,0,0,
        0,26,27,6,4,0,0,27,10,1,0,0,0,2,0,21,1,0,1,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!ExprLexer.__ATN) {
            ExprLexer.__ATN = new antlr.ATNDeserializer().deserialize(ExprLexer._serializedATN);
        }

        return ExprLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(ExprLexer.literalNames, ExprLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return ExprLexer.vocabulary;
    }

    private static readonly decisionsToDFA = ExprLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}