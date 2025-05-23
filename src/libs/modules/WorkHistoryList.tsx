import WorkHistorySection from "../components/WorkHistorySection"
import MaxWidthSection from "../components/MaxWidthSection.tsx";
import styles from './../../helper-classes.module.css';

const WorkHistoryList = () => {
    return (<>
        <MaxWidthSection>
            <h2>Employment history</h2>
        </MaxWidthSection>
        <WorkHistorySection title="Rave"
                            leadingText="Lorem ipsum"
                            text="I came on to Rave and it was full of quickly written components. I took the lead on the whole front end and have brought rave from a dated looking, to a premium feeling consistent platform"
                            className={styles['bg-primary']}
                            from="Dec 2022"
                            to="Present"
                            items={['Key achievements',
                                ' Interviewed and hired three front end devs in 2024/2025.',
                                'Personally reasearched, lead and implemented a migration away from a slow legacy vue 2/webpack toolchain to a  Vue 3+vite monorepo apps collection',
                                'New UI components/improved existing ones',
                                'Implemented tests (testing-library, jest)',
                                'Phased out a role/flag based UI practice with a permission based RESTful HATEAOS pattern to show/hide actions and handle messaging',
                            ]}/>
        <WorkHistorySection title="Shift72"
                            from="July 2020"
                            to="December 2022"
                            leadingText="My first 'Shift' from CMS to custom SAAS platform"
                            text=", where I learned about migrations, records, and good practices around how to implement apis. I also learned about technical debt for a single client vs whats best for every client "
                            galleryImages={[
                                {
                                    src: '/shift/curzon.png',
                                    alt: 'Image 1 description',
                                    blurb: 'Skinned Shift 72s multi-client front end for a huge botique cinema chain'
                                },
                                {
                                    src: '/shift/curzon2.png',
                                    alt: 'Image 1 description',
                                    blurb: 'Worked with Stripe payment gateway and their payment method integrations'
                                },
                                {
                                    src: '/shift/arovision.png',
                                    alt: 'Image 2 description',
                                    blurb: 'This is a short description for image 1.'
                                },
                                {
                                    src: '/shift/adminPanel.png',
                                    alt: 'Image 1 description',
                                    blurb: 'This is a short description for image 1.'
                                },
                            ]}
                            items={[
                                'Skinned the platform for a major UK cinema chain Curzon',
                                'Geoblocking and pricing regions',
                                'A',
                                'GoLang Ruby',
                                'Admin system Angular and Bootsrap',
                                'React components',
                                'Payment gateways',
                                'Extensive practice of DOM node manipulation and control'
                            ]}/>
        <WorkHistorySection title="Media 10"
                            from="March 2019"
                            to="May 2020"
                            galleryImages={[
                                {
                                    src: '/media10/percentOptical.jpg',
                                    alt: 'Image 1 description',
                                    blurb: 'This is a short description for image 1.'
                                },
                                {
                                    src: '/media10/ideal-christmas.jpg',
                                    alt: 'Image 1 description',
                                    blurb: 'This is a short description for image 1.'
                                },
                                {
                                    src: '/media10/ideal-home-show.jpg',
                                    alt: 'Image 2 description',
                                    blurb: 'This is a short description for image 1.'
                                },
                                {
                                    src: '/media10/concreteExpo.jpg',
                                    alt: 'Image 1 description',
                                    blurb: 'This is a short description for image 1.'
                                },
                                {
                                    src: '/media10/icon-magazine.jpg',
                                    alt: 'Image 2 description',
                                    blurb: 'This is a short description for image 1.'
                                },
                            ]}
                            leadingText="Lorem ipsum"
                            text="Some multi-line intro text about this work entry"
                            items={[" Front-end and full-stack PHP development",
                                "Built and maintained high-traffic websites",
                                "Extensive practice of DOM node manipulation and control"]}/>
        <WorkHistorySection title="DOOH.com"
                            from="Oct 2018"
                            to="May 2019 (periodic contracting)"
                            galleryImages={[
                                {
                                    id: 1,
                                    src: '/dooh/rockTheRibbon.jpg',
                                    alt: 'Image 1 description',
                                    blurb: 'This is a short description for image 1.'
                                },
                                {
                                    id: 2,
                                    src: '/dooh/colaChristmas.jpg',
                                    alt: 'Image 2 description',
                                    blurb: 'This is a short description for image 1.'
                                },
                            ]}
                            leadingText="Lorem ipsum"
                            text="This was quite short lived and would only do a few weeks at a time between Europe travel. It involved CSS animation, getting apis, develop"
                            items={["Animation libraries, Javascript and CSS animation",
                                "Fallbacks for old/slow hardware remotely (some digital billboards are SLOW)",
                                "Worked on big brands",
                                "Dynamic content from API data"]}/>
        <WorkHistorySection title="Freelance Work"
                            from="2017"
                            to="2018"
                            galleryImages={[
                                {
                                    src: '/freelance/poly-rentals.jpg',
                                    alt: 'Image 1 description',
                                    blurb: 'This is a short description for image 1.'
                                },
                                {
                                    src: '/freelance/chorus.jpg',
                                    alt: 'Image 1 description',
                                    blurb: 'This is a short description for image 1.'
                                },
                                {
                                    src: '/freelance/nu-d-shackle.jpg',
                                    alt: 'Image 2 description',
                                    blurb: 'This is a short description for image 1.'
                                },
                                {
                                    src: '/freelance/doubtless-days.jpg',
                                    alt: 'Image 1 description',
                                    blurb: 'This is a short description for image 1.'
                                },
                            ]}
                            leadingText="Lorem ipsum"
                            text="Some multi-line intro text about this work entry"
                            items={[" HTML, CSS/Sass, Javascript, SVG animation",
                                "Design work",
                                "CMS/PHP (Silverstripe, Wordpress)"]}/>
        <WorkHistorySection title="Competenz"
                            from="May 2012"
                            to="May 2017"
                            leadingText="I worked here for five years and loved the wide range of work."
                            text=" I came on as an 'Instructional Designer' and then 'Multimedia designer'
                             as I worked more with code, design and animation. Until Eventually I moved to the marketing department where
                              I was in charge of the Website and the the UX and user flow planning of internal/external applications"
                            galleryImages={[
                                {
                                    id: 1,
                                    src: '/competenz/competenz.jpg',
                                    alt: 'Image 1 description',
                                    blurb: 'This is a short description for image 1.'
                                },
                                {
                                    id: 2,
                                    src: '/competenz/lead-acid-battery-layout.gif',
                                    alt: 'Image 2 description',
                                    blurb: 'This is a short description for image 1.'
                                },
                            ]}
                            items={[
                                "Information architecture",
                                "Project management",
                                "Needs analysis",
                                "Usability testing",
                                "User interface wireframing",
                                "External customer engagement",
                                "Adobe CC suite",
                                "Graphic design and motion graphics",
                                "Marketing campaign support",
                                "eLearning module development",
                                "Digital workbook design and content",
                                "SVG illustration, 3D modeling"
                            ]}/>
        <WorkHistorySection title="Degree"
                            embed="https://www.youtube.com/embed/uHlBHGO6r1U?si=9BdEWxLkSE27o50"
                            leadingText="Bachelor of Media Arts - Digital Media Design Major. This is a time capsule of what I thought was cool in 2011."
                            text=" To be honest I wasn't sure what I wanted to do at this stage of my life, but immediately fell in love with coding and interaction design.
                             I made some crappy frivilous websites but found I had strong visual temperment. I promise this looked good back thenn"
                            items={['3D and Motion graphics', 'HTML, CSS, PHP', 'Visual design theory, history & practical', 'Graphic design']}/>
    </>)
}

export default WorkHistoryList