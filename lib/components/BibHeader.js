import { PropTypes } from 'react';
import propsFromSessionStorage from '../higherOrderComponents/propsFromSessionStorage';

export const BibHeader = ({EBSCO_WIDGET_domain, EBSCO_WIDGET_username, EBSCO_WIDGET_availableDomains}) => {
    return (
        <div className="connexion">
            <a href="/">
                <img src={process.env.NODE_ENV === 'test' ? `lib/images/bibcnrs-logo-${EBSCO_WIDGET_domain || 'visite'}.png` : require(`../images/bibcnrs-logo-${EBSCO_WIDGET_domain || 'visite'}.png`)} className="bibcnrslogo" alt={'logo bibcnrs ' + EBSCO_WIDGET_domain}/>
            </a>
            <img src={process.env.NODE_ENV === 'test' ? 'lib/images/decor-header.png' : require('../images/decor-header.png')} className="decoheader"/>
            <div className="siteTitle"><span className="widthTitle">Accès aux ressources documentaires du CNRS</span></div>
            <div className="infos">
                <div className="name">{EBSCO_WIDGET_username}</div>
                <div className="otherDomains">
                {EBSCO_WIDGET_availableDomains ? <span>Domaine(s) autorisé(s) : {EBSCO_WIDGET_availableDomains.join(', ')}</span> : null}</div>
            </div>
        </div>
    );
};

BibHeader.propTypes = {
    EBSCO_WIDGET_domain: PropTypes.string,
    EBSCO_WIDGET_username: PropTypes.string,
    EBSCO_WIDGET_availableDomains: PropTypes.array
};

BibHeader.defaultProps = {
    EBSCO_WIDGET_domain: '',
    EBSCO_WIDGET_username: '',
    EBSCO_WIDGET_availableDomains : null
};

export default propsFromSessionStorage(BibHeader, ['EBSCO_WIDGET_domain','EBSCO_WIDGET_username','EBSCO_WIDGET_availableDomains']);
