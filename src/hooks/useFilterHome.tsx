import { ReactNode, createContext, useContext, useState } from "react";

interface FilterHomeProviderProps {
  children: ReactNode;
}

interface IFilterHomeContext {
  filterSelect: string;
  onPressableSelectFilter: (id: string) => void;
}

const FilterHomeContext = createContext({} as IFilterHomeContext);

const FilterHomeProvider = ({ children }: FilterHomeProviderProps) => {
  const [filterSelect, setFilterSelect] = useState<string>("all");
  const onPressableSelectFilter = (id: string) => {
    setFilterSelect(id);
  };

  return (
    <FilterHomeContext.Provider
      value={{ filterSelect, onPressableSelectFilter }}
    >
      {children}
    </FilterHomeContext.Provider>
  );
};

const useFilterHome = () => useContext(FilterHomeContext);

export { FilterHomeProvider, useFilterHome };
