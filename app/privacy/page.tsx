export default function PrivacyPolicy() {
    return (
        <main style={{ padding: '12rem 2rem 4rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-sans)', color: '#333', lineHeight: '1.6' }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '2rem' }}>Politique de Confidentialité</h1>

            <p className="mb-4">Dernière mise à jour : 30 Décembre 2025</p>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2 mt-6">1. Introduction</h2>
                <p>
                    Bienvenue sur Dorable ("nous", "notre", "nos"). Nous accordons une importance primordiale à la confidentialité de vos données.
                    Cette politique explique comment nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre application mobile et nos services.
                </p>
                <p className="mt-4 p-4 bg-pink-50 rounded-lg border border-pink-100">
                    <strong>Nouveau :</strong> Pour plus d'informations sur la protection des données sensibles, veuillez consulter notre <a href="/health-privacy" className="text-pink-600 underline">Politique de confidentialité relative aux données de santé des consommateurs</a>.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2 mt-6">2. Données collectées</h2>
                <p>Pour fournir nos services de mise en relation et d'organisation d'activités, nous pouvons collecter les données suivantes :</p>
                <ul className="list-disc pl-5 mt-2">
                    <li><strong>Informations de compte :</strong> Nom, prénom, photo de profil, centres d'intérêt.</li>
                    <li><strong>Données de localisation :</strong> Utilisées uniquement lorsque l'application est active pour vous suggérer des activités et des partenaires à proximité (avec votre consentement explicite).</li>
                    <li><strong>Contenu utilisateur :</strong> Photos, descriptions d'activités et messages échangés via l'application.</li>
                    <li><strong>Données techniques :</strong> Identifiants d'appareil, type de connexion, rapports de crash (anonymisés).</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2 mt-6">3. Utilisation des données</h2>
                <p>Vos données sont utilisées exclusivement pour :</p>
                <ul className="list-disc pl-5 mt-2">
                    <li>Faciliter les rencontres amicales et l'organisation d'activités.</li>
                    <li>Améliorer la pertinence des suggestions (algorithme de matching).</li>
                    <li>Assurer la sécurité de la communauté (modération).</li>
                    <li>Garantir le bon fonctionnement technique de l'application.</li>
                </ul>
                <p className="mt-2"><strong>Nous ne vendons jamais vos données personnelles à des tiers.</strong></p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2 mt-6">4. Partage des données</h2>
                <p>
                    Vos informations publiques (profil, activités proposées) sont visibles par les autres membres de la communauté Dorable.
                    Nous ne partageons vos données avec des prestataires tiers (hébergement, analytique) que dans la stricte limite nécessaire au fonctionnement du service et sous accords de confidentialité.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2 mt-6">5. Vos droits (RGPD & CCPA)</h2>
                <p>Conformément aux réglementations en vigueur (notamment le RGPD), vous disposez des droits suivants :</p>
                <ul className="list-disc pl-5 mt-2">
                    <li>Accès et portabilité de vos données.</li>
                    <li>Rectification ou suppression de votre compte ("Droit à l'oubli").</li>
                    <li>Retrait de votre consentement (notamment pour la géolocalisation) à tout moment via les réglages de votre appareil.</li>
                </ul>
                <p className="mt-2">Pour exercer ces droits, contactez-nous à : <strong>contact@dorable.app</strong></p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2 mt-6">6. Suppression du compte</h2>
                <p>
                    Vous pouvez supprimer votre compte et toutes les données associées directement depuis les paramètres de l'application (Profil {'>'} Paramètres {'>'} Supprimer mon compte). Cette action est irréversible.
                </p>
            </section>
        </main>
    );
}
