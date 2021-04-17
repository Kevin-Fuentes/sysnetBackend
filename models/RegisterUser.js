const mongoose = require('mongoose');

const registerUserSchema = new mongoose.Schema({
	identificacion: {
		type: String,
		required: true,
		trim: true
	},

	tipoId: {
		type: String,
		required: true,
		trim: true,
	},
	primerNombre: {
		type: String,
		required: true,
		trim: true
	},
	segundoNombre: {
		type: String,
		trim: true
	},

	primerApellido: {
		type: String,
		required: true,
		trim: true
	},

	segundoApellido: {
		type: String,
		trim: true
	},

	direccion: {
		type: String,
		trim: true
	},
	telefono: {
		type: String,
		required: true,
		trim: true
	},
	email: {
		type: String,
		required: true,
		trim: true
	},
	ocupacion: {
		type: String,
		trim: true
	},

	fechaNacimiento: {
          type: String,
          required: true,
	},

	foto: {
		type: String,
		trim: true
	}
});

module.exports = mongoose.model('registerUser', registerUserSchema);
