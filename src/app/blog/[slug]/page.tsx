import PageLayout from '@/components/Layout/PageLayout';

export default function BlogPost({ params }: { params: { slug: string } }) {
    return (
        <PageLayout>
            <div style={{ padding: '40px 0' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Blog Post: {params.slug}</h1>
                <p style={{ color: '#888' }}>Full article content would go here...</p>
            </div>
        </PageLayout>
    );
}
