
const AuthLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="bg-black h-full flex flex-col items-center justify-center space-y-6">
      {children}
    </div>
  );
};
 
export default AuthLayout;
