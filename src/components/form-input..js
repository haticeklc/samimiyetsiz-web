
export default function FormInput({name,type, placeholder,className,ref}) {
    return  <input  id={name} name={name} type={type} ref={ref} autoComplete="email" required
                   className={`${className}appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                   placeholder={placeholder}/>

}