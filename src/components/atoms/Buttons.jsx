const primary = () => (
  <button
    type="button"
    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-100 uppercase"
  >
    Estatus
    <i className="fas fa-caret-down ml-2"></i>
  </button>
);

const secondary = () => (
    <button
      type="button"
      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md text-sm font-medium text-gray-400 bg-tertiary-100 uppercase"
    >
      editar
      <i className="fas fa-pen ml-2"></i>
    </button>
  );

  const tertiary = () => (
    <button
      type="button"
      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary-100 uppercase"
    >
      borrar
      <i className="fas fa-trash ml-2"></i>
    </button>
  );

export {
    primary as ButtonPrimary,
    secondary as ButtonSecondary,
    tertiary as ButtonTertiary
}