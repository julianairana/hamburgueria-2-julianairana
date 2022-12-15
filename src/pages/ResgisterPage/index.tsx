import { Link } from "react-router-dom";
import { Register } from "./registerPage";
import logoBurguer from "../../img/LogoBurguer.png";
import bag from "../../img/Bag.png";
import bolinhas from "../../img/Group.png";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";

interface iRegisterForm {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterForm>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    resolver: yupResolver(registerSchema),
  });

  const submit: SubmitHandler<iRegisterForm> = async (data) => {
    console.log(data);
  };

  return (
    <Register>
      <div className="divLeft">
        <img src={logoBurguer} alt="logo" />
        <div className="divCard">
          <img src={bag} alt="bag" className="imgBag" />
          <span>
            A vida é como um sanduíche, é preciso recheá-la com os{" "}
            <span className="spanNegrito">melhores</span> ingredientes.
          </span>
        </div>
        <img src={bolinhas} alt="" className="imgBolinhas" />
      </div>
      <div className="divRight">
        <div className="divRegister">
          <h2>Cadastro</h2>
          <Link to={"/"}>Retornar para login</Link>
        </div>
        <form onSubmit={handleSubmit(submit)} noValidate>
          <label>Nome</label>
          <input
            type="name"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          {errors.name?.message && <span>{errors.name.message}</span>}

          <label>E-mail</label>
          <input
            type="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          {errors.email?.message && <span>{errors.email.message}</span>}

          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          {errors.password?.message && <span>{errors.password.message}</span>}

          <input
            type="password"
            placeholder="Confirmar Senha"
            {...register("passwordConfirm")}
          />
          {errors.passwordConfirm?.message && (
            <span>{errors.passwordConfirm.message}</span>
          )}

          <button>Cadastrar</button>
        </form>
        <span>
          Crie sua conta para saborear muitas delícias e matar sua fome!
        </span>
      </div>
    </Register>
  );
};
