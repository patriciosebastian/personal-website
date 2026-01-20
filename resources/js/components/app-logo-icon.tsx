import { ImgHTMLAttributes } from 'react'
import Logo from '../../images/Personal-Logo_200x200.png'

export default function AppLogoIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img
            src={Logo}
            className="w-full object-cover object-center object-fit-cover"
            alt="Personal Logo"
            loading='lazy'
            {...props}
        />
    );
}
