export const dummyData = `{
    "compileOnSave": false,
    "compilerOptions": {
        "downlevelIteration": true,
        "noImplicitAny": true,
        "noImplicitThis": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "noImplicitReturns": true,
        "noFallthroughCasesInSwitch": true,
        "strict": true,
        "sourceMap": true,
        "removeComments": true,
        "preserveConstEnums": true,
        "experimentalDecorators": true,
        "jsx": "react",
        "reactNamespace": "b",
        "target": "ES5",
        "moduleResolution": "node",
        "baseUrl": "./",
        "paths": {
            "tslib": ["./node_modules/tslib/tslib.d.ts"]
        },
        "typeRoots": [
            "./typings"
        ],
        "lib": [
            "es5",
            "dom",
            "es2015"
        ]
    },
    "formatCodeOptions": {
        "indentSize": 4,
        "tabSize": 4,
        "newLineCharacter": "\\r\\n",
        "convertTabsToSpaces": true,
        "insertSpaceAfterCommaDelimiter": true,
        "insertSpaceAfterSemicolonInForStatements": true,
        "insertSpaceBeforeAndAfterBinaryOperators": true,
        "insertSpaceAfterKeywordsInControlFlowStatements": true,
        "insertSpaceAfterFunctionKeywordForAnonymousFunctions": true,
        "insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis": false,
        "placeOpenBraceOnNewLineForFunctions": false,
        "placeOpenBraceOnNewLineForControlBlocks": false
    },
    "exclude": [
        "**/bin/*.d.ts",
        "node_modules",
        "peon"
    ]
}`;

export interface ComplexData {
	compileOnSave?: boolean,
	compilerOptions?: {
		downlevelIteration?: boolean,
		noImplicitAny?: boolean,
		noImplicitThis?: boolean,
		noUnusedLocals?: boolean,
		noUnusedParameters?: boolean,
		noImplicitReturns?: boolean,
		noFallthroughCasesInSwitch?: boolean,
		strict?: boolean,
		sourceMap?: boolean,
		removeComments?: boolean,
		preserveConstEnums?: boolean,
		experimentalDecorators?: boolean,
		jsx?: string,
		reactNamespace?: string,
		target?: string,
		moduleResolution?: string,
		baseUrl?: string,
		paths?: {
			tslib?: string[]
		},
		typeRoots?: string[],
		lib?: string[]
	},
	formatCodeOptions?: {
		indentSize?: number,
		tabSize?: number,
		newLineCharacter?: string,
		convertTabsToSpaces?: boolean,
		insertSpaceAfterCommaDelimiter?: boolean,
		insertSpaceAfterSemicolonInForStatements?: boolean,
		insertSpaceBeforeAndAfterBinaryOperators?: boolean,
		insertSpaceAfterKeywordsInControlFlowStatements?: boolean,
		insertSpaceAfterFunctionKeywordForAnonymousFunctions?: boolean,
		insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis?: boolean,
		placeOpenBraceOnNewLineForFunctions?: boolean,
		placeOpenBraceOnNewLineForControlBlocks?: boolean
	},
	exclude?: string[]
}