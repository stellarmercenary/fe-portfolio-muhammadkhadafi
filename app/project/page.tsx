// app/project/page.tsx
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "Project One",
        description: "Description for project one.",
        image: "/image/projects/Project-1.png",
        href: "/project-detail/1",
    },
    {
        id: 2,
        title: "Project Two",
        description: "Description for project two.",
        image: "/image/projects/Project-2.png",
        href: "/project-detail/2",
    },
    {
        id: 3,
        title: "Project Three",
        description: "Description for project three.",
        image: "/image/projects/Project-3.png",
        href: "/project-detail/3",
    },
];

export default function ProjectPage() {
    return (
       <></>
    );
}
