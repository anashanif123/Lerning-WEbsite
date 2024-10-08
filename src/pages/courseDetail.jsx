
import Articles from "../components/articles";
import CoursetDeag from "../components/Coursedet";
import Offers from "../components/offers";

function CourseDetail() {
    return(
        <>
        
        <CoursetDeag/>
        <Articles 
        text={"Making Articles"}/>
        <Offers/>
        </>
    )
}
export default CourseDetail;