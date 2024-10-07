import { ChangeEvent, useState } from 'react';

type UserSelectDropdownProps = {
  handleChange: (value: string) => void;
};

const UserSelectDropdown = ({ handleChange }: UserSelectDropdownProps) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedValue(value);  
    handleChange(value);  
  };

  return (
    <select
      value={selectedValue}  
      onChange={handleSelectChange} 
      className="block w-full px-4 py-2 mb-3 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="" disabled className="text-gray-500">
        Select a user...
      </option>
      <option value="1">User 1</option>
      <option value="2">User 2</option>
      <option value="3">User 3</option>
    </select>
  );
};

export default UserSelectDropdown;
