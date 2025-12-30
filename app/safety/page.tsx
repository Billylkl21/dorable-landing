import React from 'react';

export default function SafetyTipsPage() {
    return (
        <main style={{ padding: '8rem 2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif', lineHeight: '1.6', color: '#333' }}>
            <h1 style={{ fontFamily: 'serif', fontSize: '2.5rem', marginBottom: '2rem', color: '#000' }}>Conseils de Sécurité</h1>

            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                Chez Dorable, l'authenticité et la sécurité de nos membres sont nos priorités absolues. Voici nos conseils pour que vos rencontres dans le monde réel restent toujours une expérience positive.
            </p>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem', marginBottom: '1rem', color: '#db2777' }}>1. Gardez vos informations privées</h2>
                <p>
                    Ne partagez jamais d'informations sensibles comme votre adresse personnelle, vos coordonnées bancaires ou votre adresse professionnelle lors des premiers échanges. Attendez de bien connaître la personne et d'avoir établi une confiance mutuelle avant de sortir de l'application Dorable pour communiquer.
                </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem', marginBottom: '1rem', color: '#db2777' }}>2. Choisissez toujours un lieu public</h2>
                <p>
                    Pour vos premières rencontres, privilégiez des endroits fréquentés et neutres : cafés, bars, parcs passants ou restaurants. Évitez les lieux isolés ou les invitations dans des domiciles privés pour une première entrevue.
                </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem', marginBottom: '1rem', color: '#db2777' }}>3. Prévenez un proche</h2>
                <p>
                    Avant de partir, informez un ami ou un membre de votre famille de l'heure et du lieu de votre rendez-vous. Vous pouvez également partager votre localisation en direct via votre téléphone avec une personne de confiance.
                </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem', marginBottom: '1rem', color: '#db2777' }}>4. Soyez maître de vos déplacements</h2>
                <p>
                    Il est préférable d'organiser votre propre transport pour vous rendre au rendez-vous et pour en repartir. Cela vous permet de quitter les lieux à tout moment si vous ne vous sentez plus à l'aise, sans dépendre de l'autre personne.
                </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem', marginBottom: '1rem', color: '#db2777' }}>5. Écoutez votre instinct</h2>
                <p>
                    Si quelque chose vous semble étrange ou si vous vous sentez mal à l'aise, ne vous sentez pas obligé(e) de rester. Votre sécurité et votre confort passent avant la politesse. Vous pouvez écourter le rendez-vous à tout moment sans justification.
                </p>
            </section>

            <section style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem', marginBottom: '1rem', color: '#db2777' }}>6. Signalez les comportements déplacés</h2>
                <p>
                    Si un utilisateur a un comportement suspect, offensant ou dangereux, signalez-le immédiatement via les fonctionnalités de signalement de l'application. Nous prenons chaque signalement très au sérieux pour protéger la communauté.
                </p>
            </section>

            <footer style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #eee', textAlign: 'center' }}>
                <a href="/" style={{ color: '#db2777', textDecoration: 'none', fontWeight: 'bold' }}>Retour à l'accueil</a>
            </footer>
        </main>
    );
}
