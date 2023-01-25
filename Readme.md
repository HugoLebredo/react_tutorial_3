# Tutorial ReactJS III: Programación asíncrona

En una aplicación web es muy frecuente tener que obtener los datos desde algún servidor de internet. Esto ocasiona retardos a la hora de obtener la información (pueden ser decimas de segundo pero es ya es mucho tiempo) y debemos aprender a gestionar este flujo.

En este repositorio vamos a introducir los conceptos necesarios para trabajar con datos que provienen de otros sitios web y visualizarlos en nuestra aplicación.

Vamos a utilizar una url muy popular que devuelve 100 notas con la siguiente estructura:

```javascript
{
    "userId":1,
    "id":1,
    "title":"Valoración programación asincrona",
    "body":"Al principio asusta un poco, pero con este tutorial se entiende todo",
}
```

📡 https://jsonplaceholder.typicode.com/posts

## ¿Qué es la Programación asíncrona?

En una aplicación web es muy frecuente tener que obtener los datos desde algún servidor de internet. Esto ocasiona retardos a la hora de obtener la información (pueden ser decimas de segundo pero eso ya es mucho tiempo) y debemos aprender a gestionar este flujo.

Para manejar esto javascript tiene un tipo de dato especial llamado promesa. La filosofía es sencilla. Cuando se realiza una promesa esta queda en **estado pendiente** hasta que se resuelva.

👍 Si todo va bien nos devuelve los datos solicitados.
😓 Si existe algún problema la promesa devolverá un error.

La clave está en aprender a controlar ese retardo con la instrucción `fetch()` de javascript.

Venimos de 👉 [Tutorial ReactJS II](https://github.com/HugoLebredo/react_tutorial_2) donde trabajamos con las bases estado de la aplicación.

## ¿Cómo funciona este repositorio?

- 🌱 En cada rama del repositorio se encuentra el código de los siguientes ejercicios.
- 🔗 Puedes ver el ejercicio desplegado clickando en el botón correspondiente.
- 📶 Los ejercicios tienen una dificultad incremental pero son todos muy siencillos.
- 📑 En el archivo Readme de cada rama se explica el ejercicio con un poco más de profundidad.

| Ejercicio | Descripción | Enlace |
| -- | -- | -- |
| [**Ejercicio1**](https://github.com/HugoLebredo/react_tutorial_3/tree/ejercicio1) | Renderizar un array de objetos. | [![codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/github/HugoLebredo/react_tutorial_3/ejercicio1)|
| [**Ejercicio2**](https://github.com/HugoLebredo/react_tutorial_3/tree/ejercicio2) | Refactor del array del ejercicio anterior utilizando [**template literals**](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals). | [![codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/github/HugoLebredo/react_tutorial_3/ejercicio2)|
| [**Ejercicio3**](https://github.com/HugoLebredo/react_tutorial_3/tree/ejercicio3) | Añadir un elemento al array de objetos. | [![codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/github/HugoLebredo/react_tutorial_3/ejercicio3)|
| [**Ejercicio4**](https://github.com/HugoLebredo/react_tutorial_3/tree/ejercicio4) | Creamos un formulario y refactorización. | [![codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/github/HugoLebredo/react_tutorial_3/ejercicio4)|
| [**Ejercicio5**](https://github.com/HugoLebredo/react_tutorial_3/tree/ejercicio5) | Creamos un formulario y refactorización. | [![codesandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/github/HugoLebredo/react_tutorial_3/ejercicio5)|

## Desplegar en local
Esta aplicación ha sido creada con [vite ⚡️](https://vitejs.dev/). Para desplegar el código localmente utiliza los siguientes comandos.

```bash
# Nos movemos a la carpeta de nuestro proyecto
cd my-project

# Instalamos las dependencias del package.json
npm install

# Iniciamos el proyecto
npm run dev
```