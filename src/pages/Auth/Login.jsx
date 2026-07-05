import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import authService from "../../services/auth.service";

function Login() {
  const { register, handleSubmit } = useForm();

  const { login } = useAuth();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await authService.login(data);

      login(response.user, response.token);

      if (response.user.role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: true,
          })}
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: true,
          })}
        />

        <br />
        <br />

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;