import React, { FC, useEffect, useState } from 'react';
import { Button } from '../UI/Button/Button.styled';
import { ButtonContainer, FilterContainer, InputContainer } from './Filter.styled';
import { FilterCars } from '../../types';
import toast from 'react-hot-toast';

type FilterTypeComponents = {
  carModel: () => string[];
  filterCars: (filer: FilterCars) => void;
  resetFilter: () => void;
};

const initialFilter: FilterCars = {
  inStock: false,
  priceFrom: '',
  priceTo: '',
  sort: 'No sorting',
  models: 'All Models',
};

const Filter: FC<FilterTypeComponents> = ({ carModel, filterCars, resetFilter }) => {
  const [filter, setFilter] = useState<FilterCars>(initialFilter);
  const [optin, serOption] = useState<string[]>([]);

  useEffect(() => {
    const models = carModel();
    serOption(models);
  }, [carModel]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'inStock') {
      const checked = (e.target as HTMLInputElement).checked;
      setFilter(prev => ({
        ...prev,
        [name]: checked,
      }));

      return;
    }
    setFilter(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleApply = () => {
    const { priceFrom, priceTo } = filter;

    if (priceFrom !== '' && priceTo !== '') {
      if (parseInt(priceFrom) > parseInt(priceTo)) {
        toast.error('Цена до не может быть меньше цены от!');
        return;
      }
    }

    filterCars(filter);
  };

  const handleReset = () => {
    setFilter(initialFilter);
    resetFilter();
  };

  return (
    <>
      <FilterContainer>
        <InputContainer>
          <label htmlFor="carsInStock">
            Cars in stock:
            <input
              name="inStock"
              type="checkbox"
              id="carsInStock"
              onChange={handleChange}
              checked={filter.inStock}
            />
          </label>
          <label htmlFor="priceFrom">
            Price FROM:
            <input
              name="priceFrom"
              type="number"
              id="priceFrom"
              placeholder="5 000"
              onChange={handleChange}
              value={filter.priceFrom}
            />
          </label>
          <label htmlFor="priceTo">
            Price TO:
            <input
              name="priceTo"
              type="number"
              id="priceTo"
              placeholder="50 000"
              onChange={handleChange}
              value={filter.priceTo}
            />
          </label>
          <label htmlFor="sortSelect">
            Sorting by price:
            <select name="sort" id="sortSelect" onChange={handleChange} value={filter.sort}>
              <option value="No Sorting">No sorting</option>
              <option value="Ascending">Ascending</option>
              <option value="Descending">Descending</option>
            </select>
          </label>
          <label htmlFor="carModelSelect">
            Car model:
            <select name="models" id="carModelSelect" onChange={handleChange} value={filter.models}>
              <option value="All Models">All Models</option>
              {optin.map((e: string) => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
            </select>
          </label>
        </InputContainer>
        <ButtonContainer>
          <Button type="button" onClick={handleApply}>
            apply
          </Button>
          <Button type="reset" onClick={handleReset}>
            reset
          </Button>
        </ButtonContainer>
      </FilterContainer>
    </>
  );
};

export default Filter;
