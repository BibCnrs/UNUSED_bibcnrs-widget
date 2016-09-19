import { PropTypes } from 'react';
import propsFromSessionStorage from '../higherOrderComponents/propsFromSessionStorage';
import translation from '../config/translation';

export const BibHeader = ({EBSCO_WIDGET_domain, EBSCO_WIDGET_username, EBSCO_WIDGET_availableDomains, language}) => {

    return (
        <div className="connexion bsbb">
            <a href="/">
                <img src={process.env.NODE_ENV === 'test' ? `lib/images/bibcnrs-logo-${EBSCO_WIDGET_domain || 'visite'}.png` : require(`../images/bibcnrs-logo-${EBSCO_WIDGET_domain || 'visite'}.png`)} className="bibcnrslogo" alt={'logo bibcnrs ' + EBSCO_WIDGET_domain}/>
            </a>
            <img src={process.env.NODE_ENV === 'test' ? 'lib/images/decor-header.png' : require('../images/decor-header.png')} className="decoheader"/>
            <div className="sitetitle bsbb">
                <div className="largetitle">{translation[language].longTitle}</div>
                <div className="smalltitle">{translation[language].courtTitle}</div>
            </div>
            <div className="infos bsbb">
                <div className="name bsbb">{EBSCO_WIDGET_username}</div>
                <div className="otherdomains bsbb">
                {EBSCO_WIDGET_availableDomains ? <span>{translation[language].authorizations} : {EBSCO_WIDGET_availableDomains.join(', ')}</span> : null}</div>
            </div>
        </div>
    );
};

BibHeader.propTypes = {
    EBSCO_WIDGET_domain: PropTypes.string,
    EBSCO_WIDGET_username: PropTypes.string,
    EBSCO_WIDGET_availableDomains: PropTypes.array,
    language: PropTypes.string
};

BibHeader.defaultProps = {
    EBSCO_WIDGET_domain: '',
    EBSCO_WIDGET_username: '',
    EBSCO_WIDGET_availableDomains : null,
    language: 'fr'
};

export default propsFromSessionStorage(BibHeader, ['EBSCO_WIDGET_domain','EBSCO_WIDGET_username','EBSCO_WIDGET_availableDomains','language']);
