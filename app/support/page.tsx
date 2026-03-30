export default function SupportPage() {
    const sectionTitleStyle = {
        fontSize: '1.5rem',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        paddingBottom: '0.5rem',
        marginBottom: '1.5rem',
        marginTop: '2.5rem',
        fontWeight: '700',
        color: 'var(--text-main)'
    };

    const subTitleStyle = {
        fontSize: '1.1rem',
        fontWeight: '700',
        marginTop: '1.5rem',
        marginBottom: '0.5rem',
        color: 'var(--text-main)'
    };

    const linkStyle = {
        color: 'var(--brand-pink)',
        fontWeight: '600',
        textDecoration: 'none'
    };

    return (
        <main style={{ padding: '12rem 2rem 6rem', maxWidth: '800px', margin: '0 auto', color: 'var(--text-main)', lineHeight: '1.7' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '900' }}>Support Dorable</h1>
            <p style={{ marginBottom: '3rem', opacity: 0.5, fontSize: '0.9rem' }}>Dernière mise à jour : 5 mars 2026</p>

            <p style={{ fontSize: '1.1rem', marginBottom: '3rem', fontStyle: 'italic', opacity: 0.8 }}>
                Votre sécurité et votre expérience sur Dorable sont au cœur de nos préoccupations.<br />
                Cette page centralise nos ressources d'aide et nos recommandations de sécurité pour une utilisation sereine de l'application.
            </p>

            <section>
                <h2 style={sectionTitleStyle}>1. Aide et Support Technique</h2>
                <p>Besoin d'assistance ? Notre équipe est là pour vous accompagner dans l'utilisation de Dorable.</p>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', marginTop: '1rem' }}>
                    <li><strong>Support email</strong> : <a href="mailto:hello@dorable.com" style={linkStyle}>hello@dorable.com</a></li>
                    <li><strong>Disponibilité</strong> : Réponse sous 24h à 48h (jours ouvrés).</li>
                    <li><strong>Objet recommandé</strong> : “Support Dorable – [Description courte]”</li>
                </ul>
                <p style={{ marginTop: '1.5rem' }}><strong>Pour nous aider à résoudre votre problème rapidement, merci de préciser :</strong></p>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li>L'adresse email liée à votre compte.</li>
                    <li>Votre modèle de téléphone (ex: iPhone 15, Samsung S23).</li>
                    <li>Une description précise de la situation rencontrée.</li>
                    <li>Une capture d'écran (vivement recommandé pour les bugs visuels).</li>
                </ul>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>2. Guide de Sécurité (Sorties Réelles)</h2>
                <p>Dorable facilite les sorties physiques, mais la prudence reste de mise comme dans toute interaction sociale avec des personnes croisées en ligne.</p>

                <h3 style={subTitleStyle}>🛡️ Protection de votre vie privée</h3>
                <p>
                    <strong>Règle d'or : Ne communiquez jamais de coordonnées bancaires, de mots de passe ou de codes de sécurité.</strong><br />
                    Méfiez-vous de toute demande d'argent, même sous prétexte d'urgence. Gardez vos informations personnelles sensibles (adresse exacte, détails précis sur votre famille ou votre employeur) confidentielles tant que vous n'avez pas établi une relation de confiance solide en personne.
                </p>

                <h3 style={subTitleStyle}>📍 Choix du lieu</h3>
                <p>Pour vos premières sorties, privilégiez systématiquement des <strong>lieux publics, fréquentés et neutres</strong> (terrasses de cafés, musées, parcs animés). Évitez les lieux isolés ou les domiciles privés pour une première activité partagée.</p>

                <h3 style={subTitleStyle}>🤝 Prévenir son entourage</h3>
                <p>Informez toujours un proche de votre programme : le lieu de l'activité, l'heure et, si possible, l'identité de la personne que vous allez voir. Pensez à partager votre position en temps réel avec un ami de confiance.</p>

                <h3 style={subTitleStyle}>✨ Écoutez votre instinct</h3>
                <p>Si vous ressentez un malaise ou si le comportement de votre interlocuteur vous semble suspect ou incohérent, n'hésitez pas à écourter la rencontre. Votre sécurité et votre bien-être passent avant toute forme de politesse.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>3. Signalement et Modération</h2>
                <p>La communauté Dorable repose sur la bienveillance et le respect mutuel. Si vous rencontrez un comportement inapproprié :</p>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', marginTop: '1rem' }}>
                    <li><strong>Signaler</strong> : Utilisez le bouton de signalement directement sur le profil ou dans la conversation. Chaque rapport est analysé par notre équipe.</li>
                    <li><strong>Bloquer</strong> : Le blocage est immédiat. L'autre utilisateur ne pourra plus voir votre profil ni interagir avec vous.</li>
                </ul>
                <p><strong>Tolérance Zéro</strong> : Tout contenu illicite, haineux, harcelant ou violent entraîne une exclusion immédiate et définitive de la plateforme.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>4. Gestion de Compte</h2>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li><strong>Connexion & Accès</strong> : En cas de perte d'accès ou de compte suspendu, contactez notre support par email.</li>
                    <li><strong>Suppression</strong> : Vous pouvez supprimer votre compte à tout moment via <em>Paramètres &gt; Mon Compte &gt; Supprimer</em>. Toutes vos données seront effacées conformément à notre politique de confidentialité.</li>
                </ul>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>5. Abonnements et Facturation</h2>
                <p>Les transactions et abonnements premium sont gérés directement par les plateformes de paiement mobiles officielles.</p>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', marginTop: '1rem' }}>
                    <li><strong>Annulation</strong> : S'effectue dans les réglages de votre compte Apple App Store ou Google Play Store.</li>
                    <li><strong>Remboursement</strong> : Doit être demandé directement auprès d'Apple ou Google selon leurs conditions générales respectives.</li>
                </ul>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>6. Documents Officiels</h2>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li><strong>CGU / EULA</strong> : <a href="/terms" style={linkStyle}>dorable.app/terms</a></li>
                    <li><strong>Confidentialité</strong> : <a href="/privacy" style={linkStyle}>dorable.app/privacy</a></li>
                    <li><strong>Politique Cookies</strong> : <a href="/cookies" style={linkStyle}>dorable.app/cookies</a></li>
                </ul>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>7. En cas d'urgence</h2>
                <p>En cas de danger immédiat, de menace grave ou de besoin de secours médical lors d'une sortie physique, contactez sans attendre les autorités locales :</p>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', marginTop: '1rem' }}>
                    <li><strong>Numéro Européen (Général)</strong> : <strong style={{ color: 'var(--brand-pink)' }}>112</strong></li>
                    <li><strong>France</strong> : <strong>17</strong> (Police) ou <strong>15</strong> (SAMU)</li>
                    <li><strong>Belgique</strong> : <strong>101</strong> (Police) ou <strong>100</strong> (Ambulance/Pompiers)</li>
                    <li><strong>Suisse</strong> : <strong>117</strong> (Police) ou <strong>144</strong> (Ambulance)</li>
                    <li><strong>Luxembourg</strong> : <strong>113</strong> (Police)</li>
                </ul>
                <p>Priorisez toujours l'appel aux services de secours officiels avant de nous signaler l'incident.</p>
            </section>

            <div style={{ marginTop: '5rem', padding: '2rem', borderTop: '1px solid rgba(0,0,0,0.08)', fontSize: '0.9rem', opacity: 0.8, background: 'rgba(0,0,0,0.02)', borderRadius: '16px' }}>
                <p>
                    <strong>E-ICONS SAS</strong><br />
                    231 rue Saint-Honoré, 75001 Paris<br />
                    Contact : <a href="mailto:hello@dorable.com" style={linkStyle}>hello@dorable.com</a><br />
                    SIRET : 925 328 932 00015
                </p>
            </div>

            <footer style={{ marginTop: '3rem', textAlign: 'center' }}>
                <a href="/" style={{ color: 'var(--brand-pink)', textDecoration: 'none', fontWeight: '700', fontSize: '1.1rem' }}>← Retour à l'accueil</a>
            </footer>
        </main>
    );
}
