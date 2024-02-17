# Guia Git

Gia de mecanica de Git para crear nuevas ramas en  base a tareas asignadas. Crear nuevas ramas en el repositorio existente a partir de la rama de desarrallo. Poder hacer pull de esas ramas al repositorio local, desarrollar la fixture correspondiente, y realizar el pull request para mergear.

## Crear nueva rama en Git

Para crear la nueva rama, en un principio lo haremos desde la web para que sea mas instintivo el proceso:
- Primero dirigirse a GitHub al repositorio correspondiente.
- Pararse en la rama de "desarrollo" (de ser necesario cambiar de rama en el selector de ramas)
- Precionar en el boton continuo "Branches"
- Se abrira una nueva pestaña dentro de GitHub que muestra las ramas existentes. Presionar en el botón verde "New Branch"
- Se abrirá una ventana emergente donde debemos colocar el nombre de la nueva rama (RECORDAR: el nombre de la nueva rama debe llevar el nombre de la tarjeta de Trello asociada reemplazando los espacios por "-" y con todas sus letras en minuscula) y cambiar el "surce" para indicar a partir de qué rama se debe crear la nueva rama, es decis, surce = rama desarrollo.
- Esto es todo lo que debemos hacer desde GitHub, con esto quedará creada la nueva rama. 

## Traer la nueva rama al entorno local

Una vez creada la rama en GitHub debemos traerla al entorno de nuestro repositorio local:
- primero hacemos un git status para saber si hay algun cambio no commiteado.
- luego debemos hacer un "git pull origin desarrollo". Con esto actualizaremos nuestro repositorio local con todas las ramas hijas de desarrollo.
- para verificar que esto sea correcto podemos utilizar el comando "git branch -a" el cual nos muestra todas las ramas existentes.
- corroborado que tengamos de forma local la nueva rama, nos debemos mover a ella, con el comando "git checkout 'nueva-rama'"

## Commit de nuevos cambios

Una vez que tenemos nuestra nueva rama en nuestro repositorio local, debemos trabajarla como de costumbre. Utilizar el comando "git add ." para añadir al staging area, para lugo hacer un "git commit" y que los cambios queden guardados. Recordar que con el comando "git status" podemos ir verificando el estado general del repositorio momento a momento.

## Actualizar cambios en el repositorio remoto 

Si bien al haecr un commit los cambios realizados quedan guardados, los mismos quedan guardados en nuestro repositorio local. Esto no permite que los demas miembros de la comision esten al tanto de estos cambios. Para que todos los miembros de la comision puedan ver estos cambios y puedan descargarlos y asi trabajar con el proyecto actualizaddo es necesario actualizar el repositorio remoto:
- Para esto es necesario hacer un "git push origin 'nombre 'nueva-rama'"
Con esto el repositorio remoto queda actualizado y listo para que los demas miembros pueda hacer un "git pull" y tener sus repositorios locales actualizados.

## Como pedir un Pull Request 

Una vez que tengamos funcionando completamente la tarea asignada es momento de realizar un merge a la rama de desarrollo. Para esto es necesario hacer un Pull Request de la siguiente manera:
- ESTE PASO SE COMPLETARA CUANDO LAS RAMAS DE "DESARROLLO" Y "MAIN" SE ENCUENTREN CONFIGURADAS PARA QUE LOS PULL REQUEST DEBAN SER AUTORIZADOS POR OTROS INTEGRANTES DE LA COMISION.