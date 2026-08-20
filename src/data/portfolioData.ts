import {
    Layers,
    Zap,
    Coffee,
    CheckCircle2,
    Smartphone,
    Code2,
    GitBranch,
    Workflow,
    Component,
    PanelsTopLeft,
    Grid2X2,
    Package,
    Timer,
    Radio,
    Cloud,
    Network,
    Braces,
    KeyRound,
    Fingerprint,
    Boxes,
    Hammer,
    Github,
    GitFork
} from 'lucide-react';

export const stats = [
    { label: 'Years Experience', value: '1+', icon: Layers },
    { label: 'Projects Completed', value: '15+', icon: Zap },
    { label: 'Coffee / Code', value: '∞', icon: Coffee },
    { label: 'Success Rate', value: '100%', icon: CheckCircle2 },
];

export const projects = [
    {
        title: 'OtobuzzApp',
        category: 'Full-Stack iOS',
        desc: 'An end-to-end ticketing experience developed with SwiftUI and Node.js. Features dynamic seat selection and JWT security.',
        tech: ['SwiftUI', 'Node.js', 'PostgreSQL', 'Socket.io'],
        color: 'from-orange-500 to-red-600',
        github: 'https://github.com/eceakcay/OtobuzzApp'
    },
    {
        title: 'AllerCheck',
        category: 'AI & Health',
        desc: 'Health assistant for product ingredient analysis using Vision Framework, OCR, and barcode scanning.',
        tech: ['Vision', 'CoreData', 'Combine', 'CloudKit'],
        color: 'from-emerald-400 to-cyan-500',
        github: 'https://github.com/eceakcay/AllerCheck'
    },
    {
        title: 'CoinFlow',
        category: 'iOS / FinTech',
        desc: 'An iOS portfolio tracker for monitoring live cryptocurrency data, saving favorite coins, exploring price charts, and tracking manually added holdings with total value and profit-loss insights.',
        tech: ['Swift', 'UIKit', 'MVVM-C', 'Clean Architecture'],
        color: 'from-amber-500 to-yellow-700',
        github: 'https://github.com/eceakcay/CoinFlow'
    }
];

export const skills = [
    { name: 'Swift', icon: Code2, color: 'text-orange-400' },
    { name: 'UIKit', icon: Smartphone, color: 'text-blue-400' },
    { name: 'SwiftUI', icon: PanelsTopLeft, color: 'text-cyan-400' },
    { name: 'MVVM-C', icon: Workflow, color: 'text-fuchsia-400' },
    { name: 'Coordinator Pattern', icon: GitBranch, color: 'text-violet-400' },
    { name: 'Clean Architecture', icon: Boxes, color: 'text-emerald-400' },
    { name: 'Programmatic UI', icon: Component, color: 'text-pink-400' },
    { name: 'Swift Concurrency', icon: Timer, color: 'text-amber-400' },
    { name: 'async/await', icon: Radio, color: 'text-yellow-400' },
    { name: 'Combine', icon: GitFork, color: 'text-rose-400' },
    { name: 'REST API', icon: Cloud, color: 'text-blue-400' },
    { name: 'URLSession', icon: Network, color: 'text-teal-400' },
    { name: 'Keychain', icon: KeyRound, color: 'text-yellow-500' },
    { name: 'LocalAuthentication', icon: Fingerprint, color: 'text-green-400' },
    { name: 'Swift Package Manager', icon: Package, color: 'text-orange-300' },
    { name: 'Flutter', icon: Smartphone, color: 'text-cyan-300' },
    { name: 'Git', icon: GitBranch, color: 'text-orange-500' },
];

export const experience = [
    {
        company: 'VakıfBank',
        role: 'Intern / iOS Developer',
        date: 'June 2026 – Present',
        desc: 'Developing a cryptocurrency-focused iOS application in a corporate banking environment. Contributing to mobile features, user interfaces, data-driven screens, and application architecture while following modern iOS development and clean code practices.'
    },
    {
        company: 'IBTECH International IT - QNB',
        role: 'Intern / iOS Developer',
        date: 'Oct 2025 – Apr 2026',
        desc: 'Involved in iOS (UIKit & SwiftUI) mobile application development for enterprise projects. Developing modular, sustainable, and testable screens using MVVM architecture. Working with clean code and secure development principles in accordance with banking and enterprise software standards. Actively participating in RESTful Web API development using .NET 8 / ASP.NET Core.'
    },
    {
        company: 'Miron Software A.Ş',
        role: 'Intern / Backend Developer',
        date: 'July 2025 – Sept 2025',
        desc: 'Worked on backend development using C# and ASP.NET Core 8, focusing on OOP and layered architecture. Performed CRUD operations, database queries, and performance analysis using MSSQL. Tested REST & SOAP services using Postman and SOAP UI. Participated in query analysis, debugging, and version control processes using Dapper, SQL Profiler, IIS, and GitLab.'
    }
];
