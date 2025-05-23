import React from 'react';

interface LayoutProps {
    children?: React.ReactNode;
    noVerticalPadding?: boolean;
    className?: string;
}

const MaxWidthSection: React.FC<LayoutProps> = ({children, noVerticalPadding, ...props}) => {
    const verticalPaddingClass = noVerticalPadding ? '' : 'py-16';

    return (
        <section className="max-width-section" {...props}>
            <div className={`max-width-section__content d-flex px-8 mx-auto mw-800px ${verticalPaddingClass}`}>
                {children}
            </div>
        </section>
    );
};

export default MaxWidthSection;