import React, { useState } from 'react';
import { getClinicListBySearch } from '@/services/cms';

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Implement your search logic here
    console.log(`Searching for ${searchTerm}`);
  };

  const getClinicListBySearch_ = async () => {
    const result: any = await getClinicListBySearch(searchTerm, "");
    console.log(result);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={getClinicListBySearch_}>Search</button>
    </div>
  );
};

export default Search;