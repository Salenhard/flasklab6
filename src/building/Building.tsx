import Navbar from "../main/components/Navbar";
import Item from "./components/item";
import { useParams } from 'react-router-dom';
function Building() {
    const {id} = useParams();
    return(
        <div>
            <Navbar active=""/>
            <Item index={Number(id)}/>
        </div>
    )
}
export default Building;