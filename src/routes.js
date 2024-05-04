const { 
    addNoteHandler, 
    getAllNotesHandler, 
    getNoteByIdHandler, 
    editNoteByIdHandler, 
    deleteNoteByIdHandler 
} = require('./handler');

const routes = [
    // ini buat nambah notes
    {
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler,
    },
    // ini buat nampilin notes yg udh dibuat 
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    // untuk bisa nampilin detail notes
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    },
    // untuk bisa ngedit notes
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
    },
    // untuk ngapus notes
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    },

];
   
module.exports = routes;