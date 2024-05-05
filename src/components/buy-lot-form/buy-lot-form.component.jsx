import { useState } from 'react';

import FormInput from '../basics/form-input/form-input.component';
import ButtonSimple from '../basics/button/buttonSimple.component';


import './buy-lot-form.styles.scss';

const defaultFormFields = {
  invoice_no: '',
  total: '',
  invoice_date: ''
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { invoice_no, total, invoice_date } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    
  };

  const handleSubmit = async (event) => {
    
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-in-container'>
      <h2>Add Invoice</h2>
      <span>Add resume invoice</span>
      <form onSubmit={handleSubmit}>
      <FormInput
          type='date'
          required
          onChange={handleChange}
          name='invoice_date'
          label='Invoice date'
          value={invoice_date}
        />

        <FormInput
          label='No. Invoice'
          type='text'
          required
          onChange={handleChange}
          name='invoice_no'
          value={invoice_no}
        />

        <FormInput
          label='Total invoice $'
          type='text'
          required
          onChange={handleChange}
          name='total'
          value={total}
        />
        <div className='buttons-container'>
          <ButtonSimple type='submit' label='Add Invoice'></ButtonSimple>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
