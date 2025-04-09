import Navbar from "../main/components/Navbar";
import Footer from "../main/components/Footer";
import GroupChart from "./components/GroupChart";
import buildings from "../list/table"
function Chart(){
    return (
        <div>
            <Navbar active="3"/>
            <GroupChart />
            <Footer/>
        </div>
    );
}

export default Chart