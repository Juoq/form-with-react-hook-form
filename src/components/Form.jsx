import React from "react";
import { useForm } from "react-hook-form";
import { category } from "./category";
import { team } from "./team";

const Form = () => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      birthday: "",
      direction: "",
      telephoneNumber: "",
      email: "",
      category: "",
      team: "",
      terms: false,
    },
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      Formulario
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          {...register("name", {
            required: {
              value: true,
              message: "❌ El nombre es un campo obligatorio",
            },
          })}
        />
        {formState.errors.name ? <p>{formState.errors.name.message}</p> : null}

        <label htmlFor="surname">Apellido</label>
        <input
          type="text"
          id="surname"
          {...register("surname", {
            required: {
              value: true,
              message: "❌ El Apellido es un campo obligatorio",
            },
          })}
        />
        {formState.errors.surname ? (
          <p>{formState.errors.surname.message}</p>
        ) : null}

        <label htmlFor="birthday">Fecha de nacimiento</label>
        <input
          type="date"
          id="birthday"
          {...register("birthday", {
            required: {
              value: true,
              message: "❌ La fecha de nacimiento es un campo obligatorio",
            },
          })}
        />
        {formState.errors.birthday ? (
          <p>{formState.errors.birthday.message}</p>
        ) : null}

        <label htmlFor="direction">Dirección:</label>
        <input
          type="text"
          id="direction"
          {...register("direction", {
            required: {
              value: true,
              message: "❌ La dirección es un campo obligatorio",
            },
          })}
        />
        {formState.errors.direction ? (
          <p>{formState.errors.direction.message}</p>
        ) : null}

        <label htmlFor="telephoneNumber">Número de teléfono</label>
        <input
          type="tel"
          id="telephoneNumber"
          {...register("telephoneNumber", {
            required: {
              value: true,
              message: "❌ El teléfono es un campo obligatorio",
            },
            maxLength: {
              value: 9,
              message:
                "📳 El número máximo de caracteres posible en este campo es de 9",
            },
          })}
        />
        {formState.errors.telephoneNumber ? (
          <p>{formState.errors.telephoneNumber.message}</p>
        ) : null}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: {
              value: true,
              message: "❌ El email es un campo obligatorio",
            },
          })}
        />
        {formState.errors.email ? (
          <p>{formState.errors.email.message}</p>
        ) : null}

        <label htmlFor="category">Categoría</label>
        <select
          id="category"
          {...register("category", {
            required: {
              value: true,
              message: "❌ Es obligatorio elegir una categoría",
            },
          })}
        >
          <option value="">Selecciona una categoría:</option>
          <option value={category.bebe}>{category.bebe}</option>
          <option value={category.prebenjamin}>{category.prebenjamin}</option>
          <option value={category.benjamin}>{category.benjamin}</option>
          <option value={category.alevin}>{category.alevin}</option>
          <option value={category.infantil}>{category.infantil}</option>
          <option value={category.cadete}>{category.cadete}</option>
          <option value={category.juvenil}>{category.juvenil}</option>
          <option value={category.senior}>{category.senior}</option>
        </select>
        {formState.errors.category ? (
          <p>{formState.errors.category.message}</p>
        ) : null}

        <label htmlFor="team">Equipo:</label>
        <select
          id="team"
          {...register("team", {
            required: {
              value: true,
              message: "❌ Es obligatorio seleccionar un equipo",
            },
          })}
        >
          <option value="">Selecciona un equipo:</option>
          <option value={team.a}>{team.a}</option>
          <option value={team.b}>{team.b}</option>
          <option value={team.c}>{team.c}</option>
        </select>
        {formState.errors.team ? <p>{formState.errors.team.message}</p> : null}

        <input
          type="checkbox"
          id="terms"
          {...register("terms", {
            required: {
              value: true,
              message: "❌ Es obligatorio aceptar los términos",
            },
          })}
        />
        <label htmlFor="terms">
          Acepto las condiciones y términos del servicio.
        </label>
        {formState.errors.terms ? (
          <p>{formState.errors.terms.message}</p>
        ) : null}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
