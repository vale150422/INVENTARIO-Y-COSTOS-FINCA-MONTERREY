import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';

function LoginPage() {

  const {
    register,
    handleSubmit
  } = useForm();

  const onSubmit = async (data) => {
    try {

      const response = await axios.post(
        'http://localhost:5000/api/auth/login',
        data
      );

      localStorage.setItem('token', response.data.token);

      window.location.href = '/';

    } catch (error) {

      Swal.fire({
         icon: 'error',
        title: 'Error',
        text: 'Credenciales incorrectas'
      });
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)}>

        <h1>Agro Inventory</h1>

        <input 
         type="email"
          placeholder="Correo"
          {...register('email')}
        />

        <input
          type="password"
          placeholder="Contraseña"
          {...register('password')}
        />

        <button type="submit">
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default LoginPage;