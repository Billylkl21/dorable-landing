export default function LegalPage() {
    return (
        <main style={{ padding: '12rem 2rem 4rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-sans)', color: 'var(--text-main)', lineHeight: '1.6' }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', marginBottom: '2.5rem', fontWeight: '900' }}>Mentions Légales</h1>

            <p style={{ marginBottom: '2rem', opacity: 0.6 }}>Dernière mise à jour : 30 Décembre 2025</p>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2 mt-6">1. Éditeur du site</h2>
                <p>
                    L'application Dorable ainsi que le présent site internet sont édités par la société <strong>E-ICONS</strong>, Société par Actions Simplifiée (SAS), immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro SIRET <strong>925 328 932 00015</strong>.<br />
                    <strong>Siège social :</strong> 231 rue Saint-Honoré, 75001 Paris, France.<br />
                    <strong>Contact :</strong> contact@dorable.app
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2 mt-6">2. Direction de la publication</h2>
                <p>
                    Le Directeur de la publication du site est Lukale Umumbu (CEO).
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
