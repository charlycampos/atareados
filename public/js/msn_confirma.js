function confirma_eliminacion(id) {
    Swal.fire({
        title: '¿Confirma eliminar el registro: '+id+'?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#6c757d',
        confirmButtonText: 'Confirmar'
      }).then((result) => {
        if (result.isConfirmed) {   
          window.location = '/delete/'+id;                              
        }
    });
}