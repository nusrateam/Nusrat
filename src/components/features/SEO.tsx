export function StructuredData({ data }: { data: any }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

export function OrganizationSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Nusrat",
        "url": "https://nusrat.team",
        "logo": "https://nusrat.team/logo.png",
        "sameAs": [
            "https://twitter.com/nusrat_team",
            "https://linkedin.com/company/nusrat"
        ],
        "description": "Elite professional team building scalable AI and web solutions."
    };

    return <StructuredData data={schema} />;
}
