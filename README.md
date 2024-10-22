1. generate parsing

```shell
npm run generate
```

2. run example1

```
This is example1.
States processed: 17


Collected rules:

functionRef, path:  expression


Collected tokens:




CandidatesCollection {
tokens: Map(0) {},
rules: Map(1) { 2 => { startTokenIndex: 0, ruleList: [Array] } }
}
```

3. run example2

```
This is example2.
States processed: 18


Collected rules:

functionRef, path:  expression 
variableRef, path:  expression 


Collected tokens:




CandidatesCollection {
  tokens: Map(0) {},
  rules: Map(2) {
    2 => { startTokenIndex: 0, ruleList: [Array] },
    1 => { startTokenIndex: 0, ruleList: [Array] }
  }
}
```
