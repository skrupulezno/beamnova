import './Button.css';
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { PiSignInBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { BsBookmarkStar } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { RiGitRepositoryLine } from "react-icons/ri";

const Button = ({ title, style }: { title: string, style : string }) => {
    if (style === 'about' ) return (
        <button className='About us'><AiOutlineQuestionCircle style={{
            color: "rgb(249, 115, 22)",
            height: "1.3em",
            width: "1.3em"
          }}/>{title}</button>
    );
    else if (style === 'project' ) return (
        <button className='Project'><RiGitRepositoryLine style={{
            color: "rgb(244, 63, 94)",
            height: "1.3em",
            width: "1.3em"
          }}/>{title}</button>
    );
    else if (style === 'blog' ) return (
        <button className='Blog'><BiNews style={{
            color: "rgb(16, 185, 129)",
            height: "1.4em",
            width: "1.4em"
          }}/>{title}</button>
    );
    else if (style === 'auth' ) return (
        <button className='Auth'><PiSignInBold style={{
            color: "rgb(219, 165, 9)",
            height: "1.3em",
            width: "1.3em"
          }}/> {title}</button>
    );
    else if (style === 'profile' ) return (
        <button className='Profile'><PiSignInBold />{title}</button>
    );
    return (
        <button className='Standart'>{title}</button>
    );
}




export default Button;