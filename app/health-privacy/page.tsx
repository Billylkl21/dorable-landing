import React from 'react';

export default function HealthPrivacyPage() {
    return (
        <main style={{ padding: '12rem 2rem 4rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-sans)', color: 'var(--text-main)', lineHeight: '1.6' }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', marginBottom: '2.5rem', fontWeight: '900' }}>Données de Santé</h1>

            <p style={{ marginBottom: '2rem', opacity: 0.6 }}>Dernière mise à jour : 30 Décembre 2025</p>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem', fontFamily: 'var(--font-sans)', fontWeight: 'bold' }}>1. Introduction</h2>
                <p>
                    Chez Dorable, nous accordons une importance capitale à la protection de votre vie privée. Cette politique spécifique complète notre <a href="/privacy" style={{ color: 'var(--brand-pink)', fontWeight: '600' }}>Politique de Confidentialité</a> générale et s'applique spécifiquement aux données de santé des consommateurs (telles que définies par les réglementations en vigueur).
                </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem', fontFamily: 'var(--font-sans)', fontWeight: 'bold' }}>2. Catégories de Données Collectées</h2>
                <p>
                    Nous pouvons collecter les catégories de données suivantes qui peuvent être considérées comme sensibles :
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    <li>Informations sur le bien-être général liées à vos activités sociales.</li>
                    <li>Préférences pour des sorties sportives ou de bien-être.</li>
                    <li>Données relatives à des besoins spécifiques de mobilité (accessibilité).</li>
                    <li>Informations partagées volontairement dans votre profil public.</li>
                </ul>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem', fontFamily: 'var(--font-sans)', fontWeight: 'bold' }}>3. Finalités</h2>
                <p>
                    Nous traitons ces données pour :
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    <li>Fournir les services de mise en relation adaptés.</li>
                    <li>Assurer l'accessibilité des lieux de rendez-vous.</li>
                    <li>Personnaliser votre expérience et garantir votre sécurité.</li>
                </ul>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem', fontFamily: 'var(--font-sans)', fontWeight: 'bold' }}>4. Partage</h2>
                <p>
                    Dorable ne vend pas vos données. Elles ne sont partagées qu'avec nos prestataires techniques sous contrat de confidentialité ou si la loi l'exige.
                </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem', fontFamily: 'var(--font-sans)', fontWeight: 'bold' }}>5. Vos Droits</h2>
                <p>
                    Vous disposez d'un droit d'accès, de suppression et de rectification. Contactez-nous à : <strong>contact@dorable.app</strong>
                </p>
            </section>

            <footer style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.1)', textAlign: 'center' }}>
                <a href="/" style={{ color: 'var(--brand-pink)', textDecoration: 'none', fontWeight: 'bold' }}>Retour à l'accueil</a>
            </footer>
        </main>
    );
}
