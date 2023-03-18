import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';

import Routes from './Routes';
import GlobalStyles from './components/GlobalStyles';
import theme from './theme';
import store from './redux/store';

function App() {
   return (
      <ThemeProvider theme={theme}>
         <Provider store={store}>
            <GlobalStyles />
            <Routes />
         </Provider>
      </ThemeProvider>
   );
}

export default App;
