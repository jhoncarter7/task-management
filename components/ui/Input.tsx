interface  InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    icon?: React.ReactNode;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    
    }
    
    export default function Input({ className = "", icon, onChange, ...props }: InputProps) {
      return (
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500 sm:text-sm">
            {icon}
          </div>
          <input
            className={` border border-gray-300 rounded-md shadow-md  px-3 pl-9 py-2 w-full focus:outline-none focus:ring-1 ${className}`}
            onChange={onChange}
            {...props} 
          />
          
        </div>
      );
    }