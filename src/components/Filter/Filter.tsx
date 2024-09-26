import { FC, FormEvent } from 'react';
import { Button } from '../UI/Button/Button.styled';
import { ButtonContainer, FormContainer, InputContainer } from './Filter.styled';

const Filter: FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(e);
  };

  return (
    <>
      <FormContainer autoComplete="off" onSubmit={handleSubmit}>
        <InputContainer>
          <label htmlFor="carsInStock">
            Cars in stock:
            <input name="cIS" type="checkbox" id="carsInStock" />
          </label>
          <label htmlFor="priceFrom">
            Price FROM / TO:
            <input type="number" id="priceFrom" placeholder="5 000" />
            <input type="number" id="priceTo" placeholder="50 000" />
          </label>
          <label htmlFor="sortSelect">
            Sort:
            <select id="sortSelect" defaultValue="No Sorting">
              <option value="No Sorting">No sorting</option>
              <option value="Ascending">Ascending</option>
              <option value="Descending">Descending</option>
            </select>
          </label>
          <label htmlFor="carModelSelect">
            Car model:
            <select id="carModelSelect" defaultValue="All Models">
              <option value="All Models">All Models</option>
              <option value="Dodje">Dodje</option>
              <option value="Honda">Honda</option>
              <option value="Kia">Kia</option>
            </select>
          </label>
        </InputContainer>
        <ButtonContainer>
          <Button type="submit">apply</Button>
          <Button type="reset">reset</Button>
        </ButtonContainer>
      </FormContainer>
    </>
  );
};

export default Filter;
