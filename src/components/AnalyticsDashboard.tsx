"use client"
import { Card } from "@tremor/react";

interface AnalyticsDashboardProps {
    avgVisitorsPerDay: string;
    amtVisitorsToday: number;
}

const AnalyticsDashboard = ({ avgVisitorsPerDay, amtVisitorsToday }: AnalyticsDashboardProps) => {
    return <div className="flex flex-col gap-6">
        <div className="grid w-full mx-auto grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="w-full mx-auto max-w-xs">
                <p className="text-tremor-default text-dark-tremor-content">Avg. visitors/day</p>
                <p className="text-3xl text-white font-semibold">{avgVisitorsPerDay}</p>
            </Card>

            <Card className="w-full mx-auto max-w-xs">
                <p className="text-tremor-default text-dark-tremor-content">Visitors Today</p>
                <p className="text-3xl text-white font-semibold">{amtVisitorsToday}</p>
            </Card>
        </div>
    </div>
}

export default AnalyticsDashboard;