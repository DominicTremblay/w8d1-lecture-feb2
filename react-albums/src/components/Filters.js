import React from 'react';

export default function Filters({ filters = {}, setFilter }) {
  //  const filters = props.filters;
  //  const setFilter = props.setFilter;
  // Destructuring ES6
  // const { filters, setFilter } = props;

  const filterItems = Object.keys(filters).map(filter => (
    <div key={filter} className='filters__form-group'>
      <input
        className='filters__checkbox'
        type='checkbox'
        name={filter}
        id={filter}
        checked={filters[filter]}
        onChange={event => setFilter(filter, event.target.checked)}
      />
      <label className='filters__label' htmlFor={filter}>
        {filter}
      </label>
    </div>
  ));

  return (
    <section className='filters'>
      <form className='filters__form' data-testid='filters-form'>
        {filterItems}
      </form>
    </section>
  );
}
