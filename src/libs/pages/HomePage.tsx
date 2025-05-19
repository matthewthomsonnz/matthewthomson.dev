import HomeBanner from "../components/HomeBanner";
import IntroBlurb from "../components/IntroBlurb";
import "react-multi-carousel/lib/styles.css";
import WorkHistoryList from "../modules/WorkHistoryList"

const HomePage = () => {
    return (<>
        <HomeBanner/>
        <IntroBlurb/>
        <WorkHistoryList/>
    </>)
}

export default HomePage