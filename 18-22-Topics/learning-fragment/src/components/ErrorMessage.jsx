const ErrorMessage = ({item}) => {

  return (
    <> {item.length === 0 && <h3 className="lead">I am still hungry</h3>}</>
  );
};
export default ErrorMessage;
