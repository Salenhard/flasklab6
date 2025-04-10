import Navbar from "../main/components/Navbar";
import Footer from "../main/components/Footer";
import GroupChart from "./components/GroupChart";
import {countries} from "../groupdata"
function Chart() {
    return (
        <div>
            <Navbar active="3" />
            <GroupChart data={countries} />
            <Footer />
        </div>
    );
}

export default Chart