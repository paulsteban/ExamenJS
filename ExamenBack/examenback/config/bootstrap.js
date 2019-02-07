/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
   if (await Rol.count() > 0) {
     return;
   }
  //
   await Rol.createEach([
     { nombre: 'Administrador' ,},
     { nombre: 'Rol', },
  //   // etc.
   ]);
  if (await Usuario.count() > 0) {
    return;
  }
  //
  await Usuario.createEach([
    { nombre: 'Paul' , correo: 'paul.cisneros@epn.edu.ec',password: '1234', fechanacimiento: '1995-03-20',},

    //   // etc.
  ]);
  // ```
  await Rol.addToCollection(1, 'usuarios', [1]);
  await Rol.addToCollection(2, 'usuarios', [2]);
};
