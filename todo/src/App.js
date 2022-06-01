import logo from './logo.svg';
import {AppStyled, AppHeader,AppLogo, Flexbox} from "./App.styled.js"

function App() {
  return (
    <AppStyled width ="10px" name="Nirmal">
       
      <AppHeader>
        <AppLogo src={logo}  alt="logo" />

      <Flexbox flexDirection ="column">
        
      </Flexbox>
      </AppHeader>
    </AppStyled>
  );
}

export default App;
