export default function Terms() {
    return (
        <main style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-sans)', color: '#333', lineHeight: '1.6' }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '2rem' }}>Conditions Générales d'Utilisation (CGU)</h1>

            <p className="mb-4">Dernière mise à jour : 24 Décembre 2024</p>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2 mt-6">1. Acceptation des conditions</h2>
                <p>
                    En téléchargeant et en utilisant l'application Dorable, vous acceptez sans réserve les présentes Conditions Générales d'Utilisation.
                    Si vous n'acceptez pas ces termes, veuillez ne pas utiliser l'application.
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
                    <li>Nous disposons d'un système de signalement permettant aux utilisateurs de rapporter tout contenu inapproprié.</li>
                    <li>Nous nous engageons à traiter les signalements et à agir (suppression, bannissement) dans un délai de 24 heures.</li>
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
                <h2 className="text-xl font-bold mb-2 mt-6">5. Limitation de responsabilité</h2>
                <p>
                    Dorable agit en tant qu'intermédiaire technique. Nous ne sommes pas responsables des actions des utilisateurs lors des rencontres réelles.
                    Nous vous encourageons à faire preuve de prudence et de bon sens lors de vos rencontres.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2 mt-6">6. Contact</h2>
                <p>
                    Pour toute question concernant ces conditions, contactez-nous à : <strong>legal@dorable.app</strong>
                </p>
            </section>
        </main>
    );
}
