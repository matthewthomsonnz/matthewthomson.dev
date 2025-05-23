import MaxWidthSection from "./MaxWidthSection.tsx";

const IntroBlurb = () => {
    return (<MaxWidthSection className='bg-sunshine'>
            <div className="w-50">
                <h4>Where I thrive</h4>
                <ul>
                    <li>Design background: Creating interfaces without a design, enforcing essential design
                        principles,
                    </li>
                    <li>Identifying patterns that I have seen in the past lead to poor maintainability and
                        inconsistency
                    </li>
                    <li>Identifying unrepresentable state, error handling, readability, XSS</li>
                    <li>Have seen patterns that lead to unmaintainability and production errors</li>
                    <li>Keeping an open mind ,while pushing back on bad code, while not being (too) opinionated</li>
                </ul>
            </div>
            <div className="w-50">
                <h4>Things I've struggled with</h4>
                <ul>
                    <li>System Administration & DevOps</li>
                    <li>Scalable database approaches</li>
                    <li>Optimising database queries beyond the basics</li>
                    <li>Finding memory leaks beyond the obvious teardown</li>
                    <li>Debugging device/user specific crashes</li>
                </ul>
            </div>
        </MaxWidthSection>
    )
}

export default IntroBlurb