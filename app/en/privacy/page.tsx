export default function PrivacyPolicyEn() {
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

    return (
        <main style={{ padding: '12rem 2rem 6rem', maxWidth: '800px', margin: '0 auto', color: 'var(--text-main)', lineHeight: '1.7' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '900' }}>Privacy Policy</h1>

            <div style={{ marginBottom: '3rem', opacity: 0.6, fontSize: '0.9rem' }}>
                <p>Version: 2.0</p>
                <p>Last updated: February 24, 2026</p>
                <p>Effective Date: February 24, 2026</p>
            </div>

            <section>
                <h2 style={sectionTitleStyle}>1. Data Controller</h2>
                <p>The Dorable application is published by:</p>
                <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(0,0,0,0.02)', borderRadius: '12px' }}>
                    <p><strong>E-ICONS SAS</strong></p>
                    <p>SIRET: 925 328 932 00015</p>
                    <p>Headquarters: 231 rue Saint-Honoré, 75001 Paris, France</p>
                    <p>Privacy Email: <a href="mailto:hello@dorable.com" style={{ color: 'var(--brand-pink)' }}>hello@dorable.com</a></p>
                    <p>Legal Contact Email: <a href="mailto:hello@dorable.com" style={{ color: 'var(--brand-pink)' }}>hello@dorable.com</a></p>
                </div>
                <p style={{ marginTop: '1rem' }}>Dorable determines the purposes and means of the personal data processing carried out via the application.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>2. Purpose of this Policy</h2>
                <p>This privacy policy describes:</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    <li>the personal data collected via Dorable,</li>
                    <li>the purposes and legal bases of processing,</li>
                    <li>the recipients of the data,</li>
                    <li>retention periods,</li>
                    <li>your rights and how to exercise them.</li>
                </ul>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>3. Personal Data Collected</h2>
                <p>Depending on your use of the application, Dorable may collect the following categories:</p>

                <h3 style={subTitleStyle}>Account and Contact Data</h3>
                <p>first/last name, username, email address, phone number (if provided).</p>

                <h3 style={subTitleStyle}>Profile Data</h3>
                <p>profile pictures and lifestyle photos, bio, interests, favorite neighborhood, and other profile information voluntarily provided.</p>

                <h3 style={subTitleStyle}>User Content Data</h3>
                <p>messages exchanged in the app, published/shared content (activities, places, collections, comments).</p>

                <h3 style={subTitleStyle}>Location Data</h3>
                <p>precise location (with consent) to display nearby activities and places.</p>

                <h3 style={subTitleStyle}>Subscription and Transaction Data</h3>
                <p>subscription status, App Store transaction identifiers, activation/restoration history.</p>

                <h3 style={subTitleStyle}>Technical Data</h3>
                <p>internal user identifier, technical device identifiers necessary for operation, crash logs, performance, and security.</p>

                <h3 style={subTitleStyle}>Sensitive Data (if applicable)</h3>
                <p>only data voluntarily provided in the profile (e.g., gender) when relevant for personalizing the experience.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>4. Purposes and Legal Bases</h2>
                <p>Dorable processes your data to:</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    <li><strong>Service Provision</strong> (account creation, authentication, place recommendations, chat, map, activities) - <em>Legal Basis: performance of the contract.</em></li>
                    <li><strong>Experience Personalization</strong> (profile/activity/place suggestions) - <em>Legal Basis: performance of the contract and legitimate interest.</em></li>
                    <li><strong>Security, Moderation, and Anti-Abuse/Fraud</strong> - <em>Legal Basis: legitimate interest and legal obligation.</em></li>
                    <li><strong>Subscription and In-App Payment Management</strong> - <em>Legal Basis: performance of the contract and legal obligation (accounting/tax).</em></li>
                    <li><strong>Technical Improvement and Stability</strong> (diagnostics, crash reports, performance) - <em>Legal Basis: legitimate interest.</em></li>
                    <li><strong>Marketing Communications</strong> (if enabled) - <em>Legal Basis: consent (withdrawable at any time).</em></li>
                </ul>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>5. Content Moderation and Community Security (UGC)</h2>
                <p>Dorable applies a zero-tolerance policy towards illegal, hateful, violent, non-consensual sexual content, harassment, or abusive behavior.</p>
                <h3 style={subTitleStyle}>Available mechanisms:</h3>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    <li>reporting of content/profiles/messages/activities/places/collections,</li>
                    <li>blocking users with immediate removal of visibility in your feeds,</li>
                    <li>review of reports and moderation actions within fast operational timeframes (goal: under 24h for priority cases).</li>
                </ul>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>6. Data Recipients</h2>
                <p>Data may be transmitted:</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    <li>to authorized internal teams at Dorable,</li>
                    <li>to technical providers acting as processors (hosting, database, technical analytics, notifications, payment services/app stores, security),</li>
                    <li>to competent authorities when required by law.</li>
                </ul>
                <p style={{ marginTop: '1rem', fontWeight: '700' }}>Dorable does not sell your personal data.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>7. Transfers Outside the EU</h2>
                <p>Certain providers may be located outside the European Union. In such cases, Dorable implements appropriate safeguards (notably standard contractual clauses and suitable security measures).</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>8. Retention Periods</h2>
                <p>Data is retained for periods proportionate to the purposes:</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    <li><strong>active account:</strong> during the contractual relationship,</li>
                    <li><strong>content and messages:</strong> for the duration necessary for the service and security,</li>
                    <li><strong>technical logs and diagnostics:</strong> limited duration,</li>
                    <li><strong>data related to legal obligations:</strong> according to applicable legal retention periods.</li>
                </ul>
                <p style={{ marginTop: '1rem' }}>Upon account deletion, data is deleted or anonymized, subject to legal retention obligations.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>9. Your Rights</h2>
                <p>In accordance with the GDPR, you have the following rights: access, rectification, erasure, restriction, objection, portability, withdrawal of consent.</p>
                <p style={{ marginTop: '1rem' }}>You can exercise your rights at: <a href="mailto:hello@dorable.com" style={{ color: 'var(--brand-pink)', fontWeight: '600' }}>hello@dorable.com</a></p>
                <p>You may also lodge a complaint with the relevant data protection authority (e.g., CNIL in France).</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>10. Account Deletion</h2>
                <p>You can delete your account from the app: <strong>Profile &gt; Settings &gt; Delete Account</strong>.</p>
                <p>Deletion is irreversible, subject to legal retention obligations.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>11. Minors</h2>
                <p>Dorable is strictly restricted to individuals aged 18 and over. We do not knowingly collect data from minors.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>12. Data Security</h2>
                <p>Dorable implements reasonable technical and organizational measures to protect your data against unauthorized access, loss, alteration, or disclosure.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>13. Modifications</h2>
                <p>Dorable may modify this policy at any time. The update date is stated at the top of the document.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>14. Contact</h2>
                <p>For any privacy-related questions: <a href="mailto:hello@dorable.com" style={{ color: 'var(--brand-pink)', fontWeight: '600' }}>hello@dorable.com</a></p>
            </section>

            <footer style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.08)', textAlign: 'center' }}>
                <a href="/" style={{ color: 'var(--brand-pink)', textDecoration: 'none', fontWeight: '700', fontSize: '1.1rem' }}>← Back to Home</a>
            </footer>
        </main>
    );
}
