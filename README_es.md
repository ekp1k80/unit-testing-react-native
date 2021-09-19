# Clase de unit testing - Jest and Enzyme aplicado a React Native

Metodologia - ¿Que es el unit testing?
--------------------------------------

La prueba unitaria es un tipo de prueba en la que se prueban unidades individuales o funciones de software. Su propósito principal es probar cada unidad o función. (En este caso cada parte del componente)

  

Con Unit Testing, las empresas pueden:

*   **Mejorar la calidad del código**
*   **Crear código reutilizable y confiable**
*   **Simplificar la documentación**
*   **Habilitar la integración perfecta**
*   **Chequear modularmente el correcto funcionamiento del codigo**

  

El testing consume tiempo, pero los beneficios que aporta son fundamentalmente superiores al costo. Es imperativo su uso en una aplicación como profesionales.

  

Si se quiere hacer un edificio de calidad se necesita buenas bases. ¿Como se sabría que una columna es estructuralmente solida y que al hacer un piso adicional no se va a derrumbar todo? Se necesita algo de lo que estar seguro, una buena base. Eso es el unit testing es la base solida que te permite poder construir por arriba con la confianza que va a aguantar el peso

  

Para hacer esto vamos a utilizar Jest y Enzyme.

  

Enzyme
------

Enzyme es una librería de javascript de testing creada para poder testear los **componentes** de React, resaltando componentes. Permite manipular, moverse jerárquicamente y simular verazmente el entorno de los componentes.

  

Jest
----

**1- Zero config**

Jest apunta a ser compatible con todos o la gran mayoría de los proyectos de javascript, ser de fácil instalación y configuración

**2- Snapshots**

Las snapshots son como fotografías utilizadas para almacenar objetos de javascript, viven fuera del código y los tests. Lo que les permite estar aislados, si la snapshot cambia de un chequeo previo al actual significa que hay que re-ver si todo esta funcionando

**3- Isolated (Aislado )**

Los test se corren en paralelo aislados unos de otros para maximizar la performance

**4- Great api**

Jest ofrece principalmente 3 métodos que son los más importante más otros más que luego se verán mas a profundidad.

**`describe`** **-** **`it`** **-** **`expect`** \- En describe se describe un concepto, en it se describe qué va a pasar cuando ese contexto tome lugar, semánticamente hablando y en expect se chequea que va a pasar computacionalmente hablando.

  

\-No se ejecuta código dentro del describe, solo dentro de los it(), beforeAll() y afterAll()

  

Ejemplo:

  

```
const color = 'red'

describe('when color prop is red', () => {
	
	beforeAll(() => {
		setElementProps({
			color
		})
	})

	it('the background color should be red', () => {
		const exampleElement = getExampleElement()
		
		expect(exampleElement.props.exampleElement).toEqual(color)	
	})
})
```

  

Codigo testeable
----------------

Es mucho mas facil testear pequeñas partes individuales que luego se van a unir, que testear un gran componente de miles, cientes y/o inclusive decenas de piezas unidas

  

Por eso se recomienda tener una aplicacion modularizada, pequeños componentes faciles de testear que luego se podran unir en uno mayor mucho mas facil de testear

  

En resumen, se dice mientras mas grande mejor, en este caso es lo contrario

  

Testing Fundamentals
--------------------

*   Se debe testear una cosa a la vez, **no debe de haber mas de un** **`expect`** **por** **`it`** , los `describe` se utilizan para agrupar un grupo de testing similar donde habra uno o mas `its`
*   El patron mas utilizado es el patron AAA (Arrange, Act, Assert) (Organizar, Actuar, Afirmar)
    *   **Dado** - alguna condición previa
    *   **Cuándo** : alguna acción ejecutada por la función que estás probando
    *   **Entonces** , el resultado esperado
    
    ```
    describe('given a date in the past', () => {
    ```
    

### Ejemplos aplicados a React Native

Una vez que tenemos esta teoria, no hay nada mejor que empezar a utilizarla
