import { BoxSearch, Main } from "./styles";

interface SearchbarProps {
  placeholder: string;
  handleInputChange: any;
  rightIcon: any;
}

const Searchbar = ({
  placeholder,
  handleInputChange,
  rightIcon,
}: SearchbarProps) => {
  return (
    <Main>
      <BoxSearch>
        <input placeholder={placeholder} onChange={handleInputChange} />
        {rightIcon && <i>{rightIcon}</i>}
      </BoxSearch>
    </Main>
  );
};

export default Searchbar;
