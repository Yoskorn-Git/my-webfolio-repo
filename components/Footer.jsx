'use client'
import { Typography } from "@material-tailwind/react";

const currentYear = new Date().getFullYear();

export default function FooterWithSocialLinks() {
    return (
        <footer className="relative w-full">
            <div className="mx-auto w-full max-w-7xl px-8">
                <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
                    <Typography
                        variant="small"
                        className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
                    >
                        &copy; {currentYear} <a href="https://material-tailwind.com/">Yoskorn Lertratanakham</a>. All
                        Rights Reserved.
                    </Typography>
                    <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                    </div>
                </div>
            </div>
        </footer>
    );
}