import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const Colors = ({ colors }) => {
  return (
    <div className='Colors'>
      <h2>Please Select A Color:</h2>
      <ul>
        {colors.map((color) => (
          <li key={uuidv4()}>
            <Link to={`/colors/${color.color.toLowerCase()}`}>
              {color.color}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Colors;
