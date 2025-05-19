import WorkHistorySection from "../components/WorkHistorySection"
import MaxWidthSection from "../components/MaxWidthSection.tsx";
import styles from './../../helper-classes.module.css';

const WorkHistoryList = () => {
    return (<>
        <MaxWidthSection>
            <h2>Employment history</h2>
        </MaxWidthSection>
        <WorkHistorySection title="Rave"
                            className={styles['bg-primary']}
                            items={[
                                'New UI components/improved existing ones',
                            ]}/>
        <WorkHistorySection title="Shift72"
                            items={[
                                'Curzon',
                                'Payment gateways'
                            ]}/>
        <WorkHistorySection title="Media 10"
                            items={[]}/>
        <WorkHistorySection title="DOOH.com"
                            items={[]}/>
        <WorkHistorySection title="Freelance Work"
                            items={[]}/>
        <WorkHistorySection title="Competenz"
                            items={[]}/>
        <WorkHistorySection title="Degree"
                            items={[]}/>
    </>)
}

export default WorkHistoryList