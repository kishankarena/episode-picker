import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StoreProvider } from './Store';
import { Router } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
   <StoreProvider>
     <App/>
   </StoreProvider> 
);


