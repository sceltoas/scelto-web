import { Link } from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import ArrowDown from '../images/icons/Scelto–icon-arrow-down-dark-bg.svg';
import './FullPageImageWithHeader.less';

const FullPageImageWithHeader = ({
    image,
    title,
    subtitle,
    link,
    contactMeHref,
    children,
}) => (
    <div
        className="full-page-image-with-header"
        style={{
            background: `linear-gradient(rgba(40, 55, 57, 0.6), rgba(40, 55, 57, 0.6)), url(${image}) center`,
            backgroundSize: 'cover',
        }}
    >
        <Fade>
            <h1 className="full-page-image-with-header__title">{title}</h1>
        </Fade>
        {subtitle && (
            <Fade>
                <h3 className="full-page-image-with-header__subtitle">
                    {subtitle}
                </h3>
            </Fade>
        )}

        {children && (
            <h3 className="full-page-image-with-header__content">{children}</h3>
        )}

        {!!contactMeHref && (
            <h5 className="contact-form-link">
                <a href={contactMeHref} className="sc-link">
                    Ønsker du å bli kontaktet av oss?
                </a>
            </h5>
        )}

        {link && (
            <Link to={link}>
                <img
                    style={{
                        position: 'absolute',
                        bottom: '40px',
                        margin: 'auto',
                        transform: 'translateX(-50%)',
                    }}
                    src={ArrowDown}
                    width="40px"
                    height="40px"
                    alt={`Ikon for ${title}`}
                />
            </Link>
        )}
    </div>
);

FullPageImageWithHeader.propTypes = {
    image: PropTypes.string,
    title: PropTypes.node,
    subtitle: PropTypes.string,
    link: PropTypes.string,
    contactMeHref: PropTypes.string,
};

export default FullPageImageWithHeader;
