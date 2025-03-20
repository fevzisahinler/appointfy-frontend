"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function DashboardHeader() {
    return (
        <header className={cn("border-b bg-card text-card-foreground")}>
            <div className="container flex h-16 items-center justify-between">
                <div className="font-bold text-xl">
                    Appointfy
                </div>

                <div className="flex items-center space-x-2">
                    <Button variant="ghost" asChild>
                        <Link href="/account">
                            Profil
                        </Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href="/auth/login">
                            Çıkış Yap
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}
