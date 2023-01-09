# ListaAlumn-s



**Descripción**:
En este proyecto vamos a encontrar un formulario para ingresar ciertos datos de los alumnos. En este caso, el nombre, el curso y las materias en las que obtienen menos calificación. Estos datos se insertarán en una tabla para ser analizados.
Los usuarios, en este caso el profesorado, puede utilizar esta aplicación para ver cuales son las materias que necesitan ser revisadas pedagógicamente. Así pueden mejorar como transmitir el conocimiento de ciertas materias para aumentar esas calificaciones.

**Funcionalidad**:
-Se puede introducir el nombre, el curso y la materia en cuestión.
-Si algún campo no se rellena, salta una alerta dónde te indica que todos los campos tienen que estar rellenos.
-En el campo curso, al ser para alumnos de la ESO , están acotadas las respuestas ya que sólo hay 4 cursos.No se pueden poner números con decimales.
-Se puede editar y eliminar los datos introducidos en la tabla, idependientemente de su posición.
-La ID nunca se va a repetir gracias al date.now.

**Testeo en jest**
Testeo de una función del proyecto en sí no se incluye pero si están añadidos los archivos y se ha probado con una función externa para prácticar el testeo de la misma.