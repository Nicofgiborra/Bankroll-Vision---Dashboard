import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Login.css'; // Nueva versión con dark theme

function Login({ openRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticación o envío de formulario
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember me:', rememberMe);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <div className="login-left"></div>

      <div className="login-right">
        <div className="login-form-container">
          <h2>Bankroll Vision</h2>
          <p className="login-subtitle">Accede al Dashboard</p>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                placeholder="Correo@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group password-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="toggle-password" onClick={toggleShowPassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="login-options">
              <div className="remember-me">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label htmlFor="rememberMe">Recordarme</label>
              </div>
            </div>

            <button type="submit" className="btn-login">
              Iniciar Sesión
            </button>

            <a href="#!" className="forgot-link">
              ¿Olvidaste tu contraseña?
            </a>

            <div className="divider">
              <span>o</span>
            </div>

            <button type="button" className="btn-google">
              <img
                src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                alt="Google icon"
              />
              Iniciar sesión con Google
            </button>
          </form>

          <p className="signup-text">
            ¿No tienes cuenta?
            <a href="#!" className="signup-link" onClick={openRegister}>
              Regístrate aquí
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
