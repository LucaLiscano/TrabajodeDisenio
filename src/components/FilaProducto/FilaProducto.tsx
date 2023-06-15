import {info} from "../../types/info";
import "./FilaProductoStyle.css";


type filaProductoProps = {
  product: info;
};

const FilaProducto = ({product}: filaProductoProps) => {
  return (
    <>
      <tr>
        <td>{product.nombre}</td>
        <td>{product.precio}</td>
        <td>{product.stock}</td>
      </tr>
    </>
  );
};

export default FilaProducto;