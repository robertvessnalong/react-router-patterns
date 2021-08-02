import { useParams, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const dog = dogs.dogs.filter((dog) =>
    dog.name.toLowerCase() === name ? { dog } : null
  );

  return (
    <div className='Dog-details'>
      <header>
        <h2 className='Dog-name'>{dog[0].name}</h2>
      </header>
      <section>
        <img style={{ width: '100px' }} src={dog[0].src} alt={dog[0].name} />
        <h3>Facts:</h3>
        <ul>
          {dog[0].facts.map((fact) => (
            <li key={uuidv4()}>{fact}</li>
          ))}
        </ul>
        <Link to='/dogs'>Go Back</Link>
      </section>
    </div>
  );
};

export default DogDetails;
