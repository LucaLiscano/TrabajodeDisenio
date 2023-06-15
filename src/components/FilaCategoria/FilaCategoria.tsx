import {info} from "../../types/info";
import FilaProducto from "../FilaProducto/FilaProducto";
import "./FilaCategoriaStyle.css"

type filaCategoriaProps = {
  categoria: string;
  products: Array<info>;
};

const FilaCategoria = ({categoria, products}: filaCategoriaProps) => {
  return (
    <>
      <tr>
        <th colSpan={3}>{categoria}</th>
      </tr>

      {products.map((product) => (
        <FilaProducto product={product} />
      ))}
    </>
  );
};

export default FilaCategoria;