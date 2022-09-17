module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/jsx-runtime",
        "plugin:react/recommended",
        "xo"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",  
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts" ] }]
  }
}
