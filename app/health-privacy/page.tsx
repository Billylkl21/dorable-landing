import React from 'react';

export default function HealthPrivacyPage() {
    return (
        <main style={{ padding: '8rem 2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif', lineHeight: '1.6', color: '#333' }}>
            <h1 style={{ fontFamily: 'serif', fontSize: '2.5rem', marginBottom: '2rem', color: '#000' }}>Politique de Confidentialité Relative aux Données de Santé</h1>

            <p style={{ marginBottom: '1.5rem', fontStyle: 'italic' }}>Dernière mise à jour : 30 décembre 2025</p>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem', marginBottom: '1rem' }}>1. Introduction</h2>
                <p>
                    Chez Dorable, nous accordons une importance capitale à la protection de votre vie privée. Cette politique spécifique complète notre <a href="/privacy" style={{ color: '#db2777' }}>Politique de Confidentialité</a> générale et s'applique spécifiquement aux données de santé des consommateurs (telles que définies par les réglementations en vigueur, notamment le MHMDA).
                </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem', marginBottom: '1rem' }}>2. Catégories de Données de Santé Collectées</h2>
                <p>
                    Nous pouvons collecter les catégories de données suivantes qui peuvent être considérées comme des données de santé :
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    <li>Informations sur le bien-être général liées à vos activités sociales.</li>
                    <li>Pris de rendez-vous ou préférences pour des sorties sportives ou de bien-être.</li>
                    <li>Données relatives à des handicaps ou besoins spécifiques de mobilité si vous choisissez de nous les communiquer pour faciliter l'accès à certains lieux.</li>
                    <li>Toute information de santé que vous choisissez volontairement de partager dans votre profil ou vos communications au sein de l'application.</li>
                </ul>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem', marginBottom: '1rem' }}>3. Finalités de la Collecte et du Traitement</h2>
                <p>
                    Nous collectons et traitons ces données pour les finalités suivantes :
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    <li>Fournir les services de mise en relation pour des activités sociales et de bien-être.</li>
                    <li>Assurer l'accessibilité des lieux de rendez-vous.</li>
                    <li>Personnaliser votre expérience utilisateur en fonction de vos préférences annoncées.</li>
                    <li>Garantir la sécurité et le support des utilisateurs.</li>
                </ul>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem', marginBottom: '1rem' }}>4. Partage des Données de Santé</h2>
                <p>
                    Dorable ne vend pas vos données de santé. Nous ne partageons ces données qu'avec :
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    <li>Nos prestataires de services techniques (hébergement, maintenance) sous contrats stricts de confidentialité.</li>
                    <li>Les autorités compétentes si la loi l'exige.</li>
                    <li>D'autres utilisateurs, uniquement dans la mesure où vous avez choisi de rendre ces informations publiques sur votre profil.</li>
                </ul>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem', marginBottom: '1rem' }}>5. Vos Droits</h2>
                <p>
                    Vous disposez de droits spécifiques concernant vos données de santé :
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    <li>Droit d'accès et de confirmation du traitement.</li>
                    <li>Droit de suppression de vos données de santé.</li>
                    <li>Droit de retirer votre consentement à tout moment.</li>
                    <li>Droit de rectification.</li>
                </ul>
                <p style={{ marginTop: '1rem' }}>
                    Pour exercer ces droits, contactez-nous à : <strong>contact@dorable.app</strong>
                </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem', marginBottom: '1rem' }}>6. Modifications</h2>
                <p>
                    Nous nous réservons le droit de modifier cette politique. Toute mise à jour importante vous sera notifiée via l'application ou par email.
                </p>
            </section>

            <footer style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #eee', textAlign: 'center' }}>
                <a href="/" style={{ color: '#db2777', textDecoration: 'none', fontWeight: 'bold' }}>Retour à l'accueil</a>
            </footer>
        </main>
    );
}
