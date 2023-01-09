let ListaAlumnos = [];//arreglo vacio
const objAlumnos = {
    id:'',
    nombre:'',
    curso:'',
    refuerzo:'',
}//objeto y sus atributos

let editando = false;//detectar cuando tiene que agregar y cuando tiene que actualizar.
const formulario = document.querySelector('#formulario');
const nombreImput = document.querySelector('#nombre');
const cursoImput= document.querySelector('#curso');
const refuerzoImput = document.querySelector('#refuerzo');
const btnAgregar = document.querySelector('#btnAgregar');


formulario.addEventListener('submit',validarFormulario);//cuando detecte el submit va a llamar a esta funcion, la de validar, y si está vacia saltará alert.

function validarFormulario(e) {
    e.preventDefault();//para que no se ejecute de forma automatica

    if (nombreImput.value === ''|| cursoImput.value ===''|| refuerzoImput.value ===''){
        alert ('Todos los campos son obligatorios.');
        return;
    }
  

    if (editando){
        editarAlumno();
        editando = false;
    }   else {
        objAlumnos.id = Date.now ();//nunca va a repetirse
        objAlumnos.nombre = nombreImput.value;
        objAlumnos.curso = cursoImput.value;
        objAlumnos.refuerzo = refuerzoImput.value;//iniciamos el objeto con los datos de los input.

        agregarAlumno();

    }
}

    function agregarAlumno() {
        ListaAlumnos.push({...objAlumnos});//agregue el objeto
       mostrarAlumno ();
        formulario.reset();//nos limpia los imputs
        limpiarObjeto();//limpia el objeto
   
}

function limpiarObjeto(){
    objAlumnos.id ='';
    objAlumnos.nombre ='';
    objAlumnos.curso ='';
    objAlumnos.refuerzo ='';
}//

function mostrarAlumno() {
    limpiarHTML();

    const divAlumnos = document.querySelector('.div-alumnos');
    
    const table = document.createElement('table')
    table.setAttribute('class', 'lista')
    table.classList.add('table')
    

    const tHead = document.createElement('thead')
    const trHead = document.createElement('tr')
    
    const thId = document.createElement('th')
    const textThId = document.createTextNode('ID')
    thId.appendChild(textThId)

    const thNombre = document.createElement('th')
    const textThNombre = document.createTextNode('NOMBRE')
    thNombre.appendChild(textThNombre)

    const thCurso = document.createElement('th')
    const textThCurso = document.createTextNode('CURSO')
    thCurso.appendChild(textThCurso)

    const thRefuerzo = document.createElement('th')
    const textThRefuerzo = document.createTextNode('REFUERZO')
    thRefuerzo.appendChild(textThRefuerzo)

    const thEditar = document.createElement('th')
    const textThEditar = document.createTextNode('EDITAR')
    thEditar.appendChild(textThEditar)

    const thBorrar = document.createElement('th')
    const textThBorrar = document.createTextNode('BORRAR')
    thBorrar.appendChild(textThBorrar)

    
    trHead.appendChild(thId)
    trHead.appendChild(thNombre)
    trHead.appendChild(thCurso)
    trHead.appendChild(thRefuerzo)
    trHead.appendChild(thEditar)
    trHead.appendChild(thBorrar)
    tHead.appendChild(trHead)

    

    const tBody = document.createElement('tbody')

    ListaAlumnos.forEach(alumno => {
        const { id,nombre,curso,refuerzo} = alumno;

        const trBody = document.createElement('tr')

        const tdId = document.createElement('td');
        const textTdId = document.createTextNode(id);
        tdId.appendChild(textTdId)

        const tdNombre = document.createElement('td');
        const textTdNombre = document.createTextNode(nombre);
        tdNombre.appendChild(textTdNombre)

        const tdCurso = document.createElement('td');
        const textTdCurso = document.createTextNode(curso);
        tdCurso.appendChild(textTdCurso)

         const tdRefuerzo = document.createElement('td');
        const textTdRefuerzo = document.createTextNode(refuerzo);
        tdRefuerzo.appendChild(textTdRefuerzo)

        const tdEditarBoton = document.createElement('td');
        const editarBoton = document.createElement('button');
        editarBoton.setAttribute('id', 'id-btn-editar');
        editarBoton.onclick = () => cargarAlumno(alumno);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn-editar');
        tdEditarBoton.appendChild(editarBoton);

        let tdEliminarBoton = document.createElement('td');
        let eliminarBoton = document.createElement('button');
        eliminarBoton.setAttribute('id', 'id-btn-eliminar');
        eliminarBoton.onclick = () => eliminarAlumno
        (id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn-eliminar');
        tdEliminarBoton.appendChild(eliminarBoton);

        trBody.appendChild(tdId)
        trBody.appendChild(tdNombre)
        trBody.appendChild(tdCurso)
        trBody.appendChild(tdRefuerzo)
        trBody.appendChild(tdEditarBoton)
        trBody.appendChild(tdEliminarBoton)

        tBody.appendChild(trBody)
    })
    
    table.appendChild(tHead)
    table.appendChild(tBody)

    divAlumnos.appendChild(table)
}


function  cargarAlumno(alumno){
    const {id, nombre, curso,refuerzo} = alumno;//la función va a recibir todos los datos de alumno

    nombreImput.value = nombre;
    cursoImput.value = curso;
    refuerzoImput.value = refuerzo;

    objAlumnos.id = id;

    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';
    editando = true;

}

function editarAlumno(){
    objAlumnos.nombre = nombreImput.value;
    objAlumnos.curso = cursoImput.value;
    objAlumnos.refuerzo = refuerzoImput.value;//relaciona el objeto con los inputs.El id no se pasa porque ya sale cuando cargamos empleado.

    ListaAlumnos.map ( alumno => {
          if ( alumno.id === objAlumnos.id) {
               alumno.id = objAlumnos.id;
               alumno.nombre = objAlumnos.nombre;
               alumno.curso = objAlumnos.curso;
               alumno.refuerzo = objAlumnos.refuerzo;

          }//reemplaza esta información.En vez de usar un bucle for utilizamos map.Transforma cada elemento de un arreglo(coleccion ordenada de datos)
    });

    limpiarHTML();
   mostrarAlumno();
    formulario.reset();
    formulario.querySelector('button[type="submit"]').textContent = 'Agregar';
    editando= false;

}

function eliminarAlumno(id){
    ListaAlumnos = ListaAlumnos.filter(alumno => alumno.id !== id);//nos filtra los elementos que no sean iguales a la id.El resultado lo guarda en el arreglo listaAumnos.
    limpiarHTML();
   mostrarAlumno();
}

function limpiarHTML(){
    const divAlumnos = document.querySelector('.div-alumnos');//para tener acceso a los elementos hijos de este contenedor
    while (divAlumnos.firstChild) {
        divAlumnos.removeChild(divAlumnos.firstChild);
    }
}//mientras este div tenga hijos los va a ir eliminando de uno a uno

