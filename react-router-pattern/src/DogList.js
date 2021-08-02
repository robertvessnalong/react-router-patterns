import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const DogList = ({ dogs }) => {
  return dogs.dogs.map((dog) => (
    <div className='Dog' key={uuidv4()}>
      <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
    </div>
  ));
};

export default DogList;
