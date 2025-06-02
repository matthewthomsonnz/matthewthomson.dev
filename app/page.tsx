'use client';
import { BlogPosts } from 'app/components/posts'
import Image from 'next/image';
import profile from './../public/profile.png';
import dynamic from 'next/dynamic';
import {useState} from "react";
const WorkHistorySection = dynamic(() => import('./components/WorkHistorySection'), { ssr: false });
export default function Page() {
    const [showRaveHistory, setShowRaveHistory] = useState(false); // State to control visibility

    return (
      <>
    <section className="mb-8">
        <div>
            <div className="max-w-xl mx-auto flex items-center">
                <div className="">

                </div>
                <Image className="max-w-[50%]"
                       onLoad={()=>setShowRaveHistory(true)}
                    src={profile}
                    width={300}
                    height={300}
                    alt="Picture of the author"
                />
                <div>
                    <h1 className="text-2xl font-semibold tracking-tighter">
                        Matthew Thomson
                    </h1>
                    <h4 className="mb-8  tracking-tighter text-gray-700">
                        Senior Front-end Developer
                    </h4>
                </div>

            </div>
        </div>
        <div className=" ">
            <div className="max-w-xl mx-auto bg-sunshine px-8 py-8">
            <p className="mb-4">
                {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
            </p>
            {/*<div className="my-8">*/}
            {/*    <BlogPosts />*/}
            {/*</div>*/}
        </div>
        </div>
    </section>
          <h2 className="mb-12 max-w-xl mx-auto">Work History</h2>
          {showRaveHistory && ( <>
    <WorkHistorySection title="Rave"
                        className="bg-sunshine"
                        leadingText="Currently working here, have specialised the last half almost entirely in front end building with Vue 3 and Vuetify"
                        text="I came on to Rave and it was full of quickly written components. I took the lead on the whole front end and have brought rave from a dated looking,
                            to a premium feeling consistent platform. We don't have a designer so with my background I will wear the hat of UI designer, UX specialist"
                        from="Dec 2022"
                        to="Present"
                        items={[' Interviewed and hired three front end devs in 2024/2025.',
                            'Personally reasearched, lead and implemented a migration away from a slow legacy vue 2/webpack toolchain to a  Vue 3+vite monorepo apps collection',
                            'New UI components/improved existing ones',
                            'Implemented tests (testing-library, jest)',
                            'rave was turned from a janky low budget to premium feeling brancd thanks to me',
                            'Phased out a role/flag based UI practice with a permission based RESTful HATEAOS pattern to show/hide actions and handle messaging',
                        ]}/>
    <WorkHistorySection title="Shift72"
                        from="July 2020"
                        to="December 2022"
                        leadingText="My first 'Shift' from CMS to SAAS"
                        text="Up until now I'd only used PHP CMSes (Wordpress, Silverstripe etc). I made the transition to Ruby and learned about API best practices, records, migrations.
                             I also learned about technical debt for a single client vs whats best for every client "
                        galleryImages={[
                            {
                                src: '/shift/curzon.png',
                                alt: 'Curzon',
                                text: "Was put in charge of skinning Shift 72\'s multi-tenant front end for a boutique cinema chain based in the UK"
                            },
                            {
                                src: '/shift/curzon2.png',
                                alt: 'Payment gatways',
                                text: 'Worked with Stripe payment gateway learned how to implement different payment method integrations using best practices'
                            },
                            {
                                src: '/shift/arovision.png',
                                alt: 'Arovision',
                                text: 'Spent countless hours balancing pixel-perfect design, with the cleanest CSS possible'
                            },
                            {
                                src: '/shift/adminPanel.png',
                                alt: 'Shift72 Admin Panel',
                                text: 'Gained alot of Angular JS experience and carried out the migration from bootstrap 3 to Bootstrap 5'
                            },
                        ]}
                        items={[
                            'Skinned the platform for a major UK cinema chain Curzon',
                            'Ruby backend',
                            'Optimised build times for static site builder built in Golang',
                            'Admin system Angular and Bootsrap',
                            'Geoblocking and pricing regions',
                            'React components and payment gateways',
                        ]}/>
    <WorkHistorySection title="Media 10"
                        from="March 2019"
                        className="bg-sunshine"
                        to="May 2020"
                        galleryImages={[
                            {
                                src: '/media10/percentOptical.jpg',
                                alt: 'Image 1 description',
                                text: 'Fully implemented a website from scratch with CMS editability'
                            },
                            {
                                src: '/media10/ideal-christmas.jpg',
                                alt: 'Image 1 description',
                                text: 'This one was mostly just skinning to match provided designs'
                            },
                            {
                                src: '/media10/ideal-home-show.jpg',
                                alt: 'Ideal home show',
                                text: 'Adding custom content, logos etc as shows evolved'
                            },
                            {
                                src: '/media10/concreteExpo.jpg',
                                alt: 'Image 1 description',
                                text: 'More skinning and hacking a CMS to do whats needed'
                            },
                            {
                                src: '/media10/icon-magazine.jpg',
                                alt: 'Image 2 description',
                                text: 'Championed a migration from Joomla to Wordpress. Learned about exporting and importing from one CMS to another and reimplementing components'
                            },
                        ]}
                        leadingText="Created and maintained websites for some of the UK's biggest events and magazines"
                        text="Used Wordpress and other CMSes to become proficient my HTML/CSS/JS/PHP skills"
                        items={[" Front-end and full-stack PHP development",
                            "Built and maintained high-traffic websites",
                            "Responding to helpdesk tickets",
                            "Many hours learning CSS and DOM element control"]}/>
    <WorkHistorySection title="DOOH.com"
                        className="bg-sunshine"
                        from="Oct 2018"
                        to="May 2019 (periodic contracting)"
                        galleryImages={[
                            {
                                src: '/dooh/rockTheRibbon.jpg',
                                alt: 'Image 1 description',
                                text: 'Sender/Signup unit UI for a Dancing game hosted on the largest billboard in the UK'
                            },
                            {
                                src: '/dooh/colaChristmas.jpg',
                                alt: 'Image 2 description',
                                text: 'Digital Billboard for this massive brand creating a countdown timer until Christmas'
                            },
                        ]}
                        leadingText="Digital, dynamic and interactive Billboards around the UK"
                        text="This was quite short lived and would only do a few weeks at a time between Europe travel. It involved CSS animation, getting apis, develop"
                        items={["Animation libraries, Javascript and CSS animation",
                            "Fallbacks for old/slow hardware remotely",
                            "Worked on big brands",
                            "After Effects to CSS Animation tools",
                            "Socket.io to communicate with other devices",
                            "Worked with Dynamic content from API data"]}/>
    <WorkHistorySection title="Freelance Work"
                        from="2017"
                        to="2018"
                        galleryImages={[
                            {
                                src: '/freelance/poly-rentals.jpg',
                                alt: 'Polynesian Rentals',
                                text: 'Paired with another freelance developer to implemented the front end for a car rental company'
                            },
                            {
                                src: '/freelance/chorus.jpg',
                                alt: 'Chorus Animation',
                                text: 'Implemented a single-page animation for Chorus using fullPage.js & GreenSock'
                            },
                            {
                                src: '/freelance/nu-d-shackle.jpg',
                                alt: 'Nud Shackle',
                                text: 'Reworked a single page template for a towing shackle brand'
                            },
                            {
                                src: '/freelance/doubtless-days.jpg',
                                alt: 'Doubtless days',
                                text: 'My first experience with silverstripe and using a Tides api'
                            },
                        ]}
                        leadingText=" I made the transition from interaction designer to web developer"
                        text="I worked for about a year as a freelancer through mentors and freelance project roles"
                        items={[" HTML, CSS/Sass, Javascript, SVG animation",
                            "Design work",
                            "Greensock animation",
                            "CMS/PHP (Silverstripe, Wordpress)"]}/>
    <WorkHistorySection title="Competenz"
                        from="May 2012"
                        className="bg-sunshine"
                        to="May 2017"
                        leadingText="I worked here for five years and loved the wide range of work."
                        text=" I came on as an 'Instructional Designer' and then 'Multimedia designer'
                             as I worked more with code, design and animation. Until Eventually I moved to the marketing department where
                              I was in charge of the Website and the the UX and user flow planning of internal/external applications"
                        galleryImages={[
                            {
                                src: '/competenz/competenz.jpg',
                                alt: 'Competenz',
                                text: 'Lead the project and UX/user flow for the website of a medium sized company'
                            },
                            {
                                src: '/competenz/lead-acid-battery-layout.gif',
                                alt: 'Image 2 description',
                                text: 'Gained extensive interaction design and  Illustration experience'
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
                             I made some crappy frivilous websites but found I had strong visual temperment. I promise this looked good back then."
                        items={['3D and Motion graphics',
                            'HTML, CSS, PHP',
                            'Visual design theory, history & practical',
                            'Graphic design']}/>
                  </>
)}
      </>
  )
}
