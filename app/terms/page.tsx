export default function Terms() {
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
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', marginBottom: '1rem', fontWeight: '900' }}>Conditions (CGU)</h1>
            <p style={{ marginBottom: '3rem', opacity: 0.5, fontSize: '0.9rem' }}>Dernière mise à jour : 30 Décembre 2025</p>

            <section>
                <h2 style={sectionTitleStyle}>1. Acceptation des conditions</h2>
                <p>
                    En utilisant Dorable, vous acceptez nos CGU, notre <a href="/privacy" style={{ color: 'var(--brand-pink)', fontWeight: '600' }}>Politique de Confidentialité</a> et notre <a href="/health-privacy" style={{ color: 'var(--brand-pink)', fontWeight: '600' }}>Politique Santé</a>.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>2. Règles de la communauté</h2>
                <p>Dorable est un espace de respect. Tout comportement harcelant, illégal ou haineux entraînera un bannissement immédiat et définitif.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>3. Sécurité et Modération</h2>
                <p>
                    Nous appliquons une politique de tolérance zéro envers les contenus abusifs. Les utilisateurs peuvent signaler ou bloquer tout membre dont le comportement est inapproprié. Nous nous engageons à agir sur les signalements sous 24h.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>4. Géolocalisation</h2>
                <p>L'application utilise votre position pour vous proposer des rencontres pertinentes autour de vous. Vous pouvez désactiver ce service à tout moment dans les réglages de votre téléphone.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>5. Limitation de responsabilité</h2>
                <p>Dorable facilite la mise en relation mais n'est pas responsable des interactions physiques entre les membres. Consultez nos <a href="/safety" style={{ color: 'var(--brand-pink)', fontWeight: '600' }}>Conseils de Sécurité</a> avant toute rencontre.</p>
            </section>

            <footer style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.08)', textAlign: 'center' }}>
                <a href="/" style={{ color: 'var(--brand-pink)', textDecoration: 'none', fontWeight: '700', fontSize: '1.1rem' }}>← Retour à l'accueil</a>
            </footer>
        </main>
    );
}
