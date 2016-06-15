const { PropTypes } = window.React;
import propsFromSessionStorage from '../higherOrderComponents/propsFromSessionStorage';

export const Header = ({EBSCO_WIDGET_domain, EBSCO_WIDGET_username, EBSCO_WIDGET_availableDomains}) => {
    return (
        <div className="connexion">
            <a href=""><img src={`lib/images/bibcnrs-logo-${EBSCO_WIDGET_domain || 'visite'}.png`} className="bibcnrslogo"/></a>
            <img src="lib/images/decor-header.png" className="decoheader"/>
            <div className="infos">
                <div className="name">Bonjour {EBSCO_WIDGET_username}</div>
                <div className="domain">{EBSCO_WIDGET_domain ? <span>Votre domaine principal : {EBSCO_WIDGET_domain}</span> : 'Connectez-vous !'}</div>
                <div className="otherDomains">{EBSCO_WIDGET_availableDomains ? <span>Les domaines possibles : {EBSCO_WIDGET_availableDomains.join(', ')}</span> : null}</div>
            </div>
        </div>
    );
};

Header.propTypes = {
    EBSCO_WIDGET_domain: PropTypes.string,
    EBSCO_WIDGET_username: PropTypes.string,
    EBSCO_WIDGET_availableDomains: PropTypes.array
};

Header.defaultProps = {
    EBSCO_WIDGET_domain: '',
    EBSCO_WIDGET_username: 'Visiteur',
    EBSCO_WIDGET_availableDomains : null
};

export default propsFromSessionStorage(Header, ['EBSCO_WIDGET_domain','EBSCO_WIDGET_username','EBSCO_WIDGET_availableDomains']);
