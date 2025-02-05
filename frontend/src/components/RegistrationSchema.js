import * as yup from 'yup';

const registrationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Correo electrónico inválido')
    .required('Correo electrónico es obligatorio'),
  password: yup
    .string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .matches(
      /(?=.*[A-Z])/,
      'La contraseña debe contener al menos una letra mayúscula'
    )
    .matches(
      /(?=.*[a-z])/,
      'La contraseña debe contener al menos una letra minúscula'
    )
    .matches(/(?=.*[0-9])/, 'La contraseña debe contener al menos un número')
    .required('Contraseña es obligatoria'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Las contraseñas no coinciden')
    .required('Confirmar contraseña es obligatoria'),
});

export default registrationSchema;
