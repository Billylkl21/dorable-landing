export default function HealthPrivacyPageEn() {
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
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '900' }}>Health Data Privacy</h1>
            <p style={{ marginBottom: '3rem', opacity: 0.5, fontSize: '0.9rem' }}>Last updated: December 30, 2025</p>

            <section>
                <h2 style={sectionTitleStyle}>1. Introduction</h2>
                <p>
                    Dorable protects your sensitive data. This policy applies to wellness and health data as defined by current regulations.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>2. Categories of Data</h2>
                <p>We may process data related to:</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    <li>General wellness during your social activities.</li>
                    <li>Your mobility preferences to ensure venue accessibility.</li>
                    <li>Any health information voluntarily shared on your profile.</li>
                </ul>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>3. Sharing and Security</h2>
                <p>Dorable does not sell your health data. They remain strictly confidential and are only accessible to essential technical service providers.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>4. Your Rights</h2>
                <p>You have a permanent right to access and delete this data. Contact: <strong>hello@dorable.com</strong></p>
            </section>

            <footer style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.08)', textAlign: 'center' }}>
                <a href="/" style={{ color: 'var(--brand-pink)', textDecoration: 'none', fontWeight: '700', fontSize: '1.1rem' }}>← Back to Home</a>
            </footer>
        </main>
    );
}
