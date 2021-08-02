import { useParams, Redirect, Link } from 'react-router-dom';

import './Color.css';

const Color = ({ curr_color }) => {
  const { color } = useParams();
  const checkColors = curr_color.find(
    (clr) => clr.color.toLowerCase() === color.toLowerCase()
  );

  if (!checkColors) {
    return <Redirect to='/colors' />;
  }

  return (
    <div style={{ backgroundColor: color }} className='Color'>
      <h2>Here is your color!</h2>
      <Link to='/colors'>Go Back</Link>
    </div>
  );
};

export default Color;
