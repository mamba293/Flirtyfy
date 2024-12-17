import AuthForm from "./components/AuthForm";

export default  function AuthPage() {
      return (
            <div className="
                  flex
                  min-h-full
                  flex-col
                  justify-center
                  py-12
                  sm:px-6
                  lg:px-8
                  bg-gray-100
            ">
                  <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
                        <span className ="text-6xl font-bold text-pink-700 ">
                              FLIRTIFY
                        </span>
                        <p className="
                              mt-4
                              text-center
                              text-3xl
                              font-bold
                              tracking-tight
                              text-gray-900
                        ">    
                            Войти в свой аккаунт  
                        </p>
                        <AuthForm/>
                  </div>
            </div>
      )
}