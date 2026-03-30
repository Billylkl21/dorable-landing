export default function Terms() {
    const sectionTitleStyle = {
        fontSize: '1.5rem',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        paddingBottom: '0.5rem',
        marginBottom: '1.5rem',
        marginTop: '2.5rem',
        fontWeight: '700',
        color: 'var(--text-main)'
    };

    const linkStyle = {
        color: 'var(--brand-pink)',
        fontWeight: '600',
        textDecoration: 'none'
    };

    return (
        <main style={{ padding: '12rem 2rem 6rem', maxWidth: '800px', margin: '0 auto', color: 'var(--text-main)', lineHeight: '1.7' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '900' }}>Conditions Générales d’Utilisation (CGU) / EULA</h1>
            <p style={{ marginBottom: '0.5rem', fontSize: '1.2rem', fontWeight: '600' }}>Dorable</p>
            <p style={{ marginBottom: '0.5rem', opacity: 0.7 }}>Version : 1.0</p>
            <p style={{ marginBottom: '3rem', opacity: 0.5, fontSize: '0.9rem' }}>Dernière mise à jour : 5 mars 2026 | Date d’effet : 5 mars 2026</p>

            <p style={{ marginBottom: '2rem', fontStyle: 'italic' }}>
                Les présentes Conditions Générales d’Utilisation (les « Conditions ») constituent également les Terms of Use / EULA de l’application Dorable.
            </p>

            <section>
                <h2 style={sectionTitleStyle}>1) Éditeur du service</h2>
                <p>
                    Le service Dorable est exploité par :<br />
                    <strong>E-ICONS</strong>, Société par Actions Simplifiée (SAS)<br />
                    SIRET : 925 328 932 00015<br />
                    Siège social : 231 rue Saint-Honoré, 75001 Paris, France<br />
                    Contact : <a href="mailto:hello@dorable.com" style={linkStyle}>hello@dorable.com</a><br />
                    Dans les présentes, « Dorable », « nous », « notre » désignent E-ICONS.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>2) Objet du service</h2>
                <p>
                    Dorable est une plateforme communautaire permettant notamment de :
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li>découvrir des personnes et activités à proximité ;</li>
                    <li>créer, rejoindre et discuter autour d’activités ;</li>
                    <li>interagir avec d’autres utilisateurs dans un cadre social.</li>
                </ul>
                <p>
                    Dorable n’est pas un service de rencontre amoureuse. Tout usage détourné contraire aux présentes Conditions ou aux règles communautaires est interdit.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>3) Acceptation des Conditions</h2>
                <p>
                    En créant un compte, en accédant à l’application ou en utilisant le Service, vous reconnaissez avoir lu et accepté :
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li>les présentes Conditions ;</li>
                    <li>la <a href="/privacy" style={linkStyle}>Politique de confidentialité</a> ;</li>
                    <li>les règles de sécurité et de communauté publiées par Dorable.</li>
                </ul>
                <p>
                    Si vous n’acceptez pas ces documents, vous ne devez pas utiliser le Service.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>4) Conditions d’éligibilité</h2>
                <p>
                    Vous déclarez et garantissez :
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li>avoir au moins 18 ans ;</li>
                    <li>disposer de la capacité juridique pour contracter ;</li>
                    <li>ne pas être interdit d’utilisation du Service au regard des lois applicables ;</li>
                    <li>ne pas avoir été exclu définitivement du Service (sauf autorisation écrite de Dorable).</li>
                </ul>
                <p>
                    Vous vous engagez à fournir des informations exactes, à jour et complètes.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>5) Création de compte et sécurité</h2>
                <p>
                    Vous êtes responsable :
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li>de la confidentialité de vos identifiants ;</li>
                    <li>de toute activité réalisée depuis votre compte ;</li>
                    <li>de la sécurisation de votre appareil.</li>
                </ul>
                <p>
                    Vous vous engagez à nous signaler immédiatement tout accès non autorisé à votre compte.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>6) Règles d’utilisation et interdictions</h2>
                <p>
                    Il est notamment interdit de :
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li>usurper l’identité d’un tiers ;</li>
                    <li>harceler, menacer, intimidider, discriminer ou diffamer ;</li>
                    <li>publier des contenus illicites, haineux, violents, sexuels explicites ou portant atteinte aux mineurs ;</li>
                    <li>promouvoir drogues, armes, terrorisme, escroqueries ou activités illégales ;</li>
                    <li>envoyer du spam, démarcher, solliciter de l’argent ;</li>
                    <li>collecter des données d’utilisateurs sans autorisation ;</li>
                    <li>contourner les mesures de sécurité, scraper, reverse engineer, ou perturber le Service ;</li>
                    <li>créer plusieurs comptes pour contourner une suspension.</li>
                </ul>
                <p>
                    Tout manquement peut entraîner des mesures immédiates (restriction, suspension, suppression de compte).
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>7) Contenus utilisateurs (UGC)</h2>
                <p>
                    Vous êtes seul responsable des contenus que vous publiez (texte, photo, message, etc.).<br />
                    Vous garantissez disposer de tous les droits nécessaires sur ces contenus.<br />
                    Vous vous interdisez de publier des informations sensibles (coordonnées bancaires, données d’identité de tiers, etc.) vous exposant ou exposant autrui.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>8) Licence sur vos contenus</h2>
                <p>
                    Vous conservez la propriété de vos contenus. Toutefois, afin d’exploiter le Service, vous accordez à Dorable une licence : non exclusive, mondiale, gratuite, pour la durée nécessaire au fonctionnement, à la modération et à la sécurité du Service, permettant d’héberger, reproduire, afficher, adapter techniquement, modérer et supprimer les contenus si nécessaire.<br />
                    Cette licence prend fin dans un délai raisonnable après suppression de votre compte, sous réserve des obligations légales de conservation et des besoins de preuve/sécurité.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>9) Modération, signalement, blocage, sécurité</h2>
                <p>
                    Pour la sécurité de la communauté, Dorable met en place :
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li>des filtres automatisés (dont filtrage textuel) ;</li>
                    <li>des contrôles manuels de modération ;</li>
                    <li>un mécanisme de signalement in-app ;</li>
                    <li>un mécanisme de blocage utilisateur.</li>
                </ul>
                <p>
                    Principes de traitement :
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li>le blocage d’un utilisateur masque immédiatement ses contenus dans l’expérience de l’utilisateur qui bloque ;</li>
                    <li>les signalements sont traités par l’équipe de modération ;</li>
                    <li>en cas de contenu manifestement illicite ou dangereux, action sous 24 heures (retrait contenu / restriction compte / exclusion selon gravité) ;</li>
                    <li>Dorable peut notifier l’équipe de modération de tout événement critique (ex. signalement/blocage).</li>
                </ul>
                <p>
                    Dorable peut coopérer avec les autorités lorsque la loi l’exige.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>10) Politique de tolérance renforcée (mineurs, exploitation, violence)</h2>
                <p>
                    Dorable applique une politique de tolérance zéro pour :
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li>toute sexualisation de mineurs ;</li>
                    <li>toute exploitation sexuelle ;</li>
                    <li>toute incitation à la violence grave ;</li>
                    <li>toute apologie de crimes ou activités terroristes.</li>
                </ul>
                <p>
                    Les contenus ou comportements concernés peuvent entraîner une suppression immédiate de compte et, si nécessaire, un signalement aux autorités compétentes.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>11) Services tiers</h2>
                <p>
                    Certaines fonctionnalités peuvent s’appuyer sur des services tiers (ex. messagerie, hébergement, analytics, paiement).<br />
                    Leur usage peut impliquer un traitement de données selon leurs propres politiques, dans le respect de notre Politique de confidentialité et des lois applicables.<br />
                    Dorable n’est pas responsable des indisponibilités imputables à des prestataires tiers.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>12) Données personnelles</h2>
                <p>
                    Le traitement des données personnelles est encadré par notre <a href="/privacy" style={linkStyle}>Politique de confidentialité</a>.<br />
                    Vous disposez, selon la réglementation applicable (notamment RGPD), de droits d’accès, rectification, suppression, limitation, opposition et portabilité, dans les conditions prévues par la loi.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>13) Géolocalisation et fonctionnalités locales</h2>
                <p>
                    Certaines fonctionnalités reposent sur la géolocalisation. Vous pouvez gérer les autorisations de localisation depuis votre appareil. La désactivation peut limiter certaines fonctions.<br />
                    Dorable peut afficher une localisation approximative selon les paramètres du Service.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>14) Abonnements, achats et renouvellement</h2>
                <p>
                    Dorable peut proposer des fonctionnalités payantes (abonnement, options premium) via Apple App Store et/ou Google Play.<br />
                    Sauf mention contraire : les abonnements sont à renouvellement automatique ; l’annulation se fait depuis la plateforme de paiement (Apple/Google) ; les conditions tarifaires et périodes d’essai sont affichées avant achat.<br />
                    Les remboursements sont traités selon les règles de la boutique d’applications et le droit applicable.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>15) Propriété intellectuelle de Dorable</h2>
                <p>
                    Le Service, ses marques, logos, interfaces, textes, graphismes, logiciels et éléments associés sont protégés par les droits de propriété intellectuelle.<br />
                    Aucune cession de droits n’est consentie. Vous disposez uniquement d’un droit d’utilisation personnel, non exclusif, non transférable et révocable, pour un usage conforme aux présentes Conditions.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>16) Suspension, résiliation, suppression de compte</h2>
                <p>
                    Vous pouvez supprimer votre compte à tout moment depuis l’application.<br />
                    Dorable peut suspendre ou résilier votre accès, avec ou sans préavis selon la gravité, notamment en cas de : violation des Conditions ; risque pour la sécurité des utilisateurs ; comportement frauduleux ou illicite.<br />
                    En cas de résiliation, certaines données peuvent être conservées pour des obligations légales, sécurité, lutte contre la fraude et gestion de contentieux.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>17) Exclusion de garanties</h2>
                <p>
                    Le Service est fourni « en l’état » et « selon disponibilité ».<br />
                    Dorable ne garantit pas : une disponibilité continue et sans erreur ; l’absence d’interruption ; la compatibilité avec tous les appareils ; la fiabilité de tous les contenus publiés par les utilisateurs.<br />
                    Vous êtes seul responsable de vos interactions avec les autres utilisateurs, y compris lors de rencontres hors ligne.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>18) Limitation de responsabilité</h2>
                <p>
                    Dans la limite autorisée par la loi, Dorable ne pourra être tenue responsable des dommages indirects, pertes de chance, pertes de données, atteintes à l’image, pertes financières ou préjudices immatériels.<br />
                    Rien dans ces Conditions ne limite les droits impératifs des consommateurs, ni les responsabilités ne pouvant être exclues par la loi.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>19) Indemnisation</h2>
                <p>
                    Vous acceptez d’indemniser Dorable en cas de réclamation, action, dommage, coût ou frais (y compris frais d’avocat raisonnables) résultant : de vos contenus ; de votre usage fautif du Service ; de la violation des présentes Conditions ou des droits d’un tiers. Dans la limite autorisée par la loi applicable.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>20) Évolution des Conditions</h2>
                <p>
                    Dorable peut modifier les présentes Conditions à tout moment, notamment pour : conformité légale/réglementaire ; évolution des fonctionnalités ; sécurité et prévention des abus.<br />
                    En cas de modification substantielle, nous publierons une version mise à jour avec nouvelle date d’effet et, si nécessaire, informerons les utilisateurs par un canal approprié.<br />
                    La poursuite de l’utilisation du Service après entrée en vigueur vaut acceptation des modifications.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>21) Droit applicable et juridiction</h2>
                <p>
                    Les présentes Conditions sont régies par le droit français.<br />
                    En cas de litige, une solution amiable sera recherchée en priorité.<br />
                    À défaut d’accord amiable, et sous réserve des règles impératives de protection du consommateur, compétence est attribuée aux juridictions françaises compétentes.<br />
                    Les consommateurs peuvent également recourir à un dispositif de médiation conforme aux dispositions légales applicables.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>22) Nullité partielle</h2>
                <p>
                    Si une clause des présentes Conditions est jugée invalide ou inapplicable, les autres clauses demeurent pleinement en vigueur.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>23) Intégralité de l’accord</h2>
                <p>
                    Les présentes Conditions, avec la Politique de confidentialité et les règles de sécurité/communauté, constituent l’accord complet entre vous et Dorable concernant le Service.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>24) Liens contractuels officiels</h2>
                <p>
                    Conditions / EULA : <a href="/terms" style={linkStyle}>https://dorable.app/terms</a><br />
                    Politique de confidentialité : <a href="/privacy" style={linkStyle}>https://dorable.app/privacy</a><br />
                    Support : <a href="/support" style={linkStyle}>https://dorable.app/support</a>
                </p>
            </section>

            <footer style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.08)', textAlign: 'center' }}>
                <a href="/" style={{ color: 'var(--brand-pink)', textDecoration: 'none', fontWeight: '700', fontSize: '1.1rem' }}>← Retour à l'accueil</a>
            </footer>
        </main>
    );
}
