export default function CookiesPageEn() {
    const sectionTitleStyle = {
        fontSize: '1.5rem',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        paddingBottom: '0.5rem',
        marginBottom: '1.5rem',
        marginTop: '2.5rem',
        fontWeight: '700',
        color: 'var(--text-main)'
    };

    return (
        <main style={{ padding: '12rem 2rem 6rem', maxWidth: '800px', margin: '0 auto', color: 'var(--text-main)', lineHeight: '1.7' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '900' }}>Cookies Policy</h1>
            <p style={{ marginBottom: '3rem', opacity: 0.5, fontSize: '0.9rem' }}>Last updated: December 30, 2025</p>

            <section>
                <h2 style={sectionTitleStyle}>1. Definition</h2>
                <p>A cookie is a small text file placed on your device when visiting a website. It is used to improve your browsing experience.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>2. Usage</h2>
                <p>Dorable uses cookies to ensure the proper functioning of the site, remember your preferences, and analyze traffic anonymously.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>3. Your Choices</h2>
                <p>You can disable cookies via your browser settings, although this may affect certain features of the site.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>4. Retention</h2>
                <p>Cookies are kept for a maximum of 13 months in accordance with CNIL recommendations and applicable laws.</p>
            </section>

            <footer style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.08)', textAlign: 'center' }}>
                <a href="/" style={{ color: 'var(--brand-pink)', textDecoration: 'none', fontWeight: '700', fontSize: '1.1rem' }}>← Back to Home</a>
            </footer>
        </main>
    );
}
