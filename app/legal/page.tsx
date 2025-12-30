export default function LegalPage() {
    return (
        <main style={{ padding: '12rem 2rem 4rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-sans)', color: '#333', lineHeight: '1.6' }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '2rem' }}>Mentions Légales</h1>

            <p className="mb-4">Dernière mise à jour : 30 Décembre 2025</p>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2 mt-6">1. Éditeur du site</h2>
                <p>
                    L'application Dorable et le présent site sont édités par la société <strong>E-ICONS</strong>, SAS (Société par Actions Simplifiée) créée le 02/04/2024.<br />
                    Immatriculée au Registre du Commerce et des Sociétés de Paris.<br />
                    SIRET : 925 328 932 00015<br />
                    Siège social : 231 RUE SAINT-HONORE, 75001 PARIS, France.<br />
                    Contact : contact@dorable.app
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2 mt-6">2. Direction de la publication</h2>
                <p>
                    Le Directeur de la publication du site est [Nom du responsable].
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2 mt-6">3. Hébergement</h2>
                <p>
                    Le site est hébergé par :<br />
                    <strong>Vercel Inc.</strong><br />
                    440 N Barranca Ave #4133<br />
                    Covina, CA 91723<br />
                    États-Unis
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2 mt-6">4. Propriété intellectuelle</h2>
                <p>
                    L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2 mt-6">5. Contact</h2>
                <p>
                    Pour toute question ou information, vous pouvez nous contacter à l'adresse suivante : contact@dorable.app
                </p>
            </section>
        </main>
    );
}
