TYPESCRIPT - Fundamentos 

-Crear gitignore
https://www.toptal.com/developers/gitignore
-Escoger: Windows, mac, linux, node
-Crear archivo,c opiar y pegar
-Instalar typescript en la carpeta del proyecto
>npm install typescript --save-dev 
-Verificar que se intalo correctamente
>npx tsc --version (tsc para hablar con typescript)
-crear carpeta para archivos ts, llamada dist

//@ts-check
Visualizar errores en javascript con typescript

>npx tsc src/01-hello.ts 
Ejecuta el archivo typescript y lo traduce a un archivo js

>npx tsc src/demo.ts --target es6 
Ejecuta el codigo typescript en la version ecmascript 6 

>npx tsc src/*.ts --target es6 --outDir dist
Guarda los archivos generados en dist 

>npx tsc --init 
Crea un archivo de configuracion
   -Se puede cambiar el outdir de ./ a ./dist
   -Tambien cambiar rootDir de ./ a ./src

>npx tsc 
Ejecuta todos los archivos typescript

>npx tsc --watch
Mantiene ejecutando los archivos y detectando errores

Tipado Typescript (Type annotation)
const productPrice: number = 12;

Funcion anonima autoejecutada 
Encierra en un scope el codigo para poder usar funciones y varibales con el mismo nombre en otro archivo
(() => {
//codigo
})();
  O se ouede usar
Export {}

Array explicito de variables mixtas
let mixed: (string | number | boolean | Object)[] = ['hola', false];

Variable dinamica
let myDinamicVar: any;

Castear variable
const rta = (myDinamicVar as string).toLocaleLowerCase();
o
const rta2 = (<number>myDinamicVar);

Alias y LiteralTypes
 type UserID =string | number; 
 let userId: UserID; 

type Sizes = 'S' | 'M' | 'L' | 'XL';
let shirtSize: Sizes;

Permite el valor asignado o null o undefined
Variable? 

Agregar librerias externas a typescript
-instalar paquete con npm
Codigo para importar:
import { variables, functions } from 'nombre-paquete';


Agregar librería sin soporte typescript
-instalar paquete npm
Codigo para importar:
import _ from 'lodash';
NOTA: si typescript aun da una alerta
Poner mouse encima del error y hacer lo que indica, en este caso es agregar otro paquete npm
npm i --save-dev @types/lodash 