import Navbar from './_components/navbar';
import { Sidebar } from './_components/sidebar';

const DashboadLayout = ({ children }: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full flex flex-col">
            <div className="h-[70px] w-full sticky top-0 ">
                <Navbar />
            </div>
            <div className="flex h-full">
                <div className="hidden md:flex w-56 h-full flex-col inset-y-0 z-50">
                    <Sidebar />
                </div>
                <div className="md:pl-6 md:pt-6 h-full ">
                    {children}
                </div>
            </div>

        </div>
    );
}

export default DashboadLayout;