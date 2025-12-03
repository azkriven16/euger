'use client'

import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { PixelBlast } from '@/components/ui/pixel-blast';

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-16 text-center">
            <PixelBlast
                enableRipples
                pixelSize={5}
                pixelSizeJitter={0.5}
                rippleIntensityScale={1.5}
                rippleSpeed={0.5}
                speed={0.6}
                transparent
                variant="square"
            />

            <div className="flex flex-col gap-6">
                <section className="border-grid relative">
                    <div className="container-wrapper">
                        <div className="container flex flex-col items-center gap-2 py-8 text-center md:py-16 lg:py-20 xl:gap-4">
                            <h1 className="max-w-4xl text-balance font-semibold text-primary leading-tighter tracking-tight lg:font-semibold lg:leading-[1.1] xl:text-5xl xl:tracking-tighter text-7xl!">
                                <span className="flex items-baseline gap-2 font-serif sm:gap-3">
                                    <span className="font-bold leading-[0.95] tracking-[-0.03em]">
                                        Audio
                                    </span>
                                    <span className="tracking-[-0.02em] opacity-90">UI</span>
                                </span>
                            </h1>

                            <p className="max-w-3xl text-balance text-base text-foreground sm:text-lg">
                                A set of accessible and composable Audio UI components. Built on top
                                of shadcn/ui, it's designed for you to copy, paste, and own.
                            </p>

                            <div className="flex w-full items-center justify-center gap-2 pt-2 **:data-[slot=button]:shadow-none">
                                <Button asChild size="sm">
                                    <Link href="/docs">
                                        Get Started
                                    </Link>
                                </Button>
                                <Button asChild size="sm" variant="ghost">
                                    <Link href="/docs/components">
                                        View Components
                                        <ChevronRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}