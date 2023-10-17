const DashboadLayout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div className="h-full">
            <div className="hidden md:flex w-56 h-full flex-col inset-y-0 z-50">
                
            </div>
            {children}
        </div>
    );
}

export default DashboadLayout;