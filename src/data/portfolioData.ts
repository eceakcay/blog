import { Layers, Zap, Coffee, CheckCircle2, Server, Cpu, Database, Github } from 'lucide-react';

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
        title: 'NewsApp',
        category: 'UIKit / Clean Architecture',
        desc: 'Real-time news flow application featuring modern pagination and advanced network layer management.',
        tech: ['UIKit', 'Combine', 'URLSession', 'MVVM'],
        color: 'from-blue-600 to-indigo-700',
        github: 'https://github.com/eceakcay/NewsUIKit'
    }
];

export const skills = [
    { name: 'Node.js', icon: Server, color: 'text-green-400' },
    { name: 'ASP.NET', icon: Cpu, color: 'text-blue-400' },
    { name: 'MSSQL', icon: Database, color: 'text-orange-400' },
    { name: 'Git / GitLab', icon: Github, color: 'text-white' },
];

export const experience = [
    {
        company: 'IBTECH International IT - QNB',
        role: 'Intern / iOS Developer',
        date: 'Oct 2025 – Present',
        desc: 'Involved in iOS (UIKit & SwiftUI) mobile application development for enterprise projects. Developing modular, sustainable, and testable screens using MVVM architecture. Working with clean code and secure development principles in accordance with banking and enterprise software standards. Actively participating in RESTful Web API development using .NET 8 / ASP.NET Core.'
    },
    {
        company: 'Miron Software A.Ş',
        role: 'Intern / Backend Developer',
        date: 'July 2025 – Sept 2025',
        desc: 'Worked on backend development using C# and ASP.NET Core 8, focusing on OOP and layered architecture. Performed CRUD operations, database queries, and performance analysis using MSSQL. Tested REST & SOAP services using Postman and SOAP UI. Participated in query analysis, debugging, and version control processes using Dapper, SQL Profiler, IIS, and GitLab.'
    }
];
