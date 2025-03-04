"use client"
import {BarChart, Card} from "@tremor/react";
import {analytics} from "@/utils/analytics";

interface AnalyticsDashboardProps {
    avgVisitorsPerDay: string;
    amtVisitorsToday: number;
    timeseriesPageviews: Awaited<ReturnType<typeof analytics.retrieveDays>>;
}

const AnalyticsDashboard = ({avgVisitorsPerDay, amtVisitorsToday, timeseriesPageviews}: AnalyticsDashboardProps) => {
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

            <Card>
                {timeseriesPageviews ? (
                    <BarChart
                        allowDecimals={false}
                        showAnimation
                        data = {
                            timeseriesPageviews.map((day) => ({
                                name: day.date,
                                Visitors: day.events.reduce((acc, curr) => {
                                    return acc + Object.values(curr)[0]!
                            }, 0),
                        }))}
                        categories={["Visitors"]}
                      index='name'
                    />
                ) : null}
            </Card>
        </div>
    </div>
}

export default AnalyticsDashboard;