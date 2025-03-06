document.addEventListener('DOMContentLoaded', function(){
    const comentario = document.getElementById('comentario');
    const agregar = document.getElementById('agregar');
    const caja = document.getElementById('cajaComentarios');

    agregar.addEventListener('click', function() {
        if(comentario.value.trim() !== '') {
            const nuevoComentario = document.createElement('div');
            nuevoComentario.className = 'comentario';
            
            const textoComentario = document.createElement('span');
            textoComentario.className = 'texto-comentario';
            textoComentario.textContent = comentario.value;
            
            dayjs.locale('es');
            const fecha = dayjs().format('DD/MM/YYYY HH:mm');
            const fechaElement = document.createElement('span');
            fechaElement.className = 'fecha-comentario';
            fechaElement.textContent = fecha;
            
            nuevoComentario.appendChild(textoComentario);
            nuevoComentario.appendChild(fechaElement);
            nuevoComentario.addEventListener('click', function(){
                let seElimina = confirm('¿Estas que quieres eliminar este comentario?')
                if(seElimina) {
                    this.remove();
                }
            });

            caja.appendChild(nuevoComentario);

            comentario.value = '';
        } else {
            alert('No se puede agregar un comentario vacio')
        }
    });

    comentario.addEventListener('keypress', function(e) {
        if(e.key === 'Enter') {
            agregar.click();
        }
    });
});