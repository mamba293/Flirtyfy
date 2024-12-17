"use client"

import axios from "axios";
import Image from "next/image";
import Input from "@/app/components/Inputs/Input";
import Button from "@/app/components/Button";
import AuthSocialButton from "./AuthSocialButton";

import {useState, useCallback} from  'react';
import {useForm, FieldValues, SubmitHandler} from 'react-hook-form';

type Variant = 'LOGIN' | 'REGISTER';


const AuthForm = () => {
      const [variant, setVariant] = useState<Variant>('LOGIN');
      const [isLoading, setIsLoading] = useState(false);

      const toggleVariant = useCallback(() => {
            if(variant === "LOGIN") {
                  setVariant('REGISTER');
            }
            else{
                  setVariant("LOGIN");
            }
      },[variant]);

      const {
            register,
            handleSubmit,
            formState: {
                  errors
            }            
      } = useForm<FieldValues>({
            defaultValues: {
                  name: '',
                  email: '',
                  password: ''
            }
      })

      const onSubmit: SubmitHandler<FieldValues> = (data) => {
            setIsLoading(true);

            if(variant === 'REGISTER') {
                  axios.post('/api/register', data)
                  
            }
            
            if(variant === "LOGIN"){

            }
      }
      
      const socialAction = (action: string) => {
            setIsLoading(true);

            //nextAuth
      }


      return (
            <div
                  className ="
                  mt-8
                  sm:mx-auto
                  sm:w-full
                  sm:max-w-md
                  "
            >
                  <div
                  className="
                        bg-white
                        px-4
                        py-8
                        shadow
                        sm:rounded-lg
                  "
                  >
                        <form 
                          className="space-y-4" 
                          onSubmit={handleSubmit(onSubmit)}
                        >
                              {variant === 'REGISTER' && (
                                    <Input 
                                          id="name"
                                          label="Имя" 
                                          register={register}
                                          errors={errors}
                                    />
                              )}
                              <Input 
                                    id="email"
                                    label="Email" 
                                    type="email"
                                    register={register}
                                    errors={errors}
                              />
                              <Input 
                                    id="password"
                                    label="Пароль" 
                                    type="password"
                                    register={register}
                                    errors={errors}
                              />
                              <div>
                                    <Button
                                          disabled={isLoading}
                                          fullWidth
                                          type="submit"
                                    >
                                    {variant === "LOGIN" ? "Войти" : "Регистрация"}      
                                    </Button>
                              </div>
                        </form>

                        <div className='mt-6'>
                              <div className='relative'>
                                    <div className="
                                          absolute
                                          inset-0
                                          flex
                                          items-center                  
                                    ">
                                          <div className="w-full 
                                                border-t 
                                                border-gray-300"
                                          />
                                    </div>
                                    <div className="
                                                      relative
                                                      flex
                                                      justify-center
                                                      text-sm
                                                ">
                                                      <span className="
                                                            bg-white
                                                            px-3
                                                            text-gray-500
                                                      ">
                                                      Или продолжить через
                                                      </span>
                                          </div>
                              </div>
                        </div>

                        <div className="mt-6 flex gap-2">
                              <div className="flex w-full space-x-4 ">
                                    
                                    <AuthSocialButton
                                          icon={<Image
                                                src="/images/GoogleMini.png"
                                                alt="google"
                                                width={24}
                                                height={24}
                                          />}
                                          onClick={() => alert("Фнукция пока не доступна")}
                                    />
                                    <AuthSocialButton
                                          icon={<Image
                                                src="/images/FacebookMini.png"
                                                alt="google"
                                                width={24}
                                                height={24}
                                          />}
                                          onClick={() => alert("Фнукция пока не доступна")}
                                    />
                              </div>
                              
                              
                        </div>

                        <div
                        className="
                        flex
                        gap-2
                        justify-center
                        text-sm
                        mt-6
                        px-2
                        text-gray-900
                        "
                        >
                              <div>
                                    {variant === 'LOGIN' ? "Нет аккаунта?" : "Есть аккаунт?"}
                              </div>
                              <div 
                              onClick={toggleVariant}
                              className="underline cursor-pointer"
                              >
                                    {variant === "LOGIN" ? "Зарегистрироваться" : "Войти"}
                              </div>
                        </div>
                        
                  </div>
            </div>
      )
}

export default AuthForm;      