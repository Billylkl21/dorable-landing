export default function TermsEn() {
    const sectionTitleStyle = {
        fontSize: '1.5rem',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        paddingBottom: '0.5rem',
        marginBottom: '1.5rem',
        marginTop: '2.5rem',
        fontWeight: '700',
        color: 'var(--text-main)'
    };

    const linkStyle = {
        color: 'var(--brand-pink)',
        fontWeight: '600',
        textDecoration: 'none'
    };

    return (
        <main style={{ padding: '12rem 2rem 6rem', maxWidth: '800px', margin: '0 auto', color: 'var(--text-main)', lineHeight: '1.7' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '900' }}>Terms of Use (EULA)</h1>
            <p style={{ marginBottom: '0.5rem', fontSize: '1.2rem', fontWeight: '600' }}>Dorable</p>
            <p style={{ marginBottom: '0.5rem', opacity: 0.7 }}>Version: 1.0</p>
            <p style={{ marginBottom: '3rem', opacity: 0.5, fontSize: '0.9rem' }}>Last updated: March 5, 2026 | Effective Date: March 5, 2026</p>

            <p style={{ marginBottom: '2rem', fontStyle: 'italic' }}>
                These General Terms of Use (the "Terms") also constitute the Terms of Use / EULA of the Dorable application.
            </p>

            <section>
                <h2 style={sectionTitleStyle}>1) Service Publisher</h2>
                <p>
                    The Dorable service is operated by:<br />
                    <strong>E-ICONS</strong>, Société par Actions Simplifiée (SAS)<br />
                    SIRET: 925 328 932 00015<br />
                    Headquarters: 231 rue Saint-Honoré, 75001 Paris, France<br />
                    Contact: <a href="mailto:hello@dorable.com" style={linkStyle}>hello@dorable.com</a><br />
                    Herein, "Dorable", "we", "our" refer to E-ICONS.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>2) Purpose of the Service</h2>
                <p>
                    Dorable is a community platform allowing users to:
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li>discover people and activities nearby;</li>
                    <li>create, join, and discuss around activities;</li>
                    <li>interact with other users in a social context.</li>
                </ul>
                <p>
                    Dorable is not a dating service. Any misuse contrary to these Terms or community guidelines is strictly prohibited.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>3) Acceptance of Terms</h2>
                <p>
                    By creating an account, accessing the application, or using the Service, you acknowledge having read and accepted:
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li>these Terms;</li>
                    <li>the <a href="/en/privacy" style={linkStyle}>Privacy Policy</a>;</li>
                    <li>the security and community guidelines published by Dorable.</li>
                </ul>
                <p>
                    If you do not accept these documents, you must not use the Service.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>4) Eligibility Requirements</h2>
                <p>
                    You declare and warrant that you:
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li>are at least 18 years old;</li>
                    <li>have the legal capacity to contract;</li>
                    <li>are not prohibited from using the Service under applicable laws;</li>
                    <li>have not been permanently banned from the Service (unless written authorization from Dorable).</li>
                </ul>
                <p>
                    You commit to providing accurate, up-to-date, and complete information.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>5) Account Creation and Security</h2>
                <p>
                    You are responsible for:
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li>the confidentiality of your credentials;</li>
                    <li>all activities conducted through your account;</li>
                    <li>the security of your device.</li>
                </ul>
                <p>
                    You agree to notify us immediately of any unauthorized access to your account.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>6) Usage Rules and Prohibitions</h2>
                <p>
                    It is strictly forbidden to:
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li>impersonate another person;</li>
                    <li>harass, threaten, intimidate, discriminate, or defame;</li>
                    <li>post illegal, hateful, violent, explicit sexual content, or content involving minors;</li>
                    <li>promote drugs, weapons, terrorism, scams, or illegal activities;</li>
                    <li>send spam, solicit, or ask for money;</li>
                    <li>collect user data without authorization;</li>
                    <li>bypass security measures, scrape, reverse engineer, or disrupt the Service;</li>
                    <li>create multiple accounts to circumvent a suspension.</li>
                </ul>
                <p>
                    Any breach may result in immediate measures (restriction, suspension, account deletion).
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>7) User-Generated Content (UGC)</h2>
                <p>
                    You are solely responsible for the content you post (text, photo, message, etc.).<br />
                    You guarantee that you have all necessary rights to such content.<br />
                    You are prohibited from posting sensitive information (bank details, third-party identity data, etc.) that exposes you or others.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>8) License to Your Content</h2>
                <p>
                    You retain ownership of your content. However, to operate the Service, you grant Dorable a non-exclusive, global, royalty-free license for the duration necessary for the operation, moderation, and security of the Service, allowing us to host, reproduce, display, technically adapt, moderate, and delete the content if necessary.<br />
                    This license terminates within a reasonable time after your account is deleted, subject to legal retention obligations and evidentiary/security needs.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>9) Moderation, Reporting, Blocking, Security</h2>
                <p>
                    For community security, Dorable implements:
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li>automated filters (including text filtering);</li>
                    <li>manual moderation checks;</li>
                    <li>an in-app reporting mechanism;</li>
                    <li>a user blocking mechanism.</li>
                </ul>
                <p>
                    Processing principles:
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li>blocking a user immediately hides their content from the blocking user's experience;</li>
                    <li>reports are handled by the moderation team;</li>
                    <li>for manifestly illegal or dangerous content, action is taken within 24 hours (content removal / account restriction / ban depending on severity);</li>
                    <li>Dorable may notify the moderation team of any critical event (e.g., reporting/blocking).</li>
                </ul>
                <p>
                    Dorable may cooperate with authorities when required by law.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>10) Enhanced Zero-Tolerance Policy (Minors, Exploitation, Violence)</h2>
                <p>
                    Dorable applies a zero-tolerance policy for:
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li>any sexualization of minors;</li>
                    <li>any sexual exploitation;</li>
                    <li>any incitement to serious violence;</li>
                    <li>any apology for crimes or terrorist activities.</li>
                </ul>
                <p>
                    The content or behavior concerned may result in immediate account deletion and, if necessary, reporting to the competent authorities.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>11) Third-Party Services</h2>
                <p>
                    Certain features may rely on third-party services (e.g., messaging, hosting, analytics, payment).<br />
                    Their use may involve data processing according to their own policies, in compliance with our Privacy Policy and applicable laws.<br />
                    Dorable is not responsible for outages attributable to third-party providers.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>12) Personal Data</h2>
                <p>
                    The processing of personal data is governed by our <a href="/en/privacy" style={linkStyle}>Privacy Policy</a>.<br />
                    Depending on the applicable regulations (notably GDPR), you have rights of access, rectification, deletion, restriction, objection, and portability, under the conditions provided by law.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>13) Geolocation and Local Features</h2>
                <p>
                    Certain features rely on geolocation. You can manage location permissions from your device. Disabling this may limit some functions.<br />
                    Dorable may display an approximate location based on Service settings.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>14) Subscriptions, Purchases, and Renewal</h2>
                <p>
                    Dorable may offer paid features (subscription, premium options) via Apple App Store and/or Google Play.<br />
                    Unless stated otherwise: subscriptions auto-renew; cancellation is done from the payment platform (Apple/Google); pricing and trial periods are displayed prior to purchase.<br />
                    Refunds are processed according to the app store's rules and applicable law.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>15) Dorable Intellectual Property</h2>
                <p>
                    The Service, its trademarks, logos, interfaces, texts, graphics, software, and related elements are protected by intellectual property rights.<br />
                    No transfer of rights is granted. You only have a personal, non-exclusive, non-transferable, and revocable right of use, in accordance with these Terms.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>16) Suspension, Termination, Account Deletion</h2>
                <p>
                    You can delete your account at any time from the app.<br />
                    Dorable may suspend or terminate your access, with or without notice depending on severity, notably in case of: violation of the Terms; risk to user security; fraudulent or illegal behavior.<br />
                    Upon termination, certain data may be retained for legal obligations, security, fraud prevention, and litigation management.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>17) Disclaimers</h2>
                <p>
                    The Service is provided "as is" and "as available".<br />
                    Dorable does not guarantee: continuous, error-free availability; absence of interruption; compatibility with all devices; reliability of all user-generated content.<br />
                    You are solely responsible for your interactions with other users, including during offline outings.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>18) Limitation of Liability</h2>
                <p>
                    To the extent permitted by law, Dorable cannot be held liable for indirect damages, loss of opportunity, loss of data, reputational damage, financial loss, or intangible harm.<br />
                    Nothing in these Terms limits mandatory consumer rights or liabilities that cannot be excluded by law.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>19) Indemnification</h2>
                <p>
                    You agree to indemnify Dorable against any claim, action, damage, cost, or expense (including reasonable attorney fees) resulting from: your content; your misuse of the Service; violation of these Terms or third-party rights. To the extent permitted by applicable law.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>20) Changes to Terms</h2>
                <p>
                    Dorable may modify these Terms at any time, notably for: legal/regulatory compliance; feature updates; security and abuse prevention.<br />
                    In the event of a substantial modification, we will publish an updated version with a new effective date and, if necessary, inform users through an appropriate channel.<br />
                    Continued use of the Service after the effective date constitutes acceptance of the modifications.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>21) Governing Law and Jurisdiction</h2>
                <p>
                    These Terms are governed by French law.<br />
                    In case of a dispute, an amicable solution will be sought first.<br />
                    Failing an amicable agreement, and subject to mandatory consumer protection rules, jurisdiction is assigned to the competent French courts.<br />
                    Consumers may also use a mediation mechanism in accordance with applicable legal provisions.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>22) Severability</h2>
                <p>
                    If any clause of these Terms is deemed invalid or unenforceable, the remaining clauses shall remain in full force and effect.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>23) Entire Agreement</h2>
                <p>
                    These Terms, along with the Privacy Policy and security/community guidelines, constitute the entire agreement between you and Dorable regarding the Service.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>24) Official Legal Links</h2>
                <p>
                    Terms / EULA: <a href="/en/terms" style={linkStyle}>https://dorable.app/en/terms</a><br />
                    Privacy Policy: <a href="/en/privacy" style={linkStyle}>https://dorable.app/en/privacy</a><br />
                    Support: <a href="/en/support" style={linkStyle}>https://dorable.app/en/support</a>
                </p>
            </section>

            <footer style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.08)', textAlign: 'center' }}>
                <a href="/" style={{ color: 'var(--brand-pink)', textDecoration: 'none', fontWeight: '700', fontSize: '1.1rem' }}>← Back to Home</a>
            </footer>
        </main>
    );
}
