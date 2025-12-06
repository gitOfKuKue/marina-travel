import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import ReactCountryFlag from "react-country-flag";
import { City } from "country-state-city";

interface Option {
  label: string;
  value: string;
}

interface CountrySelectorProps {
  showCities?: boolean;
  value?: Option | null;
  onChange?: (value: Option | null) => void;
  fromCity?: Option | null;
  toCity?: Option | null;
  onChangeFromCity?: (value: Option | null) => void;
  onChangeToCity?: (value: Option | null) => void;
  onlyDestination?: boolean;
  required?: boolean;
}

function CountrySelector({
  showCities = false,
  value,
  onChange,
  fromCity: controlledFromCity,
  toCity: controlledToCity,
  onChangeFromCity,
  onChangeToCity,
  onlyDestination = false,
  required = false,
}: CountrySelectorProps) {
  const [internalCountry, setInternalCountry] = useState<Option | null>(null);
  const [cities, setCities] = useState<Option[]>([]);
  const [internalFromCity, setInternalFromCity] = useState<Option | null>(null);
  const [internalToCity, setInternalToCity] = useState<Option | null>(null);

  // Use controlled value if provided, otherwise internal state
  const country = value !== undefined ? value : internalCountry;
  const fromCity =
    controlledFromCity !== undefined ? controlledFromCity : internalFromCity;
  const toCity =
    controlledToCity !== undefined ? controlledToCity : internalToCity;

  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (newValue: unknown) => {
    const selectedOption = newValue as Option;

    if (onChange) {
      onChange(selectedOption);
    } else {
      setInternalCountry(selectedOption);
    }

    if (selectedOption && showCities) {
      const countryCities = City.getCitiesOfCountry(selectedOption.value) || [];
      const cityOptions = countryCities.map((city) => ({
        label: city.name,
        value: city.name,
      }));
      setCities(cityOptions);

      if (onChangeFromCity) onChangeFromCity(null);
      else setInternalFromCity(null);

      if (onChangeToCity) onChangeToCity(null);
      else setInternalToCity(null);
    } else {
      setCities([]);
      if (onChangeFromCity) onChangeFromCity(null);
      else setInternalFromCity(null);

      if (onChangeToCity) onChangeToCity(null);
      else setInternalToCity(null);
    }
  };

  const fromCityHandler = (newValue: unknown) => {
    const val = newValue as Option;
    if (onChangeFromCity) onChangeFromCity(val);
    else setInternalFromCity(val);
  };

  const toCityHandler = (newValue: unknown) => {
    const val = newValue as Option;
    if (onChangeToCity) onChangeToCity(val);
    else setInternalToCity(val);
  };

  const formatOptionLabel = ({ label, value }: Option) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <ReactCountryFlag
        countryCode={value}
        svg
        style={{
          marginRight: "8px",
        }}
        aria-label={label}
      />
      <span>{label}</span>
    </div>
  );

  const customStyles = {
    control: (baseStyles: any) => ({
      ...baseStyles,
      backgroundColor: "#F4F4F4",
      border: "none",
      borderRadius: "var(--standard-radius)",
      padding: "0.5rem 1.25rem", // px-5 py-2
      minHeight: "3.75rem", // h-15
      fontSize: "1.25rem", // text-xl
      boxShadow: "none",
      "&:hover": {
        border: "none",
      },
      cursor: "pointer",
    }),
    menu: (baseStyles: any) => ({
      ...baseStyles,
      zIndex: 9999,
    }),
    option: (baseStyles: any, state: { isSelected: boolean }) => ({
      ...baseStyles,
      cursor: "pointer",
      backgroundColor: state.isSelected ? "#e5e7eb" : "white",
      color: "black",
      "&:hover": {
        backgroundColor: "#f3f4f6",
      },
    }),
  };

  const customClassNames = {
    control: () => "bg-[#F4F4F4] w-full rounded-(--standard-radius)",
    input: () => "text-xl",
    placeholder: () => "text-xl text-gray-500",
    singleValue: () => "text-xl",
  };

  return (
    <div style={{ width: "100%" }} className="space-y-5">
      <div>
        <h3 className="text-lg text-secondary-font mb-2">
          Select a Country {onlyDestination ? "where you want to go" : ""}:
          {required && <span className="text-red-500 ml-1">*</span>}
        </h3>
        <Select
          instanceId="country-select"
          options={options}
          value={country}
          onChange={changeHandler}
          placeholder="Select a country..."
          formatOptionLabel={formatOptionLabel}
          styles={customStyles}
          classNames={customClassNames}
        />
        {/* Hidden input for validation */}
        <input
          tabIndex={-1}
          autoComplete="off"
          style={{ opacity: 0, height: 0, width: 0, position: "absolute" }}
          value={country ? country.value : ""}
          onChange={() => {}}
          required={required}
        />
      </div>

      {country && showCities && (
        <>
          {!onlyDestination && (
            <div>
              <h3 className="text-lg text-secondary-font mb-2">
                Origin (From):
                {required && <span className="text-red-500 ml-1">*</span>}
              </h3>
              <Select
                instanceId="origin-city-select"
                options={cities}
                value={fromCity}
                onChange={fromCityHandler}
                placeholder="Select start city..."
                styles={customStyles}
                classNames={customClassNames}
                isDisabled={!country}
              />
              <input
                tabIndex={-1}
                autoComplete="off"
                style={{
                  opacity: 0,
                  height: 0,
                  width: 0,
                  position: "absolute",
                }}
                value={fromCity ? fromCity.value : ""}
                onChange={() => {}}
                required={required}
              />
            </div>
          )}

          <div>
            <h3 className="text-lg text-secondary-font mb-2">
              {onlyDestination ? "Select City:" : "Destination (To):"}
              {required && <span className="text-red-500 ml-1">*</span>}
            </h3>
            <Select
              instanceId="destination-city-select"
              options={cities}
              value={toCity}
              onChange={toCityHandler}
              placeholder={
                onlyDestination
                  ? "Select a city..."
                  : "Select destination city..."
              }
              styles={customStyles}
              classNames={customClassNames}
              isDisabled={!country}
            />
            <input
              tabIndex={-1}
              autoComplete="off"
              style={{ opacity: 0, height: 0, width: 0, position: "absolute" }}
              value={toCity ? toCity.value : ""}
              onChange={() => {}}
              required={required}
            />
          </div>
        </>
      )}

      {country && showCities && fromCity && toCity && !onlyDestination && (
        <p className="text-gray-600 mt-4">
          Route: <strong>{fromCity.label}</strong> to{" "}
          <strong>{toCity.label}</strong> ({country.label})
        </p>
      )}
    </div>
  );
}

export default CountrySelector;
