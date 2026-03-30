export default function LegalPageEn() {
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
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '900' }}>Legal Notice</h1>
            <p style={{ marginBottom: '3rem', opacity: 0.5, fontSize: '0.9rem' }}>Last updated: December 30, 2025</p>

            <section>
                <h2 style={sectionTitleStyle}>1. Site Publisher</h2>
                <p>
                    The Dorable application and this website are published by <strong>E-ICONS</strong>, a simplified joint-stock company (SAS), registered with the Paris Trade and Companies Register under the SIRET number <strong>925 328 932 00015</strong>.
                </p>
                <p style={{ marginTop: '1rem' }}>
                    <strong>Headquarters:</strong> 231 rue Saint-Honoré, 75001 Paris, France.<br />
                    <strong>Contact:</strong> hello@dorable.com
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>2. Publication Director</h2>
                <p>The Publication Director of the site is Lukale Umumbu (CEO).</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>3. Hosting</h2>
                <p>
                    The site is hosted by:<br />
                    <strong>Vercel Inc.</strong><br />
                    440 N Barranca Ave #4133, Covina, CA 91723, USA.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>4. Intellectual Property</h2>
                <p>
                    This entire site is governed by French and international legislation on copyright and intellectual property. All reproduction rights are reserved, including for downloadable documents and iconographic and photographic representations.
                </p>
            </section>

            <footer style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.08)', textAlign: 'center' }}>
                <a href="/" style={{ color: 'var(--brand-pink)', textDecoration: 'none', fontWeight: '700', fontSize: '1.1rem' }}>← Back to Home</a>
            </footer>
        </main>
    );
}
