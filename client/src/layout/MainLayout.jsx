import { Outlet } from 'react-router';
import {Toaster} from 'react-hot-toast'

const MainLayout = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto mt-3'>
                <Outlet></Outlet>
            </div>
            <Toaster/>
        </div>
    );
};

export default MainLayout;