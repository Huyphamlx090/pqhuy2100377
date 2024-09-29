import { createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Login from './demo/Login';
import Car from './demo/car';
import Hello from './demo/Hello';
export const router =createBrowserRouter([
    {path:"/",
        Element: <App/>
    },
    {path:"/login",
        Element:<Login/>
    },
    {path:"/car",
        Element:<car/>
    },
    {path:"/hello",
        Element:<Hello/>
    },
    {path:"*",
        Element:<div> Không tìm thấy web theo yêu cầu</div>
    }
]);