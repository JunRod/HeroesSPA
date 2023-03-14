export const Alert = ({ type, children }) => {
  return (
    <div className={`alert alert-${type} animate__animated animate__bounce`}>
      {children}
    </div>
  );
};
