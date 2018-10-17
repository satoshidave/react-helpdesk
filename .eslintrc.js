module.exports = {
    "extends": "airbnb",
    "globals": {
        "localStorage": true // Habilita localStorage como variable global.
    },
    "rules": {
        "no-console": 0, // Deshabilita error al hacer console.log
        /* "comma-dangle": ["error", "only-multiline"], */ // Desahbilita error al no colocar coma al ultimo elemento de un objeto o array.
        "indent": [2, 2], // Identación de 2 espacios.
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }], // Permite que archivos de React.JS sean .JSX y .JS
        "jsx-a11y/no-static-element-interactions": "off", // Desactiva error cuando un elemento no tiene un role.
        "jsx-a11y/click-events-have-key-events": "off", // Desactiva error cuando un elemento interactivo no tiene un keyboard listener.
        "react/prop-types": 0, // Desactiva uso de PropTypes en React.Js
    }
};