export default function PrivacyPolicy() {
    const sectionTitleStyle = {
        fontSize: '1.5rem',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        paddingBottom: '0.5rem',
        marginBottom: '1.5rem',
        marginTop: '2.5rem',
        fontFamily: 'var(--font-sans)',
        fontWeight: '700',
        color: 'var(--text-main)'
    };

    return (
        <main style={{ padding: '12rem 2rem 6rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-sans)', color: 'var(--text-main)', lineHeight: '1.7' }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', marginBottom: '1rem', fontWeight: '900' }}>Confidentialité</h1>
            <p style={{ marginBottom: '3rem', opacity: 0.5, fontSize: '0.9rem' }}>Dernière mise à jour : 30 Décembre 2025</p>

            <section>
                <h2 style={sectionTitleStyle}>1. Introduction</h2>
                <p>
                    Bienvenue sur Dorable. Nous accordons une importance primordiale à la confidentialité de vos données. Cette politique explique comment nous collectons, utilisons et protégeons vos informations.
                </p>
                <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: 'rgba(219, 39, 119, 0.05)', borderRadius: '16px', border: '1px solid rgba(219, 39, 119, 0.1)' }}>
                    <p style={{ margin: 0, fontSize: '0.95rem' }}>
                        <strong>Nouveau :</strong> Pour les données sensibles, consultez notre <a href="/health-privacy" style={{ color: 'var(--brand-pink)', fontWeight: '600', textDecoration: 'underline' }}>Politique relative aux données de santé</a>.
                    </p>
                </div>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>2. Données collectées</h2>
                <p>Pour fournir nos services, nous collectons :</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    <li><strong>Compte :</strong> Nom, photo, centres d'intérêt.</li>
                    <li><strong>Localisation :</strong> Pour suggérer des activités à proximité (avec votre accord).</li>
                    <li><strong>Contenu :</strong> Photos et messages échangés dans l'app.</li>
                    <li><strong>Technique :</strong> Identifiants d'appareil et rapports de crash.</li>
                </ul>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>3. Utilisation des données</h2>
                <p>Vos données sont utilisées exclusivement pour faciliter les rencontres réelles, améliorer nos suggestions et assurer la sécurité de la communauté.</p>
                <p style={{ marginTop: '1rem', fontWeight: '700' }}>Nous ne vendons jamais vos données personnelles à des tiers.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>4. Vos droits (RGPD)</h2>
                <p>Vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Vous pouvez également retirer votre consentement à la géolocalisation à tout moment.</p>
                <p style={{ marginTop: '1rem' }}>Contact : <strong>contact@dorable.app</strong></p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>5. Suppression du compte</h2>
                <p>Vous pouvez supprimer votre compte instantanément via les paramètres de l'application (Profil {'>'} Paramètres). Cette action est irréversible.</p>
            </section>

            <footer style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.08)', textAlign: 'center' }}>
                <a href="/" style={{ color: 'var(--brand-pink)', textDecoration: 'none', fontWeight: '700', fontSize: '1.1rem' }}>← Retour à l'accueil</a>
            </footer>
        </main>
    );
}
