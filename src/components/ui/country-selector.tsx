"use client";

import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

interface CountrySelectorProps {
  value?: any;
  onChange?: (value: any) => void;
}
function CountrySelector({ value, onChange }: CountrySelectorProps) {
  const options: any = useMemo(() => countryList().getData(), []);

  return (
    <Select
      options={options}
      value={value}
      onChange={(value) => onChange!(value)}
    />
  );
}

export default CountrySelector;
