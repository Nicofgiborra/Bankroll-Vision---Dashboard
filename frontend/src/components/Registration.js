import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Registration.css';

function Registration({ closeRegister }) {
  // Estados para los campos del formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Estado para mostrar u ocultar la contraseña
  const [showPassword, setShowPassword] = useState(false);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación simple: si las contraseñas no coinciden, avisar
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    // En este punto podrías hacer una llamada a tu backend o API
    console.log('Email:', email);
    console.log('Password:', password);

    // Cierra el pop-up después de un registro exitoso (opcional)
    closeRegister();
  };

  // Alternar la visibilidad de la contraseña
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="registration-popup">
      <div className="registration-content">
        {/* Botón de cierre (X) */}
        <span className="close-button" onClick={closeRegister}>
          &times;
        </span>

        {/* Encabezado y subtítulo */}
        <h2 className="form-title">Crea tu cuenta</h2>
        <p className="form-subtitle">
          ¡Únete para disfrutar de todas nuestras ventajas!
        </p>

        {/* Formulario de registro */}
        <form onSubmit={handleSubmit}>
          {/* Campo de email */}
          <div className="input-group">
            <label htmlFor="reg-email">Correo electrónico</label>
            <input
              type="email"
              id="reg-email"
              placeholder="Correo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p className="hint-text">El formato debe ser algo@dominio.com</p>
          </div>

          {/* Campo de contraseña */}
          <div className="input-group">
            <label htmlFor="reg-password">Contraseña</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="reg-password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="toggle-password" onClick={toggleShowPassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <p className="hint-text">
              Mínimo 8 caracteres, al menos una mayúscula y un número
            </p>
          </div>

          {/* Confirmación de contraseña */}
          <div className="input-group">
            <label htmlFor="reg-confirm-password">Confirmar Contraseña</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="reg-confirm-password"
                placeholder="Confirma tu contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <span className="toggle-password" onClick={toggleShowPassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Ejemplo de mensaje de error si las contraseñas no coinciden */}
          {password !== confirmPassword && password.length > 0 && (
            <p className="error-message">Las contraseñas no coinciden</p>
          )}

          {/* Botón de envío */}
          <button type="submit" className="btn-register">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
