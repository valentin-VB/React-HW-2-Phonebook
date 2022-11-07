const Filter = ({ value, onChange }) => {
  return <input type="text" name="filter" onChange={onChange} value={value} />;
};

export default Filter;
