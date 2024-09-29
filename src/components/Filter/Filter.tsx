import React, { FC, useEffect, useState } from 'react';
import { Button } from '../UI/Button/Button.styled';
import {
  FilterButtonContainer,
  FilterContainer,
  FilterInputContainer,
  FilterInputBox,
  FilterLabel,
  FilterLabelChecked,
  FilterCheckedText,
  FilterInput,
  FilterInputChecked,
  FilterSelect,
} from './Filter.styled';
import { FilterCars } from '../../types';
import toast from 'react-hot-toast';

type FilterProps = {
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

const Filter: FC<FilterProps> = ({ carModel, filterCars, resetFilter }) => {
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
    console.log({ priceFrom, priceTo });

    if (parseInt(priceFrom) < 0 || parseInt(priceTo) < 0) {
      toast.error('The price cannot be less than zero!');
      return;
    }

    if (priceFrom !== '' && priceTo !== '') {
      if (parseInt(priceFrom) > parseInt(priceTo)) {
        toast.error('The maximum price cannot be less than the minimum price!');
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
        <FilterInputContainer>
          <FilterInputBox>
            <FilterLabelChecked htmlFor="carsInStock">
              <FilterCheckedText>Cars in stock:</FilterCheckedText>
              <FilterInputChecked
                name="inStock"
                type="checkbox"
                id="carsInStock"
                onChange={handleChange}
                checked={filter.inStock}
              />
            </FilterLabelChecked>
          </FilterInputBox>
          <FilterInputBox>
            <FilterLabel htmlFor="priceFrom">Price FROM:</FilterLabel>
            <FilterInput
              name="priceFrom"
              type="number"
              id="priceFrom"
              placeholder="5 000"
              onChange={handleChange}
              value={filter.priceFrom}
            />
          </FilterInputBox>
          <FilterInputBox>
            <FilterLabel htmlFor="priceTo">Price TO:</FilterLabel>
            <FilterInput
              name="priceTo"
              type="number"
              id="priceTo"
              placeholder="50 000"
              onChange={handleChange}
              value={filter.priceTo}
            />
          </FilterInputBox>
          <FilterInputBox>
            <FilterLabel htmlFor="sortSelect">Sorting by price:</FilterLabel>
            <FilterSelect name="sort" id="sortSelect" onChange={handleChange} value={filter.sort}>
              <option value="No Sorting">No sorting</option>
              <option value="Ascending">Ascending</option>
              <option value="Descending">Descending</option>
            </FilterSelect>
          </FilterInputBox>
          <FilterInputBox>
            <FilterLabel htmlFor="carModelSelect">Car model:</FilterLabel>
            <FilterSelect
              name="models"
              id="carModelSelect"
              onChange={handleChange}
              value={filter.models}
            >
              <option value="All Models">All Models</option>
              {optin.map((e: string) => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
            </FilterSelect>
          </FilterInputBox>
        </FilterInputContainer>
        <FilterButtonContainer>
          <Button type="button" onClick={handleApply}>
            apply
          </Button>
          <Button type="reset" onClick={handleReset}>
            reset
          </Button>
        </FilterButtonContainer>
      </FilterContainer>
    </>
  );
};

export default Filter;
