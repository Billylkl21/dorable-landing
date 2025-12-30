export default function LegalPage() {
    const sectionTitleStyle = {
        fontSize: '1.5rem',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        paddingBottom: '0.5rem',
        marginBottom: '1.5rem',
        marginTop: '2.5rem',
        fontFamily: 'var(--font-sans)',
        fontWeight: '700',
        color: 'var(--text-main)'
    };

    return (
        <main style={{ padding: '12rem 2rem 6rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-sans)', color: 'var(--text-main)', lineHeight: '1.7' }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', marginBottom: '1rem', fontWeight: '900' }}>Mentions Légales</h1>
            <p style={{ marginBottom: '3rem', opacity: 0.5, fontSize: '0.9rem' }}>Dernière mise à jour : 30 Décembre 2025</p>

            <section>
                <h2 style={sectionTitleStyle}>1. Éditeur du site</h2>
                <p>
                    L'application Dorable ainsi que le présent site internet sont édités par la société <strong>E-ICONS</strong>, Société par Actions Simplifiée (SAS), immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro SIRET <strong>925 328 932 00015</strong>.
                </p>
                <p style={{ marginTop: '1rem' }}>
                    <strong>Siège social :</strong> 231 rue Saint-Honoré, 75001 Paris, France.<br />
                    <strong>Contact :</strong> contact@dorable.app
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>2. Direction de la publication</h2>
                <p>Le Directeur de la publication du site est Lukale Umumbu (CEO).</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>3. Hébergement</h2>
                <p>
                    Le site est hébergé par :<br />
                    <strong>Vercel Inc.</strong><br />
                    440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
                </p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>4. Propriété intellectuelle</h2>
                <p>
                    L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
            </section>

            <footer style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.08)', textAlign: 'center' }}>
                <a href="/" style={{ color: 'var(--brand-pink)', textDecoration: 'none', fontWeight: '700', fontSize: '1.1rem' }}>← Retour à l'accueil</a>
            </footer>
        </main>
    );
}
