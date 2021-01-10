let clientList = [];
let counter = 1;

const getAll = () => clientList;

const getById = (data) => clientList.filter((client) => client.id === data.id);

const create = (data) => {
    const cliente = {
        id: counter,
        nombre: data.nombre,
        telefono: data.telefono,
    };
    clientList.push(cliente);
    counter++;
    return cliente;
};

module.exports = {
    obtenerClientes: getAll,
    obtenerCliente: getById,
    agregarCliente: create,
};