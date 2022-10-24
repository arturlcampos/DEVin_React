import { createContext, useContext, useState } from "react";
const CompanyDataContext = createContext();
const CompanyDataProvider = ({ children }) => {
  //Reservado para receber o valor do input de CEP, utilizado em diferentes paginas
  const [cepInformado, setCepInformado] = useState("");
  //Reservado para receber a latitude e longitude, utilizado em diferentes paginas
  const [latLng, setLatLng] = useState({
    latitude: "",
    longitude: "",
  });
  return (
    <CompanyDataContext.Provider
      value={{
        cepInformado,
        setCepInformado,
        latLng,
        setLatLng,
      }}
    >
      {children}
    </CompanyDataContext.Provider>
  );
};
const useCompanyData = () => {
  return useContext(CompanyDataContext);
};
export  { CompanyDataProvider, useCompanyData, CompanyDataContext };
