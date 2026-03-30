export default function SupportPageEn() {
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
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '900' }}>Dorable Support</h1>
            <p style={{ marginBottom: '3rem', opacity: 0.5, fontSize: '0.9rem' }}>Last updated: March 5, 2026</p>

            <p style={{ fontSize: '1.1rem', marginBottom: '3rem', fontStyle: 'italic', opacity: 0.8 }}>
                Your safety and experience on Dorable are our top priorities.<br />
                This page centralizes our help resources and safety recommendations for a peaceful use of the application.
            </p>

            <section>
                <h2 style={sectionTitleStyle}>1. Help and Technical Support</h2>
                <p>Need assistance? Our team is here to guide you in using Dorable.</p>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', marginTop: '1rem' }}>
                    <li><strong>Email Support</strong>: <a href="mailto:hello@dorable.com" style={linkStyle}>hello@dorable.com</a></li>
                    <li><strong>Availability</strong>: Response within 24h to 48h (business days).</li>
                    <li><strong>Recommended Subject</strong>: “Dorable Support – [Short Description]”</li>
                </ul>
                <p style={{ marginTop: '1.5rem' }}><strong>To help us resolve your issue quickly, please specify:</strong></p>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li>The email address linked to your account.</li>
                    <li>Your device model (e.g., iPhone 15, Samsung S23).</li>
                    <li>A precise description of the situation encountered.</li>
                    <li>A screenshot (highly recommended for visual bugs).</li>
                </ul>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>2. Safety Guide (Real-life Outings)</h2>
                <p>Dorable facilitates in-person outings, but caution remains essential as with any social interaction with people met online.</p>

                <h3 style={subTitleStyle}>🛡️ Protecting your privacy</h3>
                <p>
                    <strong>Golden Rule: Never share banking details, passwords, or security codes.</strong><br />
                    Be wary of any request for money, even under the pretext of an emergency. Keep your sensitive personal information (exact address, specific details about your family or employer) confidential until you have established solid trust in person.
                </p>

                <h3 style={subTitleStyle}>📍 Choosing the location</h3>
                <p>For your first outings, always prioritize <strong>public, crowded, and neutral places</strong> (cafe terraces, museums, busy parks). Avoid isolated places or private homes for a first shared activity.</p>

                <h3 style={subTitleStyle}>🤝 Informing your inner circle</h3>
                <p>Always inform a loved one about your plans: the location of the activity, the time, and, if possible, the identity of the person you are going to see. Consider sharing your real-time location with a trusted friend.</p>

                <h3 style={subTitleStyle}>✨ Trust your instincts</h3>
                <p>If you feel uncomfortable or if your interlocutor's behavior seems suspicious or inconsistent, do not hesitate to cut the outing short. Your safety and well-being come before any form of politeness.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>3. Reporting and Moderation</h2>
                <p>The Dorable community relies on benevolence and mutual respect. If you encounter inappropriate behavior:</p>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', marginTop: '1rem' }}>
                    <li><strong>Report</strong>: Use the report button directly on the profile or in the conversation. Each report is analyzed by our team.</li>
                    <li><strong>Block</strong>: Blocking is immediate. The other user will no longer be able to see your profile or interact with you.</li>
                </ul>
                <p><strong>Zero Tolerance</strong>: Any illegal, hateful, harassing, or violent content results in immediate and permanent exclusion from the platform.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>4. Account Management</h2>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li><strong>Login & Access</strong>: In case of lost access or suspended account, contact our support via email.</li>
                    <li><strong>Deletion</strong>: You can delete your account at any time via <em>Settings &gt; My Account &gt; Delete</em>. All your data will be erased in accordance with our privacy policy.</li>
                </ul>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>5. Subscriptions and Billing</h2>
                <p>Transactions and premium subscriptions are managed directly by the official mobile payment platforms.</p>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', marginTop: '1rem' }}>
                    <li><strong>Cancellation</strong>: Done in your Apple App Store or Google Play Store account settings.</li>
                    <li><strong>Refund</strong>: Must be requested directly from Apple or Google according to their respective terms and conditions.</li>
                </ul>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>6. Official Documents</h2>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li><strong>Terms / EULA</strong>: <a href="/en/terms" style={linkStyle}>dorable.app/en/terms</a></li>
                    <li><strong>Privacy Policy</strong>: <a href="/en/privacy" style={linkStyle}>dorable.app/en/privacy</a></li>
                </ul>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>7. In Case of Emergency</h2>
                <p>In the event of immediate danger, serious threat, or need for medical assistance during a physical outing, contact local authorities without delay:</p>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem', marginTop: '1rem' }}>
                    <li><strong>European Number (General)</strong>: <strong style={{ color: 'var(--brand-pink)' }}>112</strong></li>
                    <li><strong>US/Canada</strong>: <strong>911</strong></li>
                    <li><strong>UK</strong>: <strong>999</strong> or <strong>112</strong></li>
                    <li><strong>France</strong>: <strong>17</strong> (Police) or <strong>15</strong> (Medical)</li>
                </ul>
                <p>Always prioritize calling official emergency services before reporting the incident to us.</p>
            </section>

            <div style={{ marginTop: '5rem', padding: '2rem', borderTop: '1px solid rgba(0,0,0,0.08)', fontSize: '0.9rem', opacity: 0.8, background: 'rgba(0,0,0,0.02)', borderRadius: '16px' }}>
                <p>
                    <strong>E-ICONS SAS</strong><br />
                    231 rue Saint-Honoré, 75001 Paris<br />
                    Contact: <a href="mailto:hello@dorable.com" style={linkStyle}>hello@dorable.com</a><br />
                    SIRET: 925 328 932 00015
                </p>
            </div>

            <footer style={{ marginTop: '3rem', textAlign: 'center' }}>
                <a href="/" style={{ color: 'var(--brand-pink)', textDecoration: 'none', fontWeight: '700', fontSize: '1.1rem' }}>← Back to Home</a>
            </footer>
        </main>
    );
}
