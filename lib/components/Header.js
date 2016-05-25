const { PropTypes } = window.React;
import propsFromSessionStorage from '../higherOrderComponents/propsFromSessionStorage';

export const Header = ({EBSCO_WIDGET_domain, EBSCO_WIDGET_username, EBSCO_WIDGET_availableDomains}) => {
    return (
        <div className="connexion">
            <a href=""><img src={`lib/images/bibcnrs-logo-${EBSCO_WIDGET_domain}.png`} className="bibcnrslogo"/></a>
            <div className="infos">
                <div className="name">Bonjour {EBSCO_WIDGET_username}</div>
                <div className="domain">Votre domaine principal : {EBSCO_WIDGET_domain}</div>
                <div className="otherDomains">Les domaines possibles : {EBSCO_WIDGET_availableDomains.join(', ')}
                </div>
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
    EBSCO_WIDGET_domain: 'visite',
    EBSCO_WIDGET_username: '',
    EBSCO_WIDGET_availableDomains : []
};

export default propsFromSessionStorage(Header, ['EBSCO_WIDGET_domain','EBSCO_WIDGET_username','EBSCO_WIDGET_availableDomains']);
