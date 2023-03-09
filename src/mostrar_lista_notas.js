function mostrar_lista_notas(notas, div_notas) {
    notasRevers = notas.reverse();
    div_notas.innerHTML = '';

    if (notasRevers.length > 0) {
        notasRevers.forEach((item) => {
            const itemNota = document.createElement('div');
            itemNota.classList.add("item-nota");
            itemNota.innerHTML = `
            <table>
                <tr>
                    <td><strong>${item.titulo}:</strong><br>${item.descripcion}</td>
                    <td>${item.fecha}</td>
                    <td>
                    <div class="botones">
                        <button class="eliminar" data-id="${item.id}">Eliminar</button>
                    </div>
                    </td>
                </tr>
            </table>
            `
            div_notas.appendChild(itemNota);
        })
    } else {
        const mensaje = document.createElement('p');
        mensaje.textContent = "Lista esta vacia";
        div_notas.appendChild(mensaje);
    }

}

export default mostrar_lista_notas;