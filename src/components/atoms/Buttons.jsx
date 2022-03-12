const primary = ({text="Estatus", onClick, disabled}) => (
  <button
    onClick={onClick}
    type="button"
    disabled={disabled}
    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-100 uppercase"
  >
    {text}
    <i className="fas fa-caret-down ml-2"></i>
  </button>
);

const secondary = ({text="editar", onClick, disabled}) => (
    <button
        onClick={onClick}
      type="button"
      disabled={disabled}
      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-gray-400 bg-tertiary-100 uppercase"
    >
      {text}
      <i className="fas fa-pen ml-2"></i>
    </button>
  );

  const tertiary = ({text="borrar", onClick, disabled}) => (
    <button
        onClick={onClick}
      type="button"
      disabled={disabled}
      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary-100 uppercase"
    >
      {text}
      <i className="fas fa-trash ml-2"></i>
    </button>
  );

export {
    primary as ButtonPrimary,
    secondary as ButtonSecondary,
    tertiary as ButtonTertiary
}