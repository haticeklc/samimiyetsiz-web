import Link from "next/link";

export default function HeaderLink({children,href,active, mobile}) {
    return<Link href ={href}>
        <a
           className={`${mobile ? 'block': ''}px-3 py-2 rounded-md text-sm font-medium  ${active ? 'text-white bg-gray-900' : 'text-gray-300 hover:text-white'}`}>{children}</a>

    </Link>
}