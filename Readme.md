# Ejercicio 1

En este ejercicio vamos a borrar las notas que le pasamos por pors al componente App. Y dentro de este vamos a hacer nuestra petición con `fetch()` a una url que contiene 100 notas.

Fijate en la consola como el primer `console.log` siempre está en **estado pendiente** mientras que el segundo que se encuentra dentro del `fetch()` es capaz de resolver dicha petición.

⚠️ Se mantiene mucho código de los ejercicios anteriores innecesario para este ejercicio (el formulario, las 3 notas hardcodeadas dentro del archivo `min.jsx`) pero creo que una buena manera de concentrarnos en los cambios. El resto es territorio conocido.

## ¿Qué es la Programación asíncrona?

En una aplicación web es muy frecuente tener que obtener los datos desde algún servidor de internet. Esto ocasiona retardos a la hora de obtener la información (pueden ser decimas de segundo pero eso ya es mucho tiempo) y debemos aprender a gestionar este flujo.

Para manejar esto javascript tiene un tipo de dato especial llamado promesa. La filosofía es sencilla. Cuando se realiza una promesa esta queda en **estado pendiente** hasta que se resuelva.

👍 Si todo va bien nos devuelve los datos solicitados.
😓 Si existe algún problema la promesa devolverá un error.

La clave está en aprender a controlar ese retardo con la instrucción `fetch()` de javascript.

[![codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/github/HugoLebredo/react_tutorial_3/ejercicio1)