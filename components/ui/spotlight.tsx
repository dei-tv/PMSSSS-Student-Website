'use client';
import React, { MouseEvent } from 'react';
import { SpotlightComponentProps } from '@/utils/types/core';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const Spotlight: React.FC<SpotlightComponentProps> = ({
    Byline,
    Title,
    Content,
}) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: MouseEvent<HTMLDivElement>) {
        let { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className="group relative max-w-md rounded-xl border border-border bg-card px-8 py-16 shadow-2xl"
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
                }}
            />
            <div>
                <h1 className="text-xl font-semibold leading-7 text-secondary">
                    {Byline}
                </h1>
                <h2 className="text-lg font-medium leading-6 text-primary">
                    {Title}
                </h2>
                <div className="mt-4 text-sm leading-6 text-border">
                    {Content}
                </div>
            </div>
        </div>
    );
};

export default Spotlight;
