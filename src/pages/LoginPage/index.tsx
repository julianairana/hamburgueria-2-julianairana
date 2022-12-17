import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { Login } from "./loginPage";
import logoBurguer from "../../img/LogoBurguer.png";
import bag from "../../img/Bag.png";
import bolinhas from "../../img/Group.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export interface iLoginForm {
  email: string;
  password: string;
}


export const LoginPage = () => {

  const { LoginUser, setLoading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginForm>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const submit: SubmitHandler<iLoginForm> = async (data) => {
    const response = { ...data };
    await LoginUser(response, setLoading);
    console.log(response)
  };

  return (
    <Login>
      <div className="divLeft">
          <h2>Login</h2>
        <form onSubmit={handleSubmit(submit)} noValidate>
          <label>Email</label>
          <input   type="email"
            placeholder="Digite aqui seu email"
            {...register("email")}/>
               {errors.email?.message && <span>{errors.email.message}</span>}

          <label>Senha</label>
          <input  type="password"
            placeholder="Senha"
            {...register("password")} />
              {errors.password?.message && <span>{errors.password.message}</span>}
          <button>Logar</button>
        </form>
        <span>
          Crie sua conta para saborear muitas delícias e matar sua fome!
        </span>
        <Link to={"/register"}>Cadastrar</Link>
      </div>
      <div className="divRight">
        <img src={logoBurguer} alt="" />
        <div className="divCard">
          <img src={bag} alt="bag" className="imgBag" />
          <span>
            A vida é como um sanduíche, é preciso recheá-la com os <span className="spanNegrito">melhores</span> ingredientes.
          </span>
        </div>
          <img src={bolinhas} alt="" className="imgBolinhas"/>
      </div>
    </Login>
  );
};
