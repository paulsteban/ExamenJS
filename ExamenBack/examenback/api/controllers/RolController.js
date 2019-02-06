/**
 * RolController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    crearRelaciones: async function (req, res) {
        // TENER ACCESO A TODOS LOS MODELOS
        // Body Query
        const parametros = req.allParams();
    
    
        // Buscar el usuario con username y password
        // como el que te mando
        var relacionCreada =  await Rol.addToCollection(1, 'usuarios', [1,2]);
    
        return res.ok(relacionCreada);
    
      },
   
};
