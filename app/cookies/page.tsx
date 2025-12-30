export default function CookiesPage() {
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
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', marginBottom: '1rem', fontWeight: '900' }}>Cookies</h1>
            <p style={{ marginBottom: '3rem', opacity: 0.5, fontSize: '0.9rem' }}>Dernière mise à jour : 30 Décembre 2025</p>

            <section>
                <h2 style={sectionTitleStyle}>1. Définition</h2>
                <p>Un cookie est un petit fichier texte déposé sur votre terminal lors de la visite d'un site. Il permet d'améliorer votre navigation.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>2. Utilisation</h2>
                <p>Dorable utilise des cookies pour assurer le bon fonctionnement du site, mémoriser vos préférences et analyser le trafic de manière anonyme.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>3. Vos choix</h2>
                <p>Vous pouvez désactiver les cookies via les paramètres de votre navigateur, bien que cela puisse affecter certaines fonctionnalités du site.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>4. Conservation</h2>
                <p>Les cookies sont conservés pour une durée maximale de 13 mois conformément aux recommandations de la CNIL.</p>
            </section>

            <footer style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.08)', textAlign: 'center' }}>
                <a href="/" style={{ color: 'var(--brand-pink)', textDecoration: 'none', fontWeight: '700', fontSize: '1.1rem' }}>← Retour à l'accueil</a>
            </footer>
        </main>
    );
}
