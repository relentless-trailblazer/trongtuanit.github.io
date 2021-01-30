
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";



function Content ({id,city,name,desc}) {
    return (
    <div className='content'>
      <h2> {city}</h2>
      <p><FontAwesomeIcon icon={faFlag}/> {name}</p>
      <p className='desc' id={id}><span className='showBtn' id={id}><FontAwesomeIcon icon={faCaretRight}/></span> {desc}</p>
    </div> 
    );
}
export default Content;
// const Content = ( {id,city,name,desc} ) => {
//   this.transform = {
//     transform: rotateZ(90)}
  

// }

 



