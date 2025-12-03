'use client';

import { useState } from 'react';
import PageLayout from '@/components/Layout/PageLayout';
import styles from './page.module.css';

export default function Admin() {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        image: '',
        description: '',
        type: 'project' // 'project' or 'blog'
    });

    const [jsonOutput, setJsonOutput] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const generateJSON = () => {
        const id = formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

        let snippet = {};

        if (formData.type === 'project') {
            snippet = {
                id: id,
                title: formData.title,
                category: formData.category,
                year: new Date().getFullYear().toString(),
                description: formData.description,
                images: [formData.image]
            };
        } else {
            snippet = {
                id: id,
                title: formData.title,
                excerpt: formData.description,
                date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
                image: formData.image,
                content: "<p>Write your blog content here...</p>"
            };
        }

        setJsonOutput(JSON.stringify(snippet, null, 4));
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(jsonOutput);
        alert('JSON copied to clipboard!');
    };

    return (
        <PageLayout>
            <div className={styles.container}>
                <h1 className={styles.title}>Admin Dashboard</h1>

                <div className={styles.form}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Content Type</label>
                        <select name="type" value={formData.type} onChange={handleChange} className={styles.select}>
                            <option value="project">Project</option>
                            <option value="blog">Blog Post</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="e.g., New Portfolio Design"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Category</label>
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="e.g., Web Design"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Image URL</label>
                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="/images/project.jpg"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className={styles.textarea}
                            placeholder="Short description..."
                        />
                    </div>

                    <button onClick={generateJSON} className={styles.button}>Generate JSON</button>
                </div>

                {jsonOutput && (
                    <div className={styles.outputSection}>
                        <h2 className={styles.outputTitle}>Generated JSON Snippet</h2>
                        <p style={{ marginBottom: '16px', color: 'var(--text-muted)' }}>
                            Copy this snippet and paste it into <code>src/data/content.json</code>
                        </p>
                        <div className={styles.pre}>
                            <button onClick={copyToClipboard} className={styles.copyButton}>Copy</button>
                            <code className={styles.code}>
                                {jsonOutput}
                            </code>
                        </div>
                    </div>
                )}
            </div>
        </PageLayout>
    );
}
