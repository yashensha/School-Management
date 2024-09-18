"use client"; // Add this at the very top

import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/public/home.png",
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"]
      },
      {
        icon: "/public/teacher.png",
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"]
      },
      {
        icon: "/public//student.png",
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"]
      },
      {
        icon: "/public/parent.png",
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"]
      },
      {
        icon: "/public/subject.png",
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"]
      },
      {
        icon: "/public/class.png",
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"]
      },
      {
        icon: "/public/lesson.png",
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"]
      },
      {
        icon: "/public/exam.png",
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"]
      },
      {
        icon: "/public/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"]
      },
      {
        icon: "/public/result.png",
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"]
      },
      {
        icon: "/public/attendance.png",
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"]
      },
      {
        icon: "/public/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"]
      },
      {
        icon: "/public/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"]
      },
      {
        icon: "/public/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"]
      }
    ]
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/public/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"]
      },
      {
        icon: "/public/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"]
      },
      {
        icon: "/public/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"]
      }
    ]
  }
];

const MenuBar = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div key={i.title} className="flex flex-col gap-2">
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 "
            >
              <Image src={item.icon} width={20} height={20} alt={item.label} />
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MenuBar;
