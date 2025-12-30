export default function SafetyTipsPage() {
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
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', marginBottom: '1rem', fontWeight: '900' }}>Sécurité</h1>
            <p style={{ marginBottom: '3rem', opacity: 0.5, fontSize: '0.9rem' }}>Dernière mise à jour : 30 Décembre 2025</p>

            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', fontStyle: 'italic' }}>
                L'authenticité et la sécurité de nos membres sont nos priorités absolues.
            </p>

            <section>
                <h2 style={sectionTitleStyle}>1. Informations privées</h2>
                <p>Ne partagez jamais d'informations sensibles (adresse, coordonnées bancaires) lors des premiers échanges. Attendez de bien connaître la personne.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>2. Lieux publics</h2>
                <p>Pour vos premières rencontres, privilégiez des endroits fréquentés et neutres : cafés, bars, parcs ou restaurants.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>3. Prévenez un proche</h2>
                <p>Avant de partir, informez un ami ou un membre de votre famille de l'heure et du lieu de votre rendez-vous.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>4. Écoutez votre instinct</h2>
                <p>Si quelque chose vous semble étrange, ne restez pas. Votre sécurité et votre confort passent avant la politesse.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>5. Signaler</h2>
                <p>Signalez immédiatement tout comportement suspect via l'application. Nous traitons chaque signalement avec sérieux.</p>
            </section>

            <footer style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.08)', textAlign: 'center' }}>
                <a href="/" style={{ color: 'var(--brand-pink)', textDecoration: 'none', fontWeight: '700', fontSize: '1.1rem' }}>← Retour à l'accueil</a>
            </footer>
        </main>
    );
}
