import { useState } from 'react';

import FormInput from '../basics/form-input/form-input.component';
import ButtonSimple from '../basics/button/buttonSimple.component';


import './add-form.styles.scss';

const defaultFormFields = {
  invoice:'',
  no: '',
  count: '',
  name: '',
  costByunit: '',
  margin:'',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { invoice, no, count, name, costByunit, margin } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

   
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Add product</h2>
      <span>Add each product from invoice</span>
      <form onSubmit={handleSubmit}>
      <FormInput
          label='No invoice'
          type='text'
          required
          onChange={handleChange}
          name='invoice'
          value={invoice}
        />

        <FormInput
          label='No Item'
          type='text'
          required
          onChange={handleChange}
          name='no'
          value={no}
        />

        <FormInput
          label='Quantity'
          type='text'
          required
          onChange={handleChange}
          name='count'
          value={count}
        />

        <FormInput
          label='Name'
          type='text'
          required
          onChange={handleChange}
          name='name'
          value={name}
        />

        <FormInput
          label='Cost By Unit'
          type='text'
          required
          onChange={handleChange}
          name='costByunit'
          value={costByunit}
        />
        <ButtonSimple type='submit'label='Add Product'></ButtonSimple>
      </form>
    </div>
  );
};

export default SignUpForm;
