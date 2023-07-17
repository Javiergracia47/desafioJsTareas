var tareas = [
    { id: 1, descripcion: "Hacer la cama", completada: false },
    { id: 2, descripcion: "Lavar los platos", completada: false },
    { id: 3, descripcion: "Sacar la basura", completada: false }
  ];
  
  function actualizarListas() {
    var listaTareas = document.getElementById("listaTareas");
    var totalTareas = document.getElementById("totalTareas");
    var totalTareasRealizadas = document.getElementById("totalTareasRealizadas");
    
    // Limpiar la lista
    listaTareas.innerHTML = "";
    
    var countTareasRealizadas = 0;
    
    tareas.forEach(function(tarea) {
      var tareaElement = document.createElement("div");
      tareaElement.classList.add("tarea");
      
      var descripcionElement = document.createElement("span");
      descripcionElement.textContent = tarea.descripcion;
      
      if (tarea.completada) {
        descripcionElement.classList.add("completada");
        countTareasRealizadas++;
      }
      
      var cambiarEstadoButton = document.createElement("button");
      cambiarEstadoButton.textContent = "Realizada";
      cambiarEstadoButton.onclick = function() {
        cambiarEstadoTarea(tarea.id);
      };
      
      var eliminarButton = document.createElement("button");
      eliminarButton.textContent = "Eliminar";
      eliminarButton.onclick = function() {
        eliminarTarea(tarea.id);
      };
      
      tareaElement.appendChild(descripcionElement);
      tareaElement.appendChild(cambiarEstadoButton);
      tareaElement.appendChild(eliminarButton);
      
      listaTareas.appendChild(tareaElement);
    });
    
    totalTareas.textContent = tareas.length;
    totalTareasRealizadas.textContent = countTareasRealizadas;
  }
  
  function agregarTarea() {
    var inputTarea = document.getElementById("inputTarea");
    var nuevaTarea = inputTarea.value.trim();
    
    if (nuevaTarea !== "") {
      var nuevaTareaObj = {
        id: Date.now(),
        descripcion: nuevaTarea,
        completada: false
      };
      
      tareas.push(nuevaTareaObj);
      inputTarea.value = "";
      
      actualizarListas();
    }
  }
  
  function eliminarTarea(id) {
    tareas = tareas.filter(function(tarea) {
      return tarea.id !== id;
    });
    
    actualizarListas();
  }
  
  function cambiarEstadoTarea(id) {
    tareas.forEach(function(tarea) {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
    });
    
    actualizarListas();
  }
  
  actualizarListas();