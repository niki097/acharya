const CountryInput = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);
  
    const handleCountryChange = (e) => {
      setSelectedCountry(e.target.value);
    };
  
    return (
      <div>
        <FlagIcon code="US" /> {/* Display default flag */}
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="US">United States</option>
          <option value="GB">United Kingdom</option>
          {/* Add more options for other countries */}
        </select>
      </div>
    );
  };
  