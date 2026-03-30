export default function PrivacyPolicy() {
    const sectionTitleStyle = {
        fontSize: '1.5rem',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        paddingBottom: '0.5rem',
        marginBottom: '1.5rem',
        marginTop: '2.5rem',
        fontWeight: '700',
        color: 'var(--text-main)'
    };

    const subTitleStyle = {
        fontSize: '1.1rem',
        fontWeight: '700',
        marginTop: '1.5rem',
        marginBottom: '0.5rem',
        color: 'var(--text-main)'
    };

    return (
        <main style={{ padding: '12rem 2rem 6rem', maxWidth: '800px', margin: '0 auto', color: 'var(--text-main)', lineHeight: '1.7' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '900' }}>Politique de confidentialité</h1>

            <div style={{ marginBottom: '3rem', opacity: 0.6, fontSize: '0.9rem' }}>
                <p>Version : 2.0</p>
                <p>Dernière mise à jour : 24 février 2026</p>
                <p>Date d’entrée en vigueur : 24 février 2026</p>
            </div>

            <section>
                <h2 style={sectionTitleStyle}>1. Responsable du traitement</h2>
                <p>L’application Dorable est éditée par :</p>
                <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(0,0,0,0.02)', borderRadius: '12px' }}>
                    <p><strong>E-ICONS SAS</strong></p>
                    <p>SIRET : 925 328 932 00015</p>
                    <p>Siège social : 231 rue Saint-Honoré, 75001 Paris, France</p>
                    <p>Email confidentialité : <a href="mailto:hello@dorable.com" style={{ color: 'var(--brand-pink)' }}>hello@dorable.com</a></p>
                    <p>Email contact légal : <a href="mailto:hello@dorable.com" style={{ color: 'var(--brand-pink)' }}>hello@dorable.com</a></p>
                </div>
                <p style={{ marginTop: '1rem' }}>Dorable détermine les finalités et moyens des traitements de données personnelles réalisés via l’application.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>2. Objet de la présente politique</h2>
                <p>La présente politique de confidentialité décrit :</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    <li>les données personnelles collectées via Dorable,</li>
                    <li>les finalités et bases légales de traitement,</li>
                    <li>les destinataires des données,</li>
                    <li>les durées de conservation,</li>
                    <li>vos droits et modalités d’exercice.</li>
                </ul>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>3. Données personnelles collectées</h2>
                <p>Selon votre utilisation de l’application, Dorable peut collecter les catégories suivantes :</p>

                <h3 style={subTitleStyle}>Données de compte et coordonnées</h3>
                <p>nom/prénom, pseudonyme, adresse e-mail, numéro de téléphone (si fourni).</p>

                <h3 style={subTitleStyle}>Données de profil</h3>
                <p>photos de profil et photos lifestyle, bio, centres d’intérêt, quartier préféré, autres informations de profil volontairement renseignées.</p>

                <h3 style={subTitleStyle}>Données de contenu utilisateur</h3>
                <p>messages échangés dans l’application, contenus publiés/partagés (activités, lieux, collections, commentaires).</p>

                <h3 style={subTitleStyle}>Données de localisation</h3>
                <p>localisation précise (avec consentement) pour afficher les activités et lieux à proximité.</p>

                <h3 style={subTitleStyle}>Données d’abonnement et transactions</h3>
                <p>statut d’abonnement, identifiants de transaction App Store, historique d’activation/restauration.</p>

                <h3 style={subTitleStyle}>Données techniques</h3>
                <p>identifiant utilisateur interne, identifiants techniques d’appareil nécessaires au fonctionnement, journaux de crash, performances et sécurité.</p>

                <h3 style={subTitleStyle}>Données sensibles (le cas échéant)</h3>
                <p>uniquement les données volontairement fournies dans le profil (ex. genre) lorsque pertinentes pour la personnalisation de l’expérience.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>4. Finalités et bases légales</h2>
                <p>Dorable traite vos données pour :</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    <li><strong>Fourniture du service</strong> (création de compte, authentification, recommandation de lieux, chat, carte, activités) - <em>Base légale : exécution du contrat.</em></li>
                    <li><strong>Personnalisation de l’expérience</strong> (suggestions de profils/activités/lieux) - <em>Base légale : exécution du contrat et intérêt légitime.</em></li>
                    <li><strong>Sécurité, modération et lutte contre les abus/fraude</strong> - <em>Base légale : intérêt légitime et obligation légale.</em></li>
                    <li><strong>Gestion des abonnements et paiements in-app</strong> - <em>Base légale : exécution du contrat et obligation légale (comptable/fiscale).</em></li>
                    <li><strong>Amélioration technique et stabilité</strong> (diagnostics, crash reports, performances) - <em>Base légale : intérêt légitime.</em></li>
                    <li><strong>Communications marketing</strong> (si activées) - <em>Base légale : consentement (retirable à tout moment).</em></li>
                </ul>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>5. Modération des contenus et sécurité communautaire (UGC)</h2>
                <p>Dorable applique une politique de tolérance zéro envers les contenus illicites, haineux, violents, sexuels non consentis, harcèlement ou comportements abusifs.</p>
                <h3 style={subTitleStyle}>Mécanismes disponibles :</h3>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    <li>signalement de contenus/profils/messages/activités/lieux/collections,</li>
                    <li>blocage d’utilisateurs avec retrait immédiat de visibilité dans vos flux,</li>
                    <li>revue des signalements et action de modération dans des délais opérationnels rapides (objectif : sous 24h pour les cas prioritaires).</li>
                </ul>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>6. Destinataires des données</h2>
                <p>Les données peuvent être transmises :</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    <li>aux équipes internes habilitées de Dorable,</li>
                    <li>à des prestataires techniques agissant en qualité de sous-traitants (hébergement, base de données, analytics techniques, notifications, services de paiement/app stores, sécurité),</li>
                    <li>aux autorités compétentes lorsque la loi l’exige.</li>
                </ul>
                <p style={{ marginTop: '1rem', fontWeight: '700' }}>Dorable ne vend pas vos données personnelles.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>7. Transferts hors UE</h2>
                <p>Certains prestataires peuvent être situés hors Union européenne. Dans ce cas, Dorable met en place des garanties appropriées (notamment clauses contractuelles types et mesures de sécurité adaptées).</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>8. Durées de conservation</h2>
                <p>Les données sont conservées pour des durées proportionnées aux finalités :</p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem' }}>
                    <li><strong>compte actif :</strong> pendant la relation contractuelle,</li>
                    <li><strong>contenus et messages :</strong> pendant la durée nécessaire au service et à la sécurité,</li>
                    <li><strong>logs techniques et diagnostics :</strong> durée limitée,</li>
                    <li><strong>données liées aux obligations légales :</strong> selon les durées légales applicables.</li>
                </ul>
                <p style={{ marginTop: '1rem' }}>En cas de suppression de compte, les données sont supprimées ou anonymisées, sauf obligations légales de conservation.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>9. Vos droits</h2>
                <p>Conformément au RGPD, vous disposez des droits suivants : accès, rectification, effacement, limitation, opposition, portabilité, retrait du consentement.</p>
                <p style={{ marginTop: '1rem' }}>Vous pouvez exercer vos droits à : <a href="mailto:hello@dorable.com" style={{ color: 'var(--brand-pink)', fontWeight: '600' }}>hello@dorable.com</a></p>
                <p>Vous pouvez également introduire une réclamation auprès de la CNIL.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>10. Suppression du compte</h2>
                <p>Vous pouvez supprimer votre compte depuis l’application : <strong>Profil &gt; Paramètres &gt; Supprimer le compte</strong>.</p>
                <p>La suppression est irréversible sous réserve des obligations légales de conservation.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>11. Mineurs</h2>
                <p>Dorable est réservé aux personnes âgées de 18 ans et plus. Nous ne collectons pas sciemment de données concernant des mineurs.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>12. Sécurité des données</h2>
                <p>Dorable met en œuvre des mesures techniques et organisationnelles raisonnables pour protéger vos données contre l’accès non autorisé, la perte, l’altération ou la divulgation.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>13. Modifications</h2>
                <p>Dorable peut modifier la présente politique à tout moment. La date de mise à jour figure en haut du document.</p>
            </section>

            <section>
                <h2 style={sectionTitleStyle}>14. Contact</h2>
                <p>Toute question relative à la confidentialité : <a href="mailto:hello@dorable.com" style={{ color: 'var(--brand-pink)', fontWeight: '600' }}>hello@dorable.com</a></p>
            </section>

            <footer style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.08)', textAlign: 'center' }}>
                <a href="/" style={{ color: 'var(--brand-pink)', textDecoration: 'none', fontWeight: '700', fontSize: '1.1rem' }}>← Retour à l'accueil</a>
            </footer>
        </main>
    );
}
