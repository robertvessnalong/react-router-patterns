import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const NewColorForm = ({ addColor }) => {
  const INITAL_STATE = {
    color: '',
  };
  const history = useHistory();
  const [formData, setFormData] = useState(INITAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ ...formData });
    setFormData(INITAL_STATE);
    history.push('/colors');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='color'>Color:</label>
      <input
        id='color'
        type='text'
        name='color'
        placeholder='Add a Color'
        value={formData.color}
        onChange={handleChange}
      />
      <button>Add Color</button>
    </form>
  );
};

export default NewColorForm;
