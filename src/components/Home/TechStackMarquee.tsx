'use client';

import {
    Terminal, Code, Command, Braces,
    Github, Atom, Database, Smartphone, Cpu,
    BookOpen, Lightbulb, Coffee, GraduationCap
} from 'lucide-react';
import styles from './TechStackMarquee.module.css';

const icons = [
    { Icon: Terminal, label: 'Terminal' },
    { Icon: Code, label: 'Code' },
    { Icon: Command, label: 'Command' },
    { Icon: Braces, label: 'Braces' },
    { Icon: Github, label: 'Github' },
    { Icon: Atom, label: 'React' },
    { Icon: Database, label: 'Database' },
    { Icon: Smartphone, label: 'Mobile' },
    { Icon: Cpu, label: 'Hardware' },
    { Icon: BookOpen, label: 'Learning' },
    { Icon: Lightbulb, label: 'Ideas' },
    { Icon: Coffee, label: 'Fuel' },
    { Icon: GraduationCap, label: 'Student' },
];

export default function TechStackMarquee() {
    return (
        <div className={styles.marqueeContainer}>
            <div className={styles.marqueeWrapper}>
                {/* Original Set */}
                <div className={styles.marqueeGroup}>
                    {icons.map((item, index) => (
                        <div key={`original-${index}`} className={styles.iconItem}>
                            <item.Icon className={styles.icon} />
                        </div>
                    ))}
                </div>
                {/* Duplicate Set for Seamless Loop */}
                <div className={styles.marqueeGroup}>
                    {icons.map((item, index) => (
                        <div key={`duplicate-${index}`} className={styles.iconItem}>
                            <item.Icon className={styles.icon} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
