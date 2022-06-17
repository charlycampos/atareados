var totalFilas = 0;
var totalPendientes = 0;
var totalCompletados = 0;

var table = $('#titulo').DataTable({
  "language": {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
      },    
  ajax: {
      url: "/data",
      dataSrc: ""
  },   
  columns: [ 
      {'data': 'id'},        
      {'data': 'titulo'},
      {'data': 'descripcion'},
      {'data': 'estado'},         
      {'data': null,
          "render": function (data) { 
              return '<a href="/edit/'+data.id+ '"class="btn btn-info"><i class="fas fa-edit"></i></a><a onclick="confirma_eliminacion('+data.id+')" class="btn btn-danger"><i class="fas fa-trash-alt"></i></a>'                           
              }
      }
  ],
  pageLength : 5,
  lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 'Todos']]     
}); 

table.on("init", function() {
  totalFilas = table.rows().count();
  totalPendientes = 0;
  totalCompletados = 0;

  for(var i = 0; i < totalFilas; i++) {
    var row = table.row(i);
    var estado = row.data().estado;
    
    if(estado == "pendiente") {
      totalPendientes = totalPendientes + 1;
    } else {
      totalCompletados = totalCompletados + 1;
    }  
  }
  pendientesBox.innerHTML = totalPendientes;
  completadosBox.innerHTML = totalCompletados;
  totaltareasBox.innerHTML = totalFilas;
});
