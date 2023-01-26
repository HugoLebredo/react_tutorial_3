# Ejercicio 3

En este ejercicio vamos implementar la lógica necesaria para lograr un **renderizado condicional** utilizando los hooks `useState()` y `useEffect()`. El objetivo es forzar un retraso de 5 segundos la carga de datos de la url. Mientras dure ese lapso de tiempo mostraremos la siguiente cadena de texto `"Cargando Notas 💤 🥱"` informando al usuario de que nuestra aplicación no se ha colgado y transcurrido ese tiempo mostraremos las notas. De ahí lo de **condicional**.

Esto podría hacerse de manera más elegante mostrando un componente que fuera un spinner pero nos vamos a centrar en la lógica. Si quisieramos mejorar el código en lugar de cadenas de texto podríamos llamar a componentes. Lanzo el guante a quien quiera intentarlo.

## Apuntes 📓

Lo primero que necesitamos es crear un estado con una variable booleana que controle si los datos se han cargado o no.

```javascript
const [loading, setLoading] = useState();
```
Modificaremos el valor del estado `loading` dentro del hook `useEffect()` que tenemos creado ya que el código que contiene se ejecuta unicamente la primera vez que se renderiza el componente ya que su **array de dependencias** está vacío.

El plan es el siguiente:
1. Estableceremos el valor de `loading` en `true`.
2. Cargaremos los datos de la url.
3. Cambiaremos el valor de `loading` a `false`.

Para forzar el retraso de la carga utilizaremos la función `setTimeout()` que recibe 2 valores; una función y el número en milisegundos que  va a esperar a ejecutar dicha función. Esa función contendrá el `fetch()`.

```javascript
 useEffect(() => {
    setLoading(true); // inicializado valor a true

    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts") // pedimos los datos
        .then((promise) => promise.json())
        .then((json) => setArrayNotes(json));
      setLoading(false); // actualizamos el valor de loading.
    }, 5000);

  }, []);
```

Solo queda utilizar el valor del estado para mostrar la cadena de texto. Esto lo tenemos que hacer dentro del `return` de nuestro componente con un operador ternario. El código va entre llaves porque es javascript no jsx y la cadena vacia es devido a que el operador ternario obliga a poner un valor por si se cumple la condición o por si no se cumple. La cadena vacía no molesta por ser vacía

```javascript
{loading ? "Cargando Notas 💤 🥱" : ""}
```

[![codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/github/HugoLebredo/react_tutorial_3/ejercicio3)