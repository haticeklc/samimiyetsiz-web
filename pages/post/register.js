import Layout from "../../src/components/layout";
import FormInput from "../../src/components/form-input.";
import {useRef} from "react";
import axios from "axios";

export default function Register() {
    const usernameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')

   async function handleRegister() {
        console.log(usernameRef.current?.value, emailRef.current?.value, passwordRef.current?.value)

        let user = {
            username: usernameRef.current?.value,
            email: emailRef.current?.value,
            password: passwordRef.current?.value
        }
        let requestConfig= {
            method: 'post',
            url: 'https://localhost:8000/users',
            data: user
        }

       const response = await axios.request(requestConfig)
       console.log(response.data)
    }

    return <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img className="mx-auto h-12 w-auto"
                         src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        samimiyetsiz
                    </h2>

                </div>
                <div className="mt-8 space-y-6">

                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <input ref={usernameRef} name="username" type="type" className="rounded-t-md"
                                   placeholder="username"/>
                            <label htmlFor="email-address" className="sr-only">Email address</label>

                        </div>
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input ref={emailRef} name="email" type="email" placeholder="email"/>

                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input ref={passwordRef} name="password" type="password" className="rounded-t-md"
                                   placeholder="password"/>

                        </div>
                    </div>


                    <div className="mt-6">
                        <button onClick={handleRegister}
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              {/*<!-- Heroicon name: lock-closed -->*/}
              <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"/>
            </svg>
          </span>
                            register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
}