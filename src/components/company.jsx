import SearchLoginHead from "./search";
import { FaChevronLeft, FaPlus } from "react-icons/fa6";
import '../styles/company.scss';

const options=[
    {'name':'Healthcare'},
    {'name':'Manufacturing'},
    {'name':'Professional Services'},
    {'name':'Information Technology'},
    {'name':'Finance and Insurance'},
    {'name':'Construction and Real Estate'},
    {'name':'Commercial and Retail'},
    {'name':'Education'},
    {'name':'Logistics and Transportation'},
    {'name':'Tourism and Hospitality'},
    {'name':'Other'}
]

const Company =()=>{
    return(
        <div className="wrapper">
            <SearchLoginHead/>
            <>
            <div className="title">
                <FaChevronLeft className="left-arrow"/>
                <h4 className="h4">Identify the industries or sectors that best describe your business operations.</h4>
            </div>
            <div className="options-wrap">
            {options.map((op,i)=>(
                <div className={`option option_${i}`} key={i}><FaPlus/><p>{op.name}</p></div>
            ))}
            </div>
            </>
        </div>
    )
}
export default Company;