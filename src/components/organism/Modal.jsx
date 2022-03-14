import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../../imgs/BlackLogo.png";

function Modal({ modalActive, setModalActive, defaultValues, type="edit" }) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { register, handleSubmit, formState: { errors } } = useForm(defaultValues);

  const onSubmit = async (data) => {
    setErrorMessage("");
    setLoading(true);
    try {
      setTimeout(() => {
        console.log("data :>> ", data);
        setLoading(false);
        setModalActive(false);
      }, 2000);

    } catch (error) {
      setLoading(false);
      console.error("err m:>> ", error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div
      className={`modal fixed w-full h-full top-0 left-0 flex items-center justify-center ${
        !modalActive && "opacity-0 pointer-events-none"
      }`}
      style={{ zIndex: 40 }}
    >
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-75"></div>

      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div
          className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
          onClick={() => setModalActive(false)}
        >
          <svg
            className="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
        </div>

        <div className="modal-content py-8 text-left px-4">
          <div className="flex justify-center items-center">
            <img src={logo} className="h-6" alt="atrato" />
          </div>

          <div className="flex flex-col justify-center pt-6 max-w-xs mx-auto">
            <form
              className="flex flex-col"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="flex flex-col">
                <label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Correo"
                    name="email"
                    onChange={() => setErrorMessage("")}
                    {...register("email", { required: true, value: defaultValues?.email  })}
                    style={
                      errors.email
                        ? { borderColor: "#dc3545", border: "solid" }
                        : null
                    }
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </label>
              </div>

              <div className="flex flex-col pt-3">
                <label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Teléfono"
                    name="phone"
                    onChange={() => setErrorMessage("")}
                    {...register("phone", { required: true, value: defaultValues?.phone })}
                    style={
                      errors.phone
                        ? { borderColor: "#dc3545", border: "solid" }
                        : null
                    }
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </label>
              </div>

              <div className="flex flex-col pt-3">
                <label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Nombre"
                    name="name"
                    onChange={() => setErrorMessage("")}
                    {...register("name", { required: true, value: defaultValues?.name })}
                    style={
                      errors.name
                        ? { borderColor: "#dc3545", border: "solid" }
                        : null
                    }
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </label>
              </div>

              <div className="flex flex-col pt-3">
                <label>
                  <input
                    type="text"
                    id="secondName"
                    placeholder="Segundo nombre"
                    name="secondName"
                    onChange={() => setErrorMessage("")}
                    {...register("secondName", { required: true, value: defaultValues?.secondName })}
                    style={
                      errors.secondName
                        ? { borderColor: "#dc3545", border: "solid" }
                        : null
                    }
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </label>
              </div>

              <div className="flex flex-col pt-3">
                <label>
                  <input
                    type="text"
                    id="paternalName"
                    placeholder="Apellido Paterno"
                    name="paternalName"
                    onChange={() => setErrorMessage("")}
                    {...register("paternalName", { required: true, value: defaultValues?.paternalName })}
                    style={
                      errors.paternalName
                        ? { borderColor: "#dc3545", border: "solid" }
                        : null
                    }
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </label>
              </div>

              <div className="flex flex-col pt-3">
                <label>
                  <input
                    type="text"
                    id="maternalName"
                    placeholder="Apellido Materno"
                    name="maternalName"
                    onChange={() => setErrorMessage("")}
                    {...register("maternalName", { required: true, value: defaultValues?.maternalName })}
                    style={
                      errors.maternalName
                        ? { borderColor: "#dc3545", border: "solid" }
                        : null
                    }
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </label>
              </div>

              <div className="flex flex-col pt-3">
                <label>
                  <input
                    type="text"
                    id="birthday"
                    placeholder="Fecha de Nacimiento"
                    name="birthday"
                    onChange={() => setErrorMessage("")}
                    {...register("birthday", { required: true, value: defaultValues?.birthday })}
                    style={
                      errors.birthday
                        ? { borderColor: "#dc3545", border: "solid" }
                        : null
                    }
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </label>
              </div>

              <div className="flex flex-col pt-3">
                <label>
                  <input
                    type="text"
                    id="analyst"
                    placeholder="Analista asignado"
                    name="analyst"
                    onChange={() => setErrorMessage("")}
                    {...register("analyst", { required: true, value: defaultValues?.analyst })}
                    style={
                      errors.analyst
                        ? { borderColor: "#dc3545", border: "solid" }
                        : null
                    }
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </label>
              </div>

              <div className="max-w-lg mx-auto text-center mt-2 text-red-500">
                {errorMessage}
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`bg-primary-100 text-white rounded-md text-lg hover:opacity-75 ${
                  loading && "opacity-75"
                } p-2 mt-4 uppercase`}
              >
                {loading ? (
                  <i className="fas fa-spinner fa-xs fa-spin fa-2x" />
                ) : ( type === "edit" ? "Editar usuario" : "Crear Usuario"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
