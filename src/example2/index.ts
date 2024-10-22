import {
  ATNSimulator,
  BaseErrorListener,
  CharStream,
  CommonTokenStream,
  RecognitionException,
  Recognizer,
  Token
} from "antlr4ng";
import {CodeCompletionCore} from "antlr4-c3";
import {ExprLexer} from "./generated/ExprLexer"
import {ExprParser} from "./generated/ExprParser"

export class TestErrorListener extends BaseErrorListener {
  public errorCount = 0;

  public override syntaxError<S extends Token, T extends ATNSimulator>(_recognizer: Recognizer<T>,
                                                                       _offendingSymbol: S | null, _line: number, _column: number, _msg: string,
                                                                       _e: RecognitionException | null): void {
    ++this.errorCount;
  }
}

console.log('This is example2.')

const inputStream = CharStream.fromString("a.b");
const lexer = new ExprLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new ExprParser(tokenStream);
const errorListener = new TestErrorListener();
parser.addErrorListener(errorListener);
const tree = parser.expression();
const core = new CodeCompletionCore(parser);
core.preferredRules = new Set([
  ExprParser.RULE_variableRef,
  ExprParser.RULE_functionRef,
]);

core.showResult = true;
const candidates = core.collectCandidates(2);
console.log(candidates);
