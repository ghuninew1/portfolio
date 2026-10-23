import { Home, UserRound, Layers3, FolderGit2, Milestone, Mail } from "lucide-react";

export const navigation = [
    { label: "Home", href: "#home", icon: Home , labelTh: "หน้าแรก"},
    { label: "About", href: "#about", icon: UserRound, labelTh: "เกี่ยวกับฉัน"},
    { label: "Skills", href: "#skills", icon: Layers3, labelTh: "ทักษะ"},
    { label: "Projects", href: "#projects", icon: FolderGit2, labelTh: "ผลงาน"},
    { label: "Timeline", href: "#timeline", icon: Milestone, labelTh: "เส้นทางของฉัน"},
    { label: "Contact", href: "#contact", icon: Mail, labelTh: "ติดต่อ"},
];

export const personalInfo = {
    name: "Ghuninew",
    displayName: "Ghuninew",
    role: "Web Developer & IT Technician",
    roleTh: "นักพัฒนาเว็บไซต์และช่างเทคนิค IT",
    headline: "Building useful things with code and technology.",
    headlineTh: "สร้างสิ่งที่ใช้งานได้จริง ด้วยโค้ดและเทคโนโลยี",
    bio: "I build practical web applications and help keep IT systems running smoothly.",
    bioTh: "ผมพัฒนาเว็บแอปพลิเคชันที่ใช้งานได้จริง ควบคู่กับการดูแลระบบ IT และแก้ไขปัญหาทางเทคนิค",
    aboutText:
        "ผมสนใจเทคโนโลยี การพัฒนาเว็บไซต์ และการแก้ปัญหาเชิงเทคนิค มีประสบการณ์ทำงานด้าน IT Support พร้อมเรียนรู้และพัฒนา Web Application ที่ช่วยให้การทำงานสะดวกและมีประสิทธิภาพมากขึ้น",
    quote: "ไม่ใช่แค่ทำงานให้เสร็จ แต่ทำให้ดีขึ้นได้เสมอ",
    location: "Thailand",
    interests: ["Web Development", "IT Support", "Networking", "3D"],
    githubUrl: "https://github.com/ghuninew1",
};

export const techStack = [
    {
        name: "React",
        category: "Frontend",
        description: "Component-based UI development",
        color: "from-cyan-500/20 to-blue-500/20",
    },
    {
        name: "JavaScript",
        category: "Language",
        description: "Interactive web applications",
        color: "from-yellow-500/20 to-amber-500/20",
    },
    {
        name: "Tailwind CSS",
        category: "Styling",
        description: "Responsive utility-first styling",
        color: "from-teal-500/20 to-cyan-500/20",
    },
    {
        name: "Vite",
        category: "Tooling",
        description: "Modern frontend development",
        color: "from-purple-500/20 to-violet-500/20",
    },
    {
        name: "Git & GitHub",
        category: "Workflow",
        description: "Version control and source code",
        color: "from-slate-500/20 to-gray-500/20",
    },
    {
        name: "Cloudflare Pages",
        category: "Deployment",
        description: "Frontend hosting and deployment",
        color: "from-orange-500/20 to-amber-500/20",
    },
    {
        name: "Cloudflare D1",
        category: "Database",
        description: "SQL database for web applications",
        color: "from-orange-500/20 to-red-500/20",
    },
    {
        name: "Linux & OS",
        category: "IT Operations",
        description: "System troubleshooting and administration",
        color: "from-blue-500/20 to-indigo-500/20",
    },
    {
        name: "Networking & VPN",
        category: "Infrastructure",
        description: "Network configuration and connectivity troubleshooting",
        color: "from-emerald-500/20 to-teal-500/20",
    },
    {
        name: "IT Support",
        category: "Technical Support",
        description: "Hardware, software and user support",
        color: "from-blue-600/20 to-cyan-600/20",
    },
];

export const projects = [
    {
        id: "issuedesk",
        title: "IssueDesk",
        subtitle: "Office IT Issue Management",
        category: "Web Application",
        status: "In Development",
        description:
            "เว็บแอปพลิเคชันสำหรับแจ้งปัญหา IT ภายในองค์กร ติดตามสถานะงาน และช่วยให้การจัดการปัญหาเป็นระบบมากขึ้น",
        descriptionEn: "An office IT issue reporting and tracking application designed to organize support requests.",
        highlights: [
            "Issue reporting and tracking",
            "React-based responsive interface",
            "Cloudflare Pages and D1 integration",
        ],
        tags: ["React", "Tailwind CSS", "Cloudflare Pages", "D1"],
        githubUrl: "https://github.com/ghuninew1",
        demoUrl: null,
        featured: true,
    },
    {
        id: "react-image-converter",
        title: "React Image Converter",
        subtitle: "Browser-based Image Conversion",
        category: "Web Tool",
        status: "Built",
        description:
            "เครื่องมือแปลงและจัดการรูปภาพบนเบราว์เซอร์ รองรับการแปลงไฟล์ภาพและรวมไฟล์ผลลัพธ์เป็น ZIP โดยประมวลผลฝั่ง Client",
        descriptionEn: "A client-side image conversion tool with multiple image formats and ZIP export.",
        highlights: ["Client-side image processing", "AVIF conversion support", "ZIP export for converted files"],
        tags: ["React", "Vite", "Tailwind CSS", "AVIF", "JSZip"],
        githubUrl: "https://github.com/ghuninew1/React-Image-Converter",
        demoUrl: null,
        featured: true,
    },
    {
        id: "nexora",
        title: "Nexora",
        subtitle: "Private Cloud File Management",
        category: "Web Application",
        status: "Paused",
        description:
            "ต้นแบบเว็บจัดการไฟล์ส่วนตัวที่ได้รับแรงบันดาลใจจาก Nextcloud มีส่วนติดต่อสำหรับเรียกดูและจัดการไฟล์",
        descriptionEn:
            "A private-cloud-inspired file management interface with browsing and file organization features.",
        highlights: [
            "File browsing interface",
            "Folder and file management UI",
            "Upload queue and drag-and-drop workflow",
        ],
        tags: ["React", "Vite", "Tailwind CSS", "Cloudflare"],
        githubUrl: "https://github.com/ghuninew1",
        demoUrl: null,
        featured: true,
    },
];

export const timeline = [
    {
        id: "it-support",
        title: "IT Support & Technical Operations",
        titleTh: "งานดูแลระบบและสนับสนุนด้าน IT",
        description: "ดูแล แก้ไขปัญหา และสนับสนุนการใช้งานคอมพิวเตอร์ ซอฟต์แวร์ และระบบเครือข่าย",
        type: "Professional Focus",
    },
    {
        id: "web-development",
        title: "Web Development",
        titleTh: "พัฒนาเว็บแอปพลิเคชัน",
        description: "พัฒนาโปรเจกต์ด้วย React และ Vite พร้อมออกแบบ UI ที่ตอบสนองต่ออุปกรณ์หลายขนาด",
        type: "Development",
    },
    {
        id: "current-projects",
        title: "Building Practical Projects",
        titleTh: "พัฒนาโปรเจกต์ที่ใช้งานได้จริง",
        description: "สร้างและปรับปรุงโปรเจกต์ที่ผสานการพัฒนาเว็บไซต์เข้ากับประสบการณ์ด้าน IT",
        type: "Ongoing",
    },
];

export const contactInfo = {
    github: personalInfo.githubUrl,
    email: null,
    linkedin: null,
    location: personalInfo.location,
};
