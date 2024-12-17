import {IconType} from "react-icons";
import React from "react";

interface AuthSocialButtonProps {
      onClick: () => void;
      icon: React.ReactNode;
}

const AuthSocialButton:React.FC<AuthSocialButtonProps> = ({
      onClick,
      icon
}) => {    
      return (
            <button
                  type="button"
                  onClick={onClick}
                  className ="
                  inline-flex
                  w-full
                  justify-center
                  rounded-md
                  bg-white
                  px-4
                  py-2
                  text-pink-500
                  shadow-sm
                  ring-1
                  ring-inset
                  ring-gray-300
                  hover:bg-gray-50
                  focus:outline-offset-0
                  "
            >
                  {icon}

            </button>
      );
}

export default AuthSocialButton;