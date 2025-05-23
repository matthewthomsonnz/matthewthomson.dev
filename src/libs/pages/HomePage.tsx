import HomeBanner from "../components/HomeBanner";
import IntroBlurb from "../components/IntroBlurb";
import "react-multi-carousel/lib/styles.css";
import WorkHistoryList from "../modules/WorkHistoryList"
import Footer from "../components/Footer";

const HomePage = () => {
    return (<>
        <HomeBanner/>
        <IntroBlurb/>
        <WorkHistoryList/>
        <Footer/>
    </>)
}

export default HomePage