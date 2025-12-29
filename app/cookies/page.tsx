export default function CookiesPage() {
    return (
        <main style={{ padding: '12rem 2rem 4rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'var(--font-sans)', color: '#333', lineHeight: '1.6' }}>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '2rem' }}>Politique des Cookies</h1>

            <p className="mb-4">Dernière mise à jour : 29 Décembre 2025</p>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2 mt-6">1. Qu'est-ce qu'un cookie ?</h2>
                <p>
                    Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette ou mobile) lors de la visite d'un site ou de la consultation d'une publicité. Il a pour but de collecter des informations relatives à votre navigation et de vous adresser des services adaptés à votre terminal.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2 mt-6">2. Pourquoi utilisons-nous des cookies ?</h2>
                <p>
                    Dorable utilise des cookies pour assurer le bon fonctionnement du site et améliorer votre expérience utilisateur. Les types de cookies utilisés sont :
                </p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    <li className="mb-2"><strong>Cookies strictement nécessaires :</strong> Ils sont indispensables au fonctionnement du site.</li>
                    <li className="mb-2"><strong>Cookies de performance :</strong> Ils nous permettent de comprendre comment les visiteurs interagissent avec le site.</li>
                    <li className="mb-2"><strong>Cookies de fonctionnalités :</strong> Ils permettent de mémoriser vos choix (comme votre langue).</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2 mt-6">3. Vos choix concernant les cookies</h2>
                <p>
                    Vous pouvez choisir à tout moment de désactiver ces cookies via les paramètres de votre navigateur. Notez cependant que la désactivation de certains cookies peut affecter votre expérience sur notre site.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold mb-2 mt-6">4. Durée de conservation</h2>
                <p>
                    Les cookies sont conservés pour une durée maximale de 13 mois conformément aux recommandations de la CNIL.
                </p>
            </section>
        </main>
    );
}
