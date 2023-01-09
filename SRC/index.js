let ListaAlumnos = [];
const objAlumnos = {
    id:'',
    nombre:'',
    curso:'',
    refuerzo:'',
}

let editando = false;
const formulario = document.querySelector('#formulario');
const nombreImput = document.querySelector('#nombre');
const cursoImput= document.querySelector('#curso');
const refuerzoImput = document.querySelector('#refuerzo');
const btnAgregar = document.querySelector('#btnAgregar');


formulario.addEventListener('submit',validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    if (nombreImput.value === ''|| cursoImput.value ===''|| refuerzoImput.value ===''){
        alert ('Todos los campos son obligatorios.');
        return;
    }
  

    if (editando){
        editarAlumno();
        editando = false;
    }   else {
        objAlumnos.id = Date.now ();
        objAlumnos.nombre = nombreImput.value;
        objAlumnos.curso = cursoImput.value;
        objAlumnos.refuerzo = refuerzoImput.value;

        agregarAlumno();

    }
}

    function agregarAlumno() {
        ListaAlumnos.push({...objAlumnos});
       mostrarAlumno ();
        formulario.reset();
        limpiarObjeto();
   
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
    const {id, nombre, curso,refuerzo} = alumno;

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
    objAlumnos.refuerzo = refuerzoImput.value;

    ListaAlumnos.map ( alumno => {
          if ( alumno.id === objAlumnos.id) {
               alumno.id = objAlumnos.id;
               alumno.nombre = objAlumnos.nombre;
               alumno.curso = objAlumnos.curso;
               alumno.refuerzo = objAlumnos.refuerzo;

          }
    });

    limpiarHTML();
   mostrarAlumno();
    formulario.reset();
    formulario.querySelector('button[type="submit"]').textContent = 'Agregar';
    editando= false;

}

function eliminarAlumno(id){
    ListaAlumnos = ListaAlumnos.filter(alumno => alumno.id !== id);
    limpiarHTML();
   mostrarAlumno();
}

function limpiarHTML(){
    const divAlumnos = document.querySelector('.div-alumnos');
    while (divAlumnos.firstChild) {
        divAlumnos.removeChild(divAlumnos.firstChild);
    }
}

