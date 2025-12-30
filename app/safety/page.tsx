import React from 'react';

export default function SafetyTipsPage() {
    return (
        <main style={{ padding: '12rem 2rem 4rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-sans)', color: 'var(--text-main)', lineHeight: '1.6' }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', marginBottom: '2.5rem', fontWeight: '900' }}>Conseils de Sécurité</h1>

            <p style={{ marginBottom: '2rem', fontSize: '1.1rem', opacity: 0.8 }}>
                Chez Dorable, l'authenticité et la sécurité de nos membres sont nos priorités absolues. Voici nos conseils pour que vos rencontres dans le monde réel restent toujours une expérience positive.
            </p>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem', color: 'var(--brand-pink)', fontFamily: 'var(--font-sans)', fontWeight: 'bold' }}>1. Gardez vos informations privées</h2>
                <p>
                    Ne partagez jamais d'informations sensibles comme votre adresse personnelle ou vos coordonnées bancaires lors des premiers échanges. Attendez de bien connaître la personne.
                </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem', color: 'var(--brand-pink)', fontFamily: 'var(--font-sans)', fontWeight: 'bold' }}>2. Choisissez toujours un lieu public</h2>
                <p>
                    Pour vos premières rencontres, privilégiez des endroits fréquentés et neutres : cafés, bars, parcs passants ou restaurants.
                </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem', color: 'var(--brand-pink)', fontFamily: 'var(--font-sans)', fontWeight: 'bold' }}>3. Prévenez un proche</h2>
                <p>
                    Avant de partir, informez un ami ou un membre de votre famille de l'heure et du lieu de votre rendez-vous.
                </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem', color: 'var(--brand-pink)', fontFamily: 'var(--font-sans)', fontWeight: 'bold' }}>4. Soyez maître de vos déplacements</h2>
                <p>
                    Il est préférable d'organiser votre propre transport pour vous rendre au rendez-vous et pour en repartir.
                </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem', color: 'var(--brand-pink)', fontFamily: 'var(--font-sans)', fontWeight: 'bold' }}>5. Écoutez votre instinct</h2>
                <p>
                    Si quelque chose vous semble étrange, ne vous sentez pas obligé(e) de rester. Votre sécurité et votre confort passent avant la politesse.
                </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '0.5rem', marginBottom: '1rem', color: 'var(--brand-pink)', fontFamily: 'var(--font-sans)', fontWeight: 'bold' }}>6. Signalez les comportements</h2>
                <p>
                    Si un utilisateur a un comportement suspect ou dangereux, signalez-le immédiatement via l'application. Nous prenons chaque signalement très au sérieux.
                </p>
            </section>

            <footer style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.1)', textAlign: 'center' }}>
                <a href="/" style={{ color: 'var(--brand-pink)', textDecoration: 'none', fontWeight: 'bold' }}>Retour à l'accueil</a>
            </footer>
        </main>
    );
}
