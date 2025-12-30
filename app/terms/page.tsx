export default function Terms() {
    return (
        <main style={{ padding: '12rem 2rem 4rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-sans)', color: '#333', lineHeight: '1.6' }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '2rem' }}>Conditions Générales d'Utilisation (CGU)</h1>

            <p className="mb-4">Dernière mise à jour : 30 Décembre 2025</p>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2 mt-6">1. Acceptation des conditions</h2>
                <p>
                    En téléchargeant et en utilisant l'application Dorable, vous acceptez sans réserve les présentes Conditions Générales d'Utilisation ainsi que notre <a href="/privacy" className="text-pink-600 underline">Politique de Confidentialité</a> et notre <a href="/health-privacy" className="text-pink-600 underline">Politique relative aux données de santé</a>.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2 mt-6">2. Règles de la communauté</h2>
                <p>Dorable est une communauté fondée sur le respect et la convivialité. Sont strictement interdits :</p>
                <ul className="list-disc pl-5 mt-2">
                    <li>Le harcèlement, les propos haineux, discriminatoires ou diffamatoires.</li>
                    <li>Les contenus à caractère sexuel explicite ou violent.</li>
                    <li>L'utilisation de l'application à des fins commerciales non autorisées (spam, démarchage).</li>
                    <li>La création de faux profils (usurpation d'identité).</li>
                </ul>
                <p className="mt-2"><strong>Tolérance Zéro :</strong> Tout contenu enfreignant ces règles sera supprimé et l'utilisateur banni définitivement, sans préavis.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2 mt-6">3. Contenu Utilisateur (EULA Apple)</h2>
                <p>
                    Conformément aux exigences d'Apple :
                </p>
                <ul className="list-disc pl-5 mt-2">
                    <li>Vous êtes seul responsable du contenu que vous publiez.</li>
                    <li>Nous disposons d'un système de signalement permettant aux utilisateurs de rapporter tout contenu inapproprié et de bloquer tout utilisateur abusif.</li>
                    <li>Nous nous engageons à traiter les signalements et à agir (suppression, bannissement) dans un délai de 24 heures.</li>
                    <li>Nous nous réservons le droit d'engager des poursuites judiciaires et de signaler aux autorités compétentes tout contenu manifestement illicite ou portant atteinte aux droits de tiers.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2 mt-6">4. Abonnements et Achats</h2>
                <p>
                    Certaines fonctionnalités "Premium" peuvent être soumises à un abonnement.
                    Les paiements sont traités par l'Apple App Store et sont soumis aux conditions générales d'Apple.
                    L'abonnement est renouvelé automatiquement sauf résiliation au moins 24 heures avant la fin de la période en cours.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2 mt-6">5. Géolocalisation</h2>
                <p>
                    Le service Dorable repose sur la mise en relation d'utilisateurs à proximité.
                    L'utilisation de l'application nécessite l'activation de la géolocalisation pour vous suggérer des activités pertinentes autour de vous.
                    Vous pouvez à tout moment désactiver ou modifier les autorisations de géolocalisation dans les réglages de votre appareil, ce qui pourrait toutefois limiter l'accès à certaines fonctionnalités de l'application.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2 mt-6">6. Limitation de responsabilité</h2>
                <p>
                    Dorable agit en tant qu'intermédiaire technique. Nous ne sommes pas responsables des actions des utilisateurs lors des rencontres réelles.
                    Nous vous encourageons à faire preuve de prudence et de bon sens lors de vos rencontres.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2 mt-6">7. Contact</h2>
                <p>
                    Pour toute question concernant ces conditions, contactez-nous à : <strong>contact@dorable.app</strong>
                </p>
            </section>
        </main>
    );
}
