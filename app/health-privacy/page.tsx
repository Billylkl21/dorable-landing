export default function HealthPrivacyPage() {
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
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', marginBottom: '1rem', fontWeight: '900' }}>Données de Santé</h1>
            <p style={{ marginBottom: '3rem', opacity: 0.5, fontSize: '0.9rem' }}>Dernière mise à jour : 30 Décembre 2025</p>

            <section>
                <h2 style={sectionTitleStyle}>1. Introduction</h2>
                <p>
                    Dorable protège vos données sensibles. Cette politique s'applique aux données de bien-être et de santé telles que définies par les réglementations en vigueur.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>2. Catégories de Données</h2>
                <p>Nous pouvons traiter des données liées à :</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    <li>Le bien-être général lors de vos activités sociales.</li>
                    <li>Vos préférences de mobilité pour assurer l'accessibilité des lieux.</li>
                    <li>Toute information de santé partagée volontairement sur votre profil.</li>
                </ul>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>3. Partage et Sécurité</h2>
                <p>Dorable ne vend pas vos données de santé. Elles restent strictement confidentielles et ne sont accessibles qu'aux prestataires techniques indispensables au service.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>4. Vos Droits</h2>
                <p>Vous avez un droit d'accès et de suppression permanent sur ces données. Contact : <strong>contact@dorable.app</strong></p>
            </section>

            <footer style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.08)', textAlign: 'center' }}>
                <a href="/" style={{ color: 'var(--brand-pink)', textDecoration: 'none', fontWeight: '700', fontSize: '1.1rem' }}>← Retour à l'accueil</a>
            </footer>
        </main>
    );
}
