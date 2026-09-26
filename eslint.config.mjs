import js from "@eslint/js";
import globals from "globals";

// Deprecated Foundry VTT globals (see the fathomlessgears system's own
// foundry-v13-v14-migration-plan.md §0.2). Flagging these prevents accidental
// use of the old, non-namespaced APIs if this module ever grows to need them.
const deprecatedFoundryGlobals = ["renderTemplate", "loadTemplates"];

export default [
	js.configs.recommended,
	{
		files: ["**/*.js"],
		languageOptions: {
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module"
			},
			globals: {
				...globals.browser,
				foundry: "readonly",
				game: "readonly",
				CONFIG: "readonly",
				CONST: "readonly",
				canvas: "readonly",
				ui: "readonly",
				Hooks: "readonly"
			}
		},
		rules: {
			"no-undef": 0,
			"no-restricted-globals": [
				"error",
				...deprecatedFoundryGlobals.map((name) => ({
					name,
					message:
						"Deprecated Foundry global - use the namespaced replacement instead."
				}))
			],
			"no-unused-vars": [
				"error",
				{
					args: "all",
					argsIgnorePattern: "^_",
					caughtErrors: "all",
					caughtErrorsIgnorePattern: "^_",
					destructuredArrayIgnorePattern: "^_",
					varsIgnorePattern: "^_",
					ignoreRestSiblings: true
				}
			]
		},
		linterOptions: {
			reportUnusedDisableDirectives: "error"
		}
	}
];
